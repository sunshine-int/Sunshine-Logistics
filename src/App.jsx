import React from "react";
import {
  Ship,
  Plane,
  Warehouse,
  FileCheck,
  Truck,
  Globe2,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Package,
  ClipboardCheck,
  Headphones,
} from "lucide-react";

const company = {
  address: "台中市西屯區龍洋巷17之7號",
  phone: "04-22529955",
  email: "sunshine0422520071@gmail.com",
  facebook: "https://www.facebook.com/SunshineTXGTW/",
  line: "https://lin.ee/Dlq7FY2",
  map: "https://share.google/oBZlTBPBTKYPpShK5",
  form: "https://docs.google.com/forms/d/e/1FAIpQLScDq36dwppmix3Y2QOqR7JdtzAE9u4e-cvhiD3Nkg2LvkGzsw/viewform?embedded=true",
  logo: "/logo.png",
  lineQr: "/line-qr.png",
};

const services = [
  ["海運服務", "整櫃、併櫃、大貨回台，依重量、材積與時效安排合適方案。", Ship],
  ["空運服務", "急件、樣品與高時效貨件，協助快速安排航班與派送。", Plane],
  ["陸運派送", "提供中國端提貨、台灣端配送與到貨簽收追蹤。", Truck],
  ["倉儲服務", "提供入倉、集貨、核對、貼標、分貨與出貨安排。", Warehouse],
  ["報關服務", "協助確認品名、材質、用途、規格、貨值，降低清關風險。", FileCheck],
  ["國際快遞", "與國際快遞合作，提供門到門快速配送服務。", Globe2],
];

const process = [
  ["聯繫洽詢", "客戶提出需求，我們提供專業建議", Headphones],
  ["報價確認", "提供報價單並確認服務內容", ClipboardCheck],
  ["安排出貨", "安排貨物提取或收貨作業", Package],
  ["運輸配送", "海運、空運、陸運全球運輸", Ship],
  ["清關服務", "專業報關，快速通關", FileCheck],
  ["貨物送達", "貨物安全送達，完成交付", CheckCircle2],
];

const advantages = [
  ["專業團隊", "經驗豐富的物流專家"],
  ["全球網絡", "遍佈全球的代理夥伴"],
  ["安全可靠", "貨物安全保障"],
  ["客戶至上", "提供客製化服務"],
];

export default function App() {
  return (
    <div className="page">
      <style>{`
        *{box-sizing:border-box} html{scroll-behavior:smooth} body{margin:0;font-family:"Noto Sans TC","Microsoft JhengHei",Arial,sans-serif;color:#071a33;background:#f6f8fc} a{text-decoration:none;color:inherit}
        .hero{position:relative;min-height:650px;color:#fff;overflow:hidden;background:linear-gradient(90deg,rgba(1,18,45,.96),rgba(4,42,91,.82),rgba(0,25,58,.45)),url("https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=2200&q=80");background-size:cover;background-position:center}
        .hero:before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 55% 25%,rgba(0,180,255,.28),transparent 25%),linear-gradient(rgba(255,255,255,.055) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.055) 1px,transparent 1px);background-size:auto,52px 52px,52px 52px}
        .wrap{max-width:1180px;margin:0 auto;padding:0 24px;position:relative}
        .nav{height:90px;display:flex;align-items:center;justify-content:space-between;gap:22px}
        .brand{display:flex;align-items:center;gap:14px}.logo{width:58px;height:58px;object-fit:contain;border-radius:16px;background:#fff;padding:5px}
        .brand strong{display:block;font-size:25px;letter-spacing:1px}.brand span{font-size:12px;letter-spacing:2.5px;opacity:.86}
        .links{display:flex;gap:34px;font-weight:800;font-size:15px}.links a:hover{color:#93c5fd}
        .quote{display:inline-flex;align-items:center;gap:8px;border:1px solid rgba(255,255,255,.55);background:rgba(37,99,235,.45);border-radius:10px;padding:13px 20px;font-weight:900}
        .heroText{padding:90px 0 110px;max-width:660px}.heroText h1{font-size:clamp(44px,6vw,70px);line-height:1.08;margin:0;font-weight:950}.heroText h2{font-size:clamp(28px,4vw,42px);margin:20px 0 0}.heroText p{font-size:18px;line-height:2;color:#e2e8f0;margin:26px 0 0}
        .actions{display:flex;gap:16px;margin-top:36px;flex-wrap:wrap}.btn{display:inline-flex;gap:10px;align-items:center;justify-content:center;min-width:150px;padding:16px 24px;border-radius:8px;font-weight:900}.primary{background:#075fdb}.outline{border:1px solid rgba(255,255,255,.55);background:rgba(255,255,255,.08)}
        .section{padding:74px 24px}.title{text-align:center;margin-bottom:44px}.title h2{font-size:34px;font-weight:950;margin:0}.bar{width:44px;height:4px;background:#075fdb;border-radius:999px;margin:14px auto 0}
        .services{background:#fff}.grid6{max-width:1180px;margin:0 auto;display:grid;grid-template-columns:repeat(6,1fr);gap:16px}.card{background:#fff;border:1px solid #e6edf6;box-shadow:0 12px 40px rgba(15,23,42,.06);border-radius:10px;padding:34px 18px;text-align:center;min-height:238px}.card:hover{transform:translateY(-5px);transition:.25s}.icon{color:#064ca8;margin-bottom:20px}.card h3{margin:0 0 12px;color:#06408e;font-size:19px}.card p{margin:0;color:#4b5563;line-height:1.85;font-size:14px}
        .stats{background:linear-gradient(90deg,#002d62,#063d7b);color:#fff;padding:38px 24px}.statsGrid{max-width:1000px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:18px}.stat{text-align:center;border-right:1px solid rgba(255,255,255,.18)}.stat:last-child{border:0}.stat strong{display:block;font-size:34px}.stat span{color:#dbeafe;font-weight:700}
        .process{background:#fff}.procGrid{max-width:1080px;margin:0 auto;display:grid;grid-template-columns:repeat(6,1fr);gap:18px}.proc{text-align:center}.no{width:42px;height:42px;border-radius:999px;background:#064ca8;color:#fff;display:grid;place-items:center;font-weight:900;margin:0 auto 18px}.proc svg{color:#064ca8;margin-bottom:14px}.proc h3{margin:0 0 8px;font-size:18px}.proc p{margin:0;color:#64748b;line-height:1.65;font-size:14px}
        .about{background:#f8fbff}.aboutInner{max-width:1080px;margin:0 auto;display:grid;grid-template-columns:.9fr 1.1fr;gap:48px;align-items:center}.aboutImg{min-height:285px;border-radius:8px;background:linear-gradient(135deg,rgba(15,23,42,.16),rgba(37,99,235,.2)),url("https://drive.google.com/file/d/1UU5ePKMzV3dXo-A512mVbawbxzVV3tYU/view?usp=sharing&w=1400&q=80");background-size:cover;background-position:center;box-shadow:0 22px 55px rgba(15,23,42,.14)}.aboutText h2{font-size:34px;margin:0}.aboutText p{color:#475569;line-height:1.9;font-size:17px}.adv{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:30px}.advItem{text-align:center;color:#06408e;font-weight:900}.advItem span{display:block;color:#475569;font-size:13px;font-weight:600;margin-top:5px}
        .contact{background:linear-gradient(90deg,#002d62,#03254f);color:#fff;padding:60px 24px 38px}.contactGrid{max-width:1180px;margin:0 auto;display:grid;grid-template-columns:1.1fr 1fr .8fr .7fr;gap:34px}.footLogo{display:flex;align-items:center;gap:14px;margin-bottom:18px}.footLogo img{width:58px;height:58px;object-fit:contain;border-radius:14px;background:#fff;padding:5px}.footLogo strong{font-size:24px}.contact h3{margin:0 0 22px;font-size:22px}.contact p,.contact a{color:#dbeafe;line-height:1.9;font-size:15px}.contactList{display:grid;gap:10px}.contactLink{display:flex;gap:10px;align-items:flex-start}.socials{display:flex;gap:12px;margin-top:16px}.socials a{width:36px;height:36px;border-radius:999px;background:rgba(255,255,255,.12);display:grid;place-items:center}.qr img{width:150px;max-width:100%;border-radius:8px;background:#fff;padding:6px}
        .formSec{background:#f8fafc;padding:74px 24px}.formInner{max-width:1000px;margin:0 auto;text-align:center}.formFrame{margin-top:30px;overflow:hidden;border-radius:22px;background:#fff;box-shadow:0 20px 60px rgba(15,23,42,.1);border:1px solid #e5e7eb}.formFrame iframe{width:100%;min-height:2546px;border:0;display:block}.copy{border-top:1px solid rgba(255,255,255,.12);margin-top:38px;padding-top:20px;text-align:center;color:#cbd5e1;font-size:14px}
        .top{position:fixed;right:18px;bottom:18px;width:54px;height:54px;border-radius:999px;background:#0b3a75;border:1px solid rgba(255,255,255,.35);color:#fff;display:grid;place-items:center;font-size:12px;font-weight:900}
        @media(max-width:1024px){.links{display:none}.grid6{grid-template-columns:repeat(3,1fr)}.procGrid{grid-template-columns:repeat(3,1fr)}.aboutInner{grid-template-columns:1fr}.contactGrid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:640px){.brand strong{font-size:18px}.brand span{display:none}.logo{width:46px;height:46px}.quote{font-size:13px;padding:10px 12px}.hero{min-height:auto}.heroText{padding:66px 0 82px}.actions{flex-direction:column}.btn{width:100%}.grid6,.procGrid,.statsGrid,.adv,.contactGrid{grid-template-columns:1fr}.stat{border:0}.section{padding:58px 20px}}
      `}</style>

      <section id="top" className="hero">
        <div className="wrap">
          <nav className="nav">
            <a className="brand" href="#top">
              <img className="logo" src={company.logo} alt="尚順國際運通 Logo" />
              <div><strong>尚順國際運通</strong><span>SUN SHINE LOGISTICS</span></div>
            </a>
            <div className="links">
              <a href="#top">首頁</a><a href="#services">服務項目</a><a href="#process">物流流程</a><a href="#about">關於我們</a><a href="#contact">聯絡我們</a>
            </div>
            <a className="quote" href="#form"><MessageCircle size={18}/>立即詢價</a>
          </nav>

          <div className="heroText">
            <h1>尚順國際運通</h1>
            <h2>全球物流・專業運輸・值得信賴</h2>
            <p>我們提供海運、空運、陸運、小三通、報關清關及倉儲集貨服務，以專業、高效、安全的物流方案，協助您的貨物順利抵達目的地。</p>
            <div className="actions">
              <a className="btn primary" href="#form">立即詢價 <ArrowRight size={18}/></a>
              <a className="btn outline" href="#services">了解更多</a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section services">
        <div className="title"><h2>服務項目</h2><div className="bar"/></div>
        <div className="grid6">
          {services.map(([title, desc, Icon]) => (
            <div className="card" key={title}>
              <div className="icon"><Icon size={46}/></div><h3>{title}</h3><p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="stats">
        <div className="statsGrid">
          {[["150+","服務路線"],["10000+","年度運送經驗"],["500+","合作夥伴"],["99.8%","準時交貨率"]].map(([n,l])=><div className="stat" key={l}><strong>{n}</strong><span>{l}</span></div>)}
        </div>
      </section>

      <section id="process" className="section process">
        <div className="title"><h2>物流流程</h2><div className="bar"/></div>
        <div className="procGrid">
          {process.map(([title, desc, Icon], i) => (
            <div className="proc" key={title}>
              <div className="no">{String(i + 1).padStart(2, "0")}</div><Icon size={42}/><h3>{title}</h3><p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="section about">
        <div className="aboutInner">
          <div className="aboutImg"/>
          <div className="aboutText">
            <h2>關於我們</h2><div className="bar" style={{margin:"14px 0 22px"}}/>
            <p>尚順國際運通致力於提供客戶專業、穩定、高效率的國際物流服務。我們擁有豐富的國際與兩岸物流經驗，能滿足客戶多元化的物流需求，協助客戶降低成本、提升競爭力。</p>
            <div className="adv">{advantages.map(([t,d])=><div className="advItem" key={t}><CheckCircle2 size={32}/><div>{t}</div><span>{d}</span></div>)}</div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="contactGrid">
          <div>
            <div className="footLogo"><img src={company.logo} alt="尚順國際運通 Logo"/><div><strong>尚順國際運通</strong><div>SUN SHINE LOGISTICS</div></div></div>
            <p>您的全球物流夥伴，提供專業、高效、安全的運輸方案，讓貨物運送世界每一個角落。</p>
            <div className="socials">
              <a href={company.facebook} target="_blank" rel="noreferrer"><Globe2 size={18}/></a>
              <a href={company.line} target="_blank" rel="noreferrer"><MessageCircle size={18}/></a>
              <a href={`mailto:${company.email}`}><Mail size={18}/></a>
            </div>
          </div>
          <div>
            <h3>聯絡資訊</h3>
            <div className="contactList">
              <a className="contactLink" href={`tel:${company.phone}`}><Phone size={18}/>{company.phone}</a>
              <a className="contactLink" href={`mailto:${company.email}?subject=物流詢價`}><Mail size={18}/>{company.email}</a>
              <a className="contactLink" href={company.map} target="_blank" rel="noreferrer"><MapPin size={18}/>{company.address}</a>
            </div>
          </div>
          <div><h3>服務時間</h3><p>週一至週五 09:00 - 18:00<br/>週六 09:00 - 12:00<br/>週日及國定假日休息</p></div>
          <div className="qr"><h3>LINE 線上洽詢</h3><a href={company.line} target="_blank" rel="noreferrer"><img src={company.lineQr} alt="LINE 官方帳號 QR Code"/></a></div>
        </div>
        <div className="copy">© 2026 尚順國際運通有限公司 All Rights Reserved.</div>
      </section>

      <section id="form" className="formSec">
        <div className="formInner">
          <div className="title"><h2>線上物流詢價表單</h2><div className="bar"/><p>請填寫貨件資料與需求，我們收到後將盡快與您聯繫。</p></div>
          <div className="formFrame">
            <iframe src={company.form} title="尚順國際運通物流詢價表單" width="100%" height="2546" frameBorder="0" marginHeight="0" marginWidth="0">正在載入…</iframe>
          </div>
        </div>
      </section>

      <a className="top" href="#top">TOP</a>
    </div>
  );
}
