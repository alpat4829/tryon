import { useState } from 'react'
import { Icon } from './Icon'
import type { Product } from './ProductCard'

type ProductGalleryProps = {
  product: Product
  onTryOn: () => void
}

const galleryPlaceholders = [
  '/images/futura-example.jpg',
  '/images/futura-example.jpg',
  '/images/futura-example.jpg',
  '/images/futura-example.jpg',
  '/images/futura-example.jpg',
]

export function ProductGallery({ product, onTryOn }: ProductGalleryProps) {
  const [activeImage, setActiveImage] = useState(0)
  const images = [product.image, ...galleryPlaceholders.slice(1)]

  return (
    <>
      <section className="detail-gallery">
        <img className="detail-main-image" src={activeImage === 0 ? product.image : images[activeImage]} alt={product.name} />
        <span className="new-pill">RILIS BARU</span>
        <button className="detail-heart" aria-label="Simpan produk"><Icon name="heart" size={18} /></button>
        <div className="gallery-dots">{images.map((_, index) => <i className={index === activeImage ? 'active' : ''} key={index} />)}</div>
      </section>
      <div className="detail-gallery-row">
        <div className="thumbnail-list">
          {images.map((image, index) => (
            <button className={index === activeImage ? 'active' : ''} onClick={() => setActiveImage(index)} key={image}>
              <img src={index === 0 ? product.image : image} alt={`Tampilan ${index + 1}`} />
            </button>
          ))}
        </div>
        <button className="virtual-cta" onClick={onTryOn}><Icon name="layers" size={16} /> Coba Virtual</button>
      </div>
    </>
  )
}
