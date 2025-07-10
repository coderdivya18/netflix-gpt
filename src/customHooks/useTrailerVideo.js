import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants.js";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice.js";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  const fetchTrailerVideo = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS,
      );
      const json = await res.json();

      // Filter for YouTube trailer
      const filtered = json.results?.find(
        (video) => video.type === "Trailer" && video.site === "YouTube",
      );
      dispatch(addTrailerVideo(filtered || json?.results?.[0]));
    } catch (e) {
      console.log("Unable to fetch the trailer video", e);
    }
  };

  useEffect(() => {
    if (movieId) fetchTrailerVideo();
  }, [movieId]);
};

export default useTrailerVideo;
