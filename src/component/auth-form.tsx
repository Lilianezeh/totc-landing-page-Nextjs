import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type AuthFormProps = {
  mode: "login" | "signup";
};

const AuthForm = ({ mode }: AuthFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (mode === "signup" && !name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    // No backend exists yet — this simulates a successful submission
    setSuccess(true);
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center min-h-[70vh] px-6 py-16">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-[#252641] mb-1">
          {mode === "login" ? "Welcome back" : "Create an account"}
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          {mode === "login"
            ? "Log in to continue to TOTC"
            : "Sign up to start learning with TOTC"}
        </p>

        {success ? (
          <div className="text-center py-8">
            <p className="text-[#2FC79E] font-semibold mb-2">
              {mode === "login" ? "Logged in successfully!" : "Account created!"}
            </p>
            <p className="text-sm text-gray-500">
              (This is a demo form — no account was actually saved.)
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {mode === "signup" && (
              <div>
                <label className="text-sm font-medium text-[#252641] mb-1 block">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Doe"
                  className="input input-bordered w-full rounded-full focus:border-[#49BBBD] focus:outline-none"
                />
              </div>
            )}

            <div>
              <label className="text-sm font-medium text-[#252641] mb-1 block">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="input input-bordered w-full rounded-full focus:border-[#49BBBD] focus:outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-[#252641] mb-1 block">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="input input-bordered w-full rounded-full pr-10 focus:border-[#49BBBD] focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#49BBBD] transition-colors"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {error && <p className="text-red-500 text-xs">{error}</p>}

            <button
              type="submit"
              className="btn bg-[#49BBBD] hover:bg-[#3da3a5] text-white border-none rounded-full mt-2 transition-colors"
            >
              {mode === "login" ? "Log In" : "Sign Up"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthForm;