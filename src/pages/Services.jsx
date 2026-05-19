
export default function Services(){
  const services=[
    '海運服務',
    '空運服務',
    '陸運服務',
    '倉儲服務',
    '報關服務',
    '小三通服務'
  ]

  return(
    <section className="page">
      <div className="container">
        <h1>服務項目 Services</h1>

        <div className="cards">
          {services.map(item=>(
            <div className="card" key={item}>
              <h3>{item}</h3>
              <p>提供專業國際物流與配送整合方案。</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
