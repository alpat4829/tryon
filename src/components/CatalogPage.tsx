import { useMemo, useState } from 'react'
import { CatalogAssistantCard } from './CatalogAssistantCard'
import { Icon } from './Icon'
import { ProductCard, type Product } from './ProductCard'
import { SearchBar } from './SearchBar'
import { products } from '../data/products'

type CatalogPageProps = {
  onTryOn: () => void
  onSkinTone: () => void
  onSmartSizing: () => void
  onProductOpen: (product: Product) => void
}

const categories = ['Semua', 'Pria', 'Wanita', 'Hoodie', 'Jaket', 'Kemeja', 'Celana']

export function CatalogPage({ onTryOn, onSkinTone, onSmartSizing, onProductOpen }: CatalogPageProps) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('Semua')
  const [sort, setSort] = useState('Relevan')

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    const result = products.filter((product) => {
      const searchable = `${product.name} ${product.category}`.toLowerCase()
      const matchesQuery = !normalizedQuery || searchable.includes(normalizedQuery)
      const matchesCategory = category === 'Semua' || searchable.includes(category.toLowerCase())
      return matchesQuery && matchesCategory
    })
    return [...result].sort((a, b) => sort === 'Harga terendah' ? Number(a.price.replace(/\D/g, '')) - Number(b.price.replace(/\D/g, '')) : a.name.localeCompare(b.name))
  }, [category, query, sort])

  return (
    <>
      <header className="catalog-header">
        <div className="catalog-header-copy">
          <span className="eyebrow accent">EXPLORE COLLECTION</span>
          <h1>Katalog Produk</h1>
          <p>Temukan item yang paling pas untuk gaya dan profil tubuhmu.</p>
        </div>
        <button className="catalog-filter-button" aria-label="Buka filter"><Icon name="filter" size={18} /></button>
      </header>
      <main className="catalog-page-content">
        <SearchBar value={query} onChange={setQuery} placeholder="Cari produk, kategori, atau gaya..." />
        <section className="catalog-ai-strip">
          <div className="catalog-ai-icon"><Icon name="sparkles" size={18} /></div>
          <div><strong>Belanja lebih pintar dengan AI</strong><small>Rekomendasi ukuran dan outfit sesuai profilmu</small></div>
          <button onClick={onTryOn}>Coba AI <Icon name="arrow" size={14} /></button>
        </section>
        <div className="catalog-toolbar">
          <div className="catalog-count"><strong>{filteredProducts.length} produk</strong><span> siap dieksplor</span></div>
          <label>Urutkan
            <select value={sort} onChange={(event) => setSort(event.target.value)} aria-label="Urutkan produk">
              <option>Relevan</option>
              <option>Harga terendah</option>
            </select>
          </label>
        </div>
        <div className="catalog-categories" aria-label="Filter kategori">
          {categories.map((item) => <button key={item} className={category === item ? 'active' : ''} onClick={() => setCategory(item)}>{item}</button>)}
        </div>
        <div className="catalog-feature-links">
          <button onClick={onSkinTone}><Icon name="sparkles" size={14} /> Warna kulit AI</button>
          <button onClick={onSmartSizing}><Icon name="shirt" size={14} /> Smart sizing</button>
          <button onClick={onTryOn}><Icon name="layers" size={14} /> Full try-on</button>
        </div>
        <section className="catalog-results">
          <div className="catalog-results-heading"><h2>Semua pilihan untukmu</h2><span>{category}</span></div>
          {filteredProducts.length > 0
            ? <div className="product-grid catalog-product-grid">{filteredProducts.map((product) => <ProductCard key={product.name} product={product} onOpen={onProductOpen} />)}</div>
            : <div className="catalog-empty"><Icon name="search" size={24} /><strong>Produk tidak ditemukan</strong><span>Coba kata kunci atau kategori lain.</span></div>}
        </section>
        <CatalogAssistantCard onStart={onSmartSizing} />
      </main>
    </>
  )
}
