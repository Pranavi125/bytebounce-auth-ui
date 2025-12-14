import { useState } from "react";
import { Facebook, Twitter, Wifi, MailPlus, Linkedin } from "lucide-react";

const Footer = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {/* ---------------- SUBSTACK MODAL ---------------- */}
      {openModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-lg shadow-xl relative">
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
            >
              ✕
            </button>

            <h2 className="text-xl font-semibold mb-4 text-center">
              Subscribe to ByteBounce Updates
            </h2>

            <iframe
              src="https://khushhipandey.substack.com/embed"
              width="100%"
              height="200"
              style={{ border: "1px solid #EEE", background: "white" }}
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </div>
        </div>
      )}

      {/* ---------------- FOOTER ---------------- */}
      <footer className="bg-black px-6 sm:px-12 lg:px-20 text-white mt-10 sm:rounded-t-[120px] lg:rounded-t-[180px] py-10">
        <section className="max-w-6xl mx-auto">

          {/* Desktop */}
          <div className="hidden lg:flex lg:justify-evenly lg:items-start gap-8">

            {/* Logo */}
            <div>
              <a className="text-4xl font-bold" href="/">ByteBounce</a>
              <p className="text-sm mt-4 opacity-70 max-w-[240px]">
                Your weekly career catalyst. Curated opportunities, insider insights, and zero fluff.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 py-6 flex-wrap mt-16">
              <Facebook className="fill-white hover:bg-gray-700 h-9 w-9 p-2 border border-white/50 rounded-full cursor-pointer" />
              <Twitter className="fill-white hover:bg-gray-700 h-9 w-9 p-2 border border-white/50 rounded-full cursor-pointer" />
              <Wifi className="hover:bg-gray-700 h-9 w-9 p-2 border border-white/50 rounded-full cursor-pointer" />
              <MailPlus className="hover:bg-gray-700 h-9 w-9 p-2 border border-white/50 rounded-full cursor-pointer" />
              <Linkedin className="fill-white hover:bg-gray-700 h-9 w-9 p-2 border border-white/50 rounded-full cursor-pointer" />
            </div>

            {/* Newsletter */}
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold mb-3">Join Our Newsletter</h3>
              <p className="text-sm opacity-70 mb-3 max-w-[300px]">
                One email per week. No spam. High-value opportunities only.
              </p>
              <button
                onClick={() => setOpenModal(true)}
                className="bg-[#0D868C] text-white hover:bg-[#0A6266] px-4 py-2 rounded-lg text-sm font-medium"
              >
                Subscribe
              </button>
            </div>

          </div>

          {/* Mobile View */}
          <div className="lg:hidden text-center">
            <a className="text-2xl font-bold" href="/">ByteBounce</a>
            <p className="text-xs opacity-70 mt-1.5">
              Your weekly curated career boost.
            </p>

            <div className="flex flex-col items-center mt-8">
              <h3 className="text-md font-semibold mb-2">Join Our Newsletter</h3>
              <p className="text-xs opacity-70 mb-2 max-w-[300px]">
                One email per week. No spam. High-value opportunities only.
              </p>
              <button
                onClick={() => setOpenModal(true)}
                className="bg-[#0D868C] text-white hover:bg-[#0A6266] px-3 py-2 rounded-lg text-sm font-medium"
              >
                Subscribe
              </button>
            </div>

            <div className="flex items-center justify-center gap-3 flex-wrap mt-8">
              <Facebook className="fill-white hover:bg-gray-700 h-8 w-8 p-2 border border-white/50 rounded-full cursor-pointer" />
              <Twitter className="fill-white hover:bg-gray-700 h-8 w-8 p-2 border border-white/50 rounded-full cursor-pointer" />
              <Wifi className="hover:bg-gray-700 h-8 w-8 p-2 border border-white/50 rounded-full cursor-pointer" />
              <MailPlus className="hover:bg-gray-700 h-8 w-8 p-2 border border-white/50 rounded-full cursor-pointer" />
              <Linkedin className="fill-white hover:bg-gray-700 h-8 w-8 p-2 border border-white/50 rounded-full cursor-pointer" />
            </div>
          </div>

        </section>

        <hr className="mt-6 border-gray-700" />

        <p className="text-center text-xs opacity-60 pb-4 mt-4">
          © {new Date().getFullYear()} ByteBounce. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
