import React from "react";
import {
  Ship,
  Plane,
  Warehouse,
  FileCheck2,
  PackageCheck,
  MapPinned,
  Mail,
  Facebook,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function App() {
  const lineUrl = "https://lin.ee/Dlq7FY2";
  const fbUrl = "https://www.facebook.com/SunshineTXGTW/";
  const mapUrl = "https://share.google/oBZlTBPBTKYPpShK5";
  const email = "sunshine0422520071@gmail.com";

  const services = [
    { title: "中國進出口物流", icon: Ship, text: "協助中國至台灣、台灣至中國貨件評估與安排。" },
    { title: "小三通／茶葉小三通", icon: PackageCheck, text: "適合特定品項與固定出貨需求，重視安全與穩定。" },
    { title: "海運／海快／海特", icon: Ship, text: "依貨物體積、重量、時效需求規劃合適路線。" },
    { title: "空運服務", icon: Plane, text: "急件與高時效貨物，可協助評估空運方案。" },
    { title: "清關報關", icon: FileCheck2, text: "協助確認產品資料、報關文件與清關需求。" },
    { title: "倉儲集貨／派送", icon: Warehouse, text: "提供集貨、倉儲、後段配送與貨態追蹤協助。" },
  ];

  const steps = [
    ["01", "提供貨物資料", "品名、材質、用途、尺寸、重量、件數、貨值。"],
    ["02", "評估路線報價", "依貨物條件確認可操作性、費用與時效。"],
    ["03", "安排入倉操作", "集貨、外箱標示、資料核對與文件準備。"],
    ["04", "清關與派送", "貨物到港後安排清關，完成後銜接配送。"],
  ];

  return (
    <div className="min-h-screen bg-[#06111f] text-white">
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#06111f]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
          <a href="#home" className="flex items-center gap-3">
            <img src="/logo.png" alt="尚順國際運通 LOGO" className="h-11 w-auto rounded-md" />
            <div>
              <p className="text-base font-black tracking-wide md:text-lg">尚順國際運通</p>
              <p className="text-xs text-cyan-200">Sunshine International Logistics</p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
            <a href="#services">服務項目</a>
            <a href="#process">物流流程</a>
            <a href="#quote">線上詢價</a>
            <a href="#contact">聯絡我們</a>
          </nav>

          <a href={lineUrl} target="_blank" rel="noreferrer" className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950">
            LINE 詢價
          </a>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden px-5 pb-20 pt-32 md:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#0ea5e9_0%,transparent_35%),radial-gradient(circle_at_bottom_left,#1d4ed8_0%,transparent_35%)] opacity-40" />
        <div className="absolute left-0 top-24 h-px w-full bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-white/5 px-4 py-2 text-sm text-cyan-100">
              <MapPinned size={16} /> 中國・台灣・東南亞｜專業物流整合
            </p>

            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              一站式國際物流服務
              <br />
              <span className="bg-gradient-to-r from-cyan-100 via-white to-blue-400 bg-clip-text text-transparent">
                讓貨物安全、快速到位
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              尚順國際運通協助中國進出口、小三通、海運、海快、空運、清關、倉儲與派送，
              從詢價、資料確認到貨態追蹤，讓每一步都清楚掌握。
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href={lineUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-3 font-black text-slate-950 shadow-lg shadow-cyan-500/30">
                立即 LINE 詢價 <ArrowRight size={18} />
              </a>
              <a href="#quote" className="rounded-full border border-cyan-300 px-7 py-3 font-black text-cyan-100">
                填寫詢價表單
              </a>
            </div>

            <div className="mt-8 grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
              {["清關文件協助", "倉儲集貨服務", "後段派送追蹤"].map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-xl bg-white/5 px-4 py-3">
                  <CheckCircle2 className="text-cyan-300" size={18} /> {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
            <div className="rounded-3xl bg-[#07182b] p-6 text-center">
              <img src="/line-code.png" alt="LINE QR Code" className="mx-auto w-56 rounded-2xl bg-white p-3" />
              <h2 className="mt-5 text-2xl font-black">掃描加入 LINE</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                提供品名、尺寸、重量、件數與貨值，可更快協助您評估報價。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-bold text-cyan-300">SERVICES</p>
            <h2 className="mt-2 text-3xl font-black md:text-4xl">服務項目</h2>
            <p className="mt-4 text-slate-300">依照貨物條件與需求，規劃適合的物流方案。</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map(({ title, text, icon: Icon }) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-xl">
                <Icon className="text-cyan-300" size={34} />
                <h3 className="mt-5 text-xl font-black text-cyan-100">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="bg-[#081a2e] px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-bold text-cyan-300">PROCESS</p>
            <h2 className="mt-2 text-3xl font-black md:text-4xl">物流操作流程</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {steps.map(([num, title, text]) => (
              <div key={num} className="rounded-3xl border border-cyan-300/20 bg-white/10 p-6">
                <p className="text-4xl font-black text-cyan-300">{num}</p>
                <h3 className="mt-5 text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="quote" className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-bold text-cyan-300">QUOTE</p>
            <h2 className="mt-2 text-3xl font-black md:text-4xl">線上詢價表單</h2>
            <p className="mt-4 text-slate-300">請填寫貨物資訊，我們將盡快協助評估。</p>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white shadow-2xl">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScDq36dwppmix3Y2QOqR7JdtzAE9u4e-cvhiD3Nkg2LvkGzsw/viewform?embedded=true"
              width="100%"
              height="2546"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="尚順國際運通線上詢價表單"
            >
              正在載入…
            </iframe>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#081a2e] px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-bold text-cyan-300">CONTACT</p>
            <h2 className="mt-2 text-3xl font-black md:text-4xl">聯絡我們</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <a href={lineUrl} target="_blank" rel="noreferrer" className="rounded-3xl bg-green-500 p-7 text-center font-black text-white shadow-xl">
              <MessageCircle className="mx-auto mb-3" size={34} /> LINE 聯絡我們
            </a>
            <a href={fbUrl} target="_blank" rel="noreferrer" className="rounded-3xl bg-blue-600 p-7 text-center font-black text-white shadow-xl">
              <Facebook className="mx-auto mb-3" size={34} /> Facebook 粉絲專頁
            </a>
            <a href={`mailto:${email}`} className="rounded-3xl bg-cyan-400 p-7 text-center font-black text-slate-950 shadow-xl">
              <Mail className="mx-auto mb-3" size={34} /> Email 詢問
            </a>
          </div>

          <div className="mt-8 rounded-3xl border border-white/10 bg-white/10 p-7 text-center">
            <p className="text-lg font-black">Email</p>
            <p className="mt-2 break-all text-cyan-200">{email}</p>
            <a href={mapUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-300 px-7 py-3 font-black text-cyan-100">
              <MapPinned size={18} /> 查看 Google 地圖
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-400">
        © 2026 尚順國際運通有限公司｜專業物流・清關・倉儲・派送服務
      </footer>
    </div>
  );
}
