import React from "react";
import { Users, Clock, Mail } from "lucide-react";

const StatsSection = () => {
  return (
    <div
      className="
        mt-6
        flex items-center justify-center
        gap-5 sm:gap-7 lg:gap-10
        text-sm text-slate-600
         whitespace-nowrap
        px-4 
      "
    >
      <div className="flex text-md font-bold items-center shrink-0">
        {/* <Users className="w-4 h-4 text-teal-600" /> */}
        <span>
          <strong className="text-teal-500">1000+</strong> readers
        </span>
      </div>

      {/* <span className="hidden sm:inline text-slate-300">•</span> */}

      <div className="flex text-md font-bold items-center gap-2 shrink-0">
        {/* <Clock className="w-4 h-4 text-teal-600" /> */}
        <span >
          <strong className="text-teal-500">5 min</strong> reads
        </span>
      </div>

      {/* <span className="hidden sm:inline text-slate-300">•</span> */}

      <div className="flex text-md font-bold items-center gap-2 shrink-0">
        {/* <Mail className="w-4 h-4 text-teal-600" /> */}
        <span>
          <strong className=" text-teal-500">1 Email</strong> per week
        </span>
      </div>
    </div>
  );
};

export default StatsSection;