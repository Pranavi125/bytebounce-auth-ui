const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5001";

export const fetchJobs = async () => {
  const res = await fetch(`${API_BASE}/api/jobs`);
  if (!res.ok) throw new Error("Failed to fetch jobs");
  return res.json();
};

export const saveJob = async (jobId, userId) => {
  const res = await fetch(
    `${API_BASE}/api/jobs/${jobId}/save`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId }),
    }
  );

  if (!res.ok) throw new Error("Save failed");
  return res.json();
};
