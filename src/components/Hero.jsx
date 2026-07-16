import React from "react";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import assets from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section
      className="relative h-[90vh] bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage: `url(${assets.hero})`, 
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">

          <span className="inline-block bg-yellow-500 text-black px-5 py-2 rounded-full font-semibold text-sm tracking-wide uppercase">
            House Calls Only
          </span>

          <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-tight text-white kameron">
            Luxury Nail Care
            <br />
            <span className="text-yellow-300">At Your Doorstep</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
            Professional manicure, pedicure and foot scrub treatments in the
            comfort of your home. Relax while we bring the salon experience to
            you.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <button onClick={() => navigate("/contact")} className="flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold transition duration-300">
              Book Appointment
              <FaArrowRight />
            </button>

    

          </div>

          {/* Statistics */}
          <div className="flex flex-wrap gap-10 mt-16">

            <div>
              <h3 className="text-4xl font-bold text-yellow-300">100%</h3>
              <p className="text-gray-300">Hygienic Service</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-yellow-300">Mobile</h3>
              <p className="text-gray-300">House Calls Only</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-yellow-300">Luxury</h3>
              <p className="text-gray-300">Salon Experience</p>
            </div>

          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-7 h-12 border-2 border-yellow-400 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-yellow-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;