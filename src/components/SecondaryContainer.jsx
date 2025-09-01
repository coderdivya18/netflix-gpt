import React from "react";
import MovieList from "./MovieList.jsx";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  if (!movies) return null;

  return (
    <div>
      <div className="relative z-20 -mt-32 sm:-mt-40 md:-mt-44 px-4 sm:px-6 md:px-12 space-y-8">
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
        <MovieList title="Popular" movies={movies.popularMovies} />
        <MovieList title="Upcoming" movies={movies.upcomingMovies} />
        <MovieList title="Trending" movies={movies.trendingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
