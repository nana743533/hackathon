import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { hackathonData } from "./data/hackathons"
import "./App.css"

const participationTypeConfig = {
  individual: { color: "#dc2626", bg: "#fee2e2", label: "個人参加" },
  "existing-team": { color: "#059669", bg: "#d1fae5", label: "既存チーム" },
  "ad-hoc-team": { color: "#2563eb", bg: "#dbeafe", label: "即席チーム" },
}

const tabs = [
  { key: "hackathons", label: "ハッカソン", count: hackathonData.hackathons.length },
  { key: "events", label: "イベント", count: hackathonData.events.length },
]

function ProductModal({ product, onClose }) {
  if (!product) return null

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-content"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.95 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <h2 className="modal-title">{product.title}</h2>
        <p className="modal-summary">{product.summary}</p>

        <div className="modal-divider" />

        <h3 className="modal-section-title">プロダクト概要</h3>
        <p className="modal-overview">{product.overview}</p>

        <div className="modal-divider" />

        {product.techStack.length > 0 && (
          <>
            <h3 className="modal-section-title">技術スタック</h3>
            <div className="modal-tech">
              {product.techStack.map((t) => (
                <span key={t} className="modal-tech-tag">
                  {t}
                </span>
              ))}
            </div>
            <div className="modal-divider" />
          </>
        )}

        <h3 className="modal-section-title">リンク</h3>
        <div className="modal-links">
          {product.demoVideo && (
            <a
              href={product.demoVideo}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-link"
            >
              ▶ デモ動画
            </a>
          )}
          {product.github && (
            <a
              href={product.github}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-link"
            >
              GitHub
            </a>
          )}
          {product.deploy && (
            <a
              href={product.deploy}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-link"
            >
              デプロイ先
            </a>
          )}
          {product.demoUrl && (
            <a
              href={product.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-link"
            >
              デモサイト
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

function App() {
  const [tab, setTab] = useState("hackathons")
  const [selectedProduct, setSelectedProduct] = useState(null)

  const sortedHackathons = [...hackathonData.hackathons].sort((a, b) => {
    const dateA = new Date(a.date.split(" - ")[0])
    const dateB = new Date(b.date.split(" - ")[0])
    return dateB - dateA
  })

  const sortedEvents = [...hackathonData.events].sort((a, b) => {
    const dateA = new Date(a.date.replace(/\./g, "-"))
    const dateB = new Date(b.date.replace(/\./g, "-"))
    return dateA - dateB
  })

  return (
    <div className="app">
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
          </div>

          <h1 className="title">
            <span className="title-line-1">Hackathon</span>
            <span className="title-line-2">Archive</span>
          </h1>

          <p className="subtitle">参加したハッカソン・イベントの詳細記録</p>

          {/* Tabs */}
          <div className="tabs">
            {tabs.map((t) => (
              <button
                key={t.key}
                className={`tab ${tab === t.key ? "active" : ""}`}
                onClick={() => setTab(t.key)}
              >
                {t.label}
                <span className="tab-count">{t.count}</span>
              </button>
            ))}
          </div>

        </motion.header>

        {/* Main Content */}
        <main className="main">
          <AnimatePresence mode="wait">
            {tab === "hackathons" ? (
              <motion.div
                key="hackathons"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Hackathons Table */}
                <div className="table-wrapper">
                  <table className="hackathon-table">
                    <thead>
                      <tr>
                        <th className="col-date">日付</th>
                        <th className="col-name">イベント名</th>
                        <th className="col-location">場所</th>
                        <th className="col-type">参加形式</th>
                        <th className="col-product">プロダクト</th>
                        <th className="col-result">成果・リンク</th>
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
                            {/* 日付 */}
                            <td className="col-date">
                              <div className="date-cell">
                                <span className="date-main">
                                  {hackathon.period || hackathon.date}
                                </span>
                              </div>
                            </td>

                            {/* イベント名 */}
                            <td className="col-name">
                              {hackathon.url ? (
                                <a
                                  href={hackathon.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="event-name-link"
                                >
                                  {hackathon.eventName}
                                </a>
                              ) : (
                                <span className="event-name-no-link">
                                  {hackathon.eventName}
                                </span>
                              )}
                            </td>

                            {/* 場所 */}
                            <td className="col-location">
                              <span className="location-badge">
                                {hackathon.location}
                              </span>
                            </td>

                            {/* 参加形式 */}
                            <td className="col-type">
                              <span
                                className="type-badge"
                                style={{
                                  backgroundColor:
                                    participationTypeConfig[hackathon.participationType].bg,
                                  color:
                                    participationTypeConfig[hackathon.participationType].color,
                                }}
                              >
                                {hackathon.participationTypeLabel}
                              </span>
                            </td>

                            {/* プロダクト */}
                            <td className="col-product">
                              <button
                                className="product-link"
                                onClick={() =>
                                  setSelectedProduct(hackathon.product)
                                }
                              >
                                <span className="product-link-name">
                                  {hackathon.product.title}
                                </span>
                                <span className="product-link-summary">
                                  {hackathon.product.summary}
                                </span>
                              </button>
                            </td>

                            {/* 成果・リンク */}
                            <td className="col-result">
                              <div className="result-cell">
                                {(hackathon.award || hackathon.result) && (
                                  <span className="result-award">
                                    🏆 {hackathon.result || hackathon.award}
                                  </span>
                                )}
                                {hackathon.zennLink && (
                                  <a
                                    href={hackathon.zennLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="result-link"
                                  >
                                    Zenn
                                  </a>
                                )}
                                {hackathon.blogUrl && (
                                  <a
                                    href={hackathon.blogUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="result-link"
                                  >
                                    📝 Blog
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
                          <span className="mobile-date">
                            {hackathon.date}
                          </span>
                          <span
                            className="mobile-type-badge"
                            style={{
                              backgroundColor:
                                participationTypeConfig[hackathon.participationType].bg,
                              color:
                                participationTypeConfig[hackathon.participationType].color,
                            }}
                          >
                            {hackathon.participationTypeLabel}
                          </span>
                        </div>

                        {hackathon.url ? (
                          <a
                            href={hackathon.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mobile-event-name-link"
                          >
                            {hackathon.eventName}
                          </a>
                        ) : (
                          <h3 className="mobile-event-name">
                            {hackathon.eventName}
                          </h3>
                        )}

                        <div className="mobile-location">
                          {hackathon.location}
                        </div>

                        {(hackathon.award || hackathon.result) && (
                          <div className="mobile-award">
                            <span className="award-icon">🏆</span>
                            {hackathon.result || hackathon.award}
                          </div>
                        )}

                        <button
                          className="mobile-product-button"
                          onClick={() => setSelectedProduct(hackathon.product)}
                        >
                          <span className="mobile-product-name">
                            {hackathon.product.title}
                          </span>
                          <p className="mobile-product-desc">
                            {hackathon.product.summary}
                          </p>
                        </button>

                        <div className="mobile-links">
                          {hackathon.zennLink && (
                            <a
                              href={hackathon.zennLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mobile-link"
                            >
                              Zenn
                            </a>
                          )}
                          {hackathon.blogUrl && (
                            <a
                              href={hackathon.blogUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mobile-link"
                            >
                              📝 Blog
                            </a>
                          )}
                          {hackathon.url && (
                            <a
                              href={hackathon.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mobile-link"
                            >
                              🔗 イベント
                            </a>
                          )}
                          {hackathon.product.github && (
                            <a
                              href={hackathon.product.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mobile-link"
                            >
                              GitHub
                            </a>
                          )}
                          {hackathon.product.deploy && (
                            <a
                              href={hackathon.product.deploy}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mobile-link"
                            >
                              デプロイ先
                            </a>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="events"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {sortedEvents.length === 0 ? (
                  <div className="empty-state">
                    <p className="empty-text">
                      参加予定のイベントはありません
                    </p>
                  </div>
                ) : (
                  <>
                    {/* Events Table */}
                    <div className="table-wrapper">
                      <table className="hackathon-table">
                        <thead>
                          <tr>
                            <th className="col-date">日付</th>
                            <th className="col-name">イベント名</th>
                            <th className="col-location">場所</th>
                            <th className="col-links">リンク</th>
                          </tr>
                        </thead>
                        <tbody>
                          <AnimatePresence>
                            {sortedEvents.map((event, index) => (
                              <motion.tr
                                key={event.eventName}
                                className="table-row"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{
                                  duration: 0.3,
                                  delay: index * 0.05,
                                }}
                              >
                                <td className="col-date">
                                  <div className="date-cell">
                                    <span className="date-main">
                                      {event.date}
                                    </span>
                                  </div>
                                </td>

                                <td className="col-name">
                                  {event.url ? (
                                    <a
                                      href={event.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="event-name-link"
                                    >
                                      {event.eventName}
                                    </a>
                                  ) : (
                                    <span className="event-name-muted">
                                      {event.eventName}
                                    </span>
                                  )}
                                </td>

                                <td className="col-location">
                                  <span className="location-badge">
                                    {event.location}
                                  </span>
                                </td>

                                <td className="col-links">
                                  <div className="links-cell">
                                    {(event.link || event.url) && (
                                      <a
                                        href={event.link || event.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="link-icon-button"
                                        title="詳細"
                                      >
                                        🔗
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
                        {sortedEvents.map((event, index) => (
                          <motion.div
                            key={event.eventName}
                            className="mobile-card"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{
                              duration: 0.3,
                              delay: index * 0.05,
                            }}
                          >
                            <div className="mobile-card-header">
                              <span className="mobile-date">
                                {event.date}
                              </span>
                            </div>

                            <h3 className="mobile-event-name">
                              {event.eventName}
                            </h3>

                            <div className="mobile-location">
                              {event.location}
                            </div>

                            {(event.link || event.url) && (
                              <div className="mobile-links">
                                <a
                                  href={event.link || event.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="mobile-link"
                                >
                                  🔗 詳細
                                </a>
                              </div>
                            )}
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
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

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
