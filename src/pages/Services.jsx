{/* Services */}
{activePage === 'services' && (
  <section className="page-section page-bg">
    <div className="container">

      <h1 className="section-title">
        服務項目 Services
      </h1>

      <div className="breadcrumb">
        首頁 / 服務項目
      </div>

      <div style={{ marginBottom: '45px' }}>
        <div
          style={{
            color: '#55b8ff',
            fontSize: '24px',
            fontWeight: '800',
            marginBottom: '12px',
          }}
        >
          我們的服務
        </div>

        <h2
          style={{
            fontSize: '52px',
            lineHeight: '1.4',
            color: '#dff2ff',
            marginBottom: '22px',
            fontWeight: '900',
          }}
        >
          一站式國際物流整合服務
        </h2>

        <p
          style={{
            fontSize: '20px',
            lineHeight: '2',
            color: '#d7e8ff',
            maxWidth: '950px',
          }}
        >
          提供海運、空運、陸運、倉儲、報關等完整物流解決方案，
          滿足不同的國際運輸需求，
          協助企業降低物流成本並提升配送效率。
        </p>
      </div>

      <div className="services-grid">

        <div className="service-card">
          <div className="service-icon">🚢</div>

          <h3>海運服務</h3>

          <p>
            整櫃、併櫃運輸，
            提供全球主要港口進出口服務，
            適合大型貨物與長程運輸需求。
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">✈️</div>

          <h3>空運服務</h3>

          <p>
            提供快速、安全的空運配送方案，
            適合高時效貨物運輸，
            確保貨件準時抵達。
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">🚚</div>

          <h3>陸運服務</h3>

          <p>
            提供跨區域配送與國內物流運輸，
            建立完整配送網絡，
            提升貨物流通效率。
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">🏢</div>

          <h3>倉儲服務</h3>

          <p>
            提供短期與長期倉儲管理，
            包含理貨、拆櫃、包裝與庫存管理，
            支援多元物流需求。
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">📄</div>

          <h3>報關服務</h3>

          <p>
            專業報關團隊協助進出口報關流程，
            降低通關風險，
            提升貨物流通效率。
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">📦</div>

          <h3>小三通服務</h3>

          <p>
            提供兩岸小三通物流配送，
            包含集貨、轉運與配送服務，
            提升整體運輸便利性。
          </p>
        </div>

      </div>
    </div>
  </section>
)}
