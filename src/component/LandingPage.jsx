/* eslint-disable react/no-unescaped-entities */
import React from "react";

const LandingPage = () => {
  return (
    <div className="relative h-screen w-screen bg-[#4A2DBF] overflow-hidden">
      {/* Placeholder Background (REPLACE THIS) */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('../../src/assets/Top Banner/t-banner-01.png')" }}> {/* Replace with your image URL */}
        <div className="absolute inset-0 bg-[#4A2DBF]/70"></div> {/* Dark overlay */}
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 md:px-0">
        <div className="container">
          {/* Logo */}
          <div className="mb-8">
            <img src="../../src/assets/logo/logo-01.png" alt="Mobionizer Logo" className="h-16" />
          </div>
          <h2 className="text-white mb-2">MOBIONIZER</h2>
          {/* Title & Subtitle */}
          <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-7xl mb-8 leading-tight">
            Track your sales force and remotely control your organization's mobile devices
          </h1>
          <p className="text-gray-200 text-lg md:text-xl lg:text-4xl mb-16">
            Mobionizer Mobile Device Management (MDM) solution is trusted by a diverse range of clients. Secure & control your endpoint workforce with user-friendly and trustworthy MDM, Mobionizer.
          </p>

          {/* Button */}
          <button className="bg-[#F26A25] text-white font-bold py-3 p-8 rounded-3xl text-lg hover:bg-[#e65811] transition duration-300">
            START FREE TRIAL
          </button>
        </div>
      </div>
    </div>
    
  );
};

export default LandingPage;