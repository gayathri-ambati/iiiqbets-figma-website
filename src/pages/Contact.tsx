import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Thanks, ${form.name}! We'll reach out soon.`)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: 500, display: 'grid', gap: '1rem' }}>
        <input
          placeholder="Your name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Your email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <textarea
          placeholder="Your message"
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
        />
        <button type="submit">Send</button>
      </form>
    </section>
  )
}