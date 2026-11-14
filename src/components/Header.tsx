import { useState } from 'react'
import logoCombination from '../assets/logokombinasi.png'
import { SearchBar } from './SearchBar'

type HeaderProps = {
  onProfile?: () => void
}

export function Header({ onProfile }: HeaderProps) {
  const [query, setQuery] = useState('')

  return (
    <header className="topbar">
      <div className="brand">
        <img className="brand-logo-combination" src={logoCombination} alt="FITURA" />
      </div>
      <div className="topbar-actions">
        <SearchBar value={query} onChange={setQuery} placeholder="Cari produk & gaya" showFilter={false} />
        <button className="avatar" aria-label="Profil" onClick={onProfile}>A</button>
      </div>
    </header>
  )
}
