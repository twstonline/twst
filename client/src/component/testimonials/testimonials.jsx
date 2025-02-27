import React, { useState } from 'react';

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      quote: "Partnering with organization was one of the best decisions we've made for our business. Their website template is sleek, easy to customize, and optimizes performance on all devices. Our customers have been praising the new design, and we've noticed improved engagement metrics across the board.",
      name: "MICHAEL TURNER",
      position: "Product Manager at CloudSync",
      rating: 4,
      maxRating: 5
    },
    {
      quote: "The team delivered exceptional results that exceeded our expectations. Their attention to detail and responsive communication made the entire process seamless.",
      name: "SARAH JOHNSON",
      position: "Marketing Director at TechVision",
      rating: 5,
      maxRating: 5
    },
    {
      quote: "Working with this company transformed our online presence completely. The intuitive design has significantly improved our user experience.",
      name: "DAVID CHEN",
      position: "CEO at InnovateCorp",
      rating: 4,
      maxRating: 5
    },
    {
      quote: "I can't recommend their services enough. The responsive design works flawlessly across all platforms.",
      name: "EMILY RODRIGUEZ",
      position: "Digital Strategist at GrowthLabs",
      rating: 5,
      maxRating: 5
    },
    {
      quote: "Their professional approach and technical expertise helped us achieve exactly what we were looking for.",
      name: "JAMES WILSON",
      position: "Operations Manager at FutureTech",
      rating: 4,
      maxRating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Single testimonial card */}
        <div className="flex flex-col md:flex-row bg-white rounded shadow-sm">
          {/* Image */}
          <div className="w-full md:w-1/3 h-48 md:h-auto">
            <img 
              src="/api/placeholder/400/500" 
              alt="Testimonial person" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Testimonial content */}
          <div className="w-full md:w-2/3 p-4 md:p-8 relative">
            <div className="absolute top-2 right-6 text-amber-400 text-6xl">"</div>
            <p className="text-gray-700 text-sm md:text-base mt-6 mb-6">
              {testimonials[currentSlide].quote}
            </p>
            
            <div>
              <h3 className="font-bold text-gray-800 text-sm md:text-base mt-4">
                {testimonials[currentSlide].name}
              </h3>
              <p className="text-gray-500 text-xs md:text-sm">
                {testimonials[currentSlide].position}
              </p>
              
              <div className="flex items-center mt-2">
                <div className="flex">
                  {Array.from({ length: testimonials[currentSlide].maxRating }).map((_, index) => (
                    <svg 
                      key={index} 
                      className={`w-4 h-4 md:w-5 md:h-5 ${index < testimonials[currentSlide].rating ? 'text-amber-400' : 'text-gray-200'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-gray-600 text-sm">
                  {testimonials[currentSlide].rating}/{testimonials[currentSlide].maxRating}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation controls */}
        <div className="flex justify-center items-center mt-8">
          <button 
            onClick={prevSlide}
            className="text-amber-500 hover:text-amber-600 transition-colors"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="flex space-x-3 md:space-x-4 mx-4 md:mx-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-amber-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          
          <button 
            onClick={nextSlide}
            className="text-amber-500 hover:text-amber-600 transition-colors"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;