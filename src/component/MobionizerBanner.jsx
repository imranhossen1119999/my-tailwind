import React from "react";
const MobionizerBanner = () => {
    return(
        <div className="flex justify-center items-center py-6 px-4 bg-[#4C2FF7] rounded-xl text-white relative max-w-5xl mx-auto backgroundImage: url('../../src/assets/Bottom Banner/b-banner-01.png') bg-cover bg-center">

      <div className="text-center md:text-left">
        <h2 className="text-2xl font-bold">Need Any Help to Mobionizer Solutions?</h2>
        <p className="text-sm mt-1">Professional Mobile Device Management Solutions</p>
      </div>
      <div className="flex gap-4 ml-auto">
        <button className="bg-white text-[#4C2FF7] px-5 py-2 rounded-lg font-semibold shadow-lg hover:bg-gray-200">
          Get Started →
        </button>
        <button className="border border-white px-5 py-2 rounded-lg font-semibold hover:bg-white hover:text-[#4C2FF7]">
          Learn More →
        </button>
      </div>
    </div>
    )
}
export default MobionizerBanner;