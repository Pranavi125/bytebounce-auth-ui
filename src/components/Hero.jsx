import React, { useState } from "react";
import {
  ArrowRight, Briefcase, Award, Sparkles,
  GraduationCap, Rocket, Zap, Target, Globe, BookOpen, Users, Clock, Mail
} from "lucide-react";
import StatsSection from "./stats";

/* ------------------------- CUSTOM BUTTON ------------------------------ */
function Button({ children, variant = "default", className = "", ...props }) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all rounded-full";

  const variants = {
    default: "bg-[#0D868C] text-white hover:bg-[#0A6266] shadow-lg",
    outline: "border-2 border-[#1F2A36]/20 hover:bg-[#E4F9F9]/50 text-[#1F2A36]",
  };

  return (
    <button {...props} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}





















export default function MainHero() {
  const [openModal, setOpenModal] = useState(false);






  return (
    <>
      {/* ------------------- SUBSTACK POPUP MODAL ---------------------- */}
      {openModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-lg shadow-xl relative">
            {/* Close Button */}
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
            >
              ✕
            </button>

            <h2 className="text-xl font-semibold mb-4 text-center">
              Subscribe to ByteBounce Updates 
            </h2>

            <iframe
              src="https://bytebounce.substack.com/embed"
              width="100%"
              height="200"
              style={{ border: "1px solid #EEE", background: "white" }}
              frameBorder="0"
              scrolling="no"
            ></iframe>
            {/* <iframe 
            src="https://bytebounce.substack.com/embed" 
            width="480" 
            height="320" 
            style="border:1px solid #EEE; background:white;" 
            frameborder="0" 
            scrolling="no"></iframe> */}
          </div>
        </div>
      )}

      {/* --------------------------- HERO SECTION ---------------------------- */}
      <section className="relative pt-24 pb-12 overflow-hidden min-h-[90vh] flex flex-col">

        <div className="absolute inset-0 -z-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0D868C33] rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#0D868C1A] rounded-full blur-2xl" />
        </div>

        {/* Grid Overlay */}
        <div
          className="absolute inset-0 -z-30 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(#1F2A36 1px, transparent 1px), linear-gradient(90deg, #1F2A36 1px, transparent 1px)",
            backgroundSize: "140px 140px",
          }}
        />

        {/* Floating Icons */}
        <div className="absolute inset-0 -z-5 overflow-hidden pointer-events-none opacity-[0.8]">

          <style>
            {`
              @keyframes float {
                0% { transform: translateY(0px); }
                50% { transform: translateY(-12px); }
                100% { transform: translateY(0px); }
              }
              @keyframes float-slow {
                0% { transform: translateY(0px); }
                50% { transform: translateY(-18px); }
                100% { transform: translateY(0px); }
              }
              .animate-float { animation: float 4s ease-in-out infinite; }
              .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
            `}
          </style>

          <div className="absolute top-[12%] left-[4%] md:left-[10%] w-10 h-10 rounded-xl bg-[#0D868C26] flex items-center justify-center animate-float">
            <Briefcase className="w-5 h-5 text-[#0D868C99]" />
          </div>

          <div className="absolute top-[20%] right-[4%] md:right-[12%] w-9 h-9 rounded-lg bg-[#F76E4F33] flex items-center justify-center animate-float-slow">
            <Award className="w-4 h-4 text-[#F76E4FB2]" />
          </div>

          <div className="absolute top-[42%] left-[3%] md:left-[8%] w-11 h-11 rounded-xl bg-[#0D868C1A] flex items-center justify-center animate-float">
            <GraduationCap className="w-6 h-6 text-[#0D868C80]" />
          </div>

          <div className="absolute top-[25%] right-[8%] md:right-[25%] w-8 h-8 rounded-lg bg-[#F76E4F26] flex items-center justify-center animate-float-slow">
            <Rocket className="w-4 h-4 text-[#F76E4F99]" />
          </div>

          <div className="absolute bottom-[32%] left-[8%] md:left-[18%] w-8 h-8 rounded-lg bg-[#0D868C33] flex items-center justify-center animate-float">
            <Target className="w-4 h-4 text-[#0D868CB2]" />
          </div>

          <div className="absolute top-[34%] right-[4%] md:right-[12%] w-10 h-10 rounded-xl bg-[#F76E4F1A] flex items-center justify-center animate-float-slow">
            <Globe className="w-5 h-5 text-[#F76E4F80]" />
          </div>

          <div className="absolute bottom-[42%] right-[8%] md:right-[18%] w-9 h-9 rounded-lg bg-[#0D868C26] flex items-center justify-center animate-float">
            <BookOpen className="w-4 h-4 text-[#0D868C99]" />
          </div>

          <div className="absolute top-[78%] left-[12%] md:left-[30%] w-8 h-8 rounded-lg bg-[#F76E4F33] flex items-center justify-center animate-float-slow">
            <Sparkles className="w-4 h-4 text-[#F76E4FB2]" />
          </div>

          <div className="absolute top-[10%] left-[65%] md:left-[35%] w-8 h-8 rounded-lg bg-[#0D868C1A] flex items-center justify-center animate-float">
            <Zap className="w-4 h-4 text-[#0D868C80]" />
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 flex-1 flex flex-col justify-center">
          <div className="max-w-4xl mx-auto text-center mb-12">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-[#0D868C0D] border border-[#0D868C33] rounded-full">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0D868C] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0D868C]"></span>
              </div>
              <span className="text-sm font-medium text-[#0D868C]">
                new opportunities every week
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-black">
              Launch Your Career With{" "}
              <span className="text-5xl bg-gradient-to-r from-[#00A8C5] via-[#56C596] to-[#e7af73] bg-clip-text text-transparent">
                ByteBounce
              </span>
            </h1>

            {/* Subtitle */}
            {/* <p className="text-lg sm:text-xl text-[#6D7B86] max-w-2xl mx-auto mb-10"> */}
              {/* Stop guessing your next career move.
ByteBounce brings you verified internships, global scholarships, study-abroad opportunities, in-demand skills, AI productivity tools, and real business insights — every week, in 5 minutes.
No noise. No spam. Just opportunities that matter.
One newsletter. Endless opportunities. */}

             {/* One newsletter. Endless opportunities. We bring you a weekly newsletter packed with handpicked  {" "}
              <span className="text-[#1F2A36] font-medium">jobs</span>,
              <span className="text-[#1F2A36] font-medium"> scholarships</span>,
              and
              <span className="text-[#1F2A36] font-medium"> internships</span>.
              and tech <br></br> <span className="scroll-m-0">No noise. No spam. Just one powerful newsletter  to level up your career.</span>
             */}
            
            
            
            {/* </p> */}

            <p className="max-w-2xl text-lg sm:text-xl text-[#6D7B86] max-w-2xl mx-auto mb-10 leading-relaxed">
  Stop guessing your next career move.
  <br />
  <span className="mt-2 block">
    ByteBounce delivers verified internships, global scholarships, study-abroad
    opportunities, in-demand skills, AI tools, and real business insights
    {/* <span className="text-[#1F2A36] font-medium block"> every week, in just 5 minutes.</span> */}
  </span>

  {/* <span className="mt-3 block text-sm">
    no noise. no spam. Just opportunities that matter.
  </span> */}

  {/* <span className=" text-sm  text-[#1F2A36] ">
    One newsletter. Endless opportunities.
  </span> */}
</p>
{/* <StatsSection/> */}


            {/* CTA BUTTON — opens modal */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <Button
                className="px-8 py-6 text-base group"
                onClick={() => setOpenModal(true)}
              >
                <Zap className="mr-2 w-5 h-5" />
               Join the free newslette
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button> */}
              <button className=" px-8 py-4 rounded-full 
bg-teal-600 hover:bg-teal-700 
text-white text-lg font-semibold 
shadow-lg hover:shadow-xl 
transition-all duration-300">
⚡ Join the free newsletter →
</button>


            </div>
            <span className="mt-3 block text-sm">
    no noise. no spam. Just opportunities that matter.
  </span>

          </div>





































          {/* stats */}
         
<StatsSection/>






































































        </div>

      </section>
    </>
  );
}
