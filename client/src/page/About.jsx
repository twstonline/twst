import React from 'react';

const PhilosophySection = () => {
  return (
    <div className="text-white w-full">
      {/* Hero section with parallax effect */}
      <div className="relative h-[40vh] bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523381294911-8d3cead0bd8a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl md:text-8xl font-light tracking-wide text-center bg-gradient-to-r from-amber-400 to-white bg-clip-text text-transparent animate-fade-in">
            Get to know us.
          </h1>
        </div>
      </div>
      
      {/* Philosophy content with animated reveal */}
      <div className="max-w-4xl mx-auto px-6 text-center py-24">
        <div className="mb-16 animate-slide-up">
          <h2 className="uppercase text-sm tracking-widest mb-16 text-gray-950">THE twst MINDSET</h2>
          
          <h3 className="text-4xl md:text-5xl text-gray-950 mb-16 tracking-wide font-medium">
            Stay <span className="text-amber-400 animate-pulse">Twsted</span>.
          </h3>
          
          <p className="text-black leading-relaxed text-lg md:text-xl font-light px-12">
            At TWST, fashion is how you want it. No rules, no limits, just pure self-expression. 
            We believe style should be bold, effortless, and unapologetically yours. That's why 
            our motto is 'stay twsted', because being different isn't just accepted here, it's 
            celebrated.
          </p>
        </div>
        
        {/* Animated triangle icon */}
        <div className="flex justify-center mt-16 animate-bounce">
          <div className="w-8 h-8 border-2 border-amber-300 rotate-45 transform"></div>
        </div>
      </div>

      {/* What We Stand For section with hover effects */}
      <div className="w-full bg-white py-12 md:py-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
          {/* Image section with zoom effect */}
          <div className="w-full md:w-1/2 px-6 md:px-8 overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1416339698674-4f118dd3388b?q=80&w=2962&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Businessman in suit adjusting cufflinks" 
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          {/* Text content section */}
          <div className="w-full md:w-1/2 px-6 md:px-12 pt-8 md:pt-0">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">WHAT WE STAND FOR</h2>
            
            <p className="text-lg text-gray-700 font-light italic mb-6">
              Made in India, Made to Stand Out
            </p>
            
            <div className="space-y-6 text-gray-700 font-light">
              <p className="hover:text-amber-500 transition-colors duration-300">
                We take pride in being a brand that's Made in India. From sourcing the finest materials 
                to ensuring top-tier craftsmanship, we focus on delivering quality without compromise.
              </p>
              
              <p className="hover:text-amber-500 transition-colors duration-300">
                Every piece is designed to stand out, offering fashion that speaks to individuality and 
                personal style. We believe in creating designs that feel fresh, unique, and truly yours.
              </p>
            </div>
            
            {/* Animated button */}
            <div className="mt-12">
              <button className="relative overflow-hidden border border-gray-900 px-8 py-3 text-sm uppercase tracking-wide text-black hover:text-white transition-all duration-500 group">
                <span className="relative z-10">OUR STORY</span>
                <span className="absolute inset-0 w-0 bg-amber-500 transition-all duration-500 group-hover:w-full"></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* The TWST Crew section with gradient background */}
      <div className="w-full bg-gradient-to-br from-white to-amber-50 py-12 md:py-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
          {/* Text content section */}
          <div className="w-full md:w-1/2 px-6 md:px-12">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">THE twst CREW</h2>
            
            <p className="text-lg text-gray-700 font-light italic mb-6">
              Built by friends, made for individuals
            </p>
            
            <div className="space-y-6 text-gray-700 font-light">
              <p className="hover:text-amber-500 transition-colors duration-300">
                TWST is built by two childhood friends who share a passion for creating something different. 
                What drives us? The excitement of knowing that people can finally get what they want - designs 
                that feel fresh, unique, and truly theirs.
              </p>
              
              <p className="hover:text-amber-500 transition-colors duration-300">
                We started TWST because we wanted designs that matched our vibe, but we couldn't find them 
                anywhere. So, we made them ourselves. This brand is for everyone who refuses to blend in. 
                Keep pushing boundaries, keep standing out—stay twsted.
              </p>
            </div>
          </div>
          
          {/* Image section with hover effect */}
          <div className="w-full md:w-1/2 px-6 md:px-8 mt-8 md:mt-0 overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Two friends working together" 
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhilosophySection;