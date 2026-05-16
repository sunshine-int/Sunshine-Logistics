import { motion } from "framer-motion";
import { Ship, Plane, Globe2, MessageCircle, Facebook } from "lucide-react";

// 所有分頁統一使用首頁背景
const sectionBg =
  "bg-[url('https://images.unsplash.com/photo-1529074963764-98f45c47344b?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center";

export default function App() {
  return (
    <div className="min-h-screen text-white bg-[#061427]">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-[#071a33]/90 backdrop-blur z-50 border-b border-blue-900">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-wide">
              SUNSHINE LOGISTICS
            </h1>
            <p className="text-sm text-blue-300">尚順國際運通</p>
          </div>

          <nav className="hidden md:flex gap-8 text-sm">
            <a href="#home" className="hover:text-cyan-300">首頁</a>
            <a href="#service" className="hover:text-cyan-300">服務項目</a>
            <a href="#route" className="hover:text-cyan-300">物流路線</a>
            <a href="#contact" className="hover:text-cyan-300">聯絡我們</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className={`relative min-h-screen flex items-center justify-center overflow-hidden ${sectionBg}`}
      >
        <div className="absolute inset-0 bg-[#021120]/80"></div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <h2 className="text-4xl md:text-7xl font-black leading-tight">
            每一票貨，
            <br />
            都值得被仔細安排
          </h2>

          <p className="mt-6 text-lg md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            我們重視前端資料確認、清關文件完整性、
            貨況追蹤與後續派送安排，
            協助客戶降低物流風險。
          </p>
        </motion.div>
      </section>

      {/* Services */}
      <section id="service" className={`relative py-24 px-6 ${sectionBg}`}>
        <div className="absolute inset-0 bg-[#021120]/85"></div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-black text-center mb-16 text-cyan-200">
            海運｜空運｜全球配送
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Ship size={42} />,
                title: "海運物流",
                text: "中國、台灣、東南亞海運整合配送",
              },
              {
                icon: <Plane size={42} />,
                title: "空運快遞",
                text: "國際空運、小三通快速配送服務",
              },
              {
                icon: <Globe2 size={42} />,
                title: "全球物流",
                text: "全球跨境物流與報關整合方案",
              },
            ].map((item, index) => (
              <motion.div
                whileHover={{ y: -8 }}
                key={index}
                className="bg-[#102544]/90 rounded-3xl p-8 border border-blue-900 shadow-2xl backdrop-blur"
              >
                <div className="text-cyan-300 mb-5">{item.icon}</div>
                <h4 className="text-2xl font-bold mb-4 text-white">{item.title}</h4>
                <p className="text-blue-200 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Advantages */}
      <section className={`relative py-24 px-6 ${sectionBg}`}>
        <div className="absolute inset-0 bg-[#f3f7ff]"></div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-[#2563eb] font-black mb-4 tracking-[0.25em]">
              公司優勢
            </p>

            <h3 className="text-5xl md:text-7xl font-black leading-tight text-[#0f172a]">
              跨境物流
              <br />
              專業整合方案
            </h3>

            <p className="mt-8 text-xl leading-loose text-slate-700 max-w-4xl">
              提供中國、台灣、日本、東南亞與全球物流規劃，
              包含海運、空運、小三通、報關清關、
              倉儲集貨與後段配送服務。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "風險控管",
                text: "重視前端資料確認與清關文件完整性。",
              },
              {
                title: "路線整合",
                text: "熟悉中國、台灣、日本與東南亞物流流程。",
              },
              {
                title: "方案彈性",
                text: "可依貨品特性安排海運、空運與小三通。",
              },
              {
                title: "貨態追蹤",
                text: "提供貨況追蹤與後段派送安排。",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 border border-blue-100 shadow-xl"
              >
                <h4 className="text-2xl font-black text-[#0f172a] mb-4">
                  {item.title}
                </h4>

                <p className="text-slate-600 leading-8">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Route */}
      <section id="route" className={`relative py-24 px-6 ${sectionBg}`}>
        <div className="absolute inset-0 bg-[#021120]/85"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-8">中國・台灣・東南亞・全球</h3>

          <div className="bg-[#0d213d]/90 rounded-[40px] p-10 border border-cyan-800 shadow-2xl backdrop-blur">
            <div className="text-2xl md:text-5xl font-black tracking-widest leading-loose">
              🇨🇳 中國
              <span className="mx-3 text-cyan-300">⇄</span>
              🇹🇼 台灣
              <span className="mx-3 text-cyan-300">⇄</span>
              🌏 東南亞
              <span className="mx-3 text-cyan-300">⇄</span>
              🌍 全球
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className={`relative py-24 px-6 ${sectionBg}`}>
        <div className="absolute inset-0 bg-[#021120]/85"></div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-black text-center mb-16 text-cyan-200">
            物流詢價與聯絡方式
          </h3>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="bg-[#102544]/90 rounded-3xl p-10 border border-blue-900 backdrop-blur">
              <h4 className="text-2xl font-bold mb-6">尚順國際運通</h4>

              <p className="text-blue-100 leading-8">
                中國進出口｜東南亞物流｜全球配送
                <br />
                海運｜空運｜小三通｜報關｜倉儲配送
              </p>

              <div className="flex flex-col gap-4 mt-10">
                <a
                  href="https://lin.ee/P1qb3zg"
                  target="_blank"
                  className="flex items-center gap-3 bg-green-500 text-black font-bold px-6 py-4 rounded-2xl hover:scale-105 transition"
                >
                  <MessageCircle />
                  LINE 聯絡我們
                </a>

                <a
                  href="https://www.facebook.com/SunshineTXGTW/"
                  target="_blank"
                  className="flex items-center gap-3 bg-blue-500 px-6 py-4 rounded-2xl font-bold hover:scale-105 transition"
                >
                  <Facebook />
                  Facebook 粉絲專頁
                </a>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScDq36dwppmix3Y2QOqR7JdtzAE9u4e-cvhiD3Nkg2LvkGzsw/viewform?embedded=true"
                width="100%"
                height="1200"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="詢價表單"
              >
                載入中…
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
