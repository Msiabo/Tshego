import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import assets from "../assets/assets";

const faqs = [
  {
    question: "Do you only provide house call services?",
    answer:
      "Yes. Tshego's Nail Oasis is a mobile nail salon. We travel to your home so you can enjoy a luxury nail experience in the comfort of your own space.",
  },
  {
    question: "Which services do you offer?",
    answer:
      "We offer luxury manicures, pedicures, foot scrubs and other premium nail care treatments.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can book by calling us, sending a WhatsApp message.",
  },
  {
    question: "Which areas do you cover?",
    answer:
      "We provide mobile nail services in selected areas. Contact us to confirm if we travel to your location.",
  },
  {
    question: "Do I need to provide any equipment?",
    answer:
      "No. We bring all professional equipment and products needed for your treatment.",
  },
  {
    question: "Are your tools sanitised?",
    answer:
      "Absolutely. All tools are cleaned and sanitised before every appointment to ensure the highest hygiene standards.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, EFT and other electronic payment methods where available.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(null);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <div className="bg-black text-white">

      {/* Hero */}
      <section
        className="relative h-[45vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${assets.scrub})`,
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-yellow-300 kameron">
            Frequently Asked Questions
          </h1>

          <p className="mt-4 text-lg text-gray-200">
            Everything You Need To Know
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-5xl mx-auto px-6 py-24">

        <div className="text-center mb-16">

          <span className="uppercase tracking-widest text-yellow-400">
            FAQ
          </span>

          <h2 className="text-5xl font-bold mt-3">
            Got Questions?
          </h2>

          <p className="text-gray-400 mt-5">
            We've answered the most common questions about our luxury mobile
            nail services.
          </p>

        </div>

        <div className="space-y-6">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800"
            >

              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >

                <h3 className="text-lg md:text-xl font-semibold">
                  {faq.question}
                </h3>

                {active === index ? (
                  <FaChevronUp className="text-yellow-400" />
                ) : (
                  <FaChevronDown className="text-yellow-400" />
                )}

              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  active === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6 text-gray-400 leading-7">
                  {faq.answer}
                </div>
              </div>

            </div>

          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="bg-gradient-to-r from-yellow-500 to-yellow-600 py-20">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Still Have Questions?
          </h2>

          <p className="text-gray-800 mt-6 text-lg">
            We're happy to help. Contact us today and we'll answer all your
            questions or assist you with booking your appointment.
          </p>

          <button className="mt-10 bg-black text-white px-10 py-4 rounded-full font-semibold hover:bg-zinc-900 transition">
            Contact Us
          </button>

        </div>

      </section>

    </div>
  );
};

export default FAQ;