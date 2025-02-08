import React from "react";
const MobionizerBanner = () => {
    return(
      <div className="flex flex-col px-6 md:px-16 items-center justify-center py-16 bg-gray-50 pb-20">
        <div className="flex flex-col md:flex-row w-[100%] justify-center items-center py-6 px-4 rounded-xl text-white bg-cover bg-center" style={{ backgroundImage: "url('../../src/assets/Bottom Banner/b-banner-01.png')" }}>

      <div className="text-center md:text-left mb-4">
        <h2 className="text-2xl font-bold">Need Any Help to Mobionizer Solutions?</h2>
        <p className="text-sm mt-1">Professional Mobile Device Management Solutions</p>
      </div>
      <div className="flex gap-4 ml-auto gap-y-4">
        <button className="bg-white text-[#4C2FF7] px-5 py-2 rounded-lg font-semibold shadow-lg hover:bg-gray-200">
          Get Started →
        </button>
        <button className="border border-white px-5 py-2 rounded-lg font-semibold hover:bg-white hover:text-[#4C2FF7]">
          Learn More →
        </button>
      </div>
    </div>
    </div>
    )
}
export default MobionizerBanner;