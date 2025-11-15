import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const onSubscribe = () => {
    navigate("/subscribe");
  };

  return (
    <nav className="top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="text-2xl font-semibold cursor-pointer">
          Logo
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-lg">
          {["Latest", "Services", "About", "Contact us"].map((item) => (
            <li key={item} className="relative group cursor-pointer">
              <span className="group-hover:text-black">{item}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Desktop Subscribe Button */}
        <button
          onClick={onSubscribe}
          className="hidden md:block bg-[#3C096C] text-white px-5 py-2 rounded-full hover:bg-[#5A189A] transition-all duration-300"
        >
          Subscribe
        </button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <X size={28} onClick={() => setIsOpen(false)} className="cursor-pointer" />
          ) : (
            <Menu size={28} onClick={() => setIsOpen(true)} className="cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-6 text-lg">
            {["Latest", "Services", "About", "Contact us"].map((item) => (
              <li key={item} className="cursor-pointer">{item}</li>
            ))}

            <button
              onClick={onSubscribe}
              className="bg-[#3C096C] text-white px-6 py-2 rounded-md hover:bg-[#5A189A]"
            >
              Subscribe
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}
