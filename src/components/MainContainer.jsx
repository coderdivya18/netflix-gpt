import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle.jsx";
import VideoBackground from "./VideoBackground.jsx";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);

  if (!movies || movies.length < 3) return null; // fallback for insufficient data

  const mainMovie = movies[2];

  return (
    <div className="relative min-h-screen w-full">
      {/* Background Video */}
      <VideoBackground movieId={mainMovie?.id} />

      {/* Dark Gradient Overlay (bottom) */}
      <div className="absolute bottom-0 w-full h-48 bg-gradient-to-t from-black to-transparent z-10" />

      {/* Movie Title + CTA */}
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
