import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Process from './pages/Process'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import './index.css'

export default function App() {
  return (
    <BrowserRouter>
      <div className="site-bg">

        <header className="navbar">
          <div className="container nav-inner">

            <div className="logo-wrap">
              <img src="/logo.png" className="logo" />

              <div>
                <h1>尚順國際運通有限公司</h1>
                <p>SHANG SHUN INTERNATIONAL LOGISTICS</p>
              </div>
            </div>

            <nav className="menu">
              <Link to="/">首頁</Link>
              <Link to="/about">關於我們</Link>
              <Link to="/services">服務項目</Link>
              <Link to="/process">物流流程</Link>
              <Link to="/faq">常見問題</Link>
              <Link to="/contact">聯絡我們</Link>
            </nav>

          </div>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/process" element={<Process />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer className="footer">
          © 2026 SHANG SHUN INTERNATIONAL LOGISTICS
        </footer>

      </div>
    </BrowserRouter>
  )
}
