const services = [
  ['✦', 'Business Websites', 'Professional websites that make your brand easier to discover and trust.'],
  ['▣', 'Landing Pages', 'Clear, focused pages designed to introduce your offer and encourage action.'],
  ['⌘', 'Custom Web Apps', 'Purpose-built web experiences shaped around your workflow and goals.'],
  ['▤', 'Portfolio Websites', 'Showcase your work, skills, and story with a memorable online portfolio.'],
  ['↗', 'E-commerce', 'Make it easier for customers to explore products and shop online.'],
  ['⚙', 'Maintenance & Support', 'Updates, fixes, and improvements to keep your website running smoothly.'],
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="wrap">
        <div className="section-head">
          <div className="kicker">What I do</div>
          <h2>Digital experiences, <em>built for you.</em></h2>
          <p>From a first online presence to a custom digital product, I turn ideas into useful, beautiful websites.</p>
        </div>
        <div className="cards">
          {services.map(([icon, title, text]) => (
            <article className="card" key={title}>
              <div className="iconbox">{icon}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
