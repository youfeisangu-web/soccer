"use client";
import { useState } from "react";

const quickMenu = [
  { icon: "🤝", label: "マッチング", color: "#0891b2", bg: "#e0f6fa" },
  { icon: "🏆", label: "ランキング", color: "#b45309", bg: "#fef3dc" },
  { icon: "💳", label: "決済",       color: "#7c3aed", bg: "#f0ebff" },
  { icon: "📅", label: "予約",       color: "#1a7a40", bg: "#e6f4ec" },
];

const navItems = [
  { icon: "⊞", label: "ホーム" },
  { icon: "📊", label: "分析" },
  { icon: "🤝", label: "対戦" },
  { icon: "👤", label: "マイページ" },
];

const tactics = [
  "右サイドの守備ラインに隙あり。早めのサイドチェンジで崩せる可能性大",
  "セットプレー時、ニアポストへのランニングが有効",
  "ハーフカウンターの成功率が先週比+18%",
];

interface DashboardProps {
  onMenuClick: () => void;
}

export default function Dashboard({ onMenuClick }: DashboardProps) {
  const [activeNav, setActiveNav] = useState(0);

  return (
    <div style={{ maxWidth: 430, margin: "0 auto", minHeight: "100vh", background: "#f4f7f4", fontFamily: "-apple-system, 'Hiragino Sans', 'Yu Gothic', sans-serif", position: "relative" }}>
      <style>{`
        .tap:active { opacity: 0.7; transform: scale(0.97); }
        .tap { transition: opacity 0.1s, transform 0.1s; cursor: pointer; }
        .form-badge { width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.58rem; font-weight: 800; color: #fff; flex-shrink: 0; }
        .stat-col { display: flex; flex-direction: column; align-items: center; flex: 1; padding: 4px 0; }
      `}</style>

      <div style={{ paddingBottom: 72, overflowX: "hidden" }}>

        {/* ━━ Header ━━ */}
        <div style={{ background: "#fff", padding: "14px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #eaeeea" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button onClick={onMenuClick} className="tap" style={{ background: "none", border: "none", padding: "6px 4px", display: "flex", flexDirection: "column", gap: 5 }}>
              <span style={{ display: "block", width: 22, height: 2.5, background: "#1a2e1a", borderRadius: 2 }} />
              <span style={{ display: "block", width: 16, height: 2.5, background: "#1a2e1a", borderRadius: 2 }} />
              <span style={{ display: "block", width: 22, height: 2.5, background: "#1a2e1a", borderRadius: 2 }} />
            </button>
            <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
              <div style={{ width: 28, height: 28, background: "linear-gradient(135deg,#1a7a40,#0d5c30)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>⚽</div>
              <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#1a2e1a" }}>Football Performance</span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <button className="tap" style={{ background: "#f4f7f4", border: "none", borderRadius: "50%", width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", position: "relative" }}>
              🔔
              <span style={{ position: "absolute", top: 4, right: 4, width: 8, height: 8, background: "#f97316", borderRadius: "50%", border: "1.5px solid #fff" }} />
            </button>
            <div style={{ width: 36, height: 36, background: "linear-gradient(135deg,#1a7a40,#0d5c30)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: "0.85rem", border: "2px solid #e6f4ec" }}>田</div>
          </div>
        </div>

        <div style={{ padding: "16px 16px 0" }}>

          {/* ━━ 挨拶 + チーム ━━ */}
          <div style={{ background: "linear-gradient(135deg, #1a7a40 0%, #0c5a30 100%)", borderRadius: 20, padding: "20px", marginBottom: 14, color: "#fff", position: "relative", overflow: "hidden" }}>
            {/* 背景装飾 */}
            <div style={{ position: "absolute", right: -20, top: -20, width: 120, height: 120, border: "1px solid rgba(255,255,255,0.1)", borderRadius: "50%" }} />
            <div style={{ position: "absolute", right: 10, top: 10, width: 70, height: 70, border: "1px solid rgba(255,255,255,0.08)", borderRadius: "50%" }} />

            <div style={{ position: "relative" }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
                <div>
                  <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.65)", marginBottom: 4 }}>おかえりなさい</div>
                  <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "#fff" }}>田中 健太 選手 👋</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 6 }}>
                    <div style={{ width: 58, height: 58, background: "linear-gradient(135deg, #8b1a1a, #c0392b)", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8rem", flexShrink: 0, border: "2px solid rgba(255,255,255,0.2)" }}>🛡️</div>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: "0.95rem" }}>Tokyo United</div>
                      <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.7)", marginTop: 1 }}>🏆 Division 1 — 1位</div>
                      <div style={{ display: "flex", gap: 3, marginTop: 5 }}>
                        {["勝","勝","勝","分","勝"].map((r, i) => (
                          <div key={i} className="form-badge" style={{ background: r === "勝" ? "rgba(74,222,128,0.85)" : "rgba(251,191,36,0.85)" }}>{r}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Rating */}
                <div style={{ textAlign: "center" }}>
                  <div style={{ width: 56, height: 56, border: "2.5px solid rgba(255,255,255,0.6)", borderRadius: "50%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ fontSize: "1.2rem", fontWeight: 900, lineHeight: 1 }}>8.5</div>
                    <div style={{ fontSize: "0.48rem", color: "rgba(255,255,255,0.6)", letterSpacing: "0.06em" }}>RATING</div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div style={{ background: "rgba(0,0,0,0.2)", borderRadius: 12, padding: "12px 0", display: "flex" }}>
                {[["25", "試合"], ["45", "ゴール"], ["30", "アシスト"]].map(([n, l], i) => (
                  <div key={i} className="stat-col" style={{ borderRight: i < 2 ? "1px solid rgba(255,255,255,0.15)" : "none" }}>
                    <div style={{ fontSize: "1.4rem", fontWeight: 900 }}>{n}</div>
                    <div style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.6)", marginTop: 2 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ━━ 次の試合 ━━ */}
          <div style={{ background: "#fff", borderRadius: 16, padding: "16px 18px", marginBottom: 14, boxShadow: "0 1px 6px rgba(0,0,0,0.05)", border: "1px solid #eaeeea" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
              <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#1a2e1a" }}>次の試合</span>
              <span style={{ fontSize: "0.7rem", color: "#1a7a40", fontWeight: 600 }}>日程を見る →</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
              {/* Home */}
              <div style={{ flex: 1, textAlign: "center" }}>
                <div style={{ width: 42, height: 42, background: "linear-gradient(135deg,#8b1a1a,#c0392b)", borderRadius: 10, margin: "0 auto 6px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem" }}>🛡️</div>
                <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#1a2e1a" }}>TOY</div>
                <div style={{ fontSize: "0.6rem", color: "#96a696" }}>ホーム</div>
              </div>
              {/* VS */}
              <div style={{ textAlign: "center", padding: "0 8px" }}>
                <div style={{ fontSize: "1.1rem", fontWeight: 900, color: "#c0c8c0" }}>VS</div>
                <div style={{ background: "#f0f7f2", borderRadius: 20, padding: "3px 10px", marginTop: 4 }}>
                  <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#1a7a40" }}>3/15 土</div>
                  <div style={{ fontSize: "0.6rem", color: "#96a696" }}>20:00</div>
                </div>
              </div>
              {/* Away */}
              <div style={{ flex: 1, textAlign: "center" }}>
                <div style={{ width: 42, height: 42, background: "linear-gradient(135deg,#1e3a6e,#2d5ba3)", borderRadius: 10, margin: "0 auto 6px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem" }}>⚔️</div>
                <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#1a2e1a" }}>OSK</div>
                <div style={{ fontSize: "0.6rem", color: "#96a696" }}>アウェイ</div>
              </div>
            </div>
          </div>

          {/* ━━ AI 分析 ━━ */}
          <div style={{ background: "#fff", borderRadius: 16, padding: "16px 18px", marginBottom: 14, boxShadow: "0 1px 6px rgba(0,0,0,0.05)", border: "1px solid #eaeeea" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ width: 22, height: 22, background: "#e6faf4", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem" }}>🤖</div>
                <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#1a2e1a" }}>AI 戦術アドバイス</span>
              </div>
              <span style={{ fontSize: "0.6rem", background: "#e6f4ec", color: "#1a7a40", padding: "2px 8px", borderRadius: 20, fontWeight: 700 }}>本日更新</span>
            </div>

            {/* ヒートマップ */}
            <div style={{ borderRadius: 12, overflow: "hidden", position: "relative", height: 140, background: "#0f2d0f", marginBottom: 14 }}>
              <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 1, background: "rgba(255,255,255,0.1)" }} />
              <div style={{ position: "absolute", width: 55, height: 55, border: "1px solid rgba(255,255,255,0.1)", borderRadius: "50%", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
              <div style={{ position: "absolute", left: "15%", right: "15%", top: "12%", bottom: "12%", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 3 }} />
              {/* heat */}
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 30% 55%, rgba(255,40,0,0.75) 0%, rgba(255,140,0,0.4) 28%, transparent 55%), radial-gradient(ellipse at 68% 35%, rgba(255,100,0,0.5) 0%, transparent 38%)" }} />
              {/* play */}
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 40, height: 40, background: "rgba(255,255,255,0.92)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }}>
                  <div style={{ width: 0, height: 0, borderLeft: "12px solid #1a2e1a", borderTop: "8px solid transparent", borderBottom: "8px solid transparent", marginLeft: 3 }} />
                </div>
              </div>
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)", padding: "16px 12px 8px" }}>
                <span style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.85)", fontWeight: 600 }}>試合ハイライト &amp; ヒートマップ</span>
              </div>
            </div>

            {/* アドバイスリスト */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {tactics.map((t, i) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", background: "#f8faf8", borderRadius: 10, padding: "10px 12px" }}>
                  <div style={{ width: 20, height: 20, background: "#e6f4ec", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                    <span style={{ fontSize: "0.55rem", fontWeight: 800, color: "#1a7a40" }}>{i + 1}</span>
                  </div>
                  <span style={{ fontSize: "0.74rem", color: "#445544", lineHeight: 1.6 }}>{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ━━ クイックメニュー ━━ */}
          <div style={{ background: "#fff", borderRadius: 16, padding: "16px 18px 18px", marginBottom: 14, boxShadow: "0 1px 6px rgba(0,0,0,0.05)", border: "1px solid #eaeeea" }}>
            <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#1a2e1a", marginBottom: 14 }}>クイックメニュー</div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {quickMenu.map((item) => (
                <button key={item.label} className="tap" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 7, background: "none", border: "none" }}>
                  <div style={{ width: 56, height: 56, background: item.bg, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem" }}>
                    {item.icon}
                  </div>
                  <span style={{ fontSize: "0.68rem", fontWeight: 600, color: "#445544" }}>{item.label}</span>
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ━━ ボトムナビ ━━ */}
      <div style={{
        position: "fixed", bottom: 0,
        left: "50%", transform: "translateX(-50%)",
        width: "100%", maxWidth: 430,
        background: "#fff",
        borderTop: "1px solid #eaeeea",
        display: "flex",
        boxShadow: "0 -2px 16px rgba(0,0,0,0.07)",
        zIndex: 30,
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
      }}>
        {navItems.map((item, i) => (
          <button
            key={i}
            onClick={() => setActiveNav(i)}
            style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 3, padding: "10px 0 8px", background: "none", border: "none", cursor: "pointer" }}
          >
            <div style={{ width: 28, height: 28, borderRadius: 10, background: activeNav === i ? "#e6f4ec" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", transition: "background 0.15s" }}>
              {item.icon}
            </div>
            <span style={{ fontSize: "0.58rem", fontWeight: activeNav === i ? 700 : 400, color: activeNav === i ? "#1a7a40" : "#96a696" }}>{item.label}</span>
            {activeNav === i && <div style={{ width: 4, height: 4, background: "#1a7a40", borderRadius: "50%" }} />}
          </button>
        ))}
      </div>
    </div>
  );
}
