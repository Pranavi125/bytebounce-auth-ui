import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className=" left-0 w-full h-1  z-50  ">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-semibold tracking-wide cursor-pointer">
          Logo
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-lg font-medium">
          {["Latest", "Services", "About","Contact us"].map((item) => (
            <li
              key={item}
              className="relative cursor-pointer group"
            >
              <span className="transition-colors duration-300 group-hover:text-black">
                {item}
              </span>
              {/* Underline on hover */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Subscribe Button */}
        <button className="hidden md:block bg-[#3C096C] text-white px-5 py-2 rounded-md hover:bg-[#5A189A] transition-all duration-300">
          Subscribe
        </button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <X
              size={28}
              onClick={toggleMenu}
              className="cursor-pointer"
            />
          ) : (
            <Menu
              size={28}
              onClick={toggleMenu}
              className="cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-white bg-opacity-90 backdrop-blur-lg shadow-md ">
          <ul className="flex flex-col items-center space-y-4 py-6 text-lg font-medium">
            {["Latest", "Services", "About", "Contact us"].map((item) => (
              <li
                key={item}
                className="cursor-pointer hover:text-black transition-colors duration-300"
                onClick={toggleMenu}
              >
                {item}
              </li>
            ))}
            <button className="bg-[#3C096C] text-white px-6 py-2 rounded-md hover:bg-[#5A189A] transition-all duration-300">
              Subscribe
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}
