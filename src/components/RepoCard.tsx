import type { Repository } from '@/types'

interface RepoCardProps {
  repo: Repository;
}

export function RepoCard({ repo }: RepoCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-2">
        <a
          href={repo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-semibold text-blue-600 dark:text-blue-400 hover:underline"
        >
          {repo.name}
        </a>
        {repo.todayStars > 0 && (
          <span className="text-xs font-medium text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900 px-2 py-1 rounded">
            +{repo.todayStars} today
          </span>
        )}
      </div>

      {repo.description && (
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          {repo.description}
        </p>
      )}

      <div className="flex flex-wrap gap-3 text-xs text-gray-500 dark:text-gray-400">
        {repo.language && (
          <span className="flex items-center">
            <span className="w-3 h-3 rounded-full bg-blue-400 mr-1"></span>
            {repo.language}
          </span>
        )}
        <span className="flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          {repo.stars.toLocaleString()}
        </span>
        <span className="flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-3.316-2.684V5.5M12 5.5V19" />
          </svg>
          {repo.forks.toLocaleString()}
        </span>
      </div>
    </div>
  )
}
