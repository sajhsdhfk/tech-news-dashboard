export interface Repository {
  name: string;
  description: string | null;
  url: string;
  stars: number;
  forks: number;
  language: string | null;
  todayStars: number;
}

export interface TrendingRepo {
  rank: number;
  repo: Repository;
}
