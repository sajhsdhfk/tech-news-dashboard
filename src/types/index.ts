export interface Repository {
  name: string;           // 仓库名称
  description: string;    // 描述
  language: string;       // 主要语言
  stars: number;          // 总 Star 数
  forks: number;          // Fork 数
  todayStars: number;     // 今日 Star 增长
  url: string;            // 仓库链接
  builders: string[];     // 构建者列表
}

export interface TrendingData {
  updatedAt: string;      // 更新时间
  repositories: Repository[]; // 仓库列表
}
