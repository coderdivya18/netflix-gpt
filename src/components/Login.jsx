import React, { useRef, useState } from "react";
import Header from "./Header.jsx";
import heroImage from "../assets/images/netflix-hero-image.jpg";
import { checkValidData } from "../utils/formValidation.js";
import { auth } from "../utils/firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice.js";
import { USER_AVATAR } from "../utils/constants.js";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleButtonClick = (e) => {
    e.preventDefault();
    const name = !isSignInForm && nameRef.current ? nameRef.current.value : "";
    const email = emailRef.current ? emailRef.current.value : "";
    const password = passwordRef.current ? passwordRef.current.value : "";

    const message = checkValidData(name, email, password, isSignInForm);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
            })
            .catch((error) => setErrorMessage(error.message));
        })
        .catch((error) => setErrorMessage(error.code + " - " + error.message));
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {})
        .catch((error) => setErrorMessage(error.code + " - " + error.message));
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage("");
  };

  return (
    <div className="relative min-h-screen w-full">
      <Header />

      <img
        src={heroImage}
        alt="Netflix Hero"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60" />

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <form className="bg-black bg-opacity-80 p-8 sm:p-10 rounded-lg max-w-md w-full text-white">
          <h2 className="text-2xl font-bold mb-6">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h2>

          {!isSignInForm && (
            <input
              ref={nameRef}
              type="text"
              placeholder="Full Name"
              className="w-full mb-4 p-3 bg-transparent text-white border border-gray-500 rounded placeholder-gray-400 focus:outline-none"
            />
          )}

          <input
            ref={emailRef}
            type="email"
            placeholder="Email"
            className="w-full mb-4 p-3 bg-transparent text-white border border-gray-500 rounded placeholder-gray-400 focus:outline-none"
          />

          <input
            ref={passwordRef}
            type="password"
            placeholder="Password"
            className="w-full mb-4 p-3 bg-transparent text-white border border-gray-500 rounded placeholder-gray-400 focus:outline-none"
          />

          {errorMessage && (
            <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
          )}

          <button
            className="bg-red-600 w-full py-3 rounded font-semibold hover:bg-red-700 transition"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p className="mt-6 text-gray-400 text-sm text-center">
            {isSignInForm ? "New to Netflix?" : "Already have an account?"}
            <span
              onClick={toggleSignInForm}
              className="text-white ml-1 cursor-pointer hover:underline"
            >
              {isSignInForm ? "Sign up now." : "Sign in now."}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
