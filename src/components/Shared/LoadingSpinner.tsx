const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-88px)]">
      <p className="text-lg sm:text-7xl font-bold">L</p>
      <div className="w-4 h-4 sm:w-12 sm:h-12 border-2 sm:border-8 border-dashed rounded-full animate-spin sm:mt-5 border-red-500"></div>
      <p className="text-lg sm:text-7xl font-bold">ading....</p>
    </div>
  );
};

export default LoadingSpinner;
