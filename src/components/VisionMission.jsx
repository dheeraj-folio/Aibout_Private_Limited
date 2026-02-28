import React from "react";
import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

export default function VisionMission() {
  return (
    <section
      id="vision"
      className="px-6 py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-6xl mx-auto text-center">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            Our Vision & Mission
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-base leading-relaxed text-gray-600 md:text-lg">
            At AIBOUT PRIVATE LIMITED, our foundation is built on long term thinking,
            responsible innovation, and the belief that Artificial Intelligence
            should empower businesses and society not replace human potential.
          </p>
        </motion.div>

        {/* ================= GRID ================= */}
        <div className="grid gap-10 mt-16 text-left md:mt-20 md:grid-cols-2">

          {/* ================= VISION ================= */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-6 transition bg-white border shadow-lg md:p-10 lg:p-12 rounded-3xl hover:shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div className="p-3 text-white rounded-full md:p-4 bg-emerald-600">
                <Eye size={28} />
              </div>
              <h3 className="text-2xl font-semibold md:text-3xl">
                Our Vision
              </h3>
            </div>

            <p className="mb-5 text-sm leading-relaxed text-gray-600 md:text-base lg:text-lg">
              Our vision is to become a globally trusted AI innovation partner,
              delivering intelligent, ethical, and scalable technology solutions
              that redefine how businesses operate in the digital era.
            </p>

            <p className="mb-5 text-sm leading-relaxed text-gray-600 md:text-base lg:text-lg">
              We envision a future where Artificial Intelligence simplifies
              complex processes, enhances human productivity, and drives
              sustainable business transformation across industries.
            </p>

            <ul className="space-y-2 text-sm text-gray-700 md:text-base">
              <li>• Democratizing access to advanced AI technologies</li>
              <li>• Promoting ethical and transparent AI systems</li>
              <li>• Enabling smarter, faster decision making</li>
              <li>• Supporting innovation driven growth</li>
            </ul>
          </motion.div>

          {/* ================= MISSION ================= */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-6 transition bg-white border shadow-lg md:p-10 lg:p-12 rounded-3xl hover:shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div className="p-3 text-white rounded-full md:p-4 bg-emerald-600">
                <Target size={28} />
              </div>
              <h3 className="text-2xl font-semibold md:text-3xl">
                Our Mission
              </h3>
            </div>

            <p className="mb-5 text-sm leading-relaxed text-gray-600 md:text-base lg:text-lg">
              Our mission is to design and deploy powerful AI systems tailored
              to real world business challenges. We focus on delivering measurable
              impact through intelligent automation, predictive analytics, and
              scalable AI integrations.
            </p>

            <p className="mb-5 text-sm leading-relaxed text-gray-600 md:text-base lg:text-lg">
              As a growing startup, we are committed to continuous research,
              innovation, and collaboration ensuring our clients stay ahead
              in an increasingly competitive digital landscape.
            </p>

            <ul className="space-y-2 text-sm text-gray-700 md:text-base">
              <li>• Build secure and scalable AI architectures</li>
              <li>• Help businesses leverage data strategically</li>
              <li>• Encourage responsible AI implementation</li>
              <li>• Foster long term technology partnerships</li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}