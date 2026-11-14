import { ProfileCard } from '../components/ProfileCard'
import { ProfileHeader } from '../components/ProfileHeader'
import { ProfileRecommendations } from '../components/ProfileRecommendations'
import { Header } from '../components/Header'
import { BottomNav } from '../components/BottomNav'
import { FeatureCarousel } from '../components/FeatureCarousel'

type ProfilePageProps = {
  onHome: () => void
  onCatalog: () => void
  onSmartSizing: () => void
  onTryOn: () => void
  onSkinTone: () => void
  onNavigate: (page: string) => void
  gender: 'Pria' | 'Wanita' | 'Unisex'
  skinTone: string
}

export function ProfilePage({ onHome, onCatalog, onSmartSizing, onTryOn, onSkinTone, onNavigate, gender, skinTone }: ProfilePageProps) {
  return (
    <div className="profile-page app-shell">
      <Header onProfile={() => undefined} />
      <main className="profile-content">
        <ProfileHeader onSettings={() => undefined} />
        <ProfileCard onEdit={() => undefined} gender={gender} skinTone={skinTone} />
        <ProfileRecommendations onMore={onCatalog} />
        <FeatureCarousel onTryOn={onTryOn} onSkinTone={onSkinTone} onSmartSizing={onSmartSizing} />
        <button className="profile-catalog-button" onClick={onHome}>Kembali ke beranda <span>→</span></button>
      </main>
      <BottomNav activePage="profil" onNavigate={onNavigate} />
    </div>
  )
}
