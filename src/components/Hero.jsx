import { useState } from "react";
import heroImage from "../assets/image/Hero.png";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) return;

    setSubscribed(true);

    // Reset form after a short delay
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 2500);
  };

  return (
    <section
      className="relative flex flex-col justify-center items-center text-center text-white px-6"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "calc(100vh - 80px)",
        marginTop: "80px",
      }}
    >
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4 font-[Albert Sans]">
          Subscribe to the Daily Bounce
        </h1>
        <p className="text-lg md:text-xl mb-6 font-[Albert Sans]">
          We track and compare the world’s companies. Our AI keeps you a step
          ahead of changing markets and competition.
        </p>

        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-4 py-2 w-full sm:w-80 rounded-md bg-gray-500 text-white placeholder-white focus:outline-none font-[Albert Sans]"
          />
          <button
            type="submit"
            disabled={subscribed}
            className={`${
              subscribed
                ? "bg-green-600 cursor-not-allowed"
                : "bg-[#3C096C] hover:bg-[#5A189A]"
            } text-white px-6 py-2 rounded-md transition-all duration-300 font-[Albert Sans]`}
          >
            {subscribed ? "Subscribed ✓" : "Subscribe"}
          </button>
        </form>
      </div>
    </section>
  );
}
