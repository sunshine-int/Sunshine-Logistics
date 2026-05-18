import React, { useState } from 'react'

export default function App() {
  const [activePage, setActivePage] = useState('home')

  const navItems = [
    { id: 'home', label: '首頁' },
    { id: 'about', label: '關於我們' },
    { id: 'services', label: '服務項目' },
    { id: 'process', label: '物流流程' },
    { id: 'faq', label: '常見問題' },
    { id: 'contact', label: '聯絡我們' },
  ]

  return (
    <div className="app">
      <header className="header">
        <div className="container nav-wrapper">
          <div className="brand">
            <img src="/logo.png" className="logo" alt="logo" />

            <div>
              <h1>尚順國際物流</h1>
              <p>SHANG SHUN INTERNATIONAL LOGISTICS</p>
            </div>
          </div>

          <nav className="nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={activePage === item.id ? 'active' : ''}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {activePage === 'home' && (
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <h2>
                全球物流運輸服務
                <span>Global Freight Solutions</span>
              </h2>

              <p>
                尚順國際物流專注於全球貨運與跨境運輸，
                提供穩定、安全與高效率的物流整合服務。
              </p>

              <div className="btn-group">
                <a className="btn" href="#">
                  立即聯絡
                </a>

                <a
                  className="line-btn"
                  href="https://lin.ee/Dlq7FY2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LINE 線上客服
                </a>
              </div>
            </div>

            <div>
              <img
                src="/hero-bg.png"
                className="hero-image"
                alt="hero"
              />
            </div>
          </div>
        </section>
      )}

      {activePage === 'about' && (
        <section className="page-section white">
          <div className="container">
            <h2 className="page-title">關於我們</h2>

            <p className="page-text">
              尚順國際物流提供全球海運、空運、跨境配送與報關整合服務。
            </p>
          </div>
        </section>
      )}

      {activePage === 'services' && (
        <section className="page-section dark">
          <div className="container">
            <h2 className="page-title light">服務項目</h2>
          </div>
        </section>
      )}

      {activePage === 'process' && (
        <section className="page-section white">
          <div className="container">
            <h2 className="page-title">物流流程</h2>

            <img
              src="/global-logistics.png"
              className="process-image"
              alt="process"
            />
          </div>
        </section>
      )}

      {activePage === 'faq' && (
        <section className="page-section dark">
          <div className="container">
            <h2 className="page-title light">常見問題</h2>
          </div>
        </section>
      )}

      {activePage === 'contact' && (
        <section className="page-section contact-section">
          <div className="container">
            <h2 className="page-title light">聯絡我們</h2>

            <div className="contact-box">
              <p>Email：sunshine0422520071@gmail.com</p>

              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScDq36dwppmix3Y2QOqR7JdtzAE9u4e-cvhiD3Nkg2LvkGzsw/viewform?embedded=true"
                width="100%"
                height="600"
                title="google-form"
              ></iframe>
            </div>
          </div>
        </section>
      )}

      <footer className="footer">
        © 2026 SHANG SHUN INTERNATIONAL LOGISTICS
      </footer>
    </div>
  )
}
