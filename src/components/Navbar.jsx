import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const onSubscribe = () => {
    navigate("/subscribe");
    setIsOpen(false); 
  };

  // Function to handle navigation to different sections
  const navigateToSection = (section) => {
    setIsOpen(false); // Close mobile menu
    
    // If we're not on home page, navigate to home first
    if (window.location.pathname !== "/") {
      navigate("/");
      // Wait a bit for page load then scroll
      setTimeout(() => {
        scrollToSection(section);
      }, 100);
    } else {
      scrollToSection(section);
    }
  };

  const scrollToSection = (section) => {
    const sectionMap = {
      "Home": "Home", 
      "Newsletter": "newsletter",
      "About": "about",
    };

    const sectionId = sectionMap[section];
    
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Alternative: If using React Router with hash links
  const handleNavClick = (section) => {
    setIsOpen(false);
    const sectionMap = {
      "Home": "/",
      "Newsletter": "/#newsletter",
      "About": "/#about",
    };
    navigate(sectionMap[section] || "/");
  };

  return (
    <nav className="top-0 left-0 w-full bg-white shadow-sm z-50 fixed">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo - goes to home */}
        <div 
          className="text-2xl font-semibold cursor-pointer"
          onClick={() => navigate("/")}
        >
          ByteBounce
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-lg">
          {["Home", "Newsletter", "About"].map((item) => (
            <li key={item} className="relative group cursor-pointer">
              <span 
                onClick={() => navigateToSection(item)}
                className="group-hover:text-[#0D868C] transition-colors duration-200"
              >
                {item}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#0D868C] transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Desktop Subscribe Button */}
        <button
          onClick={onSubscribe}
          className="hidden md:block bg-[#0D868C] text-white hover:bg-[#0A6266] px-5 py-2 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
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
                className="cursor-pointer py-2 px-8 rounded-lg hover:bg-gray-50 w-full text-center transition-colors duration-200"
                onClick={() => navigateToSection(item)}
              >
                <span className="hover:text-[#0D868C]">{item}</span>
              </li>
            ))}

            <button
              onClick={onSubscribe}
              className="bg-[#0D868C] text-white px-8 py-3 rounded-full mt-4 hover:bg-[#0A6266] transition-all duration-300"
            >
              Subscribe Now
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}