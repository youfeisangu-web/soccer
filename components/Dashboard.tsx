"use client";

const skills = [
  { label: "Passing",  value: 8.6, pct: 86, color: "var(--green-bright)" },
  { label: "Shooting", value: 6.0, pct: 60, color: "var(--green-bright)" },
  { label: "Dribbling",value: 7.0, pct: 70, color: "var(--orange)" },
  { label: "Defense",  value: 8.2, pct: 82, color: "var(--green-bright)" },
];

const ranking = [
  { rank: 1, name: "田中 健太", team: "Tokyo United", pts: 98 },
  { rank: 2, name: "鈴木 颯",   team: "Osaka FC",     pts: 94 },
  { rank: 3, name: "佐藤 蓮",   team: "Kobe Stars",   pts: 91 },
  { rank: 4, name: "中村 大翔", team: "Tokyo United", pts: 88 },
  { rank: 5, name: "高橋 悠",   team: "Yokohama SC",  pts: 85 },
];

const upcomingMatches = [
  { date: "3/15", home: "TOY", away: "US",  time: "8:00 PM" },
  { date: "3/18", home: "TOY", away: "TB",  time: "4:30 PM" },
  { date: "3/22", home: "TOY", away: "US",  time: "5:00 PM" },
];

const rankBadge: Record<number, { bg: string; color: string }> = {
  1: { bg: "#f59e0b", color: "#fff" },
  2: { bg: "rgba(255,255,255,0.18)", color: "#fff" },
  3: { bg: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)" },
};

export default function Dashboard() {
  return (
    <div style={{ padding: "28px 32px", minHeight: "100vh" }}>

      {/* Top bar */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 28 }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 900, letterSpacing: "-0.02em" }}>マイダッシュボード</h1>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{
            background: "var(--card)", border: "1px solid var(--border)",
            borderRadius: 50, padding: "8px 18px", fontSize: "0.82rem",
            color: "rgba(255,255,255,0.6)", display: "flex", gap: 8, alignItems: "center"
          }}>
            <span>🔔</span> 通知 <span style={{ background: "var(--orange)", color: "#fff", borderRadius: "50%", width: 18, height: 18, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "0.65rem", fontWeight: 700 }}>3</span>
          </div>
          <div style={{
            background: "var(--card)", border: "1px solid var(--border)",
            borderRadius: 50, padding: "8px 18px", fontSize: "0.82rem", display: "flex", gap: 10, alignItems: "center"
          }}>
            <div style={{ width: 26, height: 26, background: "var(--green)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem", fontWeight: 700 }}>田</div>
            <div>
              <div style={{ fontSize: "0.82rem", fontWeight: 700 }}>田中 健太</div>
              <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.4)" }}>Professional</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr 0.9fr", gap: 20 }}>

        {/* ===== Player Profile ===== */}
        <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 16, padding: 24 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
            <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Player Profile</span>
            <span style={{ color: "rgba(255,255,255,0.3)", cursor: "pointer" }}>···</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
            <div style={{ width: 52, height: 52, background: "var(--green)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", fontWeight: 900, flexShrink: 0 }}>田</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "1.05rem", fontWeight: 700 }}>T. Tanaka</div>
              <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)" }}>Tokyo United</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: "1.6rem", fontWeight: 900, color: "var(--orange)", lineHeight: 1 }}>8.2</div>
              <div style={{ fontSize: "0.62rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em" }}>RATING</div>
            </div>
          </div>

          {/* Stats row */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginBottom: 20 }}>
            {[["25", "試合"], ["15", "ゴール"], ["10", "アシスト"]].map(([num, lbl]) => (
              <div key={lbl} style={{ background: "rgba(34,197,94,0.07)", border: "1px solid var(--border)", borderRadius: 10, padding: "10px 8px", textAlign: "center" }}>
                <div style={{ fontSize: "1.3rem", fontWeight: 900, fontFamily: "Inter, sans-serif" }}>{num}</div>
                <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.35)" }}>{lbl}</div>
              </div>
            ))}
          </div>

          {/* Skill bars */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {skills.map((s) => (
              <div key={s.label} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.45)", width: 60, flexShrink: 0 }}>{s.label}</span>
                <div style={{ flex: 1, height: 6, background: "rgba(255,255,255,0.08)", borderRadius: 50, overflow: "hidden" }}>
                  <div style={{ width: `${s.pct}%`, height: "100%", background: s.color, borderRadius: 50, transition: "width 1s ease" }} />
                </div>
                <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "rgba(255,255,255,0.5)", width: 24, textAlign: "right", flexShrink: 0, fontFamily: "Inter, sans-serif" }}>{s.value}</span>
              </div>
            ))}
          </div>

          <button style={{ marginTop: 20, width: "100%", padding: "12px", background: "var(--green)", border: "none", borderRadius: 50, color: "#fff", fontWeight: 700, fontSize: "0.9rem", cursor: "pointer" }}>
            スコアを見る
          </button>
        </div>

        {/* ===== Ranking ===== */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 16, padding: 24, flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
              <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase" }}>ランキング</span>
              <span style={{ fontSize: "0.72rem", color: "var(--green-bright)", cursor: "pointer" }}>全て見る →</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {ranking.map((r) => (
                <div key={r.rank} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <div style={{
                    width: 22, height: 22, borderRadius: 6, flexShrink: 0,
                    background: rankBadge[r.rank]?.bg ?? "rgba(255,255,255,0.06)",
                    color: rankBadge[r.rank]?.color ?? "rgba(255,255,255,0.4)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "0.7rem", fontWeight: 700, fontFamily: "Inter, sans-serif",
                  }}>{r.rank}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: "0.85rem", fontWeight: 700 }}>{r.name}</div>
                    <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.35)" }}>{r.team}</div>
                  </div>
                  <span style={{ fontSize: "0.85rem", fontWeight: 900, color: "var(--green-bright)", fontFamily: "Inter, sans-serif" }}>{r.pts}pt</span>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming matches */}
          <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 16, padding: 24 }}>
            <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>次の試合</div>
            {upcomingMatches.map((m) => (
              <div key={m.date} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.05)", fontSize: "0.82rem" }}>
                <span style={{ color: "rgba(255,255,255,0.35)", width: 32, fontSize: "0.72rem" }}>{m.date}</span>
                <span style={{ background: "var(--green)", color: "#fff", borderRadius: 4, padding: "2px 6px", fontSize: "0.7rem", fontWeight: 700 }}>{m.home}</span>
                <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.7rem" }}>vs</span>
                <span style={{ background: "rgba(255,255,255,0.1)", color: "#fff", borderRadius: 4, padding: "2px 6px", fontSize: "0.7rem", fontWeight: 700 }}>{m.away}</span>
                <span style={{ marginLeft: "auto", color: "rgba(255,255,255,0.45)", fontSize: "0.75rem" }}>{m.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ===== AI分析 + チーム管理 ===== */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 16, padding: 24 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
              <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase" }}>AI 戦術提案</span>
              <span style={{ fontSize: "1rem" }}>🤖</span>
            </div>
            <ul style={{ display: "flex", flexDirection: "column", gap: 10, listStyle: "none", padding: 0, margin: 0 }}>
              {[
                "対戦相手の弱点を突くスタッピングを提案",
                "チーム全体のケミストリー向上のため技術を駆使",
                "AIチームが最適な戦術を提案中",
              ].map((txt, i) => (
                <li key={i} style={{ display: "flex", gap: 8, fontSize: "0.78rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>
                  <span style={{ color: "var(--green-bright)", flexShrink: 0, marginTop: 2 }}>•</span>
                  {txt}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 16, padding: 24 }}>
            <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>チーム管理</div>
            {/* Mini pitch */}
            <div style={{
              background: "rgba(22,163,74,0.1)",
              border: "1px solid rgba(34,197,94,0.15)",
              borderRadius: 10, height: 100,
              position: "relative", overflow: "hidden", marginBottom: 14,
            }}>
              <div style={{ position: "absolute", width: 60, height: 60, border: "1px solid rgba(34,197,94,0.2)", borderRadius: "50%", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
              <div style={{ position: "absolute", width: "100%", height: 1, background: "rgba(34,197,94,0.1)", top: "50%" }} />
              {[["20%","30%"],["60%","20%"],["60%","70%"],["35%","50%"],["75%","50%"]].map(([l,t],i) => (
                <div key={i} style={{ position: "absolute", left: l, top: t, width: 10, height: 10, background: "var(--green-bright)", borderRadius: "50%", transform: "translate(-50%,-50%)" }} />
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.78rem", color: "rgba(255,255,255,0.45)" }}>
              <span>メンバー: <strong style={{ color: "#fff" }}>18名</strong></span>
              <span>登録: <strong style={{ color: "var(--green-bright)" }}>15名</strong></span>
            </div>
          </div>

          <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 16, padding: 24 }}>
            <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>マッチング</div>
            <div style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.55)", marginBottom: 14 }}>スキルレベルの近い選手を AI が提案</div>
            <div style={{ display: "flex", gap: -8 }}>
              {["田", "鈴", "佐"].map((n, i) => (
                <div key={i} style={{ width: 32, height: 32, background: `hsl(${140 + i * 30}, 60%, 35%)`, borderRadius: "50%", border: "2px solid var(--card)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 700, marginLeft: i > 0 ? -8 : 0 }}>{n}</div>
              ))}
              <div style={{ width: 32, height: 32, background: "rgba(255,255,255,0.08)", borderRadius: "50%", border: "2px solid var(--card)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.65rem", color: "rgba(255,255,255,0.5)", marginLeft: -8 }}>+5</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
