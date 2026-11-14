import { useState } from 'react'
import { Icon } from '../components/Icon'
import { BodyMeasurementForm } from '../components/BodyMeasurementForm'
import { SmartSizingHeader } from '../components/SmartSizingHeader'
import { SmartSizingResult } from '../components/SmartSizingResult'

type SmartSizingPageProps = {
  onBack: () => void
}

export function SmartSizingPage({ onBack }: SmartSizingPageProps) {
  const [height, setHeight] = useState('175')
  const [weight, setWeight] = useState('72')
  const [imageUrl, setImageUrl] = useState('')
  const [confirmed, setConfirmed] = useState(false)

  return (
    <div className="smart-page">
      <SmartSizingHeader onBack={onBack} />
      <main className="smart-content">
        <div className="smart-intro"><span /><h1>Smart Sizing</h1><p>Dapatkan rekomendasi size yang akurat menurut data anda.</p></div>
        <BodyMeasurementForm height={height} weight={weight} imageUrl={imageUrl} onHeightChange={setHeight} onWeightChange={setWeight} onImageChange={(url) => { setImageUrl(url); setConfirmed(false) }} onConfirm={() => setConfirmed(true)} />
        {confirmed && <SmartSizingResult height={height} weight={weight} hasImage={Boolean(imageUrl)} />}
        <div className="smart-help"><Icon name="sparkles" size={17} /><span><strong>Tips foto postur</strong><small>Pastikan tubuh terlihat penuh, berdiri tegak, dan gunakan pencahayaan yang cukup.</small></span></div>
      </main>
    </div>
  )
}
