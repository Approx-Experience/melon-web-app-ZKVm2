import '../assets/css/DesktopBanner.css'

const DesktopBanner = () => (
  <section className='desktop-banner'>
    <div className='desktop-banner-container'>
    <div className='desktop-banner-content'>
      <div className='desktop-banner-subtitle'>SUMMER 2024</div>
      <h1 className='desktop-banner-title'>NEW COLLECTION</h1>
      <div className='desktop-banner-desc'>shorts, tees, tanks, & more!</div>
      <button className='desktop-banner-btn'>SHOP NOW</button>
    </div>
    <img
      src='/public/banner-1.png'
      alt='New Collection'
      className='desktop-banner-img'
    />
    </div>
  </section>
)

export default DesktopBanner
