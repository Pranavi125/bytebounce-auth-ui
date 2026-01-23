import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  /* ------------------ SUBSCRIBE HANDLER ------------------ */
  const onSubscribe = () => {
    setOpenModal(true);
    setIsOpen(false);
  };

  /* ------------------ SECTION NAVIGATION ------------------ */
  const navigateToSection = (section) => {
    setIsOpen(false);

    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToSection(section);
      }, 100);
    } else {
      scrollToSection(section);
    }
  };

  const scrollToSection = (section) => {
    const sectionMap = {
      Home: "Home",
      Newsletter: "newsletter",
      About: "about",
    };

    const sectionId = sectionMap[section];
    if (sectionId) {
      const element = document.getElementById(sectionId);
      element
        ? element.scrollIntoView({ behavior: "smooth" })
        : window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

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
              src="https://bytebounce.substack.com/embed"
              width="100%"
              height="200"
              style={{ border: "1px solid #EEE", background: "white" }}
              frameBorder="0"
              scrolling="no"
            ></iframe>
            {/* <iframe src="https://bytebounce.substack.com/embed" width="480" height="320" style="border:1px solid #EEE; background:white;" frameborder="0" scrolling="no"></iframe> */}
          </div>
        </div>
      )}

      {/* ---------------- NAVBAR ---------------- */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-40">
        <div className="max-w-7xl mx-auto px-6 p-1 flex justify-between items-center">
          
          {/* Logo */}
          <div
            className="font-semibold cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src="/bytebounce.png" alt="ByteBounce" className="h-18" />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-10 text-lg">
            {["Home", "Newsletter", "About"].map((item) => (
              <li key={item} className="relative group cursor-pointer">
                <span
                  onClick={() => navigateToSection(item)}
                  className="group-hover:text-[#0D868C] transition-colors"
                >
                  {item}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#0D868C] transition-all group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* Desktop Subscribe */}
          <button
            onClick={onSubscribe}
            className="hidden md:block bg-[#0D868C] text-white px-5 py-2 rounded-full hover:bg-[#0A6266] transition-all hover:scale-105 active:scale-95"
          >
            Subscribe Now
          </button>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            {isOpen ? (
              <X
                size={28}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer text-[#0D868C]"
              />
            ) : (
              <Menu
                size={28}
                onClick={() => setIsOpen(true)}
                className="cursor-pointer"
              />
            )}
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 border-t">
            <ul className="flex flex-col items-center space-y-4 py-6 text-lg">
              {["Home", "Newsletter", "About"].map((item) => (
                <li
                  key={item}
                  className="cursor-pointer py-2 px-8 rounded-lg hover:bg-gray-50 w-full text-center"
                  onClick={() => navigateToSection(item)}
                >
                  {item}
                </li>
              ))}

              <button
                onClick={onSubscribe}
                className="bg-[#0D868C] text-white px-8 py-3 rounded-full hover:bg-[#0A6266] transition-all"
              >
                Subscribe Now
              </button>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}