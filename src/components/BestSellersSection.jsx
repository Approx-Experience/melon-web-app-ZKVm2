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
    <section style={{ padding: '48px 24px', maxWidth: 1200, margin: '0 auto' }}>
      <h2
        style={{
          textAlign: 'center',
          fontWeight: 700,
          fontSize: 28,
          fontFamily: 'Montserrat, sans-serif',
          color: '#000',
          marginBottom: 8
        }}
      >
        best sellers
      </h2>
      <div
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: '#000',
          fontFamily: 'Montserrat, sans-serif',
          marginBottom: 32
        }}
      >
        these things are a win, low stockcases
      </div>
      <Row className='g-4'>
        {products.map((product) => (
          <Col
            key={product.id}
            xs={12}
            sm={6}
            lg={3}
            className='d-flex'
          >
            <div
              style={{
                background: '#FFF',
                padding: 0,
                borderRadius: 0,
                boxShadow: 'none',
                height: '100%'
              }}
            >
              <div
                style={{
                  width: 249.6,
                  height: 400.8,
                  background: '#eee',
                  overflow: 'hidden'
                }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  style={{
                    width: 249.6,
                    height: 400.8,
                    objectFit: 'cover',
                    borderRadius: 0
                  }}
                />
              </div>
              <div style={{ padding: '16px 8px 8px 8px' }}>
                <div
                  style={{
                    fontWeight: 700,
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: 16,
                    color: '#000',
                    marginBottom: 2
                  }}
                >
                  {product.title}
                </div>
                <div
                  style={{
                    fontWeight: 500,
                    fontSize: 15,
                    color: '#000',
                    marginBottom: 2
                  }}
                >
                  {product.price}
                </div>
                <div
                  style={{ fontSize: 13, color: '#36E15C', marginBottom: 2 }}
                >
                  <a
                    href='#'
                    style={{
                      color: '#36E15C',
                      textDecoration: 'underline',
                      fontWeight: 500
                    }}
                  >
                    {product.styles}
                  </a>
                </div>
                {product.isNew && (
                  <span
                    style={{
                      display: 'inline-block',
                      background: '#FEEBEB',
                      color: '#E13636',
                      fontWeight: 700,
                      fontSize: 12,
                      borderRadius: 0,
                      marginTop: 4,
                      padding: '2px 8px',
                      fontFamily: 'Montserrat, sans-serif',
                      letterSpacing: 0.2
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
