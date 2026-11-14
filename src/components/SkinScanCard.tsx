import { Icon } from './Icon'

type SkinScanCardProps = {
  imageUrl?: string
}

export function SkinScanCard({ imageUrl = '/images/futura-example.jpg' }: SkinScanCardProps) {
  return (
    <section className="skin-scan-card">
      <div className="skin-scan-image">
        <img src={imageUrl} alt="Foto contoh untuk analisa warna kulit" />
        <div className="skin-scan-overlay">
          <div className="scan-meta">
            <span><Icon name="check" size={13} /> Pindai Biometrik Aktif</span>
            <span><i /> Hex #D4A373</span>
          </div>
          <div className="scan-frame" aria-label="Area pemindaian wajah">
            <i /><i /><i /><i /><b />
          </div>
          <div className="scan-status">
            <span><i /> Undertone: Warm Golden</span>
            <small>Posisikan wajah di dalam bingkai untuk hasil terbaik</small>
          </div>
        </div>
      </div>
    </section>
  )
}
