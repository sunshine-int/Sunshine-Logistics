
export default function Contact() {
  return (
    <section className="page dark-page">
      <div className="container">
        <h1>聯絡我們 Contact Us</h1>

        <div className="contact-grid">

          <div className="contact-card">
            <p>Email</p>
            <h3>sunshine0422520071@gmail.com</h3>

            <a
              href="https://www.facebook.com/SunshineTXGTW/"
              target="_blank"
              className="fb-btn"
            >
              Facebook 粉絲頁
            </a>

            <a
              href="https://lin.ee/Dlq7FY2"
              target="_blank"
              className="line-btn"
            >
              LINE 線上客服
            </a>

            <a
              href="https://share.google/oBZlTBPBTKYPpShK5"
              target="_blank"
              className="map-btn"
            >
              Google 地圖
            </a>

            <img
              src="/line-qr.png"
              className="qr"
              alt="LINE QR CODE"
            />
          </div>

          <div className="form-wrap">

            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScDq36dwppmix3Y2QOqR7JdtzAE9u4e-cvhiD3Nkg2LvkGzsw/viewform?embedded=true"
              width="100%"
              height="2600"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Google Form"
            >
              正在載入…
            </iframe>

          </div>
        </div>
      </div>
    </section>
  )
}
