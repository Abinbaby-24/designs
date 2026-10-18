const projects = [
  { name: 'GlowNearby', tag: 'Beauty & salon booking concept', title: 'GlowNearby', text: 'A modern digital presence for beauty and wellness businesses.' },
  { name: 'Brand / Project Two', tag: 'Business website concept', title: 'Your next project', text: 'Add a short description of another website you have built.' },
]

export default function Projects() {
  return (
    <section className="projects" id="work">
      <div className="wrap">
        <div className="section-head">
          <div className="kicker">Selected work</div>
          <h2>A glimpse of <em>what’s possible.</em></h2>
          <p>Replace these sample cards with your real projects, screenshots, and live links.</p>
        </div>
        <div className="project-grid">
          {projects.map(p => (
            <article className="project" key={p.name}>
              <div className="project-visual">
                <div className="browser"><strong>{p.name}</strong><span>{p.tag}</span></div>
              </div>
              <div className="project-copy"><h3>{p.title}</h3><p>{p.text}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
