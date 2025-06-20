import React from 'react';
import Header from "./Header.jsx";
import heroImage from "../assets/images/netflix-hero-image.jpg";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = React.useState(true);
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div className="relative w-full">
            {/* Header */}
            <Header />

            {/* Background Image */}
            <img
                src={heroImage}
                alt="Netflix Hero"
                className="w-full h-full object-cover"
            />

            {/* Overlay to darken image for contrast */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60" />

            {/* Centered Login Form */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center px-4">
                <form className="bg-black bg-opacity-75 p-8 rounded max-w-md w-full text-white z-10">
                    <h2 className="text-2xl font-bold  mb-4">{isSignInForm? "Sign In" : "Sign Up"}</h2>
                    {!isSignInForm && <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full mb-4 p-3 bg-transparent text-white border rounded text-white"
                    /> }

                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full mb-4 p-3 bg-transparent text-white border rounded text-white"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full mb-4 p-3 bg-transparent text-white border rounded text-white"
                    />
                    <button className="bg-red-600 w-full py-3 rounded font-semibold">
                        {isSignInForm? "Sign In" : "Sign Up"}
                    </button>
                    {isSignInForm ? (
                        <p className="my-5 text-gray-500 font-bold" >New to Netflix ?
                            <span onClick={toggleSignInForm} className="text-white font-light cursor-pointer"> SignUp now.</span>
                        </p>
                    ): (<p className="my-5 text-gray-500 font-bold" >Already have an account ?
                        <span onClick={toggleSignInForm} className="text-white font-light cursor-pointer"> SignIn now.</span>
                    </p>)}

                </form>

            </div>
        </div>
    );
};

export default Login;
