import React from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  ClipboardCheck,
  SearchCheck,
  Boxes,
  FileCheck2,
  PackageCheck,
  ArrowRight,
} from "lucide-react";

const lineUrl = "https://lin.ee/P1qb3zg";
const fbUrl = "https://www.facebook.com/SunshineTXGTW/";

function SectionBadge({ children }) {
  return (
    <span className="mb-5 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold tracking-[0.2em] text-cyan-200">
      {children}
    </span>
  );
}

const processSteps = [
  {
    number: "1",
    icon: MessageCircle,
    title: "提出需求＆資料確認",
    desc: "提供品名、尺寸、重量、件數、起運地、收貨地，並確認材質、用途、貨值及清關資料。",
  },
  {
    number: "2",
    icon: SearchCheck,
    title: "評估報價",
    desc: "依貨況安排海運、空運、海快或小三通方案，提供最適合的價格與時效建議。",
  },
  {
    number: "3",
    icon: Boxes,
    title: "集貨入倉",
    desc: "安排入倉、核對、貼標、分貨與出貨作業，確保貨品安全進倉。",
  },
  {
    number: "4",
    icon: FileCheck2,
    title: "報關清關",
    desc: "追蹤關務進度，協助降低查驗與延誤風險，確保貨品順利通關。",
  },
  {
    number: "5",
    icon: PackageCheck,
    title: "派送完成",
    desc: "安排後段派送，協助確認簽收與貨況，貨品安全送達目的地。",
  },
];

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#071124] text-slate-100">
      <section className="relative px-5 py-20 md:px-10 lg:px-16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.18),transparent_34%)]" />
        <div className="absolute inset-0 -z-10 opacity-30 [background-image:radial-gradient(rgba(125,211,252,0.18)_1px,transparent_1px)] [background-size:22px_22px]" />

        <div className="mx-auto max-w-7xl">
          <SectionBadge>服務流程</SectionBadge>

          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-4xl font-black leading-tight md:text-6xl">
                <span className="bg-gradient-to-r from-cyan-100 via-white to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(59,130,246,0.35)]">
                  專業物流流程，
                  <br />
                  每一步都清楚掌握
                </span>
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-cyan-100/75 md:text-lg">
                從需求確認、評估報價、集貨入倉到報關清關與派送完成，協助客戶降低溝通成本與運輸風險。
              </p>
            </div>

            <div className="flex gap-3">
              <a
                href={lineUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-cyan-300 px-5 py-3 text-sm font-black text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:bg-white"
              >
                LINE 詢價
              </a>
              <a
                href={fbUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-cyan-300/40 px-5 py-3 text-sm font-black text-cyan-100 transition hover:-translate-y-0.5 hover:bg-cyan-300/10"
              >
                Facebook
              </a>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="relative rounded-[28px] border border-cyan-100/15 bg-white/[0.07] p-7 shadow-2xl shadow-black/20 backdrop-blur"
                >
                  {index !== processSteps.length - 1 && (
                    <ArrowRight className="absolute -right-5 top-1/2 z-10 hidden h-7 w-7 -translate-y-1/2 text-blue-300 lg:block" />
                  )}

                  <div className="mb-7 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl font-black text-slate-950 shadow-lg">
                      {step.number}
                    </div>
                  </div>

                  <Icon className="mb-6 h-12 w-12 text-blue-300 drop-shadow-[0_0_16px_rgba(96,165,250,0.45)]" />

                  <h3 className="text-2xl font-black leading-snug text-white">
                    {step.title}
                  </h3>

                  <div className="my-5 h-px w-full bg-gradient-to-r from-blue-400/0 via-blue-300 to-blue-400/0" />

                  <p className="text-base font-medium leading-8 text-cyan-50/80">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
