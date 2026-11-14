import { useState } from 'react'
import type { Product } from './ProductCard'

type ProductInfoProps = {
  product: Product
}

const sizes = ['S', 'M', 'L', 'XL', 'XXL']

export function ProductInfo({ product }: ProductInfoProps) {
  const [selectedSize, setSelectedSize] = useState('L')

  return (
    <>
      <section className="detail-info">
        <div>
          <span className="detail-category">{product.category}</span>
          <h1>{product.name === 'Jaket Cokelat' ? 'Casual Hoodie Hitam' : product.name}</h1>
          <div className="rating"><b>4.9</b><span>★★★★★</span><small>(128 ulasan)</small></div>
        </div>
        <strong className="detail-price">{product.price}</strong>
      </section>
      <section className="size-section">
        <div className="size-heading"><strong>Pilih Ukuran</strong></div>
        <div className="size-options">
          {sizes.map((size) => <button className={selectedSize === size ? 'active' : ''} onClick={() => setSelectedSize(size)} key={size}>{size}{size === 'L' && <i />}</button>)}
        </div>
        <div className="size-recommendation">
          <div><strong>Rekomendasi : Ukuran {selectedSize}</strong><span>96% cocok berdasarkan profil 178 cm &amp; 72 kg Anda</span></div>
          <b>96%</b>
        </div>
      </section>
    </>
  )
}
