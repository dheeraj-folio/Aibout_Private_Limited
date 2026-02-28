import React from "react";
import { Link } from "react-router-dom";
import { LineChart, MessageSquare, Eye, Zap, CheckCircle, ArrowRight } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-white selection:bg-emerald-100">

      {/* ================= HERO SECTION ================= */}
      <section className="px-6 pt-28 pb-20 bg-gradient-to-r from-emerald-50 via-white to-emerald-50">
        <div className="mx-auto max-w-7xl text-center">

          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 font-semibold text-sm text-emerald-600 bg-emerald-100 border border-emerald-200 rounded-full">
            <Zap size={16} /> Based in Satara • Serving Globally
          </div>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-6xl lg:text-7xl">
            Empowering Business Through <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
              Intelligent Transformation
            </span>
          </h1>

          <p className="max-w-2xl mx-auto mb-10 text-lg leading-relaxed text-gray-600 md:text-xl">
            We build AI powered systems for scalable growth bridging complexity
            and clarity through cloud native intelligence.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/contact">
              <button className="flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold text-white transition-all shadow-lg bg-emerald-600 rounded-2xl hover:bg-emerald-700 hover:scale-105">
                Ready to Automate? <ArrowRight size={20} />
              </button>
            </Link>

            <Link to="/contact">
              <button className="px-8 py-4 text-lg font-bold transition-all text-emerald-600 bg-white border border-emerald-200 rounded-2xl hover:bg-emerald-50">
                View Our Vision
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= WHY SECTION ================= */}
      <section className="py-20 bg-emerald-50/40">
        <div className="px-6 mx-auto max-w-7xl">
          <div className="grid items-center gap-12 md:grid-cols-2">

            {/* Left Card */}
            <div className="p-8 bg-emerald-600 border border-emerald-100 rounded-3xl shadow-lg">
              <h3 className="mb-6 text-2xl font-bold text-white">
                The Startup Advantage
              </h3>

              <ul className="space-y-5">
                {[
                  { title: "Zero Legacy Debt", desc: "Built on modern AI stack." },
                  { title: "Agile Development", desc: "Fast MVP deployment." },
                  { title: "Cloud Native Architecture", desc: "Scalable & resilient systems." },
                  { title: "Problem First Engineering", desc: "Solutions before tools." },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="flex-shrink-0 mt-1 text-emerald-100" size={18} />
                    <div>
                      <p className="font-semibold text-white">{item.title}</p>
                      <p className="text-sm text-emerald-100">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Content */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-emerald-600 md:text-4xl">
                Why AIBOUT?
              </h2>
              <p className="mb-6 text-lg text-gray-600">
                As a next generation AI startup, we leverage scalable architecture
                and modern research to ensure your business stays future ready.
              </p>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="p-5 bg-white border-l-4 rounded-lg shadow-sm border-emerald-600">
                  <h4 className="text-xl font-bold text-emerald-600">100%</h4>
                  <p className="text-sm text-gray-500">Ethical AI Focus</p>
                </div>

                <div className="p-5 bg-white border-l-4 border-teal-500 rounded-lg shadow-sm">
                  <h4 className="text-xl font-bold text-emerald-600">Global Standards</h4>
                  <p className="text-sm text-gray-500">Local Vision</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="py-20 bg-white">
        <div className="px-6 mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl text-emerald-600">
              Our Core Capabilities
            </h2>
            <p className="text-gray-600">Modern AI stack for scalable digital transformation.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <ServiceCard
              icon={<LineChart className="text-emerald-600" />}
              title="Predictive Analytics"
              desc="Transform raw data into actionable future insights."
            />
            <ServiceCard
              icon={<MessageSquare className="text-emerald-600" />}
              title="AI Chatbots"
              desc="Private AI assistants trained on your business data."
            />
            <ServiceCard
              icon={<Eye className="text-emerald-600" />}
              title="Computer Vision"
              desc="Smart inspection & automation using AI vision models."
            />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 text-white bg-gradient-to-r from-emerald-600 to-teal-500">
        <div className="max-w-4xl px-6 mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Ready to Transform Your Business?
          </h2>
          <p className="mb-10 text-lg opacity-90">
            Let’s architect your AI transformation roadmap from idea to intelligent execution.
          </p>
          <Link to="/contact">
            <button className="px-10 py-4 font-bold transition bg-white text-emerald-600 rounded-2xl hover:bg-emerald-50">
              Get Started Today
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
};

const ServiceCard = ({ icon, title, desc }) => (
  <div className="p-8 bg-white border border-emerald-100 rounded-3xl shadow-md transition hover:shadow-xl hover:border-emerald-300">
    <div className="flex items-center justify-center w-14 h-14 mb-6 bg-emerald-50 rounded-2xl">
      {icon}
    </div>
    <h3 className="mb-3 text-xl font-bold text-emerald-600">{title}</h3>
    <p className="text-gray-600">{desc}</p>
  </div>
);

export default LandingPage;