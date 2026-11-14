import { Icon } from './Icon'

type HeaderProps = {
  onCatalog?: () => void
  onProfile?: () => void
}

export function Header({ onCatalog, onProfile }: HeaderProps) {
  return (
    <header className="topbar">
      <div className="brand">
        <div className="brand-mark">F</div>
        <span>FITURA</span>
      </div>
      <div className="topbar-actions">
        <button className="catalog-link" onClick={onCatalog}>Katalog Utama</button>
        <button className="icon-button" aria-label="Cari">
          <Icon name="search" size={18} />
        </button>
        <button className="avatar" aria-label="Profil" onClick={onProfile}>A</button>
      </div>
    </header>
  )
}
