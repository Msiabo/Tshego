import React from "react";
import { FaArrowRight } from "react-icons/fa";
import assets from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage: `url(${assets.hero})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 py-28">
        <div className="max-w-3xl">
          {/* Badge */}
          <span className="inline-block bg-yellow-500 text-black px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-widest uppercase">
            House Calls Only
          </span>

          {/* Heading */}
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
            Luxury Nail Care
            <br />
            <span className="text-yellow-300">At Your Doorstep</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-300 leading-8 max-w-2xl">
            Professional manicure, pedicure and foot scrub treatments in the
            comfort of your home. Relax while we bring the luxury salon
            experience directly to you.
          </p>

          {/* Button */}
          <div className="mt-10">
            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold transition duration-300"
            >
              Book Appointment
              <FaArrowRight />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-yellow-300">
                100%
              </h3>
              <p className="text-gray-300 mt-2">Hygienic Service</p>
            </div>

            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-yellow-300">
                Mobile
              </h3>
              <p className="text-gray-300 mt-2">House Calls Only</p>
            </div>

            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-yellow-300">
                Luxury
              </h3>
              <p className="text-gray-300 mt-2">Salon Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-7 h-12 border-2 border-yellow-400 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-yellow-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;