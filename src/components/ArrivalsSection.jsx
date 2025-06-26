import { Container, Row, Col } from 'react-bootstrap'

const arrivals = [
  { label: 'shirts', img: '/public/shirts.png', link: '#' },
  { label: 'shorts', img: '/public/shorts.png', link: '#' },
  { label: 'hats', img: '/public/hats.png', link: '#' },
  { label: 'athleisure', img: '/public/athleisure.png', link: '#' }
]

const ArrivalsSection = () => (
  <section className='py-3 px-2' style={{ maxWidth: 1100, margin: '0 auto' }}>
    <h2
      className='text-center fw-bold'
      style={{
        fontSize: 33.6,
        fontFamily: 'Montserrat, sans-serif',
        color: '#000',
        marginBottom: 19.2
      }}
    >
      new arrivals
    </h2>
    <div
      className='text-center'
      style={{
        fontSize: 19.2,
        color: '#000',
        fontFamily: 'Montserrat, sans-serif',
        marginBottom: 38.4
      }}
    >
      fresh threads for your sports to use
    </div>
    <Container fluid className='d-flex justify-content-between'>
      <Row
        className='g-0 w-100 justify-content-center'
        style={{ height: 400.8 }}
      >
        <Col className='col-auto me-3 p-0'>
          <a
            href={arrivals[0].link}
            className='d-block'
            style={{ width: 336, height: 400.8 }}
          >
            <img
              src={arrivals[0].img}
              alt={arrivals[0].label}
              style={{
                width: 336,
                height: 400.8,
                objectFit: 'cover',
                borderRadius: 0
              }}
            />
          </a>
        </Col>
        <Col className='col-auto me-3 p-0'>
          <a
            href={arrivals[1].link}
            className='d-block'
            style={{ width: 249.6, height: 400.8 }}
          >
            <img
              src={arrivals[1].img}
              alt={arrivals[1].label}
              style={{
                width: 249.6,
                height: 400.8,
                objectFit: 'cover',
                borderRadius: 0
              }}
            />
          </a>
        </Col>
        <Col
          className='col-auto p-0 d-flex flex-column justify-content-between'
          style={{ width: 249.6 }}
        >
          <a
            href={arrivals[2].link}
            className='d-block mb-3'
            style={{ width: 249.6, height: 187.2 }}
          >
            <img
              src={arrivals[2].img}
              alt={arrivals[2].label}
              style={{
                width: 249.6,
                height: 187.2,
                objectFit: 'cover',
                borderRadius: 0
              }}
            />
          </a>
          <a
            href={arrivals[3].link}
            className='d-block'
            style={{ width: 249.6, height: 187.2 }}
          >
            <img
              src={arrivals[3].img}
              alt={arrivals[3].label}
              style={{
                width: 249.6,
                height: 187.2,
                objectFit: 'cover',
                borderRadius: 0
              }}
            />
          </a>
        </Col>
      </Row>
    </Container>
  </section>
)

export default ArrivalsSection
