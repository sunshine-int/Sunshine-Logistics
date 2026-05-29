import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Clock3,
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
  name: '尚順國際運通',
  phone: '04-22529955',
  email: 'sunshine0422520071@gmail.com',
  address: '台中市西屯區龍洋巷17之7號',
  line: 'https://lin.ee/Dlq7FY2',
  fb: 'https://www.facebook.com/profile.php?id=61590203879333',
  map: 'https://maps.google.com/?q=台中市西屯區龍洋巷17之7號',
  mapEmbed: 'https://www.google.com/maps?q=台中市西屯區龍洋巷17之7號&output=embed',
  formEmbed: 'https://docs.google.com/forms/d/e/1FAIpQLScDq36dwppmix3Y2QOqR7JdtzAE9u4e-cvhiD3Nkg2LvkGzsw/viewform?embedded=true',
}

const nav = [
  ['網購集運', '#shopping'],
  ['服務項目', '#services'],
  ['特殊貨物', '#special'],
  ['物流流程', '#process'],
  ['常見問題', '#faq'],
  ['線上詢價', '#quote'],
  ['聯絡我們', '#contact'],
]

const services = [
  ['淘寶／拼多多／阿里集運', '中國網購商品集貨、合併出貨、回台運輸安排。', ShoppingCart],
  ['小三通集運', '中國貨回台、茶葉小三通、一般貨件評估。', Ship],
  ['海快／海運', '依貨量、時效與成本，安排合適運輸方式。', Warehouse],
  ['空運快遞', '急件、樣品、小批量貨件快速安排。', Plane],
  ['報關清關', '協助確認品名、材質、用途、貨值與文件資料。', SearchCheck],
  ['倉儲配送', '集貨、入倉、理貨、派送與進度追蹤。', PackageCheck],
]

const shoppingItems = [
  ['淘寶集運回台', '商品先寄至中國集貨倉，確認到貨後可合併安排回台。'],
  ['拼多多集運回台', '多筆小包可集中入倉，降低分散寄送的溝通與運輸成本。'],
  ['阿里巴巴／1688集運', '適合批發、樣品、小量採購與工廠貨件集運回台。'],
  ['代收／集貨／合併', '協助客戶確認入倉、件數、尺寸重量與後續運輸安排。'],
]

const special = ['化工產品', '敏感貨物', '電池產品', '大型家具', '大型機具設備']
const routes = ['深圳', '東莞', '廣州', '廈門', '義烏', '上海', '寧波', '蘇州', '台灣全區配送']
const steps = ['需求確認', '提供產品資料', '評估報價', '集貨入倉', '報關清關', '派送完成']
const reasons = ['中國集貨倉整合', '台中倉儲配送', '專人一對一服務', '即時貨況追蹤', '完整報關清關', '多元物流渠道規劃']
const faqs = [
  ['淘寶、拼多多、阿里巴巴可以集運回台嗎？', '可以協助評估。請先提供商品連結、品名、數量、重量尺寸或賣家包裝資訊，確認後安排集貨與回台方案。'],
  ['網購商品要怎麼寄到倉庫？', '下單時可填寫我司提供的中國倉庫收貨資訊，外箱請依我司指定方式備註，以利倉庫辨識。'],
  ['茶葉可以寄回台灣嗎？', '可協助評估。請先提供包裝照片、品名、重量、尺寸、貨值及出貨資訊。'],
  ['化工品、敏感貨、電池可以運輸嗎？', '需依產品成分、用途、包裝與海關規範評估，確認後提供合適方案。'],
  ['大型家具或大型機具如何報價？', '依尺寸、重量、件數、目的地與是否需特殊裝卸設備評估報價。'],
  ['報價前需要提供哪些資料？', '建議提供產品照片、品名、材質、用途、貨值、數量、箱數、尺寸重量與收寄地址。'],
]

function Button({ href, children, variant = 'primary', className = '' }) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-black transition hover:-translate-y-0.5'
  const styles = variant === 'primary'
    ? 'bg-cyan-300 text-slate-950 shadow-glow hover:bg-white'
    : 'border border-white/20 bg-white/5 text-white hover:border-cyan-300 hover:bg-cyan-300/10'
  return <a href={href} target={href?.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className={`${base} ${styles} ${className}`}>{children}</a>
}

function SectionTitle({ eyebrow, title, desc }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 text-sm font-black tracking-[.24em] text-cyan-300">{eyebrow}</p>
      <h2 className="text-3xl font-black leading-tight md:text-5xl">{title}</h2>
      {desc && <p className="mt-4 leading-8 text-slate-300">{desc}</p>}
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
          <a href="#home" className="flex items-center gap-3">
            <img src="/logo.png" alt="尚順國際運通" className="h-11 w-auto rounded-md bg-white/95 p-1" />
            <div>
              <p className="text-sm font-black tracking-widest">尚順國際運通</p>
              <p className="text-xs text-cyan-200">Sunshine Logistics</p>
            </div>
          </a>
          <nav className="hidden items-center gap-5 text-sm text-slate-300 lg:flex">
            {nav.map(([label, href]) => <a key={label} href={href} className="hover:text-cyan-300">{label}</a>)}
          </nav>
          <Button href={company.line} className="hidden sm:inline-flex"><MessageCircle size={18}/> LINE 詢價</Button>
        </div>
      </header>

      <section id="home" className="relative min-h-screen pt-28 bg-grid-soft">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/global-logistics.png')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/80 to-slate-950" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-200">
              <Globe2 size={17}/> 中國網購集運回台｜小三通｜海快｜海運
            </div>
            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              淘寶・拼多多・阿里巴巴<br />
              <span className="bg-gradient-to-r from-cyan-200 via-white to-blue-300 bg-clip-text text-transparent">網購集運回台</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-200">
              尚順國際運通協助中國網購、批發採購、樣品貨、一般貨件與特殊貨物，從集貨入倉、合併出貨、報關清關到台灣派送，一站式協助規劃適合的運輸方式。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={company.line}>立即 LINE 詢價 <ArrowRight size={18}/></Button>
              <Button href="#shopping" variant="secondary">查看集運流程</Button>
              <Button href={`tel:${company.phone}`} variant="secondary"><Phone size={18}/> {company.phone}</Button>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-card backdrop-blur-xl">
            <div className="rounded-[1.5rem] bg-slate-950/70 p-6">
              <p className="text-sm font-black tracking-[.18em] text-cyan-300">HOT SERVICE</p>
              <h2 className="mt-3 text-2xl font-black">中國網購集運回台</h2>
              <div className="mt-6 grid gap-3">
                {['淘寶集運', '拼多多集運', '阿里巴巴／1688集運', '小包合併回台', '批發貨／樣品貨評估'].map(item => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <CheckCircle2 className="text-cyan-300" size={20}/><span className="font-bold">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl bg-cyan-300/10 p-4 text-sm leading-7 text-cyan-100">
                下單前可先提供商品資訊，我司協助確認是否適合操作及建議運輸方式。
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="shopping" className="mx-auto max-w-7xl px-5 py-20">
        <SectionTitle eyebrow="SHOPPING CONSOLIDATION" title="淘寶／拼多多／阿里巴巴網購集運回台" desc="多平台商品可先寄至中國集貨倉，確認到貨後再合併安排回台，適合個人網購、批發採購、樣品測試與小量出貨。" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {shoppingItems.map(([title, desc]) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-white/[.06] p-6 shadow-card">
              <ShoppingCart className="mb-5 text-cyan-300" size={34}/>
              <h3 className="text-xl font-black">{title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-6">
          <h3 className="text-2xl font-black">網購集運操作方式</h3>
          <div className="mt-5 grid gap-4 md:grid-cols-4">
            {['提供商品資訊', '賣家寄至集貨倉', '確認件數尺寸重量', '安排合併回台'].map((step, i) => (
              <div key={step} className="rounded-2xl bg-slate-950/50 p-5">
                <p className="text-3xl font-black text-cyan-300">0{i + 1}</p>
                <p className="mt-2 font-bold">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-20">
        <SectionTitle eyebrow="SERVICES" title="中國貨回台一站式物流服務" desc="依照貨物性質、時效、成本與清關需求，協助規劃小三通、海快、海運、空運等方式。" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(([title, desc, Icon]) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-white/[.06] p-6 transition hover:-translate-y-1 hover:border-cyan-300/40">
              <Icon className="mb-5 text-cyan-300" size={36}/>
              <h3 className="text-xl font-black">{title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="special" className="bg-white/[.03] py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle eyebrow="SPECIAL CARGO" title="特殊貨物也可協助評估" desc="化工品、敏感貨、電池、大型家具與大型機具，請提供完整產品資料及照片，我司協助評估合適方案。" />
          <div className="grid gap-4 md:grid-cols-5">
            {special.map(item => (
              <div key={item} className="rounded-2xl border border-cyan-300/20 bg-slate-950/70 p-5 text-center font-black">
                ✔ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-5 py-20">
        <SectionTitle eyebrow="PROCESS" title="物流流程清楚透明" desc="從需求確認、產品資料評估、報價到入倉、清關與派送，降低溝通成本與運輸風險。" />
        <div className="grid gap-4 md:grid-cols-6">
          {steps.map((step, i) => (
            <div key={step} className="rounded-3xl border border-white/10 bg-white/[.06] p-5">
              <p className="text-3xl font-black text-cyan-300">{String(i + 1).padStart(2, '0')}</p>
              <p className="mt-4 font-black">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900/40 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2">
          <div>
            <SectionTitle eyebrow="WHY US" title="為什麼選擇尚順國際運通" desc="專人協助確認貨況、資料與清關需求，讓客戶更安心掌握每一步。" />
            <div className="grid gap-3 sm:grid-cols-2">
              {reasons.map(item => <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/[.06] p-4"><CheckCircle2 className="text-cyan-300" size={20}/>{item}</div>)}
            </div>
          </div>
          <div>
            <SectionTitle eyebrow="ROUTES" title="中國集貨據點與台灣配送" desc="常見中國出貨區域與台灣端配送服務，可依實際貨件狀況安排。" />
            <div className="flex flex-wrap gap-3">
              {routes.map(item => <span key={item} className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 font-bold text-cyan-100">{item}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-5 py-20">
        <SectionTitle eyebrow="FAQ" title="客戶常見問題" />
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map(([q, a]) => (
            <div key={q} className="rounded-3xl border border-white/10 bg-white/[.06] p-6">
              <h3 className="flex items-start gap-2 text-lg font-black"><ChevronRight className="mt-1 text-cyan-300" size={20}/>{q}</h3>
              <p className="mt-3 leading-8 text-slate-300">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="quote" className="bg-white/[.03] py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle eyebrow="QUOTE" title="線上詢價" desc="可填寫表單或直接掃描 LINE QR Code，提供產品資料、照片、數量、尺寸重量與出貨需求。" />
          <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white">
              <iframe src={company.formEmbed} width="100%" height="760" frameBorder="0" marginHeight="0" marginWidth="0">正在載入…</iframe>
            </div>
            <div className="rounded-3xl border border-cyan-300/20 bg-slate-950/80 p-6 text-center shadow-card">
              <img src="/line-qr.png" alt="LINE QR Code" className="mx-auto w-56 rounded-3xl bg-white p-3" />
              <h3 className="mt-5 text-2xl font-black">掃描 LINE QR Code</h3>
              <p className="mt-3 leading-7 text-slate-300">立即提供商品資訊或貨件資料，我司協助評估報價。</p>
              <Button href={company.line} className="mt-6 w-full"><MessageCircle size={18}/> LINE 立即詢價</Button>
              <Button href={`tel:${company.phone}`} variant="secondary" className="mt-3 w-full"><Phone size={18}/> {company.phone}</Button>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-20">
        <SectionTitle eyebrow="CONTACT" title="聯絡尚順國際運通" />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[.06] p-6">
            <div className="space-y-4 leading-8 text-slate-200">
              <p className="flex gap-3"><MapPin className="mt-1 text-cyan-300"/> {company.address}</p>
              <p className="flex gap-3"><Phone className="mt-1 text-cyan-300"/> {company.phone}</p>
              <p className="flex gap-3"><MessageCircle className="mt-1 text-cyan-300"/> LINE 立即詢價</p>
              <p className="flex gap-3"><Clock3 className="mt-1 text-cyan-300"/> 中國網購集運｜小三通｜海快｜海運｜空運｜報關清關</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={company.map}>查看 Google 地圖</Button>
              <Button href={company.fb} variant="secondary"><span>📘</span> Facebook 粉絲專頁</Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white">
            <iframe src={company.mapEmbed} width="100%" height="420" style={{ border: 0 }} loading="lazy" />
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950 px-5 py-10 text-center text-sm text-slate-400">
        <img src="/logo.png" alt="尚順國際運通" className="mx-auto mb-4 h-12 rounded-md bg-white p-1" />
        <p className="font-bold text-white">尚順國際運通｜中國網購集運回台・中國貨回台物流服務</p>
        <p className="mt-2">淘寶集運｜拼多多集運｜阿里巴巴1688集運｜小三通｜海快｜海運｜空運｜報關清關</p>
      </footer>

      <a href={company.line} target="_blank" rel="noreferrer" className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-4 text-sm font-black text-slate-950 shadow-glow">
        <MessageCircle size={18}/> LINE 詢價
      </a>
    </div>
  )
}

export default App
