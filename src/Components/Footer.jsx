import React from "react";
import { Link } from "react-router-dom";
import { footerData } from "../utils/footerdata.js";
import { FaLocationArrow } from "react-icons/fa";

const Footer = () => {
  const { socialLinks, quickLinks, support } = footerData;
  return (
    <footer className="w-full bg-zinc-100 mt-20">
      <div className="max-w-330 mx-auto px-6 sm:px-8 lg:px-10 py-12 sm:py-15">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Logo + Description */}
          <div>
            <Link to="/" className="text-3xl font-bold">
              Gr<span className="text-orange-500">O</span>cify
            </Link>

            <p className="text-zinc-600 text-sm mt-4 max-w-xs pb-6 leading-relaxed">
              Fresh, organic, and high-quality groceries delivered straight to
              your home.
            </p>

            {/* social links */}
            <div className="flex gap-3">
              {socialLinks.map((item, index) => (
                <a
                  href="#"
                  key={index}
                  className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center hover:bg-orange-400 transition-all duration-300 ease-in-out hover:-translate-y-0.5"
                >
                  <item.icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold mb-6 text-xl">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-zinc-600">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.page}
                    className="text-sm hover:text-orange-400 transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-6 text-xl">Services</h4>
            <ul className="flex flex-col gap-3 text-zinc-600">
              {support.map((item, index) => (
                <li
                  key={index}
                  className="text-sm hover:text-orange-400 transition-all duration-300 ease-in-out hover:-translate-y-0.5"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* stay in touch */}
          <div>
            <h5 className="font-bold text-xl">Stay Connected </h5>
            <p className="text-zinc-600 mt-6 leading-relaxed text-sm">
              Question or Comment? <br /> We'd love to hear from you!
            </p>
            <div className="flex items-center gap-3 mt-4">
              <input
                type="email"
                placeholder="Email Address"
                autoComplete="off"
                className="flex-1 h-10 px-4 text-sm text-gray-800 bg-white border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent"
              />
              <button className="flex items-center justify-center h-10 w-10 bg-linear-to-b from-red-400 to-orange-400 text-white rounded-full transition hover:opacity-90 cursor-pointer">
                <FaLocationArrow className="text-sm" />
              </button>
            </div>
          </div>
        </div>

        {/* copyright */}
        <div className="mt-10 text-center border-t border-orange-200 py-2 -mb-10">
          <p className="text-sm text-zinc-600 leading-relaxed tracking-wider">
            All rights reserved © {new Date().getFullYear()} Gr
            <span className="text-orange-500">O</span>cify. <br />
            Developed by{" "}
            <span className="font-semibold text-orange-400">Omit</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
