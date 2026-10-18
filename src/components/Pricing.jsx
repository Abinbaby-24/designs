const base = import.meta.env.BASE_URL

const plans = [
  {
    key: 'silver', name: 'Silver', price: '₹9,999',
    tag: 'A clean, professional online presence for small businesses.',
    features: [
      'Up to 5 pages (Home, About, Services, Gallery, Contact)',
      'Responsive on mobile, tablet & desktop',
      'Contact form & WhatsApp chat button',
      'Google Maps & social media links',
      'Basic SEO setup',
      'Delivery in 3–5 days',
      '1 round of revisions',
    ],
    btn: 'btn-ghost',
  },
  {
    key: 'gold', name: 'Gold', price: '₹14,999', featured: true,
    tag: 'A custom-designed website built to attract and convert customers.',
    features: [
      'Everything in Silver, plus:',
      'Up to 8 pages with custom design',
      'WhatsApp appointment request form',
      'Photo gallery / portfolio section',
      'Speed & performance optimization',
      'Instagram feed integration',
      'Enhanced on-page SEO',
      '2 rounds of revisions',
    ],
    btn: 'btn-primary', arrow: true,
  },
  {
    key: 'diamond', name: 'Diamond', price: '₹20,999',
    tag: 'A full-featured website or web app for ambitious brands.',
    features: [
      'Everything in Gold, plus:',
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
          <h2>Explore <em>plans.</em></h2>
          <p>Simple one-time packages. Pick the one that fits your business today and grow from there.</p>
        </div>
        <div className="plans">
          {plans.map(p => (
            <article className={`plan ${p.key}${p.featured ? ' featured' : ''}`} key={p.key}>
              {p.featured && <span className="badge">Most popular</span>}
              <h3 className="plan-name">
                <img className="plan-title-img" src={`${base}assets/${p.key}.png`} alt={p.name} />
              </h3>
              <p className="plan-tag">{p.tag}</p>
              <div className="price"><b>{p.price}</b><small>one-time</small></div>
              <hr />
              <ul>
                {p.features.map((f, i) => (
                  <li key={f} className={i === 0 && f.startsWith('Everything') ? 'inherit' : undefined}>{f}</li>
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
