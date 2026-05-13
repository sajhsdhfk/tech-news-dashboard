import { Header } from '@/components/Header'
import { Dashboard } from '@/components/Dashboard'
import type { TrendingData } from '@/types'
import data from '../../public/data/trending.json'

export default function Home() {
  // 处理数据加载失败的情况
  let trendingData: TrendingData

  try {
    trendingData = data as TrendingData
  } catch (error) {
    trendingData = {
      updatedAt: new Date().toISOString(),
      repositories: []
    }
  }

  return (
    <div className="min-h-screen">
      <Header lastUpdated={trendingData.updatedAt} />
      <Dashboard data={trendingData} />
    </div>
  )
}
