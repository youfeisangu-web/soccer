"use client";

interface DashboardProps {
  onMenuClick: () => void;
}

export default function Dashboard({ onMenuClick }: DashboardProps) {
  return (
    <div style={{ maxWidth: 430, margin: "0 auto", minHeight: "100vh", background: "#f5f7f5", display: "flex", flexDirection: "column", position: "relative" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        .dash-root * { font-family: 'Inter', -apple-system, sans-serif; }
        .quick-btn:active { transform: scale(0.93); }
        .nav-item { display: flex; flex-direction: column; align-items: center; gap: 4px; flex: 1; background: none; border: none; cursor: pointer; padding: 8px 0; }
        .form-dot { width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.62rem; font-weight: 800; color: #fff; }
        .stat-box { display: flex; flex-direction: column; align-items: center; flex: 1; }
        .ai-col { flex: 1; }
      `}</style>

      <div className="dash-root" style={{ flex: 1, overflowY: "auto", paddingBottom: 80 }}>

        {/* ── Header ── */}
        <div style={{ background: "#fff", padding: "14px 20px 12px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #eef0ee" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <button onClick={onMenuClick} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", gap: 4, padding: 4 }}>
              <span style={{ display: "block", width: 20, height: 2, background: "#1a2e1a", borderRadius: 2 }} />
              <span style={{ display: "block", width: 20, height: 2, background: "#1a2e1a", borderRadius: 2 }} />
              <span style={{ display: "block", width: 20, height: 2, background: "#1a2e1a", borderRadius: 2 }} />
            </button>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 30, height: 30, background: "#16a34a", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>⚽</div>
              <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#1a2e1a", lineHeight: 1.2 }}>フットボール・パフォーマンス<br /><span style={{ color: "#16a34a" }}>エクスチェンジ</span></span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ position: "relative" }}>
              <button style={{ background: "none", border: "none", cursor: "pointer", fontSize: "1.2rem" }}>🔔</button>
              <span style={{ position: "absolute", top: -2, right: -2, width: 14, height: 14, background: "#f97316", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.55rem", color: "#fff", fontWeight: 800 }}>3</span>
            </div>
            <div style={{ width: 34, height: 34, background: "#16a34a", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: "0.82rem" }}>田</div>
          </div>
        </div>

        <div style={{ padding: "16px 16px 0" }}>

          {/* ── Team Card ── */}
          <div style={{ background: "#fff", borderRadius: 16, padding: "18px 18px 16px", marginBottom: 14, boxShadow: "0 2px 8px rgba(0,0,0,0.06)", border: "1px solid #eef0ee" }}>
            {/* Team header */}
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
              {/* Badge */}
              <div style={{ width: 56, height: 56, background: "linear-gradient(135deg, #8b1a1a, #c0392b)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.6rem", flexShrink: 0, boxShadow: "0 4px 12px rgba(139,26,26,0.3)" }}>🛡️</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "1.15rem", fontWeight: 900, color: "#1a2e1a", letterSpacing: "0.02em" }}>TOKYO UNITED</div>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 2 }}>
                  <span style={{ fontSize: "0.9rem" }}>🏆</span>
                  <span style={{ fontSize: "0.68rem", color: "#6b7280", fontWeight: 600 }}>CURRENT LEAGUE POSITION: <strong style={{ color: "#16a34a" }}>1st (Division 1)</strong></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 6 }}>
                  <span style={{ fontSize: "0.62rem", color: "#9ca3af", fontWeight: 700, marginRight: 2 }}>RECENT FORM:</span>
                  {["W","W","W","D","W"].map((r, i) => (
                    <div key={i} className="form-dot" style={{ background: r === "W" ? "#16a34a" : r === "D" ? "#f59e0b" : "#ef4444" }}>{r}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: "#f3f4f6", marginBottom: 14 }} />

            {/* Stats row */}
            <div style={{ display: "flex", alignItems: "stretch" }}>
              {[
                { label: "MATCHES PLAYED\n(チーム: 5/16)", value: "25" },
                { label: "TEAM GOALS",  value: "45" },
                { label: "TOTAL ASSISTS", value: "30" },
              ].map((s, i) => (
                <div key={i} className="stat-box" style={{ borderRight: i < 2 ? "1px solid #f3f4f6" : "none" }}>
                  <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "#1a2e1a" }}>{s.value}</div>
                  <div style={{ fontSize: "0.58rem", color: "#9ca3af", textAlign: "center", whiteSpace: "pre-line", lineHeight: 1.4, marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
              {/* Rating circle */}
              <div className="stat-box" style={{ borderLeft: "1px solid #f3f4f6" }}>
                <div style={{ width: 52, height: 52, border: "3px solid #1a2e1a", borderRadius: "50%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ fontSize: "1.15rem", fontWeight: 900, color: "#1a2e1a", lineHeight: 1 }}>8.5</div>
                </div>
                <div style={{ fontSize: "0.58rem", color: "#9ca3af", marginTop: 4, fontWeight: 700 }}>TEAM RATING</div>
              </div>
            </div>
          </div>

          {/* ── AI Analysis ── */}
          <div style={{ background: "#fff", borderRadius: 16, padding: "18px 18px 16px", marginBottom: 14, boxShadow: "0 2px 8px rgba(0,0,0,0.06)", border: "1px solid #eef0ee" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
              <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#1a2e1a", letterSpacing: "0.08em" }}>AI ANALYSIS &amp; PERFORMANCE</span>
              <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
                <span style={{ fontSize: "0.9rem" }}>📈</span>
                <span style={{ fontSize: "0.9rem" }}>📊</span>
              </div>
            </div>

            {/* Heatmap area */}
            <div style={{ borderRadius: 12, overflow: "hidden", position: "relative", marginBottom: 14, height: 160, background: "#1a3d1a" }}>
              {/* Pitch lines */}
              <div style={{ position: "absolute", inset: 0 }}>
                <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 1, background: "rgba(255,255,255,0.15)" }} />
                <div style={{ position: "absolute", left: "20%", right: "20%", top: "15%", bottom: "15%", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 4 }} />
                <div style={{ position: "absolute", width: 60, height: 60, border: "1px solid rgba(255,255,255,0.12)", borderRadius: "50%", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
              </div>
              {/* Heat overlay */}
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 35% 50%, rgba(255,60,0,0.7) 0%, rgba(255,165,0,0.4) 30%, transparent 60%), radial-gradient(ellipse at 70% 40%, rgba(255,100,0,0.5) 0%, transparent 40%)" }} />
              {/* Play button */}
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 44, height: 44, background: "rgba(255,255,255,0.9)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: 0, height: 0, borderLeft: "14px solid #1a2e1a", borderTop: "9px solid transparent", borderBottom: "9px solid transparent", marginLeft: 4 }} />
                </div>
              </div>
              {/* Label */}
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "rgba(0,0,0,0.55)", padding: "6px 12px" }}>
                <span style={{ fontSize: "0.68rem", color: "#fff", fontWeight: 700, letterSpacing: "0.06em" }}>MATCH HIGHLIGHTS &amp; AI ANALYSIS</span>
              </div>
            </div>

            {/* Two columns */}
            <div style={{ display: "flex", gap: 12 }}>
              <div className="ai-col">
                <div style={{ fontSize: "0.65rem", fontWeight: 800, color: "#1a2e1a", letterSpacing: "0.08em", marginBottom: 8 }}>AI TACTICAL ADVICE</div>
                {["守備のギャップを突くAIの直前情報", "カウンター戦術の情報向上に", "カウンター戦術の情報向上に"].map((t, i) => (
                  <div key={i} style={{ display: "flex", gap: 5, marginBottom: 5 }}>
                    <span style={{ color: "#16a34a", fontSize: "0.65rem", flexShrink: 0, marginTop: 1 }}>•</span>
                    <span style={{ fontSize: "0.65rem", color: "#6b7280", lineHeight: 1.5 }}>{t}</span>
                  </div>
                ))}
              </div>
              <div className="ai-col" style={{ borderLeft: "1px solid #f3f4f6", paddingLeft: 12 }}>
                <div style={{ fontSize: "0.65rem", fontWeight: 800, color: "#1a2e1a", letterSpacing: "0.08em", marginBottom: 8 }}>PERFORMANCE SUMMARY</div>
                <div style={{ fontSize: "0.65rem", color: "#6b7280", lineHeight: 1.6 }}>接地の局面により、チャンジャーマンフアリングを搭乗することに、ボールを確保できます。</div>
              </div>
            </div>
          </div>

          {/* ── Quick Access ── */}
          <div style={{ background: "#fff", borderRadius: 16, padding: "18px 18px 20px", marginBottom: 14, boxShadow: "0 2px 8px rgba(0,0,0,0.06)", border: "1px solid #eef0ee" }}>
            <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "#1a2e1a", letterSpacing: "0.08em", marginBottom: 18 }}>QUICK ACCESS</div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              {[
                { icon: "👥", label: "マッチング" },
                { icon: "🏆", label: "ランキング" },
                { icon: "💳", label: "決済" },
                { icon: "📅", label: "予約" },
              ].map((item) => (
                <button key={item.label} className="quick-btn" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, background: "none", border: "none", cursor: "pointer", transition: "transform 0.1s" }}>
                  <div style={{ width: 60, height: 60, border: "2px solid #16a34a", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", background: "#f0faf3" }}>
                    {item.icon}
                  </div>
                  <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#16a34a" }}>{item.label}</span>
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom Navigation ── */}
      <div style={{
        position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)",
        width: "100%", maxWidth: 430,
        background: "#fff", borderTop: "1px solid #eef0ee",
        display: "flex", padding: "4px 0 env(safe-area-inset-bottom, 4px)",
        boxShadow: "0 -4px 20px rgba(0,0,0,0.08)",
        zIndex: 30,
      }}>
        {[
          { icon: "🏠", label: "ダッシュボード", active: true },
          { icon: "📊", label: "パフォーマンス", active: false },
          { icon: "🤝", label: "マッチング", active: false },
          { icon: "👤", label: "プロフィール", active: false },
        ].map((item) => (
          <button key={item.label} className="nav-item" style={{ color: item.active ? "#16a34a" : "#9ca3af" }}>
            <span style={{ fontSize: "1.2rem" }}>{item.icon}</span>
            <span style={{ fontSize: "0.6rem", fontWeight: item.active ? 700 : 400 }}>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
