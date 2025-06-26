
const BannerSection = () => {
  return (
    <section
      style={{
        background: '#EBF2ED',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '48px 24px',
        maxWidth: 1200,
        margin: '0 auto',
        borderRadius: 0,
        gap: 32,
        flexWrap: 'wrap'
      }}
    >
      <div style={{ flex: 1, minWidth: 280 }}>
        <div
          style={{
            fontWeight: 500,
            fontSize: 14,
            marginBottom: 8,
            fontFamily: 'Montserrat, sans-serif',
            color: '#000'
          }}
        >
          SUMMER 2024
        </div>
        <h1
          style={{
            fontWeight: 800,
            fontSize: 40,
            margin: 0,
            fontFamily: 'Montserrat, sans-serif',
            color: '#000'
          }}
        >
          NEW COLLECTION
        </h1>
        <div
          style={{
            fontSize: 18,
            margin: '16px 0 32px 0',
            fontFamily: 'Montserrat, sans-serif',
            color: '#000'
          }}
        >
          shorts, tees, tanks, & more!
        </div>
        <button
          style={{
            background: '#36E15C',
            color: '#000',
            fontWeight: 700,
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 18,
            padding: '16px 32px',
            border: 'none',
            borderRadius: 0,
            cursor: 'pointer',
            boxShadow: 'none'
          }}
        >
          SHOP NOW
        </button>
      </div>
      <div
        style={{
          flex: 1,
          minWidth: 280,
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <img
          src='/public/banner-1.png'
          alt='New Collection'
          style={{
            width: '100%',
            maxWidth: 340,
            height: 'auto',
            objectFit: 'cover',
            borderRadius: 0
          }}
        />
      </div>
    </section>
  )
}

export default BannerSection
