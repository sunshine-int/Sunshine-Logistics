export default function About() {
  return (
    <section className="page-section">

      <div className="container">

        <h1 className="page-heading">關於我們</h1>

        <div className="about-grid">

          <img
            src="/about-ship.png"
            className="about-image"
          />

          <div>

            <p className="small-blue">
              專業・誠信・效率
            </p>

            <h2 className="big-title">
              我們以專業守護每一票貨物
            </h2>

            <p className="content-text">
              尚順國際物流致力於提供安全、可靠且高效率的國際物流服務，
              以客戶需求為核心，透過完整物流與報關整合，
              協助企業降低成本並提升供應鏈效率。
            </p>

            <div className="feature-list">
              <div>✔ 專業團隊｜具備豐富國際物流經驗</div>
              <div>✔ 全球網絡｜整合合作夥伴遍佈全球</div>
              <div>✔ 安全控管｜嚴格把關貨物運送流程</div>
              <div>✔ 貼心服務｜即時回應客戶需求</div>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}
