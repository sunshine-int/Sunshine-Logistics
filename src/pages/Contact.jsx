export default function Contact() {

  return (
    <section className="page-section">

      <div className="container">

        <h1 className="page-heading">聯絡我們</h1>

        <div className="contact-grid">

          <div className="contact-info">

            <div className="contact-card">
              Email：sunshine0422520071@gmail.com
            </div>

            <div className="contact-card">
              地址：台中市西屯區龍洋巷17之7號
            </div>

            <a
              href="https://www.facebook.com/SunshineTXGTW/"
              target="_blank"
              className="fb-btn"
            >
              Facebook 粉絲專頁
            </a>

            <a
              href="https://lin.ee/Dlq7FY2"
              target="_blank"
              className="line-btn full"
            >
              LINE 線上諮詢
            </a>

            <img src="/line-qr.png" className="qr" />

          </div>

          <div>

            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScDq36dwppmix3Y2QOqR7JdtzAE9u4e-cvhiD3Nkg2LvkGzsw/viewform?embedded=true"
              width="100%"
              height="1200"
              frameBorder="0"
            >
            </iframe>

          </div>

        </div>

      </div>

    </section>
  )
}
