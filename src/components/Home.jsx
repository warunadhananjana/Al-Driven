import heroImage from "../assets/3d-rendering-biorobots-concept.jpg";

const Marketing = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between px-8 py-16 gap-8">
      {/* Left Content */}
      <div className="max-w-xl w-full mt-21">
        <div className="text-left space-y-8 mt-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="text-purple-600 block mb-4">AI-Driven</span>
            <span className="relative block">marketing</span>
          </h1>

          <p className="text-gray-600 text-lg text-left mt-8">
            Elevate your brand to new heights with our cutting-edge marketing
            strategies. We specialize in delivering tailored solutions that
            captivate your audience and amplify your online presence.
          </p>

          <div className="flex flex-wrap gap-4 mt-12">
            <button className="px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
              Get Started
            </button>
            <button className="px-8 py-3 border border-gray-300 rounded-full flex items-center gap-2 hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12l14 0M12 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Watch a demo
            </button>
          </div>

          <div className="mt-12">
            <p className="text-sm text-gray-600 mb-2">
              Tested software reviewers
            </p>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-5 h-5 text-yellow-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.4 7.4-6-4.6-6 4.6 2.4-7.4-6-4.6h7.6z" />
                </svg>
              ))}
              <span className="ml-2 font-medium">4.9/5.0</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Content - Hero Image */}
      <div className="relative w-full md:w-1/2 flex justify-center -mt-12">
        <div className="relative w-full max-w-[500px] aspect-square">
          <img
            src={heroImage}
            alt="AI Marketing Bot"
            className="w-full h-full object-contain"
          />
          <div className="absolute -top-4 left-4 bg-pink-100 p-2 rounded-lg">
            {/* SVG removed */}
          </div>
        </div>
      </div>

      {/* Brand Logos */}
      <div className="absolute bottom-[-85px] left-4 right-4 md:bottom-[-45px] md:left-8 md:right-8 z-50">
        <div className="max-w-6xl mx-auto bg-[#14171F] rounded-2xl px-4 md:px-8 py-4 md:py-9">
          <div className="grid grid-cols-3 md:flex md:flex-nowrap justify-between items-center gap-2 md:gap-10">
            <img
              src="/sony.svg"
              alt="Sony"
              className="w-auto h-2 md:h-4 brightness-0 invert mx-auto"
            />
            <img
              src="/spotify.svg"
              alt="Spotify"
              className="w-auto h-2 md:h-4 brightness-0 invert mx-auto"
            />
            <img
              src="/canon.svg"
              alt="Canon"
              className="w-auto h-2 md:h-4 brightness-0 invert mx-auto"
            />
            <img
              src="/walmart.svg"
              alt="Walmart"
              className="w-auto h-2 md:h-4 brightness-0 invert mx-auto hidden md:block"
            />
            <img
              src="/spotify.svg"
              alt="Spotify"
              className="w-auto h-2 md:h-4 brightness-0 invert mx-auto hidden md:block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
