import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import './Contact.css'

// 91 = India country code, followed by your WhatsApp number
const WHATSAPP = '917306070042'

const empty = { name: '', type: '', company: '', date: '', phone: '' }

const todayStr = () => {
  const d = new Date()
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset())
  return d.toISOString().slice(0, 10)
}

export default function Contact() {
  const [open, setOpen] = useState(false)
  const [sentUrl, setSentUrl] = useState(null)
  const [form, setForm] = useState(empty)
  const [errors, setErrors] = useState({})
  const dialogRef = useRef(null)
  const openerRef = useRef(null)
  const nameRef = useRef(null)

  // While the form is open: lock page scroll, focus the first field, close on Esc, keep Tab inside
  useEffect(() => {
    if (!open) return undefined
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const t = setTimeout(() => nameRef.current?.focus(), 60)
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
      if (e.key === 'Tab' && dialogRef.current) {
        const items = [...dialogRef.current.querySelectorAll('button:not([disabled]), a[href], input:not([disabled])')]
        if (!items.length) return
        const first = items[0]
        const last = items[items.length - 1]
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      clearTimeout(t)
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
      openerRef.current?.focus()
    }
  }, [open])

  const openForm = (e) => {
    e.preventDefault()
    openerRef.current = e.currentTarget
    setSentUrl(null)
    setErrors({})
    setOpen(true)
  }

  const set = (field) => (e) => {
    const value = e.target.value
    setForm((f) => ({ ...f, [field]: value }))
    if (errors[field]) setErrors((x) => ({ ...x, [field]: undefined }))
  }

  const validate = () => {
    const er = {}
    if (!form.name.trim()) er.name = 'Please enter your name.'
    if (!form.type) er.type = 'Please choose wedding or company.'
    if (form.type === 'company' && !form.company.trim()) er.company = 'Please enter your company name.'
    if (form.type === 'wedding' && !form.date) er.date = 'Please pick your wedding date.'
    const digits = form.phone.replace(/\D/g, '')
    if (digits.length < 10 || digits.length > 13) er.phone = 'Please enter a valid contact number.'
    return er
  }

  const submit = (ev) => {
    ev.preventDefault()
    const er = validate()
    setErrors(er)
    if (Object.keys(er).length) {
      setTimeout(() => dialogRef.current?.querySelector('[aria-invalid="true"]')?.focus(), 0)
      return
    }
    const niceDate = form.date
      ? new Date(`${form.date}T00:00`).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
      : ''
    const lines = [
      '*New website enquiry*',
      `Name: ${form.name.trim()}`,
      `Type: ${form.type === 'wedding' ? 'Wedding' : 'Company'}`,
      form.type === 'company' ? `Company name: ${form.company.trim()}` : `Wedding date: ${niceDate}`,
      `Contact number: ${form.phone.trim()}`,
    ]
    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lines.join('\n'))}`
    window.open(url, '_blank', 'noopener')
    setSentUrl(url)
    setForm(empty)
  }

  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <div className="contact-panel">
          <div>
            <div className="kicker" style={{ color: '#e9d5ff' }}>Have an idea?</div>
            <h2>Let’s build <em>your website.</em></h2>
            <p>Tell me about your business or project, and let’s make it happen.</p>
          </div>
          <a className="btn" href="#contact" role="button" onClick={openForm}>Contact EMERALD ↗</a>
        </div>
      </div>

      {open && createPortal(
        <div className="ct-overlay" onMouseDown={(e) => { if (e.target === e.currentTarget) setOpen(false) }}>
          <div className="ct-dialog" role="dialog" aria-modal="true" aria-labelledby="ct-title" ref={dialogRef}>
            <button type="button" className="ct-x" aria-label="Close" onClick={() => setOpen(false)}>×</button>

            {sentUrl ? (
              <div className="ct-done">
                <h3 id="ct-title">One last step</h3>
                <p>WhatsApp should have opened with your details filled in. Press <b>Send</b> there and we’ll get back to you.</p>
                <a className="ct-submit" href={sentUrl} target="_blank" rel="noopener noreferrer">Open WhatsApp again</a>
                <button type="button" className="ct-link" onClick={() => setOpen(false)}>Close</button>
              </div>
            ) : (
              <form noValidate onSubmit={submit}>
                <h3 id="ct-title">Tell us about your project</h3>
                <p className="ct-sub">Your details go straight to us on WhatsApp.</p>

                <label className="ct-field">
                  <span>Your name</span>
                  <input ref={nameRef} type="text" autoComplete="name" value={form.name} onChange={set('name')} aria-invalid={!!errors.name} />
                  {errors.name && <em className="ct-err" role="alert">{errors.name}</em>}
                </label>

                <fieldset className="ct-field ct-type">
                  <legend>This is for a</legend>
                  <div className="ct-opts">
                    {[['wedding', 'Wedding'], ['company', 'Company']].map(([v, label]) => (
                      <label key={v} className={`ct-opt${form.type === v ? ' is-on' : ''}`}>
                        <input type="radio" name="ct-type" value={v} checked={form.type === v} onChange={set('type')} />
                        {label}
                      </label>
                    ))}
                  </div>
                  {errors.type && <em className="ct-err" role="alert">{errors.type}</em>}
                </fieldset>

                {form.type === 'company' && (
                  <label className="ct-field ct-in">
                    <span>Company name</span>
                    <input type="text" autoComplete="organization" value={form.company} onChange={set('company')} aria-invalid={!!errors.company} />
                    {errors.company && <em className="ct-err" role="alert">{errors.company}</em>}
                  </label>
                )}

                {form.type === 'wedding' && (
                  <label className="ct-field ct-in">
                    <span>Wedding date</span>
                    <input type="date" min={todayStr()} value={form.date} onChange={set('date')} aria-invalid={!!errors.date} />
                    {errors.date && <em className="ct-err" role="alert">{errors.date}</em>}
                  </label>
                )}

                <label className="ct-field">
                  <span>Contact number</span>
                  <input type="tel" inputMode="tel" autoComplete="tel" placeholder="e.g. 98765 43210" value={form.phone} onChange={set('phone')} aria-invalid={!!errors.phone} />
                  {errors.phone && <em className="ct-err" role="alert">{errors.phone}</em>}
                </label>

                <button type="submit" className="ct-submit">Send on WhatsApp</button>
              </form>
            )}
          </div>
        </div>,
        document.body
      )}
    </section>
  )
}