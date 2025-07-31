import React, { useState } from "react";
import { Search } from "lucide-react";
import heroImage from "../assets/images/netflix-hero-image.jpg";
import languageConstants from "../utils/languageConstants.js";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai.js";
import { API_OPTIONS } from "../utils/constants.js";
import { addGptMovieResult } from "../utils/gptSearchSlice.js";
import { mockGptResponse } from "../utils/mockDataGpt/mockGptResponse.js"; // ✅ Adjust the path if needed

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector((store) => store.config.language);
  const [searchQuery, setSearchQuery] = useState("");

  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS,
    );
    const json = await data.json();
    console.log(json.results);
    return json.results;
  };

  //GPT Search function
  const handleGPTSearchClick = async () => {
    if (!searchQuery.trim()) return;

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query: " +
      searchQuery +
      ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    let gptContent = "";

    try {
      // ✅ Use real OpenAI only in production
      const isDev = import.meta.env.MODE === "development";

      const gptResponse = isDev
        ? mockGptResponse
        : await openai.chat.completions.create({
            messages: [{ role: "user", content: gptQuery }],
            model: "gpt-3.5-turbo",
          });

      gptContent = gptResponse.choices?.[0]?.message?.content;
    } catch (error) {
      console.warn("❌ GPT API failed, falling back to mock data:", error);

      // ✅ Fallback mock
      gptContent =
        mockGptResponse.choices?.[0]?.message?.content ||
        "Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan";
    }

    if (gptContent) {
      const gptMovies = gptContent.split(",").map((movie) => movie.trim());

      try {
        const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
        const tmdbResults = await Promise.all(promiseArray);

        dispatch(
          addGptMovieResult({
            movieNames: gptMovies,
            movieResults: tmdbResults,
          }),
        );
      } catch (err) {
        console.error("❌ Error fetching TMDB results:", err);
      }
    }
  };

  return (
    <div className="relative w-full h-screen">
      {/* ✅ Background Image */}
      <img
        src={heroImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* ✅ Optional Gradient Overlay for text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/90 z-10" />

      {/* ✅ Search Box Container */}
      <div className="relative z-20 flex items-center justify-center h-full px-4">
        <div className="w-full max-w-3xl transform -translate-y-40">
          <form
            className="flex items-center bg-white rounded-full shadow-xl overflow-hidden focus-within:ring-2 ring-red-500"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="text"
              className="flex-grow px-6 py-3 text-gray-800 placeholder-gray-500 focus:outline-none"
              placeholder={
                languageConstants[selectedLanguage].gptSearchPlaceholder
              }
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleGPTSearchClick()}
            />
            <button
              onClick={handleGPTSearchClick}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 flex items-center gap-2 transition duration-200 cursor-pointer"
            >
              <Search size={18} />
              {languageConstants[selectedLanguage].search}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GptSearchBar;
