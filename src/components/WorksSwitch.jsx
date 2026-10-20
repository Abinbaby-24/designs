import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./WorksSwitch.css";

// ── CARD PHOTOS ── change a link here to replace a card's photo.
// Files in your project's `public` folder are linked WITHOUT "public" in the path,
// e.g. public/assets/anna.png  →  "/assets/anna.png".
// You can also use a web link ("https://..."). Leave "" to show the gradient instead.
const PHOTOS = {
  anjaliRohan: "/assets/anjali.jpg",
  annaGeorge: "/assets/anna.jpg",
  fathimaRizwan: "/assets/fathima.png",
  rose: "/assets/rose.png",
  landingPage: "",
  customWebApp: "",
};

// ── ABOUT VIDEOS ── one video per tab (they autoplay muted and loop, like your old About section).
// Put the video files in `public/assets`, then set the path here (WITHOUT "public"),
// e.g. public/assets/man.mp4  →  "/assets/man.mp4".
// `label` is the screen-reader description. `poster` is an optional preview image.
// Leave `src` as "" to show a placeholder until the video is ready.
const VIDEOS = {
  weddings: { src: "/assets/about-weddings.mp4", poster: "", label: "Wedding invitation website preview" },
  companies: { src: "/assets/man.mp4", poster: "", label: "A man writing on glass" },
};

// About text (shared by both tabs, taken from your About.jsx)
const ABOUT = {
  kicker: "Why EMERALD DESIGNS",
  text: "Emerald is a web development brand focused on creating clean, modern digital experiences. Every project starts with understanding your goals and ends with a website built to work across devices.",
  points: [
    "Responsive on mobile, tablet, and desktop",
    "Modern, brand-focused visual design",
    "Performance and usability in mind",
    "Clear communication from start to launch",
  ],
};

// Used for the pricing images: files in public/assets/ (ring.png, laptop.png)
const base = import.meta.env.BASE_URL;

// Replace these with your real projects and services.
// Items with `to` open an internal page (React Router); others use `href`.
const WORKS = {
  weddings: {
    cta: { label: "Make your wedding invitation memorable", href: "#contact" },
    items: [
      { title: "Anjali & Rohan", text: "Traditional Kerala wedding site with countdown, events and RSVP.", image: PHOTOS.anjaliRohan, fallback: "linear-gradient(135deg,#c9577b,#7a1f3d)", to: "/anjali-rohan" },
      { title: "Anna & George", text: "Elegant white-theme Christian wedding invitation with gallery.", image: PHOTOS.annaGeorge, fallback: "linear-gradient(135deg,#e6c06b,#b5543b)", to: "/anna-george" },
      { title: "Fathima & Rizwan", text: "Graceful nikah invitation with countdown, schedule and RSVP.", image: PHOTOS.fathimaRizwan, fallback: "linear-gradient(135deg,#2c5a41,#16301f)", to: "/fathima-rizwan" },
    ],
    services: {
      title: "Wedding & event services",
      sub: "Everything your guests need, in one beautiful invitation site.",
      items: [
        { icon: "site", title: "Wedding Websites", text: "A custom one-page site with your story, schedule and photos." },
        { icon: "mail", title: "Digital Invitations", text: "Save-the-dates and invitations that share in one tap." },
        { icon: "rsvp", title: "RSVP & Guest List", text: "Collect replies and guest counts without chasing anyone." },
        { icon: "gallery", title: "Photo Galleries", text: "Show off your pre-wedding shoot and the big day." },
        { icon: "map", title: "Venue Map & Schedule", text: "Directions and timings for every ceremony." },
        { icon: "video", title: "Video Invites", text: "Short animated invitation videos for WhatsApp and social." },
      ],
    },
    pricing: {
      amount: 4999, name: "Wedding Website", img: "ring",
      sub: "A simple one-time package for your wedding website.",
      tag: "A beautiful, shareable invitation website for your big day.",
      features: [
        "Custom-designed wedding website",
        "Countdown to the big day",
        "Schedule for every ceremony and event",
        "RSVP form with replies on WhatsApp",
        "Photo gallery for your pre-wedding shoot",
        "Venue map & directions",
        "Share in one tap on WhatsApp & social",
        "2 rounds of revisions",
      ],
    },
  },
  companies: {
    cta: { label: "Explore business themes", href: "#pricing" },
    items: [
      { title: "Rose Beauty Parlour", text: "A Proffesional beauty salon.", image: PHOTOS.rose, fallback: "linear-gradient(135deg,#4a7bb5,#14233b)", href: "https://www.rosebeautyparlour.online/" },
    ],/* { title: "Star Industries", text: "Focused page built to turn visitors into enquiries.", image: PHOTOS.landingPage, fallback: "linear-gradient(135deg,#7fb4d6,#2a4a73)", href: "#" },
      { title: "Green House Appliances", text: "Dashboard and workflow tool shaped around the team.", image: PHOTOS.customWebApp, fallback: "linear-gradient(135deg,#9aa8bd,#1c2f4d)", href: "#" },
    ],*/
    services: {
      title: "Business & brand services",
      sub: "Websites and tools that help your company grow.",
      items: [
        { icon: "site", title: "Business Websites", text: "Fast, professional sites that build trust." },
        { icon: "target", title: "Landing Pages", text: "Focused pages built to turn visitors into enquiries." },
        { icon: "brand", title: "Logo & Branding", text: "A consistent look across your site and social." },
        { icon: "search", title: "SEO & Speed", text: "Get found on Google, and load quickly on phones." },
        { icon: "app", title: "Custom Web Apps", text: "Dashboards and tools shaped around your team." },
        { icon: "support", title: "Maintenance & Support", text: "Updates, fixes and hosting help when you need it." },
      ],
    },
    pricing: {
      amount: 9999, name: "Company Website", img: "laptop",
      sub: "A simple one-time package for your business website.",
      tag: "A full-featured website or web app for ambitious brands.",
      features: [
        "Up to 12 pages, fully custom UI",
        "Advanced online booking system",
        "Online catalog or e-commerce setup",
        "Google Analytics & Search Console",
        "Advanced SEO & schema markup",
        "30 days of free post-launch support",
        "Priority support & 3 rounds of revisions",
      ],
    },
  },
};

const KEYS = ["weddings", "companies"];

const ICONS = {
  site: <><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M3 9h18M8 21h8M12 18v3" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
  rsvp: <><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M9 11l2 2 4-4" /></>,
  gallery: <><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="9" cy="10" r="2" /><path d="M21 16l-5-5-8 8" /></>,
  map: <><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></>,
  video: <><rect x="3" y="6" width="13" height="12" rx="2" /><path d="M16 10l5-3v10l-5-3z" /></>,
  target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="1" /></>,
  brand: <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" />,
  search: <><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.5-4.5" /></>,
  app: <><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M11 18h2" /></>,
  support: <><path d="M4 13v-1a8 8 0 0 1 16 0v1" /><rect x="3" y="13" width="4" height="6" rx="1" /><rect x="17" y="13" width="4" height="6" rx="1" /></>,
};

const RingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <g className="rd-ring">
      <circle cx="12" cy="15" r="6" /><path d="M9 4h6l2 3-5 3-5-3z" />
    </g>
    <path className="rd-spark" d="M20 2v4M18 4h4" />
  </svg>
);
const BuildingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16M14 10h5a1 1 0 0 1 1 1v10M2 21h20" />
    <path className="rd-fl rd-fl-1" d="M8 8h2" />
    <path className="rd-fl rd-fl-2" d="M8 12h2" />
    <path className="rd-fl rd-fl-3" d="M8 16h2" />
  </svg>
);

// About video: autoplays muted and loops; paused for visitors who prefer reduced motion.
function AboutVideo({ src, poster, label }) {
  const ref = useRef(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) ref.current?.pause();
  }, [src]);
  if (!src) return <div className="rd-video-empty">Add your video in VIDEOS at the top of WorksSwitch.jsx</div>;
  return (
    <video ref={ref} src={src} poster={poster || undefined} autoPlay muted loop playsInline preload="metadata" aria-label={label} />
  );
}

const fmt = (n) => "₹" + n.toLocaleString("en-IN");

// Price card: fades in with a gold shine and the price counts up once it scrolls into view.
function PricingPlan({ plan }) {
  const cardRef = useRef(null);
  const priceRef = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      setShown(true);
      return undefined;
    }
    let raf;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      setShown(true);
      const start = performance.now() + 400;
      const tick = (t) => {
        const k = Math.min(1, Math.max(0, (t - start) / 1100));
        if (priceRef.current) priceRef.current.textContent = fmt(Math.round(plan.amount * (1 - Math.pow(1 - k, 3))));
        if (k < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.35 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [plan.amount]);

  return (
    <article ref={cardRef} className={`rd-plan${shown ? " is-in" : ""}`}>
      <h4 className="rd-plan-name">
        <img className="rd-plan-img" src={`${base}assets/${plan.img}.png`} alt={plan.name} onError={(e) => { e.currentTarget.style.display = "none"; }} />
      </h4>
      <p className="rd-plan-tag">{plan.tag}</p>
      <div className="rd-price"><b ref={priceRef}>{fmt(plan.amount)}</b><small>one-time</small></div>
      <hr className="rd-rule" />
      <ul className="rd-plan-list">
        {plan.features.map((f) => <li key={f}>{f}</li>)}
      </ul>
      <a className="rd-plan-btn" href="#contact">Choose {plan.name} <span aria-hidden="true">↗</span></a>
    </article>
  );
}

export default function WorksSwitch() {
  const [active, setActive] = useState("weddings");
  const [leave, setLeave] = useState(null); // { key, dir } while the old panel slides out
  const activeRef = useRef("weddings");
  const leaveTimer = useRef(null);
  const rootRef = useRef(null);
  const tabRefs = useRef({});

  // Switch tabs and remember which way we moved (for the slide direction)
  const go = useCallback((key) => {
    const cur = activeRef.current;
    if (key === cur) return;
    activeRef.current = key;
    setActive(key);
    setLeave({ key: cur, dir: KEYS.indexOf(key) > KEYS.indexOf(cur) ? 1 : -1 });
    clearTimeout(leaveTimer.current);
    leaveTimer.current = setTimeout(() => setLeave(null), 600);
  }, []);
  useEffect(() => () => clearTimeout(leaveTimer.current), []);

  // Supports links like href="#works-companies" from anywhere (e.g. the hero buttons)
  useEffect(() => {
    const fromHash = () => {
      const m = window.location.hash.match(/^#works-(weddings|companies)$/);
      if (m) {
        go(m[1]);
        rootRef.current?.scrollIntoView({ behavior: "smooth" });
      }
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [go]);

  const choose = (key, { focus = false } = {}) => {
    go(key);
    try { window.history.replaceState(null, "", `#works-${key}`); } catch { /* ignore */ }
    if (focus) tabRefs.current[key]?.focus();
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault();
      choose(KEYS[(KEYS.indexOf(active) + 1) % KEYS.length], { focus: true });
    }
  };

  const svc = WORKS[active].services;
  const plan = WORKS[active].pricing;
  const vid = VIDEOS[active];
  const slideCls = leave ? ` rd-in-${leave.dir > 0 ? "r" : "l"}` : "";

  return (
    <section ref={rootRef} className={`rd-works is-${active}`} id="works" aria-labelledby="rd-works-title">
      <div className="rd-wrap">
        <header className="rd-head"></header>

        <div className="rd-switch" role="tablist" aria-label="Type of work" onKeyDown={onKeyDown}>
          <span className="rd-pill" aria-hidden="true" />
          {KEYS.map((key) => (
            <button
              key={key}
              ref={(el) => (tabRefs.current[key] = el)}
              className="rd-tab"
              role="tab"
              id={`rd-tab-${key}`}
              aria-controls={`rd-panel-${key}`}
              aria-selected={active === key}
              tabIndex={active === key ? 0 : -1}
              onClick={() => choose(key)}
            >
              {key === "weddings" ? <RingIcon /> : <BuildingIcon />}
              {key === "weddings" ? "Weddings & Events" : "Companies & Brands"}
            </button>
          ))}
        </div>

        <div className="rd-panels">
        {KEYS.map((key) => {
          const isActive = active === key;
          const isLeaving = leave?.key === key;
          const inCls = isActive && leave ? ` rd-in-${leave.dir > 0 ? "r" : "l"}` : "";
          const outCls = isLeaving ? ` rd-out-${leave.dir > 0 ? "l" : "r"}` : "";
          return (
          <div key={key} className={`rd-panel${inCls}${outCls}`} id={`rd-panel-${key}`} role="tabpanel" aria-labelledby={`rd-tab-${key}`} hidden={!isActive && !isLeaving}>
            <div className="rd-grid">
              {WORKS[key].items.map((w) => {
                const inner = (
                  <>
                    <div className="rd-thumb" style={{ backgroundImage: w.image ? `url(${w.image})` : w.fallback }} />
                    <div className="rd-body">
                      <h3>{w.title}</h3>
                      <p>{w.text}</p>
                    </div>
                  </>
                );
                return w.to ? (
                  <Link key={w.title} className="rd-card" to={w.to}>{inner}</Link>
                ) : (
                  <a key={w.title} className="rd-card" href={w.href}>{inner}</a>
                );
              })}
            </div>
            <div className="rd-more"><a href={WORKS[key].cta.href}>{WORKS[key].cta.label}</a></div>
          </div>
          );
        })}
        </div>

        {/* Services: changes with the selected tab. The header's "Services" link points here. */}
        <div className={`rd-services${leave ? ` rd-in-${leave.dir > 0 ? "r" : "l"}` : ""}`} id="services" key={active}>
          <h3 className="rd-svc-title">{svc.title}</h3>
          <p className="rd-svc-sub">{svc.sub}</p>
          <div className="rd-svc-grid">
            {svc.items.map((s) => (
              <div className="rd-svc" key={s.title}>
                <span className="rd-svc-ic">
                  <svg viewBox="0 0 24 24" aria-hidden="true">{ICONS[s.icon]}</svg>
                </span>
                <h4>{s.title}</h4>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* About: same text, a different video for each tab. */}
        <div className={`rd-about${slideCls}`} id="about" key={`about-${active}`}>
          <div className="rd-about-grid">
            <div className="rd-video">
              <AboutVideo src={vid.src} poster={vid.poster} label={vid.label} />
            </div>
            <div className="rd-about-text">
              <div className="rd-kicker">{ABOUT.kicker}</div>
              <h3>Small details.<br /><em>Big impression.</em></h3>
              <p>{ABOUT.text}</p>
              <ul className="rd-checklist">
                {ABOUT.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
              <a className="rd-about-btn" href="#contact">Let’s build something <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </div>

        {/* Pricing: wedding plan on the Weddings tab, company plan on the Companies tab. */}
        <div className={`rd-pricing${slideCls}`} id="pricing" key={`pricing-${active}`}>
          <h3 className="rd-svc-title">BASIC <em>PLANS</em></h3>
          <p className="rd-svc-sub">{plan.sub}</p>
          <PricingPlan plan={plan} />
          <p className="rd-note">
            Domain, hosting, paid third-party services, and optional maintenance are charged separately. Need something custom?{" "}
            <a href="#contact">Let’s talk.</a>
          </p>
        </div>
      </div>
    </section>
  );
}