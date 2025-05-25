import { Header } from "@/components/layout/header";
import { Skeleton } from "@/components/ui/skeleton";

export default function MagasinsLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 space-y-4 sm:space-y-0">
          <Skeleton className="h-8 w-32" />
          <Skeleton className="h-10 w-40 rounded-full" />
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
          <Skeleton className="h-11 w-full sm:flex-1 sm:max-w-md rounded-full" />
          <Skeleton className="h-11 w-full sm:w-48 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 mb-8">
          {Array(15)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className={`rounded-2xl p-5 shadow-sm ${
                  i === 0 ? "bg-orange-600" : "bg-white"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <Skeleton
                    className={`h-5 w-5 ${
                      i === 0 ? "bg-orange-500" : "bg-gray-200"
                    }`}
                  />
                  <Skeleton
                    className={`h-4 w-4 ${
                      i === 0 ? "bg-orange-500" : "bg-gray-200"
                    }`}
                  />
                </div>
                <Skeleton
                  className={`h-4 w-20 mb-1 ${
                    i === 0 ? "bg-orange-500" : "bg-gray-200"
                  }`}
                />
                <Skeleton
                  className={`h-3 w-16 ${
                    i === 0 ? "bg-orange-400" : "bg-gray-200"
                  }`}
                />
              </div>
            ))}
        </div>

        {/* Pagination Skeleton */}
        <div className="flex justify-center space-x-2">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Skeleton key={i} className="w-10 h-10 rounded-full" />
            ))}
        </div>
      </main>
    </div>
  );
}
