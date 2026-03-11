"use client";

const skills = [
  { label: "Passing",   value: 8.6, pct: 86, color: "#22c55e" },
  { label: "Shooting",  value: 6.0, pct: 60, color: "#22c55e" },
  { label: "Dribbling", value: 7.0, pct: 70, color: "#f97316" },
  { label: "Defense",   value: 8.2, pct: 82, color: "#22c55e" },
];

const ranking = [
  { rank: 1, name: "田中 健太", team: "Tokyo United", pts: 98 },
  { rank: 2, name: "鈴木 颯",   team: "Osaka FC",     pts: 94 },
  { rank: 3, name: "佐藤 蓮",   team: "Kobe Stars",   pts: 91 },
  { rank: 4, name: "中村 大翔", team: "Tokyo United", pts: 88 },
  { rank: 5, name: "高橋 悠",   team: "Yokohama SC",  pts: 85 },
];

const upcomingMatches = [
  { date: "3/15", home: "TOY", away: "US",  time: "20:00" },
  { date: "3/18", home: "TOY", away: "TB",  time: "16:30" },
  { date: "3/22", home: "TOY", away: "US",  time: "17:00" },
];

const rankStyle: Record<number, { bg: string; color: string }> = {
  1: { bg: "#f59e0b", color: "#fff" },
  2: { bg: "#e5e7eb", color: "#374151" },
  3: { bg: "#f3f4f6", color: "#6b7280" },
};

interface DashboardProps {
  onMenuClick: () => void;
}

export default function Dashboard({ onMenuClick }: DashboardProps) {
  return (
    <div>
      <style>{`
        .dash-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        @media (min-width: 768px) {
          .dash-grid { grid-template-columns: 1.1fr 1fr 0.9fr; }
        }
        .stat-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-bottom: 18px;
        }
      `}</style>

      {/* Top bar */}
      <div style={{
        background: "#fff",
        borderBottom: "1px solid #e5ebe5",
        padding: "14px 20px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        position: "sticky", top: 0, zIndex: 30,
        boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button
            onClick={onMenuClick}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 6, borderRadius: 8, display: "flex", flexDirection: "column", gap: 5 }}
            aria-label="メニューを開く"
          >
            <span style={{ display: "block", width: 22, height: 2, background: "#374151", borderRadius: 2 }} />
            <span style={{ display: "block", width: 22, height: 2, background: "#374151", borderRadius: 2 }} />
            <span style={{ display: "block", width: 22, height: 2, background: "#374151", borderRadius: 2 }} />
          </button>
          <h1 style={{ fontSize: "1.1rem", fontWeight: 900, color: "#111827" }}>マイダッシュボード</h1>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <button style={{
            background: "#f3f4f6", border: "none", borderRadius: 50,
            padding: "7px 14px", fontSize: "0.82rem", color: "#374151",
            display: "flex", gap: 6, alignItems: "center", cursor: "pointer",
          }}>
            🔔
            <span style={{ background: "#f97316", color: "#fff", borderRadius: "50%", width: 16, height: 16, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "0.6rem", fontWeight: 700 }}>3</span>
          </button>
          <div style={{ background: "#f3f4f6", borderRadius: 50, padding: "6px 14px 6px 8px", display: "flex", gap: 8, alignItems: "center", cursor: "pointer" }}>
            <div style={{ width: 28, height: 28, background: "#16a34a", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem", fontWeight: 700, color: "#fff" }}>田</div>
            <div>
              <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#111" }}>田中 健太</div>
              <div style={{ fontSize: "0.62rem", color: "#9ca3af" }}>Professional</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: "20px 16px 40px" }}>
        <div className="dash-grid">

          {/* Player Profile */}
          <div style={{ background: "#fff", border: "1px solid #e5ebe5", borderRadius: 16, padding: 20, boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "#9ca3af", letterSpacing: "0.1em", textTransform: "uppercase" }}>Player Profile</span>
              <span style={{ color: "#d1d5db", cursor: "pointer" }}>···</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
              <div style={{ width: 54, height: 54, background: "#16a34a", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", fontWeight: 900, color: "#fff", flexShrink: 0 }}>田</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "#111" }}>T. Tanaka</div>
                <div style={{ fontSize: "0.75rem", color: "#9ca3af" }}>Tokyo United</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: "1.7rem", fontWeight: 900, color: "#f97316", lineHeight: 1 }}>8.2</div>
                <div style={{ fontSize: "0.6rem", color: "#9ca3af", letterSpacing: "0.08em" }}>RATING</div>
              </div>
            </div>
            <div className="stat-grid">
              {[["25", "試合"], ["15", "ゴール"], ["10", "アシスト"]].map(([num, lbl]) => (
                <div key={lbl} style={{ background: "#f0faf3", border: "1px solid #d1fae5", borderRadius: 10, padding: "10px 6px", textAlign: "center" }}>
                  <div style={{ fontSize: "1.3rem", fontWeight: 900, color: "#111" }}>{num}</div>
                  <div style={{ fontSize: "0.65rem", color: "#6b7280" }}>{lbl}</div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {skills.map((s) => (
                <div key={s.label} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: "0.72rem", color: "#6b7280", width: 60, flexShrink: 0 }}>{s.label}</span>
                  <div style={{ flex: 1, height: 6, background: "#f3f4f6", borderRadius: 50, overflow: "hidden" }}>
                    <div style={{ width: `${s.pct}%`, height: "100%", background: s.color, borderRadius: 50 }} />
                  </div>
                  <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#374151", width: 24, textAlign: "right", flexShrink: 0 }}>{s.value}</span>
                </div>
              ))}
            </div>
            <button style={{ marginTop: 18, width: "100%", padding: "12px", background: "#16a34a", border: "none", borderRadius: 50, color: "#fff", fontWeight: 700, fontSize: "0.9rem", cursor: "pointer" }}>
              スコアを見る
            </button>
          </div>

          {/* Middle */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: "#fff", border: "1px solid #e5ebe5", borderRadius: 16, padding: 20, boxShadow: "0 1px 4px rgba(0,0,0,0.06)", flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "#9ca3af", letterSpacing: "0.1em", textTransform: "uppercase" }}>ランキング</span>
                <span style={{ fontSize: "0.72rem", color: "#16a34a", cursor: "pointer" }}>全て見る →</span>
              </div>
              {ranking.map((r) => (
                <div key={r.rank} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0", borderBottom: "1px solid #f3f4f6" }}>
                  <div style={{ width: 24, height: 24, borderRadius: 6, flexShrink: 0, background: rankStyle[r.rank]?.bg ?? "#f3f4f6", color: rankStyle[r.rank]?.color ?? "#9ca3af", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.72rem", fontWeight: 700 }}>{r.rank}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#111" }}>{r.name}</div>
                    <div style={{ fontSize: "0.7rem", color: "#9ca3af" }}>{r.team}</div>
                  </div>
                  <span style={{ fontSize: "0.85rem", fontWeight: 900, color: "#16a34a" }}>{r.pts}pt</span>
                </div>
              ))}
            </div>
            <div style={{ background: "#fff", border: "1px solid #e5ebe5", borderRadius: 16, padding: 20, boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
              <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#9ca3af", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>次の試合</div>
              {upcomingMatches.map((m) => (
                <div key={m.date} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 0", borderBottom: "1px solid #f3f4f6" }}>
                  <span style={{ color: "#9ca3af", width: 30, fontSize: "0.72rem" }}>{m.date}</span>
                  <span style={{ background: "#16a34a", color: "#fff", borderRadius: 4, padding: "2px 6px", fontSize: "0.7rem", fontWeight: 700 }}>{m.home}</span>
                  <span style={{ color: "#d1d5db", fontSize: "0.7rem" }}>vs</span>
                  <span style={{ background: "#f3f4f6", color: "#374151", borderRadius: 4, padding: "2px 6px", fontSize: "0.7rem", fontWeight: 700 }}>{m.away}</span>
                  <span style={{ marginLeft: "auto", color: "#6b7280", fontSize: "0.75rem" }}>{m.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: "#fff", border: "1px solid #e5ebe5", borderRadius: 16, padding: 20, boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "#9ca3af", letterSpacing: "0.1em", textTransform: "uppercase" }}>AI 戦術提案</span>
                <span>🤖</span>
              </div>
              <ul style={{ display: "flex", flexDirection: "column", gap: 10, listStyle: "none", padding: 0 }}>
                {["対戦相手の弱点を突くスタッピングを提案", "チーム全体のケミストリー向上のため技術を駆使", "AIチームが最適な戦術を提案中"].map((txt, i) => (
                  <li key={i} style={{ display: "flex", gap: 8, fontSize: "0.8rem", color: "#6b7280", lineHeight: 1.6 }}>
                    <span style={{ color: "#22c55e", flexShrink: 0, marginTop: 3 }}>•</span>{txt}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: "#fff", border: "1px solid #e5ebe5", borderRadius: 16, padding: 20, boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
              <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#9ca3af", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>チーム管理</div>
              <div style={{ background: "#f0faf3", border: "1px solid #d1fae5", borderRadius: 10, height: 90, position: "relative", overflow: "hidden", marginBottom: 12 }}>
                <div style={{ position: "absolute", width: 56, height: 56, border: "1.5px solid #bbf7d0", borderRadius: "50%", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
                <div style={{ position: "absolute", width: "100%", height: 1, background: "#bbf7d0", top: "50%" }} />
                {[["20%","30%"],["60%","20%"],["60%","70%"],["35%","50%"],["75%","50%"]].map(([l,t],i) => (
                  <div key={i} style={{ position: "absolute", left: l, top: t, width: 10, height: 10, background: "#16a34a", borderRadius: "50%", transform: "translate(-50%,-50%)" }} />
                ))}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.78rem", color: "#6b7280" }}>
                <span>メンバー: <strong style={{ color: "#111" }}>18名</strong></span>
                <span>登録: <strong style={{ color: "#16a34a" }}>15名</strong></span>
              </div>
            </div>
            <div style={{ background: "#fff", border: "1px solid #e5ebe5", borderRadius: 16, padding: 20, boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
              <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#9ca3af", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>マッチング</div>
              <div style={{ fontSize: "0.82rem", color: "#6b7280", marginBottom: 12 }}>スキルレベルの近い選手をAIが提案</div>
              <div style={{ display: "flex" }}>
                {["田","鈴","佐"].map((n, i) => (
                  <div key={i} style={{ width: 34, height: 34, background: `hsl(${130 + i * 25}, 55%, 42%)`, borderRadius: "50%", border: "2px solid #fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.78rem", fontWeight: 700, color: "#fff", marginLeft: i > 0 ? -10 : 0 }}>{n}</div>
                ))}
                <div style={{ width: 34, height: 34, background: "#f3f4f6", borderRadius: "50%", border: "2px solid #fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.65rem", color: "#6b7280", marginLeft: -10 }}>+5</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
