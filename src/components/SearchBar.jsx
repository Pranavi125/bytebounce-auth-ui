import { Search } from "lucide-react";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-600" />

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search jobs, companies, or skills..."
        className="
          w-full h-12 pl-12 pr-4 rounded-xl
          border-2 border-emerald-600
          bg-white
          focus:outline-none
          focus:ring-0
          focus:border-emerald-700
          transition-colors
        "
      />
    </div>
  );
};

export default SearchBar;
