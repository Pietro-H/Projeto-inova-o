(() => {
    const style = document.createElement("style");
    style.textContent = `
        :root {
            --bg: #090d16;
            --bg-gradient: radial-gradient(circle at top right, rgba(16, 185, 129, 0.14), transparent 45%),
                           radial-gradient(circle at bottom left, rgba(59, 130, 246, 0.12), transparent 45%);
            --card: rgba(23, 32, 51, 0.85);
            --card-solid: #172033;
            --card-hover: #1e2942;
            --input-bg: #0f172a;
            --border: rgba(148, 163, 184, 0.16);
            --text: #f8fafc;
            --muted: #94a3b8;
            --primary: #10b981;
            --primary-glow: rgba(16, 185, 129, 0.25);
            --primary-dark: #059669;
            --btn-text: #042f1e;
            --amber: #f59e0b;
            --blue: #3b82f6;
            --purple: #8b5cf6;
            --danger: #ef4444;
            --shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
        }

        [data-theme="light"] {
            --bg: #f1f5f9;
            --bg-gradient: radial-gradient(circle at top right, rgba(16, 185, 129, 0.12), transparent 50%),
                           radial-gradient(circle at bottom left, rgba(59, 130, 246, 0.10), transparent 50%);
            --card: rgba(255, 255, 255, 0.92);
            --card-solid: #ffffff;
            --card-hover: #f8fafc;
            --input-bg: #f8fafc;
            --border: rgba(15, 23, 42, 0.12);
            --text: #0f172a;
            --muted: #475569;
            --primary: #059669;
            --primary-glow: rgba(5, 150, 105, 0.18);
            --primary-dark: #047857;
            --btn-text: #ffffff;
            --amber: #d97706;
            --blue: #2563eb;
            --purple: #7c3aed;
            --danger: #dc2626;
            --shadow: 0 8px 24px rgba(15, 23, 42, 0.07);
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
            transition: background-color 0.2s ease, border-color 0.2s ease, transform 0.15s ease;
        }

        body {
            background-color: var(--bg);
            background-image: var(--bg-gradient);
            background-attachment: fixed;
            color: var(--text);
            padding: 24px;
            min-height: 100vh;
            font-size: 1rem;
        }

        .wrapper { max-width: 1280px; margin: 0 auto; }

        /* Topbar */
        header {
            background: var(--card);
            backdrop-filter: blur(12px);
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 18px 24px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 16px;
            flex-wrap: wrap;
            gap: 16px;
            box-shadow: var(--shadow);
        }

        .brand { display: flex; align-items: center; gap: 14px; }
        .brand-logo {
            width: 44px;
            height: 44px;
            border-radius: 12px;
            background: linear-gradient(135deg, var(--primary), var(--blue));
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.4rem;
            box-shadow: 0 4px 15px var(--primary-glow);
        }

        .brand h1 { font-size: 1.45rem; font-weight: 800; letter-spacing: -0.5px; }
        .brand h1 span { color: var(--primary); }
        .brand p { color: var(--muted); font-size: 0.82rem; margin-top: 2px; }

        .header-controls { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }

        .a11y-group {
            display: flex;
            background: var(--input-bg);
            border: 1px solid var(--border);
            border-radius: 10px;
            overflow: hidden;
        }

        .btn-ctrl {
            background: transparent;
            color: var(--text);
            border: none;
            padding: 8px 11px;
            font-size: 0.8rem;
            font-weight: 700;
            cursor: pointer;
        }
        .btn-ctrl:hover { background: var(--card-hover); color: var(--primary); }
        .btn-ctrl + .btn-ctrl { border-left: 1px solid var(--border); }

        .btn-pill {
            background: var(--input-bg);
            color: var(--text);
            border: 1px solid var(--border);
            padding: 8px 13px;
            border-radius: 10px;
            font-size: 0.78rem;
            font-weight: 700;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 6px;
        }
        .btn-pill:hover { border-color: var(--primary); color: var(--primary); transform: translateY(-1px); }

        .badge-api {
            background: rgba(16, 185, 129, 0.12);
            color: var(--primary);
            border: 1px solid rgba(16, 185, 129, 0.35);
            padding: 7px 12px;
            border-radius: 20px;
            font-size: 0.72rem;
            font-weight: 800;
            display: flex;
            align-items: center;
            gap: 6px;
        }
        .pulse-dot {
            width: 8px; height: 8px; border-radius: 50%; background: var(--primary);
            box-shadow: 0 0 8px var(--primary);
        }

        /* Menu de Navegação */
        .nav-bar {
            background: var(--card);
            backdrop-filter: blur(12px);
            border: 1px solid var(--border);
            border-radius: 14px;
            padding: 8px 12px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 10px;
            margin-bottom: 22px;
            flex-wrap: wrap;
            box-shadow: var(--shadow);
        }

        .nav-tabs { display: flex; gap: 6px; flex-wrap: wrap; }

        .nav-btn {
            background: transparent;
            color: var(--muted);
            border: 1px solid transparent;
            padding: 9px 14px;
            border-radius: 10px;
            font-size: 0.83rem;
            font-weight: 700;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 7px;
        }

        .nav-btn:hover { background: var(--input-bg); color: var(--text); }

        .nav-btn.active {
            background: linear-gradient(135deg, var(--primary), var(--primary-dark));
            color: var(--btn-text);
            box-shadow: 0 4px 14px var(--primary-glow);
        }

        .nav-badge {
            background: rgba(0, 0, 0, 0.2);
            padding: 2px 7px;
            border-radius: 10px;
            font-size: 0.72rem;
        }

        .nav-sim { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; }

        .btn-time {
            background: rgba(245, 158, 11, 0.14);
            color: var(--amber);
            border: 1px solid rgba(245, 158, 11, 0.4);
            padding: 8px 12px;
            border-radius: 10px;
            font-size: 0.76rem;
            font-weight: 800;
            cursor: pointer;
        }
        .btn-time:hover { background: var(--amber); color: #090d16; }

        .hidden-view { display: none !important; }

        /* KPI Cards */
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 16px;
            margin-bottom: 24px;
        }

        .stat-card {
            background: var(--card);
            backdrop-filter: blur(12px);
            border: 1px solid var(--border);
            padding: 18px 20px;
            border-radius: 16px;
            box-shadow: var(--shadow);
            position: relative;
            overflow: hidden;
        }
        .stat-card::after {
            content: "";
            position: absolute;
            top: 0; left: 0; width: 100%; height: 3px;
            background: linear-gradient(90deg, var(--primary), var(--blue));
        }
        .stat-top { display: flex; justify-content: space-between; align-items: center; }
        .stat-card span { font-size: 0.74rem; color: var(--muted); text-transform: uppercase; font-weight: 700; letter-spacing: 0.5px; }
        .stat-icon { font-size: 1.25rem; }
        .stat-card h2 { font-size: 1.75rem; margin: 8px 0 4px; font-weight: 800; }
        .stat-card small { font-size: 0.76rem; color: var(--primary); font-weight: 600; }

        /* Gráficos Section */
        .charts-grid {
            display: grid;
            grid-template-columns: 1fr 1.4fr;
            gap: 20px;
            margin-bottom: 24px;
        }
        @media (max-width: 900px) { .charts-grid { grid-template-columns: 1fr; } }

        .chart-card {
            background: var(--card);
            backdrop-filter: blur(12px);
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 20px;
            box-shadow: var(--shadow);
            display: flex;
            flex-direction: column;
        }
        .chart-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 14px;
        }
        .chart-header h3 { font-size: 0.95rem; font-weight: 700; }
        .chart-header span { font-size: 0.75rem; color: var(--muted); }
        .chart-body {
            display: flex;
            align-items: center;
            justify-content: space-around;
            gap: 16px;
            flex: 1;
            flex-wrap: wrap;
        }
        .legend-list { display: flex; flex-direction: column; gap: 10px; min-width: 150px; }
        .legend-item { display: flex; align-items: center; justify-content: space-between; gap: 12px; font-size: 0.82rem; }
        .legend-left { display: flex; align-items: center; gap: 8px; color: var(--muted); font-weight: 600; }
        .legend-dot { width: 10px; height: 10px; border-radius: 3px; }

        /* Ranking ESG & Rede de ONGs */
        .ranking-box {
            background: var(--card);
            backdrop-filter: blur(12px);
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 22px;
            margin-bottom: 24px;
            box-shadow: var(--shadow);
        }
        .ranking-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
            gap: 14px;
            margin-top: 16px;
        }
        .rank-item {
            background: var(--input-bg);
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .ong-card {
            background: var(--input-bg);
            border: 1px solid var(--border);
            border-radius: 14px;
            padding: 18px;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        .ong-card:hover { border-color: var(--primary); transform: translateY(-2px); }
        .ong-top { display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; }
        .ong-badge {
            font-size: 0.7rem; font-weight: 800; padding: 3px 9px; border-radius: 12px;
            background: rgba(16, 185, 129, 0.14); color: var(--primary);
        }
        .cap-bar { width: 100%; height: 8px; background: rgba(148, 163, 184, 0.18); border-radius: 6px; overflow: hidden; }
        .cap-fill { height: 100%; background: linear-gradient(90deg, var(--primary), var(--blue)); border-radius: 6px; }

        /* Seção Sobre & Impacto Educativo */
        .about-hero {
            background: linear-gradient(135deg, rgba(16, 185, 129, 0.14), rgba(59, 130, 246, 0.12));
            border: 1px solid rgba(16, 185, 129, 0.3);
            border-radius: 16px;
            padding: 24px;
            margin-bottom: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 20px;
            flex-wrap: wrap;
        }
        .about-hero-text { flex: 1; min-width: 260px; }
        .about-hero h2 { font-size: 1.35rem; margin-bottom: 8px; color: var(--text); }
        .about-hero p { color: var(--muted); font-size: 0.92rem; line-height: 1.6; max-width: 820px; }

        .about-cta-group {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }
        .btn-cta-primary {
            background: linear-gradient(135deg, var(--primary), var(--primary-dark));
            color: var(--btn-text);
            border: none;
            padding: 12px 18px;
            border-radius: 10px;
            font-size: 0.88rem;
            font-weight: 800;
            cursor: pointer;
            box-shadow: 0 4px 14px var(--primary-glow);
        }
        .btn-cta-primary:hover { transform: translateY(-1px); filter: brightness(1.06); }

        .btn-cta-secondary {
            background: var(--input-bg);
            color: var(--text);
            border: 1px solid var(--border);
            padding: 12px 16px;
            border-radius: 10px;
            font-size: 0.88rem;
            font-weight: 700;
            cursor: pointer;
        }
        .btn-cta-secondary:hover { border-color: var(--primary); color: var(--primary); }

        .about-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 16px;
            margin-bottom: 20px;
        }
        .about-card {
            background: var(--input-bg);
            border: 1px solid var(--border);
            border-radius: 14px;
            padding: 20px;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        .about-card h4 { font-size: 1rem; color: var(--primary); display: flex; align-items: center; gap: 8px; }
        .about-card p, .about-card li { font-size: 0.86rem; color: var(--muted); line-height: 1.55; }
        .about-card ul { padding-left: 18px; display: flex; flex-direction: column; gap: 6px; }

        .steps-flow {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
            gap: 14px;
            margin-top: 14px;
        }
        .step-box {
            background: var(--input-bg);
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 16px;
            position: relative;
        }
        .step-num {
            display: inline-block;
            background: var(--primary);
            color: var(--btn-text);
            font-weight: 800;
            font-size: 0.74rem;
            padding: 2px 9px;
            border-radius: 12px;
            margin-bottom: 8px;
        }
        .step-box h5 { font-size: 0.94rem; margin-bottom: 6px; color: var(--text); }
        .step-box p { font-size: 0.82rem; color: var(--muted); line-height: 1.5; }

        /* Main Workspace */
        .main-grid {
            display: grid;
            grid-template-columns: 370px 1fr;
            gap: 24px;
            align-items: start;
        }
        @media (max-width: 960px) { .main-grid { grid-template-columns: 1fr; } }

        .panel {
            background: var(--card);
            backdrop-filter: blur(12px);
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 22px;
            box-shadow: var(--shadow);
        }

        .panel-title {
            font-size: 1.05rem;
            font-weight: 800;
            margin-bottom: 16px;
            padding-bottom: 12px;
            border-bottom: 1px solid var(--border);
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 8px;
            flex-wrap: wrap;
        }

        .btn-iot {
            background: rgba(59, 130, 246, 0.14);
            color: var(--blue);
            border: 1px solid rgba(59, 130, 246, 0.4);
            padding: 6px 10px;
            border-radius: 8px;
            font-size: 0.72rem;
            font-weight: 700;
            cursor: pointer;
        }
        .btn-iot:hover { background: var(--blue); color: white; }

        .iot-status {
            font-size: 0.72rem;
            color: var(--blue);
            background: rgba(59, 130, 246, 0.08);
            border: 1px solid rgba(59, 130, 246, 0.25);
            padding: 6px 10px;
            border-radius: 8px;
            margin-bottom: 12px;
            display: flex;
            justify-content: space-between;
        }

        .field { margin-bottom: 13px; }
        .field label { display: block; font-size: 0.75rem; color: var(--muted); margin-bottom: 5px; font-weight: 700; }
        .field input, .field select {
            width: 100%;
            background: var(--input-bg);
            border: 1px solid var(--border);
            color: var(--text);
            padding: 10px 12px;
            border-radius: 10px;
            font-size: 0.88rem;
        }
        .field input:focus, .field select:focus { outline: none; border-color: var(--primary); }
        .row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }

        .live-preview {
            background: rgba(16, 185, 129, 0.08);
            border: 1px dashed rgba(16, 185, 129, 0.4);
            border-radius: 10px;
            padding: 10px 12px;
            font-size: 0.78rem;
            margin: 12px 0;
            color: var(--text);
            line-height: 1.4;
        }

        .btn-submit {
            width: 100%;
            background: linear-gradient(135deg, var(--primary), var(--primary-dark));
            color: var(--btn-text);
            border: none;
            padding: 12px;
            border-radius: 10px;
            font-size: 0.92rem;
            font-weight: 800;
            cursor: pointer;
            box-shadow: 0 4px 14px var(--primary-glow);
        }
        .btn-submit:hover { transform: translateY(-1px); filter: brightness(1.06); }

        .batch-actions {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
            margin-top: 10px;
        }
        .btn-secondary {
            background: var(--input-bg);
            border: 1px solid var(--border);
            color: var(--muted);
            padding: 8px;
            border-radius: 8px;
            font-size: 0.74rem;
            font-weight: 700;
            cursor: pointer;
        }
        .btn-secondary:hover { border-color: var(--primary); color: var(--text); }

        /* Toolbar & List */
        .toolbar { display: flex; gap: 10px; margin-bottom: 16px; flex-wrap: wrap; }
        .toolbar input, .toolbar select {
            background: var(--input-bg);
            border: 1px solid var(--border);
            color: var(--text);
            padding: 9px 12px;
            border-radius: 10px;
            font-size: 0.84rem;
        }
        .toolbar input { flex: 1; min-width: 180px; }

        .filter-tabs { display: flex; gap: 6px; margin-bottom: 16px; flex-wrap: wrap; }
        .filter-btn {
            background: var(--input-bg);
            border: 1px solid var(--border);
            color: var(--muted);
            padding: 7px 13px;
            border-radius: 20px;
            cursor: pointer;
            font-size: 0.76rem;
            font-weight: 700;
        }
        .filter-btn.active { background: var(--primary); color: var(--btn-text); border-color: var(--primary); }

        .items-list { display: flex; flex-direction: column; gap: 12px; }
        .item-card {
            background: var(--input-bg);
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 16px;
            flex-wrap: wrap;
        }
        .item-card:hover { border-color: var(--primary); transform: translateX(2px); }
        .item-card.reservado { opacity: 0.65; border-style: dashed; }
        .item-card.urgente { border-left: 4px solid var(--danger); }

        .tag {
            padding: 4px 10px;
            border-radius: 20px;
            font-size: 0.7rem;
            font-weight: 800;
            display: inline-block;
            margin-bottom: 6px;
        }
        .tag-ong { background: rgba(245, 158, 11, 0.15); color: var(--amber); border: 1px solid rgba(245, 158, 11, 0.4); }
        .tag-venda { background: rgba(59, 130, 246, 0.15); color: var(--blue); border: 1px solid rgba(59, 130, 246, 0.4); }
        .tag-done { background: rgba(16, 185, 129, 0.15); color: var(--primary); border: 1px solid rgba(16, 185, 129, 0.4); }
        .tag-compost { background: rgba(139, 92, 246, 0.15); color: var(--purple); border: 1px solid rgba(139, 92, 246, 0.4); }

        .item-title { font-size: 1.02rem; font-weight: 700; margin-bottom: 4px; }
        .item-meta { font-size: 0.8rem; color: var(--muted); }

        .validity-bar {
            width: 180px;
            height: 6px;
            background: rgba(148, 163, 184, 0.2);
            border-radius: 4px;
            margin-top: 8px;
            overflow: hidden;
        }
        .validity-fill { height: 100%; border-radius: 4px; }

        .item-price { text-align: right; }
        .old-price { text-decoration: line-through; color: var(--muted); font-size: 0.76rem; }
        .new-price { font-size: 1.3rem; font-weight: 800; color: var(--primary); }

        .item-actions { display: flex; gap: 6px; margin-top: 8px; justify-content: flex-end; flex-wrap: wrap; }
        .btn-sm { padding: 6px 11px; border-radius: 8px; border: none; font-size: 0.74rem; font-weight: 700; cursor: pointer; }
        .btn-voucher { background: rgba(139, 92, 246, 0.15); color: var(--purple); border: 1px solid rgba(139, 92, 246, 0.35); }
        .btn-voucher:hover { background: var(--purple); color: white; }
        .btn-res { background: var(--primary); color: var(--btn-text); }
        .btn-del { background: rgba(239, 68, 68, 0.14); color: var(--danger); border: 1px solid rgba(239, 68, 68, 0.3); }
        .btn-del:hover { background: var(--danger); color: white; }

        /* Modal Comprovante */
        .modal-backdrop {
            position: fixed; inset: 0; background: rgba(0, 0, 0, 0.7);
            backdrop-filter: blur(6px);
            display: none; align-items: center; justify-content: center; z-index: 1000; padding: 20px;
        }
        .modal-backdrop.open { display: flex; }
        .modal-box {
            background: var(--card-solid);
            border: 1px solid var(--border);
            border-radius: 18px;
            max-width: 420px;
            width: 100%;
            padding: 24px;
            box-shadow: var(--shadow);
            text-align: center;
        }
        .qr-frame {
            background: #ffffff;
            padding: 12px;
            border-radius: 12px;
            display: inline-block;
            margin: 14px 0;
        }
        .voucher-info {
            text-align: left;
            background: var(--input-bg);
            padding: 12px;
            border-radius: 10px;
            font-size: 0.82rem;
            line-height: 1.6;
            margin-bottom: 16px;
            border: 1px solid var(--border);
        }

        .toast {
            position: fixed; bottom: 20px; right: 20px;
            background: var(--primary); color: var(--btn-text);
            padding: 12px 20px; border-radius: 10px;
            font-size: 0.85rem; font-weight: 800;
            box-shadow: var(--shadow);
            transform: translateY(100px); opacity: 0; transition: 0.3s; z-index: 999;
        }
        .toast.show { transform: translateY(0); opacity: 1; }
    `;
    document.head.appendChild(style);
    document.title = "SalvaComida Enterprise | Java + Pure JS";

    let alimentos = [];
    let abaAtual = "SOBRE";
    let filtroAtual = "TODOS";
    let termoBusca = "";
    let ordenacaoAtual = "RECENTES";
    let temaAtual = localStorage.getItem("salvacomida_tema") || "dark";
    let escalaFonte = parseInt(localStorage.getItem("salvacomida_fonte") || "100", 10);
    let ultimoIndiceIoT = -1;

    const catalogoBalancaIoT = [
        { r: "Buffet Executivo Central", i: "Feijoada Completa", c: "Refeição Pronta", q: 8.4, v: 2, p: 95.00 },
        { r: "Hortifrúti Bom Preço", i: "Caixa de Legumes Selecionados", c: "Hortifrúti", q: 6.0, v: 6, p: 32.00 },
        { r: "Confeitaria Doce Mel", i: "Tortas e Salgados Assados", c: "Padaria / Pães", q: 2.5, v: 5, p: 44.00 },
        { r: "Restaurante Sabor Caseiro", i: "Strogonoff de Frango e Arroz", c: "Refeição Pronta", q: 5.4, v: 3, p: 68.00 },
        { r: "Padaria Estrela da Manhã", i: "Pães Franceses e Baguetes", c: "Padaria / Pães", q: 4.1, v: 4, p: 26.00 },
        { r: "Laticínios Fazenda Boa", i: "Queijo Mussarela Fatiado", c: "Laticínios", q: 1.9, v: 8, p: 54.00 },
        { r: "Sacolão Verde Vida", i: "Bananas, Maçãs e Mamões", c: "Hortifrúti", q: 9.2, v: 5, p: 41.00 },
        { r: "Cantina Escolar Modelo", i: "Macarronada à Bolonhesa", c: "Refeição Pronta", q: 6.8, v: 2, p: 60.00 },
        { r: "Empório do Pão", i: "Sonhos, Brioches e Pão de Queijo", c: "Padaria / Pães", q: 3.3, v: 6, p: 49.00 },
        { r: "Cooperativa Leite & Mel", i: "Iogurtes e Bebidas Lácteas", c: "Laticínios", q: 5.5, v: 7, p: 45.00 },
        { r: "Churrascaria Boi na Brasa", i: "Cortes Assados e Farofa", c: "Refeição Pronta", q: 3.8, v: 3, p: 110.00 },
        { r: "Feira Orgânica Local", i: "Folhosas, Tomate e Pimentão", c: "Hortifrúti", q: 7.1, v: 4, p: 35.00 },
        { r: "Cafeteria Grão Fino", i: "Sanduíches Naturais e Quiches", c: "Padaria / Pães", q: 1.6, v: 5, p: 38.00 },
        { r: "Supermercado Econômico", i: "Manteiga e Creme de Leite Fresco", c: "Laticínios", q: 2.8, v: 9, p: 42.00 },
        { r: "Cozinha Industrial Alpha", i: "Escondidinho de Carne Seca", c: "Refeição Pronta", q: 10.5, v: 3, p: 120.00 }
    ];

    const redeOngs = [
        { nome: "Banco de Alimentos Municipal", especialidade: "Refeição Pronta", distancia: "1,8 km", capacidadeMax: 120, responsavel: "Coord. Mariana Silva" },
        { nome: "Cozinha Comunitária Verde", especialidade: "Hortifrúti", distancia: "2,4 km", capacidadeMax: 90, responsavel: "Coord. Carlos Mendes" },
        { nome: "Projeto Pão Solidário", especialidade: "Padaria / Pães", distancia: "1,1 km", capacidadeMax: 75, responsavel: "Coord. Ana Paula" },
        { nome: "Instituto Nutrir Bem", especialidade: "Laticínios", distancia: "3,2 km", capacidadeMax: 60, responsavel: "Coord. Roberto Lima" }
    ];

    function calcularAguaLitros(item) {
        const valorApi = Number(item.aguaEconomizadaLitros);
        if (!Number.isNaN(valorApi) && valorApi > 0) return valorApi;
        const peso = Number(item.quantidadeKg) || 0;
        return peso * 1000;
    }

    function aplicarPreferenciasVisuais() {
        if (temaAtual === "light") {
            document.documentElement.setAttribute("data-theme", "light");
        } else {
            document.documentElement.removeAttribute("data-theme");
        }
        document.documentElement.style.fontSize = `${escalaFonte}%`;
        localStorage.setItem("salvacomida_tema", temaAtual);
        localStorage.setItem("salvacomida_fonte", escalaFonte.toString());
        if (alimentos.length > 0) desenharGraficos();
    }

    aplicarPreferenciasVisuais();

    const app = document.createElement("div");
    app.className = "wrapper";
    document.body.appendChild(app);

    const toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);

    function notificar(msg) {
        toast.textContent = msg;
        toast.classList.add("show");
        setTimeout(() => toast.classList.remove("show"), 3200);
    }

    // Header
    const header = document.createElement("header");
    header.innerHTML = `
        <div class="brand">
            <div class="brand-logo">🌱</div>
            <div>
                <h1>Salva<span>Comida</span> Enterprise</h1>
                <p>Roteamento Inteligente contra Desperdício • Java + Pure JS</p>
            </div>
        </div>
        <div class="header-controls">
            <button type="button" class="btn-pill" id="btnExportCsv">📥 CSV</button>
            <button type="button" class="btn-pill" id="btnResetDemo" title="Restaurar dados iniciais">🔄 Resetar Demo</button>
            <div class="a11y-group" title="Tamanho da fonte">
                <button type="button" class="btn-ctrl" id="btnFontDec">A-</button>
                <button type="button" class="btn-ctrl" id="btnFontReset">A</button>
                <button type="button" class="btn-ctrl" id="btnFontInc">A+</button>
            </div>
            <button type="button" class="btn-pill" id="btnToggleTheme">
                ${temaAtual === "light" ? "🌙 Escuro" : "☀️ Claro"}
            </button>
            <div class="badge-api"><span class="pulse-dot"></span> JAVA API</div>
        </div>
    `;
    app.appendChild(header);

    // Menu de Navegação Principal (iniciando com Sobre & Impacto)
    const navBar = document.createElement("nav");
    navBar.className = "nav-bar";
    navBar.innerHTML = `
        <div class="nav-tabs">
            <button type="button" class="nav-btn active" data-view="SOBRE">
                📘 Sobre & Impacto
            </button>
            <button type="button" class="nav-btn" data-view="CADASTRO">
                ➕ Cadastrar & Fila <span class="nav-badge" id="navCountItens">0</span>
            </button>
            <button type="button" class="nav-btn" data-view="GRAFICOS">
                📊 Gráficos & Impacto ESG
            </button>
            <button type="button" class="nav-btn" data-view="ONGS">
                🏢 Rede de ONGs
            </button>
            <button type="button" class="nav-btn" data-view="TUDO">
                🖥️ Painel Geral
            </button>
        </div>
        <div class="nav-sim">
            <button type="button" class="btn-time" id="btnAvancarTempo" title="Simula a passagem de 1 hora no sistema">
                ⏩ Simular +1 Hora
            </button>
        </div>
    `;
    app.appendChild(navBar);

    // KPI Cards
    const statsGrid = document.createElement("div");
    statsGrid.className = "stats-grid";
    app.appendChild(statsGrid);

    // Seção Sobre o Programa & Perda de Alimentos (Tela inicial)
    const secSobre = document.createElement("section");
    secSobre.id = "viewSobre";
    secSobre.innerHTML = `
        <div class="ranking-box">
            <div class="about-hero">
                <div class="about-hero-text">
                    <h2>📘 Como Funciona o SalvaComida & Por que Combater o Desperdício?</h2>
                    <p>
                        O <b>SalvaComida Enterprise</b> é uma plataforma inteligente que conecta restaurantes, padarias, mercados e hortifrútis
                        a <b>ONGs</b> e <b>consumidores locais</b> antes que alimentos próprios para o consumo sejam descartados.
                        Por meio de regras automatizadas no servidor Java, o sistema decide em milissegundos o destino mais eficiente para cada lote.
                    </p>
                </div>
                <div class="about-cta-group">
                    <button type="button" class="btn-cta-primary" id="btnComecarCadastro">➕ Cadastrar & Ver Fila</button>
                    <button type="button" class="btn-cta-secondary" id="btnVerGraficosInicio">📊 Ver Gráficos ESG</button>
                </div>
            </div>

            <h3 style="font-size:1.05rem;margin-bottom:6px;">⚙️ Como o Programa Funciona na Prática</h3>
            <p style="font-size:0.84rem;color:var(--muted);margin-bottom:12px;">Do registro do excedente até a retirada comprovada:</p>
            <div class="steps-flow" style="margin-bottom:24px;">
                <div class="step-box">
                    <span class="step-num">PASSO 1</span>
                    <h5>Registro ou Balança IoT</h5>
                    <p>O estabelecimento cadastra o alimento excedente (peso, categoria, preço original e horas restantes de validade) ou captura o peso direto da balança simulada.</p>
                </div>
                <div class="step-box">
                    <span class="step-num">PASSO 2</span>
                    <h5>Roteamento Inteligente (Java)</h5>
                    <p>Lotes grandes (<b>≥ 5 kg</b>) ou urgentes (<b>≤ 3h</b>) vão gratuitamente para <b>ONGs parceiras</b>. Lotes menores ganham descontos automáticos de <b>50% a 70%</b>.</p>
                </div>
                <div class="step-box">
                    <span class="step-num">PASSO 3</span>
                    <h5>Monitoramento Dinâmico</h5>
                    <p>Conforme o tempo passa (testável no botão <b>Simular +1 Hora</b>), os descontos aumentam e lotes críticos migram automaticamente para doação ou compostagem.</p>
                </div>
                <div class="step-box">
                    <span class="step-num">PASSO 4</span>
                    <h5>Retirada & Métricas ESG</h5>
                    <p>O destinatário gera um <b>Voucher com QR Code</b> para coleta e o painel calcula refeições garantidas, carbono evitado e água poupada.</p>
                </div>
            </div>

            <div class="about-grid" style="margin-bottom:0;">
                <div class="about-card">
                    <h4>🌍 O Problema da Perda de Alimentos</h4>
                    <p>
                        Cerca de <b>1/3 de todos os alimentos produzidos no mundo</b> é perdido ou desperdiçado anualmente ao longo da cadeia
                        de abastecimento, enquanto milhões de pessoas convivem com a insegurança alimentar.
                    </p>
                    <ul>
                        <li>No Brasil, milhões de toneladas de alimentos perfeitos para consumo vão para o lixo todos os anos em feiras, mercados e restaurantes.</li>
                        <li>A falta de comunicação rápida entre quem tem sobras e quem precisa é uma das principais causas desse descarte.</li>
                    </ul>
                </div>

                <div class="about-card">
                    <h4>💧 Impacto Ambiental Oculto</h4>
                    <p>
                        Desperdiçar comida não significa apenas jogar alimento fora — significa desperdiçar todos os recursos naturais investidos para produzi-la:
                    </p>
                    <ul>
                        <li><b>Pegada Hídrica:</b> Produzir 1 kg de alimento consome em média <b>1.000 litros de água potável</b> na irrigação e processamento.</li>
                        <li><b>Emissões de Carbono:</b> Alimentos em aterros sanitários liberam gás metano, um dos principais agravantes do efeito estufa.</li>
                    </ul>
                </div>

                <div class="about-card">
                    <h4>🚀 Importância de Usar Este Programa</h4>
                    <p>
                        A tecnologia transforma um passivo ambiental e financeiro em impacto positivo imediato para toda a comunidade:
                    </p>
                    <ul>
                        <li><b>Segurança Alimentar:</b> Agiliza a entrega de refeições nutritivas para cozinhas comunitárias e famílias vulneráveis.</li>
                        <li><b>Economia Circular:</b> Comércios recuperam parte dos custos em vendas relâmpago e fortalecem sua responsabilidade social (ESG).</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
    app.appendChild(secSobre);

    // Seção de Gráficos & Impacto ESG
    const secGraficos = document.createElement("section");
    secGraficos.id = "viewGraficos";
    secGraficos.innerHTML = `
        <div class="charts-grid">
            <div class="chart-card">
                <div class="chart-header">
                    <h3>🎯 Distribuição de Destinos</h3>
                    <span>Por quantidade de lotes</span>
                </div>
                <div class="chart-body">
                    <canvas id="chartDonut" width="180" height="180"></canvas>
                    <div class="legend-list" id="legendDonut"></div>
                </div>
            </div>
            <div class="chart-card">
                <div class="chart-header">
                    <h3>📈 Impacto por Categoria (Kg Salvos vs CO₂)</h3>
                    <span>Cálculo em tempo real</span>
                </div>
                <div class="chart-body">
                    <canvas id="chartBar" width="480" height="185" style="width:100%;max-width:500px;height:185px;"></canvas>
                </div>
            </div>
        </div>
        <div class="ranking-box">
            <div class="chart-header" style="margin-bottom:0;">
                <h3>🏆 Ranking de Estabelecimentos Parceiros (Maior Volume Salvo)</h3>
                <span>Atualizado automaticamente</span>
            </div>
            <div class="ranking-grid" id="rankingParceiros"></div>
        </div>
    `;
    app.appendChild(secGraficos);

    // Seção Rede de ONGs
    const secOngs = document.createElement("section");
    secOngs.id = "viewOngs";
    secOngs.innerHTML = `
        <div class="ranking-box">
            <div class="chart-header">
                <h3>🏢 Rede de Instituições Receptoras & Logística Reversa</h3>
                <span>Roteamento automático por especialidade e proximidade</span>
            </div>
            <div class="ranking-grid" id="gridOngs"></div>
        </div>
    `;
    app.appendChild(secOngs);

    // Seção de Cadastro & Fila
    const secCadastro = document.createElement("section");
    secCadastro.id = "viewCadastro";
    secCadastro.className = "main-grid";
    app.appendChild(secCadastro);

    // Formulário
    const formPanel = document.createElement("div");
    formPanel.className = "panel";
    formPanel.innerHTML = `
        <div class="panel-title">
            <span>Cadastrar Produto</span>
            <button type="button" class="btn-iot" id="btnIoT">⚡ Ler Balança IoT</button>
        </div>
        <div class="iot-status">
            <span>📡 Sensor: <b id="sensorId">BAL-01 (Pronto)</b></span>
            <span id="sensorPesoTag">Aguardando leitura</span>
        </div>
        <form id="formCadastro">
            <div class="field">
                <label>Estabelecimento</label>
                <input type="text" id="restaurante" placeholder="Ex: Cantina da Serra" required>
            </div>
            <div class="field">
                <label>Item / Refeição</label>
                <input type="text" id="nomeItem" placeholder="Ex: Lasanha Bolonhesa" required>
            </div>
            <div class="field">
                <label>Categoria</label>
                <select id="categoria">
                    <option value="Refeição Pronta">Refeição Pronta</option>
                    <option value="Padaria / Pães">Padaria / Pães</option>
                    <option value="Hortifrúti">Hortifrúti</option>
                    <option value="Laticínios">Laticínios</option>
                </select>
            </div>
            <div class="row-2">
                <div class="field">
                    <label>Peso (Kg)</label>
                    <input type="number" id="quantidadeKg" step="0.1" min="0.1" value="3.5" required>
                </div>
                <div class="field">
                    <label>Validade (Horas)</label>
                    <input type="number" id="horasValidade" min="1" max="72" value="5" required>
                </div>
            </div>
            <div class="field">
                <label>Preço Original (R$)</label>
                <input type="number" id="precoOriginal" step="0.01" min="0" value="40.00" required>
            </div>
            <div class="live-preview" id="livePreview"></div>
            <button type="submit" class="btn-submit">+ Cadastrar e Roteirizar</button>
        </form>
        <div class="batch-actions">
            <button type="button" class="btn-secondary" id="btnLoteIot">📡 Receber Lote IoT (3x)</button>
            <button type="button" class="btn-secondary" id="btnLimparConcluidos">🧹 Limpar Concluídos</button>
        </div>
    `;
    secCadastro.appendChild(formPanel);

    // Lista
    const listPanel = document.createElement("div");
    listPanel.className = "panel";
    listPanel.innerHTML = `
        <div class="panel-title">
            <span>Fila de Redistribuição</span>
            <span id="contadorFiltro" style="font-size:0.78rem;color:var(--muted);font-weight:600;"></span>
        </div>
        <div class="toolbar">
            <input type="text" id="campoBusca" placeholder="Buscar por item, restaurante ou ONG...">
            <select id="selectOrdenacao">
                <option value="RECENTES">Mais Recentes</option>
                <option value="URGENCIA">Maior Urgência (Validade)</option>
                <option value="PESO">Maior Peso (Kg)</option>
                <option value="CO2">Maior Impacto CO₂</option>
            </select>
        </div>
        <div class="filter-tabs">
            <button class="filter-btn active" data-filtro="TODOS">Todos</button>
            <button class="filter-btn" data-filtro="DOACAO_ONG">🎁 Doação ONG</button>
            <button class="filter-btn" data-filtro="VENDA_RELAMPAGO">🏷️ Venda Relâmpago</button>
            <button class="filter-btn" data-filtro="CONCLUIDOS">✅ Coletados</button>
        </div>
        <div class="items-list" id="listaItens"></div>
    `;
    secCadastro.appendChild(listPanel);

    // Controle de Navegação entre Abas
    function alternarAba(novaAba) {
        abaAtual = novaAba;
        document.querySelectorAll(".nav-btn").forEach(btn => {
            btn.classList.toggle("active", btn.dataset.view === novaAba);
        });

        secSobre.classList.toggle("hidden-view", novaAba !== "SOBRE" && novaAba !== "TUDO");
        secCadastro.classList.toggle("hidden-view", novaAba !== "CADASTRO" && novaAba !== "TUDO");
        secGraficos.classList.toggle("hidden-view", novaAba !== "GRAFICOS" && novaAba !== "TUDO");
        secOngs.classList.toggle("hidden-view", novaAba !== "ONGS" && novaAba !== "TUDO");

        if (novaAba === "GRAFICOS" || novaAba === "TUDO") {
            desenharGraficos();
        }
    }

    document.querySelectorAll(".nav-btn").forEach(btn => {
        btn.addEventListener("click", () => alternarAba(btn.dataset.view));
    });

    document.getElementById("btnComecarCadastro").addEventListener("click", () => alternarAba("CADASTRO"));
    document.getElementById("btnVerGraficosInicio").addEventListener("click", () => alternarAba("GRAFICOS"));

    // Inicia na aba Sobre & Impacto
    alternarAba("SOBRE");

    // Modal Voucher
    const modal = document.createElement("div");
    modal.className = "modal-backdrop";
    modal.innerHTML = `
        <div class="modal-box">
            <h3 style="color:var(--primary);margin-bottom:4px;">🎫 Voucher de Retirada</h3>
            <p style="font-size:0.78rem;color:var(--muted);">Apresente este código no estabelecimento</p>
            <div class="qr-frame"><canvas id="qrCanvas" width="140" height="140"></canvas></div>
            <div class="voucher-info" id="voucherDetails"></div>
            <button type="button" class="btn-submit" id="btnFecharModal">Fechar Comprovante</button>
        </div>
    `;
    document.body.appendChild(modal);

    document.getElementById("btnFecharModal").addEventListener("click", () => modal.classList.remove("open"));
    modal.addEventListener("click", (e) => { if (e.target === modal) modal.classList.remove("open"); });

    function abrirVoucher(item) {
        const canvas = document.getElementById("qrCanvas");
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, 140, 140);
        ctx.fillStyle = "#0f172a";

        let seed = 0;
        for (let i = 0; i < item.id.length; i++) seed += item.id.charCodeAt(i) * (i + 7);
        const cells = 14;
        const size = 10;
        for (let r = 0; r < cells; r++) {
            for (let c = 0; c < cells; c++) {
                const isCorner = (r < 3 && c < 3) || (r < 3 && c > cells - 4) || (r > cells - 4 && c < 3);
                const hash = Math.sin(seed + r * 17 + c * 31) * 10000;
                if (isCorner || (hash - Math.floor(hash)) > 0.5) {
                    ctx.fillRect(c * size, r * size, size - 1, size - 1);
                }
            }
        }

        const aguaItem = calcularAguaLitros(item);
        document.getElementById("voucherDetails").innerHTML = `
            <b>Protocolo:</b> #${item.id}<br>
            <b>Estabelecimento:</b> ${item.restaurante}<br>
            <b>Alimento:</b> ${item.nomeItem} (${item.quantidadeKg} kg)<br>
            <b>Destinatário:</b> ${item.ongParceira}<br>
            <b>Valor Final:</b> ${item.destino === "DOACAO_ONG" || item.expirado ? "GRATUITO" : "R$ " + item.precoFinal.toFixed(2)}<br>
            <b>Impacto:</b> -${item.co2EvitadoKg.toFixed(1)} kg CO₂ • ${aguaItem.toLocaleString("pt-BR")} L água
        `;
        modal.classList.add("open");
    }

    function atualizarPreviewFormulario() {
        const peso = parseFloat(document.getElementById("quantidadeKg").value) || 0;
        const horas = parseInt(document.getElementById("horasValidade").value) || 1;
        const preco = parseFloat(document.getElementById("precoOriginal").value) || 0;
        const preview = document.getElementById("livePreview");

        const ehDoacao = peso >= 5.0 || horas <= 3;
        const co2 = (peso * 2.5).toFixed(1);

        if (ehDoacao) {
            preview.innerHTML = `🤖 <b>Decisão Automática:</b> <span style="color:var(--amber);font-weight:700;">DOAÇÃO GRATUITA PARA ONG</span> (Peso ≥ 5kg ou Validade ≤ 3h) • 🌱 <b>-${co2}kg CO₂</b>`;
        } else {
            const desc = horas <= 6 ? 70 : 50;
            const final = (preco * (1 - desc / 100)).toFixed(2);
            preview.innerHTML = `🤖 <b>Decisão Automática:</b> <span style="color:var(--blue);font-weight:700;">VENDA RELÂMPAGO (-${desc}%)</span> por <b>R$ ${final}</b> • 🌱 <b>-${co2}kg CO₂</b>`;
        }
    }

    ["quantidadeKg", "horasValidade", "precoOriginal"].forEach(id => {
        document.getElementById(id).addEventListener("input", atualizarPreviewFormulario);
    });
    atualizarPreviewFormulario();

    function simularLeituraBalancaIoT() {
        let idx;
        do {
            idx = Math.floor(Math.random() * catalogoBalancaIoT.length);
        } while (idx === ultimoIndiceIoT && catalogoBalancaIoT.length > 1);
        ultimoIndiceIoT = idx;

        const base = catalogoBalancaIoT[idx];
        const fator = 0.85 + Math.random() * 0.35;
        const pesoReal = Math.max(0.5, Number((base.q * fator).toFixed(1)));
        const precoReal = Math.max(5.0, Number((base.p * fator).toFixed(2)));
        const validadeReal = Math.max(1, Math.min(12, base.v + (Math.floor(Math.random() * 3) - 1)));
        const numSensor = String(Math.floor(Math.random() * 12) + 1).padStart(2, "0");

        document.getElementById("restaurante").value = base.r;
        document.getElementById("nomeItem").value = base.i;
        document.getElementById("categoria").value = base.c;
        document.getElementById("quantidadeKg").value = pesoReal;
        document.getElementById("horasValidade").value = validadeReal;
        document.getElementById("precoOriginal").value = precoReal.toFixed(2);

        document.getElementById("sensorId").textContent = `BAL-${numSensor} (Conectado)`;
        document.getElementById("sensorPesoTag").textContent = `⚖️ ${pesoReal} kg lidos`;

        atualizarPreviewFormulario();
        notificar(`📡 Balança BAL-${numSensor}: ${base.i} (${pesoReal} kg)!`);
    }

    document.getElementById("btnIoT").addEventListener("click", simularLeituraBalancaIoT);

    document.getElementById("btnAvancarTempo").addEventListener("click", async () => {
        await fetch("/api/avancar-tempo", { method: "POST" });
        notificar("⏩ +1 hora simulada! Preços e rotas recalculados.");
        await carregarDados();
    });

    document.getElementById("btnResetDemo").addEventListener("click", async () => {
        await fetch("/api/resetar-demo", { method: "POST" });
        notificar("🔄 Base de demonstração restaurada!");
        await carregarDados();
    });

    const btnToggleTheme = document.getElementById("btnToggleTheme");
    btnToggleTheme.addEventListener("click", () => {
        temaAtual = temaAtual === "dark" ? "light" : "dark";
        aplicarPreferenciasVisuais();
        btnToggleTheme.innerHTML = temaAtual === "light" ? "🌙 Escuro" : "☀️ Claro";
        notificar(temaAtual === "light" ? "☀️ Tema claro ativado!" : "🌙 Tema escuro ativado!");
    });

    document.getElementById("btnFontInc").addEventListener("click", () => {
        if (escalaFonte < 130) { escalaFonte += 10; aplicarPreferenciasVisuais(); notificar(`🔍 Fonte: ${escalaFonte}%`); }
    });
    document.getElementById("btnFontDec").addEventListener("click", () => {
        if (escalaFonte > 80) { escalaFonte -= 10; aplicarPreferenciasVisuais(); notificar(`🔍 Fonte: ${escalaFonte}%`); }
    });
    document.getElementById("btnFontReset").addEventListener("click", () => {
        escalaFonte = 100; aplicarPreferenciasVisuais(); notificar("🔍 Fonte padrão (100%)");
    });

    document.getElementById("btnExportCsv").addEventListener("click", () => {
        if (alimentos.length === 0) return notificar("⚠️ Nenhum dado para exportar.");
        const cabecalho = "ID;Restaurante;Alimento;Categoria;Peso_Kg;Preco_Original;Preco_Final;Destino;Destinatario;CO2_Evitado_Kg;Agua_Litros;Status\n";
        const linhas = alimentos.map(a =>
            `${a.id};"${a.restaurante}";"${a.nomeItem}";"${a.categoria}";${a.quantidadeKg};${a.precoOriginal};${a.precoFinal};${a.destino};"${a.ongParceira}";${a.co2EvitadoKg};${calcularAguaLitros(a)};${a.reservado ? "Coletado" : "Disponivel"}`
        ).join("\n");

        const blob = new Blob(["\uFEFF" + cabecalho + linhas], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "relatorio_salvacomida.csv";
        link.click();
        notificar("📥 Relatório CSV baixado!");
    });

    document.getElementById("btnLoteIot").addEventListener("click", async () => {
        await fetch("/api/lote-iot", { method: "POST" });
        notificar("📡 3 novos lotes aleatórios recebidos!");
        await carregarDados();
    });

    document.getElementById("btnLimparConcluidos").addEventListener("click", async () => {
        await fetch("/api/limpar-concluidos", { method: "POST" });
        notificar("🧹 Coletas concluídas removidas!");
        await carregarDados();
    });

    document.getElementById("formCadastro").addEventListener("submit", async (e) => {
        e.preventDefault();
        const params = new URLSearchParams();
        params.append("restaurante", document.getElementById("restaurante").value);
        params.append("nomeItem", document.getElementById("nomeItem").value);
        params.append("categoria", document.getElementById("categoria").value);
        params.append("quantidadeKg", document.getElementById("quantidadeKg").value);
        params.append("horasValidade", document.getElementById("horasValidade").value);
        params.append("precoOriginal", document.getElementById("precoOriginal").value);

        const res = await fetch("/api/alimentos", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: params.toString()
        });

        if (res.ok) {
            document.getElementById("restaurante").value = "";
            document.getElementById("nomeItem").value = "";
            document.getElementById("sensorPesoTag").textContent = "Aguardando leitura";
            atualizarPreviewFormulario();
            notificar("✅ Alimento cadastrado e roteirizado!");
            await carregarDados();
        }
    });

    document.getElementById("campoBusca").addEventListener("input", (e) => {
        termoBusca = e.target.value.toLowerCase();
        renderizar();
    });

    document.getElementById("selectOrdenacao").addEventListener("change", (e) => {
        ordenacaoAtual = e.target.value;
        renderizar();
    });

    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            filtroAtual = btn.dataset.filtro;
            renderizar();
        });
    });

    async function alternarReserva(id) {
        await fetch(`/api/reservar?id=${encodeURIComponent(id)}`, { method: "POST" });
        notificar("🔄 Status atualizado!");
        await carregarDados();
    }

    async function excluirItem(id) {
        await fetch(`/api/excluir?id=${encodeURIComponent(id)}`, { method: "POST" });
        notificar("🗑️ Registro removido.");
        await carregarDados();
    }

    async function carregarDados() {
        const res = await fetch("/api/alimentos");
        alimentos = await res.json();
        renderizar();
    }

    function renderizarRedeOngs() {
        const grid = document.getElementById("gridOngs");
        grid.innerHTML = redeOngs.map(ong => {
            const lotesOng = alimentos.filter(a => a.ongParceira === ong.nome);
            const kgTotal = lotesOng.reduce((acc, i) => acc + (Number(i.quantidadeKg) || 0), 0);
            const pctCap = Math.min(100, Math.round((kgTotal / ong.capacidadeMax) * 100));

            return `
                <div class="ong-card">
                    <div class="ong-top">
                        <div>
                            <div style="font-weight:800;font-size:0.98rem;">${ong.nome}</div>
                            <small style="color:var(--muted);">📍 ${ong.distancia} • ${ong.responsavel}</small>
                        </div>
                        <span class="ong-badge">${ong.especialidade}</span>
                    </div>
                    <div style="font-size:0.82rem;color:var(--text);display:flex;justify-content:space-between;">
                        <span>Volume Destinado: <b>${kgTotal.toFixed(1)} kg</b></span>
                        <span style="color:var(--muted);">${lotesOng.length} lote(s)</span>
                    </div>
                    <div class="cap-bar"><div class="cap-fill" style="width:${pctCap}%;"></div></div>
                    <small style="color:var(--muted);font-size:0.72rem;">Ocupação da câmara fria/estoque: ${pctCap}% de ${ong.capacidadeMax} kg</small>
                </div>
            `;
        }).join("");
    }

    function desenharGraficos() {
        const corTexto = temaAtual === "light" ? "#0f172a" : "#f8fafc";
        const corMuted = temaAtual === "light" ? "#64748b" : "#94a3b8";
        const corGrid = temaAtual === "light" ? "rgba(15,23,42,0.08)" : "rgba(148,163,184,0.12)";

        const cDonut = document.getElementById("chartDonut");
        const ctxD = cDonut.getContext("2d");
        ctxD.clearRect(0, 0, cDonut.width, cDonut.height);

        const qtdOng = alimentos.filter(a => !a.reservado && a.destino === "DOACAO_ONG").length;
        const qtdVenda = alimentos.filter(a => !a.reservado && a.destino === "VENDA_RELAMPAGO").length;
        const qtdConcluidos = alimentos.filter(a => a.reservado).length;
        const total = alimentos.length;

        const fatias = [
            { label: "Doação ONG", valor: qtdOng, cor: "#f59e0b" },
            { label: "Venda Relâmpago", valor: qtdVenda, cor: "#3b82f6" },
            { label: "Coletados", valor: qtdConcluidos, cor: "#10b981" }
        ];

        const cx = 90, cy = 90, raio = 68, espessura = 22;
        if (total === 0) {
            ctxD.beginPath();
            ctxD.arc(cx, cy, raio, 0, Math.PI * 2);
            ctxD.strokeStyle = corGrid;
            ctxD.lineWidth = espessura;
            ctxD.stroke();
        } else {
            let anguloInicial = -Math.PI / 2;
            fatias.forEach(f => {
                if (f.valor > 0) {
                    const anguloFatia = (f.valor / total) * Math.PI * 2;
                    ctxD.beginPath();
                    ctxD.arc(cx, cy, raio, anguloInicial, anguloInicial + anguloFatia);
                    ctxD.strokeStyle = f.cor;
                    ctxD.lineWidth = espessura;
                    ctxD.stroke();
                    anguloInicial += anguloFatia;
                }
            });
        }

        ctxD.fillStyle = corTexto;
        ctxD.font = "bold 24px Segoe UI, sans-serif";
        ctxD.textAlign = "center";
        ctxD.textBaseline = "middle";
        ctxD.fillText(total.toString(), cx, cy - 6);
        ctxD.fillStyle = corMuted;
        ctxD.font = "600 11px Segoe UI, sans-serif";
        ctxD.fillText("LOTES", cx, cy + 14);

        document.getElementById("legendDonut").innerHTML = fatias.map(f => `
            <div class="legend-item">
                <div class="legend-left"><span class="legend-dot" style="background:${f.cor}"></span>${f.label}</div>
                <b>${f.valor}</b>
            </div>
        `).join("");

        const cBar = document.getElementById("chartBar");
        const ctxB = cBar.getContext("2d");
        ctxB.clearRect(0, 0, cBar.width, cBar.height);

        const categorias = ["Refeição Pronta", "Padaria / Pães", "Hortifrúti", "Laticínios"];
        const dadosCat = categorias.map(cat => {
            const itensCat = alimentos.filter(a => a.categoria === cat);
            return {
                nome: cat.split(" ")[0],
                kg: itensCat.reduce((acc, i) => acc + (Number(i.quantidadeKg) || 0), 0),
                co2: itensCat.reduce((acc, i) => acc + (Number(i.co2EvitadoKg) || 0), 0)
            };
        });

        const maxVal = Math.max(10, ...dadosCat.map(d => d.co2));
        const padLeft = 38, padBottom = 28, padTop = 20;
        const areaH = cBar.height - padBottom - padTop;
        const areaW = cBar.width - padLeft - 16;

        ctxB.strokeStyle = corGrid;
        ctxB.lineWidth = 1;
        for (let i = 0; i <= 3; i++) {
            const y = padTop + (areaH / 3) * i;
            ctxB.beginPath();
            ctxB.moveTo(padLeft, y);
            ctxB.lineTo(cBar.width - 10, y);
            ctxB.stroke();

            ctxB.fillStyle = corMuted;
            ctxB.font = "10px Segoe UI, sans-serif";
            ctxB.textAlign = "right";
            ctxB.fillText(Math.round(maxVal - (maxVal / 3) * i) + "kg", padLeft - 6, y + 3);
        }

        const grupoW = areaW / categorias.length;
        dadosCat.forEach((d, idx) => {
            const baseX = padLeft + idx * grupoW + grupoW * 0.22;
            const barW = grupoW * 0.24;

            const hKg = (d.kg / maxVal) * areaH;
            ctxB.fillStyle = "#3b82f6";
            ctxB.fillRect(baseX, padTop + areaH - hKg, barW, hKg);

            const hCo2 = (d.co2 / maxVal) * areaH;
            ctxB.fillStyle = "#10b981";
            ctxB.fillRect(baseX + barW + 4, padTop + areaH - hCo2, barW, hCo2);

            ctxB.fillStyle = corTexto;
            ctxB.font = "600 11px Segoe UI, sans-serif";
            ctxB.textAlign = "center";
            ctxB.fillText(d.nome, baseX + barW + 2, cBar.height - 8);
        });

        ctxB.fillStyle = "#3b82f6";
        ctxB.fillRect(cBar.width - 155, 4, 10, 10);
        ctxB.fillStyle = corMuted;
        ctxB.font = "11px Segoe UI, sans-serif";
        ctxB.textAlign = "left";
        ctxB.fillText("Peso (kg)", cBar.width - 140, 13);

        ctxB.fillStyle = "#10b981";
        ctxB.fillRect(cBar.width - 80, 4, 10, 10);
        ctxB.fillStyle = corMuted;
        ctxB.fillText("CO₂ Evitado", cBar.width - 65, 13);

        const mapaParceiros = {};
        alimentos.forEach(a => {
            if (!mapaParceiros[a.restaurante]) {
                mapaParceiros[a.restaurante] = { kg: 0, co2: 0, lotes: 0 };
            }
            mapaParceiros[a.restaurante].kg += Number(a.quantidadeKg) || 0;
            mapaParceiros[a.restaurante].co2 += Number(a.co2EvitadoKg) || 0;
            mapaParceiros[a.restaurante].lotes += 1;
        });

        const topParceiros = Object.entries(mapaParceiros)
            .sort((a, b) => b[1].kg - a[1].kg)
            .slice(0, 6);

        const rankContainer = document.getElementById("rankingParceiros");
        if (topParceiros.length === 0) {
            rankContainer.innerHTML = `<p style="color:var(--muted);font-size:0.85rem;">Nenhum dado registrado ainda.</p>`;
        } else {
            rankContainer.innerHTML = topParceiros.map(([nome, dados], i) => `
                <div class="rank-item">
                    <div>
                        <div style="font-weight:700;font-size:0.9rem;">#${i + 1} ${nome}</div>
                        <small style="color:var(--muted);">${dados.lotes} lote(s) • 🌱 -${dados.co2.toFixed(1)}kg CO₂</small>
                    </div>
                    <div style="font-weight:800;color:var(--primary);font-size:1.05rem;">${dados.kg.toFixed(1)} kg</div>
                </div>
            `).join("");
        }
    }

    function renderizar() {
        const totalKg = alimentos.reduce((acc, a) => acc + (Number(a.quantidadeKg) || 0), 0);
        const totalCo2 = alimentos.reduce((acc, a) => acc + (Number(a.co2EvitadoKg) || (Number(a.quantidadeKg) || 0) * 2.5), 0);
        const totalAgua = alimentos.reduce((acc, a) => acc + calcularAguaLitros(a), 0);
        const economiaGerada = alimentos.reduce((acc, a) => acc + ((Number(a.precoOriginal) || 0) - (Number(a.precoFinal) || 0)), 0);
        const refeicoesEstimadas = Math.round(totalKg * 2.5);

        const textoAgua = totalAgua >= 1000
            ? `${(totalAgua / 1000).toFixed(1)} mil L`
            : `${Math.round(totalAgua)} L`;

        document.getElementById("navCountItens").textContent = alimentos.length;

        statsGrid.innerHTML = `
            <div class="stat-card">
                <div class="stat-top"><span>Alimentos Salvos</span><span class="stat-icon">🥗</span></div>
                <h2>${totalKg.toFixed(1)} kg</h2>
                <small>≈ ${refeicoesEstimadas} refeições garantidas</small>
            </div>
            <div class="stat-card">
                <div class="stat-top"><span>Carbono Evitado</span><span class="stat-icon">🌍</span></div>
                <h2>${totalCo2.toFixed(1)} kg</h2>
                <small>Redução direta de CO₂</small>
            </div>
            <div class="stat-card">
                <div class="stat-top"><span>Pegada Hídrica</span><span class="stat-icon">💧</span></div>
                <h2>${textoAgua}</h2>
                <small>De água potável poupada</small>
            </div>
            <div class="stat-card">
                <div class="stat-top"><span>Economia Social</span><span class="stat-icon">💰</span></div>
                <h2>R$ ${economiaGerada.toFixed(2)}</h2>
                <small>Em descontos e doações</small>
            </div>
        `;

        desenharGraficos();
        renderizarRedeOngs();

        let filtrados = alimentos.filter(a => {
            const bateFiltro = filtroAtual === "TODOS" ||
                               (filtroAtual === "CONCLUIDOS" && a.reservado) ||
                               (!a.reservado && a.destino === filtroAtual);
            const bateTexto = a.nomeItem.toLowerCase().includes(termoBusca) ||
                              a.restaurante.toLowerCase().includes(termoBusca) ||
                              a.ongParceira.toLowerCase().includes(termoBusca);
            return bateFiltro && bateTexto;
        });

        if (ordenacaoAtual === "URGENCIA") filtrados.sort((a, b) => a.horasValidade - b.horasValidade);
        if (ordenacaoAtual === "PESO") filtrados.sort((a, b) => b.quantidadeKg - a.quantidadeKg);
        if (ordenacaoAtual === "CO2") filtrados.sort((a, b) => b.co2EvitadoKg - a.co2EvitadoKg);

        document.getElementById("contadorFiltro").textContent = `Exibindo ${filtrados.length} de ${alimentos.length} registros`;

        const container = document.getElementById("listaItens");
        container.innerHTML = "";

        if (filtrados.length === 0) {
            container.innerHTML = `<p style="color:var(--muted);text-align:center;padding:32px;">Nenhum registro encontrado para este filtro.</p>`;
            return;
        }

        filtrados.forEach(item => {
            const card = document.createElement("div");
            const ehUrgente = !item.reservado && !item.expirado && item.horasValidade <= 2;
            card.className = `item-card ${item.reservado ? "reservado" : ""} ${ehUrgente ? "urgente" : ""}`;

            let badgeHtml;
            if (item.reservado) {
                badgeHtml = `<span class="tag tag-done">✅ COLETA CONCLUÍDA</span>`;
            } else if (item.expirado) {
                badgeHtml = `<span class="tag tag-compost">♻️ COMPOSTAGEM URBANA</span>`;
            } else if (item.destino === "DOACAO_ONG") {
                badgeHtml = `<span class="tag tag-ong">🎁 DOAÇÃO ONG • ${item.ongParceira}</span>`;
            } else {
                badgeHtml = `<span class="tag tag-venda">🏷️ VENDA RELÂMPAGO (-${item.descontoPercentual}%)</span>`;
            }

            const precoHtml = (item.destino === "DOACAO_ONG" || item.expirado)
                ? `<div class="new-price" style="color:var(--amber)">GRATUITO</div>`
                : `<div class="old-price">De R$ ${item.precoOriginal.toFixed(2)}</div>
                   <div class="new-price">R$ ${item.precoFinal.toFixed(2)}</div>`;

            const pctValidade = Math.min(100, Math.round((item.horasValidade / 12) * 100));
            const corBarra = item.horasValidade <= 3 ? "var(--danger)" : (item.horasValidade <= 6 ? "var(--amber)" : "var(--primary)");
            const textoValidade = item.expirado ? "⏳ Prazo encerrado (destino orgânico)" : `⏳ Expira em ${item.horasValidade}h${ehUrgente ? " (URGENTE)" : ""}`;

            card.innerHTML = `
                <div>
                    ${badgeHtml}
                    <div class="item-title">${item.nomeItem} <small style="color:var(--muted);font-weight:500;">#${item.id}</small></div>
                    <div class="item-meta">🏪 <b>${item.restaurante}</b> • ${item.categoria} • 📦 <b>${item.quantidadeKg} kg</b> • 🌱 -${item.co2EvitadoKg.toFixed(1)}kg CO₂</div>
                    <div style="display:flex;align-items:center;gap:8px;margin-top:6px;">
                        <div class="validity-bar"><div class="validity-fill" style="width:${pctValidade}%;background:${corBarra};"></div></div>
                        <small style="color:var(--muted);font-size:0.74rem;">${textoValidade}</small>
                    </div>
                </div>
                <div class="item-price">
                    ${precoHtml}
                    <div class="item-actions">
                        <button class="btn-sm btn-voucher">🎫 Voucher</button>
                        <button class="btn-sm btn-res">${item.reservado ? "Reabrir" : "Confirmar Coleta"}</button>
                        <button class="btn-sm btn-del">Excluir</button>
                    </div>
                </div>
            `;

            card.querySelector(".btn-voucher").addEventListener("click", () => abrirVoucher(item));
            card.querySelector(".btn-res").addEventListener("click", () => alternarReserva(item.id));
            card.querySelector(".btn-del").addEventListener("click", () => excluirItem(item.id));
            container.appendChild(card);
        });
    }

    carregarDados();
})();