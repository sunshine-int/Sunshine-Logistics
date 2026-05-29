import { ArrowRight, CheckCircle2, MapPin, MessageCircle, Phone, Ship, Warehouse, Plane, PackageCheck } from 'lucide-react'

const company = {
  name: '尚順國際運通',
  phone: '04-22529955',
  email: 'sunshine0422520071@gmail.com',
  address: '台中市西屯區龍洋巷17之7號',
  line: 'https://lin.ee/Dlq7FY2',
  fb: 'https://www.facebook.com/SunshineTXGTW/',
  map: 'https://share.google/oBZlTBPBTKYPpShK5',
}

const services = [
  ['小三通集運', '中國貨回台、茶葉小三通、一般貨件評估。'],
  ['海快／海運', '依貨量、時效與成本，安排適合運輸方式。'],
  ['空運快遞', '急件、樣品、小批量貨件快速安排。'],
  ['報關清關', '協助確認品名、材質、用途、貨值與文件資料。'],
  ['倉儲配送', '集貨、入倉、理貨、派送與進度追蹤。'],
  ['特殊貨評估', '化工、敏感貨、電池、大型家具、大型機具。'],
]

const steps = ['需求確認', '提供產品資料', '評估報價', '集貨入倉', '報關清關', '派送完成']
const special = ['化工產品', '敏感貨物', '電池產品', '大型家具', '大型機具設備']

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#home" className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-400 font-black text-slate-950">S</div>
            <div>
              <div className="font-black tracking-wide">{company.name}</div>
              <div className="text-xs text-cyan-200">Sunshine International Logistics</div>
            </div>
          </a>
          <nav className="hidden gap-6 text-sm text-slate-200 md:flex">
            <a href="#services">服務項目</a>
            <a href="#special">特殊貨物</a>
            <a href="#process">物流流程</a>
            <a href="#quote">線上詢價</a>
            <a href="#contact">聯絡我們</a>
          </nav>
          <a href={company.line} target="_blank" className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950 shadow-glow">LINE 詢價</a>
        </div>
      </header>

      <section id="home" className="bg-grid relative overflow-hidden pt-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 md:grid-cols-2">
          <div>
            <span className="rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">中國｜台灣｜東南亞 進出口物流</span>
            <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
              專業物流流程，<br />每一步都清楚掌握
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-9 text-slate-200">
              尚順國際運通提供小三通、海快、海運、空運、報關清關、倉儲配送服務，協助客戶降低溝通成本與運輸風險。
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#quote" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-slate-950">立即詢價 <ArrowRight size={18}/></a>
              <a href={`tel:${company.phone}`} className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 font-bold text-white"><Phone size={18}/>{company.phone}</a>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <div className="grid gap-4 sm:grid-cols-2">
              {[Ship, Warehouse, Plane, PackageCheck].map((Icon, i) => (
                <div key={i} className="rounded-2xl bg-slate-900/70 p-6">
                  <Icon className="mb-5 text-cyan-300" size={38}/>
                  <div className="font-bold">{['海運併櫃','倉儲理貨','空運快遞','清關配送'][i]}</div>
                  <div className="mt-2 text-sm text-slate-300">專人評估・穩定安排</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-20">
        <h2 className="text-3xl font-black md:text-4xl">服務項目</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map(([title, desc]) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10">
              <CheckCircle2 className="mb-4 text-cyan-300" />
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="special" className="bg-slate-900/70 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="text-3xl font-black md:text-4xl">特殊貨物，也可協助評估</h2>
          <p className="mt-4 text-slate-300">依貨物特性、包裝、重量尺寸與目的地，幫您找到適合的運輸方式。</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {special.map(item => <span key={item} className="rounded-full bg-cyan-300 px-5 py-3 font-bold text-slate-950">✔ {item}</span>)}
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-5 py-20">
        <h2 className="text-3xl font-black md:text-4xl">物流流程</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-6">
          {steps.map((s, i) => (
            <div key={s} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-3xl font-black text-cyan-300">{String(i+1).padStart(2,'0')}</div>
              <div className="mt-3 font-bold">{s}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="quote" className="bg-white py-20 text-slate-950">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-3xl font-black md:text-4xl">線上詢價</h2>
          <p className="mt-4 text-slate-600">請提供品名、材質、用途、數量、重量尺寸與照片，我司將協助評估。</p>
          <div className="mt-8 overflow-hidden rounded-3xl border shadow-xl">
            <iframe title="詢價表單" src="https://docs.google.com/forms/d/e/1FAIpQLScDq36dwppmix3Y2QOqR7JdtzAE9u4e-cvhiD3Nkg2LvkGzsw/viewform?embedded=true" width="100%" height="980" frameBorder="0">正在載入…</iframe>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-slate-950 px-5 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-black">{company.name}</h2>
            <p className="mt-4 text-slate-300">中國貨回台、小三通、海快、海運、空運、報關清關、倉儲配送。</p>
          </div>
          <div className="space-y-4 text-slate-200">
            <a className="flex items-center gap-3" href={`tel:${company.phone}`}><Phone className="text-cyan-300"/> {company.phone}</a>
            <a className="flex items-center gap-3" href={company.line} target="_blank"><MessageCircle className="text-cyan-300"/> LINE 立即詢價</a>
            <a className="flex items-center gap-3" href={company.fb} target="_blank"><span className="text-cyan-300">📘</span> Facebook 粉絲專頁</a>
            <a className="flex items-center gap-3" href={company.map} target="_blank"><MapPin className="text-cyan-300"/> {company.address}</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
