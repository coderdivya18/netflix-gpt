import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle.jsx";
import VideoBackground from "./VideoBackground.jsx";

const MainContainer = () => {
  // ✅ Get movie data from Redux store
  const movies = useSelector((store) => store.movies.nowPlayingMovies);

  if (!movies) return;

  const mainMovie = movies[0];
  //console.log("Main Movie", mainMovie);

  return (
    <div>
      <VideoTitle
        title={mainMovie?.original_title}
        overview={mainMovie?.overview}
      />
      <VideoBackground movieId={mainMovie?.id} />
    </div>
  );
};

export default MainContainer;
