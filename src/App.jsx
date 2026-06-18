import {
  Anchor,
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Clock3,
  FileCheck,
  Globe2,
  MapPin,
  MessageCircle,
  PackageCheck,
  Phone,
  Plane,
  SearchCheck,
  ShieldCheck,
  Ship,
  ShoppingCart,
  Truck,
  Warehouse,
} from 'lucide-react'

const company = {
  name: '尚順國際運通有限公司',
  en: 'Sunshine International Logistics Co., Ltd.',
  phone: '04-22529955',
  email: 'sunshine0422520071@gmail.com',
  address: '台中市西屯區龍洋巷17之7號',
  line: 'https://lin.ee/Dlq7FY2',
  fb: 'https://www.facebook.com/SunshineTXGTW/',
  map: 'https://www.google.com/maps/search/?api=1&query=尚順國際運通',
  mapEmbed: 'https://www.google.com/maps?q=尚順國際運通&output=embed',
  formEmbed: 'https://docs.google.com/forms/d/e/1FAIpQLScDq36dwppmix3Y2QOqR7JdtzAE9u4e-cvhiD3Nkg2LvkGzsw/viewform?embedded=true',
}

const nav = [
  ['公司簡介', '#about'],
  ['服務項目', '#services'],
  ['物流流程', '#process'],
  ['網購集運', '#shopping'],
  ['常見問題', '#faq'],
  ['聯絡我們', '#contact'],
]

const strengths = [
  ['穩定安排', '依貨物特性、時效與預算規劃運輸方式，讓每票貨件更穩定。', ShieldCheck],
  ['資料把關', '協助確認品名、材質、用途、貨值、尺寸重量與包裝資訊。', ClipboardCheck],
  ['進度透明', '從入倉、集貨、清關到派送，協助客戶掌握貨況。', SearchCheck],
]

const services = [
  ['中國進出口', '中國各地貨件集貨入倉，協助安排回台、清關與台灣端配送。', Ship],
  ['小三通物流', '一般貨、茶葉小三通與特殊需求貨件，可依貨況協助評估。', Anchor],
  ['海運／海快／海特', '依貨量、時效與成本，安排一般海運、海快或特殊渠道。', Truck],
  ['空運服務', '急件、樣品、小批量貨件快速安排，協助掌握出貨時效。', Plane],
  ['報關清關', '協助確認文件資料，降低查驗、補件與清關延誤風險。', FileCheck],
  ['倉儲配送', '提供集貨、理貨、合併出貨、暫存與台灣端派送追蹤。', Warehouse],
]

const shopping = [
  ['淘寶集運回台', '商品先寄至中國集貨倉，確認到貨後合併安排回台。'],
  ['拼多多集運回台', '多筆小包集中入倉，避免分散寄送造成追蹤困難。'],
  ['阿里巴巴／1688集運', '適合批發、樣品、小量採購與工廠貨件集運回台。'],
  ['代收／集貨／合併', '協助確認件數、尺寸重量、包裝狀況與後續出貨安排。'],
]

const process = ['需求確認', '提供資料', '評估報價', '集貨入倉', '報關清關', '派送完成']
const special = ['化工產品', '敏感貨物', '電池產品', '大型家具', '大型機具設備', '茶葉小三通']
const faqs = [
  ['中國貨回台需要提供什麼資料？', '請提供產品照片、品名、材質、用途、貨值、數量、箱數、尺寸重量、收寄地址與包裝資訊。'],
  ['淘寶、拼多多、1688可以集運回台嗎？', '可以協助評估。商品可先寄至中國集貨倉，確認到貨後再安排合併回台。'],
  ['茶葉可以走小三通嗎？', '可協助評估。請先提供茶葉包裝正面、背面、側面照片，以及重量、數量與貨值。'],
  ['特殊貨物可以運輸嗎？', '化工品、敏感貨、電池、大型家具與大型機具需依成分、用途、尺寸重量與包裝評估。'],
]

function Button({ href, children, variant = 'primary', className = '' }) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-black transition-all duration-300 hover:-translate-y-1 hover:scale-105'
  const style = variant === 'primary'
    ? 'bg-cyan-300 text-slate-950 shadow-glow hover:bg-white'
    : 'border border-white/30 bg-white/10 text-white hover:border-cyan-300 hover:bg-cyan-300/10'
  return <a href={href} target={href?.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className={`${base} ${style} ${className}`}>{children}</a>
}

function SectionTitle({ eyebrow, title, desc, dark = true }) {
  return (
    <div className="mb-10 max-w-5xl">
      <p className="mb-3 text-sm font-black tracking-[.26em] text-cyan-300">{eyebrow}</p>
      <h2 className={`text-3xl font-black leading-tight md:text-5xl ${dark ? 'text-white' : 'text-slate-950'}`}>{title}</h2>
      {desc && <p className={`mt-4 text-base leading-8 ${dark ? 'text-cyan-50/85' : 'text-slate-600'}`}>{desc}</p>}
    </div>
  )
}

function Card({ title, desc, Icon, light = false }) {
  return (
    <div className={`group rounded-3xl border p-6 shadow-card transition-all duration-300 hover:-translate-y-2 ${light ? 'border-slate-200 bg-white text-slate-950 hover:border-cyan-300' : 'border-cyan-300/20 bg-white/10 text-white backdrop-blur-md hover:border-cyan-300/70 hover:bg-cyan-300/10'}`}>
      <Icon className={`${light ? 'text-blue-700' : 'text-cyan-300'} mb-5 transition-all duration-300 group-hover:scale-110`} size={36} />
      <h3 className="text-xl font-black">{title}</h3>
      <p className={`mt-3 leading-7 ${light ? 'text-slate-600' : 'text-cyan-50/85'}`}>{desc}</p>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-5">
          <a href="#home" className="flex min-w-0 items-center gap-3">
            <img src="/logo.png" alt={company.name} className="h-12 w-auto rounded-lg bg-white p-1.5 shadow-lg md:h-16" />
            <div className="min-w-0">
              <p className="truncate text-base font-black md:text-xl">{company.name}</p>
              <p className="truncate text-[11px] font-medium text-cyan-300 md:text-sm">{company.en}</p>
            </div>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-bold text-slate-300 lg:flex">
            {nav.map(([label, href]) => <a key={label} href={href} className="whitespace-nowrap transition hover:text-cyan-300">{label}</a>)}
          </nav>
          <a href={company.line} target="_blank" rel="noreferrer" className="hidden rounded-full bg-[#06C755] px-5 py-3 text-sm font-black text-white transition hover:scale-105 sm:inline-flex"><MessageCircle size={18} className="mr-2" />LINE 詢價</a>
        </div>
      </header>

      <section id="home" className="relative pt-28 md:min-h-screen md:pt-36">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/global-logistics.png')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/35 via-slate-950/75 to-slate-950" />
        <div className="absolute inset-0 bg-grid-soft opacity-40" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-[1.08fr_.92fr]">
          <div>
            <div className="mb-6 inline-flex flex-wrap items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100 backdrop-blur"><Globe2 size={17}/> 中國 ⇄ 台灣 ⇄ 東南亞 ⇄ 全球</div>
            <h1 className="text-4xl font-black leading-tight md:text-6xl">專業進出口物流<br /><span className="bg-gradient-to-r from-cyan-200 via-white to-blue-300 bg-clip-text text-transparent">安全穩定・流程透明</span></h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-100">尚順國際運通有限公司提供中國進出口、小三通、茶葉小三通、海運、海快、海特、空運、報關與倉儲服務。</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Button href="#quote" className="w-full px-10 py-5 text-xl sm:w-auto">線上詢價 <ArrowRight size={20}/></Button>
              <Button href="#about" variant="secondary" className="w-full px-10 py-5 text-xl sm:w-auto">公司簡介</Button>
            </div>
          </div>
          <div className="rounded-[2rem] border border-cyan-300/20 bg-white/10 p-4 shadow-[0_20px_70px_rgba(34,211,238,.24)] backdrop-blur-md">
            <img src="/about-logistics.png" alt="尚順國際物流服務" className="w-full rounded-[1.5rem]" />
            <div className="grid gap-3 pt-4 sm:grid-cols-3">
              {['中國貨回台', '小三通', '報關倉儲'].map(item => <div key={item} className="rounded-2xl bg-slate-950/55 px-4 py-3 text-center text-sm font-black text-cyan-100">{item}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white py-20 text-slate-950 md:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle eyebrow="ABOUT SUNSHINE" title="公司簡介" dark={false} desc="尚順國際運通以穩定、安全、清楚為核心，協助客戶處理跨境物流需求。從貨件諮詢、資料確認、集貨入倉到清關配送，我們重視每一個流程細節，讓客戶更安心掌握貨況與進度。" />
          <div className="grid gap-5 md:grid-cols-3">{strengths.map(([title, desc, Icon]) => <Card key={title} title={title} desc={desc} Icon={Icon} light />)}</div>
        </div>
      </section>

      <section id="services" className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle eyebrow="SERVICES" title="服務項目" desc="依貨物性質、時效與成本協助規劃合適方案，整合集貨、報關、清關、倉儲與配送流程。" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{services.map(([title, desc, Icon]) => <Card key={title} title={title} desc={desc} Icon={Icon} />)}</div>
        </div>
      </section>

      <section id="process" className="bg-gradient-to-br from-blue-900 via-cyan-900 to-blue-800 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle eyebrow="PROCESS" title="物流流程" desc="從需求確認到派送完成，協助客戶降低反覆溝通與運輸風險。" />
          <div className="grid gap-4 md:grid-cols-6">{process.map((step, i) => <div key={step} className="rounded-3xl border border-cyan-300/20 bg-white/10 p-5 shadow-card backdrop-blur-md"><p className="text-3xl font-black text-cyan-300">{String(i + 1).padStart(2, '0')}</p><p className="mt-4 font-black">{step}</p></div>)}</div>
        </div>
      </section>

      <section id="shopping" className="bg-white py-20 text-slate-950 md:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle eyebrow="SHOPPING CONSOLIDATION" title="網購集運回台" dark={false} desc="淘寶、拼多多、阿里巴巴／1688 商品可先寄至中國集貨倉，確認到貨後合併安排回台。" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{shopping.map(([title, desc]) => <div key={title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-card"><ShoppingCart className="mb-5 text-blue-700" size={34}/><h3 className="text-xl font-black">{title}</h3><p className="mt-3 leading-7 text-slate-600">{desc}</p></div>)}</div>
          <div className="mt-10 rounded-3xl bg-slate-950 p-6 text-white"><h3 className="text-2xl font-black">特殊貨物可先評估</h3><div className="mt-5 flex flex-wrap gap-3">{special.map(item => <span key={item} className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 font-bold text-cyan-100"><BadgeCheck className="mr-1 inline" size={18}/>{item}</span>)}</div></div>
        </div>
      </section>

      <section id="faq" className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle eyebrow="FAQ" title="常見問題" />
          <div className="grid gap-4 md:grid-cols-2">{faqs.map(([q, a]) => <div key={q} className="rounded-3xl border border-cyan-300/20 bg-white/10 p-6 shadow-card backdrop-blur-md"><h3 className="flex items-start gap-2 text-lg font-black"><ChevronRight className="mt-1 text-cyan-300" size={20}/>{q}</h3><p className="mt-3 leading-8 text-cyan-100">{a}</p></div>)}</div>
        </div>
      </section>

      <section id="quote" className="bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle eyebrow="QUOTE" title="線上詢價" desc="可填寫表單或直接掃描 LINE QR Code，提供產品資料、照片、數量、尺寸重量與出貨需求。" />
          <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
            <div className="overflow-hidden rounded-3xl border border-cyan-300/20 bg-white"><iframe src={company.formEmbed} width="100%" height="760" frameBorder="0" marginHeight="0" marginWidth="0">正在載入…</iframe></div>
            <div className="rounded-3xl border border-cyan-300/20 bg-white/10 p-6 text-center shadow-card backdrop-blur-md"><img src="/line-qr.png" alt="LINE QR Code" className="mx-auto w-56 rounded-3xl bg-white p-3" /><h3 className="mt-5 text-2xl font-black">掃描 LINE QR Code</h3><p className="mt-3 leading-7 text-cyan-100">立即提供商品資訊或貨件資料，我司協助評估報價。</p><Button href={company.line} className="mt-6 w-full"><MessageCircle size={18}/> LINE 立即詢價</Button><Button href={`tel:${company.phone}`} variant="secondary" className="mt-3 w-full"><Phone size={18}/> {company.phone}</Button></div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-gradient-to-br from-blue-900 via-cyan-900 to-blue-800 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle eyebrow="CONTACT" title="聯絡我們" />
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-cyan-300/20 bg-white/10 p-6 shadow-card backdrop-blur-md"><div className="space-y-4 leading-8 text-cyan-50"><p className="flex gap-3"><MapPin className="mt-1 shrink-0 text-cyan-300"/> {company.address}</p><p className="flex gap-3"><Phone className="mt-1 shrink-0 text-cyan-300"/> {company.phone}</p><p className="flex gap-3"><MessageCircle className="mt-1 shrink-0 text-cyan-300"/> LINE 立即詢價</p><p className="flex gap-3"><Clock3 className="mt-1 shrink-0 text-cyan-300"/> 中國進出口｜小三通｜茶葉小三通｜海運｜空運｜報關｜倉儲</p></div><div className="mt-6 flex flex-wrap gap-3"><Button href={company.map}>查看 Google 地圖</Button><Button href={company.fb} variant="secondary">Facebook 粉絲專頁</Button></div></div>
            <div className="overflow-hidden rounded-3xl border border-cyan-300/20 bg-white"><iframe src={company.mapEmbed} width="100%" height="420" style={{ border: 0 }} loading="lazy" /></div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950 px-5 py-10 text-center text-sm text-slate-400">
        <img src="/logo.png" alt={company.name} className="mx-auto mb-4 h-12 rounded-md bg-white p-1" />
        <p className="font-bold text-white">{company.name}｜{company.en}</p>
        <p className="mt-2">中國進出口｜東南亞進出口｜小三通｜茶葉小三通｜海運｜海快｜海特｜空運｜報關｜倉儲</p>
      </footer>
    </div>
  )
}
