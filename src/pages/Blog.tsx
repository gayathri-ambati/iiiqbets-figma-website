const posts = [
  { slug: 'react-tips', title: '10 React Tips', excerpt: 'Boost your dev speed.' },
  { slug: 'vite-guide', title: 'Getting Started with Vite', excerpt: 'Why Vite is blazing fast.' },
  { slug: 'css-tricks', title: 'Modern CSS Tricks', excerpt: 'Less code, more power.' },
]

export default function Blog() {
  return (
    <section>
      <h1>Blog</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {posts.map((p) => (
          <li key={p.slug} style={{ marginBottom: '1rem', borderBottom: '1px solid #333', paddingBottom: '1rem' }}>
            <h3>{p.title}</h3>
            <p>{p.excerpt}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}