import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, X } from "lucide-react";
import "../auth.css";

export default function ForgotPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || loading) return;

    try {
      setLoading(true);
      setMessage("");

      const res = await fetch(
        "http://localhost:5001/api/auth/forgot-password",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      await res.json();
      setMessage("A password reset link has been sent to your email.");
    } catch {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-auth">
      <div className="auth-card-small">
        {/* HEADER */}
        <div className="flex justify-between mb-4">
          <button
            onClick={() => navigate("/login")}
            className="flex items-center gap-2 text-sm text-black"
          >
            <ArrowLeft size={18} />
            Back to login
          </button>

          <button onClick={() => navigate("/")} className="text-black">
            <X size={18} />
          </button>
        </div>

        {/* BRAND */}
        <h1 className="auth-brand">ByteBounce</h1>

        <p
          style={{
            textAlign: "center",
            fontSize: 14,
            color: "#000",
            marginBottom: 14,
          }}
        >
          Forgot password
        </p>

        <form onSubmit={handleSubmit}>
          <div className="auth-field">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="auth-input"
            />
          </div>

          {message && (
            <p className="text-sm text-center text-gray-600 mb-3">
              {message}
            </p>
          )}

          <button type="submit" disabled={loading} className="auth-btn">
            {loading ? "Sending..." : "Send reset link"}
          </button>
        </form>
      </div>
    </div>
  );
}
