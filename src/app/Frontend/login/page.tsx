"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const boxRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    gsap.from(boxRef.current, {
      opacity: 0,
      y: 40,
      duration: 0.6,
      ease: "power3.out",
    });
  }, []);

  const handleLogin = async () => {
    const res = await fetch(
      `http://localhost:4000/users?email=${email}&password=${password}`
    );
    const data = await res.json();

    if (data.length > 0) {
      // LOGIN SUCCESS → GO TO HOME PAGE
      router.push("/");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1e1e1e] text-white">
      <div ref={boxRef} className="p-8 bg-[#2c2c2c] rounded-xl w-80 space-y-4">
        <h2 className="text-2xl font-bold text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 rounded text-black"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 rounded text-black"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full p-2 bg-blue-500 rounded hover:bg-blue-600 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
}
