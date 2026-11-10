export const deck = {
  theme: 'apple',
  title: '一件事，八个端',
  subtitle: 'Vibe coding 之后，我把同一件事在八个地方做了一遍',
  speaker: { name: 'SayAll 内部分享', role: 'Vibe coding 与跨端', account: '' },
  slides: [
    {
      id: 'cover', type: 'story', variant: 'cover', theme: 'dark', eyebrow: '01',
      titleLines: ['一件事', '八个端'],
      subtitle: 'Vibe coding 之后，我把同一件事在八个地方做了一遍',
    },
    {
      id: 'why-now', type: 'story', variant: 'problem-view', theme: 'dark', eyebrow: '02 / 为什么是现在',
      title: '写代码变成了写文字',
      before: ['手写代码', '一天几百行', '想法排在脑子里', '写不完就忘了', '键盘是唯一入口'],
      after: ['先描述清楚', '交给 AI 生成', '我审查、修改', '输入量翻几倍', '键盘跟不上了'],
      punch: '瓶颈从「会不会写」变成「说得多快、说得多准」',
    },
    {
      id: 'eight-ends', type: 'story', variant: 'ends', theme: 'dark', eyebrow: '03 / 交付面',
      title: '同一件事，铺到八个端',
      items: [
        { label: '01', title: 'Mac App', note: 'SwiftUI，常驻进程' },
        { label: '02', title: 'Windows App', note: 'Rust，另一套驱动' },
        { label: '03', title: 'iOS App', note: '沙盒，无后台常驻' },
        { label: '04', title: 'Watch App', note: '寄生在 iOS 包里' },
        { label: '05', title: 'Web App', note: '浏览器，无系统权限' },
        { label: '06', title: '小程序', note: '微信容器白名单' },
        { label: '07', title: '后端', note: '账号、权益、幂等' },
        { label: '08', title: '官网 ×2', note: '两套静态部署' },
      ],
      punch: 'AI 压短了「从零到能跑」，没把端变少',
    },
    {
      id: 'desktop', type: 'story', variant: 'steps', theme: 'dark', eyebrow: '04 / 桌面',
      title: '桌面两端，AI 帮得多，也帮不上',
      items: [
        { label: 'Mac', title: '重复的代码它写得快', note: '状态、设置页、列表这些同构代码，生成得比我手写快，也比我整齐。' },
        { label: 'Windows', title: '换语言，它能翻译结构', note: '用 Rust 重写时，AI 把相同的分层搬过去；驱动和输入法还是得自己啃。' },
        { label: '共同', title: '「用两天才坏」它看不出来', note: '两个端都常驻，失败方式是几天后变慢。这类问题只能靠长时间运行发现。' },
      ],
      note: '真正花时间的不是写，是验证。',
      punch: 'AI 写代码快，验证还得一台一台机器来',
    },
    {
      id: 'mobile', type: 'story', variant: 'steps', theme: 'dark', eyebrow: '05 / 移动',
      title: '手机上，同一个功能要换实现',
      items: [
        { label: '运行模型', title: '没有常驻后台', note: '锁屏、切后台就停。桌面上那种长期持有设备连接的做法，在这里不成立。' },
        { label: '权限与沙盒', title: '装不了系统级设备', note: '也读不到别的 App 的输入框。只能换成系统给的那条通道，逻辑得重写。' },
        { label: '链路与带宽', title: '只有局域网，音频只有一条', note: 'Watch 的音频还要经 iPhone 中转。要背压，要重连，要处理抢不到链路。' },
      ],
      note: '这些是平台给的边界，AI 不会替你绕过去。',
      punch: '同一段逻辑，换个平台就得换个实现',
    },
    {
      id: 'web', type: 'story', variant: 'steps', theme: 'dark', eyebrow: '06 / 轻端',
      title: '三套前端，三种运行环境',
      items: [
        { label: 'Web App', title: '浏览器什么都不给', note: '没有系统权限，连接和录音都要用户手势触发；后台标签页随时被降频。' },
        { label: '小程序', title: '能力是白名单', note: '能调什么由容器决定，网页上理所当然的接口，这里可能没有。' },
        { label: '官网 ×2', title: '静态站，两套部署', note: '一套 Cloudflare，一套阿里云；域名、证书、构建产物各管一套。' },
      ],
      note: '页面生成得再快，能不能跑取决于容器给不给你。',
      punch: '能生成，不等于能运行',
    },
    {
      id: 'backend', type: 'story', variant: 'steps', theme: 'dark', eyebrow: '07 / 后端',
      title: '后端：不熟，就先让它自己喊',
      items: [
        { label: '读放大', title: '两条查询吃掉 99% 读取', note: '查有效映射、更新过期映射，单次 4,429 行和 900 行。原因是可空条件用不上索引。' },
        { label: '改法', title: '拆成三种确定条件', note: '只按安装、只按账号、两者都有，各走一条唯一索引，单次最多 1 行。' },
        { label: '报警', title: '钱扣了才知道', note: 'Cloudflare 那次是官网的报警邮件先响的。后端自己没有报警，就只剩账单和用户来告诉你。' },
      ],
      note: '行数是本地合成数据的读数；线上降幅要发布后同窗口再看。',
      punch: '看不见的地方，最后都会以账单找你',
    },
    {
      id: 'closing', type: 'story', variant: 'closing', theme: 'dark', eyebrow: '08',
      title: 'Vibe coding 之后，工作变成三件事',
      advice: [
        '描述：把问题和边界说清楚，这一步决定产出上限',
        '审查：它写的每一处状态和异常，我要能讲明白',
        '验证：真机、长时间运行、弱网，只能自己来',
      ],
      finalLines: ['描述', '审查', '验证'],
    },
  ],
}
