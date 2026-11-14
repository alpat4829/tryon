import { useState } from 'react'
import { SkinScanCard } from '../components/SkinScanCard'
import { SkinToneHeader } from '../components/SkinToneHeader'
import { SkinToneRecommendations } from '../components/SkinToneRecommendations'
import { SkinToneResult } from '../components/SkinToneResult'

type SkinTonePageProps = {
  onBack: () => void
  onTryOn: () => void
  onToneDetected: (tone: string) => void
}

export function SkinTonePage({ onBack, onTryOn, onToneDetected }: SkinTonePageProps) {
  const [imageUrl, setImageUrl] = useState('')
  const [confirmed, setConfirmed] = useState(false)

  return (
    <div className="skintone-page">
      <SkinToneHeader onBack={onBack} />
      <main className="skintone-content">
        <SkinScanCard imageUrl={imageUrl} onImageChange={(url) => { setImageUrl(url); setConfirmed(false) }} onConfirm={() => { setConfirmed(true); onToneDetected('Warm Golden') }} />
        {confirmed && <><SkinToneResult /><SkinToneRecommendations onTryOn={onTryOn} /></>}
      </main>
    </div>
  )
}
