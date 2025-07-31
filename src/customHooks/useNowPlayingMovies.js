import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants.js";
import { addNowPlayingMovies } from "../utils/moviesSlice.js";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies,
  );

  const getNowPlayingMovies = async () => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing",
        API_OPTIONS,
      );
      const data = await res.json();
      //console.log(data?.results);
      dispatch(addNowPlayingMovies(data?.results));
    } catch (e) {
      console.log("Failed to fetch movies", e);
    }
  };

  useEffect(() => {
    if (!nowPlayingMovies) {
      getNowPlayingMovies();
    }
  }, []);
};

export default useNowPlayingMovies;
