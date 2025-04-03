import React, { useEffect, useState } from "react";

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return oldProgress + 5;
      });
    }, 200);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black bg-opacity-80 backdrop-blur-md">
      <div className="relative mb-6">
        <img
          src="/logo.jpg"
          alt="Loading..."
          className="w-40 h-40 object-contain rounded-full animate-spin-slow"
        />
        <div className="absolute inset-0 flex items-center justify-center"></div>
      </div>
      <div className="w-64 h-3 bg-gray-700 rounded-full overflow-hidden shadow-lg">
        <div
          className="h-full bg-gradient-to-r from-red-500 to-yellow-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-white mt-4 font-bold text-lg tracking-wide animate-pulse">
        {progress}% Loading...
      </p>
    </div>
  );
};

export default Loader;
