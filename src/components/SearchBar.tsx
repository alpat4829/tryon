import { Icon } from './Icon'

type SearchBarProps = {
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
}

export function SearchBar({ value = '', onChange, placeholder = 'Cari gaya, ukuran pas, atau suasana outfit...' }: SearchBarProps) {
  return (
    <div className="search-bar">
      <Icon name="search" size={18} />
      <input aria-label="Cari katalog" value={value} onChange={(event) => onChange?.(event.target.value)} placeholder={placeholder} />
      <button className="filter-button" aria-label="Buka filter">
        <Icon name="layers" size={15} />
      </button>
    </div>
  )
}
