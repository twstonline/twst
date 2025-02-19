import React from 'react'

const Contact = () => {
  return (
    <div>
<section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-24 mx-auto">
        <div className="text-center">
            <p className="font-medium text-gray-900 dark:text-gray-100 font-manrope">Get in Touch</p>
            <h1 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white font-manrope">Connect With Our Style Team</h1>
            <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Have questions about our collections, sizing, or custom designs? Our fashion consultants are here to help you create your perfect look.</p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-16 lg:grid-cols-2">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                    <span className="inline-block p-3 text-gray-900 bg-gray-200 rounded-lg dark:bg-gray-700 dark:text-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                    </span>
                    <h2 className="mt-5 text-lg font-semibold text-gray-900 dark:text-white">Customer Care</h2>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">For order inquiries and returns</p>
                    <p className="mt-2 text-gray-900 dark:text-gray-100">support@atelier.com</p>
                </div>

                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                    <span className="inline-block p-3 text-gray-900 bg-gray-200 rounded-lg dark:bg-gray-700 dark:text-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                        </svg>
                    </span>
                    <h2 className="mt-5 text-lg font-semibold text-gray-900 dark:text-white">Showroom</h2>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">Schedule a private fitting</p>
                    <p className="mt-2 text-gray-900 dark:text-gray-100">455 Fashion Avenue, NYC</p>
                </div>

                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                    <span className="inline-block p-3 text-gray-900 bg-gray-200 rounded-lg dark:bg-gray-700 dark:text-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                    </span>
                    <h2 className="mt-5 text-lg font-semibold text-gray-900 dark:text-white">Design Studio</h2>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">Bespoke tailoring inquiries</p>
                    <p className="mt-2 text-gray-900 dark:text-gray-100">+1 (212) 555-0198</p>
                </div>

                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                    <span className="inline-block p-3 text-gray-900 bg-gray-200 rounded-lg dark:bg-gray-700 dark:text-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                    </span>
                    <h2 className="mt-5 text-lg font-semibold text-gray-900 dark:text-white">Press Inquiries</h2>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">For media and collaboration</p>
                    <p className="mt-2 text-gray-900 dark:text-gray-100">press@atelier.com</p>
                </div>
            </div>

            <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <form className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">First Name</label>
                            <input type="text" placeholder="Alexandra" className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-lg focus:ring-black focus:border-black dark:bg-gray-700 dark:border-gray-600" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Last Name</label>
                            <input type="text" placeholder="Rutherford" className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-lg focus:ring-black focus:border-black dark:bg-gray-700 dark:border-gray-600" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                        <input type="email" placeholder="alexandra@example.com" className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-lg focus:ring-black focus:border-black dark:bg-gray-700 dark:border-gray-600" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                        <select className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-lg focus:ring-black focus:border-black dark:bg-gray-700 dark:border-gray-600">
                            <option>Select inquiry type</option>
                            <option>Order Support</option>
                            <option>Custom Design</option>
                            <option>Wholesale Inquiry</option>
                            <option>Press & Collaboration</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                        <textarea rows="6" placeholder="Tell us about your style vision..." className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-lg focus:ring-black focus:border-black dark:bg-gray-700 dark:border-gray-600"></textarea>
                    </div>

                    <button className="w-full px-6 py-3.5 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 focus:ring-2 focus:ring-black focus:ring-offset-2 transition-all duration-300">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    </div>
</section>
  </div>
  )
}

export default Contact
