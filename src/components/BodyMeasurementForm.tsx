import { useRef, type ChangeEvent } from 'react'
import { Icon } from './Icon'

type BodyMeasurementFormProps = {
  height: string
  weight: string
  imageUrl: string
  onHeightChange: (value: string) => void
  onWeightChange: (value: string) => void
  onImageChange: (value: string) => void
  onConfirm: () => void
}

export function BodyMeasurementForm({ height, weight, imageUrl, onHeightChange, onWeightChange, onImageChange, onConfirm }: BodyMeasurementFormProps) {
  const fileInput = useRef<HTMLInputElement>(null)
  const handleFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) onImageChange(URL.createObjectURL(file))
  }

  return (
    <section className="smart-form-card">
      <div className="smart-card-heading"><div><i /> <strong>Masukkan Ukuran Tubuh</strong></div><span>MANDIRI</span></div>
      <div className="measurement-field">
        <div className="field-label"><div><strong>Tinggi Badan</strong><small>Kalibrasi presisi</small></div><span>cm</span></div>
        <div className="measurement-input"><input inputMode="numeric" value={height} onChange={(event) => onHeightChange(event.target.value)} aria-label="Tinggi badan" /><b>cm</b></div>
        <input className="measurement-range" type="range" min="120" max="220" value={height || 175} onChange={(event) => onHeightChange(event.target.value)} aria-label="Atur tinggi badan" />
      </div>
      <div className="measurement-field">
        <div className="field-label"><div><strong>Berat Badan</strong><small>Digunakan untuk proporsi</small></div><span>kg</span></div>
        <div className="measurement-input"><input inputMode="decimal" value={weight} onChange={(event) => onWeightChange(event.target.value)} aria-label="Berat badan" /><b>kg</b></div>
        <input className="measurement-range" type="range" min="35" max="150" value={weight || 72} onChange={(event) => onWeightChange(event.target.value)} aria-label="Atur berat badan" />
      </div>
      <div className="posture-upload">
        <div className="posture-preview">
          {imageUrl ? <img src={imageUrl} alt="Foto postur pengguna" /> : <><Icon name="profile" size={28} /><span>Template Foto Postur</span><small>Gunakan foto seluruh badan</small></>}
        </div>
        <div className="upload-actions">
          <button onClick={() => fileInput.current?.click()}><Icon name="search" size={15} /> Buka Kamera</button>
          <button onClick={() => fileInput.current?.click()}><Icon name="layers" size={15} /> Pilih Galeri</button>
          <input ref={fileInput} type="file" accept="image/*" onChange={handleFile} hidden />
        </div>
      </div>
      <button className="smart-confirm" onClick={onConfirm}><Icon name="check" size={17} /> Konfirmasi</button>
    </section>
  )
}
