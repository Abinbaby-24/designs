import { useEffect, useRef } from 'react'

const points = [
  'Responsive on mobile, tablet, and desktop',
  'Modern, brand-focused visual design',
  'Performance and usability in mind',
  'Clear communication from start to launch',
]

export default function About() {
  const videoRef = useRef(null)

  // Respect visitors who have "reduce motion" turned on: show a still frame instead of autoplay
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      videoRef.current?.pause()
    }
  }, [])

  return (
    <section id="about">
      <div className="wrap about-grid">
        <div className="about-art">
          <video
            ref={videoRef}
            className="about-video"
            src="/assets/man.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="A man writing on glass"
          />
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