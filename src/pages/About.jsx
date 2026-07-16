import React from "react";
import {
  FaAward,
  FaHome,
  FaHeart,
  FaLeaf,
  FaCheckCircle,
} from "react-icons/fa";
import assets from "../assets/assets";

const About = () => {
  return (
    <div className="bg-black text-white">

      {/* Hero */}
      <section
        className="relative h-[50vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${assets.pedicure})`,
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-yellow-300 kameron">
            About Us
          </h1>

          <p className="mt-4 text-lg text-gray-200">
            Bringing Luxury Nail Care To Your Home
          </p>
        </div>
      </section>

      {/* About Story */}
      <section className="max-w-7xl mx-auto py-24 px-6 grid lg:grid-cols-2 gap-16 items-center">

        <div>
          <img
            src={assets.about}
            alt="About"
            className="rounded-2xl shadow-2xl"
          />
        </div>

        <div>

          <span className="text-yellow-400 uppercase tracking-widest font-semibold">
            Who We Are
          </span>

          <h2 className="text-5xl font-bold mt-4 mb-6">
            Welcome To
            <span className="text-yellow-300"> Tshego's Nail Oasis</span>
          </h2>

          <p className="text-gray-300 leading-8 mb-6">
            Tshego's Nail Oasis is a luxury mobile nail service dedicated to
            providing professional manicure, pedicure and foot treatments in
            the comfort of your own home.
          </p>

          <p className="text-gray-300 leading-8 mb-8">
            We believe self-care should be convenient, relaxing and luxurious.
            Our mission is to deliver exceptional beauty services while saving
            you the time and stress of travelling to a salon.
          </p>

          <div className="space-y-4">

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-yellow-400" />
              <span>Professional & Hygienic Services</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-yellow-400" />
              <span>Luxury House Call Experience</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-yellow-400" />
              <span>Affordable Premium Treatments</span>
            </div>

          </div>

        </div>

      </section>

      {/* Mission */}
      <section className="bg-zinc-950 py-24">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          <div className="bg-zinc-900 p-10 rounded-xl text-center hover:-translate-y-2 transition">

            <FaHeart className="text-5xl text-yellow-400 mx-auto mb-6" />

            <h3 className="text-2xl font-bold mb-4">
              Our Mission
            </h3>

            <p className="text-gray-400">
              To provide premium mobile nail care that combines convenience,
              quality and luxury for every client.
            </p>

          </div>

          <div className="bg-zinc-900 p-10 rounded-xl text-center hover:-translate-y-2 transition">

            <FaAward className="text-5xl text-yellow-400 mx-auto mb-6" />

            <h3 className="text-2xl font-bold mb-4">
              Our Vision
            </h3>

            <p className="text-gray-400">
              To become the most trusted luxury mobile nail service known for
              excellence, professionalism and outstanding customer care.
            </p>

          </div>

          <div className="bg-zinc-900 p-10 rounded-xl text-center hover:-translate-y-2 transition">

            <FaLeaf className="text-5xl text-yellow-400 mx-auto mb-6" />

            <h3 className="text-2xl font-bold mb-4">
              Our Values
            </h3>

            <p className="text-gray-400">
              Professionalism, hygiene, honesty, reliability and ensuring every
              client leaves feeling beautiful and confident.
            </p>

          </div>

        </div>

      </section>

      {/* Why Choose Us */}

      <section className="max-w-7xl mx-auto py-24 px-6">

        <div className="text-center">

          <span className="text-yellow-400 uppercase tracking-widest">
            Why Choose Us
          </span>

          <h2 className="text-5xl font-bold mt-3 mb-16">
            Luxury Beauty Without Leaving Home
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {[
            {
              icon: <FaHome />,
              title: "House Calls",
              text: "We come to your home for your convenience.",
            },
            {
              icon: <FaAward />,
              title: "Professional",
              text: "Experienced and passionate nail care.",
            },
            {
              icon: <FaLeaf />,
              title: "Clean & Hygienic",
              text: "Sterilised tools and safe treatments.",
            },
            {
              icon: <FaHeart />,
              title: "Client Satisfaction",
              text: "Your happiness is our top priority.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 p-8 rounded-xl text-center hover:bg-yellow-500 hover:text-black transition duration-300"
            >
              <div className="text-5xl mb-6 flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">
                {item.title}
              </h3>

              <p>
                {item.text}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="bg-yellow-500 py-20">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold text-black">
            Ready To Treat Yourself?
          </h2>

          <p className="mt-6 text-xl text-gray-800">
            Book your luxury mobile nail appointment today and let us bring the
            salon experience to you.
          </p>

          <button className="mt-10 bg-black text-white px-10 py-4 rounded-full font-semibold hover:bg-zinc-800 transition">
            Book Appointment
          </button>

        </div>

      </section>

    </div>
  );
};

export default About;