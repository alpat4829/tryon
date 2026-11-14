import { Icon } from './Icon'

type SkinToneHeaderProps = {
  onBack: () => void
}

export function SkinToneHeader({ onBack }: SkinToneHeaderProps) {
  return (
    <header className="skintone-topbar">
      <button className="skintone-back" aria-label="Kembali ke katalog" onClick={onBack}>
        <Icon name="back" size={20} />
      </button>
      <div className="skintone-brand">
        <span className="skintone-brand-mark"><Icon name="sparkles" size={16} /></span>
        <div>
          <strong>Analisis Warna Kulit AI</strong>
          <small><i /> AKURASI SPEKTRAL 99% PRESISI</small>
        </div>
      </div>
      <button className="skintone-menu" aria-label="Buka menu"><span /></button>
    </header>
  )
}
