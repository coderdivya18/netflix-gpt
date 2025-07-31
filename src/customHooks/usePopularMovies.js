import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants.js";
import { addPopularMovies } from "../utils/moviesSlice.js";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const getPopularMovies = async () => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        API_OPTIONS,
      );
      const data = await res.json();
      //console.log(data);
      dispatch(addPopularMovies(data?.results));
    } catch (e) {
      console.error("Failed to fetch movies", e);
    }
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
