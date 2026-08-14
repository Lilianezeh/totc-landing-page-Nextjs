import React, { useState } from "react";
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { z } from "zod";

type AuthFormProps = {
  mode: "login" | "signup";
};

const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters.")
  .regex(/[a-z]/, "Password must include at least one lowercase letter.")
  .regex(/[A-Z]/, "Password must include at least one uppercase letter.")
  .regex(/[0-9]/, "Password must include at least one number.")
  .regex(/[^A-Za-z0-9]/, "Password must include at least one special character.");

const loginSchema = z.object({
  username: z.string().min(1, "User name is required."),
  password: passwordSchema,
});

const signupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z
    .string()
    .min(1, "Email is required.")
    .email("Enter a valid email address."),
  password: passwordSchema,
});

type Errors = {
  name?: string;
  email?: string;
  username?: string;
  password?: string;
};

type StoredAccount = { name: string; email: string; password: string };
const fakeAccountDB: Record<string, StoredAccount> = {};

const AuthForm = ({ mode: initialMode }: AuthFormProps) => {
  const [mode, setMode] = useState<"login" | "signup">(initialMode);
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [formError, setFormError] = useState("");
  const [success, setSuccess] = useState(false);

  const password = mode === "login" ? loginPassword : signupPassword;
  const setPassword = mode === "login" ? setLoginPassword : setSignupPassword;

  const runValidation = (): boolean => {
    const result =
      mode === "login"
        ? loginSchema.safeParse({
            username: loginUsername,
            password: loginPassword,
          })
        : signupSchema.safeParse({
            name: signupName,
            email: signupEmail,
            password: signupPassword,
          });

    if (result.success) {
      setErrors({});
      return true;
    }

    const fieldErrors: Errors = {};
    for (const issue of result.error.issues) {
      const field = issue.path[0] as keyof Errors;
      if (!fieldErrors[field]) fieldErrors[field] = issue.message;
    }
    setErrors(fieldErrors);
    return false;
  };

  const validateSingleField = (field: keyof Errors, value: string) => {
    const schema = mode === "login" ? loginSchema : signupSchema;
    const shape = schema.shape as Record<string, z.ZodTypeAny>;
    if (!shape[field]) return;

    const result = shape[field].safeParse(value);
    setErrors((prev) => ({
      ...prev,
      [field]: result.success ? undefined : result.error.issues[0].message,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");
    if (!runValidation()) return;

    if (mode === "signup") {
      if (fakeAccountDB[signupEmail.toLowerCase()]) {
        setFormError(
          "An account with this email already exists. Try logging in instead."
        );
        return;
      }
      fakeAccountDB[signupEmail.toLowerCase()] = {
        name: signupName,
        email: signupEmail,
        password: signupPassword,
      };
    } else {
      const account = Object.values(fakeAccountDB).find(
        (acc) => acc.name.toLowerCase() === loginUsername.toLowerCase()
      );
      if (!account) {
        setFormError(
          "No account found with that user name. Please register first."
        );
        return;
      }
      if (account.password !== loginPassword) {
        setFormError("Incorrect password. Please try again.");
        return;
      }
    }

    setSuccess(true);
    setLoginUsername("");
    setLoginPassword("");
    setSignupName("");
    setSignupEmail("");
    setSignupPassword("");
    setErrors({});
  };

  const switchMode = (newMode: "login" | "signup") => {
    setMode(newMode);
    setErrors({});
    setFormError("");
    setSuccess(false);
  };

  const inputClass = (hasError?: string) =>
    `input input-bordered w-full rounded-full text-[#252641] placeholder:text-gray-400 focus:outline-none transition-colors ${
      hasError
        ? "border-red-400 focus:border-red-400"
        : "focus:border-[#49BBBD]"
    }`;

  return (
    <div className="p-4 md:p-8">
      <div className="grid md:grid-cols-2 gap-6 bg-white rounded-2xl overflow-hidden shadow-lg min-h-[36rem]">
        <div className="relative hidden md:block h-full min-h-[36rem]">
          <Image
            src={mode === "login" ? "/images/login.png" : "/images/signup.png"}
            alt={
              mode === "login"
                ? "Students in classroom"
                : "Students raising hands"
            }
            fill
            className="object-cover rounded-2xl p-2"
          />
          <div className="absolute bottom-8 left-8 text-white">
            <p className="text-2xl font-bold">Lorem Ipsum is simply</p>
            <p className="text-lg text-white/80">Lorem Ipsum is simply</p>
          </div>
        </div>

        <div className="flex flex-col justify-center px-6 md:px-12 py-10">
          <p className="text-center text-sm text-gray-500 mb-4">
            Welcome to{" "}
            <span className="font-semibold text-[#252641]">lorem</span>..!
          </p>

          <div className="relative flex bg-[#49BBBD]/20 rounded-full p-1 mb-6">
            <div
              className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-[#49BBBD] rounded-full transition-all duration-300 ${
                mode === "login" ? "left-1" : "left-[calc(50%+2px)]"
              }`}
            />
            <button
              type="button"
              onClick={() => switchMode("login")}
              className={`relative z-10 flex-1 text-sm font-semibold py-2 transition-colors ${
                mode === "login" ? "text-white" : "text-[#49BBBD]"
              }`}
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => switchMode("signup")}
              className={`relative z-10 flex-1 text-sm font-semibold py-2 transition-colors ${
                mode === "signup" ? "text-white" : "text-[#49BBBD]"
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
                {mode === "login"
                  ? "Logged in successfully!"
                  : "Account created!"}
              </p>
              <p className="text-sm text-gray-500">
                (Accounts are stored only in memory for this demo — refreshing
                the page will clear them.)
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col gap-5 max-w-sm w-full mx-auto"
            >
              {mode === "signup" && (
                <div>
                  <label className="text-sm font-medium text-[#252641] mb-1 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={signupEmail}
                    onChange={(e) => {
                      setSignupEmail(e.target.value);
                      if (errors.email)
                        validateSingleField("email", e.target.value);
                    }}
                    onBlur={(e) => validateSingleField("email", e.target.value)}
                    placeholder="Enter your Email Address"
                    className={inputClass(errors.email)}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1 ml-2">
                      {errors.email}
                    </p>
                  )}
                </div>
              )}

              <div>
                <label className="text-sm font-medium text-[#252641] mb-1 block">
                  Username
                </label>
                <input
                  type="text"
                  value={mode === "login" ? loginUsername : signupName}
                  onChange={(e) => {
                    const field = mode === "login" ? "username" : "name";
                    if (mode === "login") {
                      setLoginUsername(e.target.value);
                    } else {
                      setSignupName(e.target.value);
                    }
                    if (errors[field])
                      validateSingleField(field, e.target.value);
                  }}
                  onBlur={(e) =>
                    validateSingleField(
                      mode === "login" ? "username" : "name",
                      e.target.value
                    )
                  }
                  placeholder="Enter your User name"
                  className={inputClass(
                    mode === "login" ? errors.username : errors.name
                  )}
                />
                {(mode === "login" ? errors.username : errors.name) && (
                  <p className="text-red-500 text-xs mt-1 ml-2">
                    {mode === "login" ? errors.username : errors.name}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium text-[#252641] mb-1 block">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (errors.password)
                        validateSingleField("password", e.target.value);
                    }}
                    onBlur={(e) =>
                      validateSingleField("password", e.target.value)
                    }
                    placeholder="Enter your Password"
                    className={`${inputClass(errors.password)} pr-10`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#49BBBD] transition-colors"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1 ml-2">
                    {errors.password}
                  </p>
                )}
                {mode === "signup" && !errors.password && (
                  <p className="text-gray-400 text-xs mt-1 ml-2">
                    At least 8 characters, with uppercase, lowercase, a
                    number, and a special character.
                  </p>
                )}
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
    
     <a href="#"
      className="text-gray-500 hover:text-[#49BBBD] transition-colors"
    >
      Forgot Password ?
    </a>
  </div>
)}

              {formError && (
                <p className="text-red-500 text-xs text-center">
                  {formError}
                </p>
              )}

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