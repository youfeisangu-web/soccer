"use client";
import { useState } from "react";

const navGroups = [
  {
    items: [
      { icon: "⊞", color: "#1a7a40", bg: "#e6f4ec", label: "ダッシュボード", desc: "ホーム・概要確認" },
      { icon: "👤", color: "#3b6fca", bg: "#e8effe", label: "選手・チーム管理", desc: "プロフィール・編成" },
      { icon: "📅", color: "#7c3aed", bg: "#f0ebff", label: "試合記録", desc: "スコア・日程管理" },
      { icon: "💳", color: "#ea7c1a", bg: "#fff3e8", label: "財務管理", desc: "収支・決済履歴" },
    ],
  },
  {
    items: [
      { icon: "🤝", color: "#0891b2", bg: "#e0f6fa", label: "マッチング", desc: "対戦相手を探す", badge: "NEW" },
      { icon: "🏆", color: "#b45309", bg: "#fef3dc", label: "ランキング", desc: "地域・全国順位" },
      { icon: "🔗", color: "#6366f1", bg: "#eef0ff", label: "API 連携", desc: "外部サービス接続" },
      { icon: "🤖", color: "#059669", bg: "#e6faf4", label: "AI 分析", desc: "戦術・データ解析", badge: "Beta" },
    ],
  },
];

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  const [active, setActive] = useState(0);
  let globalIdx = 0;

  return (
    <>
      {open && (
        <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(10,20,10,0.35)", zIndex: 40, backdropFilter: "blur(2px)" }} />
      )}

      <aside style={{
        position: "fixed", top: 0, left: 0,
        width: 272, height: "100vh",
        background: "#fff",
        display: "flex", flexDirection: "column",
        zIndex: 50,
        transform: open ? "translateX(0)" : "translateX(-100%)",
        transition: "transform 0.26s cubic-bezier(.4,0,.2,1)",
        boxShadow: open ? "8px 0 32px rgba(0,0,0,0.12)" : "none",
        overflowY: "auto",
      }}>

        {/* Profile header */}
        <div style={{ background: "linear-gradient(135deg, #1a7a40 0%, #0d5c30 100%)", padding: "28px 20px 22px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 28, height: 28, background: "rgba(255,255,255,0.2)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15 }}>⚽</div>
              <span style={{ fontSize: "0.78rem", fontWeight: 800, color: "#fff", letterSpacing: "0.02em" }}>FPE</span>
            </div>
            <button onClick={onClose} style={{ background: "rgba(255,255,255,0.15)", border: "none", cursor: "pointer", width: 28, height: 28, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "0.85rem" }}>✕</button>
          </div>
          {/* User info */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 46, height: 46, background: "rgba(255,255,255,0.25)", borderRadius: "50%", border: "2px solid rgba(255,255,255,0.5)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", fontWeight: 900, color: "#fff", flexShrink: 0 }}>田</div>
            <div>
              <div style={{ fontSize: "0.95rem", fontWeight: 800, color: "#fff" }}>田中 健太</div>
              <div style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.7)", marginTop: 2 }}>Tokyo United · FW</div>
              <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 5 }}>
                <div style={{ background: "rgba(255,255,255,0.2)", borderRadius: 20, padding: "2px 8px", display: "flex", alignItems: "center", gap: 4 }}>
                  <div style={{ width: 6, height: 6, background: "#4ade80", borderRadius: "50%" }} />
                  <span style={{ fontSize: "0.62rem", color: "#fff", fontWeight: 600 }}>プロ選手</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nav groups */}
        <nav style={{ flex: 1, padding: "12px 12px 0" }}>
          {navGroups.map((group, gi) => (
            <div key={gi} style={{ marginBottom: 8 }}>
              {gi > 0 && <div style={{ height: 1, background: "#f0f2f0", margin: "8px 0 12px" }} />}
              {group.items.map((item) => {
                const idx = globalIdx++;
                return (
                  <button
                    key={idx}
                    onClick={() => { setActive(idx); onClose(); }}
                    style={{
                      display: "flex", alignItems: "center", gap: 12,
                      width: "100%", padding: "10px 12px",
                      background: active === idx ? "#f0f7f2" : "transparent",
                      border: "none", borderRadius: 12,
                      cursor: "pointer",
                      marginBottom: 2,
                      transition: "background 0.15s",
                    }}
                  >
                    {/* Icon */}
                    <div style={{ width: 36, height: 36, background: active === idx ? item.bg : "#f7f8f7", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.05rem", flexShrink: 0, transition: "background 0.15s" }}>
                      {item.icon}
                    </div>
                    {/* Text */}
                    <div style={{ flex: 1, minWidth: 0, textAlign: "left" }}>
                      <div style={{ fontSize: "0.86rem", fontWeight: active === idx ? 700 : 500, color: active === idx ? item.color : "#2d3d2d" }}>{item.label}</div>
                      <div style={{ fontSize: "0.65rem", color: "#96a696", marginTop: 1 }}>{item.desc}</div>
                    </div>
                    {/* Badge */}
                    {item.badge && (
                      <span style={{ background: item.badge === "NEW" ? "#ef4444" : "#1a7a40", color: "#fff", fontSize: "0.55rem", fontWeight: 800, padding: "2px 6px", borderRadius: 20, letterSpacing: "0.04em" }}>{item.badge}</span>
                    )}
                    {active === idx && <span style={{ color: item.color, fontSize: "0.7rem" }}>›</span>}
                  </button>
                );
              })}
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div style={{ padding: "12px 12px 24px", borderTop: "1px solid #f0f2f0" }}>
          {[
            { icon: "⚙️", label: "設定", desc: "アカウント・通知" },
            { icon: "🚪", label: "ログアウト", desc: "", danger: true },
          ].map((item, i) => (
            <button key={i} style={{ display: "flex", alignItems: "center", gap: 12, width: "100%", padding: "10px 12px", background: "transparent", border: "none", borderRadius: 12, cursor: "pointer", marginBottom: 2 }}>
              <div style={{ width: 36, height: 36, background: "#f7f8f7", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.05rem" }}>{item.icon}</div>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: "0.86rem", fontWeight: 500, color: (item as { danger?: boolean }).danger ? "#ef4444" : "#2d3d2d" }}>{item.label}</div>
                {item.desc && <div style={{ fontSize: "0.65rem", color: "#96a696", marginTop: 1 }}>{item.desc}</div>}
              </div>
            </button>
          ))}
        </div>
      </aside>
    </>
  );
}
