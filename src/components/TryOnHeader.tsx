import { Icon } from './Icon'

type TryOnHeaderProps = {
  onBack: () => void
}

export function TryOnHeader({ onBack }: TryOnHeaderProps) {
  return (
    <header className="tryon-topbar">
      <button className="tryon-back" aria-label="Kembali ke katalog" onClick={onBack}>
        <Icon name="back" size={20} />
      </button>
      <div className="tryon-title">
        <span className="ai-mark">AI</span>
        <strong>Full Try-On 1 Set</strong>
      </div>
      <div className="tryon-actions">
        <button aria-label="Buka keranjang"><Icon name="cart" size={18} /></button>
        <button className="tryon-avatar" aria-label="Profil">A</button>
      </div>
    </header>
  )
}
