# Tech News Dashboard - 快速开始指南

## 项目简介

纯静态科技新闻聚合仪表盘，通过 GitHub Actions 每日自动爬取 GitHub Trending 数据，无需后端、服务器或数据库。

## 技术栈

- **框架**: Next.js 14 (静态生成)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **爬虫**: Cheerio
- **CI/CD**: GitHub Actions
- **托管**: GitHub Pages

## 本地开发

```bash
# 进入项目目录
cd tech-news-dashboard

# 安装依赖（如果还没有）
npm install

# 启动开发服务器
npm run dev

# 访问 http://localhost:3000
```

## 构建生产版本

```bash
# 构建静态站点
npm run build

# 输出目录：./dist
```

## 运行爬虫

```bash
# 本地运行爬虫（需要网络访问 GitHub）
npm run crawl

# 数据将保存到 public/data/trending.json
```

## 部署到 GitHub Pages

### 1. 创建 GitHub 仓库

```bash
# 在 GitHub 上创建新仓库
# 例如：your-username/tech-news-dashboard
```

### 2. 推送代码

```bash
# 添加远程仓库
git remote add origin https://github.com/your-username/tech-news-dashboard.git

# 推送到 main 分支
git push -u origin main
```

### 3. 配置 GitHub Pages

1. 进入 GitHub 仓库 Settings → Pages
2. Source 选择 GitHub Actions
3. 等待首次部署完成

### 4. 手动触发爬虫

1. 进入 Actions → Daily GitHub Trending Crawl
2. 点击 "Run workflow"
3. 等待工作流完成

## 项目结构

```
tech-news-dashboard/
├── .github/workflows/
│   └── daily-crawl.yml    # 每日爬虫工作流
├── public/data/
│   └── trending.json      # 爬虫数据
├── scripts/
│   └── crawler.ts         # 爬虫脚本
├── src/
│   ├── app/               # Next.js App Router
│   ├── components/        # React 组件
│   └── types/             # TypeScript 类型
├── project_memory.md      # 项目操作记录
└── next.config.js         # Next.js 配置
```

## 自定义数据源

要更改爬虫目标，修改 `scripts/crawler.ts`:

```typescript
const GITHUB_TRENDING_URL = 'https://github.com/trending'
// 修改为你想要的 URL
```

## 许可证

MIT