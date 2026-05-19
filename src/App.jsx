
import { NavLink, Outlet } from 'react-router-dom'

export default function App() {
  return (
    <>
      <header className="navbar">
        <div className="container nav-inner">
          <div className="brand">
            <img src="/logo.png" alt="logo" />
            <div>
              <h2>尚順國際物流</h2>
              <p>SHANG SHUN INTERNATIONAL LOGISTICS</p>
            </div>
          </div>

          <nav>
            <NavLink to="/">首頁</NavLink>
            <NavLink to="/about">關於我們</NavLink>
            <NavLink to="/services">服務項目</NavLink>
            <NavLink to="/process">物流流程</NavLink>
            <NavLink to="/faq">常見問題</NavLink>
            <NavLink to="/contact">聯絡我們</NavLink>
          </nav>
        </div>
      </header>

      <Outlet />

      <footer className="footer">
        © 2026 SHANG SHUN INTERNATIONAL LOGISTICS
      </footer>
    </>
  )
}
