import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const arrivals = [
  {
    label: 'shirts',
    img: '/public/shirts.png',
    link: '/browse?category=shirts'
  },
  {
    label: 'shorts',
    img: '/public/shorts.png',
    link: '/browse?category=shorts'
  },
  {
    label: 'athleisure',
    img: '/public/athleisure.png',
    link: '/browse?category=athleisure'
  },
  { label: 'hats', img: '/public/hats.png', link: '/browse?category=hats' }
]

const ArrivalsSection = () => (
  <section
    className='py-3 px-2 mx-auto'
    style={{ maxWidth: 1100, marginTop: 48, marginBottom: 48 }}
  >
    <h2
      className='text-center fw-bold mb-3'
      style={{
        fontSize: 33.6,
        fontFamily: 'Montserrat, sans-serif',
        color: '#000',
        fontWeight: 800
      }}
    >
      new arrivals
    </h2>
    <div
      className='text-center mb-4'
      style={{
        fontSize: 19.2,
        color: '#000',
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 500
      }}
    >
      fresh threads for your sports to use
    </div>
    {/* Desktop layout */}
    <Container fluid className='d-none d-lg-flex justify-content-between p-0'>
      <Row
        className='g-0 w-100 justify-content-center align-items-stretch'
        style={{ height: 400.8 }}
      >
        <Col className='col-auto me-3 p-0'>
          <Link
            to={arrivals[0].link}
            className='d-block position-relative'
            style={{ width: 336, height: 400.8 }}
          >
            <img
              src={arrivals[0].img}
              alt={arrivals[0].label}
              style={{
                width: 336,
                height: 400.8,
                objectFit: 'cover',
                borderRadius: 0,
                display: 'block'
              }}
            />
            {/* <div
              className='position-absolute bottom-0 start-0 m-2 px-3 py-1 bg-light fw-bold'
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 16,
                color: '#000'
              }}
            >
              {arrivals[0].label}
            </div> */}
          </Link>
        </Col>
        <Col className='col-auto me-3 p-0'>
          <Link
            to={arrivals[1].link}
            className='d-block position-relative'
            style={{ width: 249.6, height: 400.8 }}
          >
            <img
              src={arrivals[1].img}
              alt={arrivals[1].label}
              style={{
                width: 249.6,
                height: 400.8,
                objectFit: 'cover',
                borderRadius: 0,
                display: 'block'
              }}
            />
            {/* <div
              className='position-absolute bottom-0 start-0 m-2 px-3 py-1 bg-light fw-bold'
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 16,
                color: '#000'
              }}
            >
              {arrivals[1].label}
            </div> */}
          </Link>
        </Col>
        <Col
          className='col-auto p-0 d-flex flex-column justify-content-between'
          style={{ width: 249.6 }}
        >
          <Link
            to={arrivals[3].link}
            className='d-block mb-3 position-relative'
            style={{ width: 249.6, height: 187.2 }}
          >
            <img
              src={arrivals[3].img}
              alt={arrivals[3].label}
              style={{
                width: 249.6,
                height: 187.2,
                objectFit: 'cover',
                borderRadius: 0,
                display: 'block'
              }}
            />
            {/* <div
              className='position-absolute bottom-0 start-0 m-2 px-3 py-1 bg-light fw-bold'
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 16,
                color: '#000'
              }}
            >
              {arrivals[3].label}
            </div> */}
          </Link>
          <Link
            to={arrivals[2].link}
            className='d-block position-relative'
            style={{ width: 249.6, height: 187.2 }}
          >
            <img
              src={arrivals[2].img}
              alt={arrivals[2].label}
              style={{
                width: 249.6,
                height: 187.2,
                objectFit: 'cover',
                borderRadius: 0,
                display: 'block'
              }}
            />
            {/* <div
              className='position-absolute bottom-0 start-0 m-2 px-3 py-1 bg-light fw-bold'
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 16,
                color: '#000'
              }}
            >
              {arrivals[2].label}
            </div> */}
          </Link>
        </Col>
      </Row>
    </Container>
    {/* Mobile layout */}
    <Container fluid className='d-lg-none'>
      <Row className='gy-3'>
        {arrivals.map((item) => (
          <Col xs={12} key={item.label} className='d-flex flex-column'>
            <Link to={item.link} className='d-block w-100 position-relative'>
              <img
                src={item.img}
                alt={item.label}
                className='img-fluid w-100'
                style={{ objectFit: 'cover', display: 'block' }}
              />
              {/* <div
                className='position-absolute bottom-0 start-0 m-2 px-3 py-1 bg-light fw-bold'
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 16,
                  color: '#000'
                }}
              >
                {item.label}
              </div> */}
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
)

export default ArrivalsSection
