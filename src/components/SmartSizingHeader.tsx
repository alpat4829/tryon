import { Icon } from './Icon'

type SmartSizingHeaderProps = {
  onBack: () => void
}

export function SmartSizingHeader({ onBack }: SmartSizingHeaderProps) {
  return (
    <header className="smart-topbar">
      <button aria-label="Kembali ke katalog" onClick={onBack}><Icon name="back" size={20} /></button>
      <div className="smart-brand"><span className="smart-brand-mark"><Icon name="shirt" size={16} /></span><strong>Smart Sizing</strong></div>
      <div className="smart-actions"><button aria-label="Buka keranjang"><Icon name="cart" size={18} /></button><button className="smart-avatar" aria-label="Profil">A</button></div>
    </header>
  )
}
