export default function Footer() {
  return (
    <footer>
      <div className="wrap footer-inner">
        <div><span className="footer-brand">Emerald</span> <span> · Web · Ideas · Growth</span></div>
        <div>© {new Date().getFullYear()} Emerald. Built with purpose.</div>
      </div>
    </footer>
  )
}
