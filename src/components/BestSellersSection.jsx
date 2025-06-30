import { Row, Col } from 'react-bootstrap'
import ProductCard from './ProductCard'

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
            <ProductCard product={product}/>
          </Col>
        ))}
      </Row>
      {/* Mobile/tablet: 2 columns, auto size */}
      <Row className='g-4 d-lg-none'>
        {products.map((product) => (
          <Col key={product.id} xs={6} className='d-flex'>
            <ProductCard product={product}/>
          </Col>
        ))}
      </Row>
    </section>
  )
}

export default BestSellersSection
