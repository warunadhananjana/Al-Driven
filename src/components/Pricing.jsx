import React from "react";

const AdTrackingSection = () => {
  return (
    <div className="w-full px-4 py-12 mt-16 bg-pink-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left side - Illustration */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full max-w-sm mx-auto">
              {/* Main video player frame */}
              <div className="bg-purple-600 rounded-2xl p-4 shadow-lg">
                {/* Video player header */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-pink-300"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-pink-300"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-pink-300"></div>
                  </div>
                </div>

                {/* Video player content */}
                <div className="bg-purple-500 rounded-lg aspect-video relative">
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-purple-600 border-b-8 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>

                {/* Like button */}
                <div className="absolute -right-4 -bottom-4">
                  <div className="bg-green-500 p-3 rounded-full shadow-lg">
                    <div className="w-6 h-6 text-white">👍</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Navigating Success through Precision Ad Tracking
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Monitor and optimize your advertising campaigns with our advanced
              tracking tools. Get detailed insights into performance metrics,
              audience engagement, and conversion rates to maximize your return
              on investment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdTrackingSection;
