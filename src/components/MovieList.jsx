import React from "react";
import MovieCard from "./MovieCard.jsx";

const MovieList = ({ title, movies }) => {
  //console.log(title, movies);
  return (
    <div className="pb-2">
      <h1 className="text-2xl font-medium py-4 text-white">{title}</h1>

      {!movies || movies.length === 0 ? (
        <p className="text-gray-400">No movies to show</p>
      ) : (
        <div className="flex overflow-x-auto scrollbar-hide space-x-4">
          {movies.map((movie) => (
            <MovieCard movieInfo={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieList;
