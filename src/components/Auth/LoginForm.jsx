import { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="w-full max-w-md bg-[#11162a] p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">
        Login to ByteBounce
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded bg-[#1a2040] text-white outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded bg-[#1a2040] text-white outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold"
        >
          Login
        </button>
      </form>

      <div className="text-sm text-gray-400 text-center mt-4 space-y-2">
        <Link to="/forgot-password" className="block hover:text-white">
          Forgot password?
        </Link>
        <span>
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </span>
      </div>
    </div>
  );
};

export default LoginForm;
