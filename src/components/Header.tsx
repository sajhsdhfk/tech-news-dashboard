interface HeaderProps {
  lastUpdated: string;
}

export function Header({ lastUpdated }: HeaderProps) {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Tech News Dashboard
          </h1>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Last updated: {new Date(lastUpdated).toLocaleString()}
          </div>
        </div>
      </div>
    </header>
  )
}
