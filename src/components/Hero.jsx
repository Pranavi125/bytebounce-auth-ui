import { useState } from "react";
import heroImage from "../assets/image/Hero.png";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);

    try {
      // Method 1: Direct form submission to Substack
      const formData = new FormData();
      formData.append('email', email);
      
      // This will redirect to Substack but you can't avoid it completely
      // due to their CSP policies
      const response = await fetch('https://pandeyk.substack.com/api/v1/free/subscribe', {
        method: 'POST',
        body: formData,
        mode: 'no-cors' // Use no-cors to avoid CORS issues
      });

      // Show success regardless (since we can't read response with no-cors)
      setShowPopup(true);
      setEmail("");
      
    } catch (error) {
      console.error('Subscription error:', error);
      // Fallback: Open in new tab
      window.open(`https://pandeyk.substack.com/subscribe?email=${encodeURIComponent(email)}`, '_blank');
      setShowPopup(true);
      setEmail("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative flex flex-col justify-center items-center text-center text-white px-6"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "calc(100vh - 80px)"
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">
          Subscribe to the Daily Bounce
        </h1>

        <p className="text-lg md:text-xl mb-6">
          We track and compare the world's companies. Stay ahead with insights.
        </p>

        <form
          onSubmit={handleSubscribe}
          className="flex items-center gap-2 bg-gray-800/60 backdrop-blur-md p-1 w-full max-w-md mx-auto rounded-full"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-4 py-2 w-full rounded-full bg-transparent text-white placeholder-white focus:outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-[#3C096C] hover:bg-[#5A189A] text-white px-6 py-2 rounded-full transition-all"
          >
            {loading ? "Processing..." : "Subscribe"}
          </button>
        </form>
      </div>

      {showPopup && (
        <div
          className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
          onClick={() => setShowPopup(false)}
        >
          <div
            className="bg-white text-black p-6 rounded-xl shadow-xl max-w-sm w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-3">🎉 Check Your Email</h2>
            <p className="mb-4">
              Please check your inbox to confirm your subscription to Daily Bounce.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-[#3C096C] text-white px-4 py-2 rounded-lg w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}