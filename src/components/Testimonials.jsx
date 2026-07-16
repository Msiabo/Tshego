import React, { useEffect, useState } from "react";
import {
  FaStar,
  FaQuoteLeft,
  FaUserCircle,
} from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Lerato M.",
      service: "Gel Nails",
      review:
        "Absolutely amazing service! My nails lasted over four weeks without lifting. The salon is beautiful, clean, and very welcoming.",
    },
    {
      id: 2,
      name: "Boitumelo K.",
      service: "Acrylic Nails",
      review:
        "Tshego pays attention to every little detail. I always leave feeling confident and receive compliments everywhere I go.",
    },
    {
      id: 3,
      name: "Nomsa D.",
      service: "Spa Pedicure",
      review:
        "The most relaxing pedicure I've ever had. Professional service, quality products, and such a luxurious atmosphere.",
    },
    {
      id: 4,
      name: "Thandi N.",
      service: "Custom Nail Art",
      review:
        "Every design is unique and exactly how I imagine it. Tshego is incredibly talented. Highly recommended!",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(slider);
  }, [testimonials.length]);

  return (
    <section className="bg-black py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block border border-yellow-300 text-yellow-300 px-5 py-2 rounded-full uppercase tracking-widest text-sm font-semibold">
            Testimonials
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            What Our Clients Say
          </h2>

          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
            Nothing speaks louder than the experiences of our happy clients.
            Discover why so many people trust Tshego's Nail Oasis for beautiful,
            long-lasting nails and exceptional service.
          </p>
        </div>

        {/* Slider */}
        <div className="relative min-h-[450px] flex items-center justify-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`w-full transition-all duration-700 ${
                current === index
                  ? "opacity-100 translate-x-0 relative"
                  : "opacity-0 absolute inset-0 translate-x-10 pointer-events-none"
              }`}
            >
              <div className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-yellow-300 rounded-3xl p-10 md:p-14 max-w-4xl mx-auto text-center transition duration-300">
                {/* Quote */}
                <FaQuoteLeft className="text-yellow-300 text-5xl mx-auto mb-8" />

                {/* Review */}
                <p className="text-gray-300 text-xl leading-9 italic">
                  "{testimonial.review}"
                </p>

                {/* Stars */}
                <div className="flex justify-center gap-2 mt-8">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className="text-yellow-300 text-lg"
                    />
                  ))}
                </div>

                {/* Client */}
                <div className="mt-10 flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full border-4 border-yellow-300 bg-white/5 flex items-center justify-center shadow-lg">
                    <FaUserCircle className="text-yellow-300 text-6xl" />
                  </div>

                  <h3 className="mt-5 text-2xl font-bold text-white">
                    {testimonial.name}
                  </h3>

                  <p className="text-yellow-300 font-medium mt-1">
                    {testimonial.service}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-12 gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`transition-all duration-300 rounded-full ${
                current === index
                  ? "w-10 h-3 bg-yellow-300"
                  : "w-3 h-3 bg-gray-600 hover:bg-yellow-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;