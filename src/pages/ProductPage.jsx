import { useParams } from 'react-router-dom'
import products from '../../scripts/data/products.json'
import { useState } from 'react'
import '../assets/css/ProductPage.css'
import { useDispatch } from 'react-redux'

const SIZES = ['XS', 'S', 'M', 'L', 'XL']
const COLORS = [
  { code: '#2B4257', name: 'navy' },
  { code: '#A44B4B', name: 'red' },
  { code: '#D9B07A', name: 'beige' }
]

const ProductPage = () => {
  const { id } = useParams()

  const product = products.find((p) => String(p.title) === String(id))
  const [selectedSize, setSelectedSize] = useState('M')
  const [selectedColor, setSelectedColor] = useState(COLORS[0].code)
  const dispatch = useDispatch()

  if (!product)
    return (
      <div style={{ padding: 48, fontFamily: 'Montserrat, sans-serif' }}>
        Product not found
      </div>
    )

  return (
    <div
      style={{
        background: '#FAF9F8',
        minHeight: '100vh',
        fontFamily: 'Montserrat, sans-serif',
        color: '#000',
        padding: '40px 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start'
      }}
    >
      <div className='product-page-flex'>
        {/* Left: Main image and gallery */}
        <div className='product-page-image'>
          <img
            src={product.image}
            alt={product.title}
            style={{
              width: '100%',
              height: 420,
              objectFit: 'cover',
              background: '#fff',
              borderRadius: 0
            }}
          />
          {/* Gallery (dummy, same image) */}
          <div style={{ display: 'flex', gap: 24, marginTop: 24 }}>
            {[0, 1, 2].map((i) => (
              <img
                key={i}
                src={product.image}
                alt={product.title}
                style={{
                  width: 140,
                  height: 100,
                  objectFit: 'cover',
                  background: '#fff',
                  borderRadius: 0
                }}
              />
            ))}
          </div>
        </div>
        {/* Right: Info */}
        <div className='product-page-info'>
          {product.isNew && (
            <span
              style={{
                background: '#FFECDA',
                color: '#E13636',
                fontWeight: 700,
                fontSize: 12,
                fontFamily: 'Montserrat, sans-serif',
                letterSpacing: 0.2,
                padding: '2px 8px',
                marginBottom: 12,
                display: 'inline-block',
                borderRadius: 0
              }}
            >
              new arrival
            </span>
          )}
          <h2 style={{ fontWeight: 700, fontSize: 28, margin: '8px 0 0 0' }}>
            {product.title}
          </h2>
          <div
            style={{ fontWeight: 600, fontSize: 20, margin: '8px 0 16px 0' }}
          >
            ${product.price}
          </div>
          <div
            style={{
              fontSize: 15,
              fontWeight: 400,
              marginBottom: 18,
              lineHeight: 1.5
            }}
          >
            {product.description ||
              "Product description. You can do a lot of cool stuff while wearing this piece. People will like you more and you'll be more confident. Stop limiting yourself and buy this thing. You need it and you want it."}
          </div>
          <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 8 }}>
            available colors:
          </div>
          <div style={{ display: 'flex', gap: 16, marginBottom: 18 }}>
            {COLORS.map((color) => (
              <button
                key={color.code}
                style={{
                  width: 28,
                  height: 28,
                  background: color.code,
                  border:
                    selectedColor === color.code
                      ? '2px solid #000'
                      : '1px solid #888',
                  outline: 'none',
                  cursor: 'pointer',
                  margin: 0,
                  padding: 0,
                  borderRadius: 0
                }}
                aria-label={color.name}
                onClick={() => setSelectedColor(color.code)}
              />
            ))}
          </div>
          <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 8 }}>
            size:
          </div>
          <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
            {SIZES.map((size) => (
              <button
                key={size}
                style={{
                  minWidth: 38,
                  height: 32,
                  background: selectedSize === size ? '#EBF2ED' : '#fff',
                  color: '#000',
                  border: '1px solid #000',
                  fontWeight: 600,
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 14,
                  cursor: 'pointer',
                  borderRadius: 0
                }}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <button
              style={{
                background: '#36E15C',
                color: '#000',
                fontWeight: 700,
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 16,
                border: 'none',
                padding: '12px 32px',
                cursor: 'pointer',
                borderRadius: 0,
                marginRight: 8
              }}
              onClick={() => {
                dispatch({
                  type: 'ADD_TO_CART',
                  payload: { product, options: { selectedSize, selectedColor } }
                })
                alert('Added to cart!')
              }}
            >
              Add to Cart
            </button>
            <button
              style={{
                background: '#FEEBEB',
                width: 40,
                height: 40,
                border: 'none',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: 20
              }}
              aria-label='Add to favorites'
            >
              <span role='img' aria-label='heart'>
                ♡
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
