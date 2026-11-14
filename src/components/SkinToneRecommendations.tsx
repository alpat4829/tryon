import { Icon } from './Icon'

const recommendedItems = [
  { name: 'Kemeja Mint', category: 'WARM SAGE MINT', price: 'Rp 680.000', match: '91%', image: '/images/futura-example.jpg' },
  { name: 'Jaket Cokelat', category: 'EARTHY BROWN', price: 'Rp 830.000', match: '89%', image: '/images/futura-example.jpg' },
]

type SkinToneRecommendationsProps = {
  onTryOn: () => void
}

export function SkinToneRecommendations({ onTryOn }: SkinToneRecommendationsProps) {
  return (
    <section className="skin-recommendations">
      <div className="recommendation-heading">
        <div><h2>Pakaian Sesuai Warna Kulit</h2><p>Rekomendasi instan dari lemari katalog</p></div>
        <span>2 ITEM</span>
      </div>
      {recommendedItems.map((item) => (
        <article className="recommendation-item" key={item.name}>
          <div className="recommendation-image">
            <img src={item.image} alt={item.name} />
            <b>{item.match}</b>
          </div>
          <div className="recommendation-copy">
            <small><i /> {item.category}</small>
            <strong>{item.name}</strong>
            <b>{item.price}</b>
            <span><Icon name="sparkles" size={13} /> Kecocokan Warna {item.match}</span>
          </div>
          <button aria-label={`Lihat ${item.name}`}><Icon name="arrow" size={17} /></button>
        </article>
      ))}
      <button className="recommendation-tryon" onClick={onTryOn}><Icon name="layers" size={17} /> Coba Virtual dengan Palet Ini</button>
    </section>
  )
}
