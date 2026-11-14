import { Icon } from './Icon'

export type TryOnProduct = {
  id: string
  name: string
  price: string
  image: string
  size: string
}

type TryOnProductPickerProps = {
  title: string
  recommendation: string
  products: TryOnProduct[]
  selectedId: string
  onSelect: (product: TryOnProduct) => void
}

export function TryOnProductPicker({ title, recommendation, products, selectedId, onSelect }: TryOnProductPickerProps) {
  return (
    <section className="tryon-picker">
      <div className="tryon-section-title">
        <div>
          <strong>{title}</strong>
          <span>• {recommendation}</span>
        </div>
        <span className="required-pill">Wajib 1 Item</span>
      </div>
      <div className="tryon-product-track">
        {products.map((product) => {
          const selected = selectedId === product.id
          return (
            <article className={`tryon-product ${selected ? 'selected' : ''}`} key={product.id}>
              <div className="tryon-product-image">
                <img src={product.image} alt={product.name} />
                <span>AI Size {product.size}</span>
              </div>
              <strong>{product.name}</strong>
              <b>{product.price}</b>
              <button onClick={() => onSelect(product)}>
                {selected ? <><Icon name="check" size={14} /> Terpilih</> : <><Icon name="close" size={13} /> Pilih +</>}
              </button>
            </article>
          )
        })}
      </div>
    </section>
  )
}
