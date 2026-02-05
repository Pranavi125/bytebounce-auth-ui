import {
  Bookmark,
  BookmarkCheck,
  MapPin,
  Building2,
  Clock,
  DollarSign,
  Briefcase,
} from "lucide-react";
import { Button } from "./ui/button";

const JobCard = ({ job, isSaved, onSave, onApply }) => {
  const companyInitial = job.company?.charAt(0)?.toUpperCase();

  return (
    <div className="group bg-white rounded-2xl border border-gray-200 p-6 transition-all hover:shadow-xl">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center overflow-hidden">
          {job.logo ? (
            <img
              src={job.logo}
              alt={job.company}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="font-semibold text-emerald-700">
              {companyInitial}
            </span>
          )}
        </div>

        {/* Save Button */}
        <button
          onClick={() => onSave(job.id)}
          className={`transition ${
            isSaved
              ? "text-emerald-600"
              : "text-emerald-500 hover:text-emerald-600"
          }`}
        >
          {isSaved ? (
            <BookmarkCheck className="h-5 w-5" />
          ) : (
            <Bookmark className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Job Title */}
      <h3 className="mt-4 text-lg font-semibold group-hover:text-emerald-600 transition">
        {job.title}
      </h3>

      {/* Company */}
      <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
        <Building2 className="h-4 w-4" />
        {job.company}
      </div>

      {/* Salary */}
      {job.salary && (
        <div className="mt-3 flex items-center gap-1.5 text-emerald-600 font-semibold text-base">
          <DollarSign className="h-4 w-4" />
          {job.salary}
        </div>
      )}

      {/* Meta Info */}
      <div className="mt-3 space-y-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-2 flex-wrap">
          <MapPin className="h-4 w-4" />
          {job.location}

          <Briefcase className="h-4 w-4 ml-3" />
          {job.type}
        </div>

        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4" />
          {job.experience}
        </div>
      </div>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {job.tags?.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700"
          >
            {tag}
          </span>
        ))}

        {job.isRemote && (
          <span className="px-3 py-1 text-xs rounded-full bg-emerald-100 text-emerald-700">
            Remote
          </span>
        )}
      </div>

      {/* Description */}
      {job.description && (
        <p className="mt-4 text-sm text-muted-foreground line-clamp-2">
          {job.description.trim()}
        </p>
      )}

      {/* Footer */}
      <div className="mt-5 flex items-center justify-between">
        <span className="text-xs text-muted-foreground">
          {job.postedAt}
        </span>

        <Button
          size="sm"
          className="rounded-full bg-teal-500 hover:bg-teal-600 "
          onClick={() => onApply(job)}   // ✅ FULL JOB OBJECT
        >
          Apply Now
        </Button>
      </div>
    </div>
  );
};

export default JobCard;
