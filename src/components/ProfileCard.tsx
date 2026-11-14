import { Icon } from './Icon'

type ProfileCardProps = {
  onEdit: () => void
  gender: 'Pria' | 'Wanita' | 'Unisex'
  skinTone: string
}

export function ProfileCard({ onEdit, gender, skinTone }: ProfileCardProps) {
  return (
    <section className="profile-card">
      <div className="profile-card-top">
        <div className="profile-person">
          <div className="profile-photo"><img src="/images/futura-example.jpg" alt="Alex Mercer" /><i><Icon name="check" size={11} /></i></div>
          <div><strong>Alex Mercer</strong><span><Icon name="check" size={11} /> Profil Ukuran Terverifikasi</span></div>
        </div>
        <button className="edit-profile" onClick={onEdit}><Icon name="layers" size={13} /> Ubah</button>
      </div>
      <div className="profile-metrics">
        <div><small>TINGGI</small><strong>178 <em>cm</em></strong></div>
        <div><small>BERAT</small><strong>72 <em>kg</em></strong></div>
        <div><small>BMI</small><strong>22.7</strong></div>
        <div><small>BENTUK<br />TUBUH</small><strong>Atletis</strong></div>
      </div>
      <div className="profile-gender"><small>JENIS KELAMIN</small><strong>{gender}</strong></div>
      <div className="profile-gender"><small>TONE WARNA KULIT</small><strong>{skinTone}</strong></div>
    </section>
  )
}
