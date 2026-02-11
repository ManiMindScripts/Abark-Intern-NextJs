export default function Loading() {
  return (
    <div className="space-y-10 animate-pulse">
      
      <div className="text-center space-y-4">
        
        <div className="h-12 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg max-w-2xl mx-auto"></div>
        
        
        <div className="max-w-xl mx-auto space-y-2">
          <div className="h-4 bg-gray-100 rounded w-full"></div>
          <div className="h-4 bg-gray-100 rounded w-5/6 mx-auto"></div>
          <div className="h-4 bg-gray-100 rounded w-4/6 mx-auto"></div>
        </div>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-100">
            
            <div className="h-48 bg-gradient-to-r from-gray-200 to-gray-300"></div>
            
            <div className="p-6 space-y-4">
              
              <div className="flex items-center justify-between">
                <div className="h-6 bg-gray-200 rounded-full w-24"></div>
                <div className="h-4 bg-gray-100 rounded w-16"></div>
              </div>
              
             
              <div className="space-y-2">
                <div className="h-5 bg-gray-300 rounded w-4/5"></div>
                <div className="h-5 bg-gray-300 rounded w-3/5"></div>
              </div>
              
             
              <div className="space-y-2">
                <div className="h-3 bg-gray-100 rounded w-full"></div>
                <div className="h-3 bg-gray-100 rounded w-11/12"></div>
                <div className="h-3 bg-gray-100 rounded w-10/12"></div>
              </div>
              
              
              <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                <div className="space-y-1">
                  <div className="h-3 bg-gray-200 rounded w-24"></div>
                  <div className="h-3 bg-gray-100 rounded w-16"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}