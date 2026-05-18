import React from 'react';
import './index.css';

export default function App() {
  const [activePage, setActivePage] = React.useState('home');
  const navItems = [
    { id: 'home', zh: '首頁', en: 'Home' },
    { id: 'about', zh: '關於我們', en: 'About Us' },
    { id: 'services', zh: '服務項目', en: 'Services' },
    { id: 'process', zh: '物流流程', en: 'Logistics Process' },
    { id: 'faq', zh: '常見問題', en: 'FAQ' },
    { id: 'contact', zh: '聯絡我們', en: 'Contact Us' },
  ];

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="header-inner">
          <div className="logo-group">
            <img
              src="/logo.png"
              alt="Shang Shun Logo"
              className="logo"
            />
            <div>
              <h1 className="text-2xl font-bold">SHANG SHUN INTERNATIONAL LOGISTICS</h1>
              <p className="text-sm text-gray-300">尚順國際物流｜專業全球運輸服務</p>
            </div>
          </div>

          <nav className="nav">
            {navItems.map((item) => (
              <a
                key={item.id}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActivePage(item.id);
                }}
                className={`transition duration-300 ${activePage === item.id ? 'text-cyan-300' : 'hover:text-cyan-300'}`}
              >
                {item.zh} / {item.en}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      {activePage === 'home' && (
      <section
        id="home"
        className="hero-section"
      >
        <div className="hero-content">
          <div>
            <h2 className="text-5xl font-extrabold leading-tight mb-6">
              全球物流運輸服務
              <br />
              <span className="text-cyan-300">Global Freight Solutions</span>
            </h2>

            <p className="text-lg text-gray-200 leading-relaxed mb-8">
              尚順國際物流專注於全球貨運與跨境運輸，
              提供企業最穩定的物流整合服務與國際配送方案。
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="contact-btn"
              >
                立即聯絡 Contact Us
              </a>

              <a
                href="https://lin.ee/Dlq7FY2"
                target="_blank"
}
