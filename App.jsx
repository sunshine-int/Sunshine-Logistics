
import React from "react";
            <div key={item} className="flex items-start gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-slate-900" />
              <div className="font-medium leading-7 text-slate-700">{item}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-white px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl md:grid-cols-2 md:p-12">
          <div>
            <div className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-slate-400">Contact</div>
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">需要報價或物流建議？</h2>
            <p className="mt-5 leading-8 text-slate-300">
              歡迎提供品名、材質、用途、尺寸、重量、件數、貨值與出貨地／收貨地，我們將依貨況協助評估合適物流方案。
            </p>
          </div>
          <div className="grid gap-4">
            <a href="tel:04-22529955" className="flex items-center gap-4 rounded-3xl bg-white p-5 text-slate-950 transition hover:bg-slate-100">
              <Phone className="h-6 w-6" />
              <div>
                <div className="text-sm text-slate-500">服務電話</div>
                <div className="text-xl font-black">{companyInfo.phone}</div>
              </div>
            </a>
            <div className="flex items-center gap-4 rounded-3xl bg-white/10 p-5">
              <MapPin className="h-6 w-6" />
              <div>
                <div className="text-sm text-slate-400">服務範圍</div>
                <div className="text-xl font-bold">中國／台灣／東南亞進出口物流</div>
              </div>
            </div>
            <div className="grid gap-4">
              <a
                href={companyInfo.facebook}
                target="_blank"
                className="flex items-center justify-center gap-3 rounded-2xl bg-[#1877F2] px-6 py-4 font-bold text-white transition hover:opacity-90"
              >
                <Facebook className="h-5 w-5" />
                Facebook 粉絲專頁
              </a>

              <a
                href={companyInfo.line}
                target="_blank"
                className="flex items-center justify-center gap-3 rounded-2xl bg-[#06C755] px-6 py-4 font-bold text-white transition hover:opacity-90"
              >
                <MessageCircle className="h-5 w-5" />
                LINE 即時詢價
              </a>

              <div className="rounded-3xl bg-white p-4 text-center text-slate-950">
                <img src={companyInfo.lineQr} alt="LINE QR Code" className="mx-auto w-40 rounded-2xl" />
                <div className="mt-3 text-sm text-slate-500">LINE QR Code</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto mb-10 max-w-7xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-slate-500">網站資料修改方式</div>
        <div className="grid gap-3 text-sm leading-7 text-slate-600">
          <div>• Logo 圖片：替換 public/logo.png</div>
          <div>• LINE QR Code：替換 public/line-qr.png</div>
          <div>• Facebook 連結：修改 companyInfo.facebook</div>
          <div>• LINE 連結：修改 companyInfo.line</div>
          <div>• 公司電話：修改 companyInfo.phone</div>
        </div>
      </div>

      <footer className="border-t border-slate-200 bg-slate-50 px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-sm text-slate-500 md:flex-row">
          <div>© 2026 尚順國際運通有限公司. All rights reserved.</div>
          <div>International Freight Forwarding｜Customs Clearance｜Warehousing</div>
        </div>
      </footer>
    </div>
  );
}
