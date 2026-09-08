export const deck = {
  theme: 'fde',
  title: 'AI 时代，我不会，但我可以试试',
  subtitle: '从 iOS 开发到企业内部 FDE 的转变',
  speaker: { name: 'FDE 分享', role: 'AI 时代的工作方式', account: '' },
  slides: [
    {
      id: 'poster', type: 'story', variant: 'poster', theme: 'paper',
      backgroundImage: './assets/cover-coffee-chat.jpg', backgroundFit: 'contain',
    },
    {
      id: 'cover', type: 'story', variant: 'cover', theme: 'dark', eyebrow: '01 / SHIFT',
      titleLines: ['AI 时代', '我不会', '但我可以试试'], subtitle: '从 iOS 开发到企业内部 FDE 的转变',
      keywords: [
        'K8s', 'Docker', 'Redis', 'Backend', 'Frontend', 'API', 'Token', 'UIKit', 'SwiftUI', 'Android Studio', 'Xcode', 'Codex',
        'MCP', 'Agent', 'LLM', 'SQL', 'CI/CD', 'Bluetooth', 'HID', 'Kafka', 'ESP32', 'React', 'Python', 'AWS', 'GraphQL', 'gRPC',
        'Postgres', 'Nginx', 'Terraform', 'GitHub Actions', 'WebSocket', 'Rust', 'Go', 'Java', 'TypeScript', 'Node.js', 'Figma', 'Jira',
        'Docker Compose', 'Kotlin', 'Swift', 'Cloud', 'Queue', 'Cache', 'Observability', 'PR', 'Review', 'Data', 'Automation', 'Prompt',
      ],
      note: '改变的不是掌握了所有技术，而是面对陌生问题时的第一反应。',
    },
    {
      id: 'cross-platform', type: 'story', variant: 'cross-platform', theme: 'dark', eyebrow: '02 / COMPLETE RESULT',
      title: '从负责一个端，到负责一个功能的完整结果',
      platforms: [
        { label: 'iOS', note: '原生体验' }, { label: 'Android', note: '另一套实现' },
        { label: 'mWeb', note: '历史逻辑' }, { label: 'Desktop', note: '不同触点' },
      ], result: '用户看到的，应该是同一个功能', punch: '多人协作的成本，有时候比开发本身还高',
    },
    {
      id: 'problem-view', type: 'story', variant: 'problem-view', theme: 'dark', eyebrow: '03 / FDE MINDSET',
      title: 'FDE 最先改变的，不是技术栈',
      before: ['需求', '属于 iOS 的部分', '开发', '交付'],
      after: ['真实问题', '搞清楚问题', '需要什么就找什么', 'AI / API / 数据 / 代码 / 人', '结果'],
      punch: 'FDE 不要求你什么都会，但需要关注问题最终有没有被解决',
    },
    {
      id: 'blind-spots', type: 'story', variant: 'blind-spots', theme: 'dark', eyebrow: '04 / INVISIBLE GAPS',
      title: '公司越大，越容易出现看不见的断层',
      premise: '所有人都以为有一个系统，但它从来不存在',
      blindSpots: [
        { label: '流程看不见', detail: '业务 → 财务开发 → 会计', note: '每个人只知道自己那一段' },
        { label: '数据看不见', detail: '几十万条采购记录 → 汇总报表', note: '原始事实被压成一个数字' },
        { label: '工程事实看不见', detail: 'Git / PR / Review / 文档 → 层层汇报', note: '证据一直在，但没人直接查询' },
      ],
      punch: 'AI 让原本只能层层汇总的事实，重新变得可以查询',
    },
    {
      id: 'system-operator', type: 'story', variant: 'system-operator', theme: 'dark', eyebrow: '05 / SYSTEM OPERATOR',
      title: '当 AI 开始操作真实业务系统',
      steps: [
        { label: '01', title: '业务目标', detail: '告诉 AI 想完成什么' }, { label: '02', title: 'AI', detail: '理解目标，选择下一步' },
        { label: '03', title: '受控工具 / API / MCP', detail: '权限、范围、审计、确认' }, { label: '04', title: '业务系统与数据', detail: '订单、支付、库存、报表' },
        { label: '05', title: '真实结果', detail: '动作发生，结果可追踪' },
      ],
      punch: 'AI 正在从 Coding Assistant 变成 System Operator',
      safety: '生产环境里，权限范围、操作审计和确认机制必须受到控制',
    },
    {
      id: 'work-style', type: 'story', variant: 'work-style', theme: 'dark', eyebrow: '06 / WORK STYLE',
      title: '转 FDE 最难的，是改变工作方式',
      changes: [
        { from: '我会什么？', to: '问题需要什么？' }, { from: '我的部分完成了吗？', to: '最终结果出现了吗？' }, { from: '我必须先学会', to: '我先解决下一小步' },
      ],
      punch: '转 FDE 不是从“不会”变成“都会”，而是能够带着不会继续工作',
    },
    {
      id: 'closing', type: 'story', variant: 'closing', theme: 'dark', eyebrow: '07 / TAKEAWAY',
      title: '我不会，但这已经不是停止的理由',
      advice: ['不要等技术栈准备好', '不要太快说“这不是我的领域”', '对问题负责，而不只是对代码负责'],
      finalLines: ['AI 时代', '我不会', '但我可以试试'],
    },
  ],
}
