import { FormEvent, useState } from "react";
import { toast } from "sonner";

const SearchForm = () => {
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();

    console.log({ location, startDate, endDate });
    toast.success(
      "Thank you for using search feature. We will be adding Search feature real soon",
      { duration: 3000 }
    );
  };
  return (
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
  );
};

export default SearchForm;
