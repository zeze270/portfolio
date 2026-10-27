# AGENTS.md — 项目开发规范

> 给 AI 编程助手（Cursor / Copilot / 任意对话式 AI）看的项目说明书。
> 每次开新对话时，把本文件 + PRD.md + TECH_DESIGN.md 一起喂给 AI。

---

## 1. 项目是什么

李涵（大连民族大学 物联网工程 大三）的个人作品集静态网站。
目标：展示个人简介、技能、做过的项目、联系方式，并部署到 Cloudflare Pages 公开访问。

## 2. 技术栈（硬约束，不许改）

- Vite 5 + Vue 3（`<script setup>` 组合式 API）+ TypeScript
- Tailwind CSS v3 写样式
- **不使用**任何 UI 组件库（Element Plus / Ant Design / Naive UI 一律禁止）
- **不使用** vue-router、Pinia、Axios（本项目用不到）
- **不写**后端、数据库、接口请求
- 包管理器用 npm

## 3. 视觉规范（硬约束）

- 整体是**低饱和薄荷绿清新风**，主背景 `#f0f7f4`，白色卡片 `#ffffff`
- 主强调色 `#2f8f6f`，按钮/链接 hover 用 `#1f6b53`
- 正文 `#2d3a35`，次要文字 `#6b7d75`，边框 `#d8e6de`，chip 底色 `#e3efe9`
- 卡片圆角 16px，按钮/chip 用圆角-full 胶囊形
- **严禁出现**：深色背景、星空粒子动画、霓虹渐变、赛博朋克风（这是老师明确禁止的课上示例同款）

## 4. 目录与代码风格

- 组件一律放 `src/components/`，每个区块一个 `.vue` 文件
- 所有个人信息、技能、项目数据**只写在 `src/data/site.ts`**，组件里禁止硬编码姓名/邮箱/项目名
- 样式优先用 Tailwind 工具类；确实写自定义 CSS 才进 `src/style.css`
- 组件用 `<script setup lang="ts">`，props/emits 都要写 TS 类型
- 文件名 PascalCase（`NavBar.vue`），变量/函数 camelCase
- 不写注释除非逻辑复杂；不保留 `console.log`

## 5. 开发与测试要求

- 每完成一个功能模块，先自己跑 `npm run dev` 在浏览器里确认无报错、无样式错乱，再让我提交
- 响应式必须自测：Chrome DevTools 切到 375px 手机宽，确认无横向滚动条、汉堡菜单可用
- 改完后跑一次 `npm run build`，确保 TypeScript 无报错、能成功打包
- 不要一次让 AI 写完所有功能，**一个组件一个组件来**

## 6. Git 约定

- 主分支 `main`
- 每完成一个区块 commit 一次，commit message 用英文短句，例如：
  `feat: add hero section` / `style: mint theme tokens` / `fix: mobile nav overlay`
- 不要 `--no-verify`，不要 force push

## 7. 我希望你怎么干活

- 接到任务先复述你要改哪些文件，再动手
- 给我完整可运行的代码，不要给伪代码或省略号
- 遇到不确定的设计选择，先问我，不要自己拍板引入新库
