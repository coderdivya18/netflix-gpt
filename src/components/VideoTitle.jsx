import React from "react";
import { Play, Info } from "lucide-react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-2 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <div className="w-3/8">
        <h1 className="text-5xl lg:text-6xl font-extrabold drop-shadow-md text-gray-300">
          {title}
        </h1>
        <p className="text-lg text-gray-300 py-6 leading-relaxed line-clamp-4">
          {overview}
        </p>

        <div className="flex gap-4 mt-4">
          {/* Play Button */}
          <button className="flex items-center gap-2 bg-white text-black px-6 py-3 text-lg font-semibold rounded-md hover:bg-gray-300 transition">
            <Play size={20} className="fill-black" /> Play
          </button>

          {/* More Info Button */}
          <button className="flex items-center gap-2 bg-gray-600/70 text-gray-200 px-6 py-3 text-lg font-semibold rounded-md hover:bg-gray-700 transition">
            <Info size={20} className="text-gray-200" /> More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
