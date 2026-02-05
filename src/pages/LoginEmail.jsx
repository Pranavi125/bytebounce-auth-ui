import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Eye, EyeOff, X } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import "../auth.css";

export default function LoginEmail() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  /* ================= CLEAR FIELDS ================= */
  useEffect(() => {
    setEmail("");
    setPassword("");
  }, []);

  /* ================= OAUTH CALLBACK ================= */
  useEffect(() => {
    const userParam = searchParams.get("user");

    if (userParam) {
      const user = JSON.parse(decodeURIComponent(userParam));

      // store user
      localStorage.setItem(
        "authUser",
        JSON.stringify({
          id: user.id || user.user_id,
          ...user,
        })
      );

      // clean URL
      window.history.replaceState({}, "", "/");

      // 🔥 REDIRECT TO HOMEPAGE
      navigate("/", { replace: true });
    }
  }, [searchParams, navigate]);

  /* ================= EMAIL LOGIN ================= */
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:5001/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      localStorage.setItem("authUser", JSON.stringify(data.user));

      // 🔥 EMAIL LOGIN → HOME
      navigate("/", { replace: true });
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-auth">
      <div className="auth-card-login">
        {/* CLOSE */}
        <div className="auth-header">
          <button onClick={() => navigate("/")}>
            <X size={18} />
          </button>
        </div>

        <h1 className="auth-brand">ByteBounce</h1>
        <p className="auth-subtitle" style={{ color: "#000" }}>
          Log in to continue your journey
        </p>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleLogin} autoComplete="off">
          <div className="auth-field">
            <input
              type="email"
              className="auth-input"
              placeholder="Enter your email"
              value={email}
              autoComplete="new-email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="auth-field auth-password">
            <input
              type={show ? "text" : "password"}
              className="auth-input"
              placeholder="Enter your password"
              value={password}
              autoComplete="new-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="auth-eye" onClick={() => setShow(!show)}>
              {show ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
          </div>

          <div
            className="forgot-link"
            onClick={() => navigate("/forgot-password")}
          >
            Forgot password?
          </div>

          <button className="auth-btn" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="auth-divider">or</div>

        <div className="auth-social-row">
          <button
            className="auth-social"
            onClick={() =>
              (window.location.href =
                "http://localhost:5001/api/auth/google")
            }
          >
            <FcGoogle size={22} />
          </button>

          <button
            className="auth-social"
            onClick={() =>
              (window.location.href =
                "http://localhost:5001/api/auth/github")
            }
          >
            <FaGithub size={22} />
          </button>
        </div>

        <div className="auth-footer">
          Don’t have an account?{" "}
          <span onClick={() => navigate("/signup")}>Create one</span>
        </div>
      </div>
    </div>
  );
}
