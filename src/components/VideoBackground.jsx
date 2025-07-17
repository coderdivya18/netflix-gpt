import React from "react";
import useTrailerVideo from "../customHooks/useTrailerVideo.js";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  useTrailerVideo(movieId);
  const trailer = useSelector((store) => store.movies.trailerVideo);
  if (!trailer) {
    return (
      <div className="w-screen aspect-video bg-black flex items-center justify-center text-white text-xl">
        Loading trailer...
      </div>
    );
  }

  return (
    <div>
      {trailer && (
        <iframe
          className="absolute inset-0 w-full h-full object-cover"
          src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&loop=1&playlist=${trailer.key}&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3
`}
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default VideoBackground;
