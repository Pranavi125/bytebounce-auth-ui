import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AuthRightPanel from "../components/AuthRightPanel";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      login(data.user);
      navigate("/");
    } catch {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex bg-[#faf7f2]">
      <div className="flex-1 flex items-center justify-center">
        <form onSubmit={handleSubmit} className="card">
          <h1 className="title">Welcome back</h1>

          {error && <p className="error">{error}</p>}

          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="btn-primary">Sign in</button>
        </form>
      </div>

      <AuthRightPanel
        title="Good to See You Again"
        description="Pick up right where you left off."
      />
    </div>
  );
}
