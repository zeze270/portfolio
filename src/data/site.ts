export interface SkillGroup {
  category: string
  items: string[]
}

export interface Project {
  name: string
  summary: string
  tech: string[]
  github?: string
  demo?: string
}

export interface SiteInfo {
  name: string
  title: string
  tagline: string
  about: string
  email: string
  github: string
  skills: SkillGroup[]
  projects: Project[]
}

export const site: SiteInfo = {
  name: '李涵',
  title: '大连民族大学 · 物联网工程 · 大三在读',
  tagline: '在代码、电路和模型之间来回横跳',
  about:
    '你好，我是李涵，大连民族大学信息与通信工程学院物联网工程专业大三学生。平时既玩 51 单片机和 Proteus 仿真，也写 Python 训练过小语言模型，对嵌入式、后端和 AI 应用都有兴趣。正在一点点把自己做过的东西整理到这个站上。',
  email: 'your-email@example.com', // TODO: 换成你自己的邮箱
  github: 'https://github.com/yourname', // TODO: 换成你自己的 GitHub 地址
  skills: [
    {
      category: '编程语言',
      items: ['C/C++', 'Python', 'Java', 'HTML/CSS/JS'],
    },
    {
      category: '嵌入式与硬件',
      items: ['51 单片机 (Keil C51)', 'Proteus 8 仿真', 'progisp 下载', 'Logisim', 'STM32 (学习中)'],
    },
    {
      category: '后端 / 数据 / AI',
      items: ['MySQL (Navicat)', 'Spring Boot', 'PyTorch', 'Anaconda', 'Apipost'],
    },
    {
      category: '工具与其他',
      items: ['Git', 'Cursor', 'VS Code', 'Ubuntu (WSL)', 'Linux 基础', 'Android Studio'],
    },
  ],
  projects: [
    {
      name: '自研小 LLM 训练全流程',
      summary:
        '从零实现 BPE 分词器训练、768 维小模型预训练，再用 SFT 全量微调与 LoRA 高效微调出一个对话模型。',
      tech: ['Python', 'PyTorch', 'LoRA', 'Transformer'],
      github: '',
    },
    {
      name: 'Chrome 扩展：电商图片批量提取',
      summary:
        'Manifest V3 扩展，在淘宝/京东/拼多多详情页一键抓取全部商品图，可视化勾选后批量打包下载为 PNG。',
      tech: ['JavaScript', 'Chrome Extension', 'Canvas'],
      github: '',
    },
    {
      name: '51 单片机课程设计',
      summary:
        '基于 Keil C51 + Proteus 仿真完成的单片机项目，涉及数码管显示、蜂鸣器、串口通信等外设控制。',
      tech: ['C51', 'Keil uVision5', 'Proteus'],
      github: '',
    },
    {
      name: 'Tokenizer 训练实验',
      summary:
        '用 BPE 算法在中文语料上训练自己的分词器，支持编码、解码与词表导出，供后续预训练使用。',
      tech: ['Python', 'BPE', 'NLP'],
      github: '',
    },
  ],
}
