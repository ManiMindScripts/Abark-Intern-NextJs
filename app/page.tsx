import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 px-6">
      <div className="text-center space-y-8 max-w-3xl">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-600">
            Welcome to My Blog 
          </h1>
          <p className="text-gray-600 text-xl md:text-2xl leading-relaxed">
            A modern blog built with Next.js App Router, Server Components, and TypeScript.
            Discover insights, tutorials, and the latest in web development.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <Link 
            href="/blog"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Explore Blog Posts →
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-6 pt-12">
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="text-3xl mb-2">⚡</div>
            <h3 className="font-bold text-gray-800">Fast</h3>
            <p className="text-gray-600 text-sm">Built with Next.js</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="text-3xl mb-2">🔒</div>
            <h3 className="font-bold text-gray-800">Secure</h3>
            <p className="text-gray-600 text-sm">Server Components</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="text-3xl mb-2">💻</div>
            <h3 className="font-bold text-gray-800">Modern</h3>
            <p className="text-gray-600 text-sm">TypeScript & Tailwind</p>
          </div>
        </div>
      </div>
    </div>
  )
}

