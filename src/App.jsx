import React from "react";
import { motion } from "framer-motion";
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
  Facebook,
  MessageCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const companyInfo = {
  phone: "04-22529955",
  email: "sunshine0422520071@gmail.com",
  facebook: "https://www.facebook.com/SunshineTXGTW/",
  line: "https://lin.ee/Dlq7FY2",
  logo: "/logo.png",
  lineQr: "/line-qr.png",
};

const services = [
  { icon: Ship, title: "中國／東南亞進出口", desc: "協助中國、東南亞進出口物流安排，整合海運、空運、清關與後段派送。" },
  { icon: Globe2, title: "小三通物流", desc: "熟悉兩岸物流操作，包含一般貨品與茶葉小三通等需求，協助客戶穩定回台。" },
  { icon: Truck, title: "海運／海快／特殊貨件", desc: "依貨件重量、材積、品項與時效需求，規劃合適物流方案。" },
  { icon: Plane, title: "空運服務", desc: "適合急件、樣品、小批量貨件，協助掌握時效與成本。" },
  { icon: FileCheck, title: "報關清關", desc: "協助確認品名、材質、用途、貨值、規格等資料，降低清關風險。" },
  { icon: Warehouse, title: "倉儲與集貨", desc: "提供集貨、倉儲、核對、出貨安排與後段物流追蹤。" },
];

const flow = ["需求詢問", "資料確認", "物流報價", "集貨入倉", "報關清關", "派送到府"];

const advantages = [
  "熟悉中國、東南亞與兩岸物流操作",
  "依貨況提供海運、海快、空運等彈性方案",
  "重視貨件安全、包裝提醒與清關資料完整性",
  "協助追蹤貨態，讓客戶掌握每一步進度",
];

export default function SunshineLogisticsSite() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-sm">
              <img src={companyInfo.logo} alt="尚順國際運通 Logo" className="h-full w-full object-cover" />
            </div>
            <div>
              <div className="text-lg font-bold tracking-tight">尚順國際運通</div>
              <div className="text-xs uppercase tracking-[0.22em] text-slate-500">Sunshine International Logistics</div>
            </div>
          </div>

          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
            <a href="#services" className="hover:text-slate-950">服務項目</a>
            <a href="#flow" className="hover:text-slate-950">物流流程</a>
            <a href="#about" className="hover:text-slate-950">關於我們</a>
            <a href="#contact" className="hover:text-slate-950">聯絡我們</a>
          </nav>

          <a href={`tel:${companyInfo.phone}`}>
            <Button className="rounded-2xl bg-slate-900 px-5 hover:bg-slate-800">立即詢價</Button>
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,23,42,0.10),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
              <ShieldCheck className="h-4 w-4" />
              專業物流｜清關報關｜倉儲派送
            </div>
            <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-6xl">
              讓每一票貨，
              <span className="block text-slate-700">都安全、準時、順利抵達。</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              尚順國際運通提供中國與東南亞進出口、小三通、海運、海快、空運、報關清關與倉儲服務，依照貨件特性規劃合適物流方案，協助客戶降低運輸風險、提升出貨效率。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact">
                <Button size="lg" className="w-full rounded-2xl bg-slate-900 px-7 text-base hover:bg-slate-800 sm:w-auto">
                  我要詢價 <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="#services">
                <Button size="lg" variant="outline" className="w-full rounded-2xl border-slate-300 px-7 text-base sm:w-auto">
                  查看服務項目
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.65, delay: 0.1 }}>
            <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-2xl">
              <div className="grid gap-4">
                <div className="rounded-3xl bg-white/10 p-5 backdrop-blur">
                  <div className="text-sm text-slate-300">主要服務</div>
                  <div className="mt-2 text-2xl font-bold">國際貨運整合方案</div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">從詢價、集貨、清關到後段派送，協助客戶掌握貨況與時程。</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-3xl bg-white p-5 text-slate-950">
                    <Ship className="mb-4 h-7 w-7" />
                    <div className="text-xl font-bold">海運</div>
                    <div className="mt-1 text-sm text-slate-500">大貨穩定回台</div>
                  </div>
                  <div className="rounded-3xl bg-white p-5 text-slate-950">
                    <Plane className="mb-4 h-7 w-7" />
                    <div className="text-xl font-bold">空運</div>
                    <div className="mt-1 text-sm text-slate-500">急件快速安排</div>
                  </div>
                  <div className="rounded-3xl bg-white p-5 text-slate-950">
                    <FileCheck className="mb-4 h-7 w-7" />
                    <div className="text-xl font-bold">清關</div>
                    <div className="mt-1 text-sm text-slate-500">資料完整控風險</div>
                  </div>
                  <div className="rounded-3xl bg-white p-5 text-slate-950">
                    <Warehouse className="mb-4 h-7 w-7" />
                    <div className="text-xl font-bold">倉儲</div>
                    <div className="mt-1 text-sm text-slate-500">集貨出貨管理</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-10 max-w-2xl">
          <div className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-slate-500">Services</div>
          <h2 className="text-3xl font-black tracking-tight md:text-4xl">服務項目</h2>
          <p className="mt-4 text-slate-600">依照不同貨品、重量、材積、時效與清關需求，協助安排合適的物流方式。</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.05 }}>
                <Card className="h-full rounded-3xl border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <CardContent className="p-7">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100">
                      <Icon className="h-6 w-6 text-slate-900" />
                    </div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section id="flow" className="bg-slate-900 px-5 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <div className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-slate-400">Process</div>
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">物流流程</h2>
            <p className="mt-4 text-slate-300">標準化作業流程，讓客戶清楚掌握每個階段。</p>
          </div>
          <div className="grid gap-4 md:grid-cols-6">
            {flow.map((step, index) => (
              <div key={step} className="relative rounded-3xl bg-white/10 p-5 backdrop-blur">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-black text-slate-950">{index + 1}</div>
                <div className="font-bold">{step}</div>
                {index < flow.length - 1 && <ArrowRight className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-slate-400 md:block" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-2">
        <div>
          <div className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-slate-500">Why Choose Us</div>
          <h2 className="text-3xl font-black tracking-tight md:text-4xl">為什麼選擇尚順？</h2>
          <p className="mt-5 leading-8 text-slate-600">
            物流不只是把貨送到目的地，更重要的是事前確認、風險控管與過程追蹤。尚順重視每一票貨件的資料完整性與操作細節，協助客戶減少清關延誤、貨損與溝通成本。
          </p>
        </div>
        <div className="grid gap-4">
          {advantages.map((item) => (
            <div key={item} className="flex items-start gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-slate-900" />
              <div className="font-medium leading-7 text-slate-700">{item}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-white px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl md:grid-cols-2 md:p-12">
          <div>
            <div className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-slate-400">Contact</div>
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">需要報價或物流建議？</h2>
            <p className="mt-5 leading-8 text-slate-300">
              歡迎提供品名、材質、用途、尺寸、重量、件數、貨值與出貨地／收貨地，我們將依貨況協助評估合適物流方案。
            </p>
          </div>

          <div className="grid gap-4">
            <a href={`tel:${companyInfo.phone}`} className="flex items-center gap-4 rounded-3xl bg-white p-5 text-slate-950 transition hover:bg-slate-100">
              <Phone className="h-6 w-6" />
              <div>
                <div className="text-sm text-slate-500">服務電話</div>
                <div className="text-xl font-black">{companyInfo.phone}</div>
              </div>
            </a>

            <a href={`mailto:${companyInfo.email}?subject=物流詢價`} className="flex items-center gap-4 rounded-3xl bg-white p-5 text-slate-950 transition hover:bg-slate-100">
              <Mail className="h-6 w-6" />
              <div>
                <div className="text-sm text-slate-500">Email</div>
                <div className="break-all text-lg font-bold">{companyInfo.email}</div>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-3xl bg-white/10 p-5">
              <MapPin className="h-6 w-6" />
              <div>
                <div className="text-sm text-slate-400">服務範圍</div>
                <div className="text-xl font-bold">中國／台灣／東南亞進出口物流</div>
              </div>
            </div>

            <a href={companyInfo.facebook} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 rounded-2xl bg-[#1877F2] px-6 py-4 font-bold text-white transition hover:opacity-90">
              <Facebook className="h-5 w-5" />
              Facebook 粉絲專頁
            </a>

            <a href={companyInfo.line} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 rounded-2xl bg-[#06C755] px-6 py-4 font-bold text-white transition hover:opacity-90">
              <MessageCircle className="h-5 w-5" />
              LINE 即時詢價
            </a>

            <div className="rounded-3xl bg-white p-4 text-center text-slate-950">
              <img src={companyInfo.lineQr} alt="LINE QR Code" className="mx-auto w-40 rounded-2xl" />
              <div className="mt-3 text-sm text-slate-500">LINE QR Code</div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto mb-10 max-w-7xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-slate-500">網站資料修改方式</div>
        <div className="grid gap-3 text-sm leading-7 text-slate-600">
          <div>• Logo 圖片：替換 public/logo.png</div>
          <div>• LINE QR Code：替換 public/line-qr.png</div>
          <div>• Facebook 連結：修改 companyInfo.facebook</div>
          <div>• LINE 連結：修改 companyInfo.line</div>
          <div>• 公司電話：修改 companyInfo.phone</div>
          <div>• Email：修改 companyInfo.email</div>
        </div>
      </div>

      <footer className="border-t border-slate-200 bg-slate-50 px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-sm text-slate-500 md:flex-row">
          <div>© 2026 尚順國際運通有限公司. All rights reserved.</div>
          <div>International Freight Forwarding｜Customs Clearance｜Warehousing</div>
        </div>
      </footer>
    </div>
  );
}
