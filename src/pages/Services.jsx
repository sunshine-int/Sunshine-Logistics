const services = [
  {
    icon: '🚢',
    title: '海運服務',
    desc: '整櫃、併櫃運輸，遍佈全球主要港口，提供穩定海運方案。'
  },
  {
    icon: '✈️',
    title: '空運服務',
    desc: '快速、安全的空運服務，適合高時效貨物運輸。'
  },
  {
    icon: '🚚',
    title: '陸運服務',
    desc: '提供跨境陸運與配送，連接各國內陸運輸需求。'
  },
  {
    icon: '🏢',
    title: '倉儲服務',
    desc: '專業倉儲管理，支援短期與長期倉儲需求。'
  },
  {
    icon: '📄',
    title: '報關服務',
    desc: '專業報關團隊，協助您快速通關，節省時間成本。'
  },
  {
    icon: '📦',
    title: '小三通服務',
    desc: '提供兩岸小三通物流服務，促進快速配送。'
  }
]

<div className="service-card" key={item.title}>
  <div className="service-icon-box">
    <div className="service-icon">
      {item.icon}
    </div>
  </div>

  <h3>{item.title}</h3>

  <p>{item.desc}</p>
</div>
