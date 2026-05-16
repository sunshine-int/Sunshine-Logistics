import React from "react";
import { motion } from "framer-motion";
import {
  Ship,
  Plane,
  Warehouse,
  Globe2,
  MapPinned,
  Phone,
  Mail,
  ArrowRightLeft,
  PackageCheck,
  ShieldCheck,
  Truck,
} from "lucide-react";

const navItems = ["首頁", "最新消息", "關於我們", "服務項目", "聯絡我們"];

const services = [
  {
    icon: <Ship className="h-7 w-7" />,
    title: "海運／海快",
    desc: "中國、台灣、東南亞海運整合，彈性安排一般海運與海快服務。",
  },
  {
    icon: <Plane className="h-7 w-7" />,
    title: "空運快遞",
    desc: "急件、樣品、小批量貨件快速安排，協助掌握時效與清關節奏。",
  },
  {
    icon: <Warehouse className="h-7 w-7" />,
    title: "倉儲集貨",
    desc: "提供集貨、分貨、倉儲與後段配送，降低客戶跨境操作成本。",
  },
  {
    icon: <PackageCheck className="h-7 w-7" />,
    title: "報關配送",
    desc: "協助整理出貨資料、報關文件與台灣端配送安排。",
  },
];

const routeNodes = ["中國", "台灣", "東南亞", "全球"];

function App() {
  return (
    <div className="min-h-screen bg-[#061733] text-white overflow-hidden">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#1e88e5_0%,transparent_35%),linear-gradient(135deg,#061733_0%,#0b2a55_48%,#0d3d75_100%)]" />
      <div className="fixed inset-0 -z-10 opacity-25 bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#061733]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-400/20 ring-1 ring-blue-200/30">
              <Globe2 className="h-6 w-6 text-blue-100" />
            </div>
            <div>
              <p className="text-lg font-bold tracking-wide">SUNSHINE LOGISTICS</p>
              <p className="text-xs text-blue-100/80">尚順國際運通</p>
            </div>
          </div>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item}`} className="text-sm text-blue-50/80 transition hover:text-white">
                {item}
              </a>
            ))}
          </nav>

          <a
            href="#聯絡我們"
            className="hidden rounded-full bg-blue-400 px-5 py-2.5 text-sm font-semibold text-[#061733] shadow-lg shadow-blue-500/25 transition hover:bg-blue-300 md:inline-flex"
          >
            立即詢價
          </a>
        </div>
      </header>

      <main>
        <section id="首頁" className="relative mx-auto grid min-h-[calc(100vh-76px)] max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:py-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200/20 bg-white/8 px-4 py-2 text-sm text-blue-50 backdrop-blur"
            >
              <MapPinned className="h-4 w-4" />
              中國・台灣・東南亞・全球物流整合
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08 }}
              className="text-4xl font-black leading-tight tracking-tight md:text-6xl"
            >
              中國 ⇄ 台灣 ⇄
              <span className="block text-blue-200">東南亞（全球）</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.16 }}
              className="mt-6 max-w-2xl text-base leading-8 text-blue-50/82 md:text-xl"
            >
              專業國際物流、海運、空運、小三通、報關與倉儲配送服務，協助客戶完成跨境貨物流轉，讓每一票貨更安全、更清楚、更有效率。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.24 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {["海運", "空運", "小三通", "報關", "倉儲配送"].map((tag) => (
                <span key={tag} className="rounded-full border border-blue-200/25 bg-blue-300/10 px-5 py-2.5 text-sm font-semibold text-blue-50 shadow-lg shadow-blue-950/20 backdrop-blur">
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.32 }}
              className="mt-10 flex flex-col gap-3 sm:flex-row"
            >
              <a href="#服務項目" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-400 px-6 py-4 font-bold text-[#061733] shadow-xl shadow-blue-500/25 transition hover:-translate-y-0.5 hover:bg-blue-300">
                查看服務項目 <ArrowRightLeft className="h-5 w-5" />
              </a>
              <a href="#聯絡我們" className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-6 py-4 font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15">
                聯絡我們
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-8 rounded-full bg-blue-400/20 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/15 bg-white/10 p-5 shadow-2xl shadow-blue-950/40 backdrop-blur-xl md:p-7">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-blue-100/75">Global Route Network</p>
                  <h2 className="text-2xl font-black">物流路線整合圖</h2>
                </div>
                <Globe2 className="h-9 w-9 text-blue-200" />
              </div>

              <div className="relative overflow-hidden rounded-[1.6rem] border border-blue-200/15 bg-[#071d3d]/80 p-5 md:p-7">
                <div className="absolute left-8 right-8 top-1/2 hidden h-px bg-gradient-to-r from-transparent via-blue-200/80 to-transparent md:block" />
                <div className="grid gap-4 md:grid-cols-4">
                  {routeNodes.map((node, index) => (
                    <motion.div
                      key={node}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.35 + index * 0.12 }}
                      className="relative z-10 flex items-center gap-4 rounded-2xl border border-blue-200/20 bg-blue-300/10 p-4 backdrop-blur md:flex-col md:justify-center md:text-center"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-300/20 ring-1 ring-blue-100/25">
                        {node === "中國" && <Warehouse className="h-6 w-6" />}
                        {node === "台灣" && <PackageCheck className="h-6 w-6" />}
                        {node === "東南亞" && <Truck className="h-6 w-6" />}
                        {node === "全球" && <Globe2 className="h-6 w-6" />}
                      </div>
                      <div>
                        <p className="text-lg font-black">{node}</p>
                        <p className="mt-1 text-xs text-blue-100/70">
                          {index < 3 ? "雙向串聯" : "全球延伸"}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/8 p-4">
                    <Ship className="mb-3 h-7 w-7 text-blue-200" />
                    <p className="font-bold">海運路線</p>
                    <p className="mt-1 text-sm leading-6 text-blue-50/75">整合海運、海快與後段配送。</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/8 p-4">
                    <Plane className="mb-3 h-7 w-7 text-blue-200" />
                    <p className="font-bold">空運急件</p>
                    <p className="mt-1 text-sm leading-6 text-blue-50/75">快速安排樣品、急件與小批量貨物。</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="最新消息" className="mx-auto max-w-7xl px-5 py-16 md:px-8">
          <div className="rounded-[2rem] border border-white/12 bg-white/8 p-6 backdrop-blur-xl md:p-9">
            <p className="text-sm font-semibold text-blue-200">NEWS</p>
            <h2 className="mt-2 text-3xl font-black">最新消息</h2>
            <p className="mt-4 max-w-3xl leading-8 text-blue-50/78">
              我們會依照航班、船期、海關查驗與物流派送狀況，提供即時作業提醒，協助客戶提前安排出貨與收貨規劃。
            </p>
          </div>
        </section>

        <section id="關於我們" className="mx-auto max-w-7xl px-5 py-16 md:px-8">
          <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-semibold text-blue-200">ABOUT</p>
              <h2 className="mt-2 text-3xl font-black md:text-4xl">關於尚順國際運通</h2>
            </div>
            <p className="text-base leading-8 text-blue-50/78 md:text-lg">
              尚順國際運通專注跨境物流整合，服務範圍涵蓋中國、台灣、東南亞與全球物流需求。從集貨、報關、海運、空運到台灣端配送，提供客戶穩定、清楚且具效率的物流解決方案。
            </p>
          </div>
        </section>

        <section id="服務項目" className="mx-auto max-w-7xl px-5 py-16 md:px-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold text-blue-200">SERVICES</p>
            <h2 className="mt-2 text-3xl font-black md:text-4xl">服務項目</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            {services.map((service) => (
              <div key={service.title} className="rounded-[1.6rem] border border-white/12 bg-white/8 p-6 shadow-xl shadow-blue-950/20 backdrop-blur transition hover:-translate-y-1 hover:bg-white/12">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-300/15 text-blue-100 ring-1 ring-blue-100/20">
                  {service.icon}
                </div>
                <h3 className="text-xl font-black">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-blue-50/75">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="聯絡我們" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:pb-24">
          <div className="grid gap-6 rounded-[2rem] border border-blue-200/15 bg-gradient-to-br from-blue-400/18 to-white/8 p-6 shadow-2xl shadow-blue-950/30 backdrop-blur-xl md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-blue-50">
                <ShieldCheck className="h-4 w-4" /> 專業物流諮詢
              </div>
              <h2 className="text-3xl font-black md:text-4xl">需要安排貨件或詢價嗎？</h2>
              <p className="mt-4 max-w-2xl leading-8 text-blue-50/78">
                歡迎提供品名、重量、尺寸、箱數、貨值與收送地址，我們將協助評估適合的物流方式。
              </p>
            </div>

            <div className="space-y-3 rounded-3xl border border-white/12 bg-[#061733]/45 p-5">
              <a href="tel:0422529955" className="flex items-center gap-3 text-lg font-bold text-white">
                <Phone className="h-5 w-5 text-blue-200" /> 04-22529955
              </a>
              <a href="mailto:jill.her@gmail.com" className="flex items-center gap-3 text-sm text-blue-50/80">
                <Mail className="h-5 w-5 text-blue-200" /> jill.her@gmail.com
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
