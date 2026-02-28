import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
  };

  return (
    <div id="contact" className="px-4 py-16 sm:px-6 md:px-16 sm:py-20 bg-gray-50">

      {/* Heading */}
      <div className="mb-12 text-center">
        <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl md:text-4xl">
          Let's Build Together
        </h1>
        <p className="max-w-xl mx-auto mt-4 text-sm text-gray-600 sm:text-base">
          Partner with AIBOUT PRIVATE LIMITED and unlock the true potential of
          AI for your business growth.
        </p>
      </div>

      {submitted ? (
        <div className="max-w-xl p-8 mx-auto text-center bg-white border shadow-md sm:p-10 rounded-2xl">
          <h2 className="mb-4 text-xl font-bold sm:text-2xl text-emerald-600">
            ✅ Thank You!
          </h2>
          <p className="text-gray-600">
            Your message has been successfully sent. Our team will contact you soon.
          </p>
        </div>
      ) : (
        <div className="grid max-w-2xl gap-10 mx-auto md:grid-cols-1">

        

          {/* Contact Form */}
          <div className="p-6 bg-white shadow-md sm:p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-5">

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Company
                </label>
                <input
                  type="text"
                  placeholder="Your Company"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows="4"
                  required
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 font-semibold text-white transition rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 hover:opacity-90"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      )}
    </div>
  );
}