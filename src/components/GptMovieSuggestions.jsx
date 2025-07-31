import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList.jsx";

const GptMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gptSearch);
  console.log(gpt);
  const { movieResults, movieNames } = gpt;
  if (!movieNames) return null;

  return (
    <div className="p-4 -mt-70 bg-black text-white bg-opacity-90 z-90">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
