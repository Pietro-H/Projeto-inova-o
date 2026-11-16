(() => {
    const style = document.createElement("style");
    style.textContent = `
        :root {
            --bg: #051315;
            --bg-gradient: radial-gradient(circle at top right, rgba(16, 185, 129, 0.22), transparent 50%),
                           radial-gradient(circle at bottom left, rgba(14, 165, 233, 0.20), transparent 50%);
            --card: rgba(11, 31, 35, 0.88);
            --card-solid: #0b1f23;
            --card-hover: #112d33;
            --sidebar-bg: rgba(8, 24, 28, 0.96);
            --input-bg: #07191c;
            --border: rgba(45, 212, 191, 0.20);
            --text: #ecfdf5;
            --muted: #86b8b5;
            --primary: #10b981;
            --primary-glow: rgba(16, 185, 129, 0.28);
            --primary-dark: #0284c7;
            --btn-grad: linear-gradient(135deg, #059669, #0284c7);
            --btn-text: #ffffff;
            --amber: #f59e0b;
            --blue: #0ea5e9;
            --teal: #14b8a6;
            --purple: #06b6d4;
            --danger: #ef4444;
            --shadow: 0 12px 32px rgba(2, 12, 14, 0.45);
        }

        [data-theme="light"] {
            --bg: #ebf7f5;
            --bg-gradient: radial-gradient(circle at top right, rgba(16, 185, 129, 0.16), transparent 52%),
                           radial-gradient(circle at bottom left, rgba(2, 132, 199, 0.15), transparent 52%);
            --card: rgba(255, 255, 255, 0.94);
            --card-solid: #ffffff;
            --card-hover: #f0fdfa;
            --sidebar-bg: #f6fcfa;
            --input-bg: #f0fdfa;
            --border: rgba(13, 148, 136, 0.20);
            --text: #062c2b;
            --muted: #3b6b6a;
            --primary: #059669;
            --primary-glow: rgba(5, 150, 105, 0.22);
            --primary-dark: #0284c7;
            --btn-grad: linear-gradient(135deg, #059669, #0284c7);
            --btn-text: #ffffff;
            --amber: #d97706;
            --blue: #0284c7;
            --teal: #0d9488;
            --purple: #0891b2;
            --danger: #dc2626;
            --shadow: 0 8px 24px rgba(6, 44, 43, 0.08);
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
            min-height: 100vh;
            font-size: 1rem;
        }

        .hidden-view { display: none !important; }

        /* ================= TELA DE LOGIN INICIAL (GATE) ================= */
        .login-gate {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 24px;
            position: relative;
        }

        .login-gate-topbar {
            position: absolute;
            top: 20px;
            right: 24px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .login-container {
            width: 100%;
            max-width: 980px;
            display: grid;
            grid-template-columns: 1.05fr 0.95fr;
            gap: 24px;
            align-items: stretch;
        }
        @media (max-width: 860px) {
            .login-container { grid-template-columns: 1fr; margin-top: 48px; }
        }

        .login-brand-header {
            text-align: center;
            margin-bottom: 24px;
        }
        .login-brand-logo {
            width: 60px;
            height: 60px;
            border-radius: 16px;
            background: var(--btn-grad);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 1.85rem;
            box-shadow: 0 8px 24px var(--primary-glow);
            margin-bottom: 12px;
        }
        .login-brand-header h1 { font-size: 1.85rem; font-weight: 800; letter-spacing: -0.5px; }
        .login-brand-header h1 span {
            background: linear-gradient(90deg, var(--primary), var(--blue));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .login-brand-header p { color: var(--muted); font-size: 0.9rem; margin-top: 4px; }

        .auth-tabs {
            display: flex;
            gap: 8px;
            margin-bottom: 18px;
            background: var(--input-bg);
            padding: 5px;
            border-radius: 12px;
            border: 1px solid var(--border);
        }
        .auth-tab-btn {
            flex: 1;
            padding: 10px 12px;
            border: none;
            border-radius: 8px;
            background: transparent;
            color: var(--muted);
            font-size: 0.84rem;
            font-weight: 700;
            cursor: pointer;
        }
        .auth-tab-btn.active {
            background: var(--btn-grad);
            color: var(--btn-text);
        }

        .demo-account-list {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-top: 12px;
        }
        .demo-acc-card {
            background: var(--input-bg);
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 12px 14px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 10px;
            cursor: pointer;
        }
        .demo-acc-card:hover {
            border-color: var(--blue);
            transform: translateX(3px);
        }
        .demo-acc-btn {
            background: linear-gradient(135deg, rgba(16, 185, 129, 0.16), rgba(14, 165, 233, 0.16));
            color: var(--teal);
            border: 1px solid rgba(20, 184, 166, 0.35);
            padding: 6px 12px;
            border-radius: 8px;
            font-size: 0.76rem;
            font-weight: 800;
            cursor: pointer;
            white-space: nowrap;
        }

        /* ================= LAYOUT PRINCIPAL COM BARRA LATERAL ================= */
        .app-layout {
            display: flex;
            min-height: 100vh;
        }

        .sidebar {
            width: 288px;
            background: var(--sidebar-bg);
            backdrop-filter: blur(14px);
            border-right: 1px solid var(--border);
            padding: 26px 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 26px;
            position: sticky;
            top: 0;
            height: 100vh;
            overflow-y: auto;
            flex-shrink: 0;
            z-index: 50;
        }

        .sidebar-top {
            display: flex;
            flex-direction: column;
            gap: 24px;
        }

        .brand { display: flex; align-items: center; gap: 13px; padding: 2px 4px; }
        .brand-logo {
            width: 42px;
            height: 42px;
            border-radius: 12px;
            background: var(--btn-grad);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.35rem;
            box-shadow: 0 4px 15px var(--primary-glow);
            flex-shrink: 0;
        }
        .brand h1 { font-size: 1.2rem; font-weight: 800; letter-spacing: -0.4px; line-height: 1.2; }
        .brand h1 span {
            background: linear-gradient(90deg, var(--primary), var(--blue));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .brand p { color: var(--muted); font-size: 0.73rem; margin-top: 3px; }

        .sidebar-user-card {
            background: linear-gradient(135deg, rgba(16, 185, 129, 0.12), rgba(14, 165, 233, 0.12));
            border: 1px solid rgba(20, 184, 166, 0.34);
            border-radius: 13px;
            padding: 14px 15px;
            display: flex;
            flex-direction: column;
            gap: 5px;
        }
        .sidebar-user-card .user-role {
            font-size: 0.66rem;
            font-weight: 800;
            text-transform: uppercase;
            color: var(--teal);
            letter-spacing: 0.6px;
        }
        .sidebar-user-card .user-name {
            font-size: 0.94rem;
            font-weight: 800;
            color: var(--text);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .sidebar-user-card .user-meta {
            font-size: 0.73rem;
            color: var(--muted);
        }

        .sidebar-section-label {
            font-size: 0.69rem;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.85px;
            color: var(--muted);
            padding: 0 8px;
            margin-bottom: 10px;
        }

        .sidebar-nav {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .nav-btn {
            width: 100%;
            background: transparent;
            color: var(--muted);
            border: 1px solid transparent;
            padding: 12px 14px;
            border-radius: 11px;
            font-size: 0.85rem;
            font-weight: 700;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            text-align: left;
        }
        .nav-btn-left { display: flex; align-items: center; gap: 10px; }
        .nav-btn:hover {
            background: var(--input-bg);
            border-color: var(--border);
            color: var(--text);
        }
        .nav-btn.active {
            background: var(--btn-grad);
            color: var(--btn-text);
            box-shadow: 0 4px 14px var(--primary-glow);
        }

        .nav-badge {
            background: rgba(0, 0, 0, 0.24);
            color: #ffffff;
            padding: 2px 8px;
            border-radius: 10px;
            font-size: 0.72rem;
        }

        .sidebar-tools {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .btn-side-action {
            width: 100%;
            background: var(--input-bg);
            color: var(--text);
            border: 1px solid var(--border);
            padding: 11px 14px;
            border-radius: 11px;
            font-size: 0.8rem;
            font-weight: 700;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 10px;
            text-align: left;
        }
        .btn-side-action:hover { border-color: var(--blue); color: var(--blue); }

        .btn-side-time {
            background: rgba(14, 165, 233, 0.14);
            color: var(--blue);
            border: 1px solid rgba(14, 165, 233, 0.38);
        }
        .btn-side-time:hover { background: var(--blue); color: #ffffff; border-color: var(--blue); }

        .sidebar-bottom {
            display: flex;
            flex-direction: column;
            gap: 14px;
            padding-top: 16px;
            border-top: 1px solid var(--border);
        }

        .sidebar-a11y-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 8px;
        }

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
            padding: 7px 10px;
            font-size: 0.78rem;
            font-weight: 700;
            cursor: pointer;
        }
        .btn-ctrl:hover { background: var(--card-hover); color: var(--primary); }
        .btn-ctrl + .btn-ctrl { border-left: 1px solid var(--border); }

        .btn-pill {
            background: var(--input-bg);
            color: var(--text);
            border: 1px solid var(--border);
            padding: 7px 11px;
            border-radius: 10px;
            font-size: 0.76rem;
            font-weight: 700;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 5px;
        }
        .btn-pill:hover { border-color: var(--blue); color: var(--blue); }

        .btn-logout-side {
            width: 100%;
            background: rgba(239, 68, 68, 0.14);
            color: var(--danger);
            border: 1px solid rgba(239, 68, 68, 0.35);
            padding: 11px 14px;
            border-radius: 11px;
            font-size: 0.83rem;
            font-weight: 800;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }
        .btn-logout-side:hover { background: var(--danger); color: #ffffff; }

        /* Área de Conteúdo Principal */
        .main-content {
            flex: 1;
            padding: 24px 28px;
            min-width: 0;
            max-width: 1360px;
        }

        .content-topbar {
            background: var(--card);
            backdrop-filter: blur(12px);
            border: 1px solid var(--border);
            border-radius: 14px;
            padding: 15px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            gap: 12px;
            flex-wrap: wrap;
            box-shadow: var(--shadow);
        }

        .content-topbar h2 { font-size: 1.15rem; font-weight: 800; }
        .content-topbar p { font-size: 0.78rem; color: var(--muted); margin-top: 2px; }

        .badge-api {
            background: linear-gradient(135deg, rgba(16, 185, 129, 0.14), rgba(14, 165, 233, 0.14));
            color: var(--teal);
            border: 1px solid rgba(20, 184, 166, 0.38);
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 0.72rem;
            font-weight: 800;
            display: flex;
            align-items: center;
            gap: 6px;
        }
        .pulse-dot {
            width: 8px; height: 8px; border-radius: 50%; background: var(--primary);
            box-shadow: 0 0 8px var(--blue);
        }

        @media (max-width: 900px) {
            .app-layout { flex-direction: column; }
            .sidebar {
                width: 100%;
                height: auto;
                position: static;
                border-right: none;
                border-bottom: 1px solid var(--border);
            }
            .sidebar-nav { flex-direction: row; flex-wrap: wrap; }
            .nav-btn { width: auto; flex: 1 1 160px; }
            .sidebar-tools { flex-direction: row; flex-wrap: wrap; }
            .btn-side-action { width: auto; flex: 1; }
            .main-content { padding: 18px; }
        }

        /* KPI Cards */
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
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
        .stat-card small { font-size: 0.76rem; color: var(--teal); font-weight: 600; }

        /* Rede de ONGs & Caixas */
        .section-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 14px;
            gap: 8px;
            flex-wrap: wrap;
        }
        .section-header h3 { font-size: 0.95rem; font-weight: 700; }
        .section-header span { font-size: 0.75rem; color: var(--muted); }

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
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: 14px;
            margin-top: 16px;
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
        .ong-card:hover { border-color: var(--blue); transform: translateY(-2px); }
        .ong-top { display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; }
        .ong-badge {
            font-size: 0.7rem; font-weight: 800; padding: 3px 9px; border-radius: 12px;
            background: linear-gradient(135deg, rgba(16, 185, 129, 0.16), rgba(14, 165, 233, 0.16));
            color: var(--teal);
            border: 1px solid rgba(20, 184, 166, 0.3);
        }
        .cap-bar { width: 100%; height: 8px; background: rgba(148, 163, 184, 0.18); border-radius: 6px; overflow: hidden; }
        .cap-fill { height: 100%; background: linear-gradient(90deg, var(--primary), var(--blue)); border-radius: 6px; }

        /* Seção Sobre & Impacto Simplificada */
        .about-hero {
            background: linear-gradient(135deg, rgba(16, 185, 129, 0.16), rgba(14, 165, 233, 0.15));
            border: 1px solid rgba(20, 184, 166, 0.35);
            border-radius: 16px;
            padding: 24px;
            margin-bottom: 22px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 20px;
            flex-wrap: wrap;
        }
        .about-hero-text { flex: 1; min-width: 260px; }
        .about-hero h2 { font-size: 1.35rem; margin-bottom: 8px; color: var(--text); }
        .about-hero p { color: var(--muted); font-size: 0.94rem; line-height: 1.6; max-width: 780px; }

        .about-cta-group { display: flex; gap: 10px; flex-wrap: wrap; }
        .btn-cta-primary {
            background: var(--btn-grad);
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
        .btn-cta-secondary:hover { border-color: var(--blue); color: var(--blue); }

        .about-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: 16px;
        }
        .about-card {
            background: var(--input-bg);
            border: 1px solid var(--border);
            border-radius: 14px;
            padding: 20px;
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
        .about-card h4 { font-size: 1.02rem; color: var(--teal); display: flex; align-items: center; gap: 8px; }
        .about-card p { font-size: 0.88rem; color: var(--muted); line-height: 1.55; }

        .steps-flow {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 14px;
            margin-top: 12px;
            margin-bottom: 24px;
        }
        .step-box {
            background: var(--input-bg);
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 18px;
        }
        .step-num {
            display: inline-block;
            background: var(--btn-grad);
            color: var(--btn-text);
            font-weight: 800;
            font-size: 0.74rem;
            padding: 3px 10px;
            border-radius: 12px;
            margin-bottom: 8px;
        }
        .step-box h5 { font-size: 0.96rem; margin-bottom: 6px; color: var(--text); }
        .step-box p { font-size: 0.85rem; color: var(--muted); line-height: 1.5; }

        /* Main Workspace */
        .main-grid {
            display: grid;
            grid-template-columns: 375px 1fr;
            gap: 22px;
            align-items: start;
        }
        @media (max-width: 1120px) { .main-grid { grid-template-columns: 1fr; } }

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
            background: rgba(14, 165, 233, 0.15);
            color: var(--blue);
            border: 1px solid rgba(14, 165, 233, 0.4);
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
            background: rgba(14, 165, 233, 0.08);
            border: 1px solid rgba(14, 165, 233, 0.25);
            padding: 6px 10px;
            border-radius: 8px;
            margin-bottom: 12px;
            display: flex;
            justify-content: space-between;
        }

        .logged-field-hint {
            font-size: 0.73rem;
            color: var(--teal);
            margin-top: 5px;
            font-weight: 700;
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
        .field input:focus, .field select:focus { outline: none; border-color: var(--blue); }
        .row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }

        .rules-spec-box {
            background: var(--input-bg);
            border: 1px solid var(--border);
            border-radius: 10px;
            padding: 10px 12px;
            margin-bottom: 12px;
            font-size: 0.74rem;
            line-height: 1.5;
        }
        .rules-spec-title {
            font-weight: 800;
            color: var(--teal);
            margin-bottom: 5px;
            display: flex;
            align-items: center;
            gap: 5px;
        }
        .rules-spec-list {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 4px;
            color: var(--muted);
        }
        .rules-spec-list li b { color: var(--text); }
        .rule-highlight-ong {
            color: var(--amber);
            font-weight: 700;
        }

        .live-preview {
            background: linear-gradient(135deg, rgba(16, 185, 129, 0.10), rgba(14, 165, 233, 0.10));
            border: 1px dashed rgba(20, 184, 166, 0.45);
            border-radius: 10px;
            padding: 11px 12px;
            font-size: 0.78rem;
            margin: 12px 0;
            color: var(--text);
            line-height: 1.45;
        }
        .live-preview.is-ong {
            background: linear-gradient(135deg, rgba(245, 158, 11, 0.14), rgba(16, 185, 129, 0.12));
            border-color: rgba(245, 158, 11, 0.55);
        }

        .btn-submit {
            width: 100%;
            background: var(--btn-grad);
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
        .btn-secondary:hover { border-color: var(--blue); color: var(--text); }

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
        .filter-btn.active { background: var(--btn-grad); color: var(--btn-text); border-color: transparent; }

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
        .item-card:hover { border-color: var(--blue); transform: translateX(2px); }
        .item-card.reservado { opacity: 0.65; border-style: dashed; }
        .item-card.urgente { border-left: 4px solid var(--danger); }
        .item-card.meu-item { box-shadow: inset 3px 0 0 var(--teal); }

        .tag {
            padding: 4px 10px;
            border-radius: 20px;
            font-size: 0.7rem;
            font-weight: 800;
            display: inline-block;
            margin-bottom: 6px;
        }
        .tag-ong { background: rgba(245, 158, 11, 0.15); color: var(--amber); border: 1px solid rgba(245, 158, 11, 0.4); }
        .tag-venda { background: rgba(14, 165, 233, 0.15); color: var(--blue); border: 1px solid rgba(14, 165, 233, 0.4); }
        .tag-done { background: rgba(16, 185, 129, 0.15); color: var(--primary); border: 1px solid rgba(16, 185, 129, 0.4); }
        .tag-compost { background: rgba(6, 182, 212, 0.16); color: var(--purple); border: 1px solid rgba(6, 182, 212, 0.4); }

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
        .btn-voucher { background: rgba(14, 165, 233, 0.15); color: var(--blue); border: 1px solid rgba(14, 165, 233, 0.35); }
        .btn-voucher:hover { background: var(--blue); color: white; }
        .btn-res { background: var(--btn-grad); color: var(--btn-text); }
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
            background: var(--btn-grad); color: var(--btn-text);
            padding: 12px 20px; border-radius: 10px;
            font-size: 0.85rem; font-weight: 800;
            box-shadow: var(--shadow);
            transform: translateY(100px); opacity: 0; transition: 0.3s; z-index: 999;
        }
        .toast.show { transform: translateY(0); opacity: 1; }
    `;
    document.head.appendChild(style);
    document.title = "SalvaComida Enterprise | Reciclagem & Economia Circular";

    let alimentos = [];
    let abaAtual = "SOBRE";
    let filtroAtual = "TODOS";
    let termoBusca = "";
    let ordenacaoAtual = "RECENTES";
    let temaAtual = localStorage.getItem("salvacomida_tema") || "dark";
    let escalaFonte = parseInt(localStorage.getItem("salvacomida_fonte") || "100", 10);
    let ultimoIndiceIoT = -1;

    function normalizarClassificacao(valorCategoria, nomeEstabelecimento = "") {
        const cat = (valorCategoria || "").toLowerCase();
        const nome = (nomeEstabelecimento || "").toLowerCase();

        if (cat.includes("padaria") || cat.includes("pães") || cat.includes("paes")) return "Padaria";
        if (cat.includes("horti")) return "Hortifrúti";
        if (cat.includes("latic")) return "Laticínios";
        if (cat.includes("refeição") || cat.includes("refeicao") || cat.includes("restaurante")) return "Restaurante";

        if (nome.includes("padaria") || nome.includes("pão") || nome.includes("pao") || nome.includes("confeitaria") || nome.includes("cafeteria") || nome.includes("empório")) return "Padaria";
        if (nome.includes("horti") || nome.includes("sacolão") || nome.includes("sacolao") || nome.includes("feira")) return "Hortifrúti";
        if (nome.includes("latic") || nome.includes("leite") || nome.includes("queijo")) return "Laticínios";

        return "Restaurante";
    }

    function obterClassificacaoDoItem(item) {
        const contaEncontrada = contasEstabelecimentos.find(
            c => c.nome.toLowerCase() === (item.restaurante || "").toLowerCase()
        );
        if (contaEncontrada) {
            return normalizarClassificacao(contaEncontrada.categoria, contaEncontrada.nome);
        }
        return normalizarClassificacao(item.categoria, item.restaurante);
    }

    const contasPadrao = [
        { nome: "Restaurante Sabor & Cia", cnpj: "12.345.678/0001-90", email: "contato@saborecia.com.br", senha: "123", categoria: "Refeição Pronta" },
        { nome: "Padaria Pão Quente", cnpj: "23.456.789/0001-11", email: "gerencia@paoquente.com.br", senha: "123", categoria: "Padaria / Pães" },
        { nome: "Hortifrúti Vida Verde", cnpj: "34.567.890/0001-22", email: "adm@vidaverde.com.br", senha: "123", categoria: "Hortifrúti" },
        { nome: "Laticínios Serra Azul", cnpj: "45.678.901/0001-33", email: "vendas@serraazul.com.br", senha: "123", categoria: "Laticínios" }
    ];

    function obterContasCadastradas() {
        try {
            const salvas = JSON.parse(localStorage.getItem("salvacomida_contas") || "[]");
            if (Array.isArray(salvas) && salvas.length > 0) return salvas;
        } catch (_) {}
        localStorage.setItem("salvacomida_contas", JSON.stringify(contasPadrao));
        return [...contasPadrao];
    }

    let contasEstabelecimentos = obterContasCadastradas();
    let estabelecimentoLogado = null;
    try {
        estabelecimentoLogado = JSON.parse(localStorage.getItem("salvacomida_sessao") || "null");
    } catch (_) {
        estabelecimentoLogado = null;
    }

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

    function obterOngPorCategoria(categoria) {
        const cat = (categoria || "").toLowerCase();
        if (cat.includes("horti")) return "Cozinha Comunitária Verde";
        if (cat.includes("padaria") || cat.includes("pães") || cat.includes("paes")) return "Projeto Pão Solidário";
        if (cat.includes("latic")) return "Instituto Nutrir Bem";
        return "Banco de Alimentos Municipal";
    }

    /**
     * Regra central de roteirização:
     * - Doação Gratuita para ONG: aplicada automaticamente se peso >= 5.0 kg OU validade <= 3 horas.
     * - Venda Relâmpago: lotes < 5.0 kg e validade > 3h (70% OFF até 6h; 50% OFF acima de 6h).
     */
    function calcularEspecificacoesLote(pesoKg, horasValidade, precoOriginal, categoria) {
        const peso = Number(pesoKg) || 0;
        const horas = Number(horasValidade) || 0;
        const preco = Number(precoOriginal) || 0;
        const co2EvitadoKg = Number((peso * 2.5).toFixed(2));
        const aguaEconomizadaLitros = Math.round(peso * 1000);
        const ongSugerida = obterOngPorCategoria(categoria);

        if (horas <= 0) {
            return {
                destino: "COMPOSTAGEM",
                expirado: true,
                descontoPercentual: 100,
                precoFinal: 0,
                ongParceira: "Usina de Compostagem Urbana",
                motivoRegra: "Validade encerrada (0h)",
                co2EvitadoKg,
                aguaEconomizadaLitros
            };
        }

        const atingePesoMinimoOng = peso >= 5.0;
        const atingeValidadeUrgenteOng = horas <= 3;

        if (atingePesoMinimoOng || atingeValidadeUrgenteOng) {
            let motivo = "";
            if (atingePesoMinimoOng && atingeValidadeUrgenteOng) {
                motivo = `Peso ≥ 5,0 kg (${peso.toFixed(1)} kg) e Validade ≤ 3h (${horas}h)`;
            } else if (atingePesoMinimoOng) {
                motivo = `Peso ≥ 5,0 kg (${peso.toFixed(1)} kg)`;
            } else {
                motivo = `Validade ≤ 3h (${horas}h)`;
            }

            return {
                destino: "DOACAO_ONG",
                expirado: false,
                descontoPercentual: 100,
                precoFinal: 0,
                ongParceira: ongSugerida,
                motivoRegra: motivo,
                co2EvitadoKg,
                aguaEconomizadaLitros
            };
        }

        const descontoPercentual = horas <= 6 ? 70 : 50;
        const precoFinal = Number((preco * (1 - descontoPercentual / 100)).toFixed(2));

        return {
            destino: "VENDA_RELAMPAGO",
            expirado: false,
            descontoPercentual,
            precoFinal,
            ongParceira: "Consumidor Local (App)",
            motivoRegra: `Peso < 5,0 kg (${peso.toFixed(1)} kg) e Validade > 3h (${horas}h)`,
            co2EvitadoKg,
            aguaEconomizadaLitros
        };
    }

    function aplicarEspecificacoesNoItem(item) {
        const peso = Number(item.quantidadeKg) || 0;
        const horas = Number(item.horasValidade) || 0;
        const precoOriginal = Number(item.precoOriginal) || 0;
        const regra = calcularEspecificacoesLote(peso, horas, precoOriginal, item.categoria);

        if (item.expirado || horas <= 0) {
            return {
                ...item,
                expirado: true,
                destino: "COMPOSTAGEM",
                descontoPercentual: 100,
                precoFinal: 0,
                ongParceira: item.ongParceira || "Usina de Compostagem Urbana"
            };
        }

        if (peso >= 5.0 || horas <= 3) {
            const ongValida = (item.ongParceira && !item.ongParceira.toLowerCase().includes("consumidor"))
                ? item.ongParceira
                : regra.ongParceira;
            return {
                ...item,
                expirado: false,
                destino: "DOACAO_ONG",
                descontoPercentual: 100,
                precoFinal: 0,
                ongParceira: ongValida,
                motivoRegra: regra.motivoRegra
            };
        }

        return {
            ...item,
            expirado: false,
            destino: "VENDA_RELAMPAGO",
            descontoPercentual: item.descontoPercentual || regra.descontoPercentual,
            precoFinal: Number(item.precoFinal) > 0 ? Number(item.precoFinal) : regra.precoFinal,
            ongParceira: item.ongParceira || regra.ongParceira,
            motivoRegra: regra.motivoRegra
        };
    }

    function calcularAguaLitros(item) {
        const valorApi = Number(item.aguaEconomizadaLitros);
        if (!Number.isNaN(valorApi) && valorApi > 0) return valorApi;
        const peso = Number(item.quantidadeKg) || 0;
        return peso * 1000;
    }

    const toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);

    function notificar(msg) {
        toast.textContent = msg;
        toast.classList.add("show");
        setTimeout(() => toast.classList.remove("show"), 3200);
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

        const labelTema = temaAtual === "light" ? "🌙 Escuro" : "☀️ Claro";
        const btnThemeGate = document.getElementById("btnGateToggleTheme");
        const btnThemeSide = document.getElementById("btnToggleTheme");
        if (btnThemeGate) btnThemeGate.innerHTML = labelTema;
        if (btnThemeSide) btnThemeSide.innerHTML = labelTema;
    }

    /* =========================================================================
       1. TELA DE LOGIN ANTES DE ABRIR O SITE (#loginGateScreen)
       ========================================================================= */
    const loginGateScreen = document.createElement("div");
    loginGateScreen.id = "loginGateScreen";
    loginGateScreen.className = "login-gate";
    loginGateScreen.innerHTML = `
        <div class="login-gate-topbar">
            <div class="a11y-group" title="Tamanho da fonte">
                <button type="button" class="btn-ctrl" id="btnGateFontDec">A-</button>
                <button type="button" class="btn-ctrl" id="btnGateFontReset">A</button>
                <button type="button" class="btn-ctrl" id="btnGateFontInc">A+</button>
            </div>
            <button type="button" class="btn-pill" id="btnGateToggleTheme">
                ${temaAtual === "light" ? "🌙 Escuro" : "☀️ Claro"}
            </button>
        </div>

        <div class="login-brand-header">
            <div class="login-brand-logo">♻️</div>
            <h1>Salva<span>Comida</span> Enterprise</h1>
            <p>Reciclagem Alimentar, Economia Circular & Impacto Sustentável</p>
        </div>

        <div class="login-container">
            <div class="panel">
                <div class="auth-tabs">
                    <button type="button" class="auth-tab-btn active" id="tabEntrar">🔐 Entrar na Conta</button>
                    <button type="button" class="auth-tab-btn" id="tabRegistrar">📝 Cadastrar Estabelecimento</button>
                </div>

                <form id="formLoginEstabelecimento">
                    <div class="field">
                        <label>E-mail Corporativo ou CNPJ</label>
                        <input type="text" id="loginIdentificador" placeholder="Ex: contato@saborecia.com.br ou 12.345.678/0001-90" required>
                    </div>
                    <div class="field">
                        <label>Tipo do Estabelecimento</label>
                        <select id="loginTipoEstabelecimento" required>
                            <option value="Refeição Pronta">🍽️ Restaurante</option>
                            <option value="Padaria / Pães">🥖 Padaria</option>
                            <option value="Hortifrúti">🥬 Hortifrúti</option>
                            <option value="Laticínios">🧀 Laticínios</option>
                        </select>
                    </div>
                    <div class="field">
                        <label>Senha de Acesso</label>
                        <input type="password" id="loginSenha" placeholder="Digite sua senha (padrão demo: 123)" required>
                    </div>
                    <button type="submit" class="btn-submit">Acessar Sistema →</button>
                </form>

                <form id="formRegistroEstabelecimento" class="hidden-view">
                    <div class="field">
                        <label>Nome Fantasia do Estabelecimento</label>
                        <input type="text" id="regNome" placeholder="Ex: Padaria Bella Vista" required>
                    </div>
                    <div class="row-2">
                        <div class="field">
                            <label>CNPJ</label>
                            <input type="text" id="regCnpj" placeholder="00.000.000/0001-00" required>
                        </div>
                        <div class="field">
                            <label>Tipo do Estabelecimento</label>
                            <select id="regCategoria">
                                <option value="Refeição Pronta">🍽️ Restaurante</option>
                                <option value="Padaria / Pães">🥖 Padaria</option>
                                <option value="Hortifrúti">🥬 Hortifrúti</option>
                                <option value="Laticínios">🧀 Laticínios</option>
                            </select>
                        </div>
                    </div>
                    <div class="field">
                        <label>E-mail de Acesso</label>
                        <input type="email" id="regEmail" placeholder="gerencia@suaempresa.com.br" required>
                    </div>
                    <div class="field">
                        <label>Criar Senha</label>
                        <input type="password" id="regSenha" placeholder="Mínimo 3 caracteres" required>
                    </div>
                    <button type="submit" class="btn-submit">+ Criar Conta e Entrar</button>
                </form>
            </div>

            <div class="panel">
                <div class="panel-title">
                    <span>⚡ Acesso Rápido (Contas Demo)</span>
                    <span style="font-size:0.74rem;color:var(--muted);">1 clique para entrar</span>
                </div>
                <p style="font-size:0.82rem;color:var(--muted);line-height:1.5;margin-bottom:8px;">
                    Escolha um estabelecimento cadastrado abaixo para acessar o painel imediatamente (senha padrão: <b>123</b>):
                </p>
                <div class="demo-account-list" id="listaContasDemo"></div>
            </div>
        </div>
    `;
    document.body.appendChild(loginGateScreen);

    /* =========================================================================
       2. ESTRUTURA PRINCIPAL COM BARRA LATERAL (#appShell)
       ========================================================================= */
    const appShell = document.createElement("div");
    appShell.id = "appShell";
    appShell.className = "app-layout hidden-view";
    document.body.appendChild(appShell);

    // Barra Lateral Esquerda (Sidebar)
    const sidebar = document.createElement("aside");
    sidebar.className = "sidebar";
    sidebar.innerHTML = `
        <div class="sidebar-top">
            <div class="brand">
                <div class="brand-logo">♻️</div>
                <div>
                    <h1>Salva<span>Comida</span></h1>
                    <p>Reciclagem Alimentar</p>
                </div>
            </div>

            <div class="sidebar-user-card">
                <span class="user-role" id="sideUserRole">Tipo: —</span>
                <div class="user-name" id="sideUserName">—</div>
                <div class="user-meta" id="sideUserMeta">—</div>
            </div>

            <div>
                <div class="sidebar-section-label">Menu Principal</div>
                <nav class="sidebar-nav">
                    <button type="button" class="nav-btn active" data-view="SOBRE">
                        <span class="nav-btn-left">📘 Sobre & Impacto</span>
                    </button>
                    <button type="button" class="nav-btn" data-view="CADASTRO">
                        <span class="nav-btn-left">♻️ Cadastrar & Fila</span>
                        <span class="nav-badge" id="navCountItens">0</span>
                    </button>
                    <button type="button" class="nav-btn" data-view="ONGS">
                        <span class="nav-btn-left">🏢 Rede de ONGs</span>
                    </button>
                    <button type="button" class="nav-btn" data-view="CONTA">
                        <span class="nav-btn-left">🏪 Minha Conta</span>
                    </button>
                </nav>
            </div>

            <div>
                <div class="sidebar-section-label">Ferramentas & Simulação</div>
                <div class="sidebar-tools">
                    <button type="button" class="btn-side-action btn-side-time" id="btnAvancarTempo">
                        ⏩ Simular +1 Hora
                    </button>
                    <button type="button" class="btn-side-action" id="btnExportCsv">
                        📥 Exportar Relatório CSV
                    </button>
                    <button type="button" class="btn-side-action" id="btnResetDemo">
                        🔄 Restaurar Dados Demo
                    </button>
                </div>
            </div>
        </div>

        <div class="sidebar-bottom">
            <div class="sidebar-a11y-row">
                <div class="a11y-group" title="Tamanho da fonte">
                    <button type="button" class="btn-ctrl" id="btnFontDec">A-</button>
                    <button type="button" class="btn-ctrl" id="btnFontReset">A</button>
                    <button type="button" class="btn-ctrl" id="btnFontInc">A+</button>
                </div>
                <button type="button" class="btn-pill" id="btnToggleTheme">
                    ${temaAtual === "light" ? "🌙 Escuro" : "☀️ Claro"}
                </button>
            </div>
            <button type="button" class="btn-logout-side" id="btnLogout">
                🚪 Sair da Conta
            </button>
        </div>
    `;
    appShell.appendChild(sidebar);

    // Área Direita de Conteúdo
    const mainContent = document.createElement("main");
    mainContent.className = "main-content";
    appShell.appendChild(mainContent);

    // Cabeçalho Compacto da Área de Conteúdo
    const contentTopbar = document.createElement("div");
    contentTopbar.className = "content-topbar";
    contentTopbar.innerHTML = `
        <div>
            <h2 id="viewTitleHeader">📘 Sobre o Programa & Impacto</h2>
            <p id="viewSubtitleHeader">Entenda de forma simples como evitamos o desperdício de alimentos</p>
        </div>
        <div class="badge-api"><span class="pulse-dot"></span> REDE CIRCULAR ATIVA</div>
    `;
    mainContent.appendChild(contentTopbar);

    // KPI Cards (oculto na aba Sobre & Impacto e Minha Conta)
    const statsGrid = document.createElement("div");
    statsGrid.className = "stats-grid hidden-view";
    mainContent.appendChild(statsGrid);

    // Seção Sobre o Programa & Impacto
    const secSobre = document.createElement("section");
    secSobre.id = "viewSobre";
    secSobre.innerHTML = `
        <div class="ranking-box">
            <div class="about-hero">
                <div class="about-hero-text">
                    <h2>♻️ O que é o SalvaComida?</h2>
                    <p>
                        É uma plataforma que ajuda restaurantes, padarias e mercados a <b>não jogarem comida boa no lixo</b>.
                        Em vez de descartar o que sobrou no dia, o sistema encaminha cada alimento rápido para <b>doação</b>,
                        <b>venda com desconto</b> ou <b>adubo orgânico</b>.
                    </p>
                </div>
                <div class="about-cta-group">
                    <button type="button" class="btn-cta-primary" id="btnComecarCadastro">♻️ Cadastrar Alimentos</button>
                </div>
            </div>

            <h3 style="font-size:1.05rem;margin-bottom:4px;">⚙️ Como funciona em 3 passos simples</h3>
            <div class="steps-flow">
                <div class="step-box">
                    <span class="step-num">1º PASSO</span>
                    <h5>Cadastre a sobra</h5>
                    <p>O estabelecimento informa qual alimento sobrou, o peso e quantas horas ainda está bom para consumo.</p>
                </div>
                <div class="step-box">
                    <span class="step-num">2º PASSO</span>
                    <h5>Destino automático</h5>
                    <p>Lotes com <b>5 kg ou mais</b> ou que vencem em <b>3 horas ou menos</b> vão gratuitamente para <b>ONGs</b>. Lotes menores ganham desconto de <b>50% a 70%</b>.</p>
                </div>
                <div class="step-box">
                    <span class="step-num">3º PASSO</span>
                    <h5>Retirada sem desperdício</h5>
                    <p>Quem vai buscar gera um <b>Voucher com QR Code</b> na tela e retira o alimento. Se passar do prazo, vira adubo na compostagem.</p>
                </div>
            </div>

            <h3 style="font-size:1.05rem;margin-bottom:12px;">🌍 Por que isso é importante?</h3>
            <div class="about-grid">
                <div class="about-card">
                    <h4>🍽️ Menos comida no lixo</h4>
                    <p>
                        Grande parte da comida jogada fora todos os dias ainda está boa para comer. O programa conecta quem tem sobras a quem precisa antes que estraguem.
                    </p>
                </div>

                <div class="about-card">
                    <h4>💧 Economia de água e natureza</h4>
                    <p>
                        Produzir alimentos gasta muita água e energia. Evitar o desperdício poupa milhares de litros de água potável e reduz a poluição nos lixões.
                    </p>
                </div>

                <div class="about-card">
                    <h4>🤝 Todo mundo ganha</h4>
                    <p>
                        ONGs e famílias recebem refeições de qualidade, moradores compram mais barato e o estabelecimento reduz prejuízos e ajuda o meio ambiente.
                    </p>
                </div>
            </div>
        </div>
    `;
    mainContent.appendChild(secSobre);

    // Seção Minha Conta (Estabelecimento Logado)
    const secConta = document.createElement("section");
    secConta.id = "viewConta";
    mainContent.appendChild(secConta);

    // Seção Rede de ONGs
    const secOngs = document.createElement("section");
    secOngs.id = "viewOngs";
    secOngs.innerHTML = `
        <div class="ranking-box">
            <div class="section-header">
                <h3>🏢 Rede de Instituições Receptoras & Logística Reversa</h3>
                <span>Roteamento automático por especialidade e proximidade</span>
            </div>
            <div class="ranking-grid" id="gridOngs"></div>
        </div>
    `;
    mainContent.appendChild(secOngs);

    // Seção de Cadastro & Fila
    const secCadastro = document.createElement("section");
    secCadastro.id = "viewCadastro";
    secCadastro.className = "main-grid";
    mainContent.appendChild(secCadastro);

    // Formulário
    const formPanel = document.createElement("div");
    formPanel.className = "panel";
    formPanel.innerHTML = `
        <div class="panel-title">
            <span>Cadastrar Excedente</span>
            <button type="button" class="btn-iot" id="btnIoT">⚡ Ler Balança IoT</button>
        </div>
        <div class="iot-status">
            <span>📡 Sensor: <b id="sensorId">BAL-01 (Pronto)</b></span>
            <span id="sensorPesoTag">Aguardando leitura</span>
        </div>

        <div class="rules-spec-box">
            <div class="rules-spec-title">📋 Especificações de Roteirização Automática</div>
            <ul class="rules-spec-list">
                <li><span class="rule-highlight-ong">🎁 Doação Gratuita para ONG:</span> lote com <b>5,0 kg ou mais</b> <b>OU</b> validade de <b>3 horas ou menos</b>.</li>
                <li>🏷️ <b>Venda Relâmpago (70% OFF):</b> lote <b>&lt; 5,0 kg</b> com validade de <b>4h a 6h</b>.</li>
                <li>🏷️ <b>Venda Relâmpago (50% OFF):</b> lote <b>&lt; 5,0 kg</b> com validade <b>acima de 6h</b>.</li>
            </ul>
        </div>

        <form id="formCadastro">
            <div class="field">
                <label>Estabelecimento</label>
                <input type="text" id="restaurante" placeholder="Ex: Cantina da Serra" required>
                <div class="logged-field-hint" id="hintEstabelecimentoLogado"></div>
            </div>
            <div class="field">
                <label>Item / Alimento</label>
                <input type="text" id="nomeItem" placeholder="Ex: Lasanha Bolonhesa" required>
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
            <input type="text" id="campoBusca" placeholder="Buscar por item, estabelecimento ou ONG...">
            <select id="selectOrdenacao">
                <option value="RECENTES">Mais Recentes</option>
                <option value="URGENCIA">Maior Urgência (Validade)</option>
                <option value="PESO">Maior Peso (Kg)</option>
                <option value="CO2">Maior Impacto CO₂</option>
            </select>
        </div>
        <div class="filter-tabs" id="filterTabsContainer">
            <button class="filter-btn active" data-filtro="TODOS">Todos</button>
            <button class="filter-btn" data-filtro="MEUS_LOTES">🏪 Meus Lotes</button>
            <button class="filter-btn" data-filtro="DOACAO_ONG">🎁 Doação ONG</button>
            <button class="filter-btn" data-filtro="VENDA_RELAMPAGO">🏷️ Venda Relâmpago</button>
            <button class="filter-btn" data-filtro="CONCLUIDOS">✅ Coletados</button>
        </div>
        <div class="items-list" id="listaItens"></div>
    `;
    secCadastro.appendChild(listPanel);

    /* =========================================================================
       3. CONTROLE DE LOGIN, SESSÃO E NAVEGAÇÃO
       ========================================================================= */
    function renderizarContasDemoGate() {
        const listaDemo = document.getElementById("listaContasDemo");
        listaDemo.innerHTML = contasEstabelecimentos.slice(0, 5).map((conta, index) => {
            const classif = normalizarClassificacao(conta.categoria, conta.nome);
            return `
                <div class="demo-acc-card" data-acc-idx="${index}">
                    <div>
                        <div style="font-weight:800;font-size:0.9rem;">🏪 ${conta.nome}</div>
                        <small style="color:var(--muted);">Tipo: <b>${classif}</b> • ${conta.email}</small>
                    </div>
                    <button type="button" class="demo-acc-btn">Entrar →</button>
                </div>
            `;
        }).join("");

        listaDemo.querySelectorAll(".demo-acc-card").forEach(card => {
            card.addEventListener("click", () => {
                const idx = parseInt(card.dataset.accIdx, 10);
                realizarLogin(contasEstabelecimentos[idx]);
            });
        });
    }

    function configurarEventosLoginGate() {
        const tabEntrar = document.getElementById("tabEntrar");
        const tabRegistrar = document.getElementById("tabRegistrar");
        const formLogin = document.getElementById("formLoginEstabelecimento");
        const formRegistro = document.getElementById("formRegistroEstabelecimento");
        const loginIdInput = document.getElementById("loginIdentificador");
        const loginTipoSelect = document.getElementById("loginTipoEstabelecimento");

        loginIdInput.addEventListener("input", () => {
            const val = loginIdInput.value.trim().toLowerCase();
            if (!val) return;
            const contaMatch = contasEstabelecimentos.find(c =>
                c.email.toLowerCase() === val || c.cnpj.toLowerCase() === val || c.nome.toLowerCase() === val
            );
            if (contaMatch && contaMatch.categoria) {
                loginTipoSelect.value = contaMatch.categoria;
            }
        });

        tabEntrar.addEventListener("click", () => {
            tabEntrar.classList.add("active");
            tabRegistrar.classList.remove("active");
            formLogin.classList.remove("hidden-view");
            formRegistro.classList.add("hidden-view");
        });

        tabRegistrar.addEventListener("click", () => {
            tabRegistrar.classList.add("active");
            tabEntrar.classList.remove("active");
            formRegistro.classList.remove("hidden-view");
            formLogin.classList.add("hidden-view");
        });

        formLogin.addEventListener("submit", (e) => {
            e.preventDefault();
            const idInput = loginIdInput.value.trim().toLowerCase();
            const senhaInput = document.getElementById("loginSenha").value;
            const tipoEscolhidoNoLogin = loginTipoSelect.value;

            const encontrada = contasEstabelecimentos.find(c =>
                (c.email.toLowerCase() === idInput || c.cnpj.toLowerCase() === idInput || c.nome.toLowerCase() === idInput) &&
                c.senha === senhaInput
            );

            if (!encontrada) {
                notificar("❌ E-mail/CNPJ ou senha inválidos. Use uma conta demo ao lado ou cadastre-se.");
                return;
            }

            encontrada.categoria = tipoEscolhidoNoLogin;
            localStorage.setItem("salvacomida_contas", JSON.stringify(contasEstabelecimentos));
            realizarLogin(encontrada);
        });

        formRegistro.addEventListener("submit", (e) => {
            e.preventDefault();
            const novaConta = {
                nome: document.getElementById("regNome").value.trim(),
                cnpj: document.getElementById("regCnpj").value.trim(),
                categoria: document.getElementById("regCategoria").value,
                email: document.getElementById("regEmail").value.trim(),
                senha: document.getElementById("regSenha").value
            };

            contasEstabelecimentos.unshift(novaConta);
            localStorage.setItem("salvacomida_contas", JSON.stringify(contasEstabelecimentos));
            renderizarContasDemoGate();
            realizarLogin(novaConta);
        });
    }

    function renderizarMinhaConta() {
        if (!estabelecimentoLogado) return;
        const meusItens = alimentos.filter(a => a.restaurante.toLowerCase() === estabelecimentoLogado.nome.toLowerCase());
        const meusKg = meusItens.reduce((acc, i) => acc + (Number(i.quantidadeKg) || 0), 0);
        const meuCo2 = meusItens.reduce((acc, i) => acc + (Number(i.co2EvitadoKg) || 0), 0);
        const meusAtivos = meusItens.filter(i => !i.reservado).length;
        const minhaClassificacao = normalizarClassificacao(estabelecimentoLogado.categoria, estabelecimentoLogado.nome);

        secConta.innerHTML = `
            <div class="ranking-box">
                <div class="about-hero" style="margin-bottom:20px;">
                    <div class="about-hero-text">
                        <span class="ong-badge" style="margin-bottom:8px;display:inline-block;">TIPO: ${minhaClassificacao.toUpperCase()}</span>
                        <h2 style="font-size:1.35rem;margin-bottom:4px;">🏪 ${estabelecimentoLogado.nome}</h2>
                        <p style="font-size:0.86rem;">
                            CNPJ: <b>${estabelecimentoLogado.cnpj}</b> • E-mail: <b>${estabelecimentoLogado.email}</b> • Classificação: <b>${minhaClassificacao}</b>
                        </p>
                    </div>
                    <div class="about-cta-group">
                        <button type="button" class="btn-cta-primary" id="btnPerfilCadastrar">♻️ Cadastrar Alimento</button>
                        <button type="button" class="btn-cta-secondary" id="btnPerfilVerMeus">📦 Meus Lotes (${meusItens.length})</button>
                    </div>
                </div>

                <h3 style="font-size:1rem;margin-bottom:12px;">📊 Desempenho Ambiental do Seu Estabelecimento</h3>
                <div class="stats-grid" style="margin-bottom:0;">
                    <div class="stat-card">
                        <div class="stat-top"><span>Seus Lotes Registrados</span><span class="stat-icon">📦</span></div>
                        <h2>${meusItens.length}</h2>
                        <small>${meusAtivos} ativo(s) aguardando retirada</small>
                    </div>
                    <div class="stat-card">
                        <div class="stat-top"><span>Seu Volume Salvo</span><span class="stat-icon">♻️</span></div>
                        <h2>${meusKg.toFixed(1)} kg</h2>
                        <small>≈ ${Math.round(meusKg * 2.5)} refeições destinadas</small>
                    </div>
                    <div class="stat-card">
                        <div class="stat-top"><span>Seu Impacto CO₂</span><span class="stat-icon">🌱</span></div>
                        <h2>-${meuCo2.toFixed(1)} kg</h2>
                        <small>Crédito ambiental positivo</small>
                    </div>
                </div>
            </div>
        `;

        document.getElementById("btnPerfilCadastrar").addEventListener("click", () => alternarAba("CADASTRO"));
        document.getElementById("btnPerfilVerMeus").addEventListener("click", () => {
            filtroAtual = "MEUS_LOTES";
            document.querySelectorAll("#filterTabsContainer .filter-btn").forEach(b => b.classList.toggle("active", b.dataset.filtro === "MEUS_LOTES"));
            renderizar();
            alternarAba("CADASTRO");
        });
    }

    function atualizarTelaPorSessao() {
        if (estabelecimentoLogado) {
            loginGateScreen.classList.add("hidden-view");
            appShell.classList.remove("hidden-view");

            const classif = normalizarClassificacao(estabelecimentoLogado.categoria, estabelecimentoLogado.nome);
            document.getElementById("sideUserRole").textContent = `Tipo: ${classif}`;
            document.getElementById("sideUserName").textContent = estabelecimentoLogado.nome;
            document.getElementById("sideUserMeta").textContent = `${estabelecimentoLogado.cnpj}`;

            document.getElementById("restaurante").value = estabelecimentoLogado.nome;
            document.getElementById("hintEstabelecimentoLogado").textContent = `✅ ${estabelecimentoLogado.nome} • Tipo: ${classif}`;

            atualizarPreviewFormulario();
            alternarAba("SOBRE");
            renderizar();
        } else {
            appShell.classList.add("hidden-view");
            loginGateScreen.classList.remove("hidden-view");
            renderizarContasDemoGate();
        }
    }

    function realizarLogin(conta) {
        estabelecimentoLogado = conta;
        localStorage.setItem("salvacomida_sessao", JSON.stringify(conta));
        atualizarTelaPorSessao();
        const classif = normalizarClassificacao(conta.categoria, conta.nome);
        notificar(`✅ Bem-vindo(a), ${conta.nome} (${classif})!`);
    }

    function realizarLogout() {
        const nomeAntigo = estabelecimentoLogado ? estabelecimentoLogado.nome : "";
        estabelecimentoLogado = null;
        localStorage.removeItem("salvacomida_sessao");
        atualizarTelaPorSessao();
        notificar(`👋 Sessão encerrada (${nomeAntigo}).`);
    }

    const titulosAbas = {
        SOBRE: ["📘 Sobre o Programa & Impacto", "Entenda de forma simples como evitamos o desperdício de alimentos"],
        CADASTRO: ["♻️ Cadastrar Excedentes & Fila de Redistribuição", "Gerencie lotes em tempo real e emita vouchers de retirada"],
        ONGS: ["🏢 Rede de ONGs & Logística Reversa", "Capacidade e volume destinado às instituições parceiras"],
        CONTA: ["🏪 Minha Conta & Desempenho", "Resumo operacional e ambiental do seu estabelecimento"]
    };

    function alternarAba(novaAba) {
        abaAtual = novaAba;
        document.querySelectorAll(".nav-btn").forEach(btn => {
            btn.classList.toggle("active", btn.dataset.view === novaAba);
        });

        const [titulo, subtitulo] = titulosAbas[novaAba] || titulosAbas.SOBRE;
        document.getElementById("viewTitleHeader").textContent = titulo;
        document.getElementById("viewSubtitleHeader").textContent = subtitulo;

        statsGrid.classList.toggle("hidden-view", novaAba === "SOBRE" || novaAba === "CONTA");

        secSobre.classList.toggle("hidden-view", novaAba !== "SOBRE");
        secCadastro.classList.toggle("hidden-view", novaAba !== "CADASTRO");
        secOngs.classList.toggle("hidden-view", novaAba !== "ONGS");
        secConta.classList.toggle("hidden-view", novaAba !== "CONTA");

        renderizar();
    }

    document.querySelectorAll(".nav-btn").forEach(btn => {
        btn.addEventListener("click", () => alternarAba(btn.dataset.view));
    });

    document.getElementById("btnComecarCadastro").addEventListener("click", () => alternarAba("CADASTRO"));
    document.getElementById("btnLogout").addEventListener("click", realizarLogout);

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
        ctx.fillStyle = "#062c2b";

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
        const classifItem = obterClassificacaoDoItem(item);
        document.getElementById("voucherDetails").innerHTML = `
            <b>Protocolo:</b> #${item.id}<br>
            <b>Estabelecimento:</b> ${item.restaurante} (${classifItem})<br>
            <b>Alimento:</b> ${item.nomeItem} (${item.quantidadeKg} kg)<br>
            <b>Destinatário:</b> ${item.ongParceira}<br>
            <b>Valor Final:</b> ${item.destino === "DOACAO_ONG" || item.expirado ? "GRATUITO" : "R$ " + item.precoFinal.toFixed(2)}<br>
            <b>Impacto:</b> -${item.co2EvitadoKg.toFixed(1)} kg CO₂ • ${aguaItem.toLocaleString("pt-BR")} L água
        `;
        modal.classList.add("open");
    }

    function atualizarPreviewFormulario() {
        const peso = parseFloat(document.getElementById("quantidadeKg").value) || 0;
        const horas = parseInt(document.getElementById("horasValidade").value, 10) || 1;
        const preco = parseFloat(document.getElementById("precoOriginal").value) || 0;
        const categoriaAtual = (estabelecimentoLogado && estabelecimentoLogado.categoria)
            ? estabelecimentoLogado.categoria
            : "Refeição Pronta";

        const preview = document.getElementById("livePreview");
        const regra = calcularEspecificacoesLote(peso, horas, preco, categoriaAtual);

        if (regra.destino === "DOACAO_ONG") {
            preview.classList.add("is-ong");
            preview.innerHTML = `
                🎁 <b>Decisão Automática:</b> <span style="color:var(--amber);font-weight:800;">DOAÇÃO GRATUITA PARA ONG</span><br>
                📌 <b>Critério atingido:</b> ${regra.motivoRegra}<br>
                🏢 <b>Destino:</b> ${regra.ongParceira} • 🌱 <b>-${regra.co2EvitadoKg.toFixed(1)}kg CO₂</b>
            `;
        } else {
            preview.classList.remove("is-ong");
            preview.innerHTML = `
                🏷️ <b>Decisão Automática:</b> <span style="color:var(--blue);font-weight:800;">VENDA RELÂMPAGO (-${regra.descontoPercentual}%)</span> por <b>R$ ${regra.precoFinal.toFixed(2)}</b><br>
                📌 <b>Critério:</b> ${regra.motivoRegra} • 🌱 <b>-${regra.co2EvitadoKg.toFixed(1)}kg CO₂</b>
            `;
        }
    }

    ["quantidadeKg", "horasValidade", "precoOriginal"].forEach(id => {
        document.getElementById(id).addEventListener("input", atualizarPreviewFormulario);
    });
    atualizarPreviewFormulario();

    function simularLeituraBalancaIoT() {
        const itensCompativeis = (estabelecimentoLogado && estabelecimentoLogado.categoria)
            ? catalogoBalancaIoT.filter(item => item.c === estabelecimentoLogado.categoria)
            : catalogoBalancaIoT;
        const pool = itensCompativeis.length > 0 ? itensCompativeis : catalogoBalancaIoT;

        let idx;
        do {
            idx = Math.floor(Math.random() * pool.length);
        } while (idx === ultimoIndiceIoT && pool.length > 1);
        ultimoIndiceIoT = idx;

        const base = pool[idx];
        const fator = 0.85 + Math.random() * 0.35;
        const pesoReal = Math.max(0.5, Number((base.q * fator).toFixed(1)));
        const precoReal = Math.max(5.0, Number((base.p * fator).toFixed(2)));
        const validadeReal = Math.max(1, Math.min(12, base.v + (Math.floor(Math.random() * 3) - 1)));
        const numSensor = String(Math.floor(Math.random() * 12) + 1).padStart(2, "0");

        document.getElementById("restaurante").value = estabelecimentoLogado ? estabelecimentoLogado.nome : base.r;
        document.getElementById("nomeItem").value = base.i;
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
        notificar("⏩ +1 hora simulada! Preços e doações para ONG recalculados.");
        await carregarDados();
    });

    document.getElementById("btnResetDemo").addEventListener("click", async () => {
        await fetch("/api/resetar-demo", { method: "POST" });
        notificar("🔄 Base de demonstração restaurada!");
        await carregarDados();
    });

    function alternarTema() {
        temaAtual = temaAtual === "dark" ? "light" : "dark";
        aplicarPreferenciasVisuais();
        notificar(temaAtual === "light" ? "☀️ Tema claro ativado!" : "🌙 Tema escuro ativado!");
    }

    function alterarFonte(delta) {
        if (delta === 0) {
            escalaFonte = 100;
            aplicarPreferenciasVisuais();
            notificar("🔍 Fonte padrão (100%)");
            return;
        }
        const nova = escalaFonte + delta;
        if (nova >= 80 && nova <= 130) {
            escalaFonte = nova;
            aplicarPreferenciasVisuais();
            notificar(`🔍 Fonte: ${escalaFonte}%`);
        }
    }

    document.getElementById("btnToggleTheme").addEventListener("click", alternarTema);
    document.getElementById("btnGateToggleTheme").addEventListener("click", alternarTema);

    document.getElementById("btnFontInc").addEventListener("click", () => alterarFonte(10));
    document.getElementById("btnFontDec").addEventListener("click", () => alterarFonte(-10));
    document.getElementById("btnFontReset").addEventListener("click", () => alterarFonte(0));

    document.getElementById("btnGateFontInc").addEventListener("click", () => alterarFonte(10));
    document.getElementById("btnGateFontDec").addEventListener("click", () => alterarFonte(-10));
    document.getElementById("btnGateFontReset").addEventListener("click", () => alterarFonte(0));

    document.getElementById("btnExportCsv").addEventListener("click", () => {
        if (alimentos.length === 0) return notificar("⚠️ Nenhum dado para exportar.");
        const cabecalho = "ID;Estabelecimento;Tipo_Estabelecimento;Alimento;Peso_Kg;Preco_Original;Preco_Final;Destino;Destinatario;CO2_Evitado_Kg;Agua_Litros;Status\n";
        const linhas = alimentos.map(a =>
            `${a.id};"${a.restaurante}";"${obterClassificacaoDoItem(a)}";"${a.nomeItem}";${a.quantidadeKg};${a.precoOriginal};${a.precoFinal};${a.destino};"${a.ongParceira}";${a.co2EvitadoKg};${calcularAguaLitros(a)};${a.reservado ? "Coletado" : "Disponivel"}`
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
        const categoriaEstabelecimento = (estabelecimentoLogado && estabelecimentoLogado.categoria)
            ? estabelecimentoLogado.categoria
            : "Refeição Pronta";

        const peso = parseFloat(document.getElementById("quantidadeKg").value) || 0;
        const horas = parseInt(document.getElementById("horasValidade").value, 10) || 1;
        const precoOriginal = parseFloat(document.getElementById("precoOriginal").value) || 0;
        const regra = calcularEspecificacoesLote(peso, horas, precoOriginal, categoriaEstabelecimento);

        const params = new URLSearchParams();
        params.append("restaurante", document.getElementById("restaurante").value);
        params.append("nomeItem", document.getElementById("nomeItem").value);
        params.append("categoria", categoriaEstabelecimento);
        params.append("quantidadeKg", peso.toString());
        params.append("horasValidade", horas.toString());
        params.append("precoOriginal", precoOriginal.toString());
        params.append("destino", regra.destino);
        params.append("descontoPercentual", regra.descontoPercentual.toString());
        params.append("precoFinal", regra.precoFinal.toString());
        params.append("ongParceira", regra.ongParceira);
        params.append("co2EvitadoKg", regra.co2EvitadoKg.toString());
        params.append("aguaEconomizadaLitros", regra.aguaEconomizadaLitros.toString());

        const res = await fetch("/api/alimentos", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: params.toString()
        });

        if (res.ok) {
            document.getElementById("restaurante").value = estabelecimentoLogado ? estabelecimentoLogado.nome : "";
            document.getElementById("nomeItem").value = "";
            document.getElementById("sensorPesoTag").textContent = "Aguardando leitura";
            atualizarPreviewFormulario();
            notificar(
                regra.destino === "DOACAO_ONG"
                    ? `🎁 Cadastrado como Doação Gratuita para ${regra.ongParceira}!`
                    : `🏷️ Cadastrado em Venda Relâmpago (-${regra.descontoPercentual}%)!`
            );
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

    document.querySelectorAll("#filterTabsContainer .filter-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll("#filterTabsContainer .filter-btn").forEach(b => b.classList.remove("active"));
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
        const dadosBrutos = await res.json();
        alimentos = Array.isArray(dadosBrutos)
            ? dadosBrutos.map(aplicarEspecificacoesNoItem)
            : [];
        if (estabelecimentoLogado) renderizar();
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
                <div class="stat-top"><span>Alimentos Reciclados</span><span class="stat-icon">♻️</span></div>
                <h2>${totalKg.toFixed(1)} kg</h2>
                <small>≈ ${refeicoesEstimadas} refeições garantidas</small>
            </div>
            <div class="stat-card">
                <div class="stat-top"><span>Carbono Evitado</span><span class="stat-icon">🌱</span></div>
                <h2>${totalCo2.toFixed(1)} kg</h2>
                <small>Redução direta de CO₂</small>
            </div>
            <div class="stat-card">
                <div class="stat-top"><span>Pegada Hídrica</span><span class="stat-icon">💧</span></div>
                <h2>${textoAgua}</h2>
                <small>De água potável poupada</small>
            </div>
            <div class="stat-card">
                <div class="stat-top"><span>Economia Circular</span><span class="stat-icon">💠</span></div>
                <h2>R$ ${economiaGerada.toFixed(2)}</h2>
                <small>Em descontos e doações</small>
            </div>
        `;

        renderizarRedeOngs();
        if (abaAtual === "CONTA") renderizarMinhaConta();

        let filtrados = alimentos.filter(a => {
            const ehMeu = estabelecimentoLogado && a.restaurante.toLowerCase() === estabelecimentoLogado.nome.toLowerCase();
            const bateFiltro = filtroAtual === "TODOS" ||
                               (filtroAtual === "MEUS_LOTES" && ehMeu) ||
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
            const ehUrgente = !item.reservado && !item.expirado && item.horasValidade <= 3;
            const ehMeuItem = estabelecimentoLogado && item.restaurante.toLowerCase() === estabelecimentoLogado.nome.toLowerCase();
            const classifItem = obterClassificacaoDoItem(item);
            card.className = `item-card ${item.reservado ? "reservado" : ""} ${ehUrgente ? "urgente" : ""} ${ehMeuItem ? "meu-item" : ""}`;

            let badgeHtml;
            if (item.reservado) {
                badgeHtml = `<span class="tag tag-done">✅ COLETA CONCLUÍDA</span>`;
            } else if (item.expirado) {
                badgeHtml = `<span class="tag tag-compost">♻️ COMPOSTAGEM URBANA</span>`;
            } else if (item.destino === "DOACAO_ONG") {
                badgeHtml = `<span class="tag tag-ong">🎁 DOAÇÃO GRATUITA ONG • ${item.ongParceira}</span>`;
            } else {
                badgeHtml = `<span class="tag tag-venda">🏷️ VENDA RELÂMPAGO (-${item.descontoPercentual}%)</span>`;
            }

            const meuBadge = ehMeuItem ? ` <span class="ong-badge" style="margin-left:6px;">Seu Estabelecimento</span>` : "";

            const precoHtml = (item.destino === "DOACAO_ONG" || item.expirado)
                ? `<div class="new-price" style="color:var(--teal)">GRATUITO</div>`
                : `<div class="old-price">De R$ ${item.precoOriginal.toFixed(2)}</div>
                   <div class="new-price">R$ ${item.precoFinal.toFixed(2)}</div>`;

            const pctValidade = Math.min(100, Math.round((item.horasValidade / 12) * 100));
            const corBarra = item.horasValidade <= 3 ? "var(--danger)" : (item.horasValidade <= 6 ? "var(--blue)" : "var(--primary)");
            const textoValidade = item.expirado ? "⏳ Prazo encerrado (destino orgânico)" : `⏳ Expira em ${item.horasValidade}h${ehUrgente ? " (DOAÇÃO ONG ≤ 3h)" : ""}`;

            card.innerHTML = `
                <div>
                    ${badgeHtml}${meuBadge}
                    <div class="item-title">${item.nomeItem} <small style="color:var(--muted);font-weight:500;">#${item.id}</small></div>
                    <div class="item-meta">🏪 <b>${item.restaurante}</b> (${classifItem}) • 📦 <b>${item.quantidadeKg} kg</b>${Number(item.quantidadeKg) >= 5 ? " (≥ 5kg ONG)" : ""} • 🌱 -${item.co2EvitadoKg.toFixed(1)}kg CO₂</div>
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

    // Inicialização
    aplicarPreferenciasVisuais();
    configurarEventosLoginGate();
    atualizarTelaPorSessao();
    carregarDados();
})();