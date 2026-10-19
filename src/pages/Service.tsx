const services = [
  { title: 'Web Development', desc: 'Modern, fast and responsive websites.' },
  { title: 'Mobile Apps', desc: 'iOS & Android apps built with React Native.' },
  { title: 'UI/UX Design', desc: 'Beautiful interfaces that convert.' },
  { title: 'Consulting', desc: 'Technical guidance for your team.' },
]

export default function Service() {
  return (
    <section>
      <h1>Our Services</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
        {services.map((s) => (
          <div key={s.title} style={{ border: '1px solid #333', padding: '1rem', borderRadius: 8 }}>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}