export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-overlay">
        <div className="container">

          <p className="breadcrumb">
            首頁 / 聯絡我們
          </p>

          <h1 className="contact-main-title">
            聯絡我們
          </h1>

          <div className="contact-grid">

            {/* 左側 */}
            <div className="contact-left">

              <h2>
                需要報價或物流建議？
              </h2>

              <p className="contact-desc">
                歡迎透過以下方式聯繫我們，
                我們將盡快為您服務！
              </p>

              <div className="contact-info-box">
                <span>📞</span>
                <p>04-23228955</p>
              </div>

              <div className="contact-info-box">
                <span>✉️</span>
                <p>sunshine0422520071@gmail.com</p>
              </div>

              <div className="contact-info-box">
                <span>🕒</span>
                <p>週一至週五 09:00 - 18:00</p>
              </div>

              <div className="contact-info-box">
                <span>📍</span>
                <p>台中市西屯區龍洋巷17之7號</p>
              </div>

              <a
                href="https://www.facebook.com/SunshineTXGTW/"
                target="_blank"
                rel="noopener noreferrer"
                className="facebook-btn"
              >
                Facebook 粉絲專頁
              </a>

              <a
                href="https://lin.ee/Dlq7FY2"
                target="_blank"
                rel="noopener noreferrer"
                className="line-btn"
              >
                LINE 線上諮詢
              </a>

            </div>

            {/* 右側 */}
            <div className="contact-form-area">

              <input type="text" placeholder="公司名稱" />
              <input type="text" placeholder="聯絡人" />
              <input type="text" placeholder="聯絡電話" />
              <input type="email" placeholder="電子郵件" />

              <textarea
                rows="6"
                placeholder="需求內容"
              ></textarea>

              <button className="submit-btn">
                送出訊息
              </button>

            </div>

          </div>

          {/* Google Form */}
          <div className="google-form-box">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScDq36dwppmix3Y2QOqR7JdtzAE9u4e-cvhiD3Nkg2LvkGzsw/viewform?embedded=true"
              width="100%"
              height="1200"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Google Form"
            >
              載入中…
            </iframe>
          </div>

        </div>
      </div>
    </div>
  )
}
