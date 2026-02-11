import Link from "next/link"
import { getPost, getComments } from "@/lib/blog-api"
import { CommentList } from "@/component/CommentList"

export default async function BlogDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const { id } = await params

  const post = await getPost(id)
  const comments = await getComments(id)

  return (
    <div className="max-w-3xl mx-auto py-12 px-6 space-y-10">
      <Link
        href="/blog"
        className="text-blue-600 hover:underline"
      >
        ← Back to Blog
      </Link>
       <div className="bg-white shadow-xl rounded-3xl p-8 space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">{post.title}</h1>
        <p className="text-gray-600 leading-relaxed">{post.body}</p>
      </div>
    
        <CommentList comments={comments} />
      
    </div>
  )
}