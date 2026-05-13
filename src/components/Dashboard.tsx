import type { TrendingData } from '@/types'
import { RepoCard } from './RepoCard'

interface DashboardProps {
  data: TrendingData;
}

export function Dashboard({ data }: DashboardProps) {
  const repos = data.repositories

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo, index) => (
          <RepoCard key={index} repo={repo} />
        ))}
      </div>

      {repos.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            No trending repositories available.
          </p>
        </div>
      )}
    </main>
  )
}
