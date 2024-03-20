import React from "react";

const ShimmerEffect = () => {
  // Array to generate 8 shimmer cards
  const shimmerCards = [0, 1, 2, 3, 4, 5, 6, 7]

  return (
    <div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
      {shimmerCards.map((index) => (
        <div key={index} className="flex items-center h-96  p-2 md:p-5 justify-between bg-white shadow-md rounded-md animate-pulse">
          <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center w-full">
            <div className="w-[30%] h-28 bg-gray-300 rounded"></div>
            <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
              <div className="h-6 bg-gray-300 rounded w-3/4"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6"></div>
              <div className="h-4 bg-gray-300 rounded w-4/6"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              <div className="flex items-center justify-between">
                <div className="font-bold text-lg text-gray-600">$0.00</div>
                <div className="text-red-800 bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerEffect;
