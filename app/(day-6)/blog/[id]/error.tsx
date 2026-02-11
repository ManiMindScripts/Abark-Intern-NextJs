"use client"

export default function BlogError({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div className="text-center py-20 space-y-4">
      <h2 className="text-2xl font-bold text-red-500">
        Something went wrong!
      </h2>

      <p className="text-gray-500">
        {error.message}
      </p>

      <button
        onClick={() => reset()}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Try Again
      </button>
    </div>
  )
}