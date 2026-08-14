import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { z } from "zod";

const footerLinks = [
  { name: "Careers", path: "/career" },
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Terms & Conditions", path: "/terms" },
];

const emailSchema = z.string().min(1, "Email is required.").email("Enter a valid email address.");

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const validate = (value: string) => {
    const result = emailSchema.safeParse(value);
    return result.success ? "" : result.error.issues[0].message;
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const message = validate(email);
    setError(message);
    if (message) return;

    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="bg-[#252641] text-white px-6 md:px-32 py-16">
      <div className="flex flex-col items-center text-center gap-8">
        <div className="flex items-center gap-3">
          <Image src="/images/logo.png" alt="TOTC Logo" width={36} height={36} />
          <div className="text-left">
            <p className="font-semibold leading-tight">Virtual Class</p>
            <p className="text-sm text-gray-400 leading-tight">for Zoom</p>
          </div>
        </div>

        <div className="w-full max-w-md">
          <p className="text-sm mb-3">Subscribe to get our Newsletter</p>
          <form onSubmit={handleSubscribe} noValidate className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError(validate(e.target.value));
              }}
              onBlur={(e) => setError(validate(e.target.value))}
              placeholder="Your Email"
              className={`input rounded-full bg-transparent border text-white placeholder:text-gray-400 flex-1 focus:outline-none transition-colors ${
                error ? "border-red-400 focus:border-red-400" : "border-white/30 focus:border-[#49BBBD]"
              }`}
            />
            <button
              type="submit"
              className="btn bg-[#49BBBD] hover:bg-[#3da3a5] text-white border-none rounded-full px-6 transition-colors"
            >
              Subscribe
            </button>
          </form>
          {error && <p className="text-xs text-red-400 mt-2 text-left">{error}</p>}
          {subscribed && (
            <p className="text-xs text-[#2FC79E] mt-2">Thanks for subscribing!</p>
          )}
        </div>

        <ul className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
          {footerLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.path} className="hover:text-white transition-colors">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <p className="text-xs text-gray-500">&copy; 2021 Class Technologies Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;