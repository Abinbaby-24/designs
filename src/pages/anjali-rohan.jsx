import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./anjali-rohan.css";

/* ───────────── EDIT YOUR DETAILS & PHOTOS HERE ───────────── */
const BRIDE = "Anjali";
const GROOM = "Rohan";
const QUOTE = "Two Hearts, One Beautiful Journey";
const WEDDING_DATE = new Date("2027-06-14T10:30:00+05:30"); // drives the countdown
const MUHURTHAM = "10:30 AM - 11:30 AM";
const VENUE = { name: "Sree Krishna Temple", place: "Thrissur, Kerala" };

// Photos: use a file in your public folder ("/anjali-hero.jpg") or a web link.
// Leave "" to show the built-in illustration.
const HERO_PHOTO = "/public/assets/anjali.png";
const STORY_PHOTO = "/public/assets/anjali7.png";
const GALLERY_PHOTOS = ["/public/assets/anjali.png", "/public/assets/anjali3.png", "/public/assets/anjali4.png", "/public/assets/anjali5.png", "/public/assets/anjali6.png", "/public/assets/anjali2.png"];

const EVENTS = [
  { name: "Haldi", date: "June 13, 2027", time: "5:00 PM", note: "A joyful turmeric ceremony with family and close friends." },
  { name: "Wedding", date: "June 14, 2027", time: "10:30 AM", note: "The sacred muhurtham at the temple, followed by a traditional sadya." },
  { name: "Reception", date: "June 14, 2027", time: "7:00 PM", note: "An evening of dinner, music and blessings." },
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

const Couple = () => (
  <svg viewBox="0 0 600 460" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Illustration of the couple">
    <defs>
      <radialGradient id="ar-glow" cx="50%" cy="35%" r="80%">
        <stop offset="0" stopColor="#f1c97a" /><stop offset=".5" stopColor="#b4672f" /><stop offset="1" stopColor="#4a0b17" />
      </radialGradient>
    </defs>
    <rect width="600" height="460" fill="url(#ar-glow)" />
    <g fill="#e8b94f" opacity=".35"><rect x="40" y="60" width="26" height="400" rx="6" /><rect x="520" y="40" width="26" height="420" rx="6" /></g>
    <path d="M110 460c-6-110 20-190 80-200l60 10c50 20 60 110 50 190z" fill="#f4e2b8" />
    <path d="M118 330l70 130h-40z" fill="#d9a441" opacity=".7" />
    <path d="M300 460c-8-120 14-190 70-205l70 8c52 20 60 120 46 197z" fill="#b8142a" />
    <path d="M320 300c40 20 90 20 130-10" stroke="#e8b94f" strokeWidth="8" fill="none" />
    <circle cx="238" cy="196" r="46" fill="#a86a43" /><path d="M192 190c0-40 40-62 80-48 24 8 22 30 10 38-20-14-60-10-90 10z" fill="#2a1710" />
    <circle cx="352" cy="206" r="44" fill="#c58257" /><path d="M308 198c4-44 50-56 82-36 20 12 18 36 6 44-12-22-58-30-88-8z" fill="#2a1710" />
    <path d="M300 214c24 8 60 6 82-10" stroke="#fff4d6" strokeWidth="10" fill="none" strokeLinecap="round" />
    <g fill="#fff4d6"><circle cx="250" cy="262" r="9" /><circle cx="270" cy="278" r="9" /><circle cx="290" cy="294" r="9" /><circle cx="310" cy="310" r="9" /></g>
    <g fill="#c4122f"><circle cx="262" cy="270" r="6" /><circle cx="282" cy="286" r="6" /><circle cx="302" cy="302" r="6" /></g>
  </svg>
);

const IconMuhurtham = () => (<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M7 17l10-10M9 7h8v8" /></svg>);
const IconPin = () => (<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></svg>);
const IconCal = () => (<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M8 3v4M16 3v4M3 10h18M8 14h2M12 14h2M16 14h2M8 17h2M12 17h2" /></svg>);
const IconPeople = () => (<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3" /><circle cx="5.5" cy="10" r="2.2" /><circle cx="18.5" cy="10" r="2.2" /><path d="M6.5 20c0-3.5 2.5-6 5.500-6s5.500 2.500 5.500 6M1.500 19c0-2.500 1.500-4.500 4-4.500M22.500 19c0-2.500-1.500-4.500-4-4.500" /></svg>);

function Leaf({ className }) {
  return (
    <svg className={className} viewBox="0 0 200 160" aria-hidden="true">
      <path d="M10 150C20 70 80 20 190 14 180 90 120 150 10 150z" fill="#2f6a3e" />
      <path d="M10 150C60 100 110 60 190 14" stroke="#9ccf8d" strokeWidth="2" fill="none" opacity=".7" />
    </svg>
  );
}

function RsvpForm() {
  const [name, setName] = useState("");
  const [attend, setAttend] = useState("yes");
  const [guests, setGuests] = useState(1);
  const [msg, setMsg] = useState("");
  const [done, setDone] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const n = name.trim();
    setDone(attend === "yes" ? `Thank you, ${n}! We are delighted you will join us.` : `Thank you, ${n}. You will be missed and kept in our prayers.`);
  };

  if (done) return <p className="ar-thanks" role="status">{done}</p>;

  return (
    <form className="ar-form" onSubmit={submit}>
      <label>Your name<input required value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" /></label>
      <label>Will you attend?
        <select value={attend} onChange={(e) => setAttend(e.target.value)}>
          <option value="yes">Joyfully accepts</option>
          <option value="no">Regretfully declines</option>
        </select>
      </label>
      <label>Number of guests<input type="number" min="1" max="8" value={guests} onChange={(e) => setGuests(e.target.value)} /></label>
      <label className="wide">Blessings for the couple (optional)<textarea rows="3" value={msg} onChange={(e) => setMsg(e.target.value)} /></label>
      <button className="ar-btn gold wide" type="submit">Send RSVP</button>
    </form>
  );
}

export default function AnjaliRohan() {
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
    <div className="ar">
      <header className={`ar-nav${scrolled || menu ? " solid" : ""}`}>
        <a className="ar-logo" href="#ar-home" onClick={go("ar-home")} aria-label="Home">
          <span>{BRIDE[0]}</span><i /><span>{GROOM[0]}</span>
        </a>
        <nav className={menu ? "open" : ""} aria-label="Sections">
          {link("ar-home", "Home")}{link("ar-story", "Our Story")}{link("ar-details", "Wedding Details")}
          {link("ar-events", "Events")}{link("ar-gallery", "Gallery")}{link("ar-rsvp", "RSVP")}
        </nav>
        <a className="ar-cta" href="#ar-rsvp" onClick={go("ar-rsvp")}>RSVP Now <span aria-hidden="true">→</span></a>
        <button className="ar-burger" type="button" aria-label="Menu" aria-expanded={menu} onClick={() => setMenu(!menu)}><span /><span /><span /></button>
      </header>

      <section className="ar-hero" id="ar-home">
        <div className="ar-garland g1" aria-hidden="true" /><div className="ar-garland g2" aria-hidden="true" />
        <div className="ar-hero-txt">
          <p className="ar-eyebrow center">THE WEDDING OF</p>
          <h1 className="ar-names"><span className="a">{BRIDE}</span><span className="b"><em className="ar-amp">&amp;</em>{GROOM}</span></h1>
          <p className="ar-quote">“{QUOTE}”</p>
          <div className="ar-orn"><Lotus /></div>
          <p className="ar-date">{DATE_LONG.toUpperCase()}</p>
          <div className="ar-count" role="timer" aria-label="Countdown to the wedding">
            <div><b>{t.d}</b><span>DAYS</span></div>
            <div><b>{t.h}</b><span>HOURS</span></div>
            <div><b>{t.m}</b><span>MINUTES</span></div>
            <div><b>{t.s}</b><span>SECONDS</span></div>
          </div>
        </div>
        <div className="ar-hero-img">
          {HERO_PHOTO ? <img src={HERO_PHOTO} alt={`${BRIDE} and ${GROOM}`} /> : <Couple />}
        </div>
      </section>

      <section className="ar-story" id="ar-story">
        <div className="ar-story-in">
          <div className="ar-frame">
            <div className="ar-frame-in">
              {STORY_PHOTO ? <img src={STORY_PHOTO} alt={`${BRIDE} and ${GROOM}`} /> : <Couple />}
            </div>
          </div>
          <div>
            <p className="ar-eyebrow">OUR STORY</p>
            <h2 className="ar-h2">A Love Rooted<br />in Tradition</h2>
            <div className="ar-orn left"><Lotus /></div>
            <p className="ar-p">From chance conversations to a lifetime of togetherness, our journey has been filled with love, laughter and countless beautiful moments. We are excited to begin this new chapter and would be delighted to have you be a part of it.</p>
            <a className="ar-btn" href="#ar-events" onClick={go("ar-events")}>Read Our Story <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>

      <section className="ar-details" id="ar-details">
        <Leaf className="ar-leaf l" /><Leaf className="ar-leaf r" />
        <h2><span className="line" />Wedding Details<span className="line" /></h2>
        <div className="ar-det-grid">
          <div><IconMuhurtham /><p className="k">MUHURTHAM</p><p className="v">{DATE_LONG}</p><p className="s">{MUHURTHAM}</p></div>
          <div><IconPin /><p className="k">VENUE</p><p className="v">{VENUE.name}</p><p className="s">{VENUE.place}</p></div>
          <div><IconCal /><p className="k">EVENTS</p><p className="v">Haldi &nbsp;·&nbsp; Wedding &nbsp;·&nbsp; Reception</p><p className="s"><a href="#ar-events" onClick={go("ar-events")}>Complete Schedule</a></p></div>
          <div><IconPeople /><p className="k">RSVP</p><p className="v sm">Let us know if you’re joining!</p><p className="s">We can’t wait to celebrate with you.</p></div>
        </div>
      </section>

      <section className="ar-events" id="ar-events">
        <p className="ar-eyebrow center">THE CELEBRATIONS</p>
        <h2 className="ar-h2 center">Events</h2>
        <div className="ar-ev-grid">
          {EVENTS.map((e) => (
            <article key={e.name} className="ar-ev">
              <Lotus size={26} />
              <h3>{e.name}</h3>
              <p className="when">{e.date} · {e.time}</p>
              <p>{e.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ar-gallery" id="ar-gallery">
        <p className="ar-eyebrow center">MOMENTS</p>
        <h2 className="ar-h2 center">Gallery</h2>
        <div className="ar-gal-grid">
          {GALLERY_PHOTOS.map((src, i) =>
            src ? <img key={i} src={src} alt={`Gallery photo ${i + 1}`} /> : <div key={i} className={`ar-ph p${i % 3}`} role="img" aria-label={`Gallery placeholder ${i + 1}`}><Lotus size={34} /></div>
          )}
        </div>
      </section>

      <section className="ar-rsvp" id="ar-rsvp">
        <p className="ar-eyebrow center">KINDLY REPLY</p>
        <h2 className="ar-h2 center light">RSVP</h2>
        <p className="ar-sub">Please let us know by May 1, 2027</p>
        <RsvpForm />
      </section>

      <footer className="ar-foot">
        <p className="ar-names-sm">{BRIDE} &amp; {GROOM}</p>
        <p>{DATE_LONG} · {VENUE.place}</p>
      </footer>

      <Link className="ar-back" to="/#works-weddings">← Back to demos</Link>
    </div>
  );
}
