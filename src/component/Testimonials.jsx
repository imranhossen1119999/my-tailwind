import React from "react";
import islamiBank from '../../src/assets/Our Valuable Clients/Islami Bank.png';
import UnileverLogo from '../../src/assets/Our Valuable Clients/Unilever logo.png';
import LalTeer from '../../src/assets/Our Valuable Clients/Lal teer.png';

const testimonials = [
  {
    logo: islamiBank, // Replace with the actual logo URL
    text: '"Managing the mobile devices remotely through the air. Mobionizer is such a robust MDM solution which is helping my IT team a lot to manage android devices smoothly."',
    name: "Saidur Rahman",
    designation: "Managing Director",
  },
  {
    logo: UnileverLogo, // Replace with the actual logo URL
    text: '"Securing our business data and our organization-owned android devices from any data security risk and device misusages. Also monitoring our field force employees using the Mobionizer. Such a wonderful MDM software to manage and monitor devices remotely."',
    name: "Rezaur Rahman",
    designation: "Senior Manager",
  },
  {
    logo: LalTeer, // Replace with the actual logo URL
    text: '"Using the Mobionizer to increase the efficiency of our field force by securely managing their live operations in their territory. This tool is highly effective in remote device control and management."',
    name: "John Doe",
    designation: "Manager",
  },
];

const Testimonials = () => {
  return (
    <div className=" bg-blue-900 text-white py-10 flex flex-col items-center md:px-16 px-6">
      <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="text-center mb-10">
        <h2 className="text-lg uppercase font-semibold text-blue-200">Clients Feedback</h2>
        <h1 className="text-4xl font-bold mt-2">What Our Customer's Say About Us</h1>
        <p className="mt-4 text-blue-300 max-w-2xl">
          We pride ourselves on being a leading Mobile Device Management (MDM) solution trusted by a diverse range of clients. Our robust system is designed to efficiently administer and secure mobile devices, ensuring seamless control and monitoring remotely.
        </p>
      </div>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white text-gray-800 rounded-2xl shadow-lg p-6 space-y-4"
          >
            <div className="flex mb-4">
              <img
                src={testimonial.logo}
                alt="Client Logo"
                className="w-16 h-16 object-contain"
              />
            </div>
            <p className="text-sm">{testimonial.text}</p>
            <div className="flex items-center mt-4 space-x-3">
              <div className="text-white text-3xl bg-blue-900 px-2 py-2 rounded-full">”</div>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.designation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex mt-10 space-x-4">
        <div className="w-3 h-3 bg-white rounded-full"></div>
        <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
      </div>
      </div>
    </div>
  );
};

export default Testimonials;
