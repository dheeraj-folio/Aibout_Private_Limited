import React from "react";
import { motion } from "framer-motion";
import {
  Eye,
  Target,
  Sparkles,
  ShieldCheck,
  Rocket,
  Brain,
} from "lucide-react";

export default function About() {
  return (
    <div className="overflow-hidden text-gray-800 bg-gradient-to-b from-white to-gray-50">

      {/* ================= HERO SECTION ================= */}
      <section id="top" className="relative px-4 py-20 text-center sm:px-6 sm:py-28 md:py-32">
        
        {/* Glow Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] md:w-[700px] h-[400px] sm:h-[600px] md:h-[700px] bg-emerald-200 opacity-20 blur-[120px] rounded-full"></div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-6xl"
        >
          Building the Future with{" "}
          <span className="text-transparent bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text">
            Artificial Intelligence
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative max-w-xl mx-auto mt-6 text-base text-gray-600 sm:max-w-2xl md:max-w-3xl sm:text-lg"
        >
          AIBOUT PRIVATE LIMITED is a next generation AI startup committed to
          redefining how businesses operate in the digital era through advanced AI systems.
        </motion.p>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="max-w-6xl px-4 py-16 mx-auto sm:px-6 sm:py-20 md:py-24">
        <h2 className="mb-6 text-2xl font-bold sm:text-3xl md:text-4xl">
          Who We Are
        </h2>

        <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
          We are an emerging AI first startup driven by innovation and excellence.
          Our mission is to make AI accessible and scalable for modern businesses.
        </p>
      </section>

      {/* ================= OUR STORY ================= */}
      <section className="max-w-6xl px-4 py-16 mx-auto bg-white shadow-sm sm:px-6 sm:py-20 md:py-24 rounded-2xl sm:rounded-3xl">
        <h2 className="mb-6 text-2xl font-bold sm:text-3xl md:text-4xl">
          Our Story
        </h2>

        <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
          AIBOUT PRIVATE LIMITED was founded with a simple belief 
          intelligent systems should empower businesses.
        </p>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <section className="px-4 py-16 bg-white sm:px-6 sm:py-20 md:py-24">
        <div className="grid max-w-6xl gap-8 mx-auto md:gap-12 sm:grid-cols-1 md:grid-cols-2">
          {[
            {
              title: "Our Vision",
              icon: Eye,
              text: "To become a globally recognized AI innovation leader.",
            },
            {
              title: "Our Mission",
              icon: Target,
              text: "To design scalable and ethical AI solutions.",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="p-6 shadow-lg sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-emerald-50 to-cyan-50"
              >
                <Icon className="mb-4 text-emerald-600" size={36} />
                <h3 className="mb-3 text-xl font-semibold sm:text-2xl">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 sm:text-base">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="max-w-6xl px-4 py-16 mx-auto sm:px-6 sm:py-20 md:py-24">
        <h2 className="mb-10 text-2xl font-bold text-center sm:text-3xl md:text-4xl">
          Our Core Values
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {[Sparkles, ShieldCheck, Brain, Rocket].map((Icon, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-6 text-center bg-white shadow-md rounded-2xl sm:rounded-3xl hover:shadow-xl"
            >
              <Icon size={32} className="mx-auto mb-4 text-emerald-600" />
              <h4 className="text-lg font-semibold sm:text-xl">
                {["Innovation", "Integrity", "Excellence", "Scalability"][i]}
              </h4>
              <p className="mt-2 text-sm text-gray-500">
                Intelligent and scalable AI systems.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= WHAT MAKES US DIFFERENT ================= */}
      <section className="max-w-6xl px-4 py-16 mx-auto sm:px-6 sm:py-20 md:py-24">
        <h2 className="mb-10 text-2xl font-bold text-center sm:text-3xl md:text-4xl">
          What Makes Us Different
        </h2>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
          {[
            "AI-First Approach",
            "Startup Agility",
            "Future Focused Innovation",
          ].map((title, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="p-6 bg-white shadow-md sm:p-8 rounded-2xl sm:rounded-3xl hover:shadow-xl"
            >
              <h4 className="mb-3 text-lg font-semibold sm:text-xl">
                {title}
              </h4>
              <p className="text-sm text-gray-600 sm:text-base">
                Designed to scale and adapt to future technology.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-4 py-20 text-center text-white sm:px-6 sm:py-24 md:py-28 bg-gradient-to-r from-emerald-500 to-cyan-500">
        <h2 className="mb-6 text-2xl font-bold sm:text-3xl md:text-4xl">
          Partner With Us
        </h2>

        <p className="max-w-xl mx-auto mb-8 text-sm sm:max-w-2xl sm:text-base">
          Join us in building intelligent systems that drive transformation.
        </p>

        <a href="contact">
          <button className="px-8 py-3 font-semibold transition bg-white rounded-full shadow-lg sm:px-10 sm:py-4 text-emerald-600 hover:scale-105">
            Get In Touch
          </button>
        </a>
      </section>

    </div>
  );
}