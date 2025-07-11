import React from "react";
import Header from "./Header.jsx";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies.js";
import MainContainer from "./MainContainer.jsx";
import SecondaryContainer from "./SecondaryContainer.jsx";
import usePopularMovies from "../customHooks/usePopularMovies.js";
import useUpcomingMovies from "../customHooks/useUpcomingMovies.js";
import useTrendingMovies from "../customHooks/useTrendingMovies.js";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTrendingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
