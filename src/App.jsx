/* =========================
   導覽列更新版 App.jsx 設定
   ========================= */

.nav{
  display:flex;
  align-items:center;
  justify-content:flex-end;
  gap:12px;

  color:#1e293b;
  font-size:22px;
  font-weight:800;
  line-height:1.2;

  text-shadow:none;

  flex-wrap:wrap;

  max-width:780px;
  overflow:hidden;
}

.nav a{
  white-space:nowrap;
  transition:.25s;
}

.nav a:hover{
  color:#2563eb;
}

@media(max-width:980px){

  .nav{
    display:none;
  }

}

.brand-title{
  font-size:22px;
  font-weight:900;
  letter-spacing:1px;
  color:#0f172a;
}

.brand-subtitle{
  margin-top:3px;
  color:#64748b;
  font-size:11px;
  letter-spacing:2px;
}

.header{
  position:sticky;
  top:0;
  z-index:50;

  background:rgba(255,255,255,.96);

  backdrop-filter:blur(14px);

  border-bottom:1px solid #e5e7eb;
}

.header-inner{
  max-width:1280px;
  margin:0 auto;

  padding:12px 20px;

  display:flex;
  align-items:center;
  justify-content:space-between;

  gap:18px;
}

@media(max-width:640px){

  .header-inner{
    padding:10px 14px;
  }

  .brand-title{
    font-size:17px;
  }

  .brand-subtitle{
    display:none;
  }

}
