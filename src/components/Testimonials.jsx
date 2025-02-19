import React from "react";

const FeatureCards = () => {
  const features = [
    {
      title: "Seamless Lead Generation",
      description:
        "Effortlessly gather and manage leads with our lead collection tools. From capturing potential customers' information to nurturing relationships, our platform simplifies the lead generation process for maximized conversions.",
      bgColor: "bg-pink-50",
      icon: (
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 bg-purple-700 rounded-lg transform -rotate-6">
            <div className="w-full h-3/4 bg-purple-600 rounded-t-lg p-2">
              <div className="w-full h-16 bg-purple-500 rounded mb-2"></div>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
              <div className="w-8 h-8 bg-pink-400 rounded-full"></div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Targeted Campaign Excellence",
      description:
        "Amplify your brand's online presence through our robust digital marketing solutions. Reach your target audience across various channels, engage with compelling content, and drive meaningful interactions that convert casual visitors into loyal customers.",
      bgColor: "bg-blue-50",
      icon: (
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="w-40 h-24 bg-blue-600 rounded-lg flex items-center justify-center">
                <div className="absolute -right-4 -top-4 w-12 h-12 bg-blue-500 rounded-lg transform rotate-12">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-sm transform -rotate-45"></div>
                  </div>
                </div>
              </div>
              <div className="absolute -right-6 -top-6 flex space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-4 h-4 bg-blue-400 rounded-full"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full px-4 py-8 -mt-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgColor} rounded-3xl p-8 transition-transform duration-300 hover:scale-105`}
            >
              <div className="h-full flex flex-col">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {feature.title}
                </h2>
                <p className="text-gray-600 mb-8 text-sm md:text-base">
                  {feature.description}
                </p>
                <div className="mt-auto flex justify-center">
                  {feature.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;
