
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
  PackageCheck,
  ShieldCheck,
  Anchor,
  Container,
  Headphones,
  ClipboardCheck,
  Facebook,
  MessageCircle
} from "lucide-react";

const services = [
  { icon: Ship, title: "海運服務", desc: "整櫃 FCL、併櫃 LCL、一般海運回台，適合大貨與穩定出貨需求。" },
  { icon: Plane, title: "空運服務", desc: "急件、樣品與高時效貨件，協助快速安排航班與後段派送。" },
  { icon: Truck, title: "陸運與派送", desc: "中國境內提貨、台灣端派送、偏遠地區配送確認與貨態追蹤。" },
  { icon: Warehouse, title: "倉儲與集貨", desc: "提供集貨、入倉、核對、貼標、分貨與出貨安排等一站式服務。" },
  { icon: FileCheck, title: "報關清關", desc: "協助確認品名、品牌、材質、用途、規格、貨值等資料，降低清關風險。" },
  { icon: Globe2, title: "小三通物流", desc: "熟悉兩岸物流操作，包含茶葉小三通與一般貨品回台需求。" },
];

const flow = [
  { title: "聯繫洽詢", desc: "提供貨品資訊與需求" },
  { title: "報價確認", desc: "依重量、材積、路線評估" },
  { title: "安排集貨", desc: "中國倉／台中倉作業" },
  { title: "出口運輸", desc: "海運、海快、空運安排" },
  { title: "報關清關", desc: "文件審核與清關進度追蹤" },
  { title: "派送完成", desc: "後段配送與簽收確認" },
];

const stats = [
  { value: "150+", label: "服務路線與地區" },
  { value: "10,000+", label: "年度貨件處理經驗" },
  { value: "500+", label: "合作客戶與夥伴" },
  { value: "99.8%", label: "穩定交付目標" },
];

const advantages = [
  "熟悉中國、台灣與東南亞進出口物流操作",
  "依貨品特性規劃海運、海快、空運與小三通方案",
  "重視清關資料完整性，協助降低查驗與延誤風險",
  "提供貨態追蹤與客戶溝通，讓每一步更清楚"
];

export default function App() {
  return (
    <div className="site">
      <header className="header">
        <a className="brand" href="#home">
          <div className="logoMark"><PackageCheck size={25} /></div>
          <div>
            <div className="brandZh">尚順國際運通</div>
            <div className="brandEn">SUNSHINE LOGISTICS</div>
          </div>
        </a>

        <nav className="nav">
          <a href="#home">首頁</a>
          <a href="#services">服務項目</a>
          <a href="#flow">物流流程</a>
          <a href="#about">關於我們</a>
          <a href="#contact">聯絡我們</a>
        </nav>

        <a className="quoteBtn" href="#contact">
          <MessageCircle size={18} />
          立即詢價
        </a>
      </header>

      <main id="home">
        <section className="hero">
          <div className="heroOverlay" />
          <div className="worldGrid" />
          <div className="heroContent">
            <motion.div
              className="heroText"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
            >
              <div className="pill"><ShieldCheck size={18} /> 國際貨運・清關報關・倉儲派送</div>
              <h1>
                尚順國際運通
                <span>全球物流・專業運輸・值得信賴</span>
              </h1>
              <p>
                提供中國與東南亞進出口、小三通、海運、海快、空運、報關清關與倉儲服務。
                以專業、高效、安全的運輸方案，協助您的貨物順利抵達目的地。
              </p>
              <div className="heroActions">
                <a className="primaryBtn" href="#contact">立即詢價 <ArrowRight size={18} /></a>
                <a className="secondaryBtn" href="#services">了解服務</a>
              </div>
            </motion.div>

            <motion.div
              className="heroCard"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.12 }}
            >
              <div className="routeCard">
                <div className="routeTop">
                  <div>
                    <span>Route Network</span>
                    <strong>Asia Logistics Hub</strong>
                  </div>
                  <Globe2 size={32} />
                </div>
                <div className="routeLine">
                  <span>Taichung</span>
                  <i />
                  <span>Xiamen</span>
                  <i />
                  <span>SEA</span>
                </div>
                <div className="cargoIcons">
                  <div><Ship /> 海運</div>
                  <div><Plane /> 空運</div>
                  <div><Truck /> 派送</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="services" className="section services">
          <div className="sectionTitle">
            <span>SERVICES</span>
            <h2>服務項目</h2>
            <p>依照貨件重量、材積、品項、時效與清關需求，規劃合適物流方案。</p>
          </div>

          <div className="serviceGrid">
            {services.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  className="serviceCard"
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                >
                  <Icon className="serviceIcon" />
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="stats">
          {stats.map((item) => (
            <div className="statItem" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </section>

        <section id="flow" className="section flowSection">
          <div className="sectionTitle">
            <span>PROCESS</span>
            <h2>物流流程</h2>
            <p>從詢價、集貨、清關到派送，作業流程透明清楚。</p>
          </div>

          <div className="flowGrid">
            {flow.map((item, index) => (
              <div className="flowItem" key={item.title}>
                <div className="flowNo">{String(index + 1).padStart(2, "0")}</div>
                <div className="flowIcon">
                  {index === 0 && <Headphones />}
                  {index === 1 && <ClipboardCheck />}
                  {index === 2 && <Container />}
                  {index === 3 && <Anchor />}
                  {index === 4 && <FileCheck />}
                  {index === 5 && <CheckCircle2 />}
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="about">
          <div className="aboutImage">
            <div className="imageMock">
              <Container size={76} />
              <span>GLOBAL FREIGHT FORWARDING</span>
            </div>
          </div>
          <div className="aboutText">
            <span className="eyebrow">ABOUT US</span>
            <h2>關於我們</h2>
            <p>
              尚順國際運通致力於提供客戶專業、穩定、高效率的國際物流服務。
              我們重視每一票貨件的資料完整性、運輸安全與清關進度，協助客戶降低物流成本與操作風險。
            </p>
            <div className="advantageList">
              {advantages.map((item) => (
                <div key={item}><CheckCircle2 size={20} /> {item}</div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="contactBox">
            <div>
              <span className="eyebrow">CONTACT</span>
              <h2>需要報價或物流建議？</h2>
              <p>
                請提供品名、材質、用途、尺寸、重量、件數、貨值、出貨地與收貨地，
                我們將協助評估適合的物流方式。
              </p>
            </div>

            <div className="contactCards">
              <a href="tel:04-22529955" className="contactCard">
                <Phone />
                <div>
                  <span>服務電話</span>
                  <strong>04-22529955</strong>
                </div>
              </a>
              <div className="contactCard">
                <Mail />
                <div>
                  <span>Email</span>
                  <strong>service@sunshine-logistics.com</strong>
                </div>
              </div>
              <div className="contactCard">
                <MapPin />
                <div>
                  <span>服務範圍</span>
                  <strong>中國／台灣／東南亞進出口物流</strong>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footerBrand">
          <div className="logoMark"><PackageCheck size={24} /></div>
          <div>
            <strong>尚順國際運通有限公司</strong>
            <span>SUNSHINE INTERNATIONAL LOGISTICS</span>
          </div>
        </div>
        <div className="footerLinks">
          <a href="#services">服務項目</a>
          <a href="#flow">物流流程</a>
          <a href="#contact">聯絡我們</a>
        </div>
        <div className="copyright">© 2026 尚順國際運通有限公司 All Rights Reserved.</div>
      </footer>
    </div>
  );
}
