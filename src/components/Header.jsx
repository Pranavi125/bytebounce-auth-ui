import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
        <Link to="/" className="flex items-center gap-2 font-bold text-green-600">
          <div className="w-9 h-9 rounded-lg bg-green-500 text-white flex items-center justify-center">
            B
          </div>
          ByteBounce
        </Link>

        <nav className="hidden md:flex gap-8 text-gray-600">
          <Link to="/">Home</Link>
          <Link to="/jobs" className="font-medium text-black">
            Jobs & Internships
          </Link>
          <Link to="/">Newsletter</Link>
          <Link to="/">About</Link>
        </nav>

        <button className="bg-green-500 text-white px-5 py-2 rounded-lg">
          Find Jobs
        </button>
      </div>
    </header>
  );
};

export default Header;
