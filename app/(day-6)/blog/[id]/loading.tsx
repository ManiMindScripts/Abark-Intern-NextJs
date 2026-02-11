export default function Loading() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-6 space-y-10 animate-pulse">

      <div className="h-5 w-32 bg-gray-200 rounded-lg"></div>

      <div className="bg-white shadow-xl rounded-3xl p-8 space-y-6">

        <div className="space-y-3">
          <div className="h-8 bg-gray-200 rounded-lg w-3/4"></div>
          <div className="h-8 bg-gray-200 rounded-lg w-1/2"></div>
        </div>

        <div className="space-y-4">
          <div className="h-4 bg-gray-100 rounded w-full"></div>
          <div className="h-4 bg-gray-100 rounded w-full"></div>
          <div className="h-4 bg-gray-100 rounded w-11/12"></div>
          <div className="h-4 bg-gray-100 rounded w-full"></div>
          <div className="h-4 bg-gray-100 rounded w-10/12"></div>
          <div className="h-4 bg-gray-100 rounded w-full"></div>
        </div>
      </div>


      <div className="space-y-8">

        <div className="h-6 bg-gray-200 rounded-lg w-48"></div>
        <div className="space-y-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white shadow-md rounded-2xl p-6 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-32"></div>
                  <div className="h-3 bg-gray-100 rounded w-24"></div>
                </div>
              </div>
              <div className="space-y-2 pl-13">
                <div className="h-4 bg-gray-100 rounded w-full"></div>
                <div className="h-4 bg-gray-100 rounded w-11/12"></div>
                <div className="h-4 bg-gray-100 rounded w-10/12"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}