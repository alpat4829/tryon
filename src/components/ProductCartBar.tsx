import { Icon } from './Icon'

type ProductCartBarProps = {
  price: string
}

export function ProductCartBar({ price }: ProductCartBarProps) {
  return (
    <footer className="detail-cart-bar">
      <button className="cart-icon-button" aria-label="Lihat keranjang"><Icon name="cart" size={19} /><i>1</i></button>
      <button className="add-cart-button"><span><Icon name="cart" size={19} /> Tambah ke<br />Keranjang</span><strong>{price.replace(' ', '\n')}</strong></button>
    </footer>
  )
}
