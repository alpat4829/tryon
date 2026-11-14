import { Icon } from './Icon'

type SmartSizingResultProps = {
  height: string
  weight: string
  heightUnit: 'cm' | 'ft'
  weightUnit: 'kg' | 'lbs'
  gender: 'Pria' | 'Wanita' | 'Unisex'
}

export function SmartSizingResult({ height, weight, heightUnit, weightUnit, gender }: SmartSizingResultProps) {
  return (
    <section className="smart-result-card">
      <div className="smart-result-heading"><div><Icon name="sparkles" size={18} /><strong>Hasil Analisa Postur AI</strong></div><span>96% PRESISI</span></div>
      <div className="body-profile">
        <div className="body-illustration"><Icon name="profile" size={42} /><i /></div>
        <div><small>PROFIL TERDETEKSI</small><strong>Balanced Rectangle</strong><span>{gender} · {height || '175'} {heightUnit} · {weight || '72'} {weightUnit} · Estimasi profil</span></div>
      </div>
      <div className="smart-recommendation"><div><strong>Rekomendasi ukuran teratas</strong><span>Berdasarkan proporsi bahu dan dada kamu</span></div><b>L</b></div>
      <div className="body-metrics"><span><small>Bahu</small><strong>Ideal</strong></span><span><small>Dada</small><strong>Regular fit</strong></span><span><small>Panjang</small><strong>72 cm</strong></span></div>
    </section>
  )
}
