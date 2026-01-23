import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, ArrowLeft, X } from "lucide-react";
import "../auth.css";

export default function Signup() {
  const navigate = useNavigate();

  // ✅ REQUIRED FOR DATABASE + AVATAR
  const [fullName, setFullName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!fullName || !email || !password || !confirmPassword) {
      return setError("All fields are required");
    }

    if (password !== confirmPassword) {
      return setError("Passwords should match");
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:5001/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: fullName,
          email,
          password,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      localStorage.setItem("authUser", JSON.stringify(data.user));
      navigate("/");
    } catch (err) {
      setError(err.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-auth">
      <div className="auth-card-small">

        {/* HEADER */}
        <div className="flex justify-between mb-3">
          <ArrowLeft size={18} onClick={() => navigate("/login")} />
          <X size={18} onClick={() => navigate("/")} />
        </div>

        {/* BRAND */}
        <h1 className="auth-brand">ByteBounce</h1>
        <p className="auth-subtitle" style={{ color: "#000" }}>
          Create your account
        </p>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleSubmit} autoComplete="off">

          <div className="auth-field">
            <input
              className="auth-input"
              placeholder="Full name"
              value={fullName}
              autoComplete="off"
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div className="auth-field">
            <input
              className="auth-input"
              placeholder="Email"
              value={email}
              autoComplete="new-email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="auth-field auth-password">
            <input
              className="auth-input"
              type={showPassword ? "text" : "password"}
              placeholder="Create password"
              value={password}
              autoComplete="new-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="auth-eye"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
          </div>

          <div className="auth-field auth-password">
            <input
              className="auth-input"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm password"
              value={confirmPassword}
              autoComplete="new-password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <span
              className="auth-eye"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
            >
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
          </div>

          <button className="auth-btn" disabled={loading}>
            {loading ? "Creating account..." : "Create account"}
          </button>
        </form>

        <div className="auth-footer" style={{ marginTop: "12px" }}>
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Log in</span>
        </div>

      </div>
    </div>
  );
}