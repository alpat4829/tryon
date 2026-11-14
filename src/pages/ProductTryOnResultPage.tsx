import { Icon } from '../components/Icon'
import type { Product } from '../components/ProductCard'
import logo from '../assets/logo.png'

type ProductTryOnResultPageProps = {
  product: Product
  photoUrl: string
  onBack: () => void
  onTryAnother: () => void
}

export function ProductTryOnResultPage({ product, photoUrl, onBack, onTryAnother }: ProductTryOnResultPageProps) {
  return (
    <div className="product-tryon-page">
      <header className="tryon-topbar">
        <button className="tryon-back" onClick={onBack} aria-label="Kembali"><Icon name="back" size={20} /></button>
        <div className="tryon-title"><img className="feature-brand-logo" src={logo} alt="FITURA" /><strong>Try-On Produk</strong><small>SIMULASI PERSONAL</small></div>
        <button className="tryon-close" onClick={onBack} aria-label="Tutup"><Icon name="close" size={19} /></button>
      </header>
      <main className="product-tryon-content">
        <div className="product-tryon-heading"><span className="eyebrow accent">HASIL GENERATE</span><h1>{product.name}</h1><p>Satu produk dikalibrasi ke foto dan profil tubuh kamu.</p></div>
        <section className="product-tryon-stage">
          <img src={photoUrl} alt={`Hasil try-on ${product.name}`} />
          <span className="tryon-result-pill"><i /> HASIL AI TRY-ON</span>
          <span className="tryon-product-pill"><Icon name="shirt" size={13} /> {product.name}</span>
        </section>
        <section className="product-tryon-product">
          <img src={product.image} alt={product.name} />
          <div><span>{product.category}</span><strong>{product.name}</strong><b>{product.price}</b></div>
        </section>
        <section className="product-ai-analysis">
          <div className="analysis-heading"><div><Icon name="sparkles" size={18} /><strong>Analisis AI untuk kamu</strong></div><b>SIMULASI</b></div>
          <p>Model produk terdeteksi dengan proporsi regular-fit. Berdasarkan profil 178 cm, 72 kg, dan bentuk tubuh atletis, ukuran <strong>L</strong> memberi ruang gerak nyaman tanpa terlihat terlalu longgar.</p>
          <div className="analysis-metrics"><span><small>REKOMENDASI</small><strong>L</strong><em>Fit proporsional</em></span><span><small>KECOCOKAN</small><strong>94%</strong><em>Dengan profil kamu</em></span><span><small>POTONGAN</small><strong>Regular</strong><em>Ruang gerak nyaman</em></span></div>
          <small className="analysis-note"><Icon name="check" size={13} /> Analisis ini menggunakan data profil dan akan diperkaya model AI saat integrasi aktif.</small>
        </section>
        <div className="product-tryon-actions"><button onClick={onTryAnother}>Coba foto lain</button><button className="product-tryon-buy"><Icon name="cart" size={17} /> Tambah ke keranjang <strong>{product.price}</strong></button></div>
      </main>
    </div>
  )
}
