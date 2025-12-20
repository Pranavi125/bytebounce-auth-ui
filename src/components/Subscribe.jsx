import { useState } from "react";
import { Star } from "lucide-react";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;

    // Redirect to Substack with prefilled email
    window.location.href = `https://pandeyk.substack.com/subscribe?email=${encodeURIComponent(
      email
    )}`;
  };

  return (
    <main className="px-6 py-16 flex flex-col lg:flex-row gap-16 w-full max-w-6xl mx-auto">

      {/* LEFT */}
      <section className="w-full lg:w-1/2">
        <div className="flex items-end gap-2 mb-6 flex-wrap">
          <span className="text-4xl sm:text-5xl font-thin">Subscribe to</span>
          <span className="bg-gradient-to-r from-[#00A8C5] via-[#56C596] to-[#e7af73] bg-clip-text text-transparent text-5xl sm:text-6xl font-black">
            ByteBounce
          </span>
        </div>

        <p className="text-base sm:text-lg my-6">
          Join a growing community of more than{" "}
          <span className="font-bold">1200+ friendly readers</span>.
        </p>

        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="text-yellow-400 fill-yellow-400 h-5 w-5" />
          ))}
        </div>

        <p className="text-gray-500 text-sm mt-1">200+ reviews</p>
      </section>

      {/* RIGHT */}
      <section className="w-full lg:w-1/2">
        <p className="text-base sm:text-lg mb-6">
          One powerful newsletter every week. No spam. Just real opportunities.
        </p>

        <form
          onSubmit={handleSubscribe}
          className="flex items-center gap-2 rounded-full bg-white p-2 w-full max-w-md"
        >
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full bg-transparent outline-none text-sm sm:text-base px-3"
          />

          <button
            type="submit"
            className="bg-[#0D868C] text-white hover:bg-[#0A6266] py-2 px-5 rounded-full text-sm sm:text-base"
          >
            Subscribe
          </button>
        </form>

        <p className="text-gray-500 text-xs sm:text-sm mt-8 max-w-md">
          No spam. Unsubscribe anytime.
        </p>
      </section>
    </main>
  );
};

export default Subscribe;
