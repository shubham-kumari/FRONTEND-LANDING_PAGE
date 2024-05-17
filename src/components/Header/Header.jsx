import React from 'react';
import img from "../../assets/Rectangle1.png";

const Header = () => {
  return (
    <div className="relative sm:pt-26 pt-20 lg:pt-0">
      <img src={img} alt="Background" className="w-full h-auto" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center mt-8 sm:mt-20 lg:mt-0">
        <h1 className="text-white text-xl sm:text-6xl leading-tight">Unlock the Power of</h1>
        <h1 className="font-extrabold  text-xl sm:text-6xl leading-tight my-1 sm:my-3 bg-gradient-to-r from-emerald-600 to-lime-400 text-transparent bg-clip-text">Audio Fingerprinting</h1>
        <h1 className='text-white text-xl sm:text-6xl leading-tight mb-4 sm:mb-16'>for Targeted Advertising</h1>
        <button type="button" className="text-white bg-emerald-600 font-Montserrat rounded-full text-sm sm:text-lg px-4 py-2 sm:px-12 sm:py-4 text-center">Listen to Claim Offer</button>
      </div>
    </div>
  );
}

export default Header;