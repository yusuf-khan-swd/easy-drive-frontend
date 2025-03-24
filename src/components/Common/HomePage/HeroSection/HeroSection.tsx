"use client";

import banner_car from "@/assets/banner_car.png";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-gray-100 py-12 lg:py-24 px-6 lg:px-12">
      {/* Left side: Text content */}
      <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left mb-8 lg:mb-0 lg:pr-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
          Find Your Perfect Ride with EasyDrive
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Book now and hit the road with our top-rated cars
        </p>

        {/* Search Form */}
        {/* <SearchForm /> */}

        {/* Book Now Button */}
        <Link href="/cars">
          <button className="bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-700">
            See More
            {/* Book Now */}
          </button>
        </Link>
      </div>

      {/* Right side: Car image */}
      <div className="flex-1 hidden lg:flex justify-center items-center">
        <img
          src={banner_car.src}
          alt="Car Banner"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default HeroSection;
