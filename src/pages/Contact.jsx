
export default function Contact(){
  return(
    <section className="page">
      <div className="container contact-grid">

        <div className="card">
          <h1>聯絡我們 Contact</h1>

          <p>Email：sunshine0422520071@gmail.com</p>

          <a href="https://www.facebook.com/SunshineTXGTW/" target="_blank" className="fb-btn">
            Facebook
          </a>

          <a href="https://lin.ee/Dlq7FY2" target="_blank" className="line-btn">
            LINE
          </a>

          <a href="https://share.google/oBZlTBPBTKYPpShK5" target="_blank" className="map-btn">
            Google 地圖
          </a>

          <img src="/line-qr.png" className="qr" />
        </div>

        <div className="card">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScDq36dwppmix3Y2QOqR7JdtzAE9u4e-cvhiD3Nkg2LvkGzsw/viewform?embedded=true"
            width="100%"
            height="2600"
            title="google-form"
          ></iframe>
        </div>

      </div>
    </section>
  )
}
