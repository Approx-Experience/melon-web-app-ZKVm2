import { Row, Col } from 'react-bootstrap'

const products = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  title: 'product title',
  price: '$19.00',
  styles: `${2 + (i % 3)} styles`,
  image: '/public/shorts.png',
  isNew: i % 3 === 0
}))

const BestSellersSection = () => {
  return (
    <section
      className='best-sellers-section py-4 px-2 mx-auto'
      style={{ maxWidth: 1200, marginTop: 48, marginBottom: 48 }}
    >
      <h2
        className='best-sellers-title text-center fw-bold mb-2'
        style={{
          fontSize: 28,
          fontFamily: 'Montserrat, sans-serif',
          color: '#000',
          fontWeight: 800
        }}
      >
        best sellers
      </h2>
      <div
        className='best-sellers-desc text-center mb-4'
        style={{
          fontSize: 16,
          color: '#000',
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 500
        }}
      >
        these things are a win, low stockcases
      </div>
      {/* Desktop: 4 columns, fixed size */}
      <Row className='g-4 d-none d-lg-flex'>
        {products.map((product) => (
          <Col key={product.id} lg={3} className='d-flex'>
            <div
              className='bg-white p-0 rounded-0 w-100 h-100 d-flex flex-column align-items-start'
              style={{
                boxShadow: 'none',
                borderRadius: 0,
                width: 249.6,
                minWidth: 249.6
              }}
            >
              <div
                className='w-100 mb-2'
                style={{
                  background: '#eee',
                  overflow: 'hidden',
                  width: 249.6,
                  height: 400.8,
                  borderRadius: 0
                }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className='img-fluid'
                  style={{
                    width: 249.6,
                    height: 400.8,
                    objectFit: 'cover',
                    borderRadius: 0
                  }}
                />
              </div>
              <div className='px-2 pb-2 w-100' style={{ textAlign: 'left' }}>
                <div
                  className='fw-bold mb-1'
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: 16,
                    color: '#000',
                    fontWeight: 700
                  }}
                >
                  {product.title}
                </div>
                <div
                  className='fw-medium mb-1'
                  style={{
                    fontSize: 15,
                    color: '#000',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 500
                  }}
                >
                  {product.price}
                </div>
                <div
                  className='mb-1'
                  style={{
                    fontSize: 13,
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 500
                  }}
                >
                  <a
                    href='#'
                    className='text-success text-decoration-underline fw-medium'
                    style={{ color: '#36E15C', fontWeight: 600 }}
                  >
                    {product.styles}
                  </a>
                </div>
                {product.isNew && (
                  <span
                    className='badge rounded-0 mt-2'
                    style={{
                      background: '#FEEBEB',
                      color: '#E13636',
                      fontWeight: 700,
                      fontSize: 12,
                      fontFamily: 'Montserrat, sans-serif',
                      letterSpacing: 0.2,
                      borderRadius: 0
                    }}
                  >
                    new arrival
                  </span>
                )}
              </div>
            </div>
          </Col>
        ))}
      </Row>
      {/* Mobile/tablet: 2 columns, auto size */}
      <Row className='g-4 d-lg-none'>
        {products.map((product) => (
          <Col key={product.id} xs={6} className='d-flex'>
            <div
              className='bg-white p-0 rounded-0 w-100 h-100 d-flex flex-column align-items-start'
              style={{ boxShadow: 'none', borderRadius: 0 }}
            >
              <div
                className='w-100 mb-2'
                style={{
                  background: '#eee',
                  overflow: 'hidden',
                  width: '100%',
                  height: 'auto',
                  aspectRatio: '5/8',
                  borderRadius: 0
                }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className='img-fluid'
                  style={{
                    width: '100%',
                    height: 'auto',
                    aspectRatio: '5/8',
                    objectFit: 'cover',
                    borderRadius: 0
                  }}
                />
              </div>
              <div className='px-2 pb-2 w-100' style={{ textAlign: 'left' }}>
                <div
                  className='fw-bold mb-1'
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: 16,
                    color: '#000',
                    fontWeight: 700
                  }}
                >
                  {product.title}
                </div>
                <div
                  className='fw-medium mb-1'
                  style={{
                    fontSize: 15,
                    color: '#000',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 500
                  }}
                >
                  {product.price}
                </div>
                <div
                  className='mb-1'
                  style={{
                    fontSize: 13,
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 500
                  }}
                >
                  <a
                    href='#'
                    className='text-success text-decoration-underline fw-medium'
                    style={{ color: '#36E15C', fontWeight: 600 }}
                  >
                    {product.styles}
                  </a>
                </div>
                {product.isNew && (
                  <span
                    className='badge rounded-0 mt-2'
                    style={{
                      background: '#FEEBEB',
                      color: '#E13636',
                      fontWeight: 700,
                      fontSize: 12,
                      fontFamily: 'Montserrat, sans-serif',
                      letterSpacing: 0.2,
                      borderRadius: 0
                    }}
                  >
                    new arrival
                  </span>
                )}
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </section>
  )
}

export default BestSellersSection
