import * as fs from 'fs'
import * as path from 'path'
import * as cheerio from 'cheerio'
import type { Repository, TrendingData } from '@/types'

const GITHUB_TRENDING_URL = 'https://github.com/trending'

async function fetchTrendingData(): Promise<Repository[]> {
  const response = await fetch(GITHUB_TRENDING_URL, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch GitHub Trending: ${response.status} ${response.statusText}`)
  }

  const html = await response.text()
  const $ = cheerio.load(html)
  const repositories: Repository[] = []

  $('article.Box-row').each((_, element) => {
    const nameEl = $(element).find('h2 a')
    const name = nameEl.text().trim()
    const url = 'https://github.com' + nameEl.attr('href')

    const description = $(element).find('p.col-9').text().trim()
    const language = $(element).find('[itemprop="programmingLanguage"]').text().trim()

    const starText = $(element).find('[aria-label="Stars"]').text().trim()
    const stars = parseInt(starText.replace(/,/g, '').replace(/k/gi, '000')) || 0

    const forkText = $(element).find('[aria-label="Forks"]').text().trim()
    const forks = parseInt(forkText.replace(/,/g, '').replace(/k/gi, '000')) || 0

    const todayStarsText = $(element).find('.text-green').text().trim()
    const todayStars = todayStarsText ? parseInt(todayStarsText.replace(/,/g, '')) : 0

    const builders: string[] = []
    $(element).find('[alt="Avatar"]').each((_, img) => {
      const builder = $(img).attr('alt')
      if (builder) builders.push(builder)
    })

    repositories.push({
      name,
      description,
      language,
      stars,
      forks,
      todayStars,
      url,
      builders
    })
  })

  return repositories
}

async function main() {
  console.log('Starting GitHub Trending crawler...')

  try {
    const repositories = await fetchTrendingData()
    console.log(`Fetched ${repositories.length} repositories`)

    const data: TrendingData = {
      updatedAt: new Date().toISOString(),
      repositories
    }

    const outputPath = path.join(__dirname, '..', 'public', 'data', 'trending.json')
    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2))
    console.log(`Data saved to ${outputPath}`)

  } catch (error) {
    console.error('Crawler failed:', error)
    process.exit(1)
  }
}

main()
