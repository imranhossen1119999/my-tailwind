import React, { useState } from "react";
import { toast } from 'react-toastify';
import emailjs from "emailjs-com";
import security from "../assets/How Mobionizer/Data Security.png"
import Enrollment from "../assets/How Mobionizer/Easy Device Enrollment.png"
import Tracking from "../assets/How Mobionizer/Real-time Geolocation Tracking.png"
import Control from "../assets/How Mobionizer/Browsing Control.png"
import Empowerment from "../assets/How Mobionizer/IT Empowerment.png"
import Reports from "../assets/How Mobionizer/Comprehensive Reports.png"
const Bussiness = () => {
  const [loadding, setLoadding] = useState(false)
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  })
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoadding(true)
    emailjs
      .send(
        "service_inohyzo", // Replace with your EmailJS Service ID
        "template_ny8g1ks", // Replace with your EmailJS Template ID
        data,
        "1HNu3Liy6Z7NBBQB-" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          setLoadding(false)
          toast.success("Email sent successfully!")
          console.log("Email sent successfully!", response);
          setData({
            name: "",
            email: "",
            phone: "",
            company: "",
            message: ""
          })
        },
        (error) => {
          setLoadding(false)
          toast.error("Failed to send message. Please try again.")
          console.error("Failed to send email:", error);
        }
      );
  };
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-start md:items-center justify-center text-black font-sans md:px-16 px-6">
      <div className="container flex md:flex-row flex-col">
        <div className="md:w-4/6 sm:w-[100%] px-8 md:pl-0 py-12 md:px-16 md:py-10 ">
          <h2 className="text-3xl font-bold mb-6">How Mobionizer Helps Your Business</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex items-center justify-center w-[50px] h-[50px] mr-3">
                <img src={security} alt="data-security" strokeWidth={1.5} stroke="currentColor" className="w-[40px] h-[40px] mx-auto" />
              </div>
              <div>
                <h3 className="text-[18px] font-semibold">Data Security</h3>
                <p>Protect devices with push messages, factory reset prevention, remote locking, and more.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center justify-center w-[50px] h-[50px] mr-3">
                <img src={Enrollment} alt="easy-device" className="w-[40px] h-[40px] mx-auto" />
              </div>
              <div>
                <h3 className="text-[18px] font-semibold">Easy Device Enrollment</h3>
                <p>QR, EMM, IMEI - enroll devices effortlessly manage individually or in bulk for total control.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center justify-center w-[50px] h-[50px] mr-3">
                <img src={Tracking} alt="real-time" strokeWidth={1.5} stroke="currentColor" className="w-[40px] h-[40px] mx-auto" />
              </div>
              <div>
                <h3 className="text-[18px] font-semibold">Real-time Geolocation Tracking</h3>
                <p>Real-time location tracking, intervals, GPS settings, & geo-fences for enhanced monitoring.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center justify-center w-[50px] h-[50px] mr-3">
                <img src={Control} alt="browsing-control" strokeWidth={1.5} stroke="currentColor" className="w-[40px] h-[40px] mx-auto" />
              </div>
              <div>
                <h3 className="text-[18px] font-semibold">Browsing Control</h3>
                <p>Silently control remote device apps, end unauthorized browsing, manage system, restrict URLs and optimize data consumption.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center justify-center w-[50px] h-[50px] mr-3">
                <img src={Empowerment} alt="it-empowerment" strokeWidth={1.5} stroke="currentColor" className="w-[40px] h-[40px] mx-auto" />
              </div>
              <div>
                <h3 className="text-[18px] font-semibold">IT Empowerment</h3>
                <p>Empower your IT team with admin roles, seamlessly monitor field force, and keep devices top-notch.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center justify-center w-[50px] h-[50px] mr-3">
                <img src={Reports} alt="comprehensive-report" strokeWidth={1.5} stroke="currentColor" className="w-[40px] h-[40px] mx-auto" />
              </div>
              <div>
                <h3 className="text-[18px] font-semibold">Comprehensive Reports</h3>
                <p>No more waiting! Power your IT team with analytics on OS, device activity, storage, and more.</p>
              </div>
            </div>
          </div>
        </div>
        {/* Right Side (Form) */}
        <div className="md:w-2/6 sm:w-[100%] bg-[#4A2DBF] z-40 flex justify-center text-gray-800 px-6 py-12 rounded-3xl border-white border-2  relative md:-top-20 top-10">
          <div className="max-w-xl mx-auto ">
            <h2 className="text-[22px] font-bold mb-6 text-center text-white">Register For Free Trial - 1$ <br /> For Each Device</h2>
            <form className="space-y-10" onSubmit={handleSubmit}>
              <div>
                <input type="text" name="name" value={data.name} onChange={handleChange} className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter Your Name..." required />
              </div>
              <div>
                <input type="email" name="email" value={data.email} onChange={handleChange} className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email Address" required />
              </div>
              <div>
                <input type="tel" name="phone" value={data.phone} onChange={handleChange} className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Phone No" required />
              </div>
              <div>
                <input type="text" name="company" value={data.company} onChange={handleChange} className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Job Title" required />
              </div>
              <div>
                <input type="text" name="message" value={data.message} onChange={handleChange} className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Company" required />
              </div>
              <div className="text-center">
                <button disabled={loadding} type="submit" className="bg-[#F26A25] text-white font-bold py-3 px-16 mt-2 rounded-3xl hover:bg-[#e65811] transition duration-300">
                  {loadding ? "Submitting...." : "Submit"}
                </button>
              </div>
            </form>
            <div className="mt-8 text-[12px]">
              <p className="text-white text-[12px]">*At Mobionizer, we're dedicated to simplifying mobile device management while ensuring top-notch security and efficiency.
                Join us in streamlining your device management process today!
              </p>

            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  )
}
export default Bussiness;