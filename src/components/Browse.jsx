import React from "react";
import Header from "./Header.jsx";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies.js";
import MainContainer from "./MainContainer.jsx";
import SecondaryContainer from "./SecondaryContainer.jsx";
import usePopularMovies from "../customHooks/usePopularMovies.js";
import useUpcomingMovies from "../customHooks/useUpcomingMovies.js";
import useTrendingMovies from "../customHooks/useTrendingMovies.js";
import GPTSearch from "./GPTSearch.jsx";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGPTSearch = useSelector(
    (store) => store.gptSearch.showGptSearchView,
  );

  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTrendingMovies();

  return (
    <div className={showGPTSearch ? "" : "bg-black"}>
      <Header />
      {showGPTSearch ? (
        <GPTSearch />
      ) : (
        <div className="relative">
          <MainContainer />
          <SecondaryContainer />
        </div>
      )}
    </div>
  );
};

export default Browse;
