import { Icon } from './Icon'
import type { TryOnProduct } from './TryOnProductPicker'

type VirtualTryOnResultProps = {
  top: TryOnProduct
  bottom: TryOnProduct
  onBuy: () => void
}

const avatarImage = 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=88'

export function VirtualTryOnResult({ top, bottom, onBuy }: VirtualTryOnResultProps) {
  const totalPrice = 'Rp 1.420.000'
  return (
    <section className="virtual-result">
      <div className="result-label">
        <span><Icon name="sparkles" size={18} />Hasil Generate Full Try-On</span>
        <b><span>Set</span> Terkonfirmasi</b>
      </div>
      <div className="virtual-stage">
        <img className="avatar-image" src={avatarImage} alt={`Simulasi ${top.name} dan ${bottom.name}`} />
        <span className="live-pill"><i /> LIVE FITTING AVATAR</span>
        <span className="outfit-chip top-chip">
          <i />
          <strong>{top.name} • {top.size}</strong>
          <small>98% Cocok Tubuh</small>
        </span>
        <span className="outfit-chip bottom-chip">
          <i />
          <strong>{bottom.name} • {bottom.size}</strong>
          <small>96% Pas Pinggul</small>
        </span>
        <span className="fit-chip">AI FIT</span>
        <div className="stage-controls">
          <button aria-label="Putar avatar"><Icon name="shuffle" size={16} /></button>
          <button aria-label="Perbesar preview"><Icon name="search" size={16} /></button>
        </div>
      </div>
      <div className="result-caption">
        <span><i /> Outfit siap dicoba pada avatar kamu</span>
        <button>Bagikan hasil <Icon name="arrow" size={14} /></button>
      </div>
      <section className="tryon-card harmony-card">
        <div className="harmony-heading">
          <div><Icon name="sparkles" size={19} /><strong>Analisis AI Lengkap</strong></div>
          <b>98%<small>Sangat cocok</small></b>
        </div>
        <p>Warna dan proporsi atasan {top.name} berpadu seimbang dengan {bottom.name}. Potongan ini memberi siluet yang rapi untuk profil tubuh atletis dan tetap nyaman untuk aktivitas harian.</p>
        <div className="harmony-tags">
          <span><small>UKURAN ATASAN</small>Atasan {top.size}</span>
          <span><small>UKURAN BAWAHAN</small>Bawahan {bottom.size}</span>
          <span><small>PROPORSI</small>Seimbang</span>
          <span><small>KENYAMANAN</small>Nyaman bergerak</span>
        </div>
      </section>
      <div className="tryon-purchase-bar">
        <div><small>Paket 1 Set Lengkap</small><strong>{totalPrice}</strong></div>
        <button onClick={onBuy}><Icon name="cart" size={17} /> Tambah ke keranjang</button>
      </div>
    </section>
  )
}
