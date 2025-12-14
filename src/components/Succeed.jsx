import React from 'react';
import { Globe, Plane, Brain, BriefcaseBusiness, TrendingUp, Box } from "lucide-react";

const sections = [
  {
    title: "Global Scholarships",
    text: "Discover fully-funded scholarships and grants from top universities worldwide.",
    icon: <Globe className="w-6 h-6 text-[#0BAFC4]" />
  },
  {
    title: "Study Abroad",
    text: "Explore exchange programs, summer schools, and international opportunities.",
    icon: <Plane className="w-6 h-6 text-[#0BAFC4]" />
  },
  {
    title: "AI Productivity",
    text: "Master cutting-edge AI tools and productivity hacks to work smarter.",
    icon: <Brain className="w-6 h-6 text-[#0BAFC4]" />
  },
  {
    title: "Job Skills",
    text: "Build in-demand skills that employers are actively searching for right now.",
    icon: <BriefcaseBusiness className="w-6 h-6 text-[#0BAFC4]" />
  },
  {
    title: "Startup News",
    text: "Stay ahead with the latest trends, funding news, and business insights.",
    icon: <TrendingUp className="w-6 h-6 text-[#0BAFC4]" />
  },
  {
    title: "Product Breakdowns",
    text: "Deep dives into successful products and what makes them stand out.",
    icon: <Box className="w-6 h-6 text-[#0BAFC4]" />
  },
];

const SuccessSection = () => {
  return (
    <div className="min-h-screen bg-[#EAF3FF] py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Main Heading */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-black text-[#0F273D] mb-4">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-[#00A8C5] via-[#56C596] to-[#e7af73] bg-clip-text text-transparent">
              Succeed
            </span>
          </h1>
          <p className="text-lg md:text-xl text-[#4A637D] max-w-2xl mx-auto">
            Weekly curated content designed to accelerate your career and expand your horizons.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {sections.map((item, i) => (
            <div key={i}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md border border-transparent transition-all duration-200">

              <div className="bg-[#E9FAFF] w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5 shadow-sm">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-[#0F273D] mb-3 text-center">
                {item.title}
              </h3>

              <p className="text-[#4A637D] text-center text-[15px] leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default SuccessSection;
