import React from "react";
import MovieList from "./MovieList.jsx";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // console.log(movies);
  return (
    <div className="bg-black">
      <div className="-mt-60 relative z-10 pl-12">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular "} movies={movies.popularMovies} />
        <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
        <MovieList title={"Trending"} movies={movies.trendingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
