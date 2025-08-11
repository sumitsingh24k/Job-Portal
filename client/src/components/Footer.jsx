import React from 'react'

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-blue-950 text-white">
      {/* Main CTA Section */}
      <div className="py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Find Your Next Opportunity?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto px-4">
          Join thousands of professionals who have found their dream jobs through JobCircuit.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
            Get Started Now
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
            Learn More
          </button>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-gradient-to-r from-blue-950 to-blue-900 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200 text-sm mb-4 md:mb-0">
            © 2024 JobCircuit. All rights reserved.
          </p>
          
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="#" className="text-blue-200 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors">
              Cookie Policy
            </a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors">
              Help Center
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer