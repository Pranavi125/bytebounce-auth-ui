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
    <div className="min-h-screen bg-[#EAF3FF] p-6 font-sans">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-Black mb-4">
            Why <span className="bg-gradient-to-r from-[#00A8C5] via-[#56C596] to-[#96E6A1] bg-clip-text text-transparent">ByteBounce?</span>
          </h1>
          <p className="text-xl text-[#4A637D]">
            More than a newsletter—your personal career catalyst
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {[
            { value: "10,000+", label: "Active Subscribers" },
            { value: "50+", label: "Countries Reached" },
            { value: "95%", label: "Open Rate" },
            { value: "200+", label: "Universities" },
          ].map((stat, i) => (
            <div key={i}
                 className="bg-white shadow-sm rounded-2xl p-6 text-center border border-transparent">
              <div className="text-4xl font-extrabold bg-gradient-to-r from-[#00A8C5] to-[#96E6A1] bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-[#5E738A] mt-2 text-lg font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features with Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
          {features.map((item, i) => (
            <div key={i}
              className={`rounded-2xl p-8 shadow-sm border
              ${item.highlight
                ? "bg-[#DFF8FF] border-[#00bbd6] shadow-md"
                : "bg-white border-transparent"}
              hover:shadow-md transition-all duration-200`}>

              <div className="flex justify-center mb-5">
                <div className="bg-[#E9FAFF] w-12 h-12 rounded-xl flex items-center justify-center shadow-sm">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#0F273D] mb-3 text-center">
                {item.title}
              </h3>
              <p className="text-[#4A637D] leading-relaxed text-center text-[15px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Trusted By */}
        <div className="text-center mt-10 mb-8">
          <p className="text-[#4A637D] text-lg mb-8">
            Trusted by students from:
          </p>
          <div className="flex flex-wrap justify-center gap-10 opacity-80 text-[#0F273D] text-xl font-semibold">
            <span>Harvard</span>
            <span>MIT</span>
            <span>Stanford</span>
            <span>200+ Universities</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ByteBounceComponent;  