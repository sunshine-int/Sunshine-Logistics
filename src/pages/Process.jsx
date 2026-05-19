export default function Process() {
  const steps = [
    {
      no: '01',
      title: '客戶諮詢',
      desc: '了解需求並提供最佳建議'
    },
    {
      no: '02',
      title: '報價確認',
      desc: '提供詳細方案與服務細節'
    },
    {
      no: '03',
      title: '安排出貨',
      desc: '安排貨物與報關文件'
    },
    {
      no: '04',
      title: '06 運中',
      desc: '全程追蹤貨物狀態回報'
    },
    {
      no: '05',
      title: '清關作業',
      desc: '專業報關快速通關'
    },
    {
      no: '06',
      title: '配送完成',
      desc: '貨物安全送達完成交付'
    }
  ]

  return (
    <div className="process-page">
      <div className="process-overlay">
        <div className="container">
          <p className="breadcrumb">
            首頁 / 物流流程
          </p>

          <h1 className="process-main-title">
            物流流程
          </h1>

          <div className="process-header">
            <h2>
              流程透明・進度清楚掌握
            </h2>

            <p>
              標準化作業流程，確保每一步驟都精準執行，
              讓您隨時掌握貨物最新狀態。
            </p>
          </div>

          <div className="timeline">
            {steps.map((step, index) => (
              <div className="timeline-item" key={step.no}>
                <div className="circle">
                  {step.no}
                </div>

                <h3>{step.title}</h3>

                <p>{step.desc}</p>

                {index !== steps.length - 1 && (
                  <div className="line"></div>
                )}
              </div>
            ))}
          </div>

          <div className="process-info-box">
            <div>
              <h3>
                資料完整・操作更穩定
              </h3>

              <p>
                提供即時追蹤系統與進度通知，
                讓您隨時掌握貨物位置與狀態。
              </p>
            </div>

            <ul>
              <li>線上查詢：即時追蹤貨物狀態</li>
              <li>訊息通知：重要進度主動通知</li>
              <li>文件管理：電子文件安全管理</li>
              <li>客服支援：專人即時協助處理</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
