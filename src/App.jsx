import { useState } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Ship,
  Plane,
  Truck,
  Warehouse,
  FileCheck2,
  MessageCircle,
  Facebook,
  Mail,
  MapPin,
  ShieldCheck,
  Route,
  Clock,
  PackageCheck,
  ClipboardCheck,
  SearchCheck,
  Boxes,
  HelpCircle,
} from "lucide-react";

const LINE_URL = "https://lin.ee/P1qb3zg";
const FB_URL = "https://www.facebook.com/SunshineTXGTW/";
const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScDq36dwppmix3Y2QOqR7JdtzAE9u4e-cvhiD3Nkg2LvkGzsw/viewform?embedded=true";

const navItems = [
  { label: "首頁", href: "#home" },
  { label: "尚順特色", href: "#about" },
  { label: "服務項目", href: "#services" },
  { label: "物流流程", href: "#process" },
  { label: "常見問題", href: "#faq" },
  { label: "聯絡我們", href: "#contact" },
];

const services = [
  {
    icon: <Ship size={38} />,
    title: "海運服務",
    text: "依貨件重量、尺寸與時效需求，規劃海運回台與跨境配送方案。",
  },
  {
    icon: <Plane size={38} />,
    title: "空運服務",
    text: "適合急件、小批量與高時效需求貨物，協助安排空運與文件確認。",
  },
  {
    icon: <Route size={38} />,
    title: "小三通",
    text: "熟悉中國、台灣與跨境操作流程，協助控管清關與派送時程。",
  },
  {
    icon: <Truck size={38} />,
    title: "海快服務",
    text: "兼顧成本與時效，適合電商、樣品、零配件與一般貨件安排。",
  },
  {
    icon: <FileCheck2 size={38} />,
    title: "報關清關",
    text: "協助確認品名、材質、用途、貨值與文件完整性，降低查驗風險。",
  },
  {
    icon: <Warehouse size={38} />,
    title: "倉儲配送",
    text: "提供集貨、入倉、核對、貼標、分貨與後段配送整合服務。",
  },
];

const advantages = [
  {
    icon: <ShieldCheck size={34} />,
    title: "風險控管",
    text: "重視前端資料確認與清關文件完整性，降低延誤與查驗風險。",
  },
  {
    icon: <Route size={34} />,
    title: "路線整合",
    text: "熟悉中國、台灣、日本、東南亞與全球物流操作流程。",
  },
  {
    icon: <PackageCheck size={34} />,
    title: "方案彈性",
    text: "可依貨品特性、時效與預算安排海運、空運、小三通與海快方案。",
  },
  {
    icon: <Clock size={34} />,
    title: "貨態追蹤",
    text: "提供貨況追蹤與後段派送安排，讓每一步進度更清楚。",
  },
];

const processSteps = [
  {
    icon: <MessageCircle size={30} />,
    title: "提出需求",
    text: "提供品名、尺寸、重量、件數、起運地與收貨地。",
  },
  {
    icon: <ClipboardCheck size={30} />,
    title: "資料確認",
    text: "確認材質、用途、貨值與清關所需資料。",
  },
  {
    icon: <SearchCheck size={30} />,
    title: "評估報價",
    text: "依貨況安排海運、空運、海快或小三通方案。",
  },
  {
    icon: <Boxes size={30} />,
    title: "集貨入倉",
    text: "安排入倉、核對、貼標、分貨與出貨作業。",
  },
  {
    icon: <FileCheck2 size={30} />,
    title: "報關清關",
    text: "追蹤清關進度，協助降低查驗與延誤風險。",
  },
  {
    icon: <Truck size={30} />,
    title: "派送完成",
    text: "安排後段配送，協助確認簽收與到貨狀況。",
  },
];

const faqs = [
  {
    q: "小三通大約多久到？",
    a: "會依貨件品項、資料完整度、清關狀況與航次安排而不同，實際時效以當次操作狀況為準。",
  },
  {
    q: "海運需要提供哪些資料？",
    a: "通常需要品名、材質、用途、尺寸、重量、件數、貨值、照片與收貨資料，特殊貨品需另行確認。",
  },
  {
    q: "可以協助報關清關嗎？",
    a: "可以，我們會依貨件狀況協助確認文件與清關需求，降低資料不齊造成的延誤。",
  },
  {
    q: "可以追蹤貨態嗎？",
    a: "可以，貨件操作後可依清關、航次、派送進度提供狀態回覆。",
  },
];

function SectionBadge({ children }) {
  return (
    <p className="mb-4 inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-black tracking-[0.22em] text-cyan-200">
      {children}
    </p>
  );
}

function DarkOverlay({ light = false }) {
  return (
    <>
      <div className="absolute inset-0 bg-[#031226]/88" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(56,189,248,.22),transparent_32%),radial-gradient(circle_at_18%_86%,rgba(37,99,235,.24),transparent_38%)]" />
      <div
        className={`absolute inset-0 opacity-${light ? "20" : "35"} bg-[linear-gradient(rgba(125,211,252,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,.12)_1px,transparent_1px)] bg-[size:56px_56px]`}
      />
    </>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#061427] font-sans text-white">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-cyan-300/15 bg-[#071426]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4">
          <a href="#home" className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="尚順國際運通 Logo"
              className="h-14 w-14 rounded-2xl bg-white object-contain shadow-xl"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <div>
              <div className="text-2xl font-black tracking-wide md:text-3xl">
                尚順國際運通有限公司
              </div>
              <div className="mt-1 text-xs font-bold tracking-[0.26em] text-blue-200">
                SUNSHINE INTERNATIONAL LOGISTICS
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-lg font-black md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-blue-100 transition hover:text-cyan-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            className="rounded-xl bg-blue-600 p-3 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="開啟選單"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="grid gap-2 border-t border-cyan-300/15 bg-[#071426] p-4 md:hidden">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl bg-white/5 px-4 py-3 font-bold text-blue-100"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      <main>
        <section
          id="home"
          className="relative min-h-screen overflow-hidden bg-[url('/hero-bg.png')] bg-cover bg-center pt-24"
        >
          <DarkOverlay />

          <div className="relative z-10 mx-auto grid min-h-[calc(100vh-96px)] max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <SectionBadge>國際物流｜海運｜空運｜小三通｜報關清關</SectionBadge>

              <h1 className="text-5xl font-black leading-tight tracking-tight text-white md:text-7xl">
                每一票貨，
                <br />
                都值得被仔細安排
              </h1>

              <p className="mt-7 max-w-3xl text-lg font-medium leading-loose text-blue-100 md:text-2xl">
                重視資料確認、清關流程、運輸安排與後段派送，
                協助客戶降低物流風險與延誤。
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={FORM_URL.replace("?embedded=true", "")}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-blue-600 px-7 py-4 text-lg font-black text-white shadow-2xl shadow-blue-900/40 transition hover:-translate-y-1 hover:bg-blue-500"
                >
                  填寫物流詢價表
                </a>
                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-cyan-300/30 bg-white/10 px-7 py-4 text-lg font-black text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
                >
                  <MessageCircle size={22} />
                  LINE 加入好友
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.15 }}
              className="rounded-[2.4rem] border border-cyan-300/25 bg-[#0f2747]/65 p-6 shadow-2xl shadow-black/35 backdrop-blur-xl"
            >
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-lg font-black text-cyan-200">物流路線整合</p>
                  <h2 className="mt-2 text-3xl font-black text-white md:text-4xl">
                    中國・台灣・東南亞・全球
                  </h2>
                </div>
                <Globe2 className="text-cyan-300" size={46} />
              </div>

              <div className="overflow-hidden rounded-[1.8rem] border border-cyan-300/20 bg-[#071426]">
                <img
                  src="/global-logistics.png"
                  alt="全球物流路線整合"
                  className="h-full min-h-[260px] w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/hero-bg.png";
                  }}
                />
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="relative overflow-hidden bg-[url('/hero-bg.png')] bg-cover bg-center px-5 py-24">
          <DarkOverlay light />

          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-[#0f2747]/70 shadow-2xl">
              <img
                src="/about-logistics.jpg"
                alt="專業物流控管"
                className="h-[360px] w-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/hero-bg.png";
                }}
              />
            </div>

            <div>
              <SectionBadge>尚順特色</SectionBadge>
              <h2 className="text-4xl font-black leading-tight text-cyan-200 md:text-6xl">
                我們的核心不是低價，
                <br />
                而是穩定、安全、清楚
              </h2>
              <p className="mt-7 text-lg leading-loose text-blue-100">
                物流不只是把貨送到目的地，更重要的是事前確認、風險控管與過程追蹤。
                尚順國際運通重視每一票貨件的資料完整性與操作細節，
                協助客戶減少清關延誤、貨損與溝通成本。
              </p>

              <div className="mt-8 grid gap-4">
                {advantages.map((item) => (
                  <div key={item.title} className="flex gap-4 rounded-2xl border border-cyan-300/15 bg-white/5 p-4">
                    <div className="text-cyan-300">{item.icon}</div>
                    <div>
                      <h3 className="font-black text-white">{item.title}</h3>
                      <p className="mt-1 text-blue-100">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="relative overflow-hidden bg-[url('/hero-bg.png')] bg-cover bg-center px-5 py-24">
          <DarkOverlay light />

          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="mb-14 max-w-4xl">
              <SectionBadge>服務項目</SectionBadge>
              <h2 className="text-4xl font-black leading-tight text-cyan-200 md:text-6xl">
                跨境物流整合方案
              </h2>
              <p className="mt-6 text-lg leading-loose text-blue-100">
                依貨件特性、清關條件、時效與預算，安排最合適物流方式。
              </p>
            </div>

            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {services.map((item, index) => (
                <motion.div
                  whileHover={{ y: -8 }}
                  key={item.title}
                  className="rounded-[1.8rem] border border-cyan-300/20 bg-[#0f2747]/75 p-8 shadow-2xl shadow-black/20 backdrop-blur"
                >
                  <div className="mb-6 text-cyan-300">{item.icon}</div>
                  <h3 className="mb-4 text-2xl font-black text-white">{item.title}</h3>
                  <p className="leading-loose text-blue-100">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="relative overflow-hidden bg-[url('/hero-bg.png')] bg-cover bg-center px-5 py-24">
          <DarkOverlay light />

          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="mb-14 max-w-5xl">
              <SectionBadge>物流流程</SectionBadge>

              <h2 className="text-4xl font-black leading-tight !text-cyan-100 md:text-6xl drop-shadow-[0_0_18px_rgba(125,211,252,.22)]">
                流程透明，
                <br />
                進度清楚掌握
              </h2>

              <p className="mt-6 max-w-4xl text-lg font-medium leading-loose text-blue-100">
                透過標準化作業流程，協助客戶從詢價、資料確認、報價、集貨、
                清關到派送完成，每一步都能清楚掌握。
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {processSteps.map((item, index) => (
                <motion.div
                  whileHover={{ y: -8 }}
                  key={item.title}
                  className="group rounded-[1.6rem] border border-cyan-300/25 bg-gradient-to-br from-[#102544]/95 to-[#071426]/95 p-6 shadow-2xl shadow-black/25 backdrop-blur-xl transition"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100 text-lg font-black text-[#071426] shadow-[0_0_24px_rgba(125,211,252,.28)]">
                    {index + 1}
                  </div>

                  <div className="mb-4 text-cyan-200 transition group-hover:text-cyan-100">
                    {item.icon}
                  </div>

                  <h3 className="mb-3 text-xl font-black text-white">
                    {item.title}
                  </h3>

                  <p className="leading-loose text-blue-100">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="relative overflow-hidden bg-[url('/hero-bg.png')] bg-cover bg-center px-5 py-24">
          <DarkOverlay light />

          <div className="relative z-10 mx-auto max-w-5xl">
            <div className="mb-14 text-center">
              <SectionBadge>常見問題</SectionBadge>
              <h2 className="text-4xl font-black text-cyan-200 md:text-6xl">
                物流問題快速解答
              </h2>
            </div>

            <div className="grid gap-5">
              {faqs.map((item) => (
                <div
                  key={item.q}
                  className="rounded-[1.6rem] border border-cyan-300/20 bg-[#0f2747]/75 p-7 backdrop-blur"
                >
                  <div className="mb-3 flex items-center gap-3 text-xl font-black text-white">
                    <HelpCircle className="text-cyan-300" />
                    {item.q}
                  </div>
                  <p className="leading-loose text-blue-100">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="relative overflow-hidden bg-[url('/hero-bg.png')] bg-cover bg-center px-5 py-24">
          <DarkOverlay light />

          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="mb-14 text-center">
              <SectionBadge>聯絡我們</SectionBadge>
              <h2 className="text-4xl font-black text-cyan-200 md:text-6xl">
                立即聯絡尚順國際運通
              </h2>
              <p className="mt-5 text-lg text-blue-100">
                提供完整資料，能協助更快評估報價與操作可行性。
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-[2rem] border border-cyan-300/20 bg-[#0f2747]/75 p-8 shadow-2xl backdrop-blur">
                <h3 className="text-3xl font-black text-white">尚順國際運通有限公司</h3>
                <p className="mt-5 leading-loose text-blue-100">
                  中國進出口｜東南亞物流｜全球配送
                  <br />
                  海運｜空運｜小三通｜報關清關｜倉儲配送
                </p>

                <div className="mt-8 grid gap-4">
                  <a
                    href={LINE_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-2xl bg-green-500 px-6 py-4 font-black text-black transition hover:-translate-y-1"
                  >
                    <MessageCircle />
                    LINE 加好友
                  </a>

                  <a
                    href={FB_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-2xl bg-blue-600 px-6 py-4 font-black text-white transition hover:-translate-y-1"
                  >
                    <Facebook />
                    Facebook 粉絲專頁
                  </a>

                  <a
                    href="mailto:sunshine0422520071@gmail.com"
                    className="flex items-center gap-3 rounded-2xl border border-cyan-300/25 bg-white/10 px-6 py-4 font-black text-white transition hover:-translate-y-1"
                  >
                    <Mail />
                    sunshine0422520071@gmail.com
                  </a>

                  <div className="flex items-center gap-3 rounded-2xl border border-cyan-300/25 bg-white/10 px-6 py-4 font-black text-white">
                    <MapPin />
                    台中｜中國｜東南亞｜全球物流服務
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl">
                <iframe
                  src={FORM_URL}
                  width="100%"
                  height="1200"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  title="物流詢價表單"
                >
                  正在載入…
                </iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-cyan-300/15 bg-[#071426] px-5 py-10 text-center text-blue-100">
        <p className="font-black text-white">尚順國際運通有限公司</p>
        <p className="mt-2">海運｜空運｜小三通｜報關清關｜倉儲配送</p>
      </footer>
    </div>
  );
}
