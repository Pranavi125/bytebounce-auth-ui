import React, { useState } from "react";
import { ArrowLeft, Loader2, Eye, EyeOff, Check } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

import { toast } from "sonner";
import { z } from "zod";

const signUpSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Must contain an uppercase letter")
    .regex(/[a-z]/, "Must contain a lowercase letter")
    .regex(/[0-9]/, "Must contain a number"),
});

interface Props {
  onBack: () => void;
  onSuccess: () => void;
  onSwitchToLogin: () => void;
}

export const SignUpForm: React.FC<Props> = ({
  onBack,
  onSuccess,
  onSwitchToLogin,
}) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<any>({});
  const { signUp } = useAuth();

  const passwordRequirements = [
    { label: "At least 8 characters", met: password.length >= 8 },
    { label: "One uppercase letter", met: /[A-Z]/.test(password) },
    { label: "One lowercase letter", met: /[a-z]/.test(password) },
    { label: "One number", met: /[0-9]/.test(password) },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const parsed = signUpSchema.safeParse({ fullName, email, password });
    if (!parsed.success) {
      const fieldErrors: any = {};
      parsed.error.errors.forEach((err) => {
        fieldErrors[err.path[0]] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);
    const { error } = await signUp(email, password, fullName);
    setLoading(false);

    if (error) {
      toast.error(error.message || "Signup failed");
      return;
    }

    toast.success("Account created");
    onSuccess();
  };

  return (
    <div>
      <button onClick={onBack} className="flex items-center gap-2 mb-6">
        <ArrowLeft size={16} /> Back
      </button>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          placeholder="Full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full p-3 border rounded"
        />
        {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border rounded"
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3"
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        </div>

        <div className="space-y-1">
          {passwordRequirements.map((r, i) => (
            <div key={i} className="flex items-center gap-2 text-sm">
              {r.met && <Check size={14} />}
              {r.label}
            </div>
          ))}
        </div>

        <button
          disabled={loading}
          className="w-full bg-black text-white p-3 rounded"
        >
          {loading ? <Loader2 className="animate-spin mx-auto" /> : "Create account"}
        </button>
      </form>

      <p className="text-center mt-4">
        Already have an account?{" "}
        <button onClick={onSwitchToLogin} className="underline">
          Log in
        </button>
      </p>
    </div>
  );
};
