import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import {
  Brain,
  Sparkles,
  Eye,
  Cpu,
  TrendingUp,
  Code,
  MessageSquare,
  BarChart3,
  Settings,
} from "lucide-react";

// Services Data
const services = [
  {
    title: "Machine Learning & Deep Learning",
    desc: "We design intelligent models that analyze patterns, predict outcomes, and continuously improve performance using advanced ML and Deep Learning techniques.",
    icon: Brain,
    id: "machine-learning",
  },
  {
    title: "Natural Language Processing",
    desc: "From chatbots to sentiment analysis, our NLP systems understand human language and transform text data into meaningful insights.",
    icon: Sparkles,
    id: "natural-language-processing",
  },
  {
    title: "Computer Vision Applications",
    desc: "AI powered image and video recognition systems for automation, monitoring, medical imaging, and intelligent surveillance.",
    icon: Eye,
    id: "computer-vision",
  },
  {
    title: "AI Automation Systems",
    desc: "Automate repetitive workflows, reduce operational costs, and enhance productivity with intelligent process automation solutions.",
    icon: Cpu,
    id: "ai-automation",
  },
   {
    title: "Predictive Analytics",
    desc: "Use advanced forecasting models to anticipate trends, detect risks, and make strategic business decisions confidently.",
    icon: TrendingUp,
  },
  {
    title: "Custom AI Software Development",
    desc: "Tailored AI powered applications built specifically to match your industry, goals, and operational requirements.",
    icon: Code,
  },
  {
    title: "AI Chatbot Development",
    desc: "Smart conversational AI systems for websites and mobile apps that enhance customer engagement and automate support.",
    icon: MessageSquare,
  },
  {
    title: "Data Analytics & Insights",
    desc: "Transform raw data into dashboards, reports, and strategic insights that empower leadership and management teams.",
    icon: BarChart3,
  },
  {
    title: "AI Consulting & Strategy",
    desc: "End-to-end AI strategy consulting to help businesses identify opportunities, implement solutions, and scale intelligently.",
    icon: Settings,
  },
];

export default function Services() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <section
      id="services-section"
      className="min-h-screen px-6 py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Transforming Businesses with{" "}
            <span className="text-emerald-600">Advanced AI Services</span>
          </h2>
          <p className="max-w-3xl mx-auto mb-16 text-lg leading-relaxed text-gray-600">
            At AIBOUT PRIVATE LIMITED, we deliver intelligent AI solutions that
            help organizations automate processes, analyze complex data, and
            unlock new growth opportunities.
          </p>
        </motion.div>
 
        
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
               return (
              <motion.div
               id={service.id}
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-10 transition duration-300 bg-white border border-gray-200 shadow-md rounded-3xl hover:shadow-2xl hover:-translate-y-3"
              >
               
                <div className="flex items-center justify-center w-16 h-16 mb-6 text-white shadow-lg rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500">
                  <Icon size={30} />
                </div>
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-base leading-relaxed text-gray-600">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* How We Work */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mt-28"
        >
          <h3 className="mb-6 text-3xl font-bold text-gray-900">
            How We Deliver Value
          </h3>
          <p className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-600">
            Our approach begins with understanding your business challenges
            deeply. We analyze your data ecosystem, design customized AI
            strategies, build scalable models, and deploy intelligent systems
            that create measurable impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}