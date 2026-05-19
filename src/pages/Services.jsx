import {
  Ship,
  Plane,
  Truck,
  Warehouse,
  FileText,
  Package
} from 'lucide-react'

export default function Services() {

  const services = [
    {
      icon: <Ship size={38} />,
      title: '海運服務',
      text: '整櫃、併櫃運輸，遍佈全球主要港口，提供穩定海運方案。'
    },
    {
      icon: <Plane size={38} />,
      title: '空運服務',
      text: '快速、安全的空運服務，適合高時效貨物運輸。'
    },
    {
      icon: <Truck size={38} />,
      title: '陸運服務',
      text: '提供跨境陸運與配送，連接各國內陸運輸需求。'
    },
    {
      icon: <Warehouse size={38} />,
      title: '倉儲服務',
      text: '專業倉儲管理，支援短期與長期倉儲需求。'
    },
    {
      icon: <FileText size={38} />,
      title: '報關服務',
      text: '專業報關團隊，協助您快速通關，節省時間成本。'
    },
    {
      icon: <Package size={38} />,
      title: '小三通服務',
      text: '提供兩岸小三通物流服務，促進快速配送。'
    }
  ]

  return (
    <section className="page-section">

      <div className="container">

        <h1 className="page-heading">服務項目</h1>

        <p className="small-blue">我們的服務</p>

        <h2 className="big-title">
          一站式國際物流整合服務
        </h2>

        <p className="content-text">
          提供海運、空運、陸運、倉儲、報關等完整物流解決方案。
        </p>

        <div className="service-grid">

          {services.map((item, index) => (
}
