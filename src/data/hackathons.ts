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
  result?: string
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
      id: "voiceos-2026",
      date: "2026.04.03",
      period: "2026.04.03 ~ 2026.04.06",
      eventName: "VoiceOS Hackathon 2026",
      location: "オンライン",
      url: "https://voiceos-hackathon.jp/",
      participationType: "ad-hoc-team",
      participationTypeLabel: "即席チーム",
      product: {
        title: "Voice Todo App",
        summary: "音声対話型タスク管理アプリケーション。自然言語でのタスク追加、完了、確認が可能。",
        overview:
          "音声認識APIを活用し、話すだけでタスクを追加・管理できるアプリケーション。ハンズフリーでのタスク管理を実現し、調理中や運転中など手が離せない状況でもシームレスに利用可能。",
        github: "https://github.com/nana743533/voiceos-hackathon-2026-04-03",
        techStack: ["React", "VoiceOS SDK", "TypeScript", "Vite"],
      },
    },
    {
      id: "progate-2026",
      date: "2026.04.18",
      period: "2026.04.18 ~ 2026.04.20",
      eventName: "Progate Hackathon",
      location: "オンライン",
      url: "https://progate-hackathon.com/",
      participationType: "existing-team",
      participationTypeLabel: "既存チーム",
      product: {
        title: "Penguin Tracking App",
        summary: "ペンギンの行動追跡・可視化アプリ。地図上でペンギンの移動ルートをリアルタイム表示。",
        overview:
          "実際のペンギンの追跡データを可視化するWebアプリケーション。Supabaseのリアルタイム機能を活用し、地図上でペンギンの位置情報をライブ更新。D3.jsによるアニメーション表現にもこだわった。",
        github: "https://github.com/nana743533/progate-penguin",
        demoUrl: "https://progate-20264-penguin.vercel.app/",
        deploy: "https://progate-20264-penguin.vercel.app/",
        techStack: ["Next.js", "Supabase", "D3.js", "Tailwind CSS"],
      },
    },
    {
      id: "cyberagent-ai-2026",
      date: "2026.02.14",
      period: "2026.02.14 ~ 2026.02.16",
      eventName: "CyberAgent AI Hackathon",
      location: "オンライン",
      url: "https://cyberagent-hackathon.com/",
      participationType: "ad-hoc-team",
      participationTypeLabel: "即席チーム",
      product: {
        title: "AI Schedule Assistant",
        summary: "AIを活用したスケジュール管理・最適化ツール。カレンダー同期と自動最適化機能。",
        overview:
          "OpenAI APIを活用し、自然言語でのスケジュール入力を可能にしたアシスタントツール。複数のカレンダーを同期し、AIが最適なスケジュールを提案する。",
        github: "https://github.com/nana743533/ai-schedule-assistant",
        techStack: ["Python", "OpenAI API", "FastAPI", "PostgreSQL"],
      },
    },
    {
      id: "othello-ai-2025",
      date: "2025.10.31",
      eventName: "Othello AI Contest",
      location: "オンライン",
      url: "https://othello-ai-contest.com/",
      participationType: "individual",
      participationTypeLabel: "個人参加",
      result: "優勝",
      product: {
        title: "Othello AI Player",
        summary: "Monte Carlo Tree Searchを用いたオセロAI。高速な局面評価と探索アルゴリズム。",
        overview:
          "MCTS（Monte Carlo Tree Search）アルゴリズムを実装したオセロAI。高速な局面評価と効率的な探索により、大会で優勝を達成。GUIアプリケーションとしても動作。",
        github: "https://github.com/nana743533/Othello_GUI",
        techStack: ["Python", "NumPy", "MCTS", "Pygame"],
      },
    },
    {
      id: "geek-camp-2026-vol2",
      date: "2026.04.29",
      period: "2026.04.13 ~ 2026.04.29",
      eventName: "【技育CAMP2026】ハッカソン Vol.2",
      location: "オンライン",
      participationType: "ad-hoc-team",
      participationTypeLabel: "即席チーム",
      result: "🥈準優勝",
      zennLink: "https://zenn.dev/nana743533/articles/144b92a19d7c39",
      product: {
        title: "（プロダクト名）",
        summary: "ここに50文字程度の説明を記述します。どのような課題を解決するアプリか簡潔に。",
        overview: "プロダクトの詳しい概要。開発のきっかけなど。",
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
