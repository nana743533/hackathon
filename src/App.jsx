import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'

const hackathons = [
  {
    id: 1,
    name: 'VoiceOS Hackathon 2026',
    date: '2026.04.03 - 2026.04.06',
    url: 'https://voiceos-hackathon.jp/',
    award: null,
    participationType: 'ad-hoc-team',
    participationTypeLabel: '即席チーム',
    blogUrl: null,
    imageUrl: null,
    product: {
      name: 'Voice Todo App',
      description: '音声対話型タスク管理アプリケーション。自然言語でのタスク追加、完了、確認が可能。',
      url: 'https://github.com/nana743533/voiceos-hackathon-2026-04-03',
      demoUrl: null,
      tech: ['React', 'VoiceOS SDK', 'TypeScript', 'Vite']
    }
  },
  {
    id: 2,
    name: 'Progate Hackathon',
    date: '2026.04.18 - 2026.04.20',
    url: 'https://progate-hackathon.com/',
    award: null,
    participationType: 'existing-team',
    participationTypeLabel: '既存チーム',
    blogUrl: null,
    imageUrl: null,
    product: {
      name: 'Penguin Tracking App',
      description: 'ペンギンの行動追跡・可視化アプリ。地図上でペンギンの移動ルートをリアルタイム表示。',
      url: 'https://progate-20264-penguin.vercel.app/',
      demoUrl: 'https://progate-20264-penguin.vercel.app/',
      tech: ['Next.js', 'Supabase', 'D3.js', 'Tailwind CSS']
    }
  },
  {
    id: 3,
    name: 'CyberAgent AI Hackathon',
    date: '2026.02.14 - 2026.02.16',
    url: 'https://cyberagent-hackathon.com/',
    award: null,
    participationType: 'ad-hoc-team',
    participationTypeLabel: '即席チーム',
    blogUrl: null,
    imageUrl: null,
    product: {
      name: 'AI Schedule Assistant',
      description: 'AIを活用したスケジュール管理・最適化ツール。カレンダー同期と自動最適化機能。',
      url: 'https://github.com/nana743533/ai-schedule-assistant',
      demoUrl: null,
      tech: ['Python', 'OpenAI API', 'FastAPI', 'PostgreSQL']
    }
  },
  {
    id: 4,
    name: 'Othello AI Contest',
    date: '2025.10.31',
    url: 'https://othello-ai-contest.com/',
    award: '優勝',
    participationType: 'individual',
    participationTypeLabel: '個人参加',
    blogUrl: null,
    imageUrl: null,
    product: {
      name: 'Othello AI Player',
      description: 'Monte Carlo Tree Searchを用いたオセロAI。高速な局面評価と探索アルゴリズム。',
      url: 'https://github.com/nana743533/Othello_GUI',
      demoUrl: null,
      tech: ['Python', 'NumPy', 'MCTS', 'Pygame']
    }
  }
]

const participationTypeConfig = {
  individual: { color: '#dc2626', bg: '#fee2e2', label: '個人' },
  'existing-team': { color: '#059669', bg: '#d1fae5', label: '既存チーム' },
  'ad-hoc-team': { color: '#2563eb', bg: '#dbeafe', label: '即席チーム' }
}

function App() {
  const [filter, setFilter] = useState('all')
  const [sortOrder, setSortOrder] = useState('desc')

  const filteredHackathons = hackathons.filter(h => {
    if (filter === 'all') return true
    return h.participationType === filter
  })

  const sortedHackathons = [...filteredHackathons].sort((a, b) => {
    const dateA = new Date(a.date.split(' - ')[0])
    const dateB = new Date(b.date.split(' - ')[0])
    return sortOrder === 'desc' ? dateB - dateA : dateA - dateB
  })

  return (
    <div className="app">
      {/* Decorative Background */}
      <div className="accent-circle accent-circle-1" />
      <div className="accent-circle accent-circle-2" />
      <div className="grid-pattern" />

      <div className="container">
        {/* Header */}
        <motion.header
          className="header"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="header-top">
            <div className="header-meta">
              <span className="meta-label">PORTFOLIO</span>
              <span className="meta-divider">/</span>
              <span className="meta-value">HACKATHON DATABASE</span>
            </div>
            <div className="header-count">
              <span className="count-number">{hackathons.length}</span>
              <span className="count-label">RECORDS</span>
            </div>
          </div>

          <h1 className="title">
            <span className="title-line-1">Hackathon</span>
            <span className="title-line-2">Archive</span>
          </h1>

          <p className="subtitle">
            参加したハッカソン・イベントの詳細記録
          </p>

          {/* Filters */}
          <div className="filters">
            <button
              className={`filter-button ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              すべて
            </button>
            <button
              className={`filter-button ${filter === 'individual' ? 'active' : ''}`}
              onClick={() => setFilter('individual')}
            >
              個人参加
            </button>
            <button
              className={`filter-button ${filter === 'existing-team' ? 'active' : ''}`}
              onClick={() => setFilter('existing-team')}
            >
              既存チーム
            </button>
            <button
              className={`filter-button ${filter === 'ad-hoc-team' ? 'active' : ''}`}
              onClick={() => setFilter('ad-hoc-team')}
            >
              即席チーム
            </button>
          </div>
        </motion.header>

        {/* Table Section */}
        <main className="main">
          <div className="table-wrapper">
            <table className="hackathon-table">
              <thead>
                <tr>
                  <th className="col-date">日付</th>
                  <th className="col-name">イベント名</th>
                  <th className="col-type">参加形式</th>
                  <th className="col-product">プロダクト</th>
                  <th className="col-tech">技術スタック</th>
                  <th className="col-links">リンク</th>
                </tr>
              </thead>
              <tbody>
                <AnimatePresence>
                  {sortedHackathons.map((hackathon, index) => (
                    <motion.tr
                      key={hackathon.id}
                      className="table-row"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      {/* Date */}
                      <td className="col-date">
                        <div className="date-cell">
                          <span className="date-main">{hackathon.date.split(' - ')[0]}</span>
                          {hackathon.date.includes(' - ') && (
                            <span className="date-end">{hackathon.date.split(' - ')[1]}</span>
                          )}
                        </div>
                      </td>

                      {/* Name & Award */}
                      <td className="col-name">
                        <div className="name-cell">
                          <span className="event-name">{hackathon.name}</span>
                          {hackathon.award && (
                            <span className="award-badge-inline">
                              <span className="award-icon">🏆</span>
                              {hackathon.award}
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Participation Type */}
                      <td className="col-type">
                        <span
                          className="type-badge"
                          style={{
                            backgroundColor: participationTypeConfig[hackathon.participationType].bg,
                            color: participationTypeConfig[hackathon.participationType].color
                          }}
                        >
                          {hackathon.participationTypeLabel}
                        </span>
                      </td>

                      {/* Product */}
                      <td className="col-product">
                        <div className="product-cell">
                          <span className="product-name">{hackathon.product.name}</span>
                          <span className="product-description">{hackathon.product.description}</span>
                        </div>
                      </td>

                      {/* Tech Stack */}
                      <td className="col-tech">
                        <div className="tech-cell">
                          {hackathon.product.tech.map(t => (
                            <span key={t} className="tech-tag">{t}</span>
                          ))}
                        </div>
                      </td>

                      {/* Links */}
                      <td className="col-links">
                        <div className="links-cell">
                          {hackathon.url && (
                            <a
                              href={hackathon.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="link-icon-button"
                              title="イベントページ"
                            >
                              🔗
                            </a>
                          )}
                          {hackathon.product.url && (
                            <a
                              href={hackathon.product.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="link-icon-button"
                              title="プロダクト/GitHub"
                            >
                              💻
                            </a>
                          )}
                          {hackathon.product.demoUrl && (
                            <a
                              href={hackathon.product.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="link-icon-button"
                              title="デモ"
                            >
                              🎬
                            </a>
                          )}
                          {hackathon.blogUrl && (
                            <a
                              href={hackathon.blogUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="link-icon-button"
                              title="ブログ"
                            >
                              📝
                            </a>
                          )}
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="mobile-cards">
            <AnimatePresence>
              {sortedHackathons.map((hackathon, index) => (
                <motion.div
                  key={hackathon.id}
                  className="mobile-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <div className="mobile-card-header">
                    <span className="mobile-date">{hackathon.date.split(' - ')[0]}</span>
                    <span
                      className="mobile-type-badge"
                      style={{
                        backgroundColor: participationTypeConfig[hackathon.participationType].bg,
                        color: participationTypeConfig[hackathon.participationType].color
                      }}
                    >
                      {hackathon.participationTypeLabel}
                    </span>
                  </div>

                  <h3 className="mobile-event-name">{hackathon.name}</h3>

                  {hackathon.award && (
                    <div className="mobile-award">
                      <span className="award-icon">🏆</span>
                      {hackathon.award}
                    </div>
                  )}

                  <div className="mobile-product">
                    <span className="mobile-product-name">{hackathon.product.name}</span>
                    <p className="mobile-product-desc">{hackathon.product.description}</p>
                  </div>

                  <div className="mobile-tech">
                    {hackathon.product.tech.map(t => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>

                  <div className="mobile-links">
                    {hackathon.url && (
                      <a href={hackathon.url} target="_blank" rel="noopener noreferrer" className="mobile-link">
                        🔗 イベント
                      </a>
                    )}
                    {hackathon.product.url && (
                      <a href={hackathon.product.url} target="_blank" rel="noopener noreferrer" className="mobile-link">
                        💻 プロダクト
                      </a>
                    )}
                    {hackathon.product.demoUrl && (
                      <a href={hackathon.product.demoUrl} target="_blank" rel="noopener noreferrer" className="mobile-link">
                        🎬 デモ
                      </a>
                    )}
                    {hackathon.blogUrl && (
                      <a href={hackathon.blogUrl} target="_blank" rel="noopener noreferrer" className="mobile-link">
                        📝 ブログ
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </main>

        {/* Footer */}
        <motion.footer
          className="footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="footer-content">
            <a
              href="https://github.com/nana743533"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              <span className="github-text">@nana743533</span>
              <span className="github-arrow">→</span>
            </a>
            <div className="footer-divider" />
            <p className="footer-text">© 2025-2026</p>
          </div>
        </motion.footer>
      </div>
    </div>
  )
}

export default App
