import React from "react";
import netflixLogo from "../assets/images/Netflix_Logo_PMS.png";
import netflixIcon from "../assets/images/netflix-smiley-icon.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <header className="flex justify-between items-center px-8 py-4 absolute w-full z-10">
      <div className="flex items-center gap-2">
        <img
          src={netflixLogo}
          alt="Netflix Logo"
          className="w-35 object-contain"
        />
      </div>
      <div className="flex gap-4">
        {/*<select className="bg-transparent text-white border px-3 py-1 rounded">*/}
        {/*  <option value="en" className="text-black">*/}
        {/*    English*/}
        {/*  </option>*/}
        {/*  <option value="hi" className="text-black">*/}
        {/*    Hindi*/}
        {/*  </option>*/}
        {/*</select>*/}
        {user && (
          <div className="flex gap-3">
            <img
              alt="userIcon"
              className="w-10 h-10 object-contain rounded"
              src={user?.photoURL}
            />
            <button
              className="bg-red-600 text-white font-medium px-2 py-1 rounded cursor-pointer"
              onClick={handleSignOut}
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
