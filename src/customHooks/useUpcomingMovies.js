import React, { useEffect, useRef } from "react";
import { API_OPTIONS } from "../utils/constants.js";
import { addUpcomingMovies } from "../utils/moviesSlice.js";
import { useDispatch } from "react-redux";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming",
        API_OPTIONS,
      );
      const data = await res.json();
      //console.log(data?.results);
      dispatch(addUpcomingMovies(data?.results));
    } catch (e) {
      console.error("Failed to fetch movies", e);
    }
  };
  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
