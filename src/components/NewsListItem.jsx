import React from "react";

const NewsListItem = ({ category, title }) => (
  <div className="py-3">
    <span className="text-[11px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
      {category}
    </span>
    <h3 className="font-semibold text-gray-800 mt-1 hover:underline cursor-pointer leading-snug text-sm sm:text-[#00A8C5]ase">
      {title}
    </h3>
  </div>
);

export default NewsListItem;
