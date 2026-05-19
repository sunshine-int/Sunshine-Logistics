
export default function Home(){
  return(
    <section className="page">
      <div className="container hero-grid">
        <div>
          <h1>全球物流運輸服務<span>Global Freight Solutions</span></h1>

          <p>
          尚順國際物流專注於海運、空運、倉儲配送與跨境物流整合服務，
          提供企業穩定、安全與高效率的全球物流解決方案。
          </p>

          <a href="https://lin.ee/Dlq7FY2" target="_blank" className="line-btn">
            LINE 線上客服
          </a>
        </div>

        <img src="/hero-bg.png" className="hero-img" />
      </div>

      <div className="container cards">
        <div className="card">
          <h3>海運服務</h3>
          <p>提供全球整櫃與併櫃運輸服務。</p>
        </div>

        <div className="card">
          <h3>空運服務</h3>
          <p>急件快速配送與航班追蹤。</p>
        </div>

        <div className="card">
          <h3>倉儲服務</h3>
          <p>提供理貨、包裝與物流整合管理。</p>
        </div>
      </div>
    </section>
  )
}
