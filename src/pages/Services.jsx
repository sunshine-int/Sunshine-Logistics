import React from 'react'
import {
  Headphones,
  ClipboardList,
  PackageCheck,
  Ship,
  FileSearch,
  Truck,
  CheckCircle2,
} from 'lucide-react'

export default function Process() {
  const steps = [
    {
      no: '01',
      icon: <Headphones size={60} />,
      title: '客戶諮詢',
      desc1: '了解需求',
      desc2: '提供運輸建議',
    },
    {
      no: '02',
      icon: <ClipboardList size={60} />,
      title: '報價確認',
      desc1: '提供報價方案',
      desc2: '確認服務細節',
    },
    {
      no: '03',
      icon: <PackageCheck size={60} />,
      title: '安排出貨',
      desc1: '安排貨物與報關',
      desc2: '準備文件',
    },
    {
      no: '04',
      icon: <Ship size={60} />,
      title: 'OG 運中',
      desc1: '全程追蹤貨物',
      desc2: '狀態回報',
    },
    {
      no: '05',
      icon: <FileSearch size={60} />,
      title: '清關作業',
      desc1: '專業報關',
      desc2: '快速通關',
    },
    {
      no: '06',
      icon: <Truck size={60} />,
      title: '配送完成',
      desc1: '貨物安全送達',
      desc2: '完成交付',
    },
  ]

  return (
    <div className="process-page">
      <div className="process-overlay">
        <div className="container">
          <div className="breadcrumb">
            首頁 / 物流流程
          </div>

          <h1 className="process-title">
            物流流程
          </h1>

          <div className="process-subtitle">
            流程透明・進度清楚掌握
          </div>

          <p className="process-description">
            標準化作業流程，確保每一步驟都精準執行，
            <br />
            讓您隨時掌握貨物最新狀態。
          </p>

          <div className="process-steps">
            {steps.map((step, index) => (
              <React.Fragment key={step.no}>
                <div className="step-card">
                  <div className="step-number">
                    {step.no}
                  </div>

                  <div className="step-icon">
                    {step.icon}
                  </div>

                  <h3>{step.title}</h3>

                  <p>{step.desc1}</p>
                  <p>{step.desc2}</p>
                </div>

                {index !== steps.length - 1 && (
                  <div className="step-arrow">
                    →
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="process-info-box">
            <div className="info-left">
              <div className="info-title">
                資料完整・操作更穩定
              </div>

              <p>
                提供即時追蹤系統與進度通知，
                讓您隨時掌握貨物位置與狀態，
                運輸更安心。
              </p>
            </div>

            <div className="info-right">
              <div className="info-item">
                <CheckCircle2 size={22} />
                <span>線上查詢：即時追蹤貨物狀態</span>
              </div>

              <div className="info-item">
                <CheckCircle2 size={22} />
                <span>訊息通知：重要進度主動通知</span>
              </div>

              <div className="info-item">
                <CheckCircle2 size={22} />
                <span>文件管理：電子文件安全管理</span>
              </div>

              <div className="info-item">
                <CheckCircle2 size={22} />
                <span>客服支援：專人即時協助處理</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
