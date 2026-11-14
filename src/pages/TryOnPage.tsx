import { useState } from 'react'
import { Icon } from '../components/Icon'
import { TryOnHeader } from '../components/TryOnHeader'
import { TryOnProductPicker, type TryOnProduct } from '../components/TryOnProductPicker'
import { TryOnSummary } from '../components/TryOnSummary'
import type { Product } from '../components/ProductCard'

const tops: TryOnProduct[] = [
  { id: 'jacket', name: 'Jaket Cokelat', price: 'Rp 830.000', size: 'L', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=500&q=85' },
  { id: 'shirt', name: 'Kemeja Mint Linen', price: 'Rp 680.000', size: 'L', image: 'https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=500&q=85' },
]

const bottoms: TryOnProduct[] = [
  { id: 'cargo', name: 'Celana Cargo Hitam', price: 'Rp 590.000', size: '32', image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=500&q=85' },
  { id: 'wide-leg', name: 'Celana Wide Leg', price: 'Rp 490.000', size: '32', image: 'https://images.unsplash.com/photo-1506629905607-d9c297d3e2e8?auto=format&fit=crop&w=500&q=85' },
]

type TryOnPageProps = {
  onBack: () => void
  onBuy: (product: Product) => void
}

export function TryOnPage({ onBack, onBuy }: TryOnPageProps) {
  const [selectedTop, setSelectedTop] = useState(tops[0])
  const [selectedBottom, setSelectedBottom] = useState(bottoms[0])
  const [generated, setGenerated] = useState(false)

  const randomize = () => {
    setSelectedTop(tops[Math.floor(Math.random() * tops.length)])
    setSelectedBottom(bottoms[Math.floor(Math.random() * bottoms.length)])
    setGenerated(false)
  }

  return (
    <div className="tryon-page">
      <TryOnHeader onBack={onBack} />
      <main className="tryon-content">
        <div className="tryon-intro">
          <div>
            <span className="step-pill"><i /> LANGKAH 1: PILIH KOMPONEN</span>
            <h1>Pilih Pakaian Anda</h1>
            <p>Tap tanda <b>+</b> untuk memilih atasan &amp; bawahan</p>
          </div>
          <button className="random-button" onClick={randomize}><Icon name="shuffle" size={16} /> Acak AI</button>
        </div>
        <div className="tryon-search">
          <Icon name="search" size={16} />
          <input placeholder="Cari atasan atau bawahan..." aria-label="Cari atasan atau bawahan" />
          <button aria-label="Filter"><Icon name="filter" size={17} /></button>
        </div>
        <TryOnProductPicker title="1. Pilih Atasan" recommendation="Rekomendasi AI Ukuran L" products={tops} selectedId={selectedTop.id} onSelect={(product) => { setSelectedTop(product); setGenerated(false) }} />
        <TryOnProductPicker title="2. Pilih Bawahan" recommendation="Rekomendasi AI Ukuran 32" products={bottoms} selectedId={selectedBottom.id} onSelect={(product) => { setSelectedBottom(product); setGenerated(false) }} />
        <TryOnSummary top={selectedTop} bottom={selectedBottom} onGenerate={() => setGenerated(true)} generated={generated} onBuy={() => onBuy({
          name: selectedTop.name,
          category: 'PAKAIAN LUAR · PRIA',
          price: selectedTop.price,
          image: selectedTop.image,
          badge: 'SET AI FIT',
        })} />
      </main>
    </div>
  )
}
