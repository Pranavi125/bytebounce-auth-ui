import { useState } from "react";
import Navbar from "../components/Navbar";
import { Search, MapPin, Clock, Building2 } from "lucide-react";

export default function JobPage() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchLocation, setSearchLocation] = useState("");

  const jobs = [
    {
      title: "Frontend Developer",
      company: "Google",
      location: "Bangalore, India",
      experience: "1–3 years",
      type: "Full-time",
      description:
        "Work with modern web technologies such as React, TypeScript, and Tailwind. Build scalable UI components for millions of users.",
    },
    {
      title: "Backend Developer",
      company: "Amazon",
      location: "Hyderabad, India",
      experience: "1–2 years",
      type: "Full-time",
      description:
        "Build microservice-based backend systems and high-performance APIs using Node.js and AWS.",
    },
    {
      title: "UI/UX Designer",
      company: "Microsoft",
      location: "Remote",
      experience: "0–2 years",
      type: "Contract",
      description:
        "Design intuitive user interfaces, prototypes, and product flows for modern web and mobile products.",
    },
    {
      title: "Data Analyst",
      company: "Meta",
      location: "Mumbai, India",
      experience: "0–1 years",
      type: "Full-time",
      description:
        "Analyze data, generate insights, and support product teams with dashboards and reports.",
    },
  ];

  // 🔍 FILTER LOGIC
  const filteredJobs = jobs.filter((job) => {
    const keywordMatch =
      job.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      job.company.toLowerCase().includes(searchKeyword.toLowerCase());

    const locationMatch = job.location
      .toLowerCase()
      .includes(searchLocation.toLowerCase());

    return keywordMatch && locationMatch;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">

          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Find Your Dream Job</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find your perfect job role based on your skills and interest.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto mb-12 bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
            <div className="flex flex-col md:flex-row gap-4">

              {/* Keyword Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Job title or company..."
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#5578CE]"
                />
              </div>

              {/* Location Search */}
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Location..."
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#5578CE]"
                />
              </div>

              <button className="bg-[#5578CE] hover:bg-[#3d5cb8] text-white px-8 py-3 rounded-lg transition-all">
                Search
              </button>
            </div>
          </div>

          {/* Job Cards */}
          <div className="grid gap-6">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{job.title}</h3>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                        <span className="flex items-center gap-1">
                          <Building2 className="w-4 h-4" /> {job.company}
                        </span>

                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" /> {job.location}
                        </span>

                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" /> {job.experience}
                        </span>
                      </div>

                      <p className="text-gray-600">{job.description}</p>
                    </div>

                    <div className="flex gap-2">
                      <button className="border px-4 py-2 rounded-md hover:bg-gray-100 transition">
                        Save
                      </button>
                      <button className="bg-[#5578CE] hover:bg-[#3d5cb8] text-white px-4 py-2 rounded-md transition">
                        Apply Now
                      </button>
                    </div>

                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 text-lg">
                No jobs found.
              </p>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
