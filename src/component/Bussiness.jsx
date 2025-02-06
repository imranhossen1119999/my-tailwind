import React from "react";

const Bussiness = () => {
    return(
        <div className="bg-[#fff] min-h-screen flex flex-col md:flex-row items-start md:items-center justify-center text-black font-sans">
            <div className="container flex">
        <div className="md:w-1/2 px-8 py-12 md:px-16 md:py-20 ">
        <h2 className="text-3xl font-bold mb-6">How Mobionizer Helps Your Business</h2>
        <div className="space-y-10 ">
            <div className="flex items-start">
            <div className=" h-14 w-10 flex items-center justify-center mr-4">
            <img src="../../src/assets/How Mobionizer/Data Security.png" alt="data-security" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white" />
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Data Security</h3>
        <p>Protect devices with push messages, factory reset prevention, remote locking, and more.</p>
      </div>
    </div>
    <div className="flex items-start">
      <div className=" h-14 w-10 flex items-center justify-center mr-4">
      <img src="../../src/assets/How Mobionizer/Easy Device Enrollment.png" alt="easy-device" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white" />
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Easy Device Enrollment</h3>
        <p>QR, EMM, IMEI - enroll devices effortlessly manage individually or in bulk for total control.</p>
      </div>
    </div>
    <div className="flex items-start">
      <div className=" h-14 w-10 flex items-center justify-center mr-4">
      <img src="../../src/assets/How Mobionizer/Real-time Geolocation Tracking.png" alt="real-time" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white" />
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Real-time Geolocation Tracking</h3>
        <p>Real-time location tracking, intervals, GPS settings, & geo-fences for enhanced monitoring.</p>
      </div>
    </div>
    <div className="flex items-start">
      <div className=" h-14 w-10 flex items-center justify-center mr-4">
      <img src="../../src/assets/How Mobionizer/Browsing Control.png" alt="browsing-control" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white" />
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Browsing Control</h3>
        <p>Silently control remote device apps, end unauthorized browsing, manage system, restrict URLs and optimize data consumption.</p>
      </div>
    </div>
    <div className="flex items-start">
      <div className=" h-14 w-10 flex items-center justify-center mr-4">
        <img src="../../src/assets/How Mobionizer/IT Empowerment.png" alt="it-empowerment" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white" />
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">IT Empowerment</h3>
        <p>Empower your IT team with admin roles, seamlessly monitor field force, and keep devices top-notch.</p>
      </div>
    </div>
    <div className="flex items-start">
      <div className=" h-14 w-10 flex items-center justify-center mr-4">
      <img src="../../src/assets/How Mobionizer/Comprehensive Reports.png" alt="comprehensive-report" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white" />
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Comprehensive Reports</h3>
        <p>No more waiting! Power your IT team with analytics on OS, device activity, storage, and more.</p>
      </div>
    </div>
  </div>
</div>
{/* Right Side (Form) */}
<div className="md:w-1/2 bg-[#4A2DBF] text-gray-800 px-8 py-12 rounded-3xl border-white md:px-16 md:py-20 relative -top-28">
<div className="absolute ">
  <div className="max-w-xl mx-auto ">
    <h2 className="text-3xl font-bold mb-6 text-center text-white">Register For Free Trial - 1$ <br /> For Each Device</h2>
    <form className="space-y-10">
    <div>
       <input type="text" className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter Your Name..." required />
          </div>
          <div>
            <input type="email" className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email Address" required />
          </div>
          <div>
            <input type="tel" className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Phone No" required />
          </div>
          <div>
            <input type="text" className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Job Title" required />
          </div>
          <div>
            <input type="text" className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Company" required />
          </div>
          <div className="text-center">
            <button type="submit" className="bg-[#F26A25] text-white font-bold py-3 px-16 mt-9 rounded-3xl hover:bg-[#e65811] transition duration-300">
              Submit
            </button>
          </div>
  </form>
  <div className="mt-6 text-xl">
    <p className="text-white text-2xl mt-14">*At Mobionizer, we're dedicated to simplifying mobile device management while ensuring top-notch security and efficiency.
    Join us in streamlining your device management process today!
    </p>
    
</div>
  </div>
  </div>
  </div>
  </div>
</div>
    )
}
export default Bussiness;