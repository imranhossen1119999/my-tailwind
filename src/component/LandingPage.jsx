/* eslint-disable react/no-unescaped-entities */
import React from "react";
import logo from "../assets/logo/logo-01.png"
import bg from "../assets/Top Banner/t-banner-01.png"

const LandingPage = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-cover bg-center md:px-16 px-6" style={{ backgroundImage:`url(${bg})` }}>

      {/* <div className=" inset-0 bg-cover bg-center sm:pt-20" style={{ backgroundImage: "url('../../src/assets/Top Banner/t-banner-01.png')" }}>
        <div className="absolute inset-0 bg-[#4A2DBF]/70"></div>
      </div> */}

      <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 md:px-0">
        <div className="container">
          {/* Logo */}
          <div className="mb-8">
            <img src={logo} alt="Mobionizer Logo" className="h-16" />
          </div>
          <h2 className="text-white mb-2">MOBIONIZER</h2>
          {/* Title & Subtitle */}
          <h1 className="text-white font-bold text-3xl md:text-3xl lg:text-4xl w-[100%] mb-8 leading-tight lg:w-[80%]">
            Track your sales force and remotely control your organization's mobile devices
          </h1>
          <p className="text-gray-200 text-lg md:text-xl lg:text-xl mb-16 w-[100%] lg:w-[80%]">
            Mobionizer Mobile Device Management (MDM) solution is trusted by a diverse range of clients. Secure & control your endpoint workforce with user-friendly and trustworthy MDM, Mobionizer.
          </p>

          {/* Button */}
          <button className="bg-[#F26A25] border-[#b15628] border-2 text-white font-bold py-3 p-8 rounded-3xl text-lg hover:bg-[#e65811] transition duration-300">
            START FREE TRIAL
          </button>
        </div>
      </div>
    </div>

  );
};

export default LandingPage;