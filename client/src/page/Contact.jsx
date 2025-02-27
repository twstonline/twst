import React from 'react'
import { Phone, MapPin, Mail } from 'lucide-react';


const Contact = () => {
  return (
    <div className="w-full bg-white">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row">
      {/* Image section */}
      <div className="w-full md:w-1/2">
        <img 
          src="https://images.unsplash.com/photo-1626160200951-fc4b4f8d4de9?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Fashion model in casual wear" 
          className="w-full h-auto object-cover"
        />
      </div>
      
      {/* Contact form section */}
      <div className="w-full md:w-1/2 p-8 md:p-12">
        <h2 className="text-4xl font-light text-gray-900 mb-12">Contact Us</h2>
        
        <div className="flex mb-12">
          <div className="w-1/2">
            {/* Contact details */}
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-black rounded-full p-2 mr-4">
                  <MapPin size={18} className="text-white" />
                </div>
                <div className="text-sm">
                  <p className="font-medium">Impulse Corporate Tower</p>
                  <p className="text-gray-600">Plot No. 41, Echelon Institutional Area</p>
                  <p className="text-gray-600">Sector 32, Gurgaon - 122001, Haryana, India</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-black rounded-full p-2 mr-4">
                  <Phone size={18} className="text-white" />
                </div>
                <div className="text-sm">
                  <p className="font-medium">+91 955 526 32 63</p>
                  <p className="text-gray-600">(Mon - Fri, 10:00-6:30 IST)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-black rounded-full p-2 mr-4">
                  <Phone size={18} className="text-white" />
                </div>
                <div className="text-sm">
                  <p className="font-medium">+91 987 399 95 94</p>
                  <p className="text-gray-600">(Mon - Fri, 10:00-6:30 IST)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-black rounded-full p-2 mr-4">
                  <Mail size={18} className="text-white" />
                </div>
                <div className="text-sm">
                  <p className="font-medium">contact@andamen.com</p>
                  <p className="text-gray-600">(Typical response time: 24 hours)</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-1/2">
            {/* Empty space to match layout */}
          </div>
        </div>
        
        {/* Contact form */}
        <div>
          <h3 className="text-lg mb-6">Drop us a message</h3>
          
          <form className="space-y-4">
            <input 
              type="text" 
              placeholder="Your Name *" 
              className="w-full border border-gray-300 p-3 focus:outline-none focus:border-gray-500"
              required
            />
            
            <input 
              type="email" 
              placeholder="Your Email *" 
              className="w-full border border-gray-300 p-3 focus:outline-none focus:border-gray-500"
              required
            />
            
            <input 
              type="tel" 
              placeholder="Contact No. *" 
              className="w-full border border-gray-300 p-3 focus:outline-none focus:border-gray-500"
              required
            />
            
            <textarea 
              placeholder="Message" 
              rows={5}
              className="w-full border border-gray-300 p-3 focus:outline-none focus:border-gray-500"
            />
            
            <button 
              type="submit" 
              className="bg-black text-white px-6 py-3 text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Contact
