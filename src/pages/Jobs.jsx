import { useState, useMemo, useEffect } from "react";
import { Filter, X, Briefcase } from "lucide-react";
import SearchBar from "../components/SearchBar";
import FilterDropdown from "../components/FilterDropdown";
import JobCard from "../components/JobCard";
import JobModal from "../components/JobModal";
import { jobsData } from "../data/jobs";
import { Button } from "../components/ui/button";
import axios from "axios";

/* ================= STORAGE KEY ================= */

const STORAGE_KEY = "bytebounce_saved_jobs";

/* ================= TEMP USER (AUTH LATER) ================= */

const USER_ID = "f320819b-7602-4f2d-b545-61924d18ee99";

/* ================= FILTER OPTIONS ================= */

const jobTypeOptions = [
  { value: "Full-time", label: "Full-time" },
  { value: "Part-time", label: "Part-time" },
  { value: "Internship", label: "Internship" },
  { value: "Contract", label: "Contract" },
];

const experienceOptions = [
  { value: "0-1 years", label: "Entry Level (0-1 years)" },
  { value: "2-4 years", label: "Mid Level (2-4 years)" },
  { value: "3-5 years", label: "Senior (3-5 years)" },
  { value: "5+ years", label: "Expert (5+ years)" },
];

const locationOptions = [
  { value: "Bengaluru, Karnataka", label: "Bengaluru, Karnataka" },
  { value: "Hyderabad, Telangana", label: "Hyderabad, Telangana" },
  { value: "Delhi NCR", label: "Delhi NCR" },
  { value: "Mumbai, Maharashtra", label: "Mumbai, Maharashtra" },
  { value: "Chennai, Tamil Nadu", label: "Chennai, Tamil Nadu" },
  { value: "Work From Home", label: "Work From Home" },
];

const workModeOptions = [
  { value: "remote", label: "Remote" },
  { value: "onsite", label: "On-site" },
];

/* ================= PAGE ================= */

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedJobTypes, setSelectedJobTypes] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedWorkMode, setSelectedWorkMode] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  /* ================= SAVED JOBS (LOCAL STORAGE) ================= */

  const [savedJobs, setSavedJobs] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedJobs));
  }, [savedJobs]);

  /* ================= GRID BACKGROUND ================= */

  useEffect(() => {
    document.body.classList.add("jobs-grid-bg");
    return () => document.body.classList.remove("jobs-grid-bg");
  }, []);

  /* ================= FILTER LOGIC ================= */

  const filteredJobs = useMemo(() => {
    const q = searchQuery.toLowerCase();

    return jobsData.filter((job) => {
      const matchesSearch =
        !q ||
        job.title.toLowerCase().includes(q) ||
        job.company.toLowerCase().includes(q) ||
        job.tags.some((t) => t.toLowerCase().includes(q)) ||
        job.description.toLowerCase().includes(q);

      const matchesJobType =
        !selectedJobTypes.length || selectedJobTypes.includes(job.type);

      const matchesExperience =
        !selectedExperience.length ||
        selectedExperience.includes(job.experience);

      const matchesLocation =
        !selectedLocations.length ||
        selectedLocations.includes(job.location);

      const matchesWorkMode =
        !selectedWorkMode.length ||
        (selectedWorkMode.includes("remote") && job.isRemote) ||
        (selectedWorkMode.includes("onsite") && !job.isRemote);

      return (
        matchesSearch &&
        matchesJobType &&
        matchesExperience &&
        matchesLocation &&
        matchesWorkMode
      );
    });
  }, [
    searchQuery,
    selectedJobTypes,
    selectedExperience,
    selectedLocations,
    selectedWorkMode,
  ]);

  /* ================= ACTIONS ================= */

  const handleSaveJob = async (jobId, job) => {
    const isAlreadySaved = savedJobs.includes(jobId);

    setSavedJobs((prev) =>
      isAlreadySaved ? prev.filter((id) => id !== jobId) : [...prev, jobId]
    );

    try {
      if (isAlreadySaved) {
        await axios.delete(
          `http://localhost:5001/api/jobs/${jobId}/save`,
          { data: { userId: USER_ID } }
        );
      } else {
        await axios.post(
          `http://localhost:5001/api/jobs/${jobId}/save`,
          { userId: USER_ID, job }
        );
      }
    } catch (err) {
      console.error("SAVE/UNSAVE API ERROR:", err.response?.data || err);
    }
  };

  // ✅ ONLY FIX: SEND FULL JOB TO APPLY
  const handleApplyJob = async (job) => {
    try {
      await axios.post(
        `http://localhost:5001/api/jobs/${job.id}/apply`,
        { userId: USER_ID, job }
      );
    } catch (err) {
      console.error("APPLY JOB ERROR:", err.response?.data || err);
    }
  };

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedJobTypes([]);
    setSelectedExperience([]);
    setSelectedLocations([]);
    setSelectedWorkMode([]);
  };

  const activeFiltersCount =
    selectedJobTypes.length +
    selectedExperience.length +
    selectedLocations.length +
    selectedWorkMode.length;

  /* ================= UI ================= */

  return (
    <div className="jobs-page">
      {/* HERO */}
      <section className="pt-14 pb-8 text-center">
        <div className="mx-auto max-w-4xl px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-600 text-sm font-medium mb-4">
            <Briefcase className="h-4 w-4" />
            Discover your next opportunity
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            <span className="bg-gradient-to-r from-[#00A8C5] via-[#56C596] to-[#e7af73] bg-clip-text text-transparent">Jobs & </span>
            <span className="bg-gradient-to-r from-[#00A8C5] via-[#56C596] to-[#e7af73] bg-clip-text text-transparent">
              Internships
            </span>
          </h1>

          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-4">
            Find verified opportunities from top companies. Filter by type,
            location, and experience to find your perfect match.
          </p>

          <div className="max-w-2xl mx-auto mb-4">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="pb-8">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden flex items-center gap-2 px-4 py-2 rounded-lg border bg-white"
              >
                <Filter className="h-4 w-4" />
                Filters
              </button>

              <div
                className={`${
                  showFilters ? "flex" : "hidden"
                } md:flex flex-wrap justify-center gap-3`}
              >
                <FilterDropdown
                  label="Job Type"
                  options={jobTypeOptions}
                  selectedValues={selectedJobTypes}
                  onSelectionChange={setSelectedJobTypes}
                />
                <FilterDropdown
                  label="Experience"
                  options={experienceOptions}
                  selectedValues={selectedExperience}
                  onSelectionChange={setSelectedExperience}
                />
                <FilterDropdown
                  label="Location"
                  options={locationOptions}
                  selectedValues={selectedLocations}
                  onSelectionChange={setSelectedLocations}
                />
                <FilterDropdown
                  label="Work Mode"
                  options={workModeOptions}
                  selectedValues={selectedWorkMode}
                  onSelectionChange={setSelectedWorkMode}
                />

                {activeFiltersCount > 0 && (
                  <button
                    onClick={clearAllFilters}
                    className="flex items-center gap-1 text-sm text-muted-foreground"
                  >
                    <X className="h-4 w-4" />
                    Clear
                  </button>
                )}
              </div>
            </div>

            <div className="hidden md:flex">
              <button className="px-4 py-2 rounded-full border border-emerald-500 text-emerald-600 font-medium text-sm hover:bg-emerald-50 transition">
                Saved ({savedJobs.length})
              </button>
            </div>
          </div>

          {/* JOB GRID */}
          {filteredJobs.length ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                  isSaved={savedJobs.includes(job.id)}
                  onSave={() => handleSaveJob(job.id, job)}
                  onApply={() => {
                    handleApplyJob(job);
                    setSelectedJob(job);
                  }}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Briefcase className="mx-auto h-10 w-10 text-muted-foreground mb-4" />
              <p className="text-muted-foreground mb-4">No jobs found</p>
              <Button variant="brand-outline" onClick={clearAllFilters}>
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* MODAL */}
      {selectedJob && (
        <JobModal
          job={selectedJob}
          isSaved={savedJobs.includes(selectedJob.id)}
          onSave={() => handleSaveJob(selectedJob.id, selectedJob)}
          onClose={() => setSelectedJob(null)}
        />
      )}
    </div>
  );
};

export default Jobs;
