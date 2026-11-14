import { useEffect, useState } from 'react'
import './App.css'
import { BottomNav } from './components/BottomNav'
import { FeatureCarousel } from './components/FeatureCarousel'
import { Header } from './components/Header'
import { ProductGrid } from './components/ProductGrid'
import { SearchBar } from './components/SearchBar'
import { Icon } from './components/Icon'
import { CatalogPage as ProductCatalogPage } from './components/CatalogPage'
import { TryOnPage } from './pages/TryOnPage'
import { SkinTonePage } from './pages/SkinTonePage'
import { ProductDetailPage } from './pages/ProductDetailPage'
import { SmartSizingPage } from './pages/SmartSizingPage'
import { ProfilePage } from './pages/ProfilePage'
import { FittingRoomPreview } from './components/FittingRoomPreview'
import type { Product } from './components/ProductCard'

type Page = 'beranda' | 'katalog' | 'simpan' | 'profil' | 'tryon' | 'skin-tone' | 'product' | 'smart-sizing' | 'fitting-room'

const defaultProduct: Product = {
  name: 'Jaket Cokelat',
  category: 'PAKAIAN LUAR · PRIA',
  price: 'Rp 680.000',
  image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=88',
  badge: 'RILIS BARU',
}

function getPageFromUrl(): Page {
  const page = window.location.pathname.slice(1) as Page
  return ['beranda', 'katalog', 'simpan', 'profil', 'tryon', 'skin-tone', 'smart-sizing', 'fitting-room'].includes(page) || page.startsWith('product') ? (page.startsWith('product') ? 'product' : page) : 'beranda'
}

function HomePage({ onTryOn, onSkinTone, onSmartSizing, onProductOpen, onNavigate }: { onTryOn: () => void; onSkinTone: () => void; onSmartSizing: () => void; onProductOpen: (product: Product) => void; onNavigate: (page: Page) => void }) {
  return (
    <>
      <Header onCatalog={() => onNavigate('katalog')} onProfile={() => onNavigate('profil')} />
      <main>
        <div className="content">
          <div className="page-heading">
            <div>
              <span className="eyebrow">PERSONAL STYLING</span>
              <h1>Katalog Pintar</h1>
            </div>
            <button className="round-button" aria-label="Buka menu"><span /></button>
          </div>
          <SearchBar />
          <FeatureCarousel onTryOn={onTryOn} onSkinTone={onSkinTone} onSmartSizing={onSmartSizing} />
          <ProductGrid onProductOpen={onProductOpen} />
        </div>
      </main>
    </>
  )
}

function EmptyPage({ page, onBack, onNavigate }: { page: 'simpan' | 'profil'; onBack: () => void; onNavigate: (page: Page) => void }) {
  const isWishlist = page === 'simpan'
  return (
    <>
      <Header onCatalog={() => onNavigate('katalog')} onProfile={() => onNavigate('profil')} />
      <main className="empty-page">
        <div className="empty-icon"><Icon name={isWishlist ? 'bookmark' : 'profile'} size={28} /></div>
        <span className="eyebrow">{isWishlist ? 'KOLEKSI TERSIMPAN' : 'AKUN ANDA'}</span>
        <h1>{isWishlist ? 'Wishlist' : 'Profil'}</h1>
        <p>{isWishlist ? 'Produk favoritmu akan muncul di sini.' : 'Kelola preferensi ukuran dan gaya personalmu.'}</p>
        <button className="primary-button" onClick={onBack}>Kembali ke katalog <Icon name="arrow" size={16} /></button>
      </main>
    </>
  )
}

function App() {
  const [page, setPage] = useState<Page>(getPageFromUrl)
  const [selectedProduct, setSelectedProduct] = useState<Product>(defaultProduct)

  useEffect(() => {
    const handlePopState = () => setPage(getPageFromUrl())
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = (nextPage: Page) => {
    window.history.pushState({}, '', nextPage === 'beranda' ? '/' : `/${nextPage}`)
    setPage(nextPage)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openProduct = (product: Product) => {
    setSelectedProduct(product)
    window.history.pushState({}, '', `/product/${encodeURIComponent(product.name)}`)
    setPage('product')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (page === 'tryon') {
    return <TryOnPage onBack={() => navigate('katalog')} onBuy={(product) => { setSelectedProduct(product); navigate('product') }} />
  }

  if (page === 'skin-tone') {
    return <SkinTonePage onBack={() => navigate('katalog')} onTryOn={() => navigate('tryon')} />
  }

  if (page === 'product') {
    return <ProductDetailPage product={selectedProduct} onBack={() => navigate('katalog')} onTryOn={() => navigate('tryon')} />
  }

  if (page === 'smart-sizing') {
    return <SmartSizingPage onBack={() => navigate('katalog')} />
  }

  if (page === 'fitting-room') {
    return <FittingRoomPreview onBack={() => navigate('profil')} />
  }

  if (page === 'profil') {
    return <ProfilePage onFittingRoom={() => navigate('fitting-room')} onCatalog={() => navigate('katalog')} onNavigate={(nextPage) => navigate(nextPage as Page)} />
  }

  return (
    <div className="app-shell">
      {page === 'simpan'
        ? <EmptyPage page={page} onBack={() => navigate('katalog')} onNavigate={navigate} />
        : page === 'katalog'
          ? <ProductCatalogPage onTryOn={() => navigate('tryon')} onSkinTone={() => navigate('skin-tone')} onSmartSizing={() => navigate('smart-sizing')} onProductOpen={openProduct} />
          : <HomePage onTryOn={() => navigate('tryon')} onSkinTone={() => navigate('skin-tone')} onSmartSizing={() => navigate('smart-sizing')} onProductOpen={openProduct} onNavigate={navigate} />}
      <BottomNav activePage={page} onNavigate={(nextPage) => navigate(nextPage as Page)} />
    </div>
  )
}

export default App
