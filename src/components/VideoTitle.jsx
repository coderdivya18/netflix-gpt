import React from "react";
import { Play, Info } from "lucide-react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full max-w-screen min-h-[60vh] md:min-h-screen px-4 sm:px-8 md:px-24 py-8 md:py-0 absolute text-white bg-gradient-to-r from-black/80 via-black/40 to-transparent flex items-center">
      <div className="max-w-2xl sm:mt-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-100 drop-shadow-lg leading-tight">
          {title}
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-300 py-4">
          {overview}
        </p>
        <div className="flex flex-wrap gap-3 mt-6">
          <button className="flex items-center gap-2 bg-white text-black px-6 py-3 text-md font-semibold rounded hover:bg-gray-300 transition">
            <Play size={20} className="fill-black" /> Play
          </button>
          <button className="flex items-center gap-2 bg-gray-700/80 text-white px-6 py-3 text-md font-semibold rounded hover:bg-gray-600 transition">
            <Info size={20} /> More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
