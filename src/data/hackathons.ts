export type HackathonProduct = {
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
  period: string
  eventName: string
  location: string
  participationType: "即席チーム" | "個人" | "既存チーム"
  product: HackathonProduct
  result?: string
  zennLink?: string
}

export type UpcomingEvent = {
  date: string
  eventName: string
  location: string
  link?: string
}

export type HackathonData = {
  hackathons: Hackathon[]
  events: UpcomingEvent[]
}

export const hackathonData: HackathonData = {
  hackathons: [
    {
      id: "geek-camp-2026-vol2",
      date: "2026.04.29",
      period: "2026.04.13~2026.04.29",
      eventName: "【技育CAMP2026】ハッカソン Vol.2",
      location: "オンライン",
      participationType: "即席チーム",
      product: {
        title: "プロダクト名",
        summary: "ここに50文字程度の説明を記述します。どのような課題を解決するアプリか簡潔に。",
        overview: "プロダクトの詳しい概要。開発のきっかけなど。",
        techStack: ["React Native", "Ruby on Rails", "AWS", "TypeScript"],
      },
      result: "🥈準優勝",
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
