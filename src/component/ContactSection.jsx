import React from "react";
import email from '../../src/assets/Contact icon/email.png';
import phone from '../../src/assets/Contact icon/phone.png';
import address from '../../src/assets/Contact icon/address.png';

const ContactSection = () => {
    return(
        <div className="flex flex-col items-center justify-center py-16 bg-gray-50">
      <button className="bg-purple-600 text-white px-4 py-2 rounded-md mb-6 text-sm font-medium">
        Get Free 7 Days Trial
      </button>
      <h2 className="text-2xl font-semibold text-center mb-8">
        Contact Us to Get Your 7 days <br /> Free Trial Version
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <div className="bg-white p-6 rounded-lg shadow flex items-center space-x-4">
          <div className=" p-3 rounded-full text-white">
          <img src={email} className="h-10 w-10" alt="#" />
          </div>
          <div>
            <h3 className="font-semibold">Email Us</h3>
            <p className="text-gray-600 text-sm">info@mobionizer.com</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow flex items-center space-x-4">
          <div className=" p-3 rounded-full text-white">
            <img src={phone} className="h-10 w-10" alt="#" />

          </div>
          <div>
            <h3 className="font-semibold">Phone</h3>
            <p className="text-gray-600 text-sm">+88 01894 803 780</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow flex items-center space-x-4">
          <div className=" p-3 rounded-full text-white">
          <img src={address} className="h-10 w-10" alt="#" />
          </div>
          <div>
            <h3 className="font-semibold">Address</h3>
            <p className="text-gray-600 text-sm">House # 03, Road: 23/A, Gulshan-1, Dhaka-1212</p>
          </div>
        </div>
      </div>
    </div>
    )
}
export default ContactSection;