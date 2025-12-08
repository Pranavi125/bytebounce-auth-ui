import React from "react";

const NewsCard = ({ category, title, author, time, image }) => {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden shadow-md group w-full h-full`}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-white max-w-[85%]">
        <p className="text-xs uppercase tracking-wider opacity-80 mb-1">
          {category}
        </p>
        <h2 className="text-lg sm:text-xl font-semibold leading-tight hover:underline">
          {title}
        </h2>
        <p className="text-xs text-gray-300 mt-1">
          {author} • {time}
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
