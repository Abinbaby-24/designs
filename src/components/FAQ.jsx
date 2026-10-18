const faqs = [
  ['How much does a website cost?', 'Our website packages start at ₹3,999, depending on the features and requirements.'],
  ['How long does it take to build a website?', 'A basic website may take 3–5 days, while more complex projects may take longer.'],
  ['Do I need to pay monthly?', 'Website development is a one-time project fee. Domain, hosting, paid services, and optional maintenance may involve additional charges.'],
  ['Can customers book appointments through my website?', 'Yes. Depending on your requirements, we can integrate WhatsApp appointment requests or a more advanced booking system.'],
  ['Can I update my website later?', 'Yes. Updates can be arranged separately or through an optional maintenance plan.'],
]

export default function FAQ() {
  return (
    <section id="faq">
      <div className="wrap">
        <div className="section-head">
          <div className="kicker">FAQ</div>
          <h2>Questions, <em>answered.</em></h2>
          <p>Everything you might want to know before getting started.</p>
        </div>
        <div className="faq-list">
          {faqs.map(([q, a]) => (
            <details className="faq-item" key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
