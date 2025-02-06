import React from "react";

const Bussiness = () => {
    return(
            <div className="bg-[#fff] min-h-screen flex flex-col md:flex-row items-start md:items-center justify-center text-black font-sans">
<div className="md:w-1/2 px-8 py-12 md:px-16 md:py-20">
  <h2 className="text-3xl font-bold mb-6">How Mobionizer Helps Your Business</h2>
  <div className="space-y-6">
    <div className="flex items-start">
      <div className="bg-orange-500 rounded-full h-10 w-10 flex items-center justify-center mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 0a6 6 0 00-6 6v1.5m6-1.5V5.625m0 13.125a6 6 0 01-6-6v-1.5m6 0a6 6 0 016 6v1.5" />
        </svg>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Data Security</h3>
        <p>Protect devices with push messages, factory reset prevention, remote locking, and more.</p>
      </div>
    </div>
    <div className="flex items-start">
      <div className="bg-red-500 rounded-full h-10 w-10 flex items-center justify-center mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Easy Device Enrollment</h3>
        <p>QR, EMM, IMEI - enroll devices effortlessly manage individually or in bulk for total control.</p>
      </div>
    </div>
    <div className="flex items-start">
      <div className="bg-yellow-500 rounded-full h-10 w-10 flex items-center justify-center mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Real-time Geolocation Tracking</h3>
        <p>Real-time location tracking, intervals, GPS settings, & geo-fences for enhanced monitoring.</p>
      </div>
    </div>
    <div className="flex items-start">
      <div className="bg-green-500 rounded-full h-10 w-10 flex items-center justify-center mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Browsing Control</h3>
        <p>Silently control remote device apps, end unauthorized browsing, manage system, restrict URLs and optimize data consumption.</p>
      </div>
    </div>
    <div className="flex items-start">
      <div className="bg-blue-500 rounded-full h-10 w-10 flex items-center justify-center mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">IT Empowerment</h3>
        <p>Empower your IT team with admin roles, seamlessly monitor field force, and keep devices top-notch.</p>
      </div>
    </div>
    <div className="flex items-start">
      <div className="bg-purple-500 rounded-full h-10 w-10 flex items-center justify-center mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Comprehensive Reports</h3>
        <p>No more waiting! Power your IT team with analytics on OS, device activity, storage, and more.</p>
      </div>
    </div>
  </div>
</div>
{/* Right Side (Form) */}
<div className="md:w-1/2 bg-white text-gray-800 px-8 py-12 md:px-16 md:py-20">
  <div className="max-w-md mx-auto">
    <h2 className="text-2xl font-bold mb-6 text-center">Register For Free Trial - 1$ <br /> For Each Device</h2>
    <form className="space-y-4">
      <div>
        <input type="text" className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter Your Name..." />
      </div>
      <div>
        <input type="email" className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email Address" />
      </div>
      <div>
        <input type="tel" className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Phone No" />
      </div>
      <div>
        <input type="text" className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Job Title" />
      </div>
      <div>
        <input type="text" className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder='' />
      </div>
  </form>
  </div>
  </div>
</div>
    )
}
export default Bussiness;