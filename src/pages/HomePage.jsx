import BannerSection from '../components/BannerSection'
import ArrivalsSection from '../components/ArrivalsSection'
import BestSellersSection from '../components/BestSellersSection'

const HomePage = () => {
  return (
    <main style={{ background: '#FAF9F8', minHeight: '100vh' }}>
      <BannerSection />
      <ArrivalsSection />
      <BestSellersSection />
    </main>
  )
}

export default HomePage
