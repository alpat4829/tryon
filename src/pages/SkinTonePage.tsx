import { Icon } from '../components/Icon'
import { SkinScanCard } from '../components/SkinScanCard'
import { SkinToneHeader } from '../components/SkinToneHeader'
import { SkinToneRecommendations } from '../components/SkinToneRecommendations'
import { SkinToneResult } from '../components/SkinToneResult'

type SkinTonePageProps = {
  onBack: () => void
  onTryOn: () => void
}

export function SkinTonePage({ onBack, onTryOn }: SkinTonePageProps) {
  return (
    <div className="skintone-page">
      <SkinToneHeader onBack={onBack} />
      <main className="skintone-content">
        <SkinScanCard />
        <SkinToneResult />
        <SkinToneRecommendations onTryOn={onTryOn} />
      </main>
      <div className="skintone-actions">
        <button onClick={onBack}><Icon name="layers" size={17} /> Terapkan Filter Palet ke Katalog</button>
        <button onClick={onTryOn}><Icon name="sparkles" size={17} /> Coba Virtual dengan Palet Ini</button>
      </div>
    </div>
  )
}
