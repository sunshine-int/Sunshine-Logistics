import React from "react";
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
  MessageCircle,
  Package,
  ClipboardCheck,
  Headphones,
} from "lucide-react";

const company = {
  address: "台中市西屯區龍洋巷17之7號",
  phone: "04-22529955",
  email: "sunshine0422520071@gmail.com",
  facebook: "https://www.facebook.com/SunshineTXGTW/",
  line: "https://lin.ee/Dlq7FY2",
  map: "https://share.google/oBZlTBPBTKYPpShK5",
  form: "https://docs.google.com/forms/d/e/1FAIpQLScDq36dwppmix3Y2QOqR7JdtzAE9u4e-cvhiD3Nkg2LvkGzsw/viewform?embedded=true",
  logo: "/logo.png",
  lineQr: "/line-qr.png",
  aboutImage: "/about-logistics.png",
};

const services = [
  ["海運服務", "整櫃、併櫃、大貨回台，依重量、材積與時效安排合適方案。", Ship],
  ["空運服務", "急件、樣品與高時效貨件，協助快速安排航班與派送。", Plane],
  ["陸運派送", "提供中國端提貨、台灣端配送與到貨簽收追蹤。", Truck],
  ["倉儲服務", "提供入倉、集貨、核對、貼標、分貨與出貨安排。", Warehouse],
  ["報關服務", "協助確認品名、材質、用途、規格、貨值，降低清關風險。", FileCheck],
  ["國際快遞", "與國際快遞合作，提供門到門快速配送服務。", Globe2],
];

const process = [
  ["聯繫洽詢", "客戶提出需求，我們提供專業建議", Headphones],
  ["報價確認", "提供報價單並確認服務內容", ClipboardCheck],
  ["安排出貨", "安排貨物提取或收貨作業", Package],
  ["運輸配送", "海運、空運、陸運全球運輸", Ship],
  ["清關服務", "專業報關，快速通關", FileCheck],
  ["貨物送達", "貨物安全送達，完成交付", CheckCircle2],
];

const advantages = [
  ["專業團隊", "經驗豐富的物流專家"],
  ["全球網絡", "遍佈全球的代理夥伴"],
  ["安全可靠", "貨物安全保障"],
  ["客戶至上", "提供客製化服務"],
];

export default function App() {
  return (
    <div className="page">
      <style>{`
        *{box-sizing:border-box} html{scroll-behavior:smooth} body{margin:0;font-family:"Noto Sans TC","Microsoft JhengHei",Arial,sans-serif;color:#071a33;background:#f6f8fc} a{text-decoration:none;color:inherit}
        .hero{position:relative;min-height:650px;color:#fff;overflow:hidden;background:linear-gradient(90deg,rgba(1,18,45,.96),rgba(4,42,91,.82),rgba(0,25,58,.45)),url("https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=2200&q=80");background-size:cover;background-position:center}
        .hero:before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 55% 25%,rgba(0,180,255,.28),transparent 25%),linear-gradient(rgba(255,255,255,.055) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.055) 1px,transparent 1px);background-size:auto,52px 52px,52px 52px}
        .wrap{max-width:1180px;margin:0 auto;padding:0 24px;position:relative}
        .nav{height:90px;display:flex;align-items:center;justify-content:space-between;gap:22px}
        .brand{display:flex;align-items:center;gap:14px}.logo{width:82px;height:82px;object-fit:contain;border-radius:16px;background:#fff;padding:5px}
        .brand strong{display:block;font-size:25px;letter-spacing:1px}.brand span{font-size:12px;letter-spacing:2.5px;opacity:.86}
        .links{display:flex;gap:34px;font-weight:800;font-size:15px}.links a:hover{color:#93c5fd}
        .quote{display:inline-flex;align-items:center;gap:8px;border:1px solid rgba(255,255,255,.55);background:rgba(37,99,235,.45);border-radius:10px;padding:13px 20px;font-weight:900}
        .heroText{padding:90px 0 110px;max-width:660px}.heroText h1{font-size:clamp(44px,6vw,70px);line-height:1.08;margin:0;font-weight:950}.heroText h2{font-size:clamp(28px,4vw,42px);margin:20px 0 0}.heroText p{font-size:18px;line-height:2;color:#e2e8f0;margin:26px 0 0}
        .actions{display:flex;gap:16px;margin-top:36px;flex-wrap:wrap}.btn{display:inline-flex;gap:10px;align-items:center;justify-content:center;min-width:150px;padding:16px 24px;border-radius:8px;font-weight:900}.primary{background:#075fdb}.outline{border:1px solid rgba(255,255,255,.55);background:rgba(255,255,255,.08)}
        .section{padding:74px 24px}.title{text-align:center;margin-bottom:44px}.title h2{font-size:34px;font-weight:950;margin:0}.bar{width:44px;height:4px;background:#075fdb;border-radius:999px;margin:14px auto 0}
        .services{background:#fff}.grid6{max-width:1180px;margin:0 auto;display:grid;grid-template-columns:repeat(6,1fr);gap:16px}.card{background:#fff;border:1px solid #e6edf6;box-shadow:0 12px 40px rgba(15,23,42,.06);border-radius:10px;padding:34px 18px;text-align:center;min-height:238px}.card:hover{transform:translateY(-5px);transition:.25s}.icon{color:#064ca8;margin-bottom:20px}.card h3{margin:0 0 12px;color:#06408e;font-size:19px}.card p{margin:0;color:#4b5563;line-height:1.85;font-size:14px}
        .stats{background:linear-gradient(90deg,#002d62,#063d7b);color:#fff;padding:38px 24px}.statsGrid{max-width:1000px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:18px}.stat{text-align:center;border-right:1px solid rgba(255,255,255,.18)}.stat:last-child{border:0}.stat strong{display:block;font-size:34px}.stat span{color:#dbeafe;font-weight:700}
        .process{background:#fff}.procGrid{max-width:1080px;margin:0 auto;display:grid;grid-template-columns:repeat(6,1fr);gap:18px}.proc{text-align:center}.no{width:42px;height:42px;border-radius:999px;background:#064ca8;color:#fff;display:grid;place-items:center;font-weight:900;margin:0 auto 18px}.proc svg{color:#064ca8;margin-bottom:14px}.proc h3{margin:0 0 8px;font-size:18px}.proc p{margin:0;color:#64748b;line-height:1.65;font-size:14px}
        .about{background:#f8fbff}.aboutInner{max-width:1080px;margin:0 auto;display:grid;grid-template-columns:.9fr 1.1fr;gap:48px;align-items:center}.aboutImg{min-height:285px;border-radius:8px;overflow:hidden;background:#e2e8f0;box-shadow:0 22px 55px rgba(15,23,42,.14)}.aboutImg img{width:100%;height:285px;object-fit:cover;display:block}.aboutText h2{font-size:34px;margin:0}.aboutText p{color:#475569;line-height:1.9;font-size:17px}.adv{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:30px}.advItem{text-align:center;color:#06408e;font-weight:900}.advItem span{display:block;color:#475569;font-size:13px;font-weight:600;margin-top:5px}
        .contact{background:linear-gradient(90deg,#002d62,#03254f);color:#fff;padding:60px 24px 38px}.contactGrid{max-width:1180px;margin:0 auto;display:grid;grid-template-columns:1.1fr 1fr .8fr .7fr;gap:34px}.footLogo{display:flex;align-items:center;gap:14px;margin-bottom:18px}.footLogo img{width:58px;height:58px;object-fit:contain;border-radius:14px;background:#fff;padding:5px}.footLogo strong{font-size:24px}.contact h3{margin:0 0 22px;font-size:22px}.contact p,.contact a{color:#dbeafe;line-height:1.9;font-size:15px}.contactList{display:grid;gap:10px}.contactLink{display:flex;gap:10px;align-items:flex-start}.socials{display:flex;gap:12px;margin-top:16px}.socials a{width:36px;height:36px;border-radius:999px;background:rgba(255,255,255,.12);display:grid;place-items:center}.qr img{width:150px;max-width:100%;border-radius:8px;background:#fff;padding:6px}
        .formSec{background:#f8fafc;padding:74px 24px}.formInner{max-width:1000px;margin:0 auto;text-align:center}.formFrame{margin-top:30px;overflow:hidden;border-radius:22px;background:#fff;box-shadow:0 20px 60px rgba(15,23,42,.1);border:1px solid #e5e7eb}.formFrame iframe{width:100%;min-height:2546px;border:0;display:block}.copy{border-top:1px solid rgba(255,255,255,.12);margin-top:38px;padding-top:20px;text-align:center;color:#cbd5e1;font-size:14px}
        .top{position:fixed;right:18px;bottom:18px;width:54px;height:54px;border-radius:999px;background:#0b3a75;border:1px solid rgba(255,255,255,.35);color:#fff;display:grid;place-items:center;font-size:12px;font-weight:900}
        @media(max-width:1024px){.links{display:none}.grid6{grid-template-columns:repeat(3,1fr)}.procGrid{grid-template-columns:repeat(3,1fr)}.aboutInner{grid-template-columns:1fr}.contactGrid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:640px){.brand strong{font-size:18px}.brand span{display:none}.logo{width:46px;height:46px}.quote{font-size:13px;padding:10px 12px}.hero{min-height:auto}.heroText{padding:66px 0 82px}.actions{flex-direction:column}.btn{width:100%}.grid6,.procGrid,.statsGrid,.adv,.contactGrid{grid-template-columns:1fr}.stat{border:0}.section{padding:58px 20px}}

        /* 手機版排版優化 */
        @media (max-width: 768px) {
          body {
            overflow-x: hidden;
          }

          .header {
            position: sticky;
            top: 0;
          }

          .header-inner {
            padding: 12px 16px;
            align-items: center;
          }

          .brand {
            min-width: 0;
            gap: 10px;
          }

          .brand-title {
            font-size: 17px;
            white-space: nowrap;
            line-height: 1.2;
          }

          .brand-subtitle {
            display: none;
          }

          .logo {
            width: 60px;
            height: 60px;
            border-radius: 14px;
            flex: none;
          }

          .header-cta {
            padding: 10px 12px;
            border-radius: 12px;
            font-size: 13px;
            flex: none;
          }

          .hero-inner {
            display: block;
            padding: 58px 16px 64px;
          }

          .tag {
            font-size: 13px;
            line-height: 1.5;
            padding: 9px 12px;
            margin-bottom: 18px;
          }

          .hero h1 {
            font-size: 36px;
            line-height: 1.16;
            letter-spacing: -0.6px;
          }

          .hero h1 span {
            font-size: 25px;
            line-height: 1.35;
            margin-top: 12px;
          }

          .hero p {
            font-size: 16px;
            line-height: 1.85;
            margin-top: 20px;
          }

          .hero-actions {
            display: grid;
            grid-template-columns: 1fr;
            gap: 12px;
            margin-top: 28px;
          }

          .btn-primary,
          .btn-secondary {
            width: 100%;
            min-height: 52px;
            border-radius: 14px;
            font-size: 15px;
            text-align: center;
          }

          .hero-card {
            margin-top: 28px;
            padding: 20px;
            border-radius: 24px;
          }

          .hero-card-title {
            align-items: flex-start;
          }

          .hero-card-title strong {
            font-size: 22px;
          }

          .route-box {
            height: 180px;
            border-radius: 20px;
          }

          .section {
            padding: 56px 16px;
          }

          .section-title {
            margin-bottom: 28px;
          }

          .section h2,
          .contact-box h2,
          .form-title h2 {
            font-size: 28px;
            line-height: 1.35;
          }

          .section-title p,
          .contact-box p,
          .form-title p {
            font-size: 15px;
            line-height: 1.8;
          }

          .service-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .service-card {
            padding: 22px;
            border-radius: 22px;
          }

          .service-card h3 {
            font-size: 20px;
          }

          .process-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .process-item {
            padding: 18px;
            border-radius: 20px;
          }

          .about {
            grid-template-columns: 1fr;
            gap: 26px;
          }

          .about-visual {
            min-height: 240px;
            border-radius: 24px;
            padding: 18px;
          }

          .about-badge {
            max-width: 100%;
            padding: 16px;
            border-radius: 18px;
          }

          .about-badge strong {
            font-size: 18px;
          }

          .about-text p {
            font-size: 15px;
            line-height: 1.85;
          }

          .advantage-list {
            gap: 10px;
          }

          .advantage-item {
            font-size: 15px;
            line-height: 1.6;
          }

          .contact-box {
            grid-template-columns: 1fr;
            gap: 24px;
            padding: 24px;
            border-radius: 26px;
          }

          .contact-grid {
            gap: 12px;
          }

          .contact-card,
          .social-card {
            padding: 15px;
            border-radius: 18px;
            align-items: flex-start;
          }

          .contact-card strong {
            font-size: 15px;
            line-height: 1.5;
          }

          .social-card {
            align-items: center;
            justify-content: center;
            text-align: center;
          }

          .line-qr {
            padding: 16px;
            border-radius: 22px;
          }

          .line-qr img {
            width: 150px;
          }

          .form-section {
            padding: 56px 16px;
          }

          .form-frame {
            border-radius: 22px;
          }

          .form-frame iframe {
            min-height: 2650px;
          }

          .footer-inner {
            flex-direction: column;
            text-align: center;
            gap: 8px;
          }
        }


        /* 電腦版統計區塊置中優化 */
        .stats,
        .statsGrid,
        .stat {
          box-sizing: border-box;
        }

        .stats {
          width: 100%;
          background: linear-gradient(90deg, #002d62, #063d7b);
          color: #fff;
          padding: 34px 24px;
        }

        .statsGrid {
          max-width: 980px;
          width: 100%;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          align-items: center;
          gap: 0;
        }

        .stat {
          text-align: center;
          padding: 0 24px;
          border-right: 1px solid rgba(255,255,255,.18);
        }

        .stat:last-child {
          border-right: none;
        }

        .stat strong {
          display: block;
          font-size: 34px;
          line-height: 1.1;
          font-weight: 950;
          margin-bottom: 8px;
        }

        .stat span {
          display: block;
          color: #dbeafe;
          font-weight: 800;
          font-size: 14px;
        }

        @media (max-width: 768px) {
          .stats {
            padding: 28px 16px;
          }

          .statsGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 22px 0;
          }

          .stat {
            padding: 0 12px;
          }

          .stat:nth-child(2) {
            border-right: none;
          }

          .stat strong {
            font-size: 28px;
          }

          .stat span {
            font-size: 13px;
          }
        }


        /* 手機首頁往上調整 */
        @media (max-width: 768px) {
          .hero {
            min-height: auto;
          }

          .hero-inner {
            padding-top: 28px !important;
            padding-bottom: 48px !important;
          }

          .heroText,
          .hero-content {
            padding-top: 24px !important;
            padding-bottom: 44px !important;
          }

          .tag {
            margin-bottom: 12px !important;
          }

          .hero h1 {
            margin-top: 0 !important;
          }

          .hero-actions {
            margin-top: 22px !important;
          }

          .top {
            right: 14px;
            bottom: 86px;
            width: 48px;
            height: 48px;
            font-size: 11px;
          }
        }


        /* 修正手機版按鈕被遮住 */
        @media (max-width: 768px) {
          .hero {
            padding-bottom: 90px !important;
          }

          .hero-inner {
            padding-bottom: 120px !important;
          }

          .hero-actions {
            margin-bottom: 40px !important;
          }

          .btn-secondary,
          .outline {
            margin-bottom: 24px !important;
          }

          .top {
            bottom: 110px !important;
          }
        }


        /* 手機版首頁內容置中 */
        @media (max-width: 768px) {

          .hero-inner,
          .heroText,
          .hero-content {
            text-align: center !important;
            align-items: center !important;
            justify-content: center !important;
          }

          .hero p {
            margin-left: auto !important;
            margin-right: auto !important;
            max-width: 92% !important;
          }

          .hero-actions {
            justify-content: center !important;
            align-items: center !important;
          }

          .btn-primary,
          .btn-secondary,
          .outline {
            max-width: 320px;
            margin-left: auto !important;
            margin-right: auto !important;
          }

          .header-inner {
            justify-content: space-between !important;
          }

          .brand {
            justify-content: center !important;
            align-items: center !important;
          }

          .hero-card,
          .route-box {
            margin-left: auto !important;
            margin-right: auto !important;
          }

          .top {
            right: 18px !important;
          }
        }


        /* 最終版：手機首頁往上＋統計區塊置中 */
        .stats {
          width: 100% !important;
          background: linear-gradient(90deg, #002d62, #063d7b) !important;
          color: #fff !important;
          padding: 30px 20px !important;
        }

        .statsGrid {
          max-width: 980px !important;
          width: 100% !important;
          margin: 0 auto !important;
          display: grid !important;
          grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
          align-items: center !important;
          justify-items: center !important;
          gap: 0 !important;
        }

        .stat {
          width: 100% !important;
          text-align: center !important;
          padding: 0 18px !important;
          border-right: 1px solid rgba(255,255,255,.18) !important;
        }

        .stat:last-child {
          border-right: none !important;
        }

        .stat strong {
          display: block !important;
          font-size: 32px !important;
          line-height: 1.1 !important;
          margin-bottom: 8px !important;
        }

        .stat span {
          display: block !important;
          font-size: 14px !important;
          line-height: 1.4 !important;
        }

        @media (max-width: 768px) {
          .hero-inner {
            padding-top: 12px !important;
            padding-bottom: 62px !important;
          }

          .heroText,
          .hero-content {
            padding-top: 8px !important;
            padding-bottom: 36px !important;
          }

          .hero h1 {
            margin-top: 0 !important;
          }

          .hero p {
            margin-top: 16px !important;
          }

          .hero-actions {
            margin-top: 22px !important;
            margin-bottom: 22px !important;
          }

          .stats {
            padding: 22px 12px !important;
          }

          .statsGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 18px 0 !important;
          }

          .stat {
            padding: 0 10px !important;
          }

          .stat:nth-child(2) {
            border-right: none !important;
          }

          .stat strong {
            font-size: 28px !important;
          }

          .stat span {
            font-size: 13px !important;
          }
        }


        /* 統計區塊最終修正：電腦版強制置中 */
        .stats {
          width: 100% !important;
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          padding: 34px 24px !important;
          background: linear-gradient(90deg, #002d62, #063d7b) !important;
        }

        .stats > .statsGrid,
        .statsGrid {
          width: min(980px, 100%) !important;
          max-width: 980px !important;
          margin-left: auto !important;
          margin-right: auto !important;
          display: grid !important;
          grid-template-columns: repeat(4, 1fr) !important;
          justify-content: center !important;
          align-items: center !important;
        }

        .stats .stat,
        .stat {
          min-width: 0 !important;
          width: 100% !important;
          text-align: center !important;
          padding: 0 28px !important;
        }

        @media (min-width: 769px) {
          .statsGrid {
            transform: translateX(0) !important;
          }
        }

        @media (max-width: 768px) {
          .stats {
            padding: 24px 14px !important;
          }

          .stats > .statsGrid,
          .statsGrid {
            width: 100% !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 18px 0 !important;
          }

          .stats .stat,
          .stat {
            padding: 0 12px !important;
          }
        }


        /* 關於我們區塊放大與對齊 */
        .about,
        .aboutSection,
        .aboutInner {
          align-items: flex-start !important;
        }

        .about-visual,
        .aboutImg {
          width: 100% !important;
          min-height: 420px !important;
          height: 420px !important;
          border-radius: 28px !important;
        }

        .about-visual img,
        .aboutImg img {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
        }

        .about-text,
        .aboutText {
          padding-top: 6px !important;
        }

        .about-text h2,
        .aboutText h2 {
          font-size: 48px !important;
          margin-top: 0 !important;
        }

        .about-text p,
        .aboutText p {
          font-size: 18px !important;
          line-height: 2 !important;
        }

        @media (max-width: 768px) {
          .about-visual,
          .aboutImg {
            min-height: 280px !important;
            height: 280px !important;
          }

          .about-text h2,
          .aboutText h2 {
            font-size: 34px !important;
          }

          .about-text p,
          .aboutText p {
            font-size: 15px !important;
            line-height: 1.9 !important;
          }
        }


        .btn-line{
          display:flex;
          align-items:center;
          justify-content:center;
          gap:10px;
          width:100%;
          max-width:320px;
          min-height:56px;
          margin:14px auto 0;
          border-radius:18px;
          background:#16a34a;
          color:#fff;
          font-size:20px;
          font-weight:900;
          text-decoration:none;
          box-shadow:0 10px 25px rgba(22,163,74,.28);
          transition:.25s;
        }

        .btn-line:hover{
          transform:translateY(-2px);
          background:#15803d;
        }

        @media (max-width:768px){
          .btn-line{
            min-height:54px;
            font-size:18px;
            border-radius:16px;
            margin-top:14px;
          }
        }


        /* 關於我們區塊加寬：與上方流程區塊同寬 */
        .about {
          max-width: 1200px !important;
          width: 100% !important;
          margin-left: auto !important;
          margin-right: auto !important;
          padding-left: 20px !important;
          padding-right: 20px !important;
          grid-template-columns: 1fr 1.1fr !important;
          gap: 56px !important;
        }

        .about-visual,
        .aboutImg {
          width: 100% !important;
          min-height: 440px !important;
          height: 440px !important;
        }

        .about-text,
        .aboutText {
          width: 100% !important;
        }

        @media (max-width: 768px) {
          .about {
            grid-template-columns: 1fr !important;
            padding-left: 16px !important;
            padding-right: 16px !important;
            gap: 26px !important;
          }

          .about-visual,
          .aboutImg {
            min-height: 280px !important;
            height: 280px !important;
          }
        }


        /* 首頁按鈕與關於我們區塊最終調整 */
        .hero-actions {
          display: flex !important;
          flex-wrap: wrap !important;
          align-items: center !important;
          gap: 14px !important;
        }

        .hero-actions .btn-primary,
        .hero-actions .btn-secondary,
        .hero-actions .btn-line {
          width: auto !important;
          min-width: 140px !important;
          min-height: 52px !important;
          margin: 0 !important;
          padding: 15px 24px !important;
          border-radius: 10px !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          font-size: 16px !important;
          font-weight: 900 !important;
          line-height: 1 !important;
        }

        .hero-actions .btn-line {
          background: #16a34a !important;
          color: #fff !important;
          border: none !important;
          box-shadow: 0 10px 25px rgba(22,163,74,.24) !important;
        }

        .hero-actions .btn-line:hover {
          background: #15803d !important;
          transform: translateY(-2px);
        }

        /* 關於我們：放大到跟物流流程視覺範圍一致 */
        #about.section.about {
          max-width: none !important;
          width: 100% !important;
          padding: 84px 24px !important;
          margin: 0 !important;
          background: #f8fbff !important;
          display: block !important;
        }

        #about .aboutInner,
        #about.about {
          max-width: 1200px !important;
          width: 100% !important;
          margin: 0 auto !important;
        }

        #about .aboutInner {
          display: grid !important;
          grid-template-columns: 1fr 1.15fr !important;
          gap: 56px !important;
          align-items: center !important;
        }

        #about .about-visual,
        #about .aboutImg {
          width: 100% !important;
          min-height: 430px !important;
          height: 430px !important;
          border-radius: 28px !important;
        }

        #about .about-text,
        #about .aboutText {
          width: 100% !important;
        }

        @media (max-width: 768px) {
          .hero-actions {
            display: grid !important;
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }

          .hero-actions .btn-primary,
          .hero-actions .btn-secondary,
          .hero-actions .btn-line {
            width: 100% !important;
            max-width: 320px !important;
            margin-left: auto !important;
            margin-right: auto !important;
            border-radius: 16px !important;
          }

          #about.section.about {
            padding: 56px 16px !important;
          }

          #about .aboutInner {
            grid-template-columns: 1fr !important;
            gap: 26px !important;
          }

          #about .about-visual,
          #about .aboutImg {
            min-height: 280px !important;
            height: 280px !important;
          }
        }


        /* 首頁按鈕順序與 LINE 加好友按鈕 */
        .lineBtn {
          background: #16a34a !important;
          color: #fff !important;
          border: none !important;
          box-shadow: 0 10px 25px rgba(22,163,74,.25);
        }

        .lineBtn:hover {
          background: #15803d !important;
        }

        /* 首頁文字區塊加寬，與服務項目視覺範圍更一致 */
        .heroText {
          max-width: 900px !important;
        }

        .heroText p {
          max-width: 850px !important;
        }

        @media (max-width: 768px) {
          .heroText {
            max-width: 100% !important;
          }

          .actions {
            display: grid !important;
            grid-template-columns: 1fr !important;
            gap: 12px !important;
            justify-items: center !important;
          }

          .actions .btn {
            width: 100% !important;
            max-width: 320px !important;
          }
        }


        /* 手機版首頁重新排版：縮短高度、按鈕完整顯示 */
        @media (max-width: 768px) {
          .top {
            display: none !important;
          }

          .hero {
            min-height: auto !important;
            background-position: center top !important;
          }

          .heroText {
            max-width: 100% !important;
            padding: 34px 18px 70px !important;
            text-align: center !important;
          }

          .heroText h1 {
            font-size: 40px !important;
            line-height: 1.15 !important;
            margin: 22px 0 0 !important;
            letter-spacing: -1px !important;
          }

          .heroText h2 {
            font-size: 28px !important;
            line-height: 1.42 !important;
            margin: 18px 0 0 !important;
          }

          .heroText p {
            max-width: 96% !important;
            margin: 18px auto 0 !important;
            font-size: 17px !important;
            line-height: 1.9 !important;
          }

          .actions {
            display: grid !important;
            grid-template-columns: 1fr !important;
            gap: 12px !important;
            width: 100% !important;
            max-width: 330px !important;
            margin: 28px auto 0 !important;
          }

          .actions .btn {
            width: 100% !important;
            min-height: 54px !important;
            padding: 14px 18px !important;
            border-radius: 16px !important;
            font-size: 18px !important;
            line-height: 1.1 !important;
          }

          .actions .outline {
            order: 1 !important;
          }

          .actions .primary {
            order: 2 !important;
          }

          .actions .lineBtn {
            order: 3 !important;
            background: #16a34a !important;
            color: #fff !important;
            border: none !important;
            box-shadow: 0 10px 25px rgba(22,163,74,.25) !important;
          }

          .nav {
            height: auto !important;
            padding: 16px 0 8px !important;
          }

          .brand {
            justify-content: center !important;
            width: 100% !important;
          }

          .brand .logo {
            width: 72px !important;
            height: 72px !important;
          }

          .brand strong {
            font-size: 22px !important;
            line-height: 1.25 !important;
          }

          .brand span {
            display: block !important;
            font-size: 10px !important;
            letter-spacing: 1.6px !important;
          }
        }

        @media (max-width: 430px) {
          .heroText {
            padding-top: 24px !important;
            padding-bottom: 92px !important;
          }

          .heroText h1 {
            font-size: 36px !important;
          }

          .heroText h2 {
            font-size: 25px !important;
          }

          .heroText p {
            font-size: 16px !important;
            line-height: 1.82 !important;
          }

          .actions {
            max-width: 315px !important;
            margin-top: 24px !important;
          }

          .actions .btn {
            min-height: 52px !important;
            font-size: 17px !important;
          }
        }


        /* 手機版首頁內容再往上移 */
        @media (max-width: 768px) {

          .heroText {
            padding-top: 8px !important;
            padding-bottom: 24px !important;
            transform: translateY(-63px) !important;
          }

          .actions {
            margin-top: 18px !important;
          }

          .hero {
            padding-bottom: 0 !important;
            min-height: auto !important;
          }

          .nav {
            padding-bottom: 0 !important;
          }

          .brand {
            margin-bottom: 6px !important;
          }
        }

        @media (max-width: 430px) {

          .heroText {
            transform: translateY(-68px) !important;
            padding-bottom: 150px !important;
          }

          .heroText h1 {
            margin-top: 12px !important;
          }

          .actions {
            margin-top: 14px !important;
          }
        }


        /* 修正手機版 LOGO 與主標題重疊 */
        @media (max-width: 768px) {
          .heroText {
            transform: none !important;
            padding-top: 16px !important;
            padding-bottom: 120px !important;
          }

          .brand {
            margin-bottom: 28px !important;
          }

          .brand .logo,
          .logo {
            width: 60px !important;
            height: 60px !important;
          }

          .brand strong {
            font-size: 20px !important;
            line-height: 1.35 !important;
          }

          .brand span {
            font-size: 10px !important;
            letter-spacing: 1.4px !important;
          }

          .heroText h1 {
            margin-top: 26px !important;
            font-size: 34px !important;
            line-height: 1.2 !important;
          }

          .heroText h2 {
            font-size: 24px !important;
            line-height: 1.45 !important;
            margin-top: 18px !important;
          }

          .heroText p {
            font-size: 16px !important;
            line-height: 1.85 !important;
            margin-top: 18px !important;
          }

          .actions {
            margin-top: 24px !important;
            gap: 12px !important;
          }

          .actions .btn {
            min-height: 52px !important;
          }
        }

        @media (max-width: 430px) {
          .heroText {
            transform: none !important;
            padding-top: 14px !important;
            padding-bottom: 130px !important;
          }

          .brand {
            margin-bottom: 24px !important;
          }

          .heroText h1 {
            margin-top: 24px !important;
            font-size: 32px !important;
          }

          .heroText h2 {
            font-size: 23px !important;
          }
        }


        /* 手機版最終調整：刪除重複標題、上方品牌放大、內容上移 */
        @media (max-width: 768px) {
          .top {
            display: none !important;
          }

          .hero {
            min-height: auto !important;
            padding-bottom: 0 !important;
            background-position: center top !important;
          }

          .nav {
            padding-top: 18px !important;
            padding-bottom: 0 !important;
            height: auto !important;
          }

          .brand {
            width: 100% !important;
            justify-content: center !important;
            align-items: center !important;
            gap: 14px !important;
            margin-bottom: 18px !important;
          }

          .brand .logo,
          .logo {
            width: 90px !important;
            height: 90px !important;
            border-radius: 18px !important;
          }

          .brand strong {
            font-size: 42px !important;
            line-height: 1.2 !important;
            letter-spacing: 1px !important;
          }

          .brand span {
            display: block !important;
            font-size: 20px !important;
            letter-spacing: 2.4px !important;
            margin-top: 4px !important;
          }

          .heroText {
            transform: translateY(-40px) !important;
            padding: 0 18px 96px !important;
            text-align: center !important;
            max-width: 100% !important;
          }

          .heroText h1 {
            display: none !important;
          }

          .heroText h2 {
            font-size: 30px !important;
            line-height: 1.34 !important;
            margin: 10px auto 0 !important;
            max-width: 92% !important;
          }

          .heroText p {
            max-width: 92% !important;
            margin: 16px auto 0 !important;
            font-size: 16px !important;
            line-height: 1.75 !important;
          }

          .actions {
            display: grid !important;
            grid-template-columns: 1fr !important;
            gap: 10px !important;
            width: 100% !important;
            max-width: 315px !important;
            margin: 22px auto 0 !important;
          }

          .actions .btn {
            width: 100% !important;
            min-height: 48px !important;
            padding: 12px 16px !important;
            border-radius: 15px !important;
            font-size: 17px !important;
            line-height: 1.1 !important;
          }

          .actions .outline {
            order: 1 !important;
          }

          .actions .primary {
            order: 2 !important;
          }

          .actions .lineBtn {
            order: 3 !important;
            background: #16a34a !important;
            color: #fff !important;
            border: none !important;
            box-shadow: 0 10px 25px rgba(22,163,74,.25) !important;
          }
        }

        @media (max-width: 430px) {
          .brand .logo,
          .logo {
            width: 70px !important;
            height: 70px !important;
          }

          .brand strong {
            font-size: 24px !important;
          }

          .brand span {
            font-size: 12px !important;
            letter-spacing: 2px !important;
          }

          .heroText {
            transform: translateY(-34px) !important;
            padding-bottom: 110px !important;
          }

          .heroText h2 {
            font-size: 27px !important;
            line-height: 1.35 !important;
          }

          .heroText p {
            font-size: 15.5px !important;
            line-height: 1.68 !important;
          }

          .actions {
            margin-top: 18px !important;
            gap: 9px !important;
            max-width: 300px !important;
          }

          .actions .btn {
            min-height: 46px !important;
            font-size: 16px !important;
          }
        }


        /* LOGO 往上＋放大 */
        @media (max-width: 768px) {

          .brand {
            transform: translateY(-18px) !important;
            margin-bottom: 8px !important;
          }

          .brand .logo,
          .logo {
            width: 92px !important;
            height: 92px !important;
            border-radius: 22px !important;
          }

          .brand strong {
            font-size: 30px !important;
            line-height: 1.15 !important;
          }

          .brand span {
            font-size: 14px !important;
            letter-spacing: 2.8px !important;
          }

          .heroText {
            transform: translateY(-42px) !important;
          }
        }

        @media (max-width: 430px) {

          .brand {
            transform: translateY(-22px) !important;
          }

          .brand .logo,
          .logo {
            width: 86px !important;
            height: 86px !important;
          }

          .brand strong {
            font-size: 28px !important;
          }

          .brand span {
            font-size: 13px !important;
          }

          .heroText {
            transform: translateY(-52px) !important;
          }
        }


        /* 修正 LOGO 區塊壓到下方文字 */
        @media (max-width: 768px) {

          .brand {
            transform: translateY(-10px) !important;
            margin-bottom: 34px !important;
          }

          .brand .logo,
          .logo {
            width: 82px !important;
            height: 82px !important;
          }

          .brand strong {
            font-size: 28px !important;
            line-height: 1.22 !important;
          }

          .brand span {
            font-size: 12px !important;
            letter-spacing: 2.2px !important;
          }

          .heroText {
            transform: translateY(-12px) !important;
            padding-top: 6px !important;
          }

          .heroText h2 {
            margin-top: 24px !important;
            line-height: 1.45 !important;
          }
        }

        @media (max-width: 430px) {

          .brand {
            margin-bottom: 38px !important;
          }

          .heroText {
            transform: translateY(-6px) !important;
          }

          .heroText h2 {
            margin-top: 26px !important;
          }
        }


        /* 網頁版 LOGO 與導覽字體放大 */
        @media (min-width: 769px) {

          .brand {
            gap: 18px !important;
          }

          .brand .logo,
          .logo {
            width: 74px !important;
            height: 74px !important;
            border-radius: 18px !important;
          }

          .brand strong {
            font-size: 34px !important;
            line-height: 1.12 !important;
            letter-spacing: 1px !important;
            font-weight: 900 !important;
          }

          .brand span {
            font-size: 15px !important;
            letter-spacing: 3px !important;
            margin-top: 6px !important;
          }

          .navLinks a {
            font-size: 40px !important;
            font-weight: 800 !important;
          }
        }

      `}</style>

      <section id="top" className="hero">
        <div className="wrap">
          <nav className="nav">
            <a className="brand" href="#top">
              <img className="logo" src={company.logo} alt="尚順國際運通 Logo" />
              <div><strong>尚順國際運通</strong><span>SUN SHINE LOGISTICS</span></div>
            </a>
            <div className="links">
              <a href="#top">首頁</a><a href="#services">服務項目</a><a href="#process">物流流程</a><a href="#about">關於我們</a><a href="#contact">聯絡我們</a>
            </div>
            
          </nav>

          <div className="heroText">
            <h1>尚順國際運通</h1>
            <h2>全球物流・專業運輸・值得信賴</h2>
            <p>我們提供海運、空運、陸運、小三通、報關清關及倉儲集貨服務，以專業、高效、安全的物流方案，協助您的貨物順利抵達目的地。</p>
            <div className="actions">
              <a className="btn outline" href="#services">了解更多</a>
              <a className="btn primary" href="#form">立即詢價 <ArrowRight size={18}/></a>
              <a className="btn lineBtn" href="https://lin.ee/Dlq7FY2" target="_blank" rel="noreferrer">
                加我好友
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section services">
        <div className="title"><h2>服務項目</h2><div className="bar"/></div>
        <div className="grid6">
          {services.map(([title, desc, Icon]) => (
            <div className="card" key={title}>
              <div className="icon"><Icon size={46}/></div><h3>{title}</h3><p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="stats">
        <div className="statsGrid">
          {[["150+","服務路線"],["10000+","年度運送經驗"],["500+","合作夥伴"],["99.8%","準時交貨率"]].map(([n,l])=><div className="stat" key={l}><strong>{n}</strong><span>{l}</span></div>)}
        </div>
      </section>

      <section id="process" className="section process">
        <div className="title"><h2>物流流程</h2><div className="bar"/></div>
        <div className="procGrid">
          {process.map(([title, desc, Icon], i) => (
            <div className="proc" key={title}>
              <div className="no">{String(i + 1).padStart(2, "0")}</div><Icon size={42}/><h3>{title}</h3><p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="section about">
        <div className="aboutInner">
          <div className="aboutImg">
            <img
              src={company.aboutImage}
              alt="國際物流貨櫃運輸"
              onError={(event) => {
                event.currentTarget.src =
                  "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1400&q=80";
              }}
            />
          </div>
          <div className="aboutText">
            <h2>關於我們</h2><div className="bar" style={{margin:"14px 0 22px"}}/>
            <p>尚順國際運通致力於提供客戶專業、穩定、高效率的國際物流服務。我們擁有豐富的國際與兩岸物流經驗，能滿足客戶多元化的物流需求，協助客戶降低成本、提升競爭力。</p>
            <div className="adv">{advantages.map(([t,d])=><div className="advItem" key={t}><CheckCircle2 size={32}/><div>{t}</div><span>{d}</span></div>)}</div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="contactGrid">
          <div>
            <div className="footLogo"><img src={company.logo} alt="尚順國際運通 Logo"/><div><strong>尚順國際運通</strong><div>SUN SHINE LOGISTICS</div></div></div>
            <p>您的全球物流夥伴，提供專業、高效、安全的運輸方案，讓貨物運送世界每一個角落。</p>
            <div className="socials">
              <a href={company.facebook} target="_blank" rel="noreferrer"><Globe2 size={18}/></a>
              <a href={company.line} target="_blank" rel="noreferrer"><MessageCircle size={18}/></a>
              <a href={`mailto:${company.email}`}><Mail size={18}/></a>
            </div>
          </div>
          <div>
            <h3>聯絡資訊</h3>
            <div className="contactList">
              <a className="contactLink" href={`tel:${company.phone}`}><Phone size={18}/>{company.phone}</a>
              <a className="contactLink" href={`mailto:${company.email}?subject=物流詢價`}><Mail size={18}/>{company.email}</a>
              <a className="contactLink" href={company.map} target="_blank" rel="noreferrer"><MapPin size={18}/>{company.address}</a>
            </div>
          </div>
          <div><h3>服務時間</h3><p>週一至週五 09:00 - 18:00<br/>週六 09:00 - 12:00<br/>週日及國定假日休息</p></div>
          <div className="qr"><h3>LINE 線上洽詢</h3><a href={company.line} target="_blank" rel="noreferrer"><img src={company.lineQr} alt="LINE 官方帳號 QR Code"/></a></div>
        </div>
        <div className="copy">© 2026 尚順國際運通有限公司 All Rights Reserved.</div>
      </section>

      <section id="form" className="formSec">
        <div className="formInner">
          <div className="title"><h2>線上物流詢價表單</h2><div className="bar"/><p>請填寫貨件資料與需求，我們收到後將盡快與您聯繫。</p></div>
          <div className="formFrame">
            <iframe src={company.form} title="尚順國際運通物流詢價表單" width="100%" height="2546" frameBorder="0" marginHeight="0" marginWidth="0">正在載入…</iframe>
          </div>
        </div>
      </section>

      <a className="top" href="#top">TOP</a>
    </div>
  );
}
