import { getPosts } from "@/lib/blog-api"
import { PostCard } from "@/component/PostCard"

export default async function BlogPage() {
  const posts = await getPosts() // now fetching all posts

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Latest Blog Posts
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          Discover insightful articles, clean architecture patterns, and modern web development techniques.
        </p>
      </div>

      {/* Posts Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.slice(0, 9).map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}