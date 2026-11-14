import { useState } from 'react'
import { Icon } from '../components/Icon'
import { TryOnHeader } from '../components/TryOnHeader'
import { TryOnProductPicker, type TryOnProduct } from '../components/TryOnProductPicker'
import { TryOnSummary } from '../components/TryOnSummary'
import { ProductCard, type Product } from '../components/ProductCard'

const tops: TryOnProduct[] = [
  { id: 'jacket', name: 'Jaket Cokelat', price: 'Rp 830.000', size: 'L', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=500&q=85' },
  { id: 'shirt', name: 'Kemeja Mint Linen', price: 'Rp 680.000', size: 'L', image: 'https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=500&q=85' },
  { id: 'hoodie', name: 'Hoodie Olive Essential', price: 'Rp 620.000', size: 'L', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=500&q=85' },
  { id: 'tee', name: 'Kaos Basic Putih', price: 'Rp 280.000', size: 'L', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=85' },
  { id: 'blazer', name: 'Blazer Relaxed Beige', price: 'Rp 920.000', size: 'L', image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=500&q=85' },
]

const bottoms: TryOnProduct[] = [
  { id: 'cargo', name: 'Celana Cargo Hitam', price: 'Rp 590.000', size: '32', image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=500&q=85' },
  { id: 'wide-leg', name: 'Celana Wide Leg', price: 'Rp 490.000', size: '32', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=500&q=85' },
  { id: 'jeans', name: 'Jeans Straight Fit', price: 'Rp 550.000', size: '32', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=500&q=85' },
  { id: 'training', name: 'Celana Training Relaxed', price: 'Rp 410.000', size: '32', image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=500&q=85' },
  { id: 'shorts', name: 'Shorts Utility', price: 'Rp 360.000', size: '32', image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=500&q=85' },
]

type TryOnPageProps = {
  onBack: () => void
  onWishlist: () => void
  wishlist: Product[]
  onToggleWishlist: (product: Product) => void
  onBuy: (product: Product) => void
}

export function TryOnPage({ onBack, onWishlist, wishlist, onToggleWishlist, onBuy }: TryOnPageProps) {
  const [selectedTop, setSelectedTop] = useState<TryOnProduct | undefined>(tops[0])
  const [selectedBottom, setSelectedBottom] = useState<TryOnProduct | undefined>(bottoms[0])
  const [generated, setGenerated] = useState(false)

  return (
    <div className="tryon-page">
      <TryOnHeader onBack={onBack} />
      <main className="tryon-content">
        <div className="tryon-intro">
          <div>
            <h1>Pilih Pakaian Anda</h1>
            <p>Pilih satu atasan dan satu bawahan untuk membuat set outfit.</p>
          </div>
          <button className="tryon-wishlist-button" onClick={onWishlist}><Icon name="bookmark" size={15} /> Wishlist</button>
        </div>
        <TryOnProductPicker title="Atasan" recommendation="Rekomendasi ukuran L" products={tops} filters={['Semua', 'Hoodie', 'Kaos', 'Kemeja', 'Jaket']} selectedId={selectedTop?.id} onSelect={(product) => { setSelectedTop(product); setGenerated(false) }} />
        <TryOnProductPicker title="Bawahan" recommendation="Rekomendasi ukuran 32" products={bottoms} filters={['Semua', 'Training', 'Jeans', 'Cargo', 'Shorts']} selectedId={selectedBottom?.id} onSelect={(product) => { setSelectedBottom(product); setGenerated(false) }} />
        <section className="tryon-wishlist-section">
          <div className="tryon-section-title">
            <div><strong>Produk dari Wishlist</strong></div>
            <button className="wishlist-link" onClick={onWishlist}>Lihat Wishlist</button>
          </div>
          {wishlist.length > 0
            ? <div className="tryon-wishlist-track">{wishlist.map((product) => <ProductCard key={product.name} product={product} liked onToggleLike={onToggleWishlist} onOpen={onBuy} />)}</div>
            : <div className="tryon-wishlist-empty">Belum ada produk tersimpan. Tandai produk favorit dari katalog untuk menampilkannya di sini.</div>}
        </section>
        {selectedTop && selectedBottom && <TryOnSummary top={selectedTop} bottom={selectedBottom} onRemoveTop={() => { setSelectedTop(undefined); setGenerated(false) }} onRemoveBottom={() => { setSelectedBottom(undefined); setGenerated(false) }} onGenerate={() => setGenerated(true)} generated={generated} onBuy={() => onBuy({
          name: `${selectedTop.name} + ${selectedBottom.name}`,
          category: 'PAKAIAN LUAR · PRIA',
          price: 'Rp 1.420.000',
          image: selectedTop.image,
          badge: 'SET AI FIT',
        })} />}
      </main>
    </div>
  )
}
