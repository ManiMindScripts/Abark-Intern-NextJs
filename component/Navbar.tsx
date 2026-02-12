import Link from "next/link"

const Navbar = () => {
    return (
        <>
            <nav className="bg-white shadow-md">
                <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
                    <h1 className="text-gray-700 text-xl font-bold">Next Blog</h1>
                    <div className="space-x-6">
                        <Link href="/"
                            className="text-gray-700 hover:text-blue-600 transition"
                        >
                            Home
                        </Link>
                        <Link href="/blog"
                            className="text-gray-700 hover:text-blue-600 transition"
                        >
                             Blog
                        </Link>
                        <Link href="/contact"
                            className="text-gray-700 hover:text-blue-600 transition"
                        >
                             Contact
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar