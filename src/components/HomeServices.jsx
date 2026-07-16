import React from "react";
import {
  FaHandSparkles,
  FaPaintBrush,
  FaGem,
  FaSpa,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeServices = () => {
  const services = [
    {
      title: "Luxury Manicure",
      description:
        "Pamper your hands with expertly shaped, polished, and beautifully finished nails.",
      icon: <FaHandSparkles size={34} />,
    },
    {
      title: "Spa Pedicure",
      description:
        "Relax with our rejuvenating pedicure treatments that leave your feet refreshed and elegant.",
      icon: <FaSpa size={34} />,
    },
    {
      title: "Gel & Acrylic Nails",
      description:
        "Strong, long-lasting nail enhancements designed to complement your unique style.",
      icon: <FaGem size={34} />,
    },
    {
      title: "Custom Nail Art",
      description:
        "Creative, trendy, and personalized nail designs for every occasion and personality.",
      icon: <FaPaintBrush size={34} />,
    },
  ];

  return (
    <section className="bg-black py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block border border-yellow-300 text-yellow-300 px-5 py-2 rounded-full uppercase tracking-widest text-sm font-semibold">
            Our Services
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white leading-tight">
            Luxury Nail Care
            <br />
            <span className="text-yellow-300">
              Designed Around You
            </span>
          </h2>

          <p className="mt-8 text-gray-400 text-lg leading-8">
            At <span className="text-yellow-300 font-semibold">Tshego's Nail Oasis</span>,
            every treatment is designed to leave you feeling confident,
            refreshed, and beautifully polished using premium products and
            expert techniques.
          </p>
        </div>

        {/* Services */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:border-yellow-300 hover:shadow-[0_20px_50px_rgba(253,224,71,0.15)]"
            >
              {/* Gold Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-yellow-300/10 to-transparent"></div>

              <div className="relative">
                <div className="w-18 h-18 flex items-center justify-center rounded-2xl bg-yellow-300 text-black mb-8 group-hover:rotate-6 group-hover:scale-110 transition duration-300">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-8">
                  {service.description}
                </p>

                <div className="mt-8">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-yellow-300 font-semibold hover:gap-4 transition-all duration-300"
                  >
                    Learn More
                    <FaArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-yellow-300 hover:bg-yellow-400 text-black px-10 py-4 rounded-full font-bold text-lg transition duration-300 shadow-lg"
          >
            Book Your Appointment
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;