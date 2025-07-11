import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants.js";
import { addTrendingMovies } from "../utils/moviesSlice.js";

const useTrendingMovies = () => {
  const dispatch = useDispatch();
  const getTrendingMovies = async () => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated",
        API_OPTIONS,
      );
      const data = await res.json();
      //console.log(data?.results);
      dispatch(addTrendingMovies(data?.results));
    } catch (e) {
      console.log("Failed to fetch movies", e.message);
    }
  };
  useEffect(() => {
    getTrendingMovies();
  }, []);
};

export default useTrendingMovies;
