import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import assets from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Company */}
        <div>

          <div className="flex items-center gap-4">

            <img
              src={assets.logo}
              alt="Tshego's Nail Oasis"
              className="h-16 w-auto"
            />

            <div>
              <h2 className="text-2xl font-bold text-yellow-300 kameron">
                TSHEGO'S
              </h2>

              <p className="uppercase tracking-[0.3em] text-xs text-white">
                Nail Oasis
              </p>
            </div>

          </div>

          <p className="mt-6 leading-7 text-gray-400">
            Luxury mobile nail services bringing professional manicure,
            pedicure and foot treatments directly to your home.
          </p>

          <div className="flex gap-4 mt-6">

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-zinc-900 hover:bg-yellow-500 hover:text-black flex items-center justify-center transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-zinc-900 hover:bg-yellow-500 hover:text-black flex items-center justify-center transition"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-zinc-900 hover:bg-yellow-500 hover:text-black flex items-center justify-center transition"
            >
              <FaWhatsapp />
            </a>

          </div>

        </div>

        {/* Quick Links */}
        <div>

          <h3 className="text-xl font-bold text-yellow-300 mb-6">
            Quick Links
          </h3>

          <ul className="space-y-4">

            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "FAQ", path: "/faq" },
              { name: "Contact", path: "/contact" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="flex items-center gap-3 hover:text-yellow-400 transition"
                >
                  <FaArrowRight className="text-xs" />
                  {link.name}
                </Link>
              </li>
            ))}

          </ul>

        </div>

        {/* Services */}
        <div>

          <h3 className="text-xl font-bold text-yellow-300 mb-6">
            Our Services
          </h3>

          <ul className="space-y-4">

            <li>Luxury Manicure</li>

            <li>Luxury Pedicure</li>

            <li>Foot Scrub</li>

            <li>House Call Services</li>

            <li>Nail Care Treatments</li>

          </ul>

        </div>

        {/* Contact */}
        <div>

          <h3 className="text-xl font-bold text-yellow-300 mb-6">
            Contact Us
          </h3>

          <div className="space-y-5">

            <div className="flex gap-4">
              <FaPhoneAlt className="text-yellow-400 mt-1" />
              <span>+27 71 303 2006</span>
            </div>

            <div className="flex gap-4">
              <FaEnvelope className="text-yellow-400 mt-1" />
              <span>info@tshegosnailoasis.co.za</span>
            </div>

            <div className="flex gap-4">
              <FaMapMarkerAlt className="text-yellow-400 mt-1" />
              <span>
                Mobile Nail Salon
                <br />
                House Calls Only
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-yellow-700"></div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm">

        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-yellow-300 font-semibold">
            Tshego's Nail Oasis
          </span>
          . All Rights Reserved.
        </p>

       

      </div>

    </footer>
  );
};

export default Footer;