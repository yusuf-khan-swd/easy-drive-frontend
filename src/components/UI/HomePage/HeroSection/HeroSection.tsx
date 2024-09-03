"use client";

import banner_car from "@/assets/banner_car.png";
import { FormEvent, useState } from "react";

const HeroSection = () => {
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();

    console.log({ location, startDate, endDate });
  };

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
        <form
          onSubmit={handleSearch}
          className="w-full max-w-md lg:max-w-lg bg-white rounded-md shadow-md p-4 mb-4"
        >
          {/* Location Input Field */}
          <div className="flex flex-col lg:flex-row items-center mb-2 lg:mb-4">
            <input
              type="text"
              placeholder="Enter Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md mb-2 lg:mb-0 focus:outline-none focus:ring-2 focus:ring-blue-700"
            />
          </div>

          {/* Date Input Fields */}
          <div className="flex flex-col lg:flex-row w-full mb-4">
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full lg:w-1/2 p-2 border border-gray-300 rounded-md mb-2 lg:mb-0 lg:mr-2 focus:outline-none focus:ring-2 focus:ring-blue-700"
            />
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full lg:w-1/2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
            />
          </div>

          {/* Search Button */}
          <button
            type="submit"
            className="w-full bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-700"
          >
            Search
          </button>
        </form>

        {/* Book Now Button */}
        <button className="bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-700">
          Book Now
        </button>
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
