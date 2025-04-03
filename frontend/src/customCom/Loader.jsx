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
    <div className="flex flex-col  items-center justify-center h-screen w-full bg-white/10 backdrop-blur-xl">
      <div className=" mb-6 p-4  flex flex-col items-center backdrop-blur-sm rounded-2xl shadow-md bg-white/50">
        <img
          src="/logo.jpg"
          alt="Loading..."
          className="w-20 h-20 object-contain rounded-full animate-pulse shadow-md"
        />
        <p>Pitch and Thread</p>
      </div>
      <div className="w-64 h-3 bg-gray-300/60 rounded-full overflow-hidden shadow-md">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full transition-all duration-300 shadow-md"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-gray-900 mt-4 font-semibold text-lg tracking-wide animate-pulse drop-shadow-md">
        {progress}% Loading...
      </p>
    </div>
  );
};

export default Loader;
