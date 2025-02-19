import React from "react";

const About = () => {
  return (
    <div>
      <section className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                  Redefining Contemporary Style Through Sustainable Craftsmanship
                </h2>
                <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                  At the heart of our brand lies a commitment to merging cutting-edge design with ethical practices. We carefully curate premium materials and partner with skilled artisans to create timeless pieces that transcend seasonal trends. Our collections celebrate individuality while maintaining a cohesive vision of modern elegance.
                </p>
              </div>
              <button className="sm:w-fit w-full px-3.5 py-2 bg-black hover:bg-gray-800 transition-all duration-300 ease-in-out rounded-md shadow-sm justify-center items-center flex">
                <span className="px-1.5 text-white text-sm font-medium leading-6">
                  Shop the Collection
                </span>
              </button>
            </div>
            <img
              className="lg:mx-0 mx-auto h-full rounded-lg object-cover"
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80"
              alt="Contemporary fashion collection"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
