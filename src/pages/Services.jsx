export default function Services() {
  const services = [
    {
      title: '海運服務',
      desc: '整櫃、併櫃運輸，遍佈全球主要港口，提供穩定海運方案。'
    },
    {
      title: '空運服務',
      desc: '快速、安全的空運服務，適合高時效貨物運輸。'
    },
    {
      title: '陸運服務',
      desc: '提供跨境陸運與配送，連接各國內陸運輸需求。'
    },
    {
      title: '倉儲服務',
      desc: '專業倉儲管理，支援短期與長期倉儲需求。'
    },
    {
      title: '報關服務',
      desc: '專業報關團隊，協助您快速通關，節省時間成本。'
    },
    {
      title: '小三通服務',
      desc: '提供兩岸小三通物流服務，促進快速配送。'
    }
  ]

  return (
    <div className="services-page">
      <div className="services-overlay">
        <div className="container">
          <p className="breadcrumb">
            首頁 / 服務項目
          </p>

          <h1 className="services-title">
            服務項目
          </h1>

          <div className="services-header">
            <p className="small-title">
              我們的服務
            </p>

            <h2>
              一站式國際物流整合服務
            </h2>

            <p className="services-intro">
              提供海運、空運、陸運、倉儲、報關等完整物流解決方案，
              滿足不同的國際需求。
            </p>
          </div>

          <div className="services-grid">
            {services.map((item) => (
              <div className="service-card" key={item.title}>
                <div className="service-icon">
                  🚚
                </div>

                <h3>{item.title}</h3>

                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
