"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setIsPending(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      
      const csrfRes = await fetch("/api/auth/csrf");
      const { csrfToken } = await csrfRes.json();

      
      const res = await fetch("/api/auth/callback/credentials?json=true", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          csrfToken,
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        setError("Invalid email or password");
        setIsPending(false);
        return;
      }
      router.push("/notes");
      router.refresh();
    } catch (err) {
      setError("Network error");
      setIsPending(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-xl shadow"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

        <div className="mb-4">
          <label className="block mb-2 text-sm">Email</label>
          <input
            name="email"
            type="email"
            required
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm">Password</label>
          <input
            name="password"
            type="password"
            required
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        {error && (
          <p className="text-red-500 text-sm mb-4">{error}</p>
        )}

        <button
          disabled={isPending}
          className="w-full bg-black text-white py-2 rounded-lg"
        >
          {isPending ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}