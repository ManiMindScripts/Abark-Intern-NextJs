import { Comment } from "@/types/blog"

interface Props {
  comments: Comment[]
}

export function CommentList({ comments }: Props) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">
        Comments ({comments.length})
      </h2>

      <div className="space-y-4">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="bg-gray-50 rounded-2xl p-5 border hover:shadow-md transition"
          >
            <p className="font-semibold text-gray-800">
              {comment.name}
            </p>
            <p className="text-sm text-gray-500 mb-2">
              {comment.email}
            </p>
            <p className="text-gray-700">
              {comment.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}