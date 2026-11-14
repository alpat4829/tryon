import { Icon, type IconName } from './Icon'

type Feature = {
  title: string
  description: string
  icon: IconName
}

type FeatureCarouselProps = {
  onTryOn: () => void
  onSkinTone: () => void
  onSmartSizing: () => void
}

const features: Feature[] = [
  { title: 'Analisis Warna Kulit AI', description: 'Temukan palet sempurna', icon: 'sparkles' },
  { title: 'Smart Sizing', description: 'Coba outfit instan', icon: 'shirt' },
  { title: 'Full Try On', description: 'Simulasi pakaian lengkap', icon: 'layers' },
]

export function FeatureCarousel({ onTryOn, onSkinTone, onSmartSizing }: FeatureCarouselProps) {
  return (
    <section className="feature-section">
      <div className="section-label-row">
        <span className="eyebrow accent">KHUSUS UNTUK ANDA</span>
        <span className="counter-label">01 / 03</span>
      </div>
      <div className="feature-track">
        {features.map((feature, index) => (
          <button className={`feature-card ${index === 0 ? 'active' : ''}`} key={feature.title} onClick={feature.title === 'Full Try On' ? onTryOn : feature.title === 'Analisis Warna Kulit AI' ? onSkinTone : onSmartSizing}>
            <span className="feature-icon"><Icon name={feature.icon} size={22} /></span>
            <span className="feature-copy">
              <strong>{feature.title}</strong>
              <small>{feature.description}</small>
            </span>
            <span className="feature-arrow"><Icon name="arrow" size={16} /></span>
          </button>
        ))}
      </div>
    </section>
  )
}
