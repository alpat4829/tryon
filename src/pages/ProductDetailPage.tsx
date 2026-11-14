import { ProductCartBar } from '../components/ProductCartBar'
import { ProductDescription } from '../components/ProductDescription'
import { ProductDetailHeader } from '../components/ProductDetailHeader'
import { ProductFitAnalysis } from '../components/ProductFitAnalysis'
import { ProductGallery } from '../components/ProductGallery'
import { ProductInfo } from '../components/ProductInfo'
import type { Product } from '../components/ProductCard'
import { useState } from 'react'
import { ProductTryOnModal } from '../components/ProductTryOnModal'

type ProductDetailPageProps = {
  product: Product
  onBack: () => void
  onTryOn: (product: Product, photoUrl: string) => void
}

export function ProductDetailPage({ product, onBack, onTryOn }: ProductDetailPageProps) {
  const [showTryOnModal, setShowTryOnModal] = useState(false)

  return (
    <div className="product-detail-page">
      <ProductDetailHeader onBack={onBack} />
      <main className="product-detail-content">
        <ProductGallery product={product} onTryOn={() => setShowTryOnModal(true)} />
        <ProductInfo product={product} />
        <ProductFitAnalysis />
        <ProductDescription />
      </main>
      <ProductCartBar price={product.price} />
      {showTryOnModal && <ProductTryOnModal product={product} onClose={() => setShowTryOnModal(false)} onConfirm={(photoUrl) => onTryOn(product, photoUrl)} />}
    </div>
  )
}
