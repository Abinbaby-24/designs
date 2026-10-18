const points = [
  'Responsive on mobile, tablet, and desktop',
  'Modern, brand-focused visual design',
  'Performance and usability in mind',
  'Clear communication from start to launch',
]

export default function About() {
  return (
    <section id="about">
      <div className="wrap about-grid">
        <div className="about-art">
          <div className="mini-window">
            <div className="mini-top"><i></i><i></i><i></i></div>
            <div className="mini-title">Make your next idea<br />real on the web.</div>
            <div className="mini-line"></div>
            <div className="mini-line short"></div>
          </div>
        </div>
        <div className="about-copy">
          <div className="kicker">Why ABYLUX</div>
          <h2>Small details.<br /><em>Big impression.</em></h2>
          <p>ABYLUX is a web development brand focused on creating clean, modern digital experiences. Every project starts with understanding your goals and ends with a website built to work across devices.</p>
          <ul className="checklist">
            {points.map(p => <li key={p}>{p}</li>)}
          </ul>
          <a className="btn btn-primary" href="#contact">Let’s build something <span>↗</span></a>
        </div>
      </div>
    </section>
  )
}
