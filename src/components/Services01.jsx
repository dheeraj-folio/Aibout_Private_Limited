import React from "react";
import { Link } from "react-router-dom";

const services = [
  "AI Chatbot Development",
  "Machine Learning Solutions",
  "AI Automation for Business",
  "Data Analytics & Insights",
  "Computer Vision Solutions",
  "AI Consulting & Strategy",
];

const processSteps = [
  "Research & Planning",
  "Model Development",
  "Testing & Optimization",
  "Deployment & Support",
];

export default function Services() {
  return (
    <div className="text-gray-800 bg-white">

      {/* ================= HERO ================= */}
      <section className="px-6 pt-32 pb-24 text-center bg-gradient-to-b from-emerald-100 to-white">
        <h1 className="mb-6 text-3xl font-bold leading-tight md:text-5xl lg:text-6xl text-emerald-600">
          Empowering the Future with Artificial Intelligence
        </h1>

        <p className="max-w-2xl mx-auto mb-8 text-base text-gray-600 md:text-lg">
          We build intelligent AI powered systems that help businesses automate,
          innovate, and grow faster in the digital era.
        </p>

        <Link to="/contact">
          <button className="px-8 py-3 font-semibold text-white transition duration-300 rounded-full shadow-md bg-emerald-500 hover:bg-emerald-600 hover:scale-105">
            Get Started →
          </button>
        </Link>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="max-w-6xl px-6 py-20 mx-auto text-center">
        <h2 className="mb-6 text-2xl font-bold md:text-3xl text-emerald-600">
          About AIBOUT
        </h2>

        <p className="max-w-3xl mx-auto text-sm text-gray-600 md:text-base">
          AIBOUT PRIVATE LIMITED is an innovative AI startup focused on delivering
          scalable, secure, and intelligent solutions. We transform ideas into
          real world AI products that create measurable business impact.
        </p>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="max-w-6xl px-6 py-20 mx-auto">
        <h2 className="mb-12 text-2xl font-bold text-center md:text-3xl text-emerald-600">
          Our AI Services
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 transition duration-300 bg-white border rounded-2xl border-emerald-200 hover:shadow-xl hover:-translate-y-2"
            >
              <h3 className="text-lg font-semibold md:text-xl text-emerald-600">
                {service}
              </h3>

              <p className="mt-3 text-sm text-gray-600">
                Delivering cutting edge AI solutions tailored for modern businesses.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TECHNOLOGIES ================= */}
      <section className="max-w-6xl px-6 py-20 mx-auto text-center">
        <h2 className="mb-12 text-2xl font-bold md:text-3xl text-emerald-600">
          Technologies We Use
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {["Python", "TensorFlow", "React", "Node.js", "OpenCV", "AWS", "MongoDB", "Docker"].map(
            (tech, index) => (
              <div
                key={index}
                className="p-4 text-sm font-semibold transition bg-white border rounded-lg md:text-base border-emerald-200 hover:shadow-md hover:-translate-y-1"
              >
                {tech}
              </div>
            )
          )}
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="max-w-6xl px-6 py-20 mx-auto">
        <h2 className="mb-12 text-2xl font-bold text-center md:text-3xl text-emerald-600">
          Our Process
        </h2>

        <div className="grid gap-6 text-center sm:grid-cols-2 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="p-6 transition bg-white border rounded-xl border-emerald-200 hover:shadow-lg"
            >
              <div className="mb-3 text-xl font-bold md:text-2xl text-emerald-500">
                0{index + 1}
              </div>

              <p className="text-sm text-gray-600 md:text-base">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="py-20 text-center bg-emerald-50">
        <h2 className="mb-12 text-2xl font-bold md:text-3xl text-emerald-600">
          Industries We Serve
        </h2>

        <div className="grid max-w-6xl gap-4 px-6 mx-auto sm:grid-cols-2 md:grid-cols-4">
          {["Healthcare", "Finance", "Education", "E-Commerce", "Manufacturing", "Retail", "Logistics", "Startups"].map(
            (industry, index) => (
              <div
                key={index}
                className="p-4 text-sm font-semibold transition bg-white border rounded-lg md:text-base border-emerald-200 hover:shadow-md"
              >
                {industry}
              </div>
            )
          )}
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="max-w-6xl px-6 py-20 mx-auto text-center">
        <h2 className="mb-12 text-2xl font-bold md:text-3xl text-emerald-600">
          What Our Clients Say
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {[
            "AIBOUT transformed our workflow with AI automation!",
            "Their machine learning solution improved our business accuracy by 40%.",
          ].map((review, index) => (
            <div
              key={index}
              className="p-6 bg-white border shadow-sm rounded-xl border-emerald-200"
            >
              <p className="text-sm text-gray-600 md:text-base">“{review}”</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-20 bg-emerald-50">
        <h2 className="mb-12 text-2xl font-bold text-center md:text-3xl text-emerald-600">
          Frequently Asked Questions
        </h2>

        <div className="max-w-4xl px-6 mx-auto space-y-6">
          {[
            ["What industries do you serve?", "We provide AI solutions across multiple industries."],
            ["Do you offer custom AI development?", "Yes, all solutions are customized."],
            ["How long does development take?", "Project timelines depend on requirements."],
          ].map(([q, a], index) => (
            <div key={index} className="p-6 bg-white border rounded-lg border-emerald-200">
              <h4 className="text-sm font-semibold text-emerald-600 md:text-base">{q}</h4>
              <p className="mt-2 text-sm text-gray-600">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 text-center text-white bg-emerald-600">
        <h2 className="mb-6 text-2xl font-bold md:text-3xl">
          Let’s Build Intelligent Solutions Together
        </h2>

        <Link to="/contact">
          <button className="px-8 py-3 font-semibold transition bg-white rounded-full text-emerald-600 hover:bg-gray-100 hover:scale-105">
            Contact Us Today
          </button>
        </Link>
      </section>

    </div>
  );
}