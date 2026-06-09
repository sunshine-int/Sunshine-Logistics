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
  name: '尚順國際運通有限公司',
  phone: '04-22529955',
  email: 'sunshine0422520071@gmail.com',
  address: '台中市西屯區龍洋巷17之7號',
  line: 'https://lin.ee/Dlq7FY2',
  fb: 'https://www.facebook.com/profile.php?id=61590203879333',
  map: 'https://www.google.com/maps/search/?api=1&query=尚順國際運通',
  mapEmbed: 'https://www.google.com/maps?q=尚順國際運通&output=embed',
  formEmbed: 'https://docs.google.com/forms/d/e/1FAIpQLScDq36dwppmix3Y2QOqR7JdtzAE9u4e-cvhiD3Nkg2LvkGzsw/viewform?embedded=true',
}

const nav = [
  ['關於尚順', '#about'],
  ['服務項目', '#services'],
  ['物流流程', '#process'],
  ['常見問題', '#faq'],
  ['聯絡我們', '#contact'],
]

const aboutAdvantages = [
  ['穩定安排', '依貨物特性與時效需求，協助規劃合適運輸方式，讓出貨安排更穩定。', ShieldCheck],
  ['資料把關', '協助確認品名、材質、用途、貨值、尺寸重量與包裝資訊，降低清關延誤風險。', SearchCheck],
  ['進度透明', '從入倉、集貨、清關到台灣派送，協助客戶掌握每一階段貨況。', PackageCheck],
  ['專人服務', '由專人協助溝通與追蹤，減少反覆確認，提高整體作業效率。', MessageCircle],
  ['風險評估', '針對特殊貨、敏感貨、電池、化工品與大型貨件，先評估再安排，降低運輸不確定性。', Truck],
  ['流程整合', '整合集貨、倉儲、報關、清關與配送流程，讓物流作業更簡化。', Warehouse],
  ['長期合作', '重視每一票貨件的安全與穩定，建立可持續合作的物流服務模式。', CheckCircle2],
  ['全球視野', '服務範圍涵蓋中國、台灣、日本、東南亞及全球物流需求。', Globe2],
]

const shoppingItems = [
  ['淘寶集運回台', '商品先寄至中國集貨倉，確認到貨後可合併安排回台。'],
  ['拼多多集運回台', '多筆小包可集中入倉，避免分散寄送造成追蹤困難。'],
  ['阿里巴巴／1688集運', '適合批發、樣品、小量採購與工廠貨件集運回台。'],
  ['代收／集貨／合併', '協助確認入倉、件數、尺寸重量與後續運輸安排。'],
]

const services = [
  ['中國貨回台', '中國各地貨件集貨入倉，協助安排回台、清關與台灣端配送。', Ship],
  ['網購集運回台', '淘寶、拼多多、阿里巴巴／1688商品可先寄至中國集貨倉，再合併安排回台。', ShoppingCart],
  ['小三通物流', '一般貨件、茶葉小三通與特殊貨件，可依貨物狀況協助評估。', Warehouse],
  ['海運／海快／空運', '依貨量、時效與成本需求，安排合適的海運、海快或空運方案。', Plane],
  ['報關清關', '協助確認品名、材質、用途、貨值與文件資料，降低清關延誤風險。', SearchCheck],
  ['特殊貨物評估', '化工品、敏感貨、電池、大型家具與大型機具，先評估後安排合適運輸方式。', Truck],
  ['倉儲配送', '提供集貨、入倉、理貨、合併出貨與台灣端派送追蹤服務。', PackageCheck],
  ['東南亞／全球物流', '協助東南亞進出口、全球物流、海空運與跨境運輸規劃。', Globe2],
]

const special = ['化工產品', '敏感貨物', '電池產品', '大型家具', '大型機具設備']
const routes = ['深圳', '東莞', '廣州', '廈門', '漳洲', '上海', '義烏', '台灣全區配送']
const steps = ['需求確認', '提供產品資料', '評估報價', '集貨入倉', '報關清關', '派送完成']
const reasons = ['中國集貨倉整合', '台中倉儲配送', '專人一對一服務', '即時貨況追蹤', '完整報關清關', '多元物流渠道規劃']
const faqs = [
  ['淘寶、拼多多、1688可以集運回台嗎？', '可以協助評估。請先提供商品資訊、品名、數量、重量尺寸或賣家包裝資訊，確認後安排集貨與回台方案。'],
  ['中國貨回台要提供哪些資料？', '建議提供產品照片、品名、材質、用途、貨值、數量、箱數、尺寸重量、收寄地址與是否有特殊包裝需求。'],
  ['茶葉可以走小三通嗎？', '可協助評估。請先提供茶葉包裝正面、背面、側面照片，以及重量、數量與貨值。'],
  ['化工品、敏感貨、電池可以運輸嗎？', '需依產品成分、用途、包裝與海關規範評估，確認後提供合適方案。'],
  ['大型家具或大型機具如何報價？', '依尺寸、重量、件數、目的地、是否需要特殊裝卸設備，以及運輸方式評估報價。'],
  ['台灣端可以配送到府嗎？', '可依貨件尺寸重量、地址與派送條件評估，偏遠地區或特殊裝卸需求需另行確認。'],
]

function Button({ href, children, variant = 'primary', className = '' }) {
  const base =
    'group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-black transition-all duration-300 hover:-translate-y-1 hover:scale-105'

  const styles =
    variant === 'primary'
      ? 'bg-cyan-300 text-slate-950 shadow-glow hover:bg-white hover:shadow-[0_0_45px_rgba(34,211,238,.75)]'
      : 'border border-white/20 bg-white/5 text-white hover:border-cyan-300 hover:bg-cyan-300/10 hover:shadow-[0_0_35px_rgba(34,211,238,.35)]'

  return (
    <a
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </a>
  )
}

function SectionTitle({ eyebrow, title, desc }) {
  return (
    <div className="mb-10 w-full max-w-7xl">
      <p className="mb-3 text-sm font-black tracking-[.24em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-black leading-[1.15] text-white md:text-5xl">
        {title}
      </h2>
      {desc && (
        <p className="mt-4 max-w-6xl leading-8 text-cyan-100">
          {desc}
        </p>
      )}
    </div>
  )
}

function Card({ title, desc, Icon }) {
  return (
    <div className="group rounded-3xl border border-cyan-300/20 bg-white/10 p-6 text-white shadow-card backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300/70 hover:bg-cyan-300/10 hover:shadow-[0_18px_45px_rgba(34,211,238,.22)]">
      <Icon
        className="mb-5 text-cyan-300 transition-all duration-300 group-hover:scale-125 group-hover:text-cyan-100 group-hover:drop-shadow-[0_0_18px_rgba(34,211,238,.7)]"
        size={36}
      />
      <h3 className="text-xl font-black transition-colors duration-300">
        {title}
      </h3>
      <p className="mt-3 leading-7 text-cyan-50/85 transition-colors duration-300 group-hover:text-white">
        {desc}
      </p>
    </div>
  )
}
function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 md:px-5 md:py-4">
          <a href="#home" className="flex min-w-0 items-center gap-3 md:gap-4">
            <img
              src="/logo.png"
              alt="尚順國際運通有限公司"
              className="h-12 w-auto rounded-lg bg-white/95 p-1.5 shadow-lg sm:h-14 md:h-16"
            />
            <div>
             <p className="text-sm font-black leading-tight tracking-wide text-white sm:text-lg md:text-xl">
  尚順國際運通有限公司
</p>

<p className="text-[10px] font-medium text-cyan-300 sm:text-xs md:text-sm">
  Sunshine International Logistics Co., Ltd.
</p>
            </div>
          </a>
         <nav className="hidden items-center gap-6 text-base font-semibold text-slate-300 lg:flex">
  {nav.map(([label, href]) => (
    <a
      key={label}
      href={href}
      className="whitespace-nowrap transition-all duration-300 hover:text-cyan-300 hover:scale-105"
    >
      {label}
    </a>
  ))}
</nav>
          <a
            href={company.line}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-[#06C755] px-6 py-3 text-sm font-black text-white transition-all duration-300 hover:scale-105 hover:bg-[#05b84d] sm:inline-flex"
          >
            <MessageCircle size={18}/> LINE 詢價
          </a>
        </div>
      </header>

      <section id="home" className="relative pt-24 pb-32 md:min-h-screen md:pt-32 md:pb-24">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/global-logistics.png')" }} />
        <div className="absolute inset-0 bg-slate-950/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/70 to-slate-950" />
        <div className="absolute inset-0 bg-grid-soft" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.08fr_.92fr]">
          <div>
            <div className="mb-6 inline-flex flex-wrap items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100 backdrop-blur">
              <Globe2 size={17}/> 中國貨回台｜淘寶集運｜拼多多集運｜1688集運
            </div>
            <h1 className="text-3xl font-black leading-tight md:text-5xl">
              專業中國台灣進出口物流<br />
              <span className="bg-gradient-to-r from-cyan-200 via-white to-blue-300 bg-clip-text text-transparent">網購集運服務</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-100 md:text-lg md:leading-9">
              尚順國際運通有限公司提供中國貨回台、淘寶集運回台、拼多多集運回台、1688集運回台、小三通物流、茶葉小三通、東南亞／全球物流與倉儲服務。
            </p>
            <p className="mt-3 max-w-2xl leading-8 text-cyan-50/80">
              從集貨入倉、合併出貨、報關清關到台灣派送，協助您規劃更合適的物流方案。
            </p>
            <div className="mt-8 flex flex-col gap-4 pb-[120px] sm:flex-row sm:flex-wrap md:pb-0">
            <Button
  href="#quote"
  className="min-w-[260px] justify-center rounded-[32px] px-16 py-7 text-4xl font-black"
>
  線上詢價
</Button>

<Button
  href="#about"
  className="min-w-[260px] justify-center rounded-[32px] px-16 py-7 text-4xl font-black"
>
  關於尚順
</Button>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center">
            <img
              src="/about-logistics.png"
              alt="尚順國際運通物流服務形象圖"
              className="w-full max-w-[850px] rounded-[2rem] border border-cyan-300/20 shadow-[0_20px_60px_rgba(0,180,255,.25)]"
            />
          </div>
        </div>
      </section>

      <section id="about" className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-20 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle
            eyebrow="ABOUT SUNSHINE"
            title="關於尚順國際運通"
            desc="尚順國際運通以穩定、安全、清楚為核心，協助客戶處理跨境物流需求。從貨件諮詢、資料確認、集貨入倉到清關配送，我們重視每一個流程細節，讓客戶更安心掌握貨況與進度。"
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {aboutAdvantages.map(([title, desc, Icon]) => <Card key={title} title={title} desc={desc} Icon={Icon} />)}
          </div>
        </div>
      </section>

      <section id="shopping" className="bg-gradient-to-br from-blue-900 via-cyan-900 to-blue-800 py-20 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle eyebrow="SHOPPING CONSOLIDATION" title="淘寶／拼多多／阿里巴巴／1688 網購集運回台" desc="多平台商品可先寄至中國集貨倉，確認到貨後再合併安排回台，適合個人網購、批發採購、樣品測試與小量出貨。" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {shoppingItems.map(([title, desc]) => (
              <div key={title} className="rounded-3xl border border-cyan-300/20 bg-white/10 p-6 text-white shadow-card backdrop-blur-md">
                <ShoppingCart className="mb-5 text-cyan-300" size={34}/>
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-cyan-100">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-3xl border border-cyan-300/30 bg-white/10 p-6 text-white backdrop-blur-md">
            <h3 className="text-2xl font-black">網購集運操作流程</h3>
            <div className="mt-5 grid gap-4 md:grid-cols-4">
              {['提供商品資訊', '賣家寄至集貨倉', '確認件數尺寸重量', '安排合併回台'].map((step, i) => (
                <div key={step} className="rounded-2xl bg-slate-950/45 p-5 text-white backdrop-blur">
                  <p className="text-3xl font-black text-cyan-300">0{i + 1}</p>
                  <p className="mt-2 font-bold">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-20 text-white md:py-24"><div className="mx-auto max-w-7xl px-5">
        <SectionTitle eyebrow="SERVICES" title="一站式國際物流服務" desc="提供中國貨回台、網購集運、小三通物流、海運、海快、空運、報關清關、倉儲配送與東南亞／全球物流服務，依貨物性質、時效與成本協助規劃合適方案。" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(([title, desc, Icon]) => <Card key={title} title={title} desc={desc} Icon={Icon} />)}
        </div>
        </div>
      </section>

      <section id="special" className="bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950 py-20 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle eyebrow="SPECIAL CARGO" title="特殊貨物也可協助評估" desc="化工品、敏感貨、電池、大型家具與大型機具，請提供完整產品資料及照片，我司協助評估合適方案。" />
          <div className="grid gap-4 md:grid-cols-5">
            {special.map(item => (
              <div key={item} className="rounded-2xl border border-cyan-300/30 bg-white/10 p-5 text-center font-black text-cyan-50 backdrop-blur">
                ✔ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="bg-gradient-to-br from-blue-900 via-cyan-900 to-blue-800 py-20 text-white md:py-24"><div className="mx-auto max-w-7xl px-5">
        <SectionTitle eyebrow="PROCESS" title="物流流程清楚透明" desc="從需求確認、產品資料評估、報價到入倉、清關與派送，降低溝通成本與運輸風險。" />
        <div className="grid gap-4 md:grid-cols-6">
          {steps.map((step, i) => (
            <div key={step} className="rounded-3xl border border-cyan-300/20 bg-white/10 p-5 text-white shadow-card backdrop-blur-md">
              <p className="text-3xl font-black text-cyan-300">{String(i + 1).padStart(2, '0')}</p>
              <p className="mt-4 font-black">{step}</p>
            </div>
          ))}
        </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-blue-900 via-cyan-900 to-sky-800 py-20 text-white md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2">
          <div>
            <SectionTitle
  eyebrow="WHY US"
  title={
    <>
      為什麼選擇
      <br />
      尚順國際運通
    </>
  } 
  desc="專人協助確認貨況、資料與清關需求，讓客戶更安心掌握每一步。" />
            <div className="grid gap-3 sm:grid-cols-2">
              {reasons.map(item => <div key={item} className="flex items-center gap-3 rounded-2xl border border-cyan-300/20 bg-white/10 p-4 text-white shadow-card backdrop-blur-md"><CheckCircle2 className="text-cyan-300" size={20}/>{item}</div>)}
            </div>
          </div>
          <div>
            <SectionTitle eyebrow="ROUTES" title="中國集貨據點與台灣配送" desc="常見中國出貨區域與台灣端配送服務，可依實際貨件狀況安排。" />
            <div className="flex flex-wrap gap-3">
              {routes.map(item => <span key={item} className="rounded-full border border-cyan-300/30 bg-white/10 px-4 py-2 font-bold text-cyan-50 backdrop-blur">{item}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-20 text-white md:py-24"><div className="mx-auto max-w-7xl px-5">
        <SectionTitle eyebrow="FAQ" title="客戶常見問題" />
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map(([q, a]) => (
            <div key={q} className="rounded-3xl border border-cyan-300/20 bg-white/10 p-6 text-white shadow-card backdrop-blur-md">
              <h3 className="flex items-start gap-2 text-lg font-black"><ChevronRight className="mt-1 text-cyan-300" size={20}/>{q}</h3>
              <p className="mt-3 leading-8 text-cyan-100">{a}</p>
            </div>
          ))}
        </div>
        </div>
      </section>

      <section id="quote" className="bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 py-20 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle eyebrow="QUOTE" title="線上詢價" desc="可填寫表單或直接掃描 LINE QR Code，提供產品資料、照片、數量、尺寸重量與出貨需求。" />
          <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
            <div className="overflow-hidden rounded-3xl border border-cyan-300/20 bg-white">
              <iframe src={company.formEmbed} width="100%" height="760" frameBorder="0" marginHeight="0" marginWidth="0">正在載入…</iframe>
            </div>
            <div className="rounded-3xl border border-cyan-300/20 bg-white/10 p-6 text-center shadow-card backdrop-blur-md">
              <img src="/line-qr.png" alt="LINE QR Code" className="mx-auto w-56 rounded-3xl bg-white p-3" />
              <h3 className="mt-5 text-2xl font-black">掃描 LINE QR Code</h3>
              <p className="mt-3 leading-7 text-cyan-100">立即提供商品資訊或貨件資料，我司協助評估報價。</p>
              <Button href={company.line} className="mt-6 w-full"><MessageCircle size={18}/> LINE 立即詢價</Button>
              <Button href={`tel:${company.phone}`} variant="secondary" className="mt-3 w-full"><Phone size={18}/> {company.phone}</Button>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-gradient-to-br from-blue-900 via-cyan-900 to-blue-800 py-20 text-white md:py-24"><div className="mx-auto max-w-7xl px-5">
        <SectionTitle eyebrow="CONTACT" title="聯絡尚順國際運通有限公司" />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-cyan-300/20 bg-white/10 p-6 text-white shadow-card backdrop-blur-md">
            <div className="space-y-4 leading-8 text-cyan-50">
              <p className="flex gap-3"><MapPin className="mt-1 shrink-0 text-cyan-300"/> {company.address}</p>
              <p className="flex gap-3"><Phone className="mt-1 shrink-0 text-cyan-300"/> {company.phone}</p>
              <p className="flex gap-3"><MessageCircle className="mt-1 shrink-0 text-cyan-300"/> LINE 立即詢價</p>
              <p className="flex gap-3"><Clock3 className="mt-1 shrink-0 text-cyan-300"/> 中國貨回台｜淘寶集運｜拼多多集運｜1688集運｜小三通物流｜茶葉小三通</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={company.map}>查看 Google 地圖</Button>
              <Button href={company.fb} variant="secondary"><span>📘</span> Facebook 粉絲專頁</Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-cyan-300/20 bg-white">
            <iframe src={company.mapEmbed} width="100%" height="420" style={{ border: 0 }} loading="lazy" />
          </div>
        </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950 px-5 py-10 text-center text-sm text-slate-400">
        <img src="/logo.png" alt="尚順國際運通有限公司" className="mx-auto mb-4 h-12 rounded-md bg-white p-1" />
        <p className="font-bold text-white">尚順國際運通有限公司｜中國貨回台・網購集運回台・國際物流服務</p>
        <p className="mt-2">中國貨回台｜淘寶集運｜拼多多集運｜1688集運｜小三通物流｜茶葉小三通｜東南亞物流｜全球物流｜倉儲服務</p>
      </footer>
    </div>
  )
}

export default App
