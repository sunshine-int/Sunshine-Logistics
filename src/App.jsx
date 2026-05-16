import React, { useMemo, useState } from "react";
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
  ShieldCheck,
  MessageCircle,
  PackageCheck,
  ClipboardCheck,
  Boxes,
  SearchCheck,
  HelpCircle,
  Clock,
  BadgeCheck,
  Route,
  Menu,
  X,
  Home,
  Info,
  Send,
} from "lucide-react";

const companyInfo = {
  companyName: "尚順國際運通有限公司",
  phone: "04-22529955",
  email: "sunshine0422520071@gmail.com",
  facebook: "https://www.facebook.com/SunshineTXGTW/",
  line: "https://lin.ee/P1qb3zg",
  googleMap: "https://share.google/oBZlTBPBTKYPpShK5",
  googleForm:
    "https://docs.google.com/forms/d/e/1FAIpQLScDq36dwppmix3Y2QOqR7JdtzAE9u4e-cvhiD3Nkg2LvkGzsw/viewform?embedded=true",
  logo: "/logo.png",
  lineQr: "/line-qr.png",
};

const navItems = [
  { label: "首頁", path: "/" },
  { label: "關於我們", path: "/about" },
  { label: "服務項目", path: "/services" },
  { label: "物流流程", path: "/process" },
  { label: "常見問題", path: "/faq" },
  { label: "聯絡我們", path: "/contact" },
];

const services = [
  {
    icon: Globe2,
    title: "小三通物流",
    desc: "熟悉兩岸小三通操作，依貨品品項、材質、用途與清關條件評估可行方案。",
    path: "/services",
  },
  {
    icon: Ship,
    title: "海運服務",
    desc: "整櫃、併櫃、大貨回台與一般海運安排，依重量、材積與時效規劃。",
    path: "/services",
  },
  {
    icon: Plane,
    title: "空運服務",
    desc: "急件、樣品與小批量貨件，協助快速安排航班、清關與後段配送。",
    path: "/services",
  },
  {
    icon: FileCheck,
    title: "報關清關",
    desc: "協助確認品名、材質、用途、規格、貨值等資料，降低查驗與延誤風險。",
    path: "/services",
  },
  {
    icon: Warehouse,
    title: "倉儲集貨",
    desc: "提供入倉、集貨、核對、貼標、暫存、分貨與出貨安排。",
    path: "/services",
  },
  {
    icon: Truck,
    title: "後段派送",
    desc: "台灣端配送、司機聯繫、貨態追蹤與簽收確認。",
    path: "/services",
  },
];

const advantages = [
  {
    icon: ShieldCheck,
    title: "事前風險控管",
    desc: "先確認貨件資料與清關條件，降低退件、查驗與延誤機率。",
  },
  {
    icon: Route,
    title: "路線整合能力",
    desc: "整合中國、台灣、東南亞物流路線，依需求安排合適運輸方式。",
  },
  {
    icon: BadgeCheck,
    title: "方案彈性",
    desc: "可依貨品特性安排海運、海快、空運、小三通與倉儲集貨。",
  },
  {
    icon: Clock,
    title: "貨態追蹤回報",
    desc: "重視貨況追蹤與客戶溝通，讓每一步進度更清楚。",
  },
];

const process = [
  { icon: MessageCircle, title: "提出需求", desc: "提供品名、尺寸、重量、件數、起運地與收貨地。" },
  { icon: ClipboardCheck, title: "資料確認", desc: "確認材質、用途、貨值與清關所需資料。" },
  { icon: SearchCheck, title: "評估報價", desc: "依貨況安排海運、空運、海快或小三通方案。" },
  { icon: Boxes, title: "集貨入倉", desc: "安排入倉、核對、貼標、分貨與出貨作業。" },
  { icon: FileCheck, title: "報關清關", desc: "追蹤關務進度，協助降低查驗與延誤風險。" },
  { icon: PackageCheck, title: "派送完成", desc: "安排後段派送，協助確認簽收與到貨狀況。" },
];

const faq = [
  {
    q: "詢價需要提供哪些資料？",
    a: "建議提供品名、材質、用途、尺寸、重量、件數、貨值、起運地與收貨地。資料越完整，報價與清關評估越準確。",
  },
  {
    q: "可以協助中國回台物流嗎？",
    a: "可以，依貨況可評估海運、海快、空運或小三通等方式，並協助確認清關所需資料。",
  },
  {
    q: "小三通是否所有貨品都能操作？",
    a: "不一定，需依品項、材質、用途與海關規範評估。特殊貨件建議先提供完整產品資料。",
  },
  {
    q: "可以協助倉儲與集貨嗎？",
    a: "可以，提供入倉、集貨、核對、貼標、暫存、分貨與後段派送安排。",
  },
  {
    q: "海運、空運、小三通該怎麼選？",
    a: "依貨品類型、重量材積、時效需求與清關條件評估。急件通常適合空運，大貨通常適合海運。",
  },
  {
    q: "貨件查驗或延誤怎麼辦？",
    a: "若遇海關查驗或物流延誤，我們會協助追蹤進度並回報客戶後續狀況。",
  },
];

function go(path) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

function usePath() {
  const [path, setPath] = useState(window.location.pathname);

  React.useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  return path;
}

function LinkButton({ to, children, className = "", onNavigate }) {
  return (
    <a
      href={to}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        go(to);
        onNavigate?.();
      }}
    >
      {children}
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">
        <LinkButton to="/" className="brand">
          <img className="logo" src={companyInfo.logo} alt="尚順國際運通有限公司 Logo" />
          <div>
            <div className="brand-title">{companyInfo.companyName}</div>
            <div className="brand-subtitle">SUNSHINE INTERNATIONAL LOGISTICS</div>
          </div>
        </LinkButton>

        <nav className="nav">
          {navItems.map((item) => (
            <LinkButton key={item.path} to={item.path}>
              {item.label}
            </LinkButton>
          ))}
        </nav>

        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="開啟選單">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <LinkButton
              key={item.path}
              to={item.path}
              className="mobile-link"
              onNavigate={() => setOpen(false)}
            >
              {item.label}
            </LinkButton>
          ))}
        </div>
      )}
    </header>
  );
}

function PageHero({ label, title, desc, icon: Icon = Globe2 }) {
  return (
    <section className="page-hero">
      <div className="page-hero-inner">
        <div className="tag">
          <Icon size={18} />
          {label}
        </div>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div>
            <div className="tag">
              <ShieldCheck size={18} />
              國際物流｜海運｜空運｜小三通｜報關清關
            </div>
            <h1>
              尚順國際運通
              <span>
                <span className="title-line">全球物流</span>
                <span className="title-line">專業運輸</span>
                <span className="title-line">值得信賴</span>
              </span>
            </h1>
            <p>
              提供中國、東南亞及全球進出口、小三通、海運、海快、空運、報關清關、倉儲集貨與後段派送服務。
              依照貨件特性、時效與預算，協助客戶規劃穩定且安全的物流方案。
            </p>
            <div className="hero-actions">
              <LinkButton to="/quote" className="btn-primary">
                填寫物流詢價表 <ArrowRight size={18} />
              </LinkButton>
              <a className="btn-secondary" href={companyInfo.line} target="_blank" rel="noreferrer">
                LINE 加入好友 <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-card-title">
              <div>
                <span>物流路線整合</span>
                <strong>中國⮂台灣⮂東南亞(全球)</strong>
              </div>
              <Globe2 size={38} />
            </div>
            <div className="route-box">
              <img
                src="/global-logistics.png"
                alt="全球物流路線整合"
                className="route-image"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/global-logistics.jpg";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <QuickStats />
      <ServicesPreview />
      <AdvantagesSection />
      <ProcessSection />
      <ContactCta />
    </>
  );
}

function QuickStats() {
  return (
    <section className="quick-stats">
      <div className="stat-card"><strong>中國・台灣</strong><span>兩岸物流操作</span></div>
      <div className="stat-card"><strong>東南亞</strong><span>進出口服務</span></div>
      <div className="stat-card"><strong>海空運</strong><span>多元運輸方案</span></div>
      <div className="stat-card"><strong>清關倉儲</strong><span>全流程支援</span></div>
    </section>
  );
}

function ServicesPreview() {
  return (
    <section className="section">
      <div className="section-title">
        <div className="section-label">服務項目</div>
        <h2>一站式國際物流整合服務</h2>
        <p>從貨件資料確認、倉儲集貨、運輸安排、報關清關到台灣端派送，為客戶提供清楚、穩定、可追蹤的物流服務。</p>
      </div>
      <div className="service-grid">
        {services.map((item) => {
          const Icon = item.icon;
          return (
            <LinkButton to={item.path} className="service-card" key={item.title}>
              <div className="service-icon"><Icon size={28} /></div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </LinkButton>
          );
        })}
      </div>
    </section>
  );
}

function AdvantagesSection() {
  return (
    <section className="section">
      <div className="section-title">
        <div className="section-label">公司優勢</div>
        <h2>我們的核心不是低價，而是穩定、安全、清楚</h2>
        <p>尚順國際運通重視貨件資料、清關文件、運輸時效與後段派送，協助客戶降低延誤、查驗與貨損風險。</p>
      </div>
      <div className="advantage-grid">
        {advantages.map((item) => {
          const Icon = item.icon;
          return (
            <div className="advantage-card" key={item.title}>
              <div className="advantage-icon"><Icon size={28} /></div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="process-section">
      <div className="section">
        <div className="section-title">
          <div className="section-label">物流流程</div>
          <h2>流程透明，進度清楚掌握</h2>
          <p>透過標準化作業流程，協助客戶從詢價到派送完成都能掌握進度。</p>
        </div>
        <div className="process-grid">
          {process.map((item, index) => {
            const Icon = item.icon;
            return (
              <div className="process-item" key={item.title}>
                <div className="process-no">{index + 1}</div>
                <Icon size={24} />
                <strong>{item.title}</strong>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <>
      <PageHero
        label="關於我們"
        title="每一票貨，都值得被仔細安排"
        desc="我們重視前端資料確認、清關文件完整性、貨況追蹤與後續派送安排，協助客戶降低物流風險。"
        icon={Info}
      />
      <AdvantagesSection />
      <ContactCta />
    </>
  );
}

function ServicesPage() {
  return (
    <>
      <PageHero
        label="服務項目"
        title="國際物流整合服務"
        desc="小三通、海運、空運、報關清關、倉儲集貨與後段派送，依貨況協助安排合適方案。"
        icon={PackageCheck}
      />
      <ServicesPreview />
      <ContactCta />
    </>
  );
}

function ProcessPage() {
  return (
    <>
      <PageHero
        label="物流流程"
        title="從詢價到派送，流程清楚掌握"
        desc="標準化作業流程，讓客戶清楚知道每個物流階段需要提供什麼資料。"
        icon={Route}
      />
      <ProcessSection />
      <ContactCta />
    </>
  );
}

function FaqPage() {
  return (
    <>
      <PageHero
        label="常見問題"
        title="物流詢價常見問題"
        desc="提供完整資訊，有助於加快報價、評估與後續清關作業。"
        icon={HelpCircle}
      />
      <section className="section">
        <div className="faq-grid">
          {faq.map((item) => (
            <div className="faq-card" key={item.q}>
              <h3><HelpCircle size={22} />{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function ContactPage() {
  return (
    <>
      <PageHero
        label="聯絡我們"
        title="需要報價或物流建議？"
        desc="歡迎透過電話、Email、Facebook、LINE 或線上表單與我們聯繫。"
        icon={Phone}
      />
      <ContactSection />
    </>
  );
}

function ContactSection() {
  return (
    <section className="contact-section">
      <div className="section">
        <div className="contact-box">
          <div>
            <div className="section-label light">聯絡我們</div>
            <h2>需要報價或物流建議？</h2>
            <p>
              歡迎提供品名、材質、用途、尺寸、重量、件數、貨值、出貨地與收貨地，
              我們將依貨況協助評估合適物流方案。
            </p>
          </div>

          <div className="contact-grid">
            <a className="contact-card" href={`tel:${companyInfo.phone}`}>
              <Phone size={24} />
              <div><span>服務電話</span><strong>{companyInfo.phone}</strong></div>
            </a>
            <a className="contact-card" href={`mailto:${companyInfo.email}?subject=物流詢價`}>
              <Mail size={24} />
              <div><span>電子信箱</span><strong>{companyInfo.email}</strong></div>
            </a>
            <a className="social-card fb" href={companyInfo.facebook} target="_blank" rel="noreferrer">
              <Globe2 size={22} /> Facebook 粉絲專頁
            </a>
            <a className="social-card line" href={companyInfo.line} target="_blank" rel="noreferrer">
              <MessageCircle size={22} /> LINE 加入好友
            </a>
            <a className="social-card map" href={companyInfo.googleMap} target="_blank" rel="noreferrer">
              <MapPin size={22} /> Google 地圖導航
            </a>
            <div className="line-qr">
              <img src={companyInfo.lineQr} alt="LINE 官方帳號 QR Code" />
              <div>LINE 官方帳號 QR Code</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuotePage() {
  return (
    <>
      <PageHero
        label="線上詢價"
        title="物流詢價表單"
        desc="請填寫貨件資訊與運輸需求，我們收到後將盡快與您聯繫。"
        icon={Send}
      />
      <QuoteForm />
    </>
  );
}

function QuoteForm() {
  return (
    <section className="form-section">
      <div className="form-inner">
        <div className="form-title">
          <div className="section-label">線上詢價</div>
          <h2>物流詢價表單</h2>
          <p>請填寫貨件資訊與運輸需求，我們收到後將盡快與您聯繫。</p>
        </div>

        <div className="form-frame">
          <iframe
            src={companyInfo.googleForm}
            title="尚順國際運通物流詢價表單"
            width="100%"
            height="1865"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            正在載入…
          </iframe>
        </div>
      </div>
    </section>
  );
}

function ContactCta() {
  return (
    <section className="cta-section">
      <div className="cta-box">
        <h2>想確認貨件是否可操作？</h2>
        <p>提供品名、材質、尺寸、重量、件數、貨值、起運地與收貨地，我們協助您評估合適方案。</p>
        <div className="hero-actions">
          <LinkButton to="/quote" className="btn-primary">前往詢價 <ArrowRight size={18} /></LinkButton>
          <a className="btn-secondary dark" href={companyInfo.line} target="_blank" rel="noreferrer">
            LINE 加入好友
          </a>
        </div>
      </div>
    </section>
  );
}

function NotFoundPage() {
  return (
    <>
      <PageHero label="頁面不存在" title="找不到此頁面" desc="請回到首頁或使用上方選單瀏覽網站。" icon={Home} />
      <ContactCta />
    </>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>© 2026 尚順國際運通有限公司 All Rights Reserved.</div>
        <div>國際物流｜海運｜空運｜小三通｜報關清關｜倉儲集貨</div>
      </div>
    </footer>
  );
}

function App() {
  const path = usePath();

  const Page = useMemo(() => {
    const routes = {
      "/": HomePage,
      "/about": AboutPage,
      "/services": ServicesPage,
      "/process": ProcessPage,
      "/faq": FaqPage,
      "/contact": ContactPage,
      "/quote": QuotePage,
    };
    return routes[path] || NotFoundPage;
  }, [path]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="site">
      <Styles />
      <Header />
      <main>
        <Page />
      </main>
      <Footer />
    </div>
  );
}

function Styles() {
  return (
    <style>{`
      .header{
        position:sticky;
        top:0;
        z-index:50;
        background:linear-gradient(90deg,rgba(2,10,28,.98),rgba(8,27,62,.96));
        border-bottom:1px solid rgba(147,197,253,.18);
        box-shadow:0 10px 34px rgba(2,8,23,.24);
      }
      .header-inner{
        max-width:1440px;
        margin:0 auto;
        padding:16px 52px;
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap:30px;
      }
      .brand{
        display:flex;
        align-items:center;
        gap:16px;
        flex-shrink:0;
      }
      .logo{
        width:66px;
        height:66px;
        border-radius:20px;
        background:#fff;
        object-fit:contain;
        box-shadow:0 12px 30px rgba(0,0,0,.24);
      }
      .brand-title{
        font-size:34px;
        font-weight:900;
        letter-spacing:1px;
        color:#f8fbff;
        line-height:1.05;
        text-shadow:0 3px 14px rgba(0,0,0,.3);
      }
      .brand-subtitle{
        margin-top:7px;
        color:#bfdbfe;
        font-size:12px;
        letter-spacing:2.6px;
        font-weight:800;
      }
      .nav{
        display:flex;
        align-items:center;
        justify-content:flex-end;
        gap:28px;
        font-size:22px;
        font-weight:900;
        line-height:1.2;
        flex-wrap:wrap;
        max-width:850px;
      }
      .nav a{
        color:#eaf2ff !important;
        white-space:nowrap;
        transition:.25s;
        position:relative;
        padding:8px 0;
      }
      .nav a:hover{color:#60a5fa !important}
      .nav a:first-child{color:#60a5fa !important}
      .nav a:first-child:after{
        content:"";
        position:absolute;
        left:0;
        right:0;
        bottom:0;
        height:3px;
        border-radius:999px;
        background:#2563eb;
      }
      .menu-btn{display:none;border:0;background:#2563eb;color:white;border-radius:12px;padding:10px;cursor:pointer}
      .mobile-menu{display:none}

      .hero{
        position:relative;
        overflow:hidden;
        color:white;
        min-height:790px;
        background:
          linear-gradient(90deg, rgba(2,10,28,.92) 0%, rgba(8,27,62,.80) 47%, rgba(30,64,175,.38) 100%),
          radial-gradient(circle at 82% 25%, rgba(37,99,235,.34), transparent 34%),
          url("/hero-bg.png");
        background-size:cover;
        background-position:center;
        background-repeat:no-repeat;
      }
      .hero:before{
        content:"";
        position:absolute;
        inset:0;
        background-image:
          linear-gradient(rgba(147,197,253,.10) 1px,transparent 1px),
          linear-gradient(90deg,rgba(147,197,253,.10) 1px,transparent 1px);
        background-size:58px 58px;
        opacity:.35;
      }
      .hero:after{
        content:"";
        position:absolute;
        inset:0;
        background:linear-gradient(180deg, rgba(2,10,28,.08), rgba(2,10,28,.34));
        pointer-events:none;
      }
      .hero-inner{
        position:relative;
        z-index:2;
        max-width:1360px;
        margin:0 auto;
        padding:108px 52px 132px;
        display:grid;
        grid-template-columns:.93fr 1.07fr;
        gap:76px;
        align-items:center;
      }
      .tag{
        display:inline-flex;
        align-items:center;
        gap:10px;
        padding:12px 18px;
        border-radius:999px;
        border:1px solid rgba(191,219,254,.38);
        background:rgba(15,23,42,.42);
        color:#dbeafe;
        font-weight:900;
        margin-bottom:28px;
        backdrop-filter:blur(9px);
        box-shadow:0 12px 34px rgba(2,8,23,.18);
      }
      .hero h1{
        margin:0;
        font-size:clamp(54px,6vw,88px);
        line-height:1.05;
        letter-spacing:-2px;
        text-shadow:0 10px 34px rgba(0,0,0,.38);
      }
      .hero h1 span{
        display:block;
        margin-top:20px;
        color:#bfdbfe;
        font-size:clamp(39px,4vw,58px);
        line-height:1.35;
      }
      .title-line{display:block}
      .hero p{
        max-width:720px;
        margin:32px 0 0;
        color:#f1f7ff;
        font-size:20px;
        line-height:2.05;
        font-weight:650;
        text-shadow:0 5px 18px rgba(0,0,0,.28);
      }
      .hero-actions{
        display:flex;
        flex-wrap:wrap;
        gap:18px;
        margin-top:40px;
      }
      .btn-primary,.btn-secondary{
        display:inline-flex;
        align-items:center;
        justify-content:center;
        gap:10px;
        padding:17px 28px;
        border-radius:18px;
        font-weight:900;
        transition:.25s;
        font-size:17px;
      }
      .btn-primary{background:#2563eb;color:#fff;box-shadow:0 18px 42px rgba(37,99,235,.42)}
      .btn-secondary{background:rgba(15,23,42,.26);border:1px solid rgba(255,255,255,.35);color:#fff;backdrop-filter:blur(9px)}
      .btn-secondary.dark{background:#0f172a;color:#fff;border:none}
      .btn-primary:hover,.btn-secondary:hover{transform:translateY(-2px)}

      .hero-card{
        border-radius:34px;
        padding:32px;
        background:linear-gradient(135deg,rgba(3,20,45,.78),rgba(30,64,175,.30));
        border:1px solid rgba(191,219,254,.36);
        box-shadow:0 35px 95px rgba(0,0,0,.38);
        backdrop-filter:blur(18px);
      }
      .hero-card-title{
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap:18px;
        margin-bottom:26px;
      }
      .hero-card-title strong{display:block;font-size:30px;letter-spacing:.5px}
      .hero-card-title span{color:#bfdbfe;font-weight:900;font-size:18px}
      .hero-card-title svg{color:#60a5fa;filter:drop-shadow(0 0 12px rgba(96,165,250,.45))}

      .route-box{
        position:relative;
        height:370px;
        overflow:hidden;
        border-radius:30px;
        border:1px solid rgba(191,219,254,.28);
        background:#0f172a;
        box-shadow:inset 0 0 0 1px rgba(255,255,255,.06), 0 22px 64px rgba(2,8,23,.22);
      }
      .route-image{
        width:100%;
        height:100%;
        object-fit:cover;
        display:block;
        filter:saturate(1.10) contrast(1.08) brightness(.93);
      }

      .page-hero{
        position:relative;
        overflow:hidden;
        background:
          linear-gradient(90deg, rgba(2,10,28,.92) 0%, rgba(8,27,62,.80) 47%, rgba(30,64,175,.38) 100%),
          radial-gradient(circle at 82% 25%, rgba(37,99,235,.34), transparent 34%),
          url("/hero-bg.png");
        background-size:cover;
        background-position:center;
        background-repeat:no-repeat;
        color:white;
      }
      .page-hero::before{
        content:"";
        position:absolute;
        inset:0;
        background-image:
          linear-gradient(rgba(147,197,253,.10) 1px, transparent 1px),
          linear-gradient(90deg, rgba(147,197,253,.10) 1px, transparent 1px);
        background-size:58px 58px;
        opacity:.35;
      }
      .page-hero::after{
        content:"";
        position:absolute;
        inset:0;
        background:linear-gradient(180deg, rgba(2,10,28,.08), rgba(2,10,28,.34));
        pointer-events:none;
      }
      .page-hero-inner{
        position:relative;
        z-index:2;
        max-width:1200px;
        margin:0 auto;
        padding:96px 52px;
      }
      .page-hero h1{margin:0;font-size:clamp(42px,5vw,66px);letter-spacing:-1.5px;text-shadow:0 8px 24px rgba(0,0,0,.36)}
      .page-hero p{max-width:760px;color:#dbeafe;line-height:2;font-size:19px;font-weight:650}

      .quick-stats{
        max-width:1200px;
        margin:-62px auto 0;
        position:relative;
        z-index:3;
        display:grid;
        grid-template-columns:repeat(4,1fr);
        gap:16px;
        padding:0 20px;
      }
      .stat-card{
        background:#fff;
        border:1px solid #e5e7eb;
        border-radius:24px;
        padding:22px;
        box-shadow:0 18px 50px rgba(15,23,42,.12);
      }
      .stat-card strong{display:block;font-size:28px}
      .stat-card span{color:#64748b;font-weight:700}

      .section{max-width:1200px;margin:0 auto;padding:84px 20px}
      .section-title{max-width:780px;margin-bottom:38px}
      .section-label{color:#2563eb;font-size:13px;letter-spacing:3px;font-weight:900;margin-bottom:12px}
      .section-label.light{color:#bfdbfe}
      .section h2,.contact-box h2,.form-title h2,.cta-box h2{margin:0;font-size:clamp(30px,4vw,44px);letter-spacing:-1px}
      .section-title p,.form-title p{margin:15px 0 0;color:#64748b;line-height:1.9;font-size:17px}

      .service-grid,.advantage-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
      .service-card,.advantage-card,.faq-card{display:block;background:#fff;border:1px solid #e5e7eb;border-radius:28px;padding:28px;box-shadow:0 16px 42px rgba(15,23,42,.06);transition:.25s}
      .service-card:hover,.advantage-card:hover{transform:translateY(-6px);box-shadow:0 25px 55px rgba(15,23,42,.1)}
      .service-icon,.advantage-icon{width:52px;height:52px;border-radius:18px;background:#eff6ff;color:#2563eb;display:grid;place-items:center;margin-bottom:18px}
      .service-card h3,.advantage-card h3{margin:0 0 10px;font-size:21px}
      .service-card p,.advantage-card p{margin:0;color:#64748b;line-height:1.8}

      .process-section{background:#0f172a;color:white}
      .process-section .section-title p{color:#cbd5e1}
      .process-grid{display:grid;grid-template-columns:repeat(6,1fr);gap:14px}
      .process-item{border-radius:24px;padding:20px;background:rgba(255,255,255,.09);border:1px solid rgba(255,255,255,.1)}
      .process-no{width:38px;height:38px;border-radius:50%;background:white;color:#0f172a;display:grid;place-items:center;font-weight:900;margin-bottom:14px}
      .process-item svg{color:#93c5fd;margin-bottom:10px}
      .process-item strong{display:block;margin-bottom:8px}
      .process-item p{margin:0;color:#cbd5e1;font-size:14px;line-height:1.7}

      .faq-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}
      .faq-card h3{display:flex;align-items:center;gap:10px;margin:0 0 10px;font-size:20px}
      .faq-card p{margin:0;color:#64748b;line-height:1.8}

      .contact-section{background:white}
      .contact-box{max-width:1200px;margin:0 auto;padding:52px;border-radius:34px;background:radial-gradient(circle at 85% 12%,rgba(96,165,250,.32),transparent 26%),linear-gradient(135deg,#0f172a,#0b3a75);color:white;display:grid;grid-template-columns:.95fr 1.05fr;gap:36px;box-shadow:0 28px 80px rgba(15,23,42,.22)}
      .contact-box p{color:#dbeafe;line-height:2;font-size:17px}
      .contact-grid{display:grid;gap:14px}
      .contact-card,.social-card{display:flex;align-items:center;gap:14px;padding:18px;border-radius:22px;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.15)}
      .contact-card svg,.social-card svg{color:#93c5fd;flex:none}
      .contact-card span{display:block;color:#bfdbfe;font-size:14px;margin-bottom:4px}
      .contact-card strong{display:block;word-break:break-all}
      .social-card{justify-content:center;font-weight:900}
      .fb{background:#1877f2;border:none}.line{background:#06c755;border:none}.map{background:white;color:#0f172a;border:none}.map svg{color:#2563eb}
      .line-qr{background:white;color:#0f172a;border-radius:26px;padding:18px;text-align:center}
      .line-qr img{width:170px;max-width:100%;border-radius:18px;object-fit:contain}
      .line-qr div{margin-top:10px;color:#64748b;font-size:14px;font-weight:700}

      .form-section{background:#f8fafc;padding:84px 20px}
      .form-inner{max-width:1000px;margin:0 auto}
      .form-title{text-align:center;margin-bottom:32px}
      .form-frame{overflow:hidden;border-radius:32px;border:1px solid #e5e7eb;background:white;box-shadow:0 22px 65px rgba(15,23,42,.09)}
      .form-frame iframe{display:block;width:100%;min-height:1865px;border:0}

      .cta-section{padding:84px 20px}
      .cta-box{max-width:1200px;margin:0 auto;border-radius:34px;padding:44px;background:#fff;border:1px solid #e5e7eb;box-shadow:0 20px 60px rgba(15,23,42,.08)}
      .cta-box p{color:#64748b;line-height:1.8}
      .footer{background:#0f172a;color:#cbd5e1;padding:34px 20px}
      .footer-inner{max-width:1200px;margin:0 auto;display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;font-size:14px}

      @media(max-width:1180px){
        .nav{font-size:19px;gap:16px}
        .brand-title{font-size:28px}
        .hero-inner{gap:42px}
      }
      @media(max-width:980px){
        .nav{display:none}
        .menu-btn{display:inline-flex}
        .mobile-menu{display:grid;gap:8px;padding:14px 20px;background:#071a36;border-bottom:1px solid rgba(147,197,253,.18)}
        .mobile-link{font-weight:900;padding:12px;border-radius:14px;background:rgba(255,255,255,.08);color:#fff}
        .hero-inner,.contact-box{grid-template-columns:1fr}
        .service-grid,.advantage-grid{grid-template-columns:repeat(2,1fr)}
        .process-grid{grid-template-columns:repeat(3,1fr)}
        .quick-stats{grid-template-columns:repeat(2,1fr)}
      }
      @media(max-width:640px){
        .header-inner{padding:10px 14px}
        .brand-title{font-size:17px}
        .brand-subtitle{display:none}
        .logo{width:42px;height:42px;border-radius:14px}
        .hero{min-height:auto}
        .hero-inner{padding:28px 20px 112px;gap:20px}
        .tag{margin-bottom:14px;font-size:13px;padding:8px 12px}
        .hero h1{font-size:38px;line-height:1.1}
        .hero h1 span{margin-top:16px;font-size:34px;line-height:1.35}
        .hero p{margin-top:18px;font-size:16px;line-height:1.8}
        .hero-actions{flex-direction:column;margin-top:24px;margin-bottom:82px}
        .btn-primary,.btn-secondary{width:100%;padding:15px 18px}
        .hero-card{display:none}
        .page-hero-inner{padding:56px 20px}
        .quick-stats{grid-template-columns:1fr;margin-top:-44px}
        .section{padding:64px 20px}
        .service-grid,.advantage-grid,.process-grid,.faq-grid{grid-template-columns:1fr}
        .contact-box,.cta-box{padding:28px}
        .form-section{padding:64px 14px}
        .form-frame{border-radius:22px}
        .form-frame iframe{min-height:1865px}
      }
    `}</style>
  );
}

export default App;
