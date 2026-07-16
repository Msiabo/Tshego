import React from "react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import assets from "../assets/assets";

const HomeAbout = () => {
  const features = [
    "Luxury Manicure & Pedicure Treatments",
    "Experienced & Professional Nail Technicians",
    "Premium Quality Nail Products",
    "Clean, Relaxing & Hygienic Salon",
  ];

  return (
    <section className="bg-black py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-yellow-300 rounded-3xl transition-all duration-500 group-hover:translate-x-3 group-hover:translate-y-3"></div>

            <img
              src={assets.about || assets.salon}
              alt="Tshego's Nail Oasis"
              className="relative w-full h-[620px] object-cover rounded-3xl shadow-2xl"
            />

            {/* Experience Card */}
            <div className="absolute bottom-8 left-8 bg-yellow-300 text-black px-8 py-6 rounded-2xl shadow-2xl">
              <h3 className="text-5xl font-bold">5+</h3>
              <p className="font-semibold mt-2">
                Years of Beauty Excellence
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block border border-yellow-300 text-yellow-300 px-5 py-2 rounded-full tracking-widest uppercase text-sm font-semibold mb-6">
              About Us
            </span>

            <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
              Luxury Nail Care
              <br />
              <span className="text-yellow-300">
                Crafted Just For You
              </span>
            </h2>

            <p className="text-gray-300 text-lg leading-9 mb-6">
              At <span className="font-semibold text-yellow-300">Tshego's Nail Oasis</span>,
              beauty meets elegance. We specialize in premium nail care that
              enhances your confidence while delivering a relaxing salon
              experience from the moment you walk through our doors.
            </p>

            <p className="text-gray-400 text-lg leading-9 mb-10">
              Whether you're looking for timeless manicures, luxurious
              pedicures, trendy acrylic sets, rubber base applications, or
              custom nail art, our talented technicians are dedicated to
              bringing your vision to life with precision and creativity.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-5 mb-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-5 hover:border-yellow-300 hover:bg-white/10 transition duration-300"
                >
                  <FaCheckCircle className="text-yellow-300 text-xl mt-1 flex-shrink-0" />

                  <p className="text-gray-200">{feature}</p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5">
              <Link
                to="/about"
                className="inline-flex items-center gap-3 bg-yellow-300 hover:bg-yellow-400 text-black px-8 py-4 rounded-xl font-semibold transition duration-300"
              >
                Learn More
                <FaArrowRight />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 border-2 border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-black px-8 py-4 rounded-xl font-semibold transition duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;