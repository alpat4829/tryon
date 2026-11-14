import { Icon } from './Icon'

type ProductDetailHeaderProps = {
  onBack: () => void
}

export function ProductDetailHeader({ onBack }: ProductDetailHeaderProps) {
  return (
    <header className="detail-topbar">
      <button aria-label="Kembali ke katalog" onClick={onBack}><Icon name="back" size={20} /></button>
      <div className="detail-brand"><span className="detail-brand-mark">F</span><strong>Detail Produk</strong></div>
      <div className="detail-actions">
        <button aria-label="Buka keranjang"><Icon name="cart" size={18} /></button>
        <button className="detail-avatar" aria-label="Profil">A</button>
      </div>
    </header>
  )
}
