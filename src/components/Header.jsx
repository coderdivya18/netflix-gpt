import React from 'react';
import netflixLogo from '../assets/images/Netflix_Logo_PMS.png'

const Header = () => {
    return (
        <header className="flex justify-between items-center px-8 py-4 absolute w-full z-10">
            <div className="flex items-center gap-2">
                <img src={netflixLogo} alt="Netflix Logo" className="w-30 object-contain" />
            </div>
            <div className="flex gap-4">
                <select className="bg-transparent text-white border px-3 py-1 rounded">
                    <option value="en" className="text-black">English</option>
                    <option value="hi" className="text-black">Hindi</option>
                </select>
                <button className="bg-red-600 text-white px-4 py-1 rounded">Sign In</button>
            </div>
        </header>
    );
};

export default Header;