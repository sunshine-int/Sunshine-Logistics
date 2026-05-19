export default function FAQ() {

  const faq = [
    {
      q: '運費如何計算？',
      a: '依據貨物尺寸、重量、目的地與運輸方式進行計算。'
    },
    {
      q: '海運時間多久？',
      a: '依不同國家與港口，大約 7 至 30 天不等。'
    },
    {
      q: '需要哪些文件？',
      a: '通常需要發票、裝箱單與報關文件。'
    },
    {
      q: '如何查詢貨況？',
      a: '提供即時物流追蹤與客服查詢服務。'
    },
    {
      q: '是否提供倉儲服務？',
      a: '有，提供短期與長期倉儲服務。'
    }
  ]

  return (
    <section className="page-section">

      <div className="container">

        <h1 className="page-heading">
          常見問題 FAQ
        </h1>

        <div className="faq-list">

          {faq.map((item, index) => (
            <details className="faq-item" key={index}>

              <summary>{item.q}</summary>

              <p>{item.a}</p>

            </details>
          ))}

        </div>

      </div>

    </section>
  )
}
