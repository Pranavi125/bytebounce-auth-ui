import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Avatar from "./Avatar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const navigate = useNavigate();

  /* -------- refresh user after login / oauth -------- */
  useEffect(() => {
    const loadUser = () => {
      const stored = localStorage.getItem("user");
      setUser(stored ? JSON.parse(stored) : null);
    };

    window.addEventListener("storage", loadUser);
    window.addEventListener("focus", loadUser);

    return () => {
      window.removeEventListener("storage", loadUser);
      window.removeEventListener("focus", loadUser);
    };
  }, []);

  const onSubscribe = () => {
    setOpenModal(true);
    setIsOpen(false);
  };

  const navigateToSection = (section) => {
    setIsOpen(false);

    if (section === "Jobs") {
      navigate("/jobs");
      return;
    }

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
          </div>
        </div>
      )}

      <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-40">
        <div className="max-w-7xl mx-auto px-6 p-1 flex justify-between items-center">

          <div
            className="font-semibold cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src="/bytebounce.png" alt="ByteBounce" className="h-18" />
          </div>

          <ul className="hidden md:flex space-x-10 text-lg">
            {["Home", "Newsletter", "Jobs", "About"].map((item) => (
              <li key={item} className="relative group cursor-pointer">
                <span
                  onClick={() => navigateToSection(item)}
                  className="group-hover:text-[#0D868C] transition-colors"
                >
                  {item === "Jobs" ? "Jobs & Internships" : item}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#0D868C] transition-all group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-4">

            {user ? (
              <Avatar user={user} />   
            ) : (
              <button
                onClick={() => navigate("/login-email")}
                className="px-4 py-2 border rounded-full hover:bg-gray-50"
              >
                Login
              </button>
            )}

            <button
              onClick={onSubscribe}
              className="bg-[#0D868C] text-white px-5 py-2 rounded-full hover:bg-[#0A6266] transition-all hover:scale-105 active:scale-95"
            >
              Subscribe Now
            </button>
          </div>

          <div className="md:hidden">
            {isOpen ? (
              <X size={28} onClick={() => setIsOpen(false)} className="cursor-pointer text-[#0D868C]" />
            ) : (
              <Menu size={28} onClick={() => setIsOpen(true)} className="cursor-pointer" />
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
