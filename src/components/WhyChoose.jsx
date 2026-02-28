import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Lightbulb,
  Settings,
  Rocket,
  ShieldCheck
} from "lucide-react";

const features = [
  {
    title: "Innovative & Research Driven",
    desc: "At AIBOUT PRIVATE LIMITED, innovation is at the core of everything we do. We continuously explore the latest advancements in Artificial Intelligence, Machine Learning, and data science to build forward thinking solutions that give businesses a competitive advantage.",
    icon: Lightbulb,
  },
  {
    title: "Customized AI Solutions",
    desc: "We understand that every business is unique. Our AI systems are carefully designed and tailored to your specific goals, workflows, and industry requirements  ensuring maximum impact and long term value.",
    icon: Settings,
  },
  {
    title: "Scalable & Future Ready Architecture",
    desc: "As a new age AI startup, we build modern, cloud native, and scalable systems that grow with your business. Our solutions are flexible, adaptable, and ready for tomorrow’s challenges.",
    icon: Rocket,
  },
  {
    title: "Quality, Security & Performance",
    desc: "We maintain high standards of quality assurance, security, and optimization. Every solution we deliver is reliable, high performing, and aligned with responsible AI principles.",
    icon: ShieldCheck,
  },
];

export default function WhyChoose() {
  return (
    <section className="relative px-4 py-20 overflow-hidden sm:px-6 lg:px-8 sm:py-24 lg:py-28 bg-gradient-to-b from-white to-gray-50">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] sm:w-[500px] lg:w-[600px] h-[350px] sm:h-[500px] lg:h-[600px] bg-emerald-200 opacity-20 blur-[120px] rounded-full"></div>

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
            Why Choose{" "}
            <span className="text-emerald-600">
              AIBOUT PRIVATE LIMITED?
            </span>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-gray-600 sm:text-lg">
            As an emerging AI startup, we combine innovation, agility, and
            technical excellence to deliver intelligent solutions that drive
            measurable business transformation. We don’t just build AI —
            we build long term value.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid gap-8 sm:gap-10 mt-14 sm:mt-16 lg:mt-20 md:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="flex flex-col gap-6 p-6 transition duration-300 bg-white border shadow-md sm:flex-row sm:gap-8 sm:p-8 lg:p-10 rounded-3xl hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="flex items-center justify-center text-white shadow-lg w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 shrink-0">
                  <Icon size={24} className="sm:w-7 sm:h-7" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-gray-900 sm:text-xl lg:text-2xl">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600 sm:text-base lg:text-lg">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center sm:mt-24"
        >
          <h3 className="mb-4 text-xl font-semibold text-gray-900 sm:text-2xl">
            Partner With a Future Ready AI Startup
          </h3>

          <p className="max-w-3xl mx-auto mb-6 text-sm leading-relaxed text-gray-600 sm:mb-8 sm:text-base">
            We are committed to building intelligent, scalable, and ethical AI
            systems that empower businesses to innovate confidently and grow sustainably.
          </p>

         <Link to="/contact"> <button className="px-8 py-3 text-sm font-semibold text-white transition duration-300 rounded-full shadow-md sm:px-10 sm:py-4 sm:text-base bg-emerald-600 hover:bg-emerald-700">
            Start Your AI Journey
          </button>
          </Link>

          <p className="mt-6 text-xs text-gray-500 sm:text-sm">
            Secure • Scalable • Research Driven • Made in India 🇮🇳
          </p>
        </motion.div>

      </div>
    </section>
  );
}