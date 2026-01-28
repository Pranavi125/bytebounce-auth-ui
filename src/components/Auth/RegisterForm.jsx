import { useState } from "react";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="w-full max-w-md bg-[#11162a] p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">
        Create Account
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Full Name"
          className="w-full p-3 rounded bg-[#1a2040] text-white outline-none"
          onChange={handleChange}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded bg-[#1a2040] text-white outline-none"
          onChange={handleChange}
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded bg-[#1a2040] text-white outline-none"
          onChange={handleChange}
          required
        />

        <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded font-semibold text-white">
          Register
        </button>
      </form>

      <p className="text-sm text-gray-400 text-center mt-4">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;
