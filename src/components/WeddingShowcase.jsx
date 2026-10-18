import { useState } from "react";
import "./WeddingShowcase.css";

const TINTS = [
  ["#f6f1e6", "#d8c595"], ["#eef2ec", "#a9bba4"], ["#f8f5ef", "#c9b27a"], ["#edf1f6", "#a9b8c8"],
  ["#f6f1e6", "#bfa86e"], ["#f1f4ee", "#9fb39a"], ["#faf7f1", "#d4c08a"], ["#eef1f5", "#b4c0cc"],
];

const goTo = (id) => (e) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

function Defs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs>
        <symbol id="heart" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 5 6.3 5c2 0 3.7 1.1 4.7 2.8h2C14 6.1 15.7 5 17.7 5 21 5 23.1 8.4 21.6 11.8 19.5 16.4 12 21 12 21z" /></symbol>
        <symbol id="cross" viewBox="0 0 24 24"><path fill="currentColor" d="M10.5 2h3v6.5H20v3h-6.5V22h-3V11.5H4v-3h6.5z" /></symbol>
        <symbol id="bloom" viewBox="0 0 100 100">
          <g fill="currentColor"><circle cx="50" cy="26" r="17" /><circle cx="74" cy="44" r="17" /><circle cx="65" cy="72" r="17" /><circle cx="35" cy="72" r="17" /><circle cx="26" cy="44" r="17" /></g>
          <circle cx="50" cy="50" r="11" fill="#fff" opacity=".55" />
        </symbol>
        <symbol id="couple" viewBox="0 0 400 300">
          <path d="M0 300V230c60-10 110-30 150-30s90 20 140 18 80-12 110-22v104z" fill="#dfe6dc" opacity=".8" />
          <path d="M135 300c-6-70 6-120 38-130l30 10c26 12 34 60 28 120z" fill="#fff" stroke="#e3dccb" />
          <path d="M215 300c-4-80 4-130 40-140l30 8c30 12 36 70 30 132z" fill="#cdb7a1" />
          <circle cx="176" cy="130" r="30" fill="#e9c4b0" /><path d="M146 126c2-28 28-42 52-32 14 6 14 20 6 26-14-8-30-4-38 14z" fill="#6b4a3e" />
          <circle cx="248" cy="116" r="30" fill="#e2b99f" /><path d="M220 112c4-30 42-40 60-18 4 6-2 12-6 10-14-12-38-8-44 16z" fill="#4a3329" />
          <g fill="#d8c595">
            <use href="#bloom" x="150" y="215" width="44" height="44" />
            <use href="#bloom" x="186" y="228" width="38" height="38" style={{ color: "#f1e8d2" }} />
            <use href="#bloom" x="124" y="236" width="34" height="34" style={{ color: "#f1e8d2" }} />
          </g>
        </symbol>
        <symbol id="sprig" viewBox="0 0 60 120">
          <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
            <path d="M30 118C28 80 32 40 30 6" />
            <path d="M30 90c-12-4-18-12-20-22 12 0 18 8 20 22zM30 70c12-4 18-12 20-22-12 0-18 8-20 22zM30 48c-10-4-14-10-16-18 10 0 14 6 16 18zM30 30c9-3 13-9 14-16-9 0-13 6-14 16z" />
          </g>
        </symbol>
        <symbol id="mini" viewBox="0 0 200 130">
          <rect width="200" height="130" fill="#fff" /><rect width="200" height="62" fill="#eef2f6" />
          <path d="M0 50l30-22 24 16 28-30 34 32 30-18 54 28v6H0z" fill="#b8c2cc" opacity=".6" />
          <circle cx="128" cy="40" r="11" fill="#e9c4b0" /><circle cx="146" cy="38" r="11" fill="#e2b99f" />
          <path d="M112 62c0-18 8-24 18-24s18 6 18 24zM134 62c0-18 8-24 18-24s16 6 16 24z" fill="#fff" stroke="#e3dccb" />
          <text x="14" y="30" fontFamily="Georgia,serif" fontSize="15" fill="#2a2a2e">Anna &amp;</text>
          <text x="14" y="48" fontFamily="Georgia,serif" fontSize="15" fill="#2a2a2e">George</text>
          <text x="14" y="58" fontFamily="sans-serif" fontSize="5" fill="#8f7036" letterSpacing="1">JUNE 12, 2027</text>
          <rect x="14" y="74" width="50" height="36" rx="3" fill="#f6f1e6" />
          <rect x="76" y="78" width="60" height="5" rx="2" fill="#2a2a2e" opacity=".75" />
          <rect x="76" y="90" width="100" height="3" rx="1.5" fill="#d9d2c4" /><rect x="76" y="98" width="84" height="3" rx="1.5" fill="#d9d2c4" />
          <rect x="76" y="110" width="30" height="9" rx="4" fill="#8f7036" />
        </symbol>
      </defs>
    </svg>
  );
}

function Thumb({ gradient, soon }) {
  return (
    <div className="sc-thumb" style={{ background: gradient }}>
      <div className="sc-mock">
        <div className="sc-bar"><i /><i /><i /></div>
        <svg viewBox="0 0 200 130" aria-hidden="true"><use href="#mini" /></svg>
      </div>
      {soon && <div className="sc-soon">Demo coming soon</div>}
    </div>
  );
}

function RsvpForm() {
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState("");
  const [name, setName] = useState("");
  const [attend, setAttend] = useState("yes");
  const [guests, setGuests] = useState(1);

  const submit = (e) => {
    e.preventDefault();
    const n = name.trim();
    setDone(attend === "yes" ? `Thank you, ${n}! We can’t wait to celebrate with you.` : `Thank you, ${n}. We’ll miss you dearly.`);
    setOpen(false);
  };

  return (
    <>
      {!done && (
        <button className="btn" type="button" aria-expanded={open} onClick={() => setOpen(!open)}>RSVP</button>
      )}
      <form className={open ? "open" : ""} onSubmit={submit}>
        <label>Your name<input required autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} /></label>
        <label>Will you attend?
          <select value={attend} onChange={(e) => setAttend(e.target.value)}>
            <option value="yes">Joyfully accepts</option>
            <option value="no">Regretfully declines</option>
          </select>
        </label>
        <label>Number of guests<input type="number" min="1" max="6" value={guests} onChange={(e) => setGuests(e.target.value)} /></label>
        <button className="btn" type="submit">Send reply</button>
      </form>
      {done && <p className="thanks" role="status" style={{ display: "block" }}>{done}</p>}
    </>
  );
}

function Demo({ onBack }) {
  return (
    <div className="ws-demo" tabIndex={-1}>
      <button className="back" type="button" onClick={onBack}>← Back to demos <span className="demo-tag">Demo site</span></button>

      <nav aria-label="Sections">
        <a href="#ws-top" onClick={goTo("ws-top")}>Our Story</a>
        <a href="#ws-details" onClick={goTo("ws-details")}>Wedding Details</a>
        <a href="#ws-rsvp" onClick={goTo("ws-rsvp")}>RSVP</a>
        <a href="#ws-gallery" onClick={goTo("ws-gallery")}>Gallery</a>
      </nav>

      <header className="hero" id="ws-top">
        <svg className="sprig" style={{ left: 8, top: 30, width: 56, height: 110, color: "var(--rose)" }}><use href="#sprig" /></svg>
        <div className="txt">
          <h1>Anna &amp;<br />George</h1>
          <div className="rule"><svg width="16" height="16" aria-hidden="true"><use href="#cross" /></svg></div>
          <p className="date">JUNE 12, 2027</p>
          <p style={{ margin: "12px 0 0", fontFamily: "var(--serif)", fontSize: "1.2rem", fontStyle: "italic", color: "var(--muted)" }}>Join us for our Holy Matrimony</p>
        </div>
        <div className="art" role="img" aria-label="Anna and George beside a lake with flowers">
          <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="ws-sky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#eaf0f6" /><stop offset=".6" stopColor="#fbfaf7" /><stop offset="1" stopColor="#efeae0" />
              </linearGradient>
            </defs>
            <rect width="400" height="300" fill="url(#ws-sky)" />
            <path d="M0 160l70-60 50 40 60-70 80 80 60-40 80 60v130H0z" fill="#b8c2cc" opacity=".55" />
            <rect y="190" width="400" height="110" fill="#dfe6ec" opacity=".7" />
            <use href="#couple" width="400" height="300" />
            <g style={{ color: "#e6d3a8" }}>
              <use href="#bloom" x="330" y="30" width="60" height="60" />
              <use href="#bloom" x="350" y="90" width="54" height="54" style={{ color: "#fff" }} />
              <use href="#bloom" x="320" y="140" width="60" height="60" />
              <use href="#bloom" x="355" y="190" width="50" height="50" style={{ color: "#fff" }} />
            </g>
          </svg>
        </div>
      </header>

      <section className="wrap" style={{ paddingBottom: 40 }}>
        <div className="story">
          <div className="frame">
            <svg viewBox="0 0 400 300" role="img" aria-label="The couple">
              <rect width="400" height="300" fill="#f6f1e6" />
              <path d="M0 200c80-40 160-30 400-60v160H0z" fill="#d5dfd2" opacity=".7" />
              <use href="#couple" width="400" height="300" />
            </svg>
          </div>
          <div className="t">
            <h2>Our Story</h2>
            <div className="rule"><svg width="12" height="12" aria-hidden="true"><use href="#heart" /></svg></div>
            <p>We met on a rainy afternoon in a tiny bookshop, reaching for the same copy of the same novel.</p>
            <p>Years later, we’re so excited to celebrate our love with you.</p>
            <p style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "1.2rem", color: "var(--ink)" }}>“Love is patient, love is kind.” — 1 Corinthians 13:4</p>
          </div>
        </div>
      </section>

      <section className="alt" id="ws-details">
        <div className="wrap">
          <h2>Wedding Details</h2>
          <div className="details">
            <div>
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M8 3v4M16 3v4M3 10h18" /></svg>
              <strong>June 12, 2027</strong><span>Holy Matrimony, 4:00 PM</span>
            </div>
            <div>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
              <strong>St. Mary’s Church</strong><span>Thodupuzha, Kerala</span>
            </div>
            <div>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v18M12 8c-4 0-6-2-6-5 4 0 6 2 6 5zM12 8c4 0 6-2 6-5-4 0-6 2-6 5zM12 15c-4 0-6-2-6-5 4 0 6 2 6 5zM12 15c4 0 6-2 6-5-4 0-6 2-6 5z" /></svg>
              <strong>Reception to follow</strong><span>Dinner &amp; dancing</span>
            </div>
          </div>
        </div>
      </section>

      <section id="ws-rsvp">
        <div className="wrap">
          <h2>RSVP</h2>
          <div className="rule c"><svg width="12" height="12" aria-hidden="true"><use href="#heart" /></svg></div>
          <p className="sub">Kindly reply by May 1, 2027</p>
          <RsvpForm />
        </div>
      </section>

      <section className="alt" id="ws-gallery">
        <div className="wrap">
          <h2>Gallery</h2>
          <div className="grid">
            {TINTS.map((t, i) => (
              <svg key={i} viewBox="0 0 100 100" role="img" aria-label={`Gallery photo placeholder ${i + 1}`}>
                <rect width="100" height="100" fill={t[0]} />
                <use href="#bloom" x={10 + ((i * 4) % 30)} y={14 + ((i * 7) % 24)} width="46" height="46" style={{ color: t[1] }} />
                <use href="#bloom" x={46 - ((i * 3) % 18)} y={44 + ((i * 5) % 20)} width="38" height="38" style={{ color: "#fff", opacity: 0.8 }} />
              </svg>
            ))}
          </div>
        </div>
      </section>

      <footer>Anna &amp; George · June 12, 2027</footer>
    </div>
  );
}

export default function WeddingShowcase() {
  const [view, setView] = useState("cards"); // "cards" | "demo"
  const [tab, setTab] = useState("weddings"); // "weddings" | "companies"

  const open = () => { setView("demo"); window.scrollTo(0, 0); };
  const back = () => { setView("cards"); window.scrollTo(0, 0); };

  return (
    <div className="ws">
      <Defs />
      {view === "demo" ? (
        <Demo onBack={back} />
      ) : (
        <div className="ws-showcase">
          <div className="sc-main">
            <div className="sc-tabs" role="tablist">
              <button role="tab" aria-selected={tab === "weddings"} onClick={() => setTab("weddings")}>Weddings &amp; Events</button>
              <button role="tab" aria-selected={tab === "companies"} onClick={() => setTab("companies")}>Companies &amp; Brands</button>
            </div>

            {tab === "weddings" ? (
              <div role="tabpanel">
                <div className="sc-grid">
                  <div className="sc-card">
                    <Thumb gradient="linear-gradient(135deg,#cf5479,#7d1f3f)" soon />
                    <div className="sc-body"><h3>Anjali &amp; Rohan</h3><p>Wedding site with RSVP, event schedule and photo gallery.</p></div>
                  </div>
                  <button className="sc-card" type="button" onClick={open} aria-label="Open demo: Anna and George">
                    <Thumb gradient="linear-gradient(135deg,#e5bd62,#b5552f)" />
                    <div className="sc-body"><h3>Anna &amp; George</h3><p>Bilingual invitation page with venue map and guest wishes.</p><span>View demo</span></div>
                  </button>
                  <div className="sc-card">
                    <Thumb gradient="linear-gradient(135deg,#f0a3b8,#8e2f5a)" soon />
                    <div className="sc-body"><h3>Engagement Celebration</h3><p>One-page event site with countdown and live updates.</p></div>
                  </div>
                </div>
                <button className="sc-btn" type="button" onClick={open}>Explore wedding themes</button>
              </div>
            ) : (
              <div role="tabpanel"><div className="sc-empty">Company and brand demos will appear here.</div></div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
