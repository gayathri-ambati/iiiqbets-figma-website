import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section>
      <h1>Welcome Home</h1>
      <p>This is the home page of MyApp.</p>
      <Link to="/about">Learn more about us →</Link>
    </section>
  )
}