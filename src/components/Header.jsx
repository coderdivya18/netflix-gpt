import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice.js";
import { LOGO } from "../utils/constants.js";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

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

  return (
    <header className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src={LOGO}
          alt="Netflix Logo"
          className="w-[140px] object-contain"
        />
      </div>

      {/* User Controls */}
      <div className="flex items-center gap-4">
        {user && (
          <div className="flex items-center gap-3">
            <img
              alt="user profile"
              className="w-10 h-10 object-cover rounded"
              src={user?.photoURL}
            />
            <button
              onClick={handleSignOut}
              className="bg-red-600 text-white font-medium px-3 py-1 rounded hover:bg-red-700 transition"
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
