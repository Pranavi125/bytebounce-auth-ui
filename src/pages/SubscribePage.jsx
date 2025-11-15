import React from "react";
import QuoteImage from "../assets/image/quote.png"; // ← Put your image in /assets

const NewsletterSection = () => {
  return (
    <div className="w-full min-h-screen bg-[#F7E1B5] flex flex-col md:flex-row">
      
      {/* LEFT SECTION */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
        <h1 className="text-3xl md:text-4xl font-semibold text-center mb-6">
          Subscribe to the Daily Bounce
        </h1>

        <div className="bg-white shadow-md p-6 rounded-md w-full max-w-lg">
          <p className="text-gray-700 mb-3 text-sm md:text-base">
            Delivered to your inbox every morning and prepares you for your day in minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            <button className="bg-[#2B0F19] text-white px-5 py-2 rounded-md hover:opacity-90 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION WITH IMAGE */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-8 bg-white">
        <img
          src={QuoteImage}
          alt="quote"
          className="w-full max-w-md h-auto object-contain"
        />
      </div>

    </div>
  );
};

export default NewsletterSection;
