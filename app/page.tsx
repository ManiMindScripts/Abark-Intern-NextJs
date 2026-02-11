import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">
          Welcome to My Blog 🚀
        </h1>
        <p className="text-gray-600 text-lg">
           This blog is built using Next.js App Router,
        Server Components, and TypeScript.
        </p>
        <Link href="/blog"
        className="inline-block bg-blue-600 text-white px-3 py-6 rounded-xl hover:bg-blue-700 transition"
        >
          Explore Blog Posts
        </Link>
      </div>
    </>
  )
}