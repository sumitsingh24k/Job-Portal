import React from 'react';
import { FaUser, FaSearch, FaCheck } from 'react-icons/fa';

const Mid = () => {
  return (
    <div className="py-16 ">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800">How It Works</h1>
          <p className="mt-2 text-gray-600">Get hired in 3 simple steps</p>
        </div>

        {/* Steps Section */}
        <div className="flex justify-center gap-20 flex-wrap">
          {/* Step 1 */}
          <div className="max-w-xs text-center">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaUser className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-xl text-black mb-4">1. Create Profile</h3>
            <p className="text-gray-600 leading-relaxed">
              Build your professional profile and upload your resume to get started
            </p>
          </div>

          {/* Step 2 */}
          <div className="max-w-xs text-center">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaSearch className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-xl text-black mb-4">2. Search & Apply</h3>
            <p className="text-gray-600 leading-relaxed">
              Browse thousands of jobs and apply to positions that match your skills
            </p>
          </div>

          {/* Step 3 */}
          <div className="max-w-xs text-center">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaCheck className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-xl text-black mb-4">3. Get Hired</h3>
            <p className="text-gray-600 leading-relaxed">
              Connect with employers and land your dream job with our support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mid;