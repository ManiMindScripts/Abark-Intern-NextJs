"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
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
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (!res || res.error) {
        setError(res?.error || "Invalid email or password");
        setIsPending(false);
        return;
      }

      // Success → redirect to notes page
      router.push("/notes");
      router.refresh();
    } catch (err) {
      setError("Network error. Please try again.");
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

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button
          disabled={isPending}
          className="w-full bg-black text-white py-2 rounded-lg"
        >
          {isPending ? "Logging in..." : "Login"}
        </button>

        <button
          type="button"
          onClick={() => router.push("/register")}
          className="w-full mt-3 bg-gray-200 text-black py-2 rounded-lg hover:bg-gray-300"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}