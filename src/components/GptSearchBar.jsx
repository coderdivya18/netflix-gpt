import React, { useState } from "react";
import { Search } from "lucide-react";
import heroImage from "../assets/images/netflix-hero-image.jpg";
import languageConstants from "../utils/languageConstants.js";
import { useSelector } from "react-redux"; // ✅ Adjust the path if needed

const GptSearchBar = () => {
  const selectedLanguage = useSelector((store) => store.config.language);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      // GPT logic goes here
    }
  };

  return (
    <div className="relative w-full h-screen">
      {/* ✅ Background Image */}
      <img
        src={heroImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* ✅ Optional Gradient Overlay for text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/90 z-10" />

      {/* ✅ Search Box Container */}
      <div className="relative z-20 flex items-center justify-center h-full px-4">
        <div className="w-full max-w-3xl transform -translate-y-40">
          <div className="flex items-center bg-white rounded-full shadow-xl overflow-hidden focus-within:ring-2 ring-red-500">
            <input
              type="text"
              className="flex-grow px-6 py-3 text-gray-800 placeholder-gray-500 focus:outline-none"
              placeholder={
                languageConstants[selectedLanguage].gptSearchPlaceholder
              }
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <button
              onClick={handleSearch}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 flex items-center gap-2 transition duration-200"
            >
              <Search size={18} />
              {languageConstants[selectedLanguage].search}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GptSearchBar;
