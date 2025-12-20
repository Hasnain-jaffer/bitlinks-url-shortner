"use client";
import React from 'react';

const Contact = () => {
  const handleFormSubmit = (formData) => {
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };

  return (
    <section className="min-h-screen bg-gray-900 text-white px-6 py-16 flex flex-col items-center">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-500 mb-8">
        Contact Us
      </h2>

      {/* Form Container */}
      <div className="w-full max-w-2xl bg-gray-800 rounded-2xl p-8 shadow-lg">
        <form
          action={handleFormSubmit}
          className="flex flex-col gap-6"
        >
          {/* Name */}
          <input
            type="text"
            name="username"
            placeholder="Enter your name"
            required
            autoComplete="off"
            className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            autoComplete="off"
            className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="6"
            required
            autoComplete="off"
            className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
