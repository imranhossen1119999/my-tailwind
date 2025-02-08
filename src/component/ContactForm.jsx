import React from "react";
import map from '../../src/assets/map/map.png';

const ContactForm = () => {
    return(
        <div className="flex flex-col md:flex-row items-center justify-center py-16 bg-gray-50 px-6 md:px-16">
            {/* <div className="container"> */}
      {/* Google Map */}
      <div className="w-full md:w-1/2 h-96">
        <img
          className="w-full h-full rounded-lg"
          src={map}
          loading="lazy"
        ></img>
      </div>
      
      {/* Contact Form */}
      <div className="w-full md:w-1/2 bg-white p-8 shadow-md rounded-lg ml-0 md:ml-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold">Full Name</label>
            <input type="text" className="w-full p-2 border rounded-md mt-1" />
          </div>
          <div>
            <label className="block font-semibold">Email Address</label>
            <input type="email" className="w-full p-2 border rounded-md mt-1" />
          </div>
          <div>
            <label className="block font-semibold">Phone Number</label>
            <input type="tel" className="w-full p-2 border rounded-md mt-1" />
          </div>
          <div>
            <label className="block font-semibold">Company</label>
            <input type="text" className="w-full p-2 border rounded-md mt-1" />
          </div>
          <div className="col-span-2">
            <label className="block font-semibold">Message</label>
            <textarea className="w-full p-2 border rounded-md mt-1" rows="4"></textarea>
          </div>
        </div>
        <button className="mt-4 bg-[#4A2DBF] text-white px-6 py-2 rounded-md font-semibold flex items-center justify-center">
          Get Free Trial →
        </button>
      </div>
    </div>
    // </div>
    )
}
export default ContactForm;