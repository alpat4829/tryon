import { Icon } from './Icon'
import type { TryOnProduct } from './TryOnProductPicker'
import { VirtualTryOnResult } from './VirtualTryOnResult'

type TryOnSummaryProps = {
  top: TryOnProduct
  bottom: TryOnProduct
  onGenerate: () => void
  generated: boolean
  onBuy: () => void
}

export function TryOnSummary({ top, bottom, onGenerate, generated, onBuy }: TryOnSummaryProps) {
  return (
    <>
      <section className="tryon-card selected-box">
        <div className="tryon-card-heading">
          <div><Icon name="layers" size={18} /><strong>Kotak Produk Terpilih</strong></div>
          <span>1 SET LENGKAP</span>
        </div>
        <div className="selected-item">
          <img src={top.image} alt={top.name} />
          <div>
            <small>ATASAN TERPILIH · Ukuran {top.size} (AI Fit)</small>
            <strong>{top.name}</strong>
            <span>{top.price}</span>
          </div>
        </div>
        <div className="selected-item">
          <img src={bottom.image} alt={bottom.name} />
          <div>
            <small>BAWAHAN TERPILIH · Ukuran {bottom.size} (AI Fit)</small>
            <strong>{bottom.name}</strong>
            <span>{bottom.price}</span>
          </div>
        </div>
      </section>
      <section className="tryon-card harmony-card">
        <div className="harmony-heading">
          <div><Icon name="sparkles" size={19} /><strong>Analisis Harmoni Setelan</strong></div>
          <b>98%<small>Sempurna</small></b>
        </div>
        <p>Kombinasi siluet relaks atasan earthy dengan aksen utility bawahan menciptakan tampilan yang proporsional dan seimbang di tubuh Anda.</p>
        <div className="harmony-tags">
          <span><small>REKOMENDASI SET</small>Atasan {top.size} • Celana {bottom.size}</span>
          <span><small>PROFIL ANDA</small>Alex (178 cm, 72 kg)</span>
        </div>
      </section>
      <section className="generate-card">
        <div>
          <Icon name="sparkles" size={20} />
          <div><strong>Konfirmasi Pilihan Pakaian</strong><small>Siap membuat simulasi avatar 3D interaktif</small></div>
        </div>
        <button onClick={onGenerate}>{generated ? <><Icon name="check" size={17} /> Set Berhasil Digenerate!</> : <><Icon name="sparkles" size={17} /> Generate Full Try-On</>}</button>
      </section>
      {generated && <VirtualTryOnResult top={top} bottom={bottom} onBuy={onBuy} />}
    </>
  )
}
