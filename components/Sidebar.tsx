"use client";
import { useState } from "react";

const navItems = [
  { icon: "⊞", label: "マイダッシュボード", active: true },
  { icon: "👤", label: "選手とチーム" },
  { icon: "📅", label: "試合とスコア" },
  { icon: "💳", label: "財務と決済" },
  { icon: "🤝", label: "マッチング" },
  { icon: "🏆", label: "ランキング" },
  { icon: "🔗", label: "API連携" },
  { icon: "🤖", label: "AI分析" },
];

const quickLinks = [
  { icon: "👤", label: "個人データ" },
  { icon: "📊", label: "チーム分析" },
  { icon: "📅", label: "予約システム" },
  { icon: "🏅", label: "トーナメント表" },
];

export default function Sidebar() {
  const [active, setActive] = useState(0);

  return (
    <aside style={{
      width: 220,
      minHeight: "100vh",
      background: "var(--sidebar)",
      borderRight: "1px solid var(--border)",
      display: "flex",
      flexDirection: "column",
      padding: "20px 0",
      flexShrink: 0,
    }}>
      {/* Logo */}
      <div style={{ padding: "0 20px 24px", borderBottom: "1px solid var(--border)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 32, height: 32,
            background: "var(--green)",
            borderRadius: 8,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 16,
          }}>⚽</div>
          <span style={{ fontSize: "0.82rem", fontWeight: 700, lineHeight: 1.3 }}>
            Football<br />
            <span style={{ color: "var(--green-bright)" }}>Performance</span>
          </span>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ padding: "16px 0", flex: 1 }}>
        {navItems.map((item, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              width: "100%",
              padding: "10px 20px",
              background: active === i ? "rgba(34,197,94,0.12)" : "transparent",
              borderLeft: active === i ? "3px solid var(--green-bright)" : "3px solid transparent",
              border: "none",
              color: active === i ? "#fff" : "rgba(255,255,255,0.5)",
              cursor: "pointer",
              fontSize: "0.85rem",
              fontWeight: active === i ? 700 : 400,
              textAlign: "left",
              transition: "all 0.15s",
            }}
          >
            <span style={{ fontSize: "1rem", width: 20, textAlign: "center" }}>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>

      {/* Quick Links */}
      <div style={{ padding: "16px 20px 0", borderTop: "1px solid var(--border)" }}>
        <p style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.15em", marginBottom: 10, fontFamily: "Inter, sans-serif", fontWeight: 700, textTransform: "uppercase" }}>QUICK LINKS</p>
        {quickLinks.map((item, i) => (
          <button key={i} style={{
            display: "flex", alignItems: "center", gap: 10,
            width: "100%", padding: "8px 0",
            background: "transparent", border: "none",
            color: "rgba(255,255,255,0.4)", cursor: "pointer",
            fontSize: "0.82rem", textAlign: "left",
          }}>
            <span>{item.icon}</span>{item.label}
          </button>
        ))}
      </div>
    </aside>
  );
}
