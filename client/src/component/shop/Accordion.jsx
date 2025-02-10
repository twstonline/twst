import React, { useState } from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutline360 } from "react-icons/md";
import { FaHandHoldingDollar } from "react-icons/fa6";

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-center">
        <div className="flex flex-col items-center justify-center p-4 border rounded-lg hover:shadow-md transition-shadow duration-300">
          <MdOutline360 size={32} className="text-red-500" />
          <p className="mt-2 font-medium">60 Day Returns</p>
        </div>

        <div className="flex flex-col items-center justify-center p-4 border rounded-lg hover:shadow-md transition-shadow duration-300">
          <CiDeliveryTruck size={32} className="text-blue-500" />
          <p className="mt-2 font-medium">Free Delivery</p>
        </div>

        <div className="flex flex-col items-center justify-center p-4 border rounded-lg hover:shadow-md transition-shadow duration-300">
          <FaHandHoldingDollar size={32} className="text-green-500" />
          <p className="mt-2 font-medium">COD Available</p>
        </div>
      </div>
      <div className="mt-8">
        {items?.description &&
          <div className="border-b">
            <button
              className="w-full flex justify-between text-left text-gray-700 text-sm font-medium py-4"
              onClick={() => toggleAccordion(0)}
            >
              {'Description'}
              <span>{openIndex === 0 ? "▼" : "➔"}</span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${openIndex === 0 ? "max-h-40" : "max-h-0"
                }`}
            >
              <div className="text-gray-600 text-sm px-2 py-2">
                {items?.description}
              </div>
            </div>
          </div>}
          {items?.fitAndCare &&
          <div className="border-b">
            <button
              className="w-full flex justify-between text-left text-gray-700 text-sm font-medium py-4"
              onClick={() => toggleAccordion(2)}
            >
              {'Fit And Care'}
              <span>{openIndex === 2 ? "▼" : "➔"}</span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${openIndex === 2 ? "max-h-40" : "max-h-0"
                }`}
            >
              <div className="text-gray-600 text-sm px-2 py-2">
                {items?.fitAndCare?.map(val=>
                  <li>{val}</li>
                )}
              </div>
            </div>
          </div>}
          {items?.feature &&
          <div className="border-b">
            <button
              className="w-full flex justify-between text-left text-gray-700 text-sm font-medium py-4"
              onClick={() => toggleAccordion(1)}
            >
              {'Features'}
              <span>{openIndex === 1 ? "▼" : "➔"}</span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${openIndex === 1 ? "max-h-40" : "max-h-0"
                }`}
            >
              <div className="text-gray-600 text-sm px-2 py-2">
                {items?.feature?.map(val=>
                  <li>{val}</li>
                )}
              </div>
            </div>
          </div>}
          
          {items?.spec &&
          <div className="border-b">
            <button
              className="w-full flex justify-between text-left text-gray-700 text-sm font-medium py-4"
              onClick={() => toggleAccordion(3)}
            >
              {'Specification'}
              <span>{openIndex === 3 ? "▼" : "➔"}</span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${openIndex === 3 ? "max-h-40" : "max-h-0"
                }`}
            >
              <div className="text-gray-600 text-sm px-2 py-2">
                {items?.spec?.map(val=>
                  <li>{val}</li>
                )}
              </div>
            </div>
          </div>}
      </div>
      {/* <div className="mt-8 bg-gray-200 p-4 rounded-md">
        <p className="text-sm font-medium">CHECK DELIVERY</p>
        <div className="flex mt-2">
          <input
            type="text"
            placeholder="Enter Pin Code"
            className="border p-2 w-full rounded-l-md focus:outline-none"
          />
          <button className="bg-black text-white px-4 rounded-r-md">
            CHECK
          </button>
        </div>
      </div> */}
    </>
  );
};

export default Accordion;
