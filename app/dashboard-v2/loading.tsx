import { Header } from "@/components/layout/header";
import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="p-4 sm:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Global Balance Skeleton */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <Skeleton className="h-4 w-24 mb-2" />
              <Skeleton className="h-8 w-32" />
            </div>

            {/* Top Stores Section Skeleton */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 space-y-4 sm:space-y-0">
                <Skeleton className="h-6 w-64" />
                <Skeleton className="h-8 w-32 rounded-full" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {Array(4)
                  .fill(0)
                  .map((_, i) => (
                    <div
                      key={i}
                      className={`rounded-2xl p-4 ${
                        i === 0 ? "bg-orange-600" : "bg-gray-100"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <Skeleton
                          className={`h-5 w-5 ${
                            i === 0 ? "bg-orange-500" : "bg-gray-300"
                          }`}
                        />
                        <Skeleton
                          className={`h-4 w-4 ${
                            i === 0 ? "bg-orange-500" : "bg-gray-300"
                          }`}
                        />
                      </div>
                      <Skeleton
                        className={`h-4 w-20 mb-1 ${
                          i === 0 ? "bg-orange-500" : "bg-gray-300"
                        }`}
                      />
                      <Skeleton
                        className={`h-3 w-16 ${
                          i === 0 ? "bg-orange-400" : "bg-gray-300"
                        }`}
                      />
                    </div>
                  ))}
              </div>
            </div>

            {/* Transactions Table Skeleton */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 space-y-4 sm:space-y-0">
                <Skeleton className="h-6 w-48" />
                <Skeleton className="h-8 w-40 rounded-full" />
              </div>
              <div className="space-y-4">
                {Array(6)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className="flex items-center space-x-4">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-4 w-20" />
                      <Skeleton className="h-4 w-16" />
                      <Skeleton className="h-4 w-32" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Right Column - Statistics Skeleton */}
          <div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <Skeleton className="h-6 w-24" />
                <Skeleton className="h-8 w-32 rounded-full" />
              </div>
              <div className="text-center space-y-6">
                <Skeleton className="h-32 w-32 rounded-full mx-auto" />
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Skeleton className="w-3 h-3 rounded-full" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                  <div className="flex items-center space-x-3">
                    <Skeleton className="w-3 h-3 rounded-full" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </div>
                <div className="space-y-2">
                  {Array(4)
                    .fill(0)
                    .map((_, i) => (
                      <Skeleton key={i} className="h-4 w-20" />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
