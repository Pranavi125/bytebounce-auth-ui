import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Eye, EyeOff, X } from "lucide-react";
import "../auth.css";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const token = params.get("token");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const isStrongPassword = (v) =>
    v.length >= 8 &&
    /[A-Z]/.test(v) &&
    /[a-z]/.test(v) &&
    /\d/.test(v);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!password || !confirmPassword)
      return setError("All fields are required");

    if (!isStrongPassword(password))
      return setError(
        "Password must be at least 8 characters with uppercase, lowercase and number"
      );

    if (password !== confirmPassword)
      return setError("Passwords should match");

    try {
      setLoading(true);

      const res = await fetch(
        `http://localhost:5001/api/auth/reset-password?token=${token}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password }),
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      navigate("/login");
    } catch (err) {
      setError(err.message || "Reset failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-auth">
      <div className="auth-card-small">

        {/* CLOSE */}
        <div className="flex justify-end mb-3">
          <X size={18} onClick={() => navigate("/")} />
        </div>

        {/* BRAND */}
        <h1 className="auth-brand">ByteBounce</h1>
        <p className="auth-subtitle" style={{ color: "#000" }}>
          Reset your password
        </p>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="auth-field auth-password">
            <input
              className="auth-input"
              type={showPassword ? "text" : "password"}
              placeholder="New password"
              value={password}
              autoComplete="new-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="auth-eye" onClick={() => setShowPassword(!showPassword)}>
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
            {loading ? "Resetting..." : "Reset password"}
          </button>
        </form>

      </div>
    </div>
  );
}
