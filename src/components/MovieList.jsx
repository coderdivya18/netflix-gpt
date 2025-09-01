import React from "react";
import MovieCard from "./MovieCard.jsx";

const MovieList = ({ title, movies }) => {
  return (
    <div className="pb-4">
      <h2 className="text-xl sm:text-2xl font-semibold py-3 text-white">
        {title}
      </h2>

      {!movies || movies.length === 0 ? (
        <p className="text-gray-400">No movies to show</p>
      ) : (
        <div
          className="flex overflow-x-auto scrollbar-hide space-x-4 px-1 sm:px-2"
          aria-label={`${title} movies list`}
        >
          {movies.map((movie) => (
            <div key={movie.id} className="flex-shrink-0">
              <MovieCard movieInfo={movie} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieList;
