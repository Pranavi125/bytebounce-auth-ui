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
        // marginTop: "80px",
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
</div>

      </div>
    </section>
  );
}
