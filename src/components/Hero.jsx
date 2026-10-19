import WorksSwitch from "./WorksSwitch";

export default function Hero() {
  return (
    <>
      <section className="hero-split" id="home">
        <div className="split wedding">
          <div className="split-inner">
            <p className="split-kicker">Beautiful websites for</p>
            <h1>Weddings</h1>
            <p className="split-sub">&amp; Special Moments</p>

            <div className="split-rule" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M12 21s-7.5-4.6-9.4-9.2C1.3 8.6 3 5.5 6.2 5.5c2 0 3.3 1.1 3.8 2.2.5-1.1 1.8-2.2 3.8-2.2 3.2 0 4.9 3.1 3.6 6.3C19.5 16.4 12 21 12 21z" />
              </svg>
            </div>

            <p className="split-copy">
              
            </p>
          </div>
        </div>

        <div className="hero-badge">
          <img
            src={`${import.meta.env.BASE_URL}assets/emerald-logo.png`}
            alt="ABYLUX"
          />
        </div>

        <div className="split business">
          <div className="split-inner">
            <p className="split-kicker">Professional websites for</p>
            <h1>Companies</h1>
            <p className="split-sub">&amp; Growing Brands</p>

            <div className="split-rule" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M4 21V5l9-3v6l7 2v11h-6v-4h-3v4H4zm3-14v2h2V7H7zm0 4v2h2v-2H7zm0 4v2h2v-2H7zm9-1v2h2v-2h-2z" />
              </svg>
            </div>

            <p className="split-copy">
              
            </p>
          </div>
        </div>
      </section>

      <WorksSwitch />
    </>
  );
}