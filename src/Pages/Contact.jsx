import React from "react";
import Button from "../Components/Button";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import stateImg from "../assets/dairy-banner.jpg";
import HeaderText from "../Components/HeaderText";
import SectionReveal from "../Components/SectionReveal";


const Contact = () => {
  return (
    <section className="w-full">
      
      {/* Banner */}
      <SectionReveal delay={0.5} direction="down" amount={0.8}>
      <div
        className="relative w-full h-72 md:h-96 bg-zinc-200 bg-center bg-cover flex items-center"
        style={{ backgroundImage: `url(${stateImg})` }}
      >
        <div className="max-w-330 mx-auto p-6 rounded-2xl text-center backdrop-blur-md tracking-wider shadow-lg shadow-blue-200/50">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg tracking-wider">
            Contact <span className="text-orange-500">Us</span>
          </h1>
          <p className="text-zinc-600 mt-2 md:mt-4 text-lg md:text-base drop-shadow-md">
            We’re here to help you with fresh and organic groceries
          </p>
        </div>
        <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
      </div> </SectionReveal>

      {/* Info + Form Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Contact Info Card - Left */}
        <SectionReveal delay={0.03} direction="right" amount={0.8}> 
        <div className="bg-zinc-100 p-10 rounded-3xl shadow-lg flex flex-col gap-6 hover:shadow-xl transition">
          <HeaderText text1={"Contact"} text2={"Info"} />

          <div className="flex items-start gap-4 mt-6">
            <FaMapMarkerAlt className="text-orange-500 text-3xl mt-1" />
            <div>
              <h4 className="text-xl font-semibold text-zinc-800">Address</h4>
              <p className="text-zinc-600 mt-1">
                Block-A, Road-12/C Green City, Banani
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaPhoneAlt className="text-orange-500 text-3xl mt-1" />
            <div>
              <h4 className="text-xl font-semibold text-zinc-800">Phone</h4>
              <p className="text-zinc-600 mt-1">+880 1111 00000</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaEnvelope className="text-orange-500 text-3xl mt-1" />
            <div>
              <h4 className="text-xl font-semibold text-zinc-800">Email</h4>
              <p className="text-zinc-600 mt-1">support@grocify.com</p>
            </div>
          </div>

          {/* Map */}
          <div className="mt-6 rounded-2xl overflow-hidden h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902559556822!2d90.38656431543182!3d23.75090398459039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf4d7f1d6e85%3A0x4d0f2c1d6c8d5c6b!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div> </SectionReveal>

        {/* Contact Form - Right */}
        <SectionReveal delay={0.03} direction="left" amount={0.8}> 
        <div className="bg-zinc-100 p-8 md:p-12 rounded-3xl shadow-md">
          <HeaderText text1={"Get in"} text2={"Touch"} />
          <form className="mt-8 grid gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-300 h-36 resize-none"
            />
            <div className="flex justify-start">
              <Button text={"Send Message"} />
            </div>
          </form>
        </div> </SectionReveal>

      </div>
    </section>
  );
};

export default Contact;
