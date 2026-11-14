import { ProfileCard } from '../components/ProfileCard'
import { ProfileGuarantee } from '../components/ProfileGuarantee'
import { ProfileHeader } from '../components/ProfileHeader'
import { SavedTryOn } from '../components/SavedTryOn'
import { ProfileRecommendations } from '../components/ProfileRecommendations'
import { Header } from '../components/Header'
import { BottomNav } from '../components/BottomNav'

type ProfilePageProps = {
  onFittingRoom: () => void
  onCatalog: () => void
  onNavigate: (page: string) => void
}

export function ProfilePage({ onFittingRoom, onCatalog, onNavigate }: ProfilePageProps) {
  return (
    <div className="profile-page app-shell">
      <Header onCatalog={onCatalog} onProfile={() => undefined} />
      <main className="profile-content">
        <ProfileHeader onSettings={() => undefined} />
        <ProfileCard onEdit={() => undefined} />
        <SavedTryOn onOpenFittingRoom={onFittingRoom} />
        <ProfileRecommendations />
        <ProfileGuarantee />
        <button className="profile-catalog-button" onClick={onCatalog}>Kembali ke katalog <span>→</span></button>
      </main>
      <BottomNav activePage="profil" onNavigate={onNavigate} />
    </div>
  )
}
