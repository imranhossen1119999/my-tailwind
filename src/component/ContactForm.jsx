import React, { useState } from "react";
import map from '../../src/assets/map/map.png';
import emailjs from "emailjs-com";

const ContactForm = () => {
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
    emailjs
      .send(
        "service_inohyzo", // Replace with your EmailJS Service ID
        "template_ny8g1ks", // Replace with your EmailJS Template ID
        data,
        "1HNu3Liy6Z7NBBQB-" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          alert("Message sent successfully!");
          setDatauseState({
            name: "",
            email: "",
            phone: "",
            company: "",
            message: ""
          })
        },
        (error) => {
          console.error("Failed to send email:", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };
  return (
    <div className="flex flex-col md:flex-row items-center justify-center py-4 bg-white px-6 md:px-16">
      {/* <div className="container"> */}
      {/* Google Map */}
      <div className="w-full md:w-1/2 h-96 mb-4">
        <img
          className="w-full h-full rounded-lg"
          src={map}
          loading="lazy"
        ></img>
      </div>

      {/* Contact Form */}
      <div className="w-full md:w-1/2 ml-0 md:ml-6">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:mt-4">
            <div>
              <label className="block font-semibold text-sm">Full Name</label>
              <input type="text" name="name" value={data.name} onChange={handleChange} required className="w-full p-2 border-0 mt-1 focus:border-0" style={{ borderBottom: "1px solid #e5e7eb" }} />
            </div>
            <div>
              <label className="block font-semibold text-sm">Email Address</label>
              <input type="email" name="email" value={data.email} onChange={handleChange} required className="w-full p-2 border-0 mt-1" style={{ borderBottom: "1px solid #e5e7eb" }} />
            </div>
            <div>
              <label className="block font-semibold text-sm">Phone Number</label>
              <input type="tel" name="phone" value={data.phone} onChange={handleChange} required className="w-full p-2 border-0 mt-1" style={{ borderBottom: "1px solid #e5e7eb" }} />
            </div>
            <div>
              <label className="block font-semibold text-sm">Company</label>
              <input type="text" name="company" value={data.company} onChange={handleChange} required className="w-full p-2 border-0 mt-1" style={{ borderBottom: "1px solid #e5e7eb" }} />
            </div>
            <div className="col-span-2">
              <label className="block font-semibold text-sm">Message</label>
              <textarea rows="4" name="message" value={data.message} required onChange={handleChange} className="w-full p-2 border-0 mt-1" style={{ borderBottom: "1px solid #e5e7eb" }}></textarea>
            </div>
          </div>
          <button type="submit" className="mt-4 bg-[#4A2DBF] text-white px-6 py-2 rounded-md font-semibold flex items-center justify-center">
            Get Free Trial →
          </button>
        </form>
      </div>
    </div>
    // </div>
  )
}
export default ContactForm;