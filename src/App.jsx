import React from 'react';
import './index.css';

export default function App() {
  return (
    <div className="app-container">
      <header className="header">
        <div className="header-inner">
          <h1>SHANG SHUN INTERNATIONAL LOGISTICS</h1>
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <div>
            <h2>全球物流運輸服務</h2>

            <p>
              尚順國際物流專注於全球貨運與跨境運輸。
            </p>

            <div>
              <a
                href="https://lin.ee/Dlq7FY2"
                target="_blank"
                rel="noopener noreferrer"
                className="line-btn"
              >
                LINE 線上客服
              </a>
            </div>
          </div>

          <div>
            <img
              src="/hero-bg.png"
              alt="物流背景"
              className="hero-image"
            />
          </div>
        </div>
      </section>

      <footer className="footer">
        © 2026 SHANG SHUN INTERNATIONAL LOGISTICS
      </footer>
    </div>
  );
}
