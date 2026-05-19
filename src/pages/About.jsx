import {
  Globe,
  ShieldCheck,
  Headphones,
  Users,
} from 'lucide-react'

export default function About() {
  return (
    <section
      className="page-section"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,20,60,0.82), rgba(0,20,60,0.82)), url('/hero-bg.png')",
      }}
    >
      <div className="container">
        <p className="page-breadcrumb">首頁 / 關於我們</p>

        <h1 className="page-main-title">關於我們</h1>

        <div className="about-layout">
          {/* 左側圖片 */}
          <div className="about-image-wrap">
            <img
              src="/about-ship.jpg"
              alt="about"
              className="about-image"
            />
          </div>

          {/* 右側內容 */}
          <div className="about-content">
            <p className="about-subtitle">
              專業・誠信・效率
            </p>

            <h2 className="about-title">
              我們以專業守護每一票貨物
            </h2>

            <p className="about-desc">
              尚順國際物流致力於提供安全、可靠且高效率的國際物流服務，
              以客戶需求為核心，透過完善的物流網絡與專業團隊，
              協助企業降低成本、提升供應鏈效率。
            </p>

            <div className="about-feature-list">
              <div className="about-feature-item">
                <div className="about-icon">
                  <Users size={26} />
                </div>

                <div>
                  <h3>專業團隊</h3>
                  <p>具備豐富國際物流經驗</p>
                </div>
              </div>

              <div className="about-feature-item">
                <div className="about-icon">
                  <Globe size={26} />
                </div>

                <div>
                  <h3>全球網絡</h3>
                  <p>緊密合作夥伴遍佈全球</p>
                </div>
              </div>

              <div className="about-feature-item">
                <div className="about-icon">
                  <ShieldCheck size={26} />
                </div>

                <div>
                  <h3>安全控管</h3>
                  <p>嚴格把關貨物運送過程</p>
                </div>
              </div>

              <div className="about-feature-item">
                <div className="about-icon">
                  <Headphones size={26} />
                </div>

                <div>
                  <h3>貼心服務</h3>
                  <p>即時回應客戶各項需求</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
