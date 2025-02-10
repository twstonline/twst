import React from 'react'
import {review} from '../../utils/constant/review'
import { AiFillStar } from 'react-icons/ai'

const ProductReview = ({data}) => {
  return (
    <div>
         <div className="py-12 px-4 sm:px-8 lg:px-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold mb-4">4.6</h1>
        <div className="flex justify-center items-center gap-1 text-yellow-500">
          {[...Array(5)].map((_, index) => (
            <AiFillStar key={index} className={index === 4 ? "text-gray-400" : ""} />
          ))}
        </div>
        <p className="mt-2 text-sm text-gray-500">Reviews on <span className="text-blue-600">Google</span></p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {review.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center p-4 border rounded-lg shadow-sm">
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 rounded-full mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
            <p className="text-sm text-gray-600">{item.review}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default ProductReview
