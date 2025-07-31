import React from "react";
import GptSearchBar from "./GptSearchBar.jsx";
import GptMovieSuggestions from "./GptMovieSuggestions.jsx";

const GPTSearch = () => {
  return (
    <div>
      <GptSearchBar />
      <div className="-mt-25 relative z-30">
        <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default GPTSearch;
