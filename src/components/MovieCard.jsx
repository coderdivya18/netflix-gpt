import React from "react";
import { IMG_CDN_URL } from "../utils/constants.js";

const MovieCard = ({ movieInfo }) => {
  if (!movieInfo?.poster_path) return null;

  return (
    <div className="w-36 pr-4 flex-shrink-0">
      <img
        src={IMG_CDN_URL + movieInfo.poster_path}
        alt={movieInfo.title}
        className="w-full rounded-md transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
};

export default MovieCard;
