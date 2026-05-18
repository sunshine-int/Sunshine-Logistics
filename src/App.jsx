import React from 'react';

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
    <div className="min-h-screen bg-white text-gray-800 scroll-smooth">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#001B44] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="Shang Shun Logo"
              className="w-14 h-14 object-contain rounded-xl bg-white p-1"
            />
            <div>
              <h1 className="text-2xl font-bold">SHANG SHUN INTERNATIONAL LOGISTICS</h1>
              <p className="text-sm text-gray-300">尚順國際物流｜專業全球運輸服務</p>
            </div>
          </div>

          <nav className="hidden lg:flex gap-6 text-sm font-medium">
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
        className="relative bg-gradient-to-r from-[#001B44] to-[#003C8F] text-white"
      >
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-center">
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
                className="bg-cyan-400 hover:bg-cyan-300 text-black px-6 py-3 rounded-2xl font-bold transition"
              >
                立即聯絡 Contact Us
              </a>

              <a
                href="https://lin.ee/Dlq7FY2"
                target="_blank"
                className="bg-[#06C755] hover:opacity-90 text-white px-6 py-3 rounded-2xl font-bold transition"
              >
                LINE 線上客服
              </a>
            </div>
          </div>

          <div>
            <img
              src="/hero-bg.png"
              alt="尚順國際物流背景圖"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>
      )}


