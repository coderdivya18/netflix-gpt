import React from "react";
import useTrailerVideo from "../customHooks/useTrailerVideo.js";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  useTrailerVideo(movieId);
  const trailer = useSelector((store) => store.movies.trailerVideo);
  if (!trailer) return <div>Loading trailer...</div>;

  return (
    <div>
      {trailer && (
        <iframe
          className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;
