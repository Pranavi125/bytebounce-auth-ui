import React from "react";
import { Users, Clock, Mail } from "lucide-react";

const StatsSection = () => {
  return (
    <div
      className="
        mt-6
        flex items-center justify-center
        gap-4 sm:gap-6 lg:gap-10
        text-sm text-slate-600
        overflow-x-auto whitespace-nowrap
        px-4 
      "
    >
      <div className="flex items-center gap-2 shrink-0">
        {/* <Users className="w-4 h-4 text-teal-600" /> */}
        <span>
          <strong className="text-teal-500">100+</strong> readers
        </span>
      </div>

      {/* <span className="hidden sm:inline text-slate-300">•</span> */}

      <div className="flex items-center gap-2 shrink-0">
        {/* <Clock className="w-4 h-4 text-teal-600" /> */}
        <span >
          <strong className="text-teal-500">5 min</strong> weekly read
        </span>
      </div>

      {/* <span className="hidden sm:inline text-slate-300">•</span> */}

      <div className="flex items-center gap-2 shrink-0">
        {/* <Mail className="w-4 h-4 text-teal-600" /> */}
        <span>
          <strong className=" text-teal-500">1 email</strong> per week
        </span>
      </div>
    </div>
  );
};

export default StatsSection;
