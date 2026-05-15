import React from "react";
import {
  Home,
  Newspaper,
  Building2,
  PackageCheck,
  Phone,
  ArrowRight,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

export default function App() {
  const navItems = [
    { name: "首頁", href: "#home", icon: Home },
    { name: "最新消息", href: "#news", icon: Newspaper },
    { name: "關於我們", href: "#about", icon: Building2 },
    { name: "服務項目", href: "#services", icon: PackageCheck },
    { name: "聯絡我們", href: "#contact", icon: Phone },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 shrink-0">
            <img
              src="/logo.png"
              alt="尚順國際運通"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl object-contain"
            />

            <div>
              <h1 className="text-lg sm:text-2xl font-black tracking-tight text-slate-900">
                尚順國際運通
              </h1>

              <p className="hidden sm:block text-xs sm:text-sm tracking-[0.18em] text-slate-500 font-semibold">
                SUNSHINE INTERNATIONAL LOGISTICS
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const active = index === 0;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-base xl:text-lg font-bold transition whitespace-nowrap ${
                    active
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-slate-800 hover:bg-blue-50 hover:text-blue-700"
                  }`}
                >
                  <Icon size={19} />
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Mobile Button */}
          <a
            href="#contact"
            className="lg:hidden px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-bold shadow"
          >
            聯絡我們
          </a>
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden bg-white border-t border-slate-100">
          <nav className="px-3 py-2 flex gap-2 overflow-x-auto scrollbar-hide">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const active = index === 0;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition ${
                    active
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 text-slate-800"
                  }`}
                >
                  <Icon size={16} />
                  {item.name}
                </a>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative min-h-[620px] sm:min-h-[680px] lg:min-h-[720px] flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-blue-800"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{ backgroundImage: "url('/hero-logistics.jpg')" }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-blue-900/50" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-6 py-16 sm:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/30 bg-white/10 backdrop-blur text-white font-bold mb-6">
              <PackageCheck size={22} />
              服務項目
            </div>

            <h2 className="text-white text-4xl sm:text-5xl lg:text-7xl font-black leading-tight tracking-tight mb-6">
              國際物流
              <br className="sm:hidden" />
              整合服務
            </h2>

            <p className="text-blue-50 text-lg sm:text-2xl leading-relaxed mb-8 font-medium">
              依照貨件特性、清關條件、時效與預算，
              <br className="hidden sm:block" />
              協助安排合適的物流方案。
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold shadow-lg transition"
              >
                了解更多服務
                <ArrowRight size={22} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl border border-white/70 bg-white/10 hover:bg-white/20 text-white text-lg font-bold transition"
              >
                <Phone size={21} />
                聯絡我們
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* News */}
      <section id="news" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <h3 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
            最新消息
          </h3>

          <p className="text-slate-600 text-lg">
            提供物流時效、清關提醒、航班與貨運相關公告。
          </p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <h3 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
            關於我們
          </h3>

          <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">
            尚順國際運通提供中國、東南亞、台灣進出口物流整合服務，
            協助客戶處理運輸、清關、倉儲與派送安排。
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <h3 className="text-3xl sm:text-4xl font-black text-slate-900 mb-10">
            服務項目
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "中國進出口物流",
              "東南亞進出口",
              "小三通物流",
              "海運服務",
              "空運服務",
              "清關與倉儲",
            ].map((service) => (
              <div
                key={service}
                className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:shadow-lg transition"
              >
                <PackageCheck className="text-blue-600 mb-4" size={32} />

                <h4 className="text-xl font-black text-slate-900">
                  {service}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <h3 className="text-3xl sm:text-4xl font-black mb-6">
            聯絡我們
          </h3>

          <div className="grid sm:grid-cols-3 gap-4">
            <a
              href="tel:0422529955"
              className="flex items-center gap-3 p-5 rounded-2xl bg-white/10 hover:bg-white/20 transition"
            >
              <Phone />
              04-22529955
            </a>

            <a
              href="mailto:service@example.com"
              className="flex items-center gap-3 p-5 rounded-2xl bg-white/10 hover:bg-white/20 transition"
            >
              <Mail />
              Email
            </a>

            <a
              href="https://line.me"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-5 rounded-2xl bg-white/10 hover:bg-white/20 transition"
            >
              <MessageCircle />
              LINE 洽詢
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3 text-slate-300">
            <MapPin />
            台灣・台中
          </div>
        </div>
      </section>
    </div>
  );
}
