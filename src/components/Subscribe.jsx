import { useState } from "react";
import { Star } from "lucide-react";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) return;

    setSubscribed(true);

    // Submit the form silently
    document.getElementById("hidden-substack-form").submit();

    // reset like hero
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 2500);
  };

  return (
    <main className="px-6 py-16 flex flex-col lg:flex-row gap-16 w-full max-w-6xl mx-auto">

      {/* LEFT SIDE */}
      <section className="w-full lg:w-1/2">
        <div className="flex items-end gap-2 mb-6 flex-wrap">
          <span className="flex items-end gap-2">
            <span className="text-4xl sm:text-5xl font-thin">Subscribe to</span>
            <img 
              src="/plane.svg"
              className="h-10 sm:h-12 md:h-14 w-auto mb-1"
            />
          </span>

          <span className="bg-gradient-to-r from-[#00A8C5] via-[#56C596] to-[#96E6A1] bg-clip-text text-transparent block text-5xl sm:text-6xl font-black leading-tight">
            ByteBounce
          </span>
        </div>

        <p className="text-base sm:text-lg my-6">
          Join a growing community of more than{" "}
          <span className="font-bold">330,000 friendly readers</span>.
        </p>

        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="text-yellow-400 fill-yellow-400 h-5 w-5" />
          ))}
        </div>

        <p className="text-gray-500 text-sm mt-1">200+ reviews</p>
      </section>

      {/* RIGHT SIDE */}
      <section className="w-full py-3 lg:w-1/2">
        <p className="text-base sm:text-lg leading-relaxed mb-6">
          Each week, we share actionable productivity tips, practical life 
          advice, and highlights from our favourite books.
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
            disabled={subscribed}
            className="bg-[#00A8C5] text-white hover:text-black hover:bg-blue-100 py-2 px-5 rounded-full whitespace-nowrap text-sm sm:text-base"
          >
            {subscribed ? "Subscribed ✓" : "Subscribe"}
          </button>
        </form>

        {/* HIDDEN SUBSTACK FORM — submits silently */}
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

        <p className="text-gray-500 text-xs sm:text-sm mt-8 max-w-md">
          No spam. Unsubscribe anytime.
        </p>
      </section>
    </main>
  );
};

export default Subscribe;