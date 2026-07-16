import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";
import assets from "../assets/assets";

const Contact = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero */}
      <section
        className="relative h-[50vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${assets.manicure})`,
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative text-center px-6">
          <span className="uppercase tracking-[0.35em] text-yellow-300 font-semibold">
            Contact Us
          </span>

          <h1 className="mt-4 text-5xl md:text-7xl font-bold kameron">
            We'd Love To
            <span className="block text-yellow-300">Hear From You</span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Whether you're ready to book your appointment or simply have a
            question, we're always happy to assist.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <span className="uppercase tracking-widest text-yellow-400">
              Get In Touch
            </span>

            <h2 className="text-5xl font-bold mt-4">
              Luxury Nail Care
              <span className="block text-yellow-300">
                At Your Convenience
              </span>
            </h2>

            <p className="text-gray-400 mt-8 leading-8">
              Tshego's Nail Oasis is a luxury mobile nail service. We travel to
              your location, bringing professional manicure and pedicure
              treatments directly to your doorstep.
            </p>

            <div className="mt-12 space-y-6">
              {/* Phone */}
              <div className="flex items-center gap-5 bg-zinc-900 border border-zinc-800 hover:border-yellow-500 rounded-2xl p-6 transition duration-300">
                <div className="w-14 h-14 rounded-full bg-yellow-500 flex items-center justify-center text-black text-xl">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h3 className="font-semibold text-xl">Call Us</h3>
                  <a
                    href="tel:+27713032006"
                    className="text-gray-400 hover:text-yellow-400"
                  >
                    +27 71 303 2006
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-5 bg-zinc-900 border border-zinc-800 hover:border-green-500 rounded-2xl p-6 transition duration-300">
                <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-white text-xl">
                  <FaWhatsapp />
                </div>

                <div>
                  <h3 className="font-semibold text-xl">WhatsApp</h3>

                  <a
                    href="https://wa.me/27713032006"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-400"
                  >
                    Start a Conversation
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-5 bg-zinc-900 border border-zinc-800 hover:border-yellow-500 rounded-2xl p-6 transition duration-300">
                <div className="w-14 h-14 rounded-full bg-yellow-500 flex items-center justify-center text-black text-xl">
                  <FaEnvelope />
                </div>

                <div>
                  <h3 className="font-semibold text-xl">Email</h3>

                  <a
                    href="mailto:info@tshegosnailoasis.co.za"
                    className="text-gray-400 hover:text-yellow-400"
                  >
                    info@tshegosnailoasis.co.za
                  </a>
                </div>
              </div>

              {/* Service Area */}
              <div className="flex items-center gap-5 bg-zinc-900 border border-zinc-800 hover:border-yellow-500 rounded-2xl p-6 transition duration-300">
                <div className="w-14 h-14 rounded-full bg-yellow-500 flex items-center justify-center text-black text-xl">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h3 className="font-semibold text-xl">Service Area</h3>

                  <p className="text-gray-400">
                    Mobile Nail Salon
                    <br />
                    House Calls Only
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-5 bg-zinc-900 border border-zinc-800 hover:border-yellow-500 rounded-2xl p-6 transition duration-300">
                <div className="w-14 h-14 rounded-full bg-yellow-500 flex items-center justify-center text-black text-xl">
                  <FaClock />
                </div>

                <div>
                  <h3 className="font-semibold text-xl">Business Hours</h3>

                  <p className="text-gray-400">
                    Monday - Friday
                    <br />
                    08:00 AM - 05:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="relative overflow-hidden rounded-3xl border border-yellow-600 bg-gradient-to-br from-zinc-900 to-black p-10 shadow-2xl">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-yellow-500/10"></div>

            <span className="uppercase tracking-widest text-yellow-400">
              Book Appointment
            </span>

            <h2 className="mt-4 text-5xl font-bold">
              Relax...
              <span className="block text-yellow-300">
                We'll Come To You
              </span>
            </h2>

            <p className="mt-8 text-gray-400 leading-8">
              Enjoy luxury manicure and pedicure treatments in the comfort of
              your own home. Book your appointment today and let us bring the
              salon experience to your doorstep.
            </p>

            <div className="mt-10 space-y-5">
              <a
                href="tel:+27713032006"
                className="flex items-center justify-center gap-3 bg-yellow-500 text-black font-semibold py-4 rounded-xl hover:bg-yellow-400 transition"
              >
                <FaPhoneAlt />
                Call To Book
              </a>

              <a
                href="https://wa.me/27713032006"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 text-white py-4 rounded-xl transition"
              >
                <FaWhatsapp />
                Book On WhatsApp
              </a>

              <a
                href="mailto:info@tshegosnailoasis.co.za"
                className="flex items-center justify-center gap-3 border border-yellow-500 hover:bg-yellow-500 hover:text-black text-yellow-300 py-4 rounded-xl transition"
              >
                <FaEnvelope />
                Send Email
              </a>
            </div>

            <div className="mt-12 border-t border-zinc-700 pt-10">
              <h3 className="text-2xl font-semibold text-yellow-300">
                Why Clients Love Us
              </h3>

              <ul className="mt-6 space-y-4 text-gray-300">
                <li>✓ Luxury mobile nail services</li>
                <li>✓ Professional & hygienic equipment</li>
                <li>✓ Friendly and reliable service</li>
                <li>✓ Relax in the comfort of your home</li>
                <li>✓ Flexible appointment scheduling</li>
              </ul>

              <button className="mt-10 flex items-center gap-3 text-yellow-300 hover:text-yellow-400 font-semibold">
                Learn More
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto mb-12 text-center">
          <span className="uppercase tracking-widest text-yellow-400">
            Our Service Area
          </span>

          <h2 className="text-5xl font-bold mt-3">
            We Come To You
          </h2>

          <p className="text-gray-400 mt-6">
            We proudly offer luxury mobile nail services by appointment.
          </p>
        </div>

        <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden border border-yellow-600 shadow-2xl">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Johannesburg,South%20Africa&output=embed"
            width="100%"
            height="500"
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;