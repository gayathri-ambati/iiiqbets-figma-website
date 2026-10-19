const products = [
  { id: 1, name: 'Laptop Pro', price: '$1299' },
  { id: 2, name: 'Wireless Mouse', price: '$29' },
  { id: 3, name: 'Mechanical Keyboard', price: '$89' },
  { id: 4, name: 'Monitor 27"', price: '$349' },
]

export default function Products() {
  return (
    <section>
      <h1>Products</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
        {products.map((p) => (
          <div key={p.id} style={{ border: '1px solid #333', padding: '1rem', borderRadius: 8 }}>
            <h3>{p.name}</h3>
            <p style={{ color: '#646cff', fontWeight: 'bold' }}>{p.price}</p>
            <button>Add to cart</button>
          </div>
        ))}
      </div>
    </section>
  )
}