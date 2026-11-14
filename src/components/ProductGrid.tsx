import { Icon } from './Icon'
import { ProductCard, type Product } from './ProductCard'
import { products } from '../data/products'

type ProductGridProps = {
  onProductOpen?: (product: Product) => void
}

export function ProductGrid({ onProductOpen }: ProductGridProps) {
  return (
    <section className="collection-section">
      <div className="collection-heading">
        <div>
          <span className="eyebrow">KOLEKSI PILIHAN</span>
          <h2>Yang mungkin kamu suka</h2>
        </div>
        <button className="text-button">Lihat semua <Icon name="arrow" size={15} /></button>
      </div>
      <div className="product-grid">
        {products.slice(0, 4).map((product) => <ProductCard key={product.name} product={product} onOpen={onProductOpen} />)}
      </div>
    </section>
  )
}
