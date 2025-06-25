import React, { useRef, useState } from 'react';
import Header from "./Header.jsx";
import heroImage from "../assets/images/netflix-hero-image.jpg";
import { checkValidData } from "../utils/formValidation.js";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    // Using useRef Hook
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);


    // Form validation
    const handleButtonClick = (e) => {
        e.preventDefault();
        console.log("nameRef.current:", nameRef.current);
        const name = !isSignInForm && nameRef.current ? nameRef.current.value : "";
        const email = emailRef.current ? emailRef.current.value : "";
        const password = passwordRef.current ? passwordRef.current.value : "";

        const message = checkValidData(name, email, password, isSignInForm);

        setErrorMessage(message);
        if (message) return;
        // Proceed with auth logic (Firebase etc.)
        console.log("Form is valid");
    };

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
        setErrorMessage("");
    };

    return (
        <div className="relative w-full h-screen">
            {/* Header */}
            <Header />

            {/* Background Image */}
            <img
                src={heroImage}
                alt="Netflix Hero"
                className="w-full h-full object-cover"
            />

            {/* Dark overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40" />

            {/* Login Form */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center px-4">
                <form className="bg-black opacity-75 p-8 rounded-lg max-w-md w-full text-white z-10">
                    <h2 className="text-2xl font-bold mb-4">{isSignInForm ? "Sign In" : "Sign Up"}</h2>

                    {!isSignInForm && (
                        <input
                            ref={nameRef}
                            type="text"
                            placeholder="Full Name"
                            className="w-full mb-4 p-3 bg-transparent text-white border rounded"
                        />
                    )}

                    <input
                        ref={emailRef}
                        type="email"
                        placeholder="Email"
                        className="w-full mb-4 p-3 bg-transparent text-white border rounded"
                    />

                    <input
                        ref={passwordRef}
                        type="password"
                        placeholder="Password"
                        className="w-full mb-4 p-3 bg-transparent text-white border rounded"
                    />

                    {errorMessage && (
                        <p className="text-red-500 text-sm mb-2">{errorMessage}</p>
                    )}

                    <button
                        className="bg-red-600 w-full py-3 rounded font-semibold"
                        onClick={handleButtonClick}
                    >
                        {isSignInForm ? "Sign In" : "Sign Up"}
                    </button>

                    <p className="my-5 text-gray-400 text-sm">
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
