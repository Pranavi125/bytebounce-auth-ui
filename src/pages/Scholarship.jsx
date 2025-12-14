import { useState } from "react";
import Navbar from "../components/Navbar";
import { Search, Award, Calendar } from "lucide-react";

export default function Scholarships() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedField, setSelectedField] = useState("All Fields");

  const scholarships = [
    {
      title: "Tech Excellence Scholarship",
      organization: "Future Leaders Foundation",
      amount: "$10,000",
      deadline: "March 15, 2024",
      field: "Engineering",
      description:
        "Full scholarship for undergraduate students pursuing computer science or related tech fields. Merit-based with GPA requirement of 3.5+",
    },
    {
      title: "Women in STEM Grant",
      organization: "Equality in Education",
      amount: "$7,500",
      deadline: "April 30, 2024",
      field: "Engineering",
      description:
        "Supporting female students in Science, Technology, Engineering, and Mathematics programs.",
    },
    {
      title: "First Generation Student Award",
      organization: "Education Forward",
      amount: "$5,000",
      deadline: "May 20, 2024",
      field: "Arts & Humanities",
      description:
        "Helping first-generation college students achieve their academic dreams. Need-based financial assistance.",
    },
    {
      title: "Global Leadership Scholarship",
      organization: "World Scholars Program",
      amount: "$15,000",
      deadline: "February 28, 2024",
      field: "Business",
      description:
        "For students demonstrating exceptional leadership and community service. Renewable for up to 4 years.",
    },
  ];

  // 🌟 FILTER + SEARCH LOGIC
  const filteredScholarships = scholarships.filter((sch) => {
    const term = searchTerm.toLowerCase();

    const matchesSearch =
      sch.title.toLowerCase().includes(term) ||
      sch.organization.toLowerCase().includes(term) ||
      sch.description.toLowerCase().includes(term);

    const matchesField =
      selectedField === "All Fields" || sch.field === selectedField;

    return matchesSearch && matchesField;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">

          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Scholarship Opportunities
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find funding for your education. Browse scholarships, grants, and financial aid opportunities.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto mb-12 bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
            <div className="flex flex-col md:flex-row gap-4">

              {/* Search Input */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search scholarships..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 bg-white 
                             focus:outline-none focus:ring-2 focus:ring-[#5578CE]"
                />
              </div>

              {/* Filter Dropdown */}
              <select
                value={selectedField}
                onChange={(e) => setSelectedField(e.target.value)}
                className="px-4 py-3 rounded-lg border border-gray-300 bg-white 
                           focus:outline-none focus:ring-2 focus:ring-[#5578CE]"
              >
                <option>All Fields</option>
                <option>Engineering</option>
                <option>Business</option>
                <option>Arts & Humanities</option>
                <option>Sciences</option>
              </select>

              {/* Search Button */}
              <button className="bg-[#5578CE] text-white px-8 py-3 rounded-lg hover:bg-[#3d5cb8] transition-all">
                Search
              </button>
            </div>
          </div>

          {/* Scholarship Cards */}
          <div className="grid gap-6">
            {filteredScholarships.length > 0 ? (
              filteredScholarships.map((sch, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all"
                >
                  {/* Heading + Amount */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{sch.title}</h3>
                      <div className="flex items-center gap-2 text-gray-600 mb-2">
                        <Award className="w-4 h-4" />
                        <span className="text-sm">{sch.organization}</span>
                      </div>

                      <span className="text-sm bg-gray-200 px-3 py-1 rounded-full">
                        {sch.field}
                      </span>
                    </div>

                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#5578CE] mb-1">
                        {sch.amount}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        {sch.deadline}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-4">{sch.description}</p>

                  {/* Buttons */}
                  <div className="flex gap-2">
                    <button className="border px-4 py-2 rounded-md hover:bg-gray-100 transition">
                      Learn More
                    </button>
                    <button className="bg-[#5578CE] text-white px-4 py-2 rounded-md hover:bg-[#3d5cb8] transition">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 text-lg">
                No scholarships found.
              </p>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
