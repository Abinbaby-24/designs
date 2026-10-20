const base = import.meta.env.BASE_URL

// `key` is kept as gold / diamond so your existing CSS (.plan.gold, .plan.diamond) still applies.
// `img` is the title image inside /assets.
const plans = [
  {
    key: 'gold', img: 'ring', name: 'Wedding Website', price: '₹4,999', featured: true,
    tag: 'A beautiful, shareable invitation website for your big day.',
    features: [
      'Custom-designed wedding website',
      'Countdown to the big day',
      'Schedule for every ceremony and event',
      'RSVP form with replies on WhatsApp',
      'Photo gallery for your pre-wedding shoot',
      'Venue map & directions',
      'Share in one tap on WhatsApp & social',
      '2 rounds of revisions',
    ],
    btn: 'btn-primary', arrow: true,
  },
  {
    key: 'diamond', img: 'laptop', name: 'Company Website', price: '₹9,999',
    tag: 'A full-featured website or web app for ambitious brands.',
    features: [
      'Up to 12 pages, fully custom UI',
      'Advanced online booking system',
      'Online catalog or e-commerce setup',
      'Google Analytics & Search Console',
      'Advanced SEO & schema markup',
      '30 days of free post-launch support',
      'Priority support & 3 rounds of revisions',
    ],
    btn: 'btn-ghost',
  },
]

export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="wrap">
        <div className="section-head">
          <div className="kicker">Pricing plans</div>
          <h2>BASIC <em>PLANS</em></h2>
          <p>Simple one-time packages. Pick the one that fits your business today and grow from there.</p>
        </div>
        <div className="plans">
          {plans.map(p => (
            <article className={`plan ${p.key}${p.featured ? ' featured' : ''}`} key={p.key}>
              {p.featured && <span className="badge">Most popular</span>}
              <h3 className="plan-name">
                <img className="plan-title-img" src={`${base}assets/${p.img}.png`} alt={p.name} />
              </h3>
              <p className="plan-tag">{p.tag}</p>
              <div className="price"><b>{p.price}</b><small>one-time</small></div>
              <hr />
              <ul>
                {p.features.map(f => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a className={`btn ${p.btn}`} href="#contact">Choose {p.name}{p.arrow && <> <span>↗</span></>}</a>
            </article>
          ))}
        </div>
        <p className="pricing-note">
          Domain, hosting, paid third-party services, and optional maintenance are charged separately. Need something custom?{' '}
          <a href="#contact" style={{ color: '#d8b4fe', fontWeight: 700 }}>Let’s talk.</a>
        </p>
      </div>
    </section>
  )
}