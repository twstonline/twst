import React from 'react';

const PhilosophySection = () => {
  return (
    <div className=" text-white w-full">
      {/* Header section */}
      <div className="py-24 text-center bg-gray-950">
        <h1 className="text-5xl font-light tracking-wide">Get to know us.</h1>
      </div>
      
      {/* White space */}
      <div className="bg-white h-24"></div>
      
      {/* Philosophy content */}
      <div className="max-w-4xl mx-auto px-6 text-center py-16">
        <div className="mb-16">
          <h2 className="uppercase text-sm tracking-widest mb-16 text-gray-950">OUR PHILOSOPHY</h2>
          
          <h3 className="text-3xl text-gray-950 mb-16 tracking-wide">
            We Were Born To <span className="text-amber-400">Stand Out</span>.
          </h3>
          
          <p className="text-black leading-relaxed text-lg font-light px-12">
            At TWST, we believe fashion is a powerful expression of individuality, 
            confidence, and artistry. Our philosophy centers on crafting timeless, high-
            quality designs that merge modern trends with enduring elegance while 
            prioritizing sustainability through ethical practices and eco-friendly 
            materials. By fostering creativity and embracing conscious craftsmanship, we 
            aim to empower our customers to celebrate their unique style while 
            contributing to a more thoughtful and sustainable future.
          </p>
        </div>
        
        {/* Triangle icon */}
        <div className="flex justify-center mt-16">
          <div className="w-8 h-8 border-2 border-amber-300 rotate-45 transform"></div>
        </div>
      </div>
      <div className="w-full bg-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row">
        {/* Image section */}
        <div className="w-full md:w-1/2 px-6 md:px-8">
          <img 
            src="https://images.unsplash.com/photo-1416339698674-4f118dd3388b?q=80&w=2962&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Businessman in suit adjusting cufflinks" 
            className="w-full h-auto object-cover"
          />
        </div>
        
        {/* Text content section */}
        <div className="w-full md:w-1/2 px-6 md:px-12 pt-8 md:pt-0">
          <h2 className="text-4xl font-light text-gray-900 mb-4">Our Ethos</h2>
          
          <p className="text-lg text-gray-700 font-light italic mb-6">
            fashion is more than just style
          </p>
          
          <div className="space-y-6 text-gray-700 font-light">
            <p>
              At Twst, we believe fashion is more than just style—it's a celebration of individuality,
              creativity, and self-expression.
            </p>
            
            <p>
              Our ethos is rooted in empowering everyone to embrace their unique essence through
              innovative design, accessible luxury, and a commitment to inclusivity. From showcasing
              emerging talent to collaborating with renowned artists, we aim to be a platform
              where creativity thrives and boundaries are redefined. Sustainability and ethical practices
              are at the core of everything we do, ensuring that our impact is as beautiful as the designs
              we create.
            </p>
          </div>
          
          {/* Button */}
          <div className="mt-12">
            <button className="border border-gray-900 px-8 py-3 text-sm uppercase tracking-wide text-black hover:bg-gray-100 hover:text-amber-500 transition-colors duration-300 ease-in-out">
              OUR HERITAGE COLLECTION
            </button>
          </div>
        </div>
        
      </div>
     
    </div>



    
    </div>

  );
};

export default PhilosophySection;