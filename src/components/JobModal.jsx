import {
  X,
  MapPin,
  Briefcase,
  Clock,
  DollarSign,
  Building2,
  ExternalLink,
  Bookmark,
  BookmarkCheck,
} from "lucide-react";

const JobModal = ({ job, isSaved, onSave, onClose }) => {
  if (!job) return null;

  const handleSave = (e) => {
    e.stopPropagation();
    onSave(job.id);
  };

  const handleApply = () => {
    window.open(job.applyUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              {job.logo ? (
                <img
                  src={job.logo}
                  alt={job.company}
                  className="w-14 h-14 rounded-xl object-contain bg-gray-100 p-2"
                />
              ) : (
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white text-2xl font-bold">
                  {job.company.charAt(0)}
                </div>
              )}

              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {job.title}
                </h2>
                <div className="flex items-center gap-1.5 text-gray-500 text-sm mt-1">
                  <Building2 className="w-4 h-4" />
                  <span>{job.company}</span>
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors p-1"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <InfoCard icon={<MapPin />} label="Location" value={job.location} />
            <InfoCard icon={<Briefcase />} label="Job Type" value={job.type} />
            <InfoCard icon={<Clock />} label="Experience" value={job.experience} />
            <InfoCard icon={<DollarSign />} label="Salary" value={job.salary} />
          </div>

          {/* Skills */}
          <div className="mb-6">
            <h3 className="text-base font-semibold text-gray-900 mb-3">
              Skills & Requirements
            </h3>
            <div className="flex flex-wrap gap-2">
              {job.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 text-black rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Job Description */}
          <div className="mb-6">
            <h3 className="text-base font-semibold text-gray-900 mb-3">
              Job Description
            </h3>
            <p className="text-black text-sm leading-relaxed whitespace-pre-line">
              {job.description}
            </p>
          </div>

          {/* Posted */}
          <p className="text-gray-400 text-sm mb-6">{job.postedAt}</p>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={handleApply}
              className="flex-1 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2"
            >
              Apply Now
              <ExternalLink className="w-4 h-4" />
            </button>

            <button
              onClick={handleSave}
              className={`px-6 py-3.5 border-2 rounded-xl font-semibold flex items-center gap-2 ${
                isSaved
                  ? "border-teal-500 text-teal-600 bg-teal-50"
                  : "border-gray-200 text-gray-700"
              }`}
            >
              {isSaved ? (
                <>
                  <BookmarkCheck className="w-4 h-4" />
                  Saved
                </>
              ) : (
                <>
                  <Bookmark className="w-4 h-4" />
                  Save
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* Reusable Info Card */
const InfoCard = ({ icon, label, value }) => (
  <div className="bg-gray-100/80 rounded-xl p-4 flex items-center gap-3">
    <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-600">
      {icon}
    </div>
    <div>
      <p className="text-xs text-gray-500 font-medium">{label}</p>
      <p className="text-sm font-semibold text-gray-800">{value}</p>
    </div>
  </div>
);

export default JobModal;
