export default function Process() {

  const steps = [
    ['01', '客戶諮詢', '了解需求並提供建議'],
    ['02', '報價確認', '提供詳細方案與報價'],
    ['03', '安排出貨', '安排貨物與報關文件'],
    ['04', 'O6 運中', '全程追蹤物流狀態'],
    ['05', '清關作業', '專業報關快速通關'],
    ['06', '配送完成', '貨物安全送達完成交付']
  ]

  return (
    <section className="page-section">

      <div className="container">

        <h1 className="page-heading">物流流程</h1>

        <h2 className="process-title">
          流程透明・進度清楚掌握
        </h2>

        <p className="content-text">
          標準化作業流程，讓您隨時掌握貨物最新狀態。
        </p>

        <div className="timeline">

          {steps.map((step, index) => (
            <div className="timeline-item" key={index}>

              <div className="circle">
                {step[0]}
              </div>

              <h3>{step[1]}</h3>

              <p>{step[2]}</p>

            </div>
          ))}

        </div>

        <div className="process-box">

          <div>✔ 線上查詢：即時追蹤貨物狀態</div>
          <div>✔ 訂單通知：重要進度主動通知</div>
          <div>✔ 文件管理：電子文件安全管理</div>
          <div>✔ 客服支援：專人即時協助處理</div>

        </div>

      </div>

    </section>
  )
}
