import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaCalendarAlt } from "react-icons/fa";
import assets from "../assets/assets";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-yellow-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-24">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group">

            <img
              src={assets.logo}
              alt="Tshego's Nail Oasis"
              className="h-20 w-auto object-contain transition duration-300 group-hover:scale-105"
            />

            <div>
              <h1 className="text-3xl font-bold text-yellow-300 tracking-wide kameron leading-none">
                TSHEGO'S
              </h1>

              <p className="text-white uppercase tracking-[0.35em] text-xs kameron mt-1">
                Nail Oasis
              </p>

              <p className="text-yellow-400 text-xs italic mt-1">
                Luxury Grooming at Your Doorstep
              </p>
            </div>

          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-10">

            {links.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `relative font-medium transition duration-300 ${
                      isActive
                        ? "text-yellow-300"
                        : "text-white hover:text-yellow-300"
                    }`
                  }
                >
                  {link.name}

                  <span className="absolute left-0 -bottom-2 h-[2px] bg-yellow-500 w-0 hover:w-full transition-all duration-300"></span>
                </NavLink>
              </li>
            ))}

          </ul>

          
          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-yellow-400 text-3xl"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="bg-zinc-950 border-t border-yellow-700">

          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-8 py-5 text-lg border-b border-zinc-800 transition ${
                  isActive
                    ? "text-yellow-400 bg-zinc-900"
                    : "text-white hover:bg-yellow-600 hover:text-black"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

        

        </div>
      </div>
    </nav>
  );
};

export default Navbar;