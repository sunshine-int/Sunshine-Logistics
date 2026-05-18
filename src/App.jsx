import React, { useState } from 'react'

export default function App() {
  const [activePage, setActivePage] = useState('home')

  const navItems = [
    { id: 'home', label: '首頁' },
    { id: 'about', label: '關於我們' },
    { id: 'services', label: '服務項目' },
    { id: 'process', label: '物流流程' },
    { id: 'faq', label: '常見問題' },
    { id: 'contact', liabel: '聯絡我們' },
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
              尚順國際物流提供全球海運、空運、跨境配送與報關整合服務，
              協助企業快速建立穩定的國際物流系統。
            </p>

            <div className="card-grid">
              <div className="card">
                <h3>風險控管</h3>
                <p>完整物流規劃與文件管理。</p>
              </div>

              <div className="card">
                <h3>全球配送</h3>
                <p>整合海運與空運配送服務。</p>
              </div>

              <div className="card">
                <h3>專業客服</h3>
                <p>提供即時貨況查詢與支援。</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {activePage === 'services' && (
        <section className="page-section dark">
          <div className="container">
            <h2 className="page-title light">服務項目</h2>

            <div className="card-grid">
              <div className="card dark-card">
                <h3>國際海運</h3>
              </div>

              <div className="card dark-card">
                <h3>國際空運</h3>
              </div>

              <div className="card dark-card">
                <h3>跨境物流</h3>
              </div>

            <img
              src="/global-logistics.png"
              className="process-image"
              alt="process"
            />

            <div className="step-grid">
              <div className="step">1. 詢價</div>
              <div className="step">2. 確認資料</div>
              <div className="step">3. 安排出貨</div>
              <div className="step">4. 全球配送</div>
            </div>
          </div>
        </section>
      )}

      {activePage === 'faq' && (
        <section className="page-section dark">
          <div className="container">
            <h2 className="page-title light">常見問題</h2>

            <div className="faq-box">
              <h3>運費如何計算？</h3>
              <p>依照材積、重量與目的地計算。</p>
            </div>

            <div className="faq-box">
              <h3>是否提供報關？</h3>
              <p>提供完整進出口報關服務。</p>
            </div>
          </div>
        </section>
      )}

      {activePage === 'contact' && (
        <section className="page-section contact-section">
          <div className="container">
            <h2 className="page-title light">聯絡我們</h2>

            <div className="contact-box">
              <p>Email：sunshine0422520071@gmail.com</p>

              <a
                href="https://www.facebook.com/SunshineTXGTW/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn full"
              >
                Facebook 粉絲頁
              </a>

              <a
                href="https://lin.ee/Dlq7FY2"
                target="_blank"
                rel="noopener noreferrer"
                className="line-btn full"
              >
                LINE 聯絡我們
              </a>

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