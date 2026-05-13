
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Ship, Plane, Warehouse, FileCheck, Truck, Globe2, Phone, Mail, MapPin,
  CheckCircle2, ArrowRight, PackageCheck, ShieldCheck, MessageCircle,
  Languages, Search, Send, Anchor, ClipboardCheck, Headphones, Container,
  Clock, Users, BarChart3, ExternalLink
} from "lucide-react";

const content = {
  zh: {
    nav: ["服務項目", "物流流程", "關於我們", "詢價聯絡"],
    quote: "立即詢價",
    heroTag: "國際貨運・兩岸物流・清關報關・倉儲派送",
    heroTitle: "尚順國際運通",
    heroSub: "全球物流・專業運輸・值得信賴",
    heroText: "提供中國與東南亞進出口、小三通、海運、海快、空運、報關清關與倉儲服務。依照貨件特性、時效與預算，規劃更穩定、更安全的物流方案。",
    primary: "立即詢價",
    secondary: "了解服務",
    servicesTitle: "服務項目",
    servicesDesc: "從集貨、運輸、清關到後段派送，提供企業客戶完整物流整合方案。",
    processTitle: "物流流程",
    processDesc: "透明化流程，讓客戶掌握貨件進度與每個關鍵節點。",
    aboutTitle: "關於尚順",
    aboutText: "物流不只是把貨送到目的地，更重要的是事前資料確認、風險控管與過程追蹤。尚順國際運通重視每一票貨件的操作細節，協助客戶降低清關延誤、貨損與溝通成本。",
    contactTitle: "需要報價或物流建議？",
    contactDesc: "請提供品名、材質、用途、尺寸、重量、件數、貨值、出貨地與收貨地，我們將協助評估合適物流方式。",
    formName: "公司名稱 / 聯絡人",
    formPhone: "聯絡電話",
    formCargo: "詢價需求，例如：品名、尺寸、重量、件數、起運地、目的地",
    submit: "送出詢價",
    seoTitle: "SEO 搜尋優化",
    seoText: "此版本已加入網站標題、描述與關鍵字設定，有助於 Google 搜尋理解網站內容。"
  },
  en: {
    nav: ["Services", "Process", "About", "Contact"],
    quote: "Get a Quote",
    heroTag: "International Freight・Cross-Strait Logistics・Customs Clearance",
    heroTitle: "Sunshine International Logistics",
    heroSub: "Global Freight Solutions You Can Trust",
    heroText: "We provide import/export logistics for China and Southeast Asia, sea freight, air freight, cross-strait logistics, customs clearance, warehousing and final-mile delivery.",
    primary: "Get a Quote",
    secondary: "View Services",
    servicesTitle: "Our Services",
    servicesDesc: "Integrated freight solutions from consolidation, transport and customs clearance to final delivery.",
    processTitle: "Logistics Process",
    processDesc: "A transparent workflow that keeps customers informed at every key milestone.",
    aboutTitle: "About Sunshine",
    aboutText: "Logistics is not only about moving cargo. It is about data accuracy, risk control and proactive shipment tracking. Sunshine Logistics helps customers reduce clearance delays, cargo damage and communication costs.",
    contactTitle: "Need a Logistics Solution?",
    contactDesc: "Provide cargo name, material, usage, dimensions, weight, quantity, value, origin and destination. We will recommend the most suitable shipping plan.",
    formName: "Company / Contact Person",
    formPhone: "Phone",
    formCargo: "Cargo inquiry, e.g. item, size, weight, quantity, origin, destination",
    submit: "Submit Inquiry",
    seoTitle: "SEO Optimization",
    seoText: "This version includes meta title, description and keywords to help Google understand your company website."
  }
};

const serviceItems = {
  zh: [
    ["海運服務", "整櫃 FCL、併櫃 LCL、一般海運回台，適合大貨與穩定出貨需求。", Ship],
    ["空運服務", "急件、樣品與高時效貨件，協助快速安排航班與後段派送。", Plane],
    ["小三通物流", "熟悉兩岸物流操作，包含茶葉小三通與一般貨品回台需求。", Globe2],
    ["報關清關", "協助確認品名、品牌、材質、用途、規格、貨值等資料，降低清關風險。", FileCheck],
    ["倉儲集貨", "提供集貨、入倉、核對、貼標、分貨與出貨安排等一站式服務。", Warehouse],
    ["後段派送", "中國境內提貨、台灣端派送、偏遠地區配送確認與貨態追蹤。", Truck],
  ],
  en: [
    ["Sea Freight", "FCL, LCL and regular sea freight solutions for stable cargo movement.", Ship],
    ["Air Freight", "Fast routing for urgent cargo, samples and time-sensitive shipments.", Plane],
    ["Cross-Strait Logistics", "Reliable logistics solutions between China and Taiwan.", Globe2],
    ["Customs Clearance", "Document review and customs data support to reduce clearance risks.", FileCheck],
    ["Warehousing", "Consolidation, receiving, checking, labeling and dispatching services.", Warehouse],
    ["Final Delivery", "Pickup, domestic trucking, final-mile delivery and shipment tracking.", Truck],
  ]
};

const processItems = {
  zh: ["聯繫洽詢", "資料確認", "物流報價", "集貨入倉", "運輸清關", "派送完成"],
  en: ["Inquiry", "Data Check", "Quotation", "Warehousing", "Transport & Customs", "Delivery"]
};

function App() {
  const [lang, setLang] = useState("zh");
  const t = content[lang];
  const services = serviceItems[lang];
  const process = processItems[lang];

  return (
    <div className="site">
      <header className="header">
        <a className="brand" href="#home">
          <div className="logoMark"><PackageCheck size={25} /></div>
          <div>
            <div className="brandZh">尚順國際運通</div>
            <div className="brandEn">SUNSHINE LOGISTICS</div>
          </div>
        </a>

        <nav className="nav">
          <a href="#services">{t.nav[0]}</a>
          <a href="#process">{t.nav[1]}</a>
          <a href="#about">{t.nav[2]}</a>
          <a href="#contact">{t.nav[3]}</a>
        </nav>

        <div className="headerActions">
          <button className="langBtn" onClick={() => setLang(lang === "zh" ? "en" : "zh")}>
            <Languages size={17} /> {lang === "zh" ? "EN" : "中文"}
          </button>
          <a className="quoteBtn" href="#contact"><MessageCircle size={18} /> {t.quote}</a>
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <div className="heroOverlay" />
          <div className="worldGrid" />
          <div className="route routeA"><span /></div>
          <div className="route routeB"><span /></div>
          <div className="route routeC"><span /></div>

          <div className="heroContent">
            <motion.div className="heroText" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
              <div className="pill"><ShieldCheck size={18} /> {t.heroTag}</div>
              <h1>{t.heroTitle}<span>{t.heroSub}</span></h1>
              <p>{t.heroText}</p>
              <div className="heroActions">
                <a className="primaryBtn" href="#contact">{t.primary} <ArrowRight size={18} /></a>
                <a className="secondaryBtn" href="#services">{t.secondary}</a>
              </div>
            </motion.div>

            <motion.div className="routeCard" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.75, delay: 0.12 }}>
              <div className="routeTop">
                <div>
                  <span>Global Route Network</span>
                  <strong>Asia Freight Hub</strong>
                </div>
                <Globe2 size={34} />
              </div>
              <div className="mapBox">
                <div className="dot taiwan">TW</div>
                <div className="dot china">CN</div>
                <div className="dot sea">SEA</div>
                <div className="mapLine line1" />
                <div className="mapLine line2" />
              </div>
              <div className="cargoIcons">
                <div><Ship /> Sea</div>
                <div><Plane /> Air</div>
                <div><Truck /> Trucking</div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="stats">
          <div><Globe2 /><strong>150+</strong><span>Routes</span></div>
          <div><Container /><strong>10,000+</strong><span>Shipments</span></div>
          <div><Users /><strong>500+</strong><span>Partners</span></div>
          <div><BarChart3 /><strong>99.8%</strong><span>Target Delivery</span></div>
        </section>

        <section id="services" className="section">
          <div className="sectionTitle">
            <span>SERVICES</span>
            <h2>{t.servicesTitle}</h2>
            <p>{t.servicesDesc}</p>
          </div>
          <div className="serviceGrid">
            {services.map(([title, desc, Icon], index) => (
              <motion.article className="serviceCard" key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.05 }}>
                <Icon className="serviceIcon" />
                <h3>{title}</h3>
                <p>{desc}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="process" className="section processSection">
          <div className="sectionTitle">
            <span>PROCESS</span>
            <h2>{t.processTitle}</h2>
            <p>{t.processDesc}</p>
          </div>
          <div className="processGrid">
            {process.map((item, index) => {
              const icons = [Headphones, ClipboardCheck, FileCheck, Warehouse, Anchor, CheckCircle2];
              const Icon = icons[index];
              return (
                <div className="processItem" key={item}>
                  <div className="processNo">{String(index + 1).padStart(2, "0")}</div>
                  <Icon />
                  <h3>{item}</h3>
                </div>
              );
            })}
          </div>
        </section>

        <section id="about" className="about">
          <div className="aboutImage">
            <div className="aboutBadge">
              <Clock size={24} />
              <strong>Reliable Freight Control</strong>
              <span>Customs · Freight · Warehouse</span>
            </div>
          </div>
          <div className="aboutText">
            <span className="eyebrow">ABOUT US</span>
            <h2>{t.aboutTitle}</h2>
            <p>{t.aboutText}</p>
            <div className="advantageList">
              <div><CheckCircle2 /> China / Taiwan / Southeast Asia Network</div>
              <div><CheckCircle2 /> Customs Documentation Support</div>
              <div><CheckCircle2 /> Warehousing & Consolidation</div>
              <div><CheckCircle2 /> Shipment Tracking Communication</div>
            </div>
          </div>
        </section>

        <section className="seo">
          <div>
            <Search />
            <h2>{t.seoTitle}</h2>
            <p>{t.seoText}</p>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="contactBox">
            <div>
              <span className="eyebrow">CONTACT</span>
              <h2>{t.contactTitle}</h2>
              <p>{t.contactDesc}</p>

              <div className="contactCards">
                <a href="tel:04-22529955" className="contactCard"><Phone /><div><span>Phone</span><strong>04-22529955</strong></div></a>
                <a href="https://line.me" target="_blank" className="contactCard"><MessageCircle /><div><span>LINE</span><strong>@sunshine-logistics</strong></div><ExternalLink size={16} /></a>
                <a href="https://facebook.com" target="_blank" className="contactCard"><Globe2 /><div><span>Facebook</span><strong>Sunshine Logistics</strong></div><ExternalLink size={16} /></a>
                <a href="https://www.google.com/maps" target="_blank" className="contactCard"><MapPin /><div><span>Google Map</span><strong>Taichung, Taiwan</strong></div><ExternalLink size={16} /></a>
              </div>
            </div>

            <form className="quoteForm" onSubmit={(e) => e.preventDefault()}>
              <input placeholder={t.formName} />
              <input placeholder={t.formPhone} />
              <input placeholder="Email" />
              <textarea placeholder={t.formCargo}></textarea>
              <button type="submit"><Send size={18} /> {t.submit}</button>
              <small>表單目前為展示版；如需寄信功能，可再串接 Formspree 或 Google Forms。</small>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footerBrand">
          <div className="logoMark"><PackageCheck size={24} /></div>
          <div>
            <strong>尚順國際運通有限公司</strong>
            <span>SUNSHINE INTERNATIONAL LOGISTICS LIMITED COMPANY</span>
          </div>
        </div>
        <div className="footerLinks">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="copyright">© 2026 Sunshine International Logistics. All Rights Reserved.</div>
      </footer>
    </div>
  );
}

export default App;
