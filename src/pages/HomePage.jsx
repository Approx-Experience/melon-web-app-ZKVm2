import Banner from '../components/Banner'
import ArrivalsSection from '../components/ArrivalsSection'
import BestSellersSection from '../components/BestSellersSection'
import { useState, useEffect } from 'react'

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1050)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <main style={{ background: '#FAF9F8', minHeight: '100vh' }}>
      <Banner />
      <div
        className={`home-sections-container${isMobile ? ' mobile' : ''}`}
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '1.5rem' : '2rem',
          width: '100%'
        }}
      >
        <div style={{ width: '100%' }}>
          <ArrivalsSection />
          <BestSellersSection />
        </div>
      </div>
    </main>
  )
}

export default HomePage
