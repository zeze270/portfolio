# 技术设计文档（TECH_DESIGN.md）

> 项目：李涵的个人作品集网站
> 配套文档：PRD.md、AGENTS.md
> 日期：2026-10-27

---

## 一、技术栈选型

| 层 | 选型 | 理由 |
|---|---|---|
| 构建工具 | **Vite 5** | 启动快、HMR 热更新、产物纯静态，适合托管 |
| 前端框架 | **Vue 3（`<script setup>` 组合式 API）** | 有 Vue Router 基础，上手快 |
| 语言 | **TypeScript** | 类型安全，AI 生成代码更稳 |
| 样式 | **Tailwind CSS v3** | 原子化写样式快，配色 Token 直接在 config 里管 |
| 路由 | **不需要 vue-router**（MVP 单页锚点滚动即可） | 静态单页，避免多路由部署坑 |
| 数据存储 | **一个 `src/data/site.ts` 配置文件** | 个人信息/技能/项目全写死在 TS 里，不接数据库 |
| 部署 | **Cloudflare Pages**（首选）/ Vercel 兜底 | 免费、静态托管、全球 CDN |

> 不引入：UI 组件库（Element/Antd 一律不用，手写 Tailwind 足够，风格更统一）、状态管理库、后端、数据库。

---

## 二、目录结构

```
my-website/
├── index.html                  # 入口 HTML，配 <title>/<meta>
├── package.json
├── vite.config.ts
├── tailwind.config.js          # 配色 Token 全写在这里
├── postcss.config.js
├── tsconfig.json
├── .gitignore
├── PRD.md
├── TECH_DESIGN.md
├── AGENTS.md
└── src/
    ├── main.ts                 # Vue 挂载入口
    ├── App.vue                 # 单页外壳，组合各区块组件
    ├── style.css               # Tailwind 指令 + 全局少量自定义
    ├── data/
    │   └── site.ts             # ★ 所有个人信息/技能/项目在这里改
    ├── components/
    │   ├── NavBar.vue          # 吸顶毛玻璃导航 + 移动端汉堡菜单
    │   ├── HeroSection.vue     # 首页头像+名字+CTA
    │   ├── AboutSection.vue    # 关于我 + 教育时间线
    │   ├── SkillsSection.vue   # 技能分组 chip
    │   ├── ProjectsSection.vue # 项目卡片列表
    │   ├── ContactSection.vue  # 邮箱/GitHub 链接
    │   └── SiteFooter.vue      # 页脚
    └── assets/
        └── avatar.jpg          # 头像（压缩到 < 100KB）
```

---

## 三、数据模型（site.ts 里的 TypeScript 类型）

```ts
export interface SkillGroup {
  category: string          // 组名：编程语言 / 嵌入式与硬件 / 后端·数据·AI / 工具
  items: string[]           // 技能 chip 列表
}

export interface Project {
  name: string              // 项目名
  summary: string           // 一句话简介
  tech: string[]            // 技术标签
  github?: string           // 可选链接
  demo?: string             // 可选演示链接
  cover?: string            // 可选封面图
}

export interface SiteInfo {
  name: string              // 李涵
  title: string             // 物联网工程 · 大三在读
  tagline: string           // 个性签名
  about: string             // 自我介绍段落
  email: string
  github: string
  skills: SkillGroup[]
  projects: Project[]
}
```

> 原则：组件里**绝不硬编码**个人信息，全部从 `site.ts` import。以后改内容只动这一个文件。

---

## 四、关键技术点

1. **配色统一收口**：在 `tailwind.config.js` 里扩展 theme.colors，把 PRD 第四节的色值全部命名：
   - `bg-mint`: `#f0f7f4`
   - `card`: `#ffffff`
   - `primary`: `#2f8f6f`
   - `primary-dark`: `#1f6b53`
   - `text-main`: `#2d3a35`
   - `text-sub`: `#6b7d75`
   - `border-soft`: `#d8e6de`
   - `chip`: `#e3efe9`

2. **响应式**：Tailwind 断点直接用默认的 `sm:`(640) / `md:`(768) / `lg:`(1024)。项目卡片 grid：`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`。

3. **平滑滚动**：CSS 一行 `html { scroll-behavior: smooth; }`，导航点击 `#about` 这类锚点即可，不写 JS。

4. **导航毛玻璃**：`fixed top-0 backdrop-blur-lg bg-white/70`。移动端汉堡菜单用一个 `ref` 控制 `v-if` 展开，不装第三方库。

5. **图片优化**：头像用 `<img loading="lazy">`，项目卡片封面若无就先用纯色占位块，不强行找图。

6. **构建后部署**：`npm run build` 产物在 `dist/`，Cloudflare Pages 导入 GitHub 仓库后：
   - 框架预设选 **Vue**（或 None 都行，Vite 会自动识别）
   - 构建命令：`npm run build`
   - 输出目录：`dist`

---

## 五、开发顺序（对应 PRD 的分步迭代）

1. **第一步（跑通骨架）**：`npm create vite@latest` 建项目 → 装 Tailwind → 配好配色 → 把 7 个空组件按顺序摆进 App.vue → `npm run dev` 能看到空区块。
2. **第二步（填内容）**：先写 `site.ts` 真实数据 → 逐个组件填 UI：导航 → Hero → About → Skills → Projects → Contact → Footer。
3. **第三步（打磨）**：hover 动效、移动端汉堡菜单、响应式微调、`<title>` 和 meta。
4. **第四步（部署）**：git 初始化推 GitHub → Cloudflare Pages 导入 → 拿到 `*.pages.dev` 链接。
