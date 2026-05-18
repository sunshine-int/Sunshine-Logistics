import React, { useState } from 'react'
            </div>
          </div>
        </section>
      )}

      {activePage === 'faq' && (
        <section className="page-section dark">
          <div className="container">
            <h2 className="page-title light">常見問題</h2>

            <div className="faq-box">
              <h3>運費如何計算？</h3>
              <p>依照材積、重量與目的地計算。</p>
            </div>

            <div className="faq-box">
              <h3>是否提供報關？</h3>
              <p>提供完整進出口報關服務。</p>
            </div>
          </div>
        </section>
      )}

      {activePage === 'contact' && (
        <section className="page-section contact-section">
          <div className="container">
            <h2 className="page-title light">聯絡我們</h2>

            <div className="contact-box">
              <p>Email：sunshine0422520071@gmail.com</p>

              <a
                href="https://www.facebook.com/SunshineTXGTW/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn full"
              >
                Facebook 粉絲頁
              </a>

              <a
                href="https://lin.ee/Dlq7FY2"
                target="_blank"
                rel="noopener noreferrer"
                className="line-btn full"
              >
                LINE 聯絡我們
              </a>

              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScDq36dwppmix3Y2QOqR7JdtzAE9u4e-cvhiD3Nkg2LvkGzsw/viewform?embedded=true"
                width="100%"
                height="600"
                title="google-form"
              ></iframe>
            </div>
          </div>
        </section>
      )}

      <footer className="footer">
        © 2026 SHANG SHUN INTERNATIONAL LOGISTICS
      </footer>
    </div>
  )
}
