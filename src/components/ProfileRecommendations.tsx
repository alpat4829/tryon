import { Icon } from './Icon'

const recommendations = [
  {
    name: 'Raw Brown Suede Overjacket',
    category: 'JAKET PELAPIS',
    price: 'Rp 1.190.000',
    match: '94%',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=280&q=85',
  },
  {
    name: 'Poplin Mint Overshirt',
    category: 'ATASAN KASUAL',
    price: 'Rp 740.000',
    match: '91%',
    image: 'https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=280&q=85',
  },
]

export function ProfileRecommendations() {
  return (
    <section className="profile-recommendations">
      <div className="recommendations-heading">
        <div><span className="eyebrow">PILIHAN AI UNTUKMU</span><h2>Produk yang melengkapi setelan</h2></div>
        <Icon name="sparkles" size={18} />
      </div>
      <div className="recommendation-list">
        {recommendations.map((product) => (
          <article className="recommendation-card" key={product.name}>
            <div className="recommendation-image">
              <img src={product.image} alt={product.name} />
              <span>{product.match}</span>
            </div>
            <div className="recommendation-copy">
              <div><small>{product.category}</small><strong>{product.price}</strong></div>
              <h3>{product.name}</h3>
              <p>Perlindungan AI: Potongan rileks selaras sempurna dengan lingkar tubuh.</p>
              <div className="recommendation-actions"><button><Icon name="search" size={13} /> Lihat 3D</button><button><Icon name="cart" size={13} /> Tambah</button></div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
