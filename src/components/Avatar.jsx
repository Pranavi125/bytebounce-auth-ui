import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Avatar({ user, size = 40 }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const name =
    user?.fullName ||
    user?.name ||
    user?.email ||
    "User";

  const letter = name.charAt(0).toUpperCase();

  const colors = ["#14b8a6","#3b82f6","#8b5cf6","#ec4899","#f97316","#22c55e"];

  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const bg = colors[Math.abs(hash) % colors.length];

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("authUser");
    window.location.reload();
  };

  return (
    <div className="relative">
      <div
        onClick={() => setOpen(!open)}
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          background: bg,
          color: "#fff",
          fontWeight: 700,
          fontSize: size / 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        {letter}
      </div>

      {open && (
        <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow">
          <button
            onClick={logout}
            className="w-full px-4 py-2 hover:bg-gray-100 text-left"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
