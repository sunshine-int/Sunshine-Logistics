
export default function About(){
  return(
    <section className="page">
      <div className="container two-col">
        <img src="/global-logistics.png" className="hero-img" />

        <div>
          <h1>關於我們 About Us</h1>

          <p>
          尚順國際物流致力於提供安全、穩定且高效率的國際物流服務，
          整合海運、空運、倉儲、報關與配送資源，
          協助企業降低物流成本並提升配送效率。
          </p>

          <div className="cards">
            <div className="card">專業團隊</div>
            <div className="card">全球網絡</div>
            <div className="card">安全控管</div>
            <div className="card">24H 客服</div>
          </div>
        </div>
      </div>
    </section>
  )
}
