import React, { useState } from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-white/90 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
        
        {/* Logo */}
        <div className="w-[140px]">
          <img src={logo} alt="Logo" className="w-full" />
        </div>

        {/* Desktop Menu */}
        <nav className="items-center hidden gap-8 font-medium text-gray-600 md:flex">
          <Link to="/Home" className="hover:text-emerald-600 transition">
            Home
          </Link> 
          <Link to="/services01" className="hover:text-emerald-600 transition">
            Services
          </Link>
          <Link to="/VisionMission01" className="hover:text-emerald-600 transition">
            Vision
          </Link>
          <Link to="/about" className="hover:text-emerald-600 transition">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-emerald-600 transition">
            Contact
          </Link>
          <Link to="/Company" className="hover:text-emerald-600 transition">
            Company
          </Link>
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Link to="/contact">
            <button className="px-5 py-2 font-medium text-white transition rounded-lg bg-emerald-600 hover:bg-emerald-700">
              Get Started
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] py-4 px-6" : "max-h-0"
        }`}
      >
        <div className="flex flex-col space-y-4 font-medium text-gray-600">
          <Link to="/Home" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/services01" onClick={() => setIsOpen(false)}>
            Services
          </Link>
          <Link to="/VisionMission01" onClick={() => setIsOpen(false)}>
            Vision
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            About Us
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <Link to="/Company" onClick={() => setIsOpen(false)}>
            Company
          </Link>

          <Link to="/contact" onClick={() => setIsOpen(false)}>
            <button className="w-full px-5 py-2 text-white transition rounded-lg bg-emerald-600 hover:bg-emerald-700">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}