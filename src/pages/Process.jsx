
export default function Process(){
  const steps=[
    '客戶詢價',
    '確認報價',
    '安排出貨',
    '文件作業',
    '海關清關',
    '配送完成'
  ]

  return(
    <section className="page">
      <div className="container">
        <h1>物流流程 Process</h1>

        <div className="steps">
          {steps.map((step,index)=>(
            <div key={step}>
              <h3>0{index+1}</h3>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
