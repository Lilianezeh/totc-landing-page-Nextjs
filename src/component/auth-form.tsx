// component/auth-form.tsx
import React, { useState } from "react";
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type AuthFormProps = {
  mode: "login" | "signup";
};

const AuthForm = ({ mode: initialMode }: AuthFormProps) => {
  const [mode, setMode] = useState<"login" | "signup">(initialMode);
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const password = mode === "login" ? loginPassword : signupPassword;
  const setPassword = mode === "login" ? setLoginPassword : setSignupPassword;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (mode === "signup") {
      if (!signupName.trim()) {
        setError("Please enter your user name.");
        return;
      }
      if (!signupEmail.trim() || !signupEmail.includes("@")) {
        setError("Please enter a valid email address.");
        return;
      }
      if (signupPassword.length < 6) {
        setError("Password must be at least 6 characters.");
        return;
      }
    } else {
      if (!loginUsername.trim()) {
        setError("Please enter your user name.");
        return;
      }
      if (loginPassword.length < 6) {
        setError("Password must be at least 6 characters.");
        return;
      }
    }

    setSuccess(true);
    setLoginUsername("");
    setLoginPassword("");
    setSignupName("");
    setSignupEmail("");
    setSignupPassword("");
  };

  const switchMode = (newMode: "login" | "signup") => {
    setMode(newMode);
    setError("");
    setSuccess(false);
  };

  return (
    <div className="p-4 md:p-8">
      <div className="grid md:grid-cols-2 gap-6 bg-white rounded-2xl overflow-hidden shadow-lg min-h-[36rem]">
        {/* Left photo panel */}
        <div className="relative hidden md:block h-full min-h-[36rem]">
          <Image
            src={mode === "login" ? "/images/login.png" : "/images/signup.png"}
            alt={mode === "login" ? "Students in classroom" : "Students raising hands"}
            fill
            className="object-cover rounded-2xl p-2"
          />
          <div className="absolute bottom-8 left-8 text-white">
            <p className="text-2xl font-bold">Lorem Ipsum is simply</p>
            <p className="text-lg text-white/80">Lorem Ipsum is simply</p>
          </div>
        </div>

        {/* Right form panel */}
        <div className="flex flex-col justify-center px-6 md:px-12 py-10">
          <p className="text-center text-sm text-gray-500 mb-4">
            Welcome to <span className="font-semibold text-[#252641]">lorem</span>..!
          </p>

          {/* Login / Register toggle */}
          <div className="flex bg-[#49BBBD]/20 rounded-full p-1 max-w-[300px] mx-auto mb-6 gap-10">
            <button
              type="button"
              onClick={() => switchMode("login")}
              className={`flex-1 text-sm font-semibold py-2 rounded-2xl transition-colors ${
                mode === "login" ? "bg-[#49BBBD] text-white" : "text-[#49BBBD]"
              }`}
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => switchMode("signup")}
              className={`flex-1 text-sm font-semibold py-2 rounded-full transition-colors ${
                mode === "signup" ? "bg-[#49BBBD] text-white" : "text-[#49BBBD]"
              }`}
            >
              Register
            </button>
          </div>

          <p className="text-sm text-gray-500 text-center mb-8 max-w-sm mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
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
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-sm w-full mx-auto">
              {mode === "signup" && (
                <div>
                  <label className="text-sm font-medium text-[#252641] mb-1 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                    placeholder="Enter your Email Address"
                    className="input input-bordered w-full rounded-full text-[#252641] placeholder:text-gray-400 focus:border-[#49BBBD] focus:outline-none"
                  />
                </div>
              )}

              <div>
                <label className="text-sm font-medium text-[#252641] mb-1 block">
                  Username
                </label>
                <input
                  type="text"
                  value={mode === "login" ? loginUsername : signupName}
                  onChange={(e) =>
                    mode === "login"
                      ? setLoginUsername(e.target.value)
                      : setSignupName(e.target.value)
                  }
                  placeholder="Enter your User name"
                  className="input input-bordered w-full rounded-full text-[#252641] placeholder:text-gray-400 focus:border-[#49BBBD] focus:outline-none"
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
                    placeholder="Enter your Password"
                    className="input input-bordered w-full rounded-full pr-10 text-[#252641] placeholder:text-gray-400 focus:border-[#49BBBD] focus:outline-none"
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

              {mode === "login" && (
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-gray-500">
                    <input
                      type="checkbox"
                      checked={remember}
                      onChange={(e) => setRemember(e.target.checked)}
                      className="checkbox checkbox-sm"
                    />
                    Remember me
                  </label>
                  <a href="#" className="text-gray-500 hover:text-[#49BBBD] transition-colors">
                    Forgot Password ?
                  </a>
                </div>
              )}

              {error && <p className="text-red-500 text-xs">{error}</p>}

              <div className="pt-4">
                <button
                  type="submit"
                  className="btn bg-[#49BBBD] hover:bg-[#3da3a5] text-white border-none rounded-full transition-colors float-right px-10"
                >
                  {mode === "login" ? "Login" : "Register"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;