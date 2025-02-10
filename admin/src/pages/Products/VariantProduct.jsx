import { Autocomplete, Button, Chip, Grid, TextField, ToggleButton, Checkbox, FormControlLabel, IconButton, Box } from '@mui/material';
import Input from 'components/Input';
import PageLayout from 'layouts/PageLayout';
import React, { useEffect, useState } from 'react';
import Typography from 'components/Typography';
import toast from 'react-hot-toast';
import { useGetProductById, useAddVariantProduct, useDeleteProduct, useGetSimilarProducts } from 'queries/ProductQuery';
import { useNavigate, useParams } from 'react-router-dom';
import ImageList from './ImageList';
import { Delete } from '@mui/icons-material';

const VariantProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const { data, isLoading } = useGetProductById({ id });
  // const [selectedTags, setSelectedTags] = useState([]);
  // const tags = ["featured", "popular", "limited_time_deal", "most_loved"];

  const [product, setProduct] = useState([])
  const [variantProduct, setVariantProduct] = useState([])
  const { data: respo } = useGetSimilarProducts({ pageNo: 1, pageCount: 100 });


  const [isSingleType, setIsSingleType] = useState(false);

  useEffect(() => {
    if (data?.data) {
      console.log('data?.data', data?.data);

      data?.data?.similarProduct && setProduct(data?.data?.similarProduct)
      data?.data?.variantProduct && setVariantProduct([...data?.data?.variantProduct, data?.data])

      setDetails(data.data);
      // setSelectedTags(data.data.tags || []);
      data?.data.sizes.length > 0 && setIsSingleType(true);
    }
  }, [data]);

  const { mutateAsync: addVariantProduct, isLoading: loading } = useAddVariantProduct();
  const { mutateAsync: deleteProduct, isLoading: deleting } = useDeleteProduct();

  const handleChange = (e) => {
    setDetails(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    try {
      const formData = new FormData();
      const image = details?.image?.filter((image) => typeof (image) === 'string');
      formData.append('image', JSON.stringify(image));
      details?.image?.forEach((image) => {
        if (typeof (image) === 'object') {
          formData.append('images', image, image.name);
        }
      });
      // details?.image?.forEach((image) => {
      //   formData.append('images', image, image.name);
      // });
      for (const key in details) {
        if (details.hasOwnProperty(key) && key !== "_id" && key !== "category" && key !== "image" && key !== "feature" && key !== "spec" && key !== "sizes" && key !== "fitAndCare" && key !== "similarProduct" && key !== "variantProduct") {
          formData.append(key, details[key]);
        }
      }
      formData.append('category', details?.category?._id);
      // formData.append('tags', JSON.stringify(selectedTags));
      product.forEach((product) => formData.append('similarProduct', product._id));
      variantProduct.forEach((product) => formData.append('variantProduct', product._id));
      details?.fitAndCare?.forEach(fit => {
        if (fit === '') {

        } else {
          return formData.append('fitAndCare', fit)
        }
      });
      details?.feature?.forEach(feat => {
        if (feat === '') {

        } else {
          return formData.append('feature', feat)
        }
      });
      details?.spec?.forEach(specif => {
        if (specif === '') {

        } else {
          return formData.append('spec', specif)
        }
      });
      details?.sizes?.forEach(si => {
        if (si.sizes === '') {

        } else {
          formData.append('sizes', si.sizes);
          formData.append('sizeQuantity', si.quantity);
        }

      });

      addVariantProduct(formData)
        .then((res) => {
          if (res) {
            toast.success(res?.message ?? "Product Added successfully");
            navigate('/products');
          }
        })
        .catch((err) => {
          toast.error(err?.message ?? "Something went wrong");
        });
    } catch (error) {
      console.error(error);
    }
  };

  // const handleDelete = () => {
  //   deleteProduct(details)
  //     .then((res) => {
  //       if (res) {
  //         toast.success(res?.message ?? "Product deleted successfully");
  //         navigate('/products');
  //       }
  //     })
  //     .catch((err) => {
  //       toast.error(err?.message ?? "Something went wrong");
  //     });
  // };


  const handleFitAndCareChange = (index, value) => {
    const newfeature = [...details.fitAndCare];
    newfeature[index] = value;
    setDetails(prevData => ({ ...prevData, fitAndCare: newfeature }));
  };
  const handleAddFitAndCare = () => {
    setDetails(prevData => ({ ...prevData, fitAndCare: [...prevData.fitAndCare, ''] }));
  };
  const handleRemoveFitAndCare = (index) => {
    const newfeature = details.fitAndCare.filter((_, i) => i !== index);
    setDetails(prevData => ({ ...prevData, fitAndCare: newfeature }));
  };


  const handleFeatureChange = (index, value) => {
    const newfeature = [...details.feature];
    newfeature[index] = value;
    setDetails(prevData => ({ ...prevData, feature: newfeature }));
  };
  const handleAddFeature = () => {
    setDetails(prevData => ({ ...prevData, feature: [...prevData.feature, ''] }));
  };
  const handleRemoveFeature = (index) => {
    const newfeature = details.feature.filter((_, i) => i !== index);
    setDetails(prevData => ({ ...prevData, feature: newfeature }));
  };



  const handlespecChange = (index, value) => {
    const newspec = [...details.spec];
    newspec[index] = value;
    setDetails(prevData => ({ ...prevData, spec: newspec }));
  };
  const handleAddspec = () => {
    setDetails(prevData => ({ ...prevData, spec: [...prevData.spec, ''] }));
  };
  const handleRemovespec = (index) => {
    const newspec = details.spec.filter((_, i) => i !== index);
    setDetails(prevData => ({ ...prevData, spec: newspec }));
  };


  const handleAddsizes = () => {
    setDetails(prevData => ({ ...prevData, sizes: [...prevData.sizes, { sizes: '', quantity: '' }] }));
  };
  const handlesizesChange = (index, field, value) => {
    const newsizes = [...details.sizes];
    newsizes[index] = { ...newsizes[index], [field]: value };;
    setDetails(prevData => ({ ...prevData, sizes: newsizes }));
  };

  const handleRemovesizes = (index) => {
    const newsizes = details.sizes.filter((_, i) => i !== index);
    setDetails(prevData => ({ ...prevData, sizes: newsizes }));
  };
  useEffect(() => {
    if (isSingleType) {
      details?.stock && setDetails(prevData => ({ ...prevData, stock: '' }));
    } else {
      details?.sizes && setDetails(prevData => ({ ...prevData, sizes: [{ sizes: '', quantity: '' }] }));
    }
  }, [isSingleType])
  console.log('details12', details);

  return (
    <PageLayout title={'Variant Product'}>
      {isLoading ? <Typography fontSize={14} sx={{ paddingX: 5 }}>loading...</Typography> :
        <Grid container spacing={5} display={'flex'} direction={'row'} p={8}>
          <Grid item container spacing={2} xs={12} sm={12} md={6} py={5}>
            <Grid item xs={12} sm={12} md={6}>
              <Input
                required
                placeholder="Item name"
                id="name"
                name="name"
                value={details?.name || ''}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Input
                placeholder="Brand name"
                name="brand"
                value={details?.brand || ''}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                required
                placeholder="Item subheading"
                id="subheading"
                name="subheading"
                value={details?.subheading || ''}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Input
                required
                disabled
                placeholder="Category"
                id="Category"
                name="Category"
                value={details?.category?.name || ''}
              />
            </Grid>
            {!isSingleType && <Grid item xs={12} sm={4}>
              <Input
                placeholder="Enter Quantity"
                name="stock"
                value={details?.stock || ''}
                onChange={handleChange}
              />
            </Grid>}

            <Grid item xs={12} ml={2} container alignItems="center">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isSingleType}
                    onChange={() => setIsSingleType(!isSingleType)}
                    name="isSingleType"
                  />
                }
                label="Add Sizes"
              />
              <Typography variant="caption">( check if product have size variants )</Typography>
            </Grid>
            {isSingleType && <Grid item xs={12} >
              <Grid container direction="row">
                {details?.sizes?.map((sizes, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Box key={index} display="flex" alignItems="center">
                      <TextField
                        // label={`sizes ${index + 1}`}
                        placeholder={`sizes ${index + 1}`}
                        value={sizes.sizes}
                        onChange={(e) => handlesizesChange(index, 'sizes', e.target.value)}
                        fullWidth
                        margin="normal"
                        required
                        style={{ marginRight: '5px' }}
                      />
                      <TextField
                        placeholder="quantity"
                        value={sizes.quantity}
                        onChange={(e) => handlesizesChange(index, 'quantity', e.target.value)}
                        fullWidth
                        margin="normal"
                        required
                      />
                      {details.sizes.length > 1 && (
                        <IconButton onClick={() => handleRemovesizes(index)}>
                          <Delete />
                        </IconButton>
                      )}
                    </Box>
                  </Grid>
                ))}
                <Button onClick={handleAddsizes} variant="contained" color="primary" fullWidth className="mt-4">
                  Add Sizes
                </Button>
              </Grid>
            </Grid>}


            <Grid item xs={12}>
              <Input
                required
                placeholder="Item Material"
                id="material"
                name="material"
                value={details?.material || ''}
                onChange={handleChange}
              />
            </Grid>


            <Grid item xs={12}>
              {details?.fitAndCare?.map((fitAndCare, index) => (
                <Box key={index} display="flex" alignItems="center">
                  <TextField
                    placeholder={`Fit & Care ${index + 1}`}
                    value={fitAndCare}
                    onChange={(e) => handleFitAndCareChange(index, e.target.value)}
                    fullWidth
                    margin="normal"
                    required
                  />
                  {details.fitAndCare.length > 1 && (
                    <IconButton onClick={() => handleRemoveFitAndCare(index)}>
                      <Delete />
                    </IconButton>
                  )}
                </Box>
              ))}
              <Button onClick={handleAddFitAndCare} variant="contained" color="primary" fullWidth className="mt-4">
                Add Fit & Care
              </Button>
            </Grid>

            <Grid item xs={12}>
              {details?.feature?.map((feature, index) => (
                <Box key={index} display="flex" alignItems="center">
                  <TextField
                    // label={`feature ${index + 1}`}
                    placeholder={`feature ${index + 1}`}
                    value={feature}
                    onChange={(e) => handleFeatureChange(index, e.target.value)}
                    fullWidth
                    margin="normal"
                    required
                  />
                  {details.feature.length > 1 && (
                    <IconButton onClick={() => handleRemoveFeature(index)}>
                      <Delete />
                    </IconButton>
                  )}
                </Box>
              ))}
              <Button onClick={handleAddFeature} variant="contained" color="primary" fullWidth className="mt-4">
                Add Feature
              </Button>
            </Grid>
            <Grid item xs={12}>
              {details?.spec?.map((spec, index) => (
                <Box key={index} display="flex" alignItems="center">
                  <TextField
                    // label={`spec ${index + 1}`}
                    placeholder={`spec ${index + 1}`}
                    value={spec}
                    onChange={(e) => handlespecChange(index, e.target.value)}
                    fullWidth
                    margin="normal"
                    required
                  />
                  {details.spec.length > 1 && (
                    <IconButton onClick={() => handleRemovespec(index)}>
                      <Delete />
                    </IconButton>
                  )}
                </Box>
              ))}
              <Button onClick={handleAddspec} variant="contained" color="primary" fullWidth className="mt-4">
                Add specification
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Input
                placeholder="MRP (Maximum Retail Price)"
                name="price"
                value={details?.price || ''}
                onChange={handleChange}
              />
            </Grid>
            {/* <Grid item xs={12} sm={4}>
              <Input
                placeholder="Discount (%)"
                name="discount"
                value={details?.discount || ''}
                onChange={handleChange}
              />
            </Grid> */}
            <Grid item xs={12} sm={6}>
              <Input
                placeholder="Enter Sale Rate"
                name="sale_rate"
                value={details?.sale_rate || ''}
                onChange={handleChange}
              />
            </Grid>

            {/* <Grid item xs={12}>
              <Autocomplete
                multiple
                id="tags-select"
                options={tags}
                value={selectedTags}
                onChange={(event, newValue) => {
                  setSelectedTags(newValue);
                }}
                renderTags={(value, getTagProps) =>
                  value.map((option, index) => (
                    <Chip variant="outlined" key={index} label={option} {...getTagProps({ index })} />
                  ))
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Select Tags"
                  />
                )}
              />
            </Grid> */}
            <Grid item xs={12}>
              <Input
                id="description"
                placeholder="Nila Chronicles"
                name="description"
                value={details?.description || ''}
                onChange={handleChange}
                multiline
                rows={5}
              />
            </Grid>
            <Grid item xs={12}>
              <Autocomplete
                id="Product-select"
                multiple
                options={respo?.data || []}
                value={variantProduct}
                onChange={(event, newValue) => {
                  setVariantProduct(newValue);
                }}
                autoHighlight
                getOptionLabel={(option) => option.name}
                renderOption={(props, option) => (
                  <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                    <img
                      loading="lazy"
                      width="20"
                      src={`${process.env.REACT_APP_API_URL}/uploads/${option?.image[0]}`}
                    />
                    <Typography color="inherit" variant="caption">
                      {option?.name} <br />
                      {option?.brand}
                    </Typography>
                    <Typography sx={{ ml: 'auto' }} color={option?.isAvailable ? 'success' : 'error'} variant="caption">
                      {option?.isAvailable ? 'available' : 'NA'}
                    </Typography>
                  </Box>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Choose Variant product"
                    inputProps={{
                      ...params.inputProps,
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Autocomplete
                id="Product-select"
                multiple
                options={respo?.data || []}
                value={product}
                onChange={(event, newValue) => {
                  setProduct(newValue);
                }}
                autoHighlight
                getOptionLabel={(option) => option.name}
                renderOption={(props, option) => (
                  <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                    <img
                      loading="lazy"
                      width="20"
                      src={`${process.env.REACT_APP_API_URL}/uploads/${option?.image[0]}`}
                    />
                    <Typography color="inherit" variant="caption">
                      {option?.name} <br />
                      {option?.brand}
                    </Typography>
                    <Typography sx={{ ml: 'auto' }} color={option?.isAvailable ? 'success' : 'error'} variant="caption">
                      {option?.isAvailable ? 'available' : 'NA'}
                    </Typography>
                  </Box>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Choose Similar product"
                    inputProps={{
                      ...params.inputProps,
                    }}
                  />
                )}
              />
            </Grid>

            {/* <Grid item xs={12} sm={6}>
              <Typography variant="caption">
                Product status &nbsp;
              </Typography>
              <ToggleButton
                value={details?.isAvailable}
                selected={details?.isAvailable}
                onChange={() => {
                  setDetails(prev => ({ ...prev, isAvailable: !details?.isAvailable }))
                }}
              >
                {details?.isAvailable ? 'Active' : 'Blocked'}
              </ToggleButton>
            </Grid> */}
            {/* <Grid item xs={12} sm={12} mt={'auto'}>
              <Grid item xs={12}>
                <Button onClick={handleSubmit}>Add Variant Product</Button>
              </Grid>
            </Grid> */}
          </Grid>
          {/* <Grid item container spacing={2} xs={12} sm={12} md={6}>
            <ImageList details={details?.image} setDetails={setDetails} />
          </Grid> */}

          <Grid item container spacing={2} xs={12} sm={12} md={6}>
            <Grid sx={{ width: '100%' }}>
              <ImageList data={details?.image} dispatch={setDetails} />
            </Grid>
            <Grid item xs={12} sm={6}></Grid>
            <Grid item xs={12} sm={6} mt={'auto'}>
              <Button sx={{ mr: 0, width: '100%' }} onClick={handleSubmit} variant='contained'>
                Add Variant Product
              </Button>
            </Grid>
          </Grid>
        </Grid>}
    </PageLayout>
  );
};

export default VariantProduct;
