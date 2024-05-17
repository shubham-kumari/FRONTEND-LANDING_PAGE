import React from "react";
import img from "../../assets/Rectangle 11.png";
import logo from "../../assets/logo1.png";

const Mission = () => {
  return (
    <div className="relative sm:pt-16 lg:pt-0 pt-16 bg-black ">
      <img src={img} alt="Background" className="w-full h-auto " />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-10">
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between">
          <div className="w-1/3">
            <img src={logo} alt="Logo" className="self-start mb-4 sm:mb-0 hidden sm:flex" />
          </div>
          <div className="text-justify sm:text-right w-full sm:w-4/5 sm:pr-10 lg:pr-24">
            <p className="text-white text-xs md:text-lg sm:text-2xl font-Montserrat">
              Our mission is to redefine the way advertisers connect with their
              audience by harnessing the power of audio technology. We strive to
              provide advertisers with the tools and insights they need to create
              impactful campaigns that resonate with their target demographic,
              driving engagement and maximizing ROI.
            </p>
            <div className="text-center sm:text-right sm:pt-10 pt-4"> 
              <button
                type="button"
                className="text-white bg-emerald-600 text-xs sm:text-lg font-Montserrat rounded-full px-4 py-2 sm:px-14 sm:py-3 text-center"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
