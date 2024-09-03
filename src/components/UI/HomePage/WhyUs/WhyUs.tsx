const WhyUs = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 text-center mb-8">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Best Prices */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="flex justify-center mb-4">
              <span className="inline-block bg-blue-700 text-white p-4 rounded-full">
                {/* Icon placeholder */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M3 3a1 1 0 011-1h12a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V3z" />
                  <path d="M10 12l-3-3h6l-3 3z" />
                </svg>
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
            <p className="text-gray-600">
              We offer competitive pricing on all car rentals, ensuring you get
              the best value for your money.
            </p>
          </div>

          {/* Wide Selection */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="flex justify-center mb-4">
              <span className="inline-block bg-blue-700 text-white p-4 rounded-full">
                {/* Icon placeholder */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-11a1 1 0 112 0v2a1 1 0 11-2 0V7zm0 4a1 1 0 112 0v2a1 1 0 11-2 0v-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
            <p className="text-gray-600">
              Choose from a diverse range of vehicles, from economy to luxury,
              to fit your needs and preferences.
            </p>
          </div>

          {/* 24/7 Support */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="flex justify-center mb-4">
              <span className="inline-block bg-blue-700 text-white p-4 rounded-full">
                {/* Icon placeholder */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 5a3 3 0 013-3h10a3 3 0 013 3v10a3 3 0 01-3 3H5a3 3 0 01-3-3V5zm4 3a1 1 0 112 0v2a1 1 0 11-2 0V8zm4 0a1 1 0 112 0v2a1 1 0 11-2 0V8zm4 0a1 1 0 112 0v2a1 1 0 11-2 0V8z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">
              Our customer support team is available around the clock to assist
              you with any questions or concerns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
