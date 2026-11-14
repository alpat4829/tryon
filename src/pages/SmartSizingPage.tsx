import { useState } from 'react'
import { BodyMeasurementForm } from '../components/BodyMeasurementForm'
import { SmartSizingHeader } from '../components/SmartSizingHeader'
import { SmartSizingResult } from '../components/SmartSizingResult'

type SmartSizingPageProps = {
  onBack: () => void
  gender: 'Pria' | 'Wanita' | 'Unisex'
  onGenderChange: (gender: 'Pria' | 'Wanita' | 'Unisex') => void
}

export function SmartSizingPage({ onBack, gender, onGenderChange }: SmartSizingPageProps) {
  const [height, setHeight] = useState('175')
  const [weight, setWeight] = useState('72')
  const [heightUnit, setHeightUnit] = useState<'cm' | 'ft'>('cm')
  const [weightUnit, setWeightUnit] = useState<'kg' | 'lbs'>('kg')
  const [confirmed, setConfirmed] = useState(false)

  const changeHeightUnit = (unit: 'cm' | 'ft') => {
    if (unit === heightUnit) return
    const value = Number(height)
    if (!Number.isFinite(value)) return
    setHeight(unit === 'cm' ? String(Math.round(value * 30.48)) : (value / 30.48).toFixed(1))
    setHeightUnit(unit)
  }

  const changeWeightUnit = (unit: 'kg' | 'lbs') => {
    if (unit === weightUnit) return
    const value = Number(weight)
    if (!Number.isFinite(value)) return
    setWeight(unit === 'kg' ? String(Math.round(value / 2.20462)) : String(Math.round(value * 2.20462)))
    setWeightUnit(unit)
  }

  return (
    <div className="smart-page">
      <SmartSizingHeader onBack={onBack} />
      <main className="smart-content">
        <div className="smart-intro"><span /><h1>Smart Sizing</h1><p>Dapatkan rekomendasi size yang akurat menurut data anda.</p></div>
        <BodyMeasurementForm height={height} weight={weight} heightUnit={heightUnit} weightUnit={weightUnit} gender={gender} onHeightChange={(value) => { setHeight(value); setConfirmed(false) }} onWeightChange={(value) => { setWeight(value); setConfirmed(false) }} onHeightUnitChange={changeHeightUnit} onWeightUnitChange={changeWeightUnit} onGenderChange={(value) => { onGenderChange(value); setConfirmed(false) }} onConfirm={() => setConfirmed(true)} />
        {confirmed && <SmartSizingResult height={height} weight={weight} heightUnit={heightUnit} weightUnit={weightUnit} gender={gender} />}
      </main>
    </div>
  )
}
