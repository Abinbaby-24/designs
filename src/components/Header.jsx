import { useEffect, useState } from 'react'

const links = [
  ['home', 'Home'],
  ['services', 'Services'],
  ['work', 'Projects'],
  ['pricing', 'Pricing'],
  ['faq', 'FAQ'],
  ['about', 'About'],
  ['contact', 'Contact'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const mark = `${import.meta.env.BASE_URL}assets/emerald-logo.png`

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="wrap nav">
        <a className="brand" href="#home" aria-label="Rose Designs home">
          <img className="brand-mark" src={mark} alt="" />
          <span className="brand-name">Emerald Designs</span>
        </a>
        <nav className={`navlinks${open ? ' open' : ''}`} id="navlinks">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </nav>
        <div className="nav-actions">
          <a className="nav-cta" href="#contact">Let’s Talk <span>↗</span></a>
        </div>
        <button className="menu" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(o => !o)}>☰</button>
      </div>
    </header>
  )
}