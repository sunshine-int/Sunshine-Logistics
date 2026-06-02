import React from 'react'
import { ArrowRight, Phone, MessageCircle, Globe2, Ship, Plane, Warehouse, CheckCircle2, Menu, X } from 'lucide-react'

const company = {
  phone: '0422529955',
  phoneText: '04-22529955',
  line: 'https://lin.ee/P1qb3zg',
  fb: 'https://www.facebook.com/SunshineTXGTW/',
  email: 'sunshine0422520071@gmail.com',
  map: 'https://www.google.com/maps/search/?api=1&query=%E5%B0%9A%E9%A0%86%E5%9C%8B%E9%9A%9B%E9%81%8B%E9%80%9A',
}

function Button({ href, children, variant = 'primary', className = '' }) {
  const base = 'group inline-flex w-full items-center justify-center gap-2 rounded-[1.8rem] px-6 py-4 text-base font-black transition duration-300 sm:w-auto'
  const styles = {
    primary: 'bg-cyan-300 text-slate-950 shadow-[0_0_30px_rgba(103,232,249,0.35)] hover:bg-cyan-200',
    secondary: 'border border-white/25 bg-white/8 text-white backdrop-blur hover:bg-white/15',
    line: 'bg-cyan-300 text-slate-950 shadow-[0_0_30px_rgba(103,232,249,0.35)] hover:bg-cyan-200',
  }
  return <a href={href} className={`${base} ${styles[variant]} ${className}`}>{children}</a>
}

function Header() {
  const [open, setOpen] = React.useState(false)
  const links = [['首頁','#home'], ['關於我們','#about'], ['服務項目','#services'], ['物流流程','#process'], ['聯絡我們','#contact']]
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#home" className="flex items-center gap-3">
          <img src="/logo.png" onError={(e)=>{e.currentTarget.style.display='none'}} className="h-12 w-12 rounded-xl bg-cyan-100 object-contain p-1" />
          <div>
            <div className="text-lg font-black tracking-wide text-white">尚順國際運通</div>
            <div className="text-xs text-cyan-100 md:text-sm">Sunshine International Logistics</div>
          </div>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map(([name,href]) => <a key={name} href={href} className="text-sm font-bold text-white/75 hover:text-cyan-200">{name}</a>)}
          <a href={company.line} className="rounded-full bg-cyan-300 px-5 py-2 text-sm font-black text-slate-950">LINE 詢價</a>
        </nav>
        <button className="text-white md:hidden" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
      </div>
      {open && <div className="border-t border-white/10 bg-slate-950 px-5 py-4 md:hidden">
        {links.map(([name,href]) => <a key={name} href={href} onClick={()=>setOpen(false)} className="block rounded-xl px-3 py-3 font-bold text-white/85 hover:bg-white/10">{name}</a>)}
      </div>}
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden px-5 pt-32 pb-40 md:px-10 md:pt-40 md:pb-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,.22),transparent_32%),linear-gradient(135deg,#06142b_0%,#0b2447_45%,#081326_100%)]" />
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:46px_46px]" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <div className="mb-7 inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-200/35 bg-cyan-200/10 px-5 py-3 text-sm font-black text-cyan-100 backdrop-blur md:text-base">
            <Globe2 size={18}/> 中國貨回台｜淘寶集運｜拼多多集運｜1688集運
          </div>
          <h1 className="text-[2.55rem] font-black leading-tight tracking-tight text-cyan-100 md:text-7xl">
            專業中國台灣<br />進出口物流
          </h1>
          <h2 className="mt-4 text-[2.25rem] font-black leading-tight text-cyan-200 md:text-6xl">網購集運服務</h2>
          <p className="mt-6 text-lg leading-9 text-white/90 md:text-xl">
            尚順國際運通提供中國貨回台、淘寶集運回台、拼多多集運回台、1688集運回台、小三通物流、茶葉小三通、東南亞／全球物流與倉儲服務。
          </p>
          <p className="mt-4 text-base leading-8 text-white/70 md:text-lg">
            從集貨入倉、合併出貨、報關清關到台灣派送，協助您規劃更合適的物流方案。
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Button href="#quote">立即詢價 <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" /></Button>
            <Button href="#process" variant="secondary">查看集運流程</Button>
            <Button href={company.line} variant="line"><MessageCircle size={20}/> LINE 詢價</Button>
            <Button href={`tel:${company.phone}`} variant="secondary"><Phone size={18}/>{company.phoneText}</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

const services = [
  ['中國貨回台 / 網購集運', '淘寶、拼多多、1688、阿里巴巴集貨回台，協助整合出貨。', Ship],
  ['小三通 / 茶葉小三通', '依貨況評估路線、包裝與清關需求，降低運輸風險。', CheckCircle2],
  ['海運 / 空運 / 海快', '依時效、重量、材積與品項，協助安排合適運輸方式。', Plane],
  ['倉儲 / 合併出貨', '集貨入倉、點貨、合併、安排航次與台灣派送。', Warehouse],
]

function Services() {
  return <section id="services" className="bg-slate-950 px-5 py-20 text-white md:px-10">
    <div className="mx-auto max-w-7xl">
      <h2 className="text-3xl font-black md:text-5xl">服務項目</h2>
      <p className="mt-4 max-w-2xl text-white/65">從中國、台灣到東南亞／全球物流，協助您清楚掌握每個流程。</p>
      <div className="mt-10 grid gap-5 md:grid-cols-4">
        {services.map(([title, desc, Icon]) => <div key={title} className="rounded-3xl border border-white/10 bg-white/[.04] p-6">
          <Icon className="mb-5 text-cyan-200" size={34}/>
          <h3 className="text-xl font-black text-cyan-100">{title}</h3>
          <p className="mt-3 leading-7 text-white/65">{desc}</p>
        </div>)}
      </div>
    </div>
  </section>
}

function Process() {
  const steps = ['需求確認', '提供資料與照片', '評估報價', '集貨入倉', '報關清關', '台灣派送']
  return <section id="process" className="bg-[#071b35] px-5 py-20 text-white md:px-10">
    <div className="mx-auto max-w-7xl">
      <h2 className="text-3xl font-black md:text-5xl">集運流程</h2>
      <div className="mt-10 grid gap-4 md:grid-cols-6">
        {steps.map((s,i)=><div key={s} className="rounded-3xl border border-cyan-200/15 bg-cyan-200/5 p-5"><div className="text-sm font-black text-cyan-200">STEP {i+1}</div><div className="mt-2 font-black">{s}</div></div>)}
      </div>
    </div>
  </section>
}

function Quote() {
  return <section id="quote" className="bg-slate-950 px-5 py-20 text-white md:px-10">
    <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
      <div>
        <h2 className="text-3xl font-black md:text-5xl">立即詢價</h2>
        <p className="mt-4 leading-8 text-white/70">請提供品名、材質、用途、數量、尺寸重量、產品照片與貨值，以利評估路線與費用。</p>
        <div className="mt-8 flex flex-col gap-4">
          <Button href={company.line} variant="line"><MessageCircle/> 加 LINE 詢價</Button>
          <Button href={`tel:${company.phone}`} variant="secondary"><Phone/> {company.phoneText}</Button>
        </div>
      </div>
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white p-2">
        <iframe title="線上詢價表單" src="https://docs.google.com/forms/d/e/1FAIpQLScDq36dwppmix3Y2QOqR7JdtzAE9u4e-cvhiD3Nkg2LvkGzsw/viewform?embedded=true" className="h-[720px] w-full rounded-2xl" frameBorder="0">正在載入…</iframe>
      </div>
    </div>
  </section>
}

function Contact() {
  return <section id="contact" className="safe-bottom bg-[#06142b] px-5 py-16 text-white md:px-10">
    <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-white/[.04] p-6 md:p-10">
      <h2 className="text-3xl font-black">聯絡我們</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <a className="rounded-2xl bg-white/8 p-5" href={`tel:${company.phone}`}>電話：{company.phoneText}</a>
        <a className="rounded-2xl bg-white/8 p-5" href={company.line}>LINE：立即詢價</a>
        <a className="rounded-2xl bg-white/8 p-5" href={company.map}>Google 地圖：搜尋尚順國際運通</a>
      </div>
    </div>
  </section>
}

export default function App() {
  return <div>
    <Header />
    <Hero />
    <Services />
    <Process />
    <Quote />
    <Contact />
    <a href={company.line} className="fixed bottom-24 right-5 z-50 hidden rounded-full bg-cyan-300 px-5 py-4 font-black text-slate-950 shadow-2xl md:inline-flex"><MessageCircle className="mr-2"/>LINE 詢價</a>
  </div>
}
