import { useState, useEffect } from 'react'
import DesktopBanner from './DesktopBanner'
import MobileBanner from './MobileBanner'

const Banner = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1050)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return isMobile ? <MobileBanner /> : <DesktopBanner />
}

export default Banner
