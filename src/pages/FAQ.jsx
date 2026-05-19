
export default function FAQ(){
  const faq=[
    '運費如何計算？',
    '海運時間多久？',
    '需要哪些文件？',
    '如何查詢貨況？',
    '是否提供倉儲服務？'
  ]

  return(
    <section className="page">
      <div className="container">
        <h1>常見問題 FAQ</h1>

        {faq.map(item=>(
          <div className="faq-box" key={item}>
            {item}
          </div>
        ))}
      </div>
    </section>
  )
}
