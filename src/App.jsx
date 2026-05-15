import React from "react";
import {
  Ship, Plane, Warehouse, FileCheck, Truck, Globe2, Phone, Mail, MapPin,
  CheckCircle2, ArrowRight, ShieldCheck,  MessageCircle,
  PackageCheck, ClipboardCheck, Boxes, SearchCheck, HelpCircle, Clock,
  BadgeCheck, Route
} from "lucide-react";

const companyInfo = {
  companyName: "尚順國際運通",
  phone: "04-22529955",
  email: "sunshine0422520071@gmail.com",
  facebook: "https://www.facebook.com/SunshineTXGTW/",
  line: "https://lin.ee/Dlq7FY2",
  googleMap: "https://share.google/oBZlTBPBTKYPpShK5",
  googleForm: "https://docs.google.com/forms/d/e/1FAIpQLScDq36dwppmix3Y2QOqR7JdtzAE9u4e-cvhiD3Nkg2LvkGzsw/viewform?embedded=true",
  logo: "/logo.png",
  lineQr: "/line-qr.png",
};

const services = [
  { icon: Ship, title: "海運服務", desc: "提供整櫃、併櫃、大貨回台與一般海運安排，依重量、材積與時效規劃合適方案。" },
  { icon: Plane, title: "空運服務", desc: "適合急件、樣品與小批量貨件，協助快速安排航班、清關與後段配送。" },
  { icon: Globe2, title: "小三通物流", desc: "熟悉兩岸物流操作，包含一般貨品、茶葉與特殊需求貨件回台安排。" },
  { icon: FileCheck, title: "報關清關", desc: "協助確認品名、材質、用途、規格、貨值等資料，降低查驗與延誤風險。" },
  { icon: Warehouse, title: "倉儲集貨", desc: "提供入倉、集貨、核對、貼標、分貨、暫存與出貨安排等作業服務。" },
  { icon: Truck, title: "後段派送", desc: "協助安排台灣端配送、司機聯繫、貨態追蹤與簽收確認。" },
];

const process = [
  { icon: MessageCircle, title: "提出需求", desc: "提供品名、尺寸、重量、件數、起運地與收貨地。" },
  { icon: ClipboardCheck, title: "資料確認", desc: "確認材質、用途、貨值與清關所需資料。" },
  { icon: SearchCheck, title: "評估報價", desc: "依貨況安排海運、空運、海快或小三通方案。" },
  { icon: Boxes, title: "集貨入倉", desc: "安排入倉、核對、貼標、分貨與出貨作業。" },
  { icon: FileCheck, title: "報關清關", desc: "追蹤關務進度，協助降低查驗與延誤風險。" },
  { icon: PackageCheck, title: "派送完成", desc: "安排後段派送，協助確認簽收與到貨狀況。" },
];

const advantages = [
  { icon: ShieldCheck, title: "風險控管", desc: "不只安排運輸，更重視前端資料確認與清關風險控管。" },
  { icon: Route, title: "路線整合", desc: "熟悉中國、台灣與東南亞跨境物流操作流程。" },
  { icon: BadgeCheck, title: "方案彈性", desc: "可依貨品特性安排海運、空運、海快與小三通等方案。" },
  { icon: Clock, title: "貨態追蹤", desc: "提供貨態追蹤與客戶溝通，讓每一步進度更清楚。" },
];

const customsItems = [
  "品名、品牌、材質、用途確認",
  "尺寸、重量、件數與貨值核對",
  "特殊貨件與敏感品項事前評估",
  "協助降低查驗、退件與延誤風險",
];

const faq = [
  { q: "詢價需要提供哪些資料？", a: "建議提供品名、材質、用途、尺寸、重量、件數、貨值、起運地與收貨地，資料越完整，報價與清關評估越準確。" },
  { q: "可以協助中國回台物流嗎？", a: "可以，依貨況可評估海運、海快、空運或小三通等方式，並協助確認清關所需資料。" },
  { q: "小三通是否所有貨品都能操作？", a: "不一定，需依品項、材質、用途與海關規範評估。特殊貨件建議先提供完整產品資料。" },
  { q: "可以協助倉儲與集貨嗎？", a: "可以，提供入倉、集貨、核對、貼標、暫存、分貨與後段派送安排。" },
];

export default function App() {
  return (
    <div className="site">
      <style>{`
        *{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;font-family:"Noto Sans TC","Microsoft JhengHei",Arial,sans-serif;color:#0f172a;background:#f4f7fb}a{text-decoration:none;color:inherit}.site{min-height:100vh;overflow-x:hidden}
        .header{position:sticky;top:0;z-index:50;background:rgba(255,255,255,.94);backdrop-filter:blur(14px);border-bottom:1px solid #e5e7eb}.header-inner{max-width:1280px;margin:0 auto;padding:12px 20px;display:flex;align-items:center;justify-content:space-between;gap:18px}.brand{display:flex;align-items:center;gap:12px;flex-shrink:0}.logo{width:54px;height:54px;border-radius:18px;background:#fff;object-fit:contain;box-shadow:0 10px 28px rgba(15,23,42,.12)}.brand-title{font-size:22px;font-weight:900;letter-spacing:1px}.brand-subtitle{margin-top:3px;color:#64748b;font-size:11px;letter-spacing:2px}.nav{display:flex;align-items:center;gap:24px;color:#fff;font-size:42px;font-weight:900;line-height:1;white-space:nowrap;text-shadow:0 2px 12px rgba(0,0,0,.65)}.nav a:hover{color:#dbeafe}.header-cta{display:inline-flex;align-items:center;justify-content:center;padding:12px 18px;border-radius:16px;background:#0f172a;color:#fff;font-weight:900;white-space:nowrap;flex-shrink:0}
        .hero{position:relative;overflow:hidden;color:white;background:linear-gradient(120deg,rgba(3,20,45,.96),rgba(10,62,121,.84)),url("https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=2200&q=80");background-size:cover;background-position:center}.hero:before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px);background-size:54px 54px;opacity:.35}.hero-inner{position:relative;max-width:1200px;margin:0 auto;padding:92px 20px 150px;display:grid;grid-template-columns:1.08fr .92fr;gap:48px;align-items:center}.tag{display:inline-flex;align-items:center;gap:8px;padding:10px 15px;border-radius:999px;border:1px solid rgba(255,255,255,.25);background:rgba(255,255,255,.12);color:#dbeafe;font-weight:800;margin-bottom:22px}.hero h1{margin:0;font-size:clamp(42px,6vw,72px);line-height:1.08;letter-spacing:-1.5px}.hero h1 span{display:block;margin-top:14px;color:#dbeafe;font-size:clamp(28px,4vw,46px)}.title-line{display:inline}.hero p{max-width:700px;margin:26px 0 0;color:#e2e8f0;font-size:18px;line-height:2}.hero-actions{display:flex;flex-wrap:wrap;gap:14px;margin-top:34px}.btn-primary,.btn-secondary{display:inline-flex;align-items:center;justify-content:center;gap:10px;padding:15px 22px;border-radius:16px;font-weight:900;transition:.25s}.btn-primary{background:#2563eb;color:#fff}.btn-secondary{background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.32);color:#fff}.btn-primary:hover,.btn-secondary:hover{transform:translateY(-2px)}
        .hero-card{border-radius:32px;padding:28px;background:rgba(255,255,255,.13);border:1px solid rgba(255,255,255,.22);box-shadow:0 35px 90px rgba(0,0,0,.32);backdrop-filter:blur(16px)}.hero-card-title{display:flex;align-items:center;justify-content:space-between;gap:18px;margin-bottom:22px}.hero-card-title strong{display:block;font-size:28px}.hero-card-title span{color:#bfdbfe;font-weight:700}.route-box{position:relative;height:220px;overflow:hidden;border-radius:24px;border:1px solid rgba(255,255,255,.16);background:radial-gradient(circle at 22% 35%,rgba(96,165,250,.5),transparent 16%),radial-gradient(circle at 65% 48%,rgba(147,197,253,.42),transparent 18%),radial-gradient(circle at 82% 72%,rgba(14,165,233,.38),transparent 14%),rgba(2,6,23,.28)}.route-line{position:absolute;left:18%;top:45%;width:62%;height:2px;border-top:2px dashed #93c5fd;transform:rotate(12deg);animation:routeGlow 2.8s infinite}.route-line.two{top:56%;width:55%;transform:rotate(-10deg)}.route-dot{position:absolute;width:44px;height:44px;border-radius:50%;background:#fff;color:#0f172a;display:grid;place-items:center;font-weight:900;font-size:12px;box-shadow:0 0 28px rgba(147,197,253,.7)}.dot-cn{left:14%;top:30%}.dot-tw{left:58%;top:42%}.dot-sea{right:10%;bottom:14%}@keyframes routeGlow{50%{opacity:.45;filter:drop-shadow(0 0 12px #93c5fd)}}
        .section{max-width:1200px;margin:0 auto;padding:84px 20px}.section-title{max-width:780px;margin-bottom:38px}.section-label{color:#2563eb;font-size:13px;letter-spacing:3px;font-weight:900;margin-bottom:12px}.section h2,.contact-box h2,.form-title h2{margin:0;font-size:clamp(30px,4vw,44px);letter-spacing:-1px}.section-title p,.form-title p{margin:15px 0 0;color:#64748b;line-height:1.9;font-size:17px}
        .quick-stats{max-width:1200px;margin:-64px auto 0;position:relative;z-index:2;display:grid;grid-template-columns:repeat(4,1fr);gap:16px;padding:0 20px}.stat-card{background:#fff;border:1px solid #e5e7eb;border-radius:24px;padding:22px;box-shadow:0 18px 50px rgba(15,23,42,.12)}.stat-card strong{display:block;font-size:28px}.stat-card span{color:#64748b;font-weight:700}
        .service-grid,.advantage-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.service-card,.advantage-card,.faq-card{background:#fff;border:1px solid #e5e7eb;border-radius:28px;padding:28px;box-shadow:0 16px 42px rgba(15,23,42,.06);transition:.25s}.service-card:hover,.advantage-card:hover{transform:translateY(-6px);box-shadow:0 25px 55px rgba(15,23,42,.1)}.service-icon,.advantage-icon{width:52px;height:52px;border-radius:18px;background:#eff6ff;color:#2563eb;display:grid;place-items:center;margin-bottom:18px}.service-card h3,.advantage-card h3{margin:0 0 10px;font-size:21px}.service-card p,.advantage-card p{margin:0;color:#64748b;line-height:1.8}
        .process-section{background:#0f172a;color:white}.process-section .section-title p{color:#cbd5e1}.process-grid{display:grid;grid-template-columns:repeat(6,1fr);gap:14px}.process-item{border-radius:24px;padding:20px;background:rgba(255,255,255,.09);border:1px solid rgba(255,255,255,.1)}.process-no{width:38px;height:38px;border-radius:50%;background:white;color:#0f172a;display:grid;place-items:center;font-weight:900;margin-bottom:14px}.process-item svg{color:#93c5fd;margin-bottom:10px}.process-item strong{display:block;margin-bottom:8px}.process-item p{margin:0;color:#cbd5e1;font-size:14px;line-height:1.7}
        .about{display:grid;grid-template-columns:.95fr 1.05fr;gap:46px;align-items:center}.about-visual{min-height:380px;border-radius:34px;background:linear-gradient(135deg,rgba(15,23,42,.28),rgba(37,99,235,.32)),url("https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1500&q=80");background-size:cover;background-position:center;box-shadow:0 22px 60px rgba(15,23,42,.14);display:flex;align-items:flex-end;padding:26px}.about-badge{border-radius:24px;background:rgba(15,23,42,.72);color:white;padding:22px;max-width:340px;backdrop-filter:blur(10px)}.about-badge strong{display:block;font-size:20px;margin-bottom:6px}.about-text p{color:#64748b;line-height:2;font-size:17px}.advantage-list{display:grid;gap:12px;margin-top:22px}.advantage-item{display:flex;align-items:flex-start;gap:12px;font-weight:800;color:#1e293b;line-height:1.7}.advantage-item svg{color:#2563eb;flex:none;margin-top:3px}
        .customs-section{background:#fff}.customs-box{display:grid;grid-template-columns:1fr 1fr;gap:28px;align-items:start;background:#0f172a;color:#fff;border-radius:34px;padding:44px;box-shadow:0 24px 70px rgba(15,23,42,.16)}.customs-box p{color:#cbd5e1;line-height:2}.customs-list{display:grid;gap:14px}.customs-item{display:flex;gap:12px;align-items:flex-start;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.12);border-radius:20px;padding:16px;font-weight:800}
        .faq-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}.faq-card h3{display:flex;align-items:center;gap:10px;margin:0 0 10px;font-size:20px}.faq-card p{margin:0;color:#64748b;line-height:1.8}
        .contact-section{background:white}.contact-box{max-width:1200px;margin:0 auto;padding:52px;border-radius:34px;background:radial-gradient(circle at 85% 12%,rgba(96,165,250,.32),transparent 26%),linear-gradient(135deg,#0f172a,#0b3a75);color:white;display:grid;grid-template-columns:.95fr 1.05fr;gap:36px;box-shadow:0 28px 80px rgba(15,23,42,.22)}.contact-box p{color:#dbeafe;line-height:2;font-size:17px}.contact-grid{display:grid;gap:14px}.contact-card,.social-card{display:flex;align-items:center;gap:14px;padding:18px;border-radius:22px;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.15)}.contact-card svg,.social-card svg{color:#93c5fd;flex:none}.contact-card span{display:block;color:#bfdbfe;font-size:14px;margin-bottom:4px}.contact-card strong{display:block;word-break:break-all}.social-card{justify-content:center;font-weight:900}.fb{background:#1877f2;border:none}.line{background:#06c755;border:none}.map{background:white;color:#0f172a;border:none}.map svg{color:#2563eb}.line-qr{background:white;color:#0f172a;border-radius:26px;padding:18px;text-align:center}.line-qr img{width:170px;max-width:100%;border-radius:18px;object-fit:contain}.line-qr div{margin-top:10px;color:#64748b;font-size:14px;font-weight:700}
        .form-section{background:#f8fafc;padding:84px 20px}.form-inner{max-width:1000px;margin:0 auto}.form-title{text-align:center;margin-bottom:32px}.form-frame{overflow:hidden;border-radius:32px;border:1px solid #e5e7eb;background:white;box-shadow:0 22px 65px rgba(15,23,42,.09)}.form-frame iframe{display:block;width:100%;min-height:2546px;border:0}.footer{background:#0f172a;color:#cbd5e1;padding:34px 20px}.footer-inner{max-width:1200px;margin:0 auto;display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;font-size:14px}
        @media(max-width:1180px){.nav{font-size:34px;gap:18px}}@media(max-width:980px){.nav{display:none}.hero-inner,.about,.customs-box,.contact-box{grid-template-columns:1fr}.service-grid,.advantage-grid{grid-template-columns:repeat(2,1fr)}.process-grid{grid-template-columns:repeat(3,1fr)}.quick-stats{grid-template-columns:repeat(2,1fr)}}@media(max-width:640px){.header-inner{align-items:center;padding:8px 14px}.brand{margin-top:-6px}.brand-title{font-size:17px}.brand-subtitle{display:none}.logo{width:42px;height:42px;border-radius:14px}.header-cta{font-size:13px;padding:9px 12px;border-radius:13px}.hero-inner{padding:12px 20px 116px;gap:20px;align-items:start}.tag{margin-bottom:14px;font-size:13px;padding:8px 12px}.hero h1{font-size:36px;line-height:1.1}.hero h1 span{margin-top:16px;font-size:34px;line-height:1.35}.title-line{display:block}.hero p{margin-top:18px;font-size:16px;line-height:1.8}.hero-actions{flex-direction:column;margin-top:24px;margin-bottom:118px}.btn-primary,.btn-secondary{width:100%;padding:15px 18px}.hero-card{display:none}.quick-stats{grid-template-columns:1fr;margin-top:-44px}.section{padding:64px 20px}.service-grid,.advantage-grid,.process-grid,.faq-grid{grid-template-columns:1fr}.customs-box,.contact-box{padding:28px}.form-section{padding:64px 14px}.form-frame{border-radius:22px}.form-frame iframe{min-height:2600px}}
      `}</style>

      <header className="header">
        <div className="header-inner">
          <a className="brand" href="#top">
            <img className="logo" src={companyInfo.logo} alt="尚順國際運通 Logo" />
            <div>
              <div className="brand-title">{companyInfo.companyName}</div>
              <div className="brand-subtitle">SUNSHINE INTERNATIONAL LOGISTICS</div>
            </div>
          </a>
          <nav className="nav">
            <a href="#top">首頁</a>
            <a href="#services">服務項目</a>
            <a href="#process">物流流程</a>
            <a href="#about">關於我們</a>
            <a href="#contact">聯絡我們</a>
          </nav>
          <a className="header-cta" href="#form">立即詢價</a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-inner">
            <div>
              <div className="tag"><ShieldCheck size={18} />國際物流｜海運｜空運｜小三通｜報關清關</div>
              <h1>
                尚順國際運通
                <span>
                  <span className="title-line">全球物流</span>
                  <span className="title-line">專業運輸</span>
                  <span className="title-line">值得信賴</span>
                </span>
              </h1>
              <p>
                提供中國與東南亞進出口、小三通、海運、海快、空運、報關清關、
                倉儲集貨與後段派送服務。依照貨件特性、時效與預算，
                協助客戶規劃穩定且安全的物流方案。
              </p>
              <div className="hero-actions">
                <a className="btn-primary" href="#form">填寫物流詢價表 <ArrowRight size={18} /></a>
                <a className="btn-secondary" href={companyInfo.line} target="_blank" rel="noreferrer">LINE 加入好友 <MessageCircle size={18} /></a>
              </div>
            </div>
            <div className="hero-card">
              <div className="hero-card-title">
                <div><span>物流路線整合</span><strong>中國・台灣・東南亞</strong></div>
                <Globe2 size={38} />
              </div>
              <div className="route-box">
                <div className="route-line" />
                <div className="route-line two" />
                <div className="route-dot dot-cn">CN</div>
                <div className="route-dot dot-tw">TW</div>
                <div className="route-dot dot-sea">SEA</div>
              </div>
            </div>
          </div>
        </section>

        <section className="quick-stats">
          <div className="stat-card"><strong>中國・台灣</strong><span>兩岸物流操作</span></div>
          <div className="stat-card"><strong>東南亞</strong><span>進出口服務</span></div>
          <div className="stat-card"><strong>海空運</strong><span>多元運輸方案</span></div>
          <div className="stat-card"><strong>清關倉儲</strong><span>全流程支援</span></div>
        </section>

        <section id="services" className="section">
          <div className="section-title">
            <div className="section-label">服務項目</div>
            <h2>一站式國際物流整合服務</h2>
            <p>從貨件資料確認、倉儲集貨、運輸安排、報關清關到台灣端派送，為客戶提供清楚、穩定、可追蹤的物流服務。</p>
          </div>
          <div className="service-grid">
            {services.map((item) => {
              const Icon = item.icon;
              return <div className="service-card" key={item.title}><div className="service-icon"><Icon size={28} /></div><h3>{item.title}</h3><p>{item.desc}</p></div>;
            })}
          </div>
        </section>

        <section id="advantages" className="section">
          <div className="section-title">
            <div className="section-label">公司優勢</div>
            <h2>我們不只負責運輸，更重視風險控管</h2>
            <p>尚順國際運通重視貨件資料、清關文件、運輸時效與後段派送，協助客戶降低延誤、查驗與貨損風險。</p>
          </div>
          <div className="advantage-grid">
            {advantages.map((item) => {
              const Icon = item.icon;
              return <div className="advantage-card" key={item.title}><div className="advantage-icon"><Icon size={28} /></div><h3>{item.title}</h3><p>{item.desc}</p></div>;
            })}
          </div>
        </section>

        <section id="process" className="process-section">
          <div className="section">
            <div className="section-title">
              <div className="section-label">物流流程</div>
              <h2>流程透明，進度清楚掌握</h2>
              <p>透過標準化作業流程，協助客戶從詢價到派送完成都能掌握進度。</p>
            </div>
            <div className="process-grid">
              {process.map((item, index) => {
                const Icon = item.icon;
                return <div className="process-item" key={item.title}><div className="process-no">{index + 1}</div><Icon size={24} /><strong>{item.title}</strong><p>{item.desc}</p></div>;
              })}
            </div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="about-visual"><div className="about-badge"><strong>專業物流控管</strong><span>清關文件・貨態追蹤・倉儲派送</span></div></div>
          <div className="about-text">
            <div className="section-label">關於尚順</div>
            <h2>每一票貨，都值得被仔細安排</h2>
            <p>與一般只負責運輸的物流方式不同，尚順國際運通更重視前端資料確認、清關文件完整性、貨況追蹤與後續派送安排。我們希望協助客戶的不只是把貨送到，而是讓每一票貨都能安全、穩定、清楚地完成運輸。</p>
            <div className="advantage-list">
              {advantages.map((item) => <div className="advantage-item" key={item.title}><CheckCircle2 size={20} /><span>{item.desc}</span></div>)}
            </div>
          </div>
        </section>

        <section id="customs" className="customs-section">
          <div className="section">
            <div className="customs-box">
              <div>
                <div className="section-label">清關與倉儲</div>
                <h2>資料完整，操作更穩定</h2>
                <p>跨境物流的關鍵不只在運輸，更在清關資料與貨件資訊是否完整。我們協助客戶確認貨件基本資料，提升作業效率並降低通關風險。</p>
              </div>
              <div className="customs-list">
                {customsItems.map((item) => <div className="customs-item" key={item}><CheckCircle2 size={20} /><span>{item}</span></div>)}
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="section">
          <div className="section-title">
            <div className="section-label">常見問題</div>
            <h2>物流詢價常見問題</h2>
            <p>提供完整資訊，有助於加快報價、評估與後續清關作業。</p>
          </div>
          <div className="faq-grid">
            {faq.map((item) => <div className="faq-card" key={item.q}><h3><HelpCircle size={22} />{item.q}</h3><p>{item.a}</p></div>)}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="section">
            <div className="contact-box">
              <div>
                <div className="section-label">聯絡我們</div>
                <h2>需要報價或物流建議？</h2>
                <p>歡迎提供品名、材質、用途、尺寸、重量、件數、貨值、出貨地與收貨地，我們將依貨況協助評估合適物流方案。</p>
              </div>
              <div className="contact-grid">
                <a className="contact-card" href={`tel:${companyInfo.phone}`}><Phone size={24} /><div><span>服務電話</span><strong>{companyInfo.phone}</strong></div></a>
                <a className="contact-card" href={`mailto:${companyInfo.email}?subject=物流詢價`}><Mail size={24} /><div><span>電子信箱</span><strong>{companyInfo.email}</strong></div></a>
                <a className="social-card fb" href={companyInfo.facebook} target="_blank" rel="noreferrer"><Globe2 size={22} />Facebook 粉絲專頁</a>
                <a className="social-card line" href={companyInfo.line} target="_blank" rel="noreferrer"><MessageCircle size={22} />LINE 加入好友</a>
                <a className="social-card map" href={companyInfo.googleMap} target="_blank" rel="noreferrer"><MapPin size={22} />Google 地圖導航</a>
                <div className="line-qr"><img src={companyInfo.lineQr} alt="LINE 官方帳號 QR Code" /><div>LINE 官方帳號 QR Code</div></div>
              </div>
            </div>
          </div>
        </section>

        <section id="form" className="form-section">
          <div className="form-inner">
            <div className="form-title">
              <div className="section-label">線上詢價</div>
              <h2>物流詢價表單</h2>
              <p>請填寫貨件資訊與運輸需求，我們收到後將盡快與您聯繫。</p>
            </div>
            <div className="form-frame">
              <iframe src={companyInfo.googleForm} title="尚順國際運通物流詢價表單" width="100%" height="2546" frameBorder="0" marginHeight="0" marginWidth="0">正在載入…</iframe>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div>© 2026 尚順國際運通有限公司 All Rights Reserved.</div>
          <div>國際物流｜海運｜空運｜小三通｜報關清關｜倉儲集貨</div>
        </div>
      </footer>
    </div>
  );
}
