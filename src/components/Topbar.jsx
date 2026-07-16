import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaPhone,
  FaEnvelope,
  FaClock,
} from "react-icons/fa6";

const Topbar = () => {
  return (
    <div className="bg-yellow-400 text-white text-sm">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        {/* Left Side */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2">
            <FaPhone className="text-white" />
            <span>+27 71 303 2006</span>
          </div>

          <div className="flex items-center gap-2">
            <FaEnvelope className="text-white" />
            <span>info@company.co.za</span>
          </div>

          <div className="flex items-center gap-2">
            <FaClock className="text-white" />
            <span>Mon - Fri: 08:00 AM - 05:00 PM</span>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-2">
          <FaPhone />
          <span>+27 11 123 4567</span>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="hover:text-gray-200 transition"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>

          <a
            href="#"
            className="hover:text-gray-200 transition"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="#"
            className="hover:text-gray-200 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="#"
            className="hover:text-gray-200 transition"
            aria-label="X"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;