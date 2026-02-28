import React from "react";
import { Link } from "react-router-dom";
import { Zap, CheckCircle, Eye, MessageSquare, ArrowRight } from "lucide-react";

export default function Vision() {
  const pillars = [
    { icon: <Zap className="text-emerald-600" />, title: "AI for Every Business", desc: "Scalable AI solutions designed for startups, MSMEs, and global enterprises." },
    { icon: <CheckCircle className="text-emerald-600" />, title: "Data Driven Future", desc: "Empowering organizations to make smarter decisions using advanced analytics." },
    { icon: <Eye className="text-emerald-600" />, title: "Automation Excellence", desc: "Reducing manual efforts through intelligent automation systems." },
    { icon: <MessageSquare className="text-emerald-600" />, title: "Innovation & Research", desc: "Continuously building cutting edge AI technologies for real world challenges." },
    { icon: <Zap className="text-emerald-600" />, title: "Ethical & Responsible AI", desc: "Developing secure, transparent, and human centered AI systems." },
    { icon: <CheckCircle className="text-emerald-600" />, title: "Global AI Impact", desc: "Creating AI products that compete at international standards." },
  ];

  const goals = [
    "Develop globally competitive AI products",
    "Support Indian startups with affordable AI",
    "Promote responsible AI adoption",
    "Build India as a global AI innovation hub",
  ];

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 sm:py-24 lg:py-28 bg-gradient-to-b from-emerald-100">
      <div className="mx-auto max-w-7xl">

        {/* Top Header */}
        <div className="max-w-4xl mx-auto text-center mb-14 sm:mb-16 lg:mb-20">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
            Our <span className="text-emerald-600">Vision</span>
          </h2>

          <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
            At <span className="font-semibold text-emerald-600">AIBOUT PRIVATE LIMITED</span>, we envision a future where Artificial Intelligence 
            empowers businesses, transforms industries, and creates 
            equal digital opportunities across India and beyond.
          </p>
        </div>

        {/* Company Vision Description */}
        <div className="p-6 mb-16 bg-white border border-gray-200 shadow-sm sm:p-8 lg:p-10 sm:mb-20 lg:mb-24 rounded-3xl">
          <p className="max-w-4xl mx-auto text-base leading-relaxed text-center text-gray-700 sm:text-lg">
            As an emerging AI startup based in Maharashtra, our mission is to 
            make AI accessible, affordable, and impactful for startups, MSMEs, 
            and enterprises. We focus on practical implementation, innovation, 
            and long term scalability to ensure real business growth.
          </p>
        </div>

        {/* Vision Pillars */}
        <div className="grid gap-6 mb-16 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 sm:mb-20 lg:mb-28">
          {pillars.map(({ icon, title, desc }, idx) => (
            <div key={idx} className="p-6 transition duration-300 bg-white border border-gray-200 shadow-sm sm:p-8 rounded-2xl hover:shadow-xl hover:-translate-y-2">
              <div className="flex items-center justify-center w-12 h-12 mb-4 text-white bg-emerald-100 rounded-full">
                {icon}
              </div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900 sm:text-xl">{title}</h3>
              <p className="text-sm leading-relaxed text-gray-600 sm:text-base">{desc}</p>
            </div>
          ))}
        </div>

        {/* Future Roadmap */}
        <div className="mb-16 text-center sm:mb-20 lg:mb-24">
          <h3 className="mb-8 text-2xl font-bold text-gray-900 sm:mb-10 lg:mb-12 sm:text-3xl">
            Our Long Term Goals
          </h3>

          <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 md:grid-cols-4">
            {goals.map((goal, index) => (
              <div key={index} className="p-6 bg-emerald-50 rounded-2xl">
                <div className="mb-2 text-xl font-bold text-emerald-600 sm:text-2xl">0{index + 1}</div>
                <p className="text-sm text-gray-700 sm:text-base">{goal}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Section */}
        <div className="p-6 mb-16 text-center bg-white border border-gray-200 shadow-sm sm:p-8 lg:p-12 sm:mb-20 lg:mb-24 rounded-3xl">
          <h3 className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl">
            Creating Real-World Impact
          </h3>
          <p className="max-w-3xl mx-auto text-sm leading-relaxed text-gray-600 sm:text-base lg:text-lg">
            We believe Artificial Intelligence should not just be powerful 
            it should be meaningful. Our vision focuses on building AI 
            systems that improve productivity, enhance decision making, 
            and unlock new growth opportunities for businesses worldwide.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl">
            Join Us in Shaping the Future of AI
          </h3>
          <Link to="/contact">
            <button className="gap-2 px-8 py-3 text-sm font-semibold text-white transition duration-300 rounded-full shadow-md sm:px-10 sm:py-4 sm:text-base bg-emerald-600 hover:bg-emerald-700">
              Explore Our Solutions 
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}