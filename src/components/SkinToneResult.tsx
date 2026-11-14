import { Icon } from './Icon'

export function SkinToneResult() {
  return (
    <>
      <section className="tone-result-card">
        <div className="tone-result-heading">
          <div><Icon name="sparkles" size={17} /><strong>Hasil Analisa Warna</strong></div>
          <span>99% AKURAT</span>
        </div>
        <div className="tone-result-main">
          <div className="tone-swatch" />
          <div>
            <span className="tone-label">WARNA KULIT TERDETEKSI</span>
            <strong>Warm Golden</strong>
            <small>Hex #D4A373 · Spektrum hangat</small>
          </div>
        </div>
        <div className="tone-palette">
          <div><i style={{ background: '#C04000' }} /><span>Burnt Orange<small>#C04000</small></span></div>
          <div><i style={{ background: '#A1C0AD' }} /><span>Sage Mint<small>#A1C0AD</small></span></div>
          <div><i style={{ background: '#B8860B' }} /><span>Golden Ochre<small>#B8860B</small></span></div>
        </div>
      </section>
      <section className="avoid-colors-card">
        <div className="avoid-heading"><Icon name="close" size={17} /><strong>Warna yang Sebaiknya Dihindari</strong></div>
        <p>Warna dingin bersaturasi pucat cenderung membuat rona kulit hangat Anda terlihat kusam atau lelah.</p>
        <div className="avoid-colors">
          <div><i style={{ background: '#D0E7FF' }} /><span>Icy Blue<small>Terlalu Dingin</small></span></div>
          <div><i style={{ background: '#E1E3E8' }} /><span>Pale Silver Gray<small>Pudar Spektrum</small></span></div>
        </div>
      </section>
    </>
  )
}
