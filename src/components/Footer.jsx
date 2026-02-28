import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";

export default function Footer() {
  return (
    <footer className="relative px-6 pt-20 pb-8 text-gray-700 bg-gray-800 from-white to-gray-100">

      <div className="max-w-6xl mx-auto">

        <div className="grid gap-12 md:grid-cols-4">

          {/* Logo */}
          <div>
            <img className="w-[180px] mb-4" src={logo} alt="AIBOUT Logo" />
            <p className="leading-relaxed text-white ">
              Empowering businesses with AI solutions for sustainable growth and digital transformation.
            </p>
          </div>

          {/* Solutions */}
         <div>
          <h3 className="mb-4 font-semibold text-white ">Solutions</h3>
          <ul className="space-y-3 text-white">
            <li>
              <Link to="#machine-learning" className="hover:text-emerald-500">
                Machine Learning
              </Link>
            </li>
            <li>
              <Link
                to="#natural-language-processing"
                className="hover:text-emerald-500"
              >
                Natural Language Processing
              </Link>
            </li>
            <li>
              <Link to="#computer-vision" className="hover:text-emerald-500">
                Computer Vision
              </Link>
            </li>
            <li>
              <Link to="#ai-automation" className="hover:text-emerald-500">
                AI Automation
              </Link>
            </li>
          </ul>
        </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Company</h3>
            <ul className="space-y-3 text-white">
              <li><Link to="/Home" className="hover:text-emerald-500">Home</Link></li>
              <li><Link to="/Services01" className="hover:text-emerald-500">Services</Link></li>
              <li><Link to="/VisionMission01" className="hover:text-emerald-500">Vision</Link></li>
              <li><Link to="/about" className="hover:text-emerald-500">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-500">Contact</Link></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Head Office</h3>
            <p className="text-white">
              Satara, Maharashtra, India <br />
              Serving Clients Globally
            </p>
          </div>

        </div>

        <div className="my-12 border-t border-gray-300"></div>

        <div className="text-sm text-center text-white md:flex md:justify-center  justify-center items-center">
          <p>
            © {new Date().getFullYear()} AIBOUT PRIVATE LIMITED. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}