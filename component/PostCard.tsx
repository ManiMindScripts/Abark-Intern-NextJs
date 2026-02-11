import Link from "next/link"
import { Post } from "@/types/blog"

interface Props {
  post: Post
}

export function PostCard({ post }: Props) {
  return (
    <Link
      href={`/blog/${post.id}`}
      className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border hover:border-blue-500"
    >
      <div className="space-y-4">
        <h2 className="text-xl font-semibold group-hover:text-blue-600 transition">
          {post.title}
        </h2>
        <p className="text-gray-500 text-sm line-clamp-3">
          {post.body}
        </p>
        <span className="inline-block text-sm text-blue-600 font-medium group-hover:translate-x-1 transition">
          Read More →
        </span>
      </div>
    </Link>
  )
}