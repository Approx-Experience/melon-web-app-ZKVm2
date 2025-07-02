import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import products from '../../scripts/data/products.json'
import '../assets/css/AllProducts.css'
import SortDropdown from '../components/SortDropdown'

const navCategories = [
  { label: 'shirts' },
  { label: 'polos' },
  { label: 'tees' },
  { label: 'long sleeves' }
]
const shopBy = [
  { label: 'men' },
  { label: 'women' },
  { label: 'accessories' },
  { label: 'shoes' },
  { label: 'sale' }
]

const sortOptions = [
  { value: '', label: 'Sort by' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest' }
]
const sizeOptions = [
  { value: '', label: 'Size' },
  { value: 'XS', label: 'XS' },
  { value: 'S', label: 'S' },
  { value: 'M', label: 'M' },
  { value: 'L', label: 'L' },
  { value: 'XL', label: 'XL' }
]
const allColors = Array.from(
  new Set(
    products.flatMap((p) =>
      Array.isArray(p.color) ? p.color.map((c) => c.name) : []
    )
  )
)
const colorOptions = [
  { value: '', label: 'Color' },
  ...allColors.map((name) => ({
    value: name,
    label: name.charAt(0).toUpperCase() + name.slice(1)
  }))
]

const AllProducts = () => {
  const [showFilters, setShowFilters] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900)
  const [sort, setSort] = useState('')
  const [size, setSize] = useState('')
  const [color, setColor] = useState('')

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  let filteredProducts = products
  if (size)
    filteredProducts = filteredProducts.filter(
      (p) => Array.isArray(p.size) && p.size.includes(size)
    )
  if (color)
    filteredProducts = filteredProducts.filter(
      (p) => Array.isArray(p.color) && p.color.some((c) => c.name === color)
    )
  if (sort === 'price-asc')
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price)
  if (sort === 'price-desc')
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price)
  if (sort === 'newest')
    filteredProducts = [...filteredProducts].sort((a, b) => b.id - a.id)

  return (
    <div className='all-products-bg'>
      <div className='all-products-container'>
        {!isMobile && (
          <aside className='all-products-nav'>
            <nav>
              <div className='nav-section'>
                <div className='nav-title'>shop by category</div>
                <ul className='nav-list'>
                  {navCategories.map((item) => (
                    <li key={item.label} className='nav-link'>
                      {item.label}
                    </li>
                  ))}
                </ul>
              </div>
              <div className='nav-section'>
                <ul className='nav-list'>
                  {shopBy.map((item) => (
                    <li key={item.label} className='nav-link'>
                      {item.label}
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </aside>
        )}
        <main className='all-products-main'>
          {/* Mobile Filters Button and Modal */}
          {isMobile && (
            <>
              <div className='mobile-filters-btn-wrapper'>
                <button
                  className='mobile-filters-btn custom-filters-btn'
                  onClick={() => setShowFilters(true)}
                >
                  Filters
                </button>
              </div>
              {showFilters && (
                <div
                  className='custom-modal-overlay'
                  onClick={() => setShowFilters(false)}
                >
                  <div
                    className='custom-modal'
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className='custom-modal-header'>
                      <span>Filters</span>
                      <button
                        className='custom-modal-close'
                        onClick={() => setShowFilters(false)}
                      >
                        &times;
                      </button>
                    </div>
                    <div className='custom-modal-body'>
                      <div className='nav-section'>
                        <div className='nav-title'>shop by category</div>
                        <ul className='nav-list'>
                          {navCategories.map((item) => (
                            <li key={item.label} className='nav-link'>
                              {item.label}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className='nav-section'>
                        <ul className='nav-list'>
                          {shopBy.map((item) => (
                            <li key={item.label} className='nav-link'>
                              {item.label}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
          <div style={{ textAlign: 'start', fontWeight: 800 }}>
            Search result
          </div>
          <div
            style={{
              display: 'flex',
              gap: 24,
              marginBottom: 32,
              marginTop: '20px',
              alignItems: 'center',
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
              width: '100%'
            }}
          >
            <SortDropdown
              value={sort}
              onChange={setSort}
              options={sortOptions.slice(1)}
            />
            <SortDropdown
              value={size}
              onChange={setSize}
              options={sizeOptions.slice(1)}
            />
            <SortDropdown
              value={color}
              onChange={setColor}
              options={colorOptions.slice(1)}
            />
          </div>

          {/* Active Filters Block */}
          {(size || color) && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                marginBottom: 16,
                marginTop: -16
              }}
            >
              <span
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 600,
                  fontSize: 14,
                  color: '#000'
                }}
              >
                active filters:
              </span>
              {size && (
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    background: '#fff',
                    border: '1px solid #000',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 600,
                    fontSize: 14,
                    color: '#000',
                    padding: '2px 12px',
                    marginRight: 4,
                    borderRadius: 0,
                    marginLeft: 4
                  }}
                >
                  {size}
                  <button
                    onClick={() => setSize('')}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#000',
                      fontWeight: 700,
                      fontSize: 16,
                      marginLeft: 6,
                      cursor: 'pointer',
                      padding: 0,
                      lineHeight: 1
                    }}
                    aria-label='Clear size filter'
                  >
                    ×
                  </button>
                </span>
              )}
              {color && (
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    background: '#fff',
                    border: '1px solid #000',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 600,
                    fontSize: 14,
                    color: '#000',
                    padding: '2px 12px',
                    marginRight: 4,
                    borderRadius: 0
                  }}
                >
                  {color}
                  <button
                    onClick={() => setColor('')}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#000',
                      fontWeight: 700,
                      fontSize: 16,
                      marginLeft: 6,
                      cursor: 'pointer',
                      padding: 0,
                      lineHeight: 1
                    }}
                    aria-label='Clear color filter'
                  >
                    ×
                  </button>
                </span>
              )}
            </div>
          )}

          {/* Product Count */}
          <div
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 500,
              fontSize: 14,
              color: '#000',
              marginBottom: 12
            }}
          >
            {filteredProducts.length} products
          </div>

          <h1 className='all-products-heading'>
            the hottest threads for staying cool
          </h1>
          <div className='all-products-subheading'>
            these things are sellin like hotcakes
          </div>
          <div className='melon-product-cards-container'>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

export default AllProducts
