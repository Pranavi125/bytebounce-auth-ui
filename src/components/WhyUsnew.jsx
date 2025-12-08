import React from 'react';
import {
  Target,
  Clock,
  Sparkles,
  Users,
  CheckCircle,
  Shield
} from 'lucide-react';

const features = [
  {
    title: "Curated Just For You",
    text: "Every opportunity is hand-picked and verified by our experts who understand your career stage.",
    icon: <Target className="w-6 h-6 text-[#0BAFC4]" />
  },
  {
    title: "Save Hours Weekly",
    text: "Stop scrolling endless websites. We do the research so you can focus on applications that matter.",
    icon: <Clock className="w-6 h-6 text-[#0BAFC4]" />,
    highlight: true,
  },
  {
    title: "Actionable Insights",
    text: "Not just links—get expert tips, strategies, and insider advice with every newsletter.",
    icon: <Sparkles className="w-6 h-6 text-[#0BAFC4]" />
  },
  {
    title: "Join Elite Community",
    text: "Connect with ambitious peers from Harvard, MIT, Stanford, and 200+ universities worldwide.",
    icon: <Users className="w-6 h-6 text-[#0BAFC4]" />
  },
  {
    title: "Always Free",
    text: "No paywalls. Everyone should have access to quality opportunities.",
    icon: <CheckCircle className="w-6 h-6 text-[#0BAFC4]" />
  },
  {
    title: "Zero Spam Promise",
    text: "One email per week. Unsubscribe anytime with a single click.",
    icon: <Shield className="w-6 h-6 text-[#0BAFC4]" />
  },
];

const ByteBounceComponent = () => {
  return (
    <div className="min-h-screen bg-[#EAF3FF] px-4 sm:px-6 lg:px-10 py-8 sm:py-10 font-sans">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-20 px-2">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-3 sm:mb-4 leading-tight sm:leading-snug">
            Why{" "}
            <span className="bg-gradient-to-r from-[#00A8C5] via-[#56C596] to-[#96E6A1] bg-clip-text text-transparent">
              ByteBounce?
            </span>
          </h1>
          <p className="text-sm xs:text-base sm:text-lg lg:text-xl text-[#4A637D] px-2 sm:px-0 max-w-2xl mx-auto">
            More than a newsletter—your personal career catalyst
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 xs:gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-20 lg:mb-24">
          {[
            { value: "10,000+", label: "Active Subscribers" },
            { value: "50+", label: "Countries Reached" },
            { value: "95%", label: "Open Rate" },
            { value: "200+", label: "Universities" },
          ].map((stat, i) => (
            <div key={i}
              className="bg-white shadow-sm rounded-xl sm:rounded-2xl px-3 py-4 sm:px-4 sm:py-6 lg:px-6 text-center border">
              <div className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-[#00A8C5] to-[#96E6A1] bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-[#5E738A] mt-1 sm:mt-2 text-xs xs:text-sm sm:text-base lg:text-lg font-medium leading-tight px-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10 mb-16 sm:mb-20">
          {features.map((item, i) => (
            <div key={i}
              className={`rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-sm border
              ${item.highlight
                ? "bg-[#DFF8FF] border-[#00bbd6] shadow-md"
                : "bg-white border-transparent"}
              hover:shadow-lg transition-shadow duration-200`}>

              <div className="flex justify-center mb-3 sm:mb-4 lg:mb-5">
                <div className="bg-[#E9FAFF] w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center shadow-sm">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#0F273D] mb-2 text-center px-2">
                {item.title}
              </h3>
              <p className="text-[#4A637D] text-center leading-relaxed text-xs sm:text-sm lg:text-[15px] px-1 sm:px-2">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Trusted By */}
        <div className="text-center mt-8 sm:mt-10 mb-4 sm:mb-8 px-2">
          <p className="text-[#4A637D] text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">
            Trusted by students from:
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-10 opacity-80 text-[#0F273D]">
            <span className="text-base sm:text-lg lg:text-xl font-semibold">Harvard</span>
            <span className="text-base sm:text-lg lg:text-xl font-semibold">MIT</span>
            <span className="text-base sm:text-lg lg:text-xl font-semibold">Stanford</span>
            <span className="text-base sm:text-lg lg:text-xl font-semibold">200+ Universities</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ByteBounceComponent;