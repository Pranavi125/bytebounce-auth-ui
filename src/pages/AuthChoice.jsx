import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { X, Mail } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Avatar from "../components/Avatar";

export default function AuthChoice() {
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);

  /* ================= LOAD USER ================= */
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const oauthUser = params.get("user");

    if (oauthUser) {
      const parsed = JSON.parse(oauthUser);

      localStorage.setItem(
        "authUser",
        JSON.stringify({
          name: parsed.name,
          email: parsed.email,
        })
      );

      setUser(parsed);
      navigate("/", { replace: true });
      return;
    }

    const stored = localStorage.getItem("authUser");
    if (stored) setUser(JSON.parse(stored));
  }, [location.search, navigate]);

  /* ================= LOGOUT ================= */
  const logout = () => {
    localStorage.removeItem("authUser");
    setUser(null);
    setOpen(false);
    navigate("/auth");
  };

  /* ================= OAUTH ================= */
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5001/api/auth/google";
  };

  const handleGithubLogin = () => {
    window.location.href = "http://localhost:5001/api/auth/github";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 relative">

      {/* AVATAR */}
      {user && (
        <div className="absolute top-6 right-8">
          <Avatar name={user.name} onClick={() => setOpen(!open)} />
          {open && (
            <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-lg w-32">
              <button
                onClick={logout}
                className="w-full text-red-600 px-4 py-2 text-sm hover:bg-gray-100 rounded-lg"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}

      <div className="w-full max-w-xl rounded-2xl bg-gradient-to-b from-[#1f2937] to-[#0b1220] text-white shadow-2xl px-8 py-7">

        {/* CLOSE */}
        <div className="flex justify-end mb-5">
          <button
            onClick={() => navigate("/")}
            className="text-gray-400 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        {/* BRAND */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold leading-normal mb-3 bg-gradient-to-r from-[#00A8C5] via-[#56C596] to-[#e7af73] bg-clip-text text-transparent">
            ByteBounce
          </h2>

          <p className="text-sm text-gray-400">
            Choose how you’d like to sign in
          </p>
        </div>

        {/* BUTTONS */}
        <div className="space-y-3">
          {/* GOOGLE */}
          <button
            onClick={handleGoogleLogin}
            className="w-full h-11 rounded-lg flex items-center justify-center gap-3
                       bg-[#111827] hover:bg-[#1f2937] border border-white/10 transition"
          >
            <FcGoogle size={20} />
            <span className="text-sm">Continue with Google</span>
          </button>

          {/* GITHUB */}
          <button
            onClick={handleGithubLogin}
            className="w-full h-11 rounded-lg flex items-center justify-center gap-3
                       bg-[#111827] hover:bg-[#1f2937] border border-white/10 transition"
          >
            <FaGithub size={20} />
            <span className="text-sm">Continue with GitHub</span>
          </button>

          {/* OR */}
          <div className="flex items-center gap-3 my-2">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-xs text-gray-400">OR</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* EMAIL */}
          <button
            onClick={() => navigate("/login")}
            className="w-full h-11 rounded-lg flex items-center justify-center gap-3
                       bg-white text-black hover:bg-gray-100 transition"
          >
            <Mail size={18} />
            <span className="text-sm">Continue with Email</span>
          </button>
        </div>

        <p className="text-center text-sm text-gray-400 mt-5">
          Don’t have an account?{" "}
          <button
            onClick={() => navigate("/signup")}
            className="text-[#2fa295] font-semibold hover:underline"
          >
            Create one
          </button>
        </p>
      </div>
    </div>
  );
}
