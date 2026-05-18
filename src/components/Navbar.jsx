
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <div className="brand">
          <img src="/logo.png" alt="logo" />
          <div>
            <h2>尚順國際物流</h2>
            <p>SHANG SHUN LOGISTICS</p>
          </div>
        </div>

        <nav>
          <NavLink to="/">首頁 Home</NavLink>
          <NavLink to="/about">關於我們 About</NavLink>
          <NavLink to="/services">服務項目 Services</NavLink>
          <NavLink to="/process">物流流程 Process</NavLink>
          <NavLink to="/faq">常見問題 FAQ</NavLink>
          <NavLink to="/contact">聯絡我們 Contact</NavLink>
        </nav>

        <a className="line-btn" href="https://lin.ee/Dlq7FY2" target="_blank">
          LINE 線上客服
        </a>
      </div>
    </header>
  )
}
