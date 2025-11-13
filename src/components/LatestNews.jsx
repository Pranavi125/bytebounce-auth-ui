import React from "react";
import NewsCard from "./NewsCard";
import NewsListItem from "./NewsListItem";
import news1 from "../assets/image/newscard1.png";
import news2 from "../assets/image/newscard2.png";
import news3 from "../assets/image/newscard3.png";

const LatestNews = () => {
  const articles = [
    {
      category: "Transportation",
      title: "Rivian gives RJ Scaringe a new pay package worth up to $5B",
      author: "Sean O’Kane",
      time: "19 hours ago",
      image: news1,
    },
    {
      category: "AI",
      title: "Seven more families are now suing OpenAI over ChatGPT’s role in suicides, delusions",
      author: "Amanda Silberling",
      time: "19 hours ago",
      image: news2,
    },
    {
      category: "Apps",
      title: "GoWish’s shopping and wish list app is having its biggest year yet",
      author: "Sarah Perez",
      time: "20 hours ago",
      image: news3,
    },
  ];

  const listItems = [
    { category: "Lifestyle", title: "Is OpenAI putting the ‘ai’ in too big to fail?" },
    { category: "Lifestyle", title: "Holiday gift guide for weirdos" },
    { category: "Lifestyle", title: "Cuts to 10% of US flights start today amid shutdown" },
    { category: "Lifestyle", title: "Is OpenAI putting the ‘ai’ in too big to fail?" },
  ];

   return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8">Latest</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        {/* LEFT: Tall Card */}
        <div className="h-[600px]">
          <NewsCard {...articles[0]} fullHeight />
        </div>

        {/* MIDDLE: Two Half Cards */}
        <div className="flex flex-col h-[600px] gap-6">
          <div className="flex-1">
            <NewsCard {...articles[1]} />
          </div>
          <div className="flex-1">
            <NewsCard {...articles[2]} />
          </div>
        </div>

        {/* RIGHT: News List (same height as others) */}
        <div className="flex flex-col justify-between h-[600px] overflow-hidden">
          <div className="flex flex-col justify-between h-full divide-y divide-gray-200">
            {listItems.map((item, i) => (
              <NewsListItem key={i} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
