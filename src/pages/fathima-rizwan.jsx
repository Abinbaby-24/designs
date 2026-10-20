import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./fathima-rizwan.css";

/* ───────────── EDIT YOUR DETAILS & PHOTOS HERE ───────────── */
const BRIDE = "Fathima";
const GROOM = "Rizwan";
const TAGLINE = ["Two souls, one journey", "in His blessings"];
const WEDDING_DATE = new Date("2027-06-14T10:00:00+05:30"); // drives the countdown
const CITY = "Kozhikode, Kerala";
const NIKAH = "10:00 AM - 11:00 AM";
const WALIMA = "12:30 PM - 03:30 PM";
const VENUE = { name: "Grand Pearl Convention Centre", place: "Kozhikode, Kerala" };

// Photos: use a file in your public folder ("/fathima-hero.jpg") or a web link.
// Leave "" to show the built-in illustration.
const HERO_PHOTO = "/assets/fathima.png";
const STORY_PHOTO = "/assets/fathima2.png";
const GALLERY_PHOTOS = ["/assets/fathima2.png", "/assets/fathima2.png", "/assets/fathima2.png", "/assets/fathima2.png", "", ""];

const EVENTS = [
  { name: "Mehendi", date: "June 13, 2027", time: "6:00 PM", note: "An evening of henna, laughter and music with family." },
  { name: "Nikah", date: "June 14, 2027", time: "10:00 AM", note: "The solemnisation of our nikah, in the presence of loved ones." },
  { name: "Walima", date: "June 14, 2027", time: "12:30 PM", note: "A blessed feast to celebrate with family and friends." },
];
/* ─────────────────────────────────────────────────────────── */

const fmt = (d, o) => d.toLocaleDateString("en-US", { timeZone: "Asia/Kolkata", ...o });
const DATE_LONG = fmt(WEDDING_DATE, { month: "long", day: "numeric", year: "numeric" });

const go = (id) => (e) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

function useCountdown(target) {
  const calc = () => {
    const s = Math.max(0, Math.floor((target - Date.now()) / 1000));
    return { d: Math.floor(s / 86400), h: Math.floor((s % 86400) / 3600), m: Math.floor((s % 3600) / 60), s: s % 60 };
  };
  const [t, setT] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []); // eslint-disable-line
  return t;
}

const Lotus = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
    <path d="M12 4c2 3 2 7 0 10-2-3-2-7 0-10zM12 14c-3 0-6-2-8-6 3 0 6 1 8 6zM12 14c3 0 6-2 8-6-3 0-6 1-8 6zM3 14c3 0 6 2 9 6 3-4 6-6 9-6" />
  </svg>
);

const Crescent = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" aria-hidden="true">
    <path d="M40 8a24 24 0 1 0 0 48 19 19 0 1 1 0-48z" fill="#c9a96a" />
    <path d="M47 22l2.200 4.800 5.200.6-3.900 3.500 1.100 5.100-4.600-2.600-4.600 2.600 1.100-5.100-3.900-3.500 5.200-.6z" fill="#c9a96a" />
  </svg>
);

const Branch = ({ className }) => (
  <svg className={className} viewBox="0 0 120 220" aria-hidden="true">
    <path d="M60 215C50 150 70 90 58 8" stroke="#6f8f6a" strokeWidth="2" fill="none" />
    <g fill="#8aa884" opacity=".85">
      <ellipse cx="42" cy="170" rx="22" ry="8" transform="rotate(-35 42 170)" /><ellipse cx="78" cy="150" rx="22" ry="8" transform="rotate(35 78 150)" />
      <ellipse cx="40" cy="120" rx="22" ry="8" transform="rotate(-35 40 120)" /><ellipse cx="80" cy="96" rx="22" ry="8" transform="rotate(35 80 96)" />
      <ellipse cx="42" cy="70" rx="20" ry="7" transform="rotate(-35 42 70)" /><ellipse cx="76" cy="44" rx="18" ry="7" transform="rotate(35 76 44)" />
    </g>
    <circle cx="34" cy="196" r="8" fill="#fff" stroke="#e5d3a4" /><circle cx="34" cy="196" r="3" fill="#d9b45c" />
  </svg>
);

const Couple = () => (
  <svg viewBox="0 0 600 460" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Illustration of the couple">
    <defs>
      <linearGradient id="fr-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fdf3df" /><stop offset="1" stopColor="#f0d9b5" /></linearGradient>
    </defs>
    <rect width="600" height="460" fill="url(#fr-sky)" />
    <g fill="#fff8ea" opacity=".9"><path d="M60 330V190h30v140zM510 330V170h30v160z" /><path d="M170 330v-90a130 130 0 0 1 260 0v90z" /><circle cx="300" cy="120" r="10" /></g>
    <g fill="#e9d6ae" opacity=".7"><path d="M75 190l15-30 15 30zM525 170l15-30 15 30z" /></g>
    <path d="M130 460c-6-110 20-190 80-200l60 10c50 20 60 110 50 190z" fill="#f4e6c8" stroke="#d9bd7a" />
    <path d="M300 460c-8-120 14-190 70-205l70 8c52 20 60 120 46 197z" fill="#f8efdc" stroke="#d9bd7a" />
    <path d="M330 250c20-30 90-30 120 6 10 40-10 120-20 150-30-80-70-120-100-156z" fill="#fffaf0" opacity=".85" />
    <circle cx="250" cy="196" r="44" fill="#b98259" /><path d="M208 182c6-30 40-34 76-22 12 4 10 20 0 20-30-10-56-6-76 2z" fill="#f3e3c2" stroke="#d9bd7a" />
    <circle cx="368" cy="206" r="42" fill="#d29b72" />
    <g fill="#fff"><circle cx="400" cy="440" r="14" /><circle cx="428" cy="430" r="12" /><circle cx="372" cy="436" r="12" /></g>
  </svg>
);

const IconCal = () => (<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M8 3v4M16 3v4M3 10h18M8 14h2M12 14h2M16 14h2M8 17h2M12 17h2" /></svg>);
const IconFood = () => (<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3v7a2 2 0 0 0 2 2v9M11 3v7a2 2 0 0 1-2 2M7 3v6M11 3v6M17 21V3c-2 1-3 4-3 8h3" /></svg>);
const IconPin = () => (<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></svg>);
const IconGift = () => (<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="8" width="18" height="4" rx="1" /><path d="M5 12v9h14v-9M12 8v13M12 8c-2-4-6-4-6-1.500S10 8 12 8zM12 8c2-4 6-4 6-1.500S14 8 12 8z" /></svg>);

const ArchIcon = ({ children }) => <div className="fr-archic">{children}</div>;

function RsvpForm() {
  const [name, setName] = useState("");
  const [attend, setAttend] = useState("yes");
  const [guests, setGuests] = useState(1);
  const [msg, setMsg] = useState("");
  const [done, setDone] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const n = name.trim();
    setDone(attend === "yes" ? `JazakAllah Khair, ${n}! We are delighted you will join us.` : `JazakAllah Khair, ${n}. You will be in our duas.`);
  };

  if (done) return <p className="fr-thanks" role="status">{done}</p>;

  return (
    <form className="fr-form" onSubmit={submit}>
      <label>Your name<input required value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" /></label>
      <label>Will you attend?
        <select value={attend} onChange={(e) => setAttend(e.target.value)}>
          <option value="yes">Joyfully accepts</option>
          <option value="no">Regretfully declines</option>
        </select>
      </label>
      <label>Number of guests<input type="number" min="1" max="8" value={guests} onChange={(e) => setGuests(e.target.value)} /></label>
      <label className="wide">Duas for the couple (optional)<textarea rows="3" value={msg} onChange={(e) => setMsg(e.target.value)} /></label>
      <button className="fr-btn gold wide" type="submit">Send RSVP</button>
    </form>
  );
}

export default function FathimaRizwan() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const t = useCountdown(WEDDING_DATE);

  useEffect(() => {
    window.scrollTo(0, 0);
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const link = (id, label) => (
    <a href={`#${id}`} onClick={(e) => { go(id)(e); setMenu(false); }}>{label}</a>
  );

  return (
    <div className="fr">
      <header className={`fr-nav${scrolled || menu ? " solid" : ""}`}>
        <a className="fr-logo" href="#fr-home" onClick={go("fr-home")} aria-label="Home">
          <span className="mono"><b>{BRIDE[0]}</b><i /><b>{GROOM[0]}</b></span>
          <small>OUR WEDDING</small>
        </a>
        <nav className={menu ? "open" : ""} aria-label="Sections">
          {link("fr-home", "Home")}{link("fr-story", "Our Story")}{link("fr-details", "Wedding Details")}
          {link("fr-events", "Events")}{link("fr-gallery", "Gallery")}{link("fr-rsvp", "RSVP")}
        </nav>
        <a className="fr-cta" href="#fr-rsvp" onClick={go("fr-rsvp")}>RSVP Now <span aria-hidden="true">→</span></a>
        <button className="fr-burger" type="button" aria-label="Menu" aria-expanded={menu} onClick={() => setMenu(!menu)}><span /><span /><span /></button>
      </header>

      <section className="fr-hero" id="fr-home">
        <Branch className="fr-branch tl" />
        <div className="fr-hero-img">
          {HERO_PHOTO ? <img src={HERO_PHOTO} alt={`${BRIDE} and ${GROOM}`} /> : <Couple />}
        </div>
        <div className="fr-hero-txt">
          <div className="fr-bism" aria-label="Bismillah ir-Rahman ir-Rahim">
            <span lang="ar" dir="rtl">بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</span>
            <svg width="150" height="14" viewBox="0 0 150 14" aria-hidden="true"><path d="M0 9c30-9 62 6 92 0s40-6 58-2" fill="none" stroke="currentColor" strokeWidth="1.2" /></svg>
          </div>
          <p className="fr-eyebrow">THE WEDDING OF</p>
          <h1 className="fr-names"><span>{BRIDE}<em>&amp;</em></span><span>{GROOM}</span></h1>
          <div className="fr-orn"><Lotus size={20} /></div>
          <p className="fr-tag">{TAGLINE[0].toUpperCase()}<br />{TAGLINE[1].toUpperCase()}</p>
          <div className="fr-meta">
            <span><IconCal />{DATE_LONG.toUpperCase()}</span><i />
            <span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.500" fill="#fff" /></svg>{CITY.split(",")[0].toUpperCase()}, KERALA</span>
          </div>
          <div className="fr-count" role="timer" aria-label="Countdown to the wedding">
            <span className="sp" aria-hidden="true">✦</span>
            <div><b>{t.d}</b><small>DAYS</small></div>
            <div><b>{t.h}</b><small>HOURS</small></div>
            <div><b>{t.m}</b><small>MINUTES</small></div>
            <div><b>{t.s}</b><small>SECONDS</small></div>
            <span className="sp" aria-hidden="true">✦</span>
          </div>
          <div className="fr-btns">
            <a className="fr-btn" href="#fr-details" onClick={go("fr-details")}>View Wedding Details <span aria-hidden="true">→</span></a>
            <a className="fr-btn ghost" href="#fr-story" onClick={go("fr-story")}>Our Story <span className="play" aria-hidden="true">▶</span></a>
          </div>
        </div>
      </section>

      <section className="fr-story" id="fr-story">
        <Branch className="fr-branch bl" />
        <div className="fr-story-in">
          <div className="fr-arch-wrap">
            <div className="fr-arch">
              {STORY_PHOTO ? <img src={STORY_PHOTO} alt={`${BRIDE} and ${GROOM}`} /> : <Couple />}
            </div>
          </div>
          <div>
            <p className="fr-eyebrow line">OUR STORY</p>
            <h2 className="fr-h2">A Bond<br />Written by Him</h2>
            <div className="fr-orn left"><Lotus /></div>
            <p className="fr-p">What began as duas, turned into conversations, families, and a journey filled with His blessings. With hearts full of gratitude, we are excited to begin this new chapter together.</p>
            <a className="fr-btn small" href="#fr-events" onClick={go("fr-events")}>Read Our Story <span aria-hidden="true">→</span></a>
          </div>
          <aside className="fr-qcard">
            <Crescent />
            <p className="q">“And We created you in pairs”</p>
            <span className="dot" aria-hidden="true" />
            <p className="ref">QUR’AN 78:8</p>
          </aside>
        </div>
      </section>

      <section className="fr-details" id="fr-details">
        <div className="fr-det-grid">
          <div><ArchIcon><IconCal /></ArchIcon><p className="k">NIKAH</p><p className="v">{DATE_LONG}</p><p className="v">{NIKAH}</p></div>
          <div><ArchIcon><IconFood /></ArchIcon><p className="k">WALIMA</p><p className="v">{DATE_LONG}</p><p className="v">{WALIMA}</p></div>
          <div><ArchIcon><IconPin /></ArchIcon><p className="k">VENUE</p><p className="v sm">{VENUE.name}</p><p className="v sm">{VENUE.place}</p></div>
          <div><ArchIcon><IconGift /></ArchIcon><p className="k">GIFTS</p><p className="v sm">Your duas and presence</p><p className="v sm">mean the world to us.</p></div>
        </div>
      </section>

      <section className="fr-events" id="fr-events">
        <p className="fr-eyebrow center">THE CELEBRATIONS</p>
        <h2 className="fr-h2 center">Events</h2>
        <div className="fr-ev-grid">
          {EVENTS.map((e) => (
            <article key={e.name} className="fr-ev">
              <Lotus size={26} />
              <h3>{e.name}</h3>
              <p className="when">{e.date} · {e.time}</p>
              <p>{e.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="fr-gallery" id="fr-gallery">
        <p className="fr-eyebrow center">MOMENTS</p>
        <h2 className="fr-h2 center">Gallery</h2>
        <div className="fr-gal-grid">
          {GALLERY_PHOTOS.map((src, i) =>
            src ? <img key={i} src={src} alt={`Gallery photo ${i + 1}`} /> : <div key={i} className={`fr-ph p${i % 3}`} role="img" aria-label={`Gallery placeholder ${i + 1}`}><Lotus size={34} /></div>
          )}
        </div>
      </section>

      <section className="fr-rsvp" id="fr-rsvp">
        <p className="fr-eyebrow center gold">KINDLY REPLY</p>
        <h2 className="fr-h2 center light">RSVP</h2>
        <p className="fr-sub">Please let us know by May 1, 2027</p>
        <RsvpForm />
      </section>

      <footer className="fr-foot">
        <p className="fr-names-sm">{BRIDE} &amp; {GROOM}</p>
        <p>{DATE_LONG} · {VENUE.place}</p>
      </footer>

      <Link className="fr-back" to="/#works-weddings">← Back to demos</Link>
    </div>
  );
}
