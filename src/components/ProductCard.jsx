import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import '../assets/css/ProductCard.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

const ProductCard = ({ product }) => {
  const { image, title, price, isNew } = product
  const dispatch = useDispatch()
  const [added, setAdded] = useState(false)

  const handleAddToCart = (e) => {
    e.preventDefault()
    dispatch({ type: 'ADD_TO_CART', payload: { product } })
    setAdded(true)
    setTimeout(() => setAdded(false), 5000)
  }

  return (
    <Link
      to={`/browse/${encodeURIComponent(title)}`}
      style={{
        textDecoration: 'none',
        color: 'inherit',
        display: 'block',
        width: '100%',
        height: '100%'
      }}
    >
      <Card className='melon-product-card'>
        <div className='melon-product-image-wrapper'>
          <Card.Img
            variant='top'
            src={image}
            alt={title}
            className='melon-product-image'
          />
        </div>
        <Card.Body className='melon-product-body'>
          <Card.Title className='melon-product-title'>{title}</Card.Title>
          <div className='melon-product-price'>${price}</div>
          <div className='melon-product-link'>3 colors/styles</div>
          {isNew && (
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
          <button
            style={{
              background: added ? '#EBF2ED' : '#36E15C',
              color: '#000',
              fontWeight: 700,
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 14,
              border: 'none',
              padding: '8px 18px',
              cursor: 'pointer',
              borderRadius: 0,
              marginTop: 12,
              width: '100%'
            }}
            onClick={handleAddToCart}
            disabled={added}
          >
            {added ? 'Added!' : 'Add to Cart'}
          </button>
        </Card.Body>
      </Card>
    </Link>
  )
}

ProductCard.propTypes = {
  product: PropTypes.object
}

export default ProductCard
