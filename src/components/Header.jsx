import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice.js";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants.js";
import { toggleGptSearchView } from "../utils/gptSearchSlice.js";
import { setPreferredLanguage } from "../utils/configSlice.js";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearchView = useSelector(
    (store) => store.gptSearch.showGptSearchView,
  );

  const handleSignOut = () => {
    signOut(auth)
      .then(() => navigate("/"))
      .catch(() => navigate("/error"));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGPTSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageSelection = (e) => {
    dispatch(setPreferredLanguage(e.target.value));
  };

  return (
    <header className="absolute w-full px-4 md:px-8 py-4 bg-gradient-to-b from-black/90 to-transparent z-30">
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        {/* Logo */}
        <img
          src={LOGO}
          alt="Netflix Logo"
          className="w-[100px] md:w-[140px] object-contain"
        />

        {/* User Controls */}
        {user && (
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            {/* Language Selector for GPT Search*/}
            {showGptSearchView && (
              <select
                className="bg-black/50 text-white border border-white px-2 py-1 rounded cursor-pointer hover:bg-black"
                onChange={handleLanguageSelection}
                defaultValue="en"
              >
                {SUPPORTED_LANGUAGES.map((value) => (
                  <option key={value.identifier} value={value.identifier}>
                    {value.name}
                  </option>
                ))}
              </select>
            )}

            <button
              className="text-white border border-white px-4 py-1 rounded hover:bg-white hover:text-black transition cursor-pointer"
              onClick={handleGPTSearchClick}
            >
              {showGptSearchView ? "Home" : " GPT Search"}
            </button>
            <img
              alt="user profile"
              className="w-10 h-10 object-cover rounded-full"
              src={user?.photoURL}
            />
            <button
              onClick={handleSignOut}
              className="bg-red-600 text-white font-medium px-4 py-1 rounded hover:bg-red-700 transition"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
