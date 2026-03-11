"use client";
import { useState } from "react";

const navItems = [
  { icon: "⊞", label: "マイダッシュボード" },
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

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  const [active, setActive] = useState(0);

  return (
    <>
      {open && (
        <div
          onClick={onClose}
          style={{
            position: "fixed", inset: 0,
            background: "rgba(0,0,0,0.3)",
            zIndex: 40,
          }}
        />
      )}

      <aside style={{
        position: "fixed",
        top: 0, left: 0,
        width: 240,
        height: "100vh",
        background: "#fff",
        borderRight: "1px solid #e5ebe5",
        display: "flex",
        flexDirection: "column",
        zIndex: 50,
        transform: open ? "translateX(0)" : "translateX(-100%)",
        transition: "transform 0.24s ease",
        boxShadow: open ? "6px 0 24px rgba(0,0,0,0.1)" : "none",
        overflowY: "auto",
      }}>
        <div style={{
          padding: "18px 20px",
          borderBottom: "1px solid #e5ebe5",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 34, height: 34, background: "#16a34a",
              borderRadius: 8, display: "flex", alignItems: "center",
              justifyContent: "center", fontSize: 18,
            }}>⚽</div>
            <span style={{ fontSize: "0.82rem", fontWeight: 700, lineHeight: 1.3, color: "#111" }}>
              Football<br />
              <span style={{ color: "#16a34a" }}>Performance</span>
            </span>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "#f3f4f6", border: "none", cursor: "pointer",
              width: 28, height: 28, borderRadius: 6,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "0.85rem", color: "#6b7280",
            }}
          >✕</button>
        </div>

        <nav style={{ padding: "10px 0", flex: 1 }}>
          {navItems.map((item, i) => (
            <button
              key={i}
              onClick={() => { setActive(i); onClose(); }}
              style={{
                display: "flex", alignItems: "center", gap: 12,
                width: "100%", padding: "11px 20px",
                background: active === i ? "#f0faf3" : "transparent",
                borderLeft: `3px solid ${active === i ? "#16a34a" : "transparent"}`,
                border: "none",
                borderLeftWidth: 3,
                borderLeftStyle: "solid",
                borderLeftColor: active === i ? "#16a34a" : "transparent",
                color: active === i ? "#16a34a" : "#6b7280",
                cursor: "pointer",
                fontSize: "0.88rem",
                fontWeight: active === i ? 700 : 400,
                textAlign: "left",
                transition: "all 0.15s",
              }}
            >
              <span style={{ fontSize: "1rem", width: 22, textAlign: "center" }}>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        <div style={{ padding: "14px 20px 20px", borderTop: "1px solid #e5ebe5" }}>
          <p style={{ fontSize: "0.63rem", color: "#9ca3af", letterSpacing: "0.12em", marginBottom: 10, fontWeight: 700, textTransform: "uppercase" }}>QUICK LINKS</p>
          {quickLinks.map((item, i) => (
            <button key={i} style={{
              display: "flex", alignItems: "center", gap: 10,
              width: "100%", padding: "8px 0",
              background: "transparent", border: "none",
              color: "#9ca3af", cursor: "pointer",
              fontSize: "0.84rem", textAlign: "left",
            }}>
              <span>{item.icon}</span>{item.label}
            </button>
          ))}
        </div>
      </aside>
    </>
  );
}
