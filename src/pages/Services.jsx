import React from "react";
import {
  FaHands,
  FaSpa,
  FaLeaf,
  FaHome,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import assets from "../assets/assets";

const services = [
  {
    title: "Luxury Manicure",
    icon: <FaHands />,
    image: assets.machine,
    description:
      "Professional nail shaping, cuticle care, buffing and polish for healthy, beautiful hands.",
    features: [
      "Cuticle Care",
      "Nail Shaping",
      "Buff & Polish",
      "Moisturising Treatment",
    ],
  },
  {
    title: "Luxury Pedicure",
    icon: <FaSpa />,
    image: assets.pedicure,
    description:
      "Relaxing foot treatment that leaves your feet soft, refreshed and perfectly groomed.",
    features: [
      "Foot Soak",
      "Cuticle Care",
      "Nail Trim",
      "Polish Finish",
    ],
  },
  {
    title: "Foot Scrub",
    icon: <FaLeaf />,
    image: assets.scrub,
    description:
      "Remove dry skin and restore softness with our refreshing exfoliating foot scrub treatment.",
    features: [
      "Exfoliation",
      "Deep Moisture",
      "Massage",
      "Smooth Finish",
    ],
  },
];

const Services = () => {
  return (
    <div className="bg-black text-white">

      {/* Hero */}
      <section
        className="relative h-[45vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${assets.fscrub})`,
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative text-center">
          <h1 className="text-6xl font-bold text-yellow-300 kameron">
            Our Services
          </h1>

          <p className="mt-4 text-lg text-gray-200">
            Luxury Nail Treatments At Your Doorstep
          </p>
        </div>
      </section>

      {/* Services */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-16">

          <span className="uppercase tracking-widest text-yellow-400">
            What We Offer
          </span>

          <h2 className="text-5xl font-bold mt-3">
            Premium Nail Care Services
          </h2>

        </div>

        <div className="grid lg:grid-cols-3 gap-10">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-2xl overflow-hidden hover:-translate-y-3 transition duration-300 shadow-lg"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-72 w-full object-cover"
              />

              <div className="p-8">

                <div className="w-16 h-16 rounded-full bg-yellow-500 text-black flex items-center justify-center text-3xl mb-6">
                  {service.icon}
                </div>

                <h3 className="text-3xl font-bold text-yellow-300">
                  {service.title}
                </h3>

                <p className="mt-5 text-gray-400 leading-7">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-3">

                  {service.features.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <FaCheckCircle className="text-yellow-400" />
                      {item}
                    </li>
                  ))}

                </ul>

                <button className="mt-8 flex items-center gap-3 text-yellow-400 hover:text-yellow-300 font-semibold">
                  Book Now
                  <FaArrowRight />
                </button>

              </div>
            </div>
          ))}

        </div>

      </section>

      {/* Why Choose Us */}

      <section className="bg-zinc-950 py-24">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <img
              src={assets.scrub}
              alt=""
              className="rounded-2xl"
            />

          </div>

          <div>

            <span className="text-yellow-400 uppercase tracking-widest">
              Why Choose Us
            </span>

            <h2 className="text-5xl font-bold mt-4 mb-8">
              Professional Mobile Nail Care
            </h2>

            <div className="space-y-6">

              <div className="flex gap-4">

                <FaHome className="text-yellow-400 text-3xl mt-1" />

                <div>

                  <h3 className="text-2xl font-semibold">
                    House Calls
                  </h3>

                  <p className="text-gray-400 mt-2">
                    We come to your home so you can relax while enjoying
                    luxury nail treatments.
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <FaCheckCircle className="text-yellow-400 text-3xl mt-1" />

                <div>

                  <h3 className="text-2xl font-semibold">
                    Hygienic Equipment
                  </h3>

                  <p className="text-gray-400 mt-2">
                    Every tool is cleaned and sanitised before each
                    appointment.
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <FaSpa className="text-yellow-400 text-3xl mt-1" />

                <div>

                  <h3 className="text-2xl font-semibold">
                    Luxury Experience
                  </h3>

                  <p className="text-gray-400 mt-2">
                    We deliver a relaxing salon-quality experience wherever
                    you are.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24">

        <div className="max-w-5xl mx-auto bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-3xl text-center p-16">

          <h2 className="text-5xl font-bold text-black">
            Ready To Be Pampered?
          </h2>

          <p className="mt-6 text-lg text-gray-800">
            Book your luxury nail appointment today and let us bring the salon
            experience to your home.
          </p>

          <button className="mt-10 bg-black text-white px-10 py-4 rounded-full hover:bg-zinc-900 transition font-semibold">
            Book Appointment
          </button>

        </div>

      </section>

    </div>
  );
};

export default Services;