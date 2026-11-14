import { ProductCartBar } from '../components/ProductCartBar'
import { ProductDescription } from '../components/ProductDescription'
import { ProductDetailHeader } from '../components/ProductDetailHeader'
import { ProductFitAnalysis } from '../components/ProductFitAnalysis'
import { ProductGallery } from '../components/ProductGallery'
import { ProductInfo } from '../components/ProductInfo'
import type { Product } from '../components/ProductCard'

type ProductDetailPageProps = {
  product: Product
  onBack: () => void
  onTryOn: () => void
}

export function ProductDetailPage({ product, onBack, onTryOn }: ProductDetailPageProps) {
  return (
    <div className="product-detail-page">
      <ProductDetailHeader onBack={onBack} />
      <main className="product-detail-content">
        <ProductGallery product={product} onTryOn={onTryOn} />
        <ProductInfo product={product} />
        <ProductFitAnalysis />
        <ProductDescription />
      </main>
      <ProductCartBar price={product.price} />
    </div>
  )
}
