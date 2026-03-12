:root{
  --primary:#0b5ea8;
  --primary-hover:#094f8f;
  --primary-soft:#e9f3fb;
  --primary-soft-2:#f5f9fd;
  --surface:#ffffff;
  --surface-2:#f5f7fb;
  --bg:#eef2f6;
  --text:#111827;
  --muted:#64748b;
  --border:#d7dde6;
  --border-strong:#b9c4d3;
  --success:#0a7a4b;
  --warning:#b45309;
  --error:#b42318;
  --shadow:0 16px 40px rgba(15,23,42,0.08);
  --radius:18px;
  --radius-sm:12px;
  --font: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --safe-bottom: env(safe-area-inset-bottom, 0px);
}

*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{
  margin:0;
  background:linear-gradient(180deg, #f6f9fc 0%, var(--bg) 100%);
  color:var(--text);
  font-family:var(--font);
  -webkit-text-size-adjust:100%;
}
body.plant-mode{
  --radius:20px;
  --radius-sm:14px;
}
button,input,select,textarea{font:inherit}
button{touch-action:manipulation}
[hidden]{display:none !important}

.app-shell{
  max-width:1180px;
  margin:0 auto;
  padding:16px 16px calc(88px + var(--safe-bottom));
}

.topbar{
  display:flex;
  flex-direction:column;
  gap:16px;
  margin-bottom:16px;
}
.brand{
  display:flex;
  gap:14px;
  align-items:flex-start;
}
.brand-mark{
  width:52px;
  height:52px;
  display:grid;
  place-items:center;
  border-radius:16px;
  background:linear-gradient(135deg, var(--primary) 0%, #2b8ee0 100%);
  color:#fff;
  font-weight:900;
  letter-spacing:.04em;
  box-shadow:var(--shadow);
}
.brand-copy h1{
  margin:2px 0 0;
  font-size:1.55rem;
  line-height:1.1;
  letter-spacing:-0.02em;
}
.topbar-subtitle{
  margin:8px 0 0;
  color:var(--muted);
  line-height:1.45;
}
.eyebrow{
  margin:0;
  color:var(--primary);
  font-size:.82rem;
  font-weight:900;
  text-transform:uppercase;
  letter-spacing:.08em;
}
.topbar-actions{
  display:flex;
  flex-wrap:wrap;
  gap:12px;
  align-items:center;
}
.switch{
  display:flex;
  align-items:center;
  gap:10px;
  border:1px solid var(--border);
  border-radius:999px;
  background:rgba(255,255,255,.9);
  padding:10px 14px;
  font-weight:800;
  color:var(--text);
}
.switch input{
  width:20px;
  height:20px;
  margin:0;
  accent-color:var(--primary);
}

.route-tabs{
  display:none;
  gap:10px;
  margin-bottom:16px;
}
.route-btn{
  border:1px solid var(--border);
  background:#fff;
  color:var(--muted);
  border-radius:14px;
  padding:12px 14px;
  font-weight:900;
  cursor:pointer;
  transition:background-color .15s,border-color .15s,color .15s, transform .08s;
}
.route-btn:hover{background:#f4f7fb;border-color:var(--border-strong);color:var(--text)}
.route-btn:active{transform:translateY(1px)}
.route-btn.active,
.route-btn[aria-current="page"]{
  background:var(--primary);
  border-color:var(--primary);
  color:#fff;
}

.app-main{
  display:grid;
  gap:18px;
}
.route-section{
  display:grid;
  gap:18px;
}
.module-header{
  padding:4px 2px 2px;
}
.module-header h2{
  margin:0;
  font-size:1.45rem;
  letter-spacing:-0.02em;
}
.module-header .muted{max-width:820px}

.hero-card,
.card{
  background:rgba(255,255,255,.95);
  border:1px solid var(--border);
  border-radius:var(--radius);
  box-shadow:var(--shadow);
  padding:18px;
}
.hero-card{
  display:grid;
  gap:18px;
  background:linear-gradient(135deg, #ffffff 0%, #f4f9ff 100%);
}
.hero-card h2{
  margin:4px 0 0;
  font-size:1.5rem;
  letter-spacing:-0.02em;
}
.hero-actions{
  display:flex;
  flex-wrap:wrap;
  gap:10px;
}

.dashboard-grid,
.summary-grid,
.metrics,
.grid{
  display:grid;
  gap:12px;
}
.dashboard-grid{grid-template-columns:1fr}
.summary-grid{grid-template-columns:1fr}
.grid{grid-template-columns:repeat(12,1fr)}
.metrics{grid-template-columns:repeat(12,1fr)}

.dashboard-card{
  display:grid;
  gap:12px;
  background:#fff;
  border:1px solid var(--border);
  border-radius:var(--radius);
  padding:18px;
}
.dashboard-card h3{
  margin:0;
  font-size:1.08rem;
}
.dashboard-card p{
  margin:0;
  color:var(--muted);
  line-height:1.45;
}
.dashboard-badge{
  width:44px;
  height:44px;
  display:grid;
  place-items:center;
  border-radius:14px;
  background:var(--primary-soft);
  color:var(--primary);
  font-weight:900;
}

.summary-item{
  border:1px solid var(--border);
  border-radius:var(--radius-sm);
  background:var(--surface);
  padding:16px;
}
.summary-label{
  color:var(--muted);
  font-size:.85rem;
  font-weight:800;
}
.summary-value{
  margin-top:6px;
  font-size:1.08rem;
  font-weight:950;
  letter-spacing:-0.01em;
}
.summary-sub{
  margin-top:4px;
  color:var(--muted);
  line-height:1.4;
  font-size:.9rem;
}

.card-head{
  display:flex;
  flex-direction:column;
  gap:12px;
  align-items:flex-start;
  justify-content:space-between;
  margin-bottom:12px;
}
.card h2,.card h3{
  margin:0;
}
.muted{
  margin:6px 0 0;
  color:var(--muted);
  line-height:1.45;
}

.field{
  display:flex;
  flex-direction:column;
  gap:8px;
}
.col-12{grid-column:span 12}
.col-6{grid-column:span 12}
.col-4{grid-column:span 12}
label{
  font-weight:900;
  font-size:.94rem;
}
.help{
  margin:0;
  color:var(--muted);
  font-size:.89rem;
  line-height:1.4;
}
.inline-note{
  margin-top:12px;
  min-height:20px;
}
.row{
  display:flex;
  gap:12px;
  flex-wrap:wrap;
  align-items:center;
}

input,select{
  width:100%;
  min-height:48px;
  padding:12px 14px;
  border-radius:14px;
  border:1px solid var(--border);
  background:#fbfcfe;
  transition:border-color .15s, box-shadow .15s, background-color .15s;
}
select{
  -webkit-appearance:none;
  appearance:none;
  background-image:
    linear-gradient(45deg, transparent 50%, #111827 50%),
    linear-gradient(135deg, #111827 50%, transparent 50%);
  background-position:
    calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px);
  background-size:5px 5px, 5px 5px;
  background-repeat:no-repeat;
  padding-right:38px;
}
.input-row{
  display:flex;
  gap:10px;
  flex-direction:column;
}
.input-compact{
  max-width:120px;
}
input:focus,select:focus,button:focus{
  outline:none;
  border-color:var(--primary);
  box-shadow:0 0 0 4px rgba(11,94,168,.16);
}
.invalid{
  border-color:rgba(180,35,24,.75) !important;
  box-shadow:0 0 0 4px rgba(180,35,24,.12) !important;
  background:#fff5f5 !important;
}

.btns{
  display:flex;
  flex-wrap:wrap;
  gap:10px;
  align-items:center;
}
.btn{
  border:1px solid transparent;
  border-radius:14px;
  padding:12px 14px;
  font-weight:900;
  cursor:pointer;
}
.btn-primary{
  background:var(--primary);
  color:#fff;
}
.btn-primary:hover{background:var(--primary-hover)}
.btn-secondary{
  background:#f3f6fb;
  color:var(--text);
  border-color:var(--border);
}
.btn-secondary:hover{background:#ebf1f8}
.btn-ghost{
  background:transparent;
  color:var(--text);
  border-color:var(--border);
}
.btn-ghost:hover{background:#eef2f7}
.btn:disabled{
  opacity:.55;
  cursor:not-allowed;
}

.alert{
  border-radius:14px;
  padding:12px 14px;
  border:1px solid var(--border);
  background:#fafcff;
  font-size:.93rem;
  line-height:1.45;
}
.alert strong{font-weight:950}
.alert.error{
  border-color:rgba(180,35,24,.4);
  background:rgba(180,35,24,.08);
}
.alert.warning{
  border-color:rgba(180,83,9,.35);
  background:rgba(180,83,9,.08);
}
.alert.ok{
  border-color:rgba(10,122,75,.25);
  background:rgba(10,122,75,.06);
}
.alert.info{
  border-color:rgba(11,94,168,.24);
  background:rgba(11,94,168,.06);
}

.result{display:none;margin-top:14px;padding-top:14px;border-top:1px solid var(--border)}
.result.active{display:block}

.metric{
  grid-column:span 12;
  border:1px solid #dbe8f5;
  background:linear-gradient(135deg, #f7fbff 0%, #ffffff 100%);
  border-radius:16px;
  padding:16px;
  min-height:88px;
}
.metric .k{
  color:var(--muted);
  font-size:.86rem;
  font-weight:800;
  margin-bottom:4px;
}
.metric .v{
  font-weight:950;
  font-size:1.08rem;
  letter-spacing:-0.02em;
}
.metric .sub{
  margin-top:4px;
  font-size:.85rem;
  color:var(--muted);
  font-family:var(--mono);
}
.metric-key{
  background:linear-gradient(135deg, var(--primary-soft-2) 0%, #ffffff 100%);
  border-width:2px;
}
.metric-key .v{
  font-size:1.35rem;
}

details.card{
  padding:0;
  overflow:hidden;
}
details.card > summary{
  list-style:none;
  cursor:pointer;
  padding:18px;
  user-select:none;
}
details.card > summary::-webkit-details-marker{display:none}
.summary-row{
  display:flex;
  justify-content:space-between;
  gap:12px;
}
.chev{
  width:14px;
  height:14px;
  border-right:2px solid var(--muted);
  border-bottom:2px solid var(--muted);
  transform:rotate(45deg);
  margin-top:8px;
  transition:transform .16s;
  flex:0 0 auto;
}
details[open] .chev{transform:rotate(225deg)}
.details-body{
  padding:0 18px 18px;
  border-top:1px solid var(--border);
}

.table-wrap{
  overflow:visible;
  margin-top:12px;
}
.responsive-table{
  width:100%;
  min-width:0;
  border-collapse:separate;
  border-spacing:0 12px;
}
.responsive-table thead{display:none}
.responsive-table tbody tr{
  display:block;
  background:#fff;
  border:1px solid var(--border);
  border-radius:14px;
  box-shadow:var(--shadow);
  padding:12px;
}
.responsive-table tbody td{
  display:block;
  border:0;
  padding:0;
  margin:0 0 10px 0;
}
.responsive-table .col-num{
  color:var(--muted);
  font-family:var(--mono);
}
.responsive-table tbody td:nth-child(2)::before,
.responsive-table tbody td:nth-child(3)::before,
.responsive-table tbody td:nth-child(4)::before{
  display:block;
  font-size:.85rem;
  color:var(--muted);
  margin-bottom:6px;
  font-weight:800;
}
.responsive-table tbody td:nth-child(2)::before{content:"Nombre"}
.responsive-table tbody td:nth-child(3)::before{content:"% color"}
.responsive-table tbody td:nth-child(4)::before{content:"Cantidad a adicionar"}
.result-main{
  display:block;
  font-weight:950;
  color:var(--primary);
  letter-spacing:-0.01em;
}
.result-sub{
  display:block;
  font-weight:700;
  color:var(--muted);
  font-size:.84rem;
  margin-top:2px;
  font-family:var(--mono);
}
.row-actions{
  display:flex;
  justify-content:flex-end;
}
.icon-btn{
  width:46px;
  height:46px;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  border-radius:12px;
  border:1px solid var(--border);
  background:#fff;
  cursor:pointer;
  font-weight:900;
}
.icon-btn:hover{background:#eef2f7}
.totals{
  display:flex;
  flex-direction:column;
  gap:12px;
  margin-top:16px;
  padding:16px;
  border-radius:16px;
  border:1px solid var(--border);
  background:#fff;
}
.total-item .k{
  color:var(--muted);
  font-size:.85rem;
  font-weight:800;
}
.total-item .v{
  margin-top:4px;
  font-weight:950;
  font-size:1.08rem;
  letter-spacing:-0.01em;
}
.toast{
  margin-top:12px;
  min-height:22px;
  color:var(--success);
  font-size:.93rem;
  font-weight:800;
}

.mini-details{
  margin-top:10px;
  border:1px solid var(--border);
  border-radius:16px;
  overflow:hidden;
  background:rgba(255,255,255,.7);
}
.mini-details summary{
  list-style:none;
  cursor:pointer;
  padding:14px 16px;
  font-weight:900;
  background:#eef2f7;
}
.mini-details summary::-webkit-details-marker{display:none}
.mini-details .mini-body{
  padding:14px 16px 16px;
  border-top:1px solid var(--border);
  display:grid;
  gap:10px;
}
.mini-metric{
  border:1px solid var(--border);
  border-radius:14px;
  padding:12px;
  background:#fff;
}
.mini-metric .k{
  color:var(--muted);
  font-size:.85rem;
  font-weight:800;
}
.mini-metric .v{
  font-weight:950;
  font-size:1.04rem;
  margin-top:2px;
}
.mini-metric .sub{
  margin-top:4px;
  font-size:.84rem;
  color:var(--muted);
  font-family:var(--mono);
}

.toggle{
  display:flex;
  align-items:center;
  gap:8px;
  padding:10px 12px;
  border-radius:14px;
  border:1px solid var(--border);
  background:#f6f8fc;
  font-weight:900;
  cursor:pointer;
  user-select:none;
}
.toggle input{
  width:auto;
  min-height:auto;
  padding:0;
  margin:0;
  accent-color:var(--primary);
}
.toggle[aria-disabled="true"]{
  opacity:.55;
  cursor:not-allowed;
}
.mono{font-family:var(--mono)}

.app-footer{
  margin-top:20px;
  text-align:center;
  color:var(--muted);
  font-size:.92rem;
  padding:18px 0 4px;
}

.mobile-nav{
  position:fixed;
  left:0;
  right:0;
  bottom:0;
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:8px;
  padding:10px 12px calc(10px + var(--safe-bottom));
  background:rgba(255,255,255,.96);
  backdrop-filter:blur(8px);
  border-top:1px solid var(--border);
  z-index:30;
}
.mobile-nav .route-btn{
  width:100%;
  padding:12px 8px;
  font-size:.92rem;
}

body.plant-mode .route-btn,
body.plant-mode .btn,
body.plant-mode input,
body.plant-mode select{
  min-height:54px;
  font-size:1.03rem;
}
body.plant-mode .metric .v{
  font-size:1.18rem;
}
body.plant-mode .metric-key .v{
  font-size:1.5rem;
}
body.plant-mode .card,
body.plant-mode .hero-card{
  box-shadow:0 20px 44px rgba(15,23,42,.1);
}

@media (min-width: 760px){
  .app-shell{
    padding:24px 24px 32px;
  }
  .topbar{
    flex-direction:row;
    justify-content:space-between;
    align-items:flex-start;
  }
  .route-tabs{display:flex}
  .mobile-nav{display:none}
  .hero-card{
    grid-template-columns:minmax(0,1fr) auto;
    align-items:center;
  }
  .dashboard-grid{
    grid-template-columns:repeat(3,minmax(0,1fr));
  }
  .summary-grid{
    grid-template-columns:repeat(3,minmax(0,1fr));
  }
  .card-head{
    flex-direction:row;
  }
  .col-6{grid-column:span 6}
  .col-4{grid-column:span 4}
  .metric{grid-column:span 6}
  .totals{
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
  }
  .input-row{
    flex-direction:row;
    align-items:center;
  }
  .input-compact{
    flex:0 0 120px;
  }
}

@media (min-width: 980px){
  .metric{grid-column:span 3}
}

@media (min-width: 880px){
  .responsive-table{
    border-collapse:collapse;
    border-spacing:0;
    min-width:720px;
  }
  .table-wrap{
    overflow:auto;
    border:1px solid var(--border);
    border-radius:16px;
    background:#fff;
  }
  .responsive-table thead{display:table-header-group}
  .responsive-table thead th{
    text-align:left;
    font-size:.85rem;
    color:var(--muted);
    background:#f1f5f9;
    border-bottom:1px solid var(--border);
    padding:12px;
    position:sticky;
    top:0;
    z-index:1;
  }
  .responsive-table tbody tr{
    display:table-row;
    background:transparent;
    border:0;
    border-radius:0;
    box-shadow:none;
    padding:0;
  }
  .responsive-table tbody td{
    display:table-cell;
    border-bottom:1px solid #e5e7eb;
    padding:10px 12px;
    margin:0;
    vertical-align:middle;
  }
  .responsive-table tbody td:nth-child(2)::before,
  .responsive-table tbody td:nth-child(3)::before,
  .responsive-table tbody td:nth-child(4)::before{
    display:none;
  }
}

@media print{
  body{
    background:#fff;
  }
  .route-tabs,.mobile-nav,.topbar-actions,.btns,.hero-actions,.switch,#installBtn,.toast{
    display:none !important;
  }
  .app-shell{
    padding:0;
    max-width:none;
  }
  .route-section[hidden]{
    display:none !important;
  }
  .card, .hero-card{
    box-shadow:none;
    border:1px solid #000;
  }
}


.status-pill{
  padding:.6rem .85rem;
  border-radius:999px;
  border:1px solid var(--border);
  background:#fff;
  color:var(--muted);
  font-weight:800;
  font-size:.88rem;
}
.status-pill.online{
  color:#166534;
  border-color:#bbf7d0;
  background:#f0fdf4;
}
.status-pill.offline{
  color:#991b1b;
  border-color:#fecaca;
  background:#fef2f2;
}
.btn-danger{
  background:#991b1b;
  color:#fff;
  border-color:#991b1b;
}
.btn-danger:hover{
  filter:brightness(.96);
}
