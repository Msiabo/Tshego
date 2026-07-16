import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
     
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;