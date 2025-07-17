import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle.jsx";
import VideoBackground from "./VideoBackground.jsx";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);

  if (!movies || movies.length === 0) return null;

  const mainMovie = movies[2];

  return (
    <div className="relative h-[100vh] w-full">
      {/* Background video */}
      <VideoBackground movieId={mainMovie?.id} />

      {/* Gradient overlay for smooth blending */}
      <div className="absolute bottom-0 w-full h-48 bg-gradient-to-t from-black to-transparent z-10" />

      {/* Title and buttons */}
      <div className="absolute top-0 w-full z-20">
        <VideoTitle
          title={mainMovie?.original_title}
          overview={mainMovie?.overview}
        />
      </div>
    </div>
  );
};

export default MainContainer;
