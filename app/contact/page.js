"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (formData) => {
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const fields = [
    { name: "username", type: "text", placeholder: "Enter your name" },
    { name: "email", type: "email", placeholder: "Enter your email" },
  ];

  return (
    <section className="min-h-screen bg-gray-950 text-white px-6 py-20 flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-center text-blue-400 mb-8"
      >
        Contact Us
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="w-full max-w-2xl bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-xl"
      >
        <form action={handleFormSubmit} className="flex flex-col gap-5">
          {fields.map((f) => (
            <input
              key={f.name}
              type={f.type}
              name={f.name}
              placeholder={f.placeholder}
              required
              autoComplete="off"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 transition-all"
            />
          ))}

          <textarea
            name="message"
            placeholder="Enter your message"
            rows={6}
            required
            autoComplete="off"
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 transition-all resize-none"
          />

          <motion.button
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all"
          >
            Submit
          </motion.button>

          <AnimatePresence>
            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-green-400 text-sm text-center"
              >
                Message sent successfully!
              </motion.p>
            )}
          </AnimatePresence>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
