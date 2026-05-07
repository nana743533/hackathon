export type Product = {
  title: string
  summary: string
  overview: string
  demoVideo?: string
  github?: string
  deploy?: string
  techStack: string[]
}

export type Hackathon = {
  id: string
  date: string
  period?: string
  eventName: string
  location: string
  url?: string
  participationType: "individual" | "existing-team" | "ad-hoc-team"
  participationTypeLabel: string
  product: Product
  result?: string[]
  slideUrl?: string
  zennLink?: string
  blogUrl?: string
  imageUrl?: string
}

export type UpcomingEvent = {
  date: string
  eventName: string
  location: string
  url?: string
  link?: string
}

export type HackathonData = {
  hackathons: Hackathon[]
  events: UpcomingEvent[]
}

export const hackathonData: HackathonData = {
  hackathons: [
    {
      id: "rss-2025-beyond",
      date: "2025.09.06",
      period: "2025.09.06 ~ 2025.09.07",
      eventName: "RSS Hackathon 2025 Beyond",
      location: "オンライン",
      url: "https://race-ss.co.jp/hackathon/2025/",
      participationType: "existing-team",
      participationTypeLabel: "既存チーム",
      result: ["🥇優勝", "オーディエンス賞", "プレゼンテーション賞"],
      product: {
        title: "マナべディア！",
        summary: "みんなの学びを促進する大学の過去問共有システム",
        overview:
          "大学生が過去問を共有・閲覧できるプラットフォーム。学びの格差をなくし、誰もが平等に試験対策を行える環境を提供する。",
        techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
      },
    },
    {
      id: "howtv-intern-2025",
      date: "2025.11.08",
      period: "2025.11.08 ~ 2025.11.16",
      eventName: "HowTelevision インターンハッカソン",
      location: "howtelevision オフィス",
      participationType: "ad-hoc-team",
      participationTypeLabel: "即席チーム",
      product: {
        title: "エンジニア志望大学生就職支援サービス",
        summary: "エンジニア志望の大学生の就職活動を支援するサービス",
        overview:
          "エンジニアを目指す大学生向けの就職支援サービス。インターンシップや就職活動に役立つ情報・機能を提供する。",
        techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
      },
    },
    {
      id: "geek-camp-2025-vol19",
      date: "2026.01.23",
      period: "2026.01.23 ~ 2026.02.08",
      eventName: "【技育CAMP2025】ハッカソン Vol.19",
      location: "オンライン",
      url: "https://talent.supporterz.jp/events/d3f3860a-f64a-4bd9-8c4f-4f4ad2910b06",
      participationType: "individual",
      participationTypeLabel: "個人参加",
      slideUrl: "https://speakerdeck.com/nanaseyuma/okutodui-zhan",
      product: {
        title: "オクト対戦",
        summary: "オセロの派生ボードゲーム「オクト」をリアルタイムで対戦できるスマホゲーム",
        overview:
          "オセロの派生ボードゲームである「オクト」をリアルタイムで対戦することができるスマートフォン向けゲームアプリ。",
        github: "https://github.com/nana743533/Octo_Reversi",
        techStack: ["React Native", "TypeScript", "Firebase"],
      },
    },
    {
      id: "ai-hackathon-origin-2026",
      date: "2026.03.24",
      period: "2026.03.24 ~ 2026.03.26",
      eventName: "AI Hackathon Origin 2026",
      location: "QUINTBRIDGE（NTT西日本）",
      url: "https://www.craftstadium.com/hackathon/hackathon-origin-2026",
      participationType: "ad-hoc-team",
      participationTypeLabel: "即席チーム",
      result: ["🥈準優勝", "Zeronity賞", "エクサウィザーズ賞", "テックオーシャン賞"],
      product: {
        title: "UniAI",
        summary:
          "教授が資料をアップロードするだけで、学生はゼロ準備で講義内容に基づいたAI相談ができる学習支援プラットフォーム",
        overview:
          "教授が資料をアップロードするだけで、学生はゼロ準備で講義内容に基づいたAI相談ができる。大学の授業に完全最適化された学習支援プラットフォーム。",
        github: "https://github.com/nana743533/uni-ai-learning",
        deploy: "https://team-i-uni-ai.manus.space/",
        techStack: ["React", "OpenAI API", "TypeScript", "Vite"],
      },
    },
    {
      id: "voiceos-tokyo-2026",
      date: "2026.04.03",
      eventName: "VoiceOS Hackathon Tokyo",
      location: "六本木 メルカリオフィス",
      url: "https://base.timewell.jp/events/cmne7v7zv003jzgvvm23n5lry",
      participationType: "individual",
      participationTypeLabel: "個人参加",
      product: {
        title: "Freee API VoiceOS カスタム拡張",
        summary: "VoiceOSでfreee会計APIを呼び出し、経営判断に必要な数字を即座にレポート",
        overview:
          "VoiceOSでfreee会計APIを呼び出し、損益概況・口座残高等の経営判断に必要な数字を即座にレポートするカスタム拡張。ハンズフリーで経営状況を把握可能。",
        github: "https://github.com/nana743533/voiceos-hackathon-2026-04-03",
        techStack: ["VoiceOS SDK", "freee API", "TypeScript", "React"],
      },
    },
    {
      id: "try-swift-2026",
      date: "2026.04.11",
      eventName: "try! Swift ハッカソン 2026 for Students",
      location: "六本木 メルカリオフィス",
      url: "https://luma.com/z7439g5o",
      participationType: "ad-hoc-team",
      participationTypeLabel: "即席チーム",
      result: ["🏆Mixi賞"],
      product: {
        title: "Manga Pose AR",
        summary: "カメラに向かってポーズをとるだけで漫画のワンシーンのような演出をAR表示するiOSアプリ",
        overview:
          "カメラに向かってユーザーがポーズをとるだけで、漫画のワンシーンのような劇的セリフ/ナレーションを自動生成してAR空間に3D演出として表示するiOSアプリ。",
        github: "https://github.com/kaaaaaaaaya/Mangaru",
        techStack: ["Swift", "ARKit", "Vision"],
      },
    },
    {
      id: "progate-aws-2026",
      date: "2026.04.18",
      period: "2026.04.18 ~ 2026.04.19",
      eventName: "Progateハッカソン powered by AWS",
      location: "AWS Startup Loft Tokyo",
      url: "https://progate.connpass.com/event/386402/",
      participationType: "ad-hoc-team",
      participationTypeLabel: "即席チーム",
      result: ["OB賞"],
      product: {
        title: "ファースト肯定ペンギン",
        summary: "最初に拍手した観客を検知してARでペンギン化し、肯定アクションをデータ化・分析するシステム",
        overview:
          "最初に拍手をした観客（ファーストペンギン）を検知してARでペンギン化し、その肯定アクションをAWSでデータ化・分析するシステム。",
        github: "https://github.com/Tanakee/progate-20264-penguin",
        techStack: ["Next.js", "AWS", "AR", "TypeScript"],
      },
    },
    {
      id: "geek-camp-2026-vol2",
      date: "2026.04.29",
      period: "2026.04.13 ~ 2026.04.29",
      eventName: "【技育CAMP2026】ハッカソン Vol.2",
      location: "オンライン",
      url: "https://talent.supporterz.jp/events/82c4c266-cde5-4b34-90fe-7c82d83a97dc/",
      participationType: "ad-hoc-team",
      participationTypeLabel: "即席チーム",
      slideUrl: "https://speakerdeck.com/nanaseyuma/needea",
      zennLink: "https://zenn.dev/nana743533/articles/144b92a19d7c39",
      product: {
        title: "Needea",
        summary:
          "日常で感じるみんなの「こうなったらいいな」が集まる場所。相互にひらめきを育むプラットフォーム",
        overview:
          "日常で感じるみんなの「こうなったらいいな」が集まる場所。相互にひらめきを育んで、漠然とした思いを確かな形にするプラットフォーム。",
        github: "https://github.com/geek-hackathon-2604/Needea",
        techStack: ["React Native", "Ruby on Rails", "AWS", "TypeScript"],
      },
    },
  ],
  events: [
    {
      date: "2026.05.31",
      eventName: "TORYUMON KYUSHU 2026",
      location: "福岡",
    },
  ],
}
