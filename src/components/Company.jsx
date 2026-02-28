import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Bot,
  Cpu,
  LineChart,
  Mic,
  Rocket,
  Target,
  Globe,
  ShieldCheck,
  Users,
  Building2,
  GraduationCap,
  HeartPulse,
  Sprout,
  Lightbulb,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

export default function AiboutPage() {
  return (
    <div className="overflow-hidden text-gray-800 bg-white">

      {/* HERO */}
      <section className="relative px-4 py-24 text-white sm:px-6 md:px-16 sm:py-28 md:py-36 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-5xl mx-auto text-center"
        >
          <Rocket size={40} className="mx-auto mb-6 sm:size-[50px] md:size-[60px] animate-bounce" />

          <h1 className="mb-6 text-3xl font-extrabold leading-tight sm:text-5xl md:text-7xl">
            AIBOUT PRIVATE LIMITED
          </h1>

          <p className="text-lg font-light sm:text-2xl md:text-3xl">
            Intelligence. Innovation. Impact.
          </p>

          <p className="max-w-xl mx-auto mt-6 text-sm sm:max-w-2xl md:max-w-3xl sm:mt-8 sm:text-lg opacity-90">
            Engineering intelligent ecosystems that redefine automation,
            productivity, and digital transformation for the modern world.
          </p>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="px-4 py-16 sm:px-6 md:px-16 sm:py-20 md:py-24 bg-gray-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="mb-6 text-2xl font-bold sm:text-3xl md:text-4xl text-emerald-600">
            Who We Are
          </h2>
          <p className="text-base leading-relaxed sm:text-lg">
            AIBOUT is a futuristic AI startup committed to empowering rural
            and urban businesses with scalable artificial intelligence systems.
          </p>
        </motion.div>
      </section>

      {/* VISION & MISSION */}
      <section className="px-4 py-16 sm:px-6 md:px-16 sm:py-20 md:py-24">
        <div className="grid max-w-6xl gap-12 mx-auto md:gap-16 md:grid-cols-2">
          
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Globe className="mb-4 text-emerald-600" size={40} />
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">Vision</h2>
            <p className="text-base sm:text-lg">
              To become a globally recognized AI innovation leader bridging
              rural and urban economies.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Target className="mb-4 text-emerald-600" size={40} />
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">Mission</h2>
            <ul className="space-y-3 text-base list-disc list-inside sm:text-lg">
              <li>Automate complexity with intelligent systems.</li>
              <li>Enable startups & enterprises with AI growth.</li>
              <li>Empower agriculture, healthcare & education.</li>
              <li>Expand AI innovation globally.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="px-4 py-16 sm:px-6 md:px-16 sm:py-20 md:py-24 bg-gray-50">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="mb-12 text-2xl font-bold sm:mb-16 sm:text-3xl md:text-4xl text-emerald-600">
            Core Services
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[
              { icon: Cpu, title: "AI Automation" },
              { icon: Brain, title: "Machine Learning" },
              { icon: Bot, title: "Intelligent Chatbots" },
              { icon: Mic, title: "Voice AI Agents" },
              { icon: LineChart, title: "Smart Analytics" },
              { icon: ShieldCheck, title: "Ethical AI Systems" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 transition bg-white shadow-lg sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl hover:shadow-2xl"
                >
                  <Icon size={36} className="mx-auto mb-4 text-emerald-600" />
                  <h3 className="text-lg font-bold sm:text-xl md:text-2xl">
                    {item.title}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* WHO WE SERVE */}
      <section className="px-4 py-16 sm:px-6 md:px-16 sm:py-20 md:py-24">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-6xl mx-auto text-center">
          <h2 className="mb-12 text-2xl font-bold sm:mb-16 sm:text-3xl md:text-4xl text-emerald-600">
            Who We Serve
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[Users, Building2, GraduationCap, HeartPulse, Sprout].map((Icon, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="p-6 bg-gray-100 sm:p-8 rounded-2xl"
              >
                <Icon size={36} className="mx-auto mb-4 text-emerald-600" />
                <p className="text-base font-semibold sm:text-lg">
                  {["Startups", "Enterprises", "Education", "Healthcare", "Agriculture"][i]}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CULTURE */}
      <section className="px-4 py-20 text-white sm:px-6 md:px-16 sm:py-24 bg-gradient-to-r from-emerald-600 to-teal-600">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-3xl mx-auto text-center">
          <Lightbulb size={40} className="mx-auto mb-6" />
          <h2 className="mb-6 text-2xl font-bold sm:text-3xl md:text-4xl">
            Our Innovation Culture
          </h2>
          <p className="text-base leading-relaxed sm:text-lg">
            Innovation thrives where curiosity meets discipline.
            We build scalable AI systems shaping the future.
          </p>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 text-center sm:px-6 md:px-16 sm:py-20 md:py-24 bg-gray-50">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="mb-6 text-2xl font-bold sm:text-3xl md:text-4xl text-emerald-600">
            Ready to Transform with AI?
          </h2>

          <p className="mb-8 text-base sm:mb-10 sm:text-lg">
            Partner with AIBOUT and unlock intelligent growth.
          </p>

          <a href="contact">
            <button className="px-8 py-3 text-white transition sm:px-10 sm:py-4 bg-emerald-600 rounded-2xl hover:bg-emerald-700">
              Get Started
            </button>
          </a>
        </motion.div>
      </section>

    </div>
  );
}