import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import QuoteImage from "../assets/image/quote.png";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;

    setSubscribed(true);

    // Submit silently to Substack
    document.getElementById("hidden-substack-form").submit();

    // Show popup after small delay
    setTimeout(() => {
      setShowPopup(true);
      setSubscribed(false);
      setEmail("");
    }, 800);
  };

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

          <div className="w-full flex justify-center mt-6 px-2">
            <form
              onSubmit={handleSubscribe}
              className="flex items-center gap-2 rounded-full bg-gray-800/60 backdrop-blur-md p-1 w-full max-w-md"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="px-4 py-2 w-full rounded-full bg-transparent text-white placeholder-white focus:outline-none font-[Albert Sans]"
              />

              <button
                type="submit"
                disabled={subscribed}
                className={`${
                  subscribed
                    ? "bg-[#3C096C] cursor-not-allowed"
                    : "bg-[#3C096C] hover:bg-[#5A189A]"
                } text-white px-6 py-2 rounded-full transition-all duration-300 font-[Albert Sans]`}
              >
                {subscribed ? "Subscribed" : "Subscribe"}
              </button>
            </form>

            {/* Hidden Substack Form */}
            <iframe
              name="hidden-substack"
              id="hidden-substack-iframe"
              style={{ display: "none" }}
            ></iframe>

            <form
              id="hidden-substack-form"
              action="https://pandeyk.substack.com/subscribe"
              method="post"
              target="hidden-substack"
              style={{ display: "none" }}
            >
              <input type="email" name="email" value={email} readOnly />
            </form>
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

      {/* POPUP MODAL */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 p-4">

          <div className="bg-[#FBF5EF] p-8 rounded-2xl shadow-xl max-w-lg w-full text-center">
            <h2 className="text-4xl font-bold mb-4">
              Thank You 🎉
            </h2>

            <p className="text-lg text-gray-700 mb-4">
              Thank you for being a subscriber!
            </p>

            <p className="text-gray-600 mb-6">
              So I can send you the most helpful content, would you mind taking 
              50 seconds to complete this survey? Don’t worry, completing this 
              survey won’t take you to a new page. Thank you in advance.
            </p>

            <button
              onClick={() => navigate("/")}
              className="bg-[#68C7E8] text-black px-6 py-3 rounded-full font-medium hover:bg-[#7bd6f3] transition-all"
            >
              Go Back To Previous Page
            </button>
          </div>

        </div>
      )}

    </div>
  );
};

export default NewsletterSection;
