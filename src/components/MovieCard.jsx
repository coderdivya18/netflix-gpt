import React from "react";
import { IMG_CDN_URL } from "../utils/constants.js";

const MovieCard = ({ movieInfo }) => {
  if (!movieInfo?.poster_path) return null;
  return (
    <div className="w-38 pr-4 ">
      <img
        src={IMG_CDN_URL + movieInfo?.poster_path}
        alt={movieInfo?.title}
        className="w-38 pb-3 rounded-md"
      />
    </div>
  );
};

export default MovieCard;
