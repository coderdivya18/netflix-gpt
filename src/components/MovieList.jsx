import React from "react";
import MovieCard from "./MovieCard.jsx";

const MovieList = ({ title, movies }) => {
  //console.log(title, movies);
  return (
    <div className="pb-2">
      <h1 className="text-2xl font-medium py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard movieInfo={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
