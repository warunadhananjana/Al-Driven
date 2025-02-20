import React from "react";

const Feature = () => {
  return (
    <div id="feature" className="page-container">
      {/* Main Container */}
      <div className="w-full px-4 py-12 mt-32 md:mt-48 bg-white">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Discover Our Comprehensive
            <br />
            Suite of Features
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Our platform is designed to empower your business with a
            comprehensive suite of features that streamline your marketing
            efforts and supercharge your growth.
          </p>
        </div>

        {/* Feature Card */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            {/* Left Content */}
            <div className="w-full md:w-1/2 pt-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-left">
                Harness Insights for Success
              </h2>
              <p className="text-gray-600 text-sm md:text-base text-left">
                Uncover valuable insights and trends from your data with our
                advanced analytics tools. Make informed decisions, refine your
                strategies, and stay ahead of the competition by leveraging the
                wealth of information at your fingertips.
              </p>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                {/* Dashboard illustration */}
                <div className="bg-white rounded-xl shadow-lg p-4 transform transition-transform hover:scale-105">
                  {/* Graph */}
                  <div className="bg-blue-100 rounded-lg p-4 mb-4">
                    <div className="h-24 flex items-end space-x-2">
                      <div className="w-1/4 h-1/3 bg-pink-400 rounded-t"></div>
                      <div className="w-1/4 h-2/3 bg-purple-400 rounded-t"></div>
                      <div className="w-1/4 h-full bg-blue-400 rounded-t"></div>
                      <div className="w-1/4 h-1/2 bg-indigo-400 rounded-t"></div>
                    </div>
                  </div>
                  {/* List items */}
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                  </div>
                  {/* Floating elements */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full"></div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-pink-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
