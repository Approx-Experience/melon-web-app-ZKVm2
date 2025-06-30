import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import products from '../../scripts/data/products.json'
import '../assets/css/AllProducts.css'

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

const AllProducts = () => {
  const [showFilters, setShowFilters] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

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
          <h1 className='all-products-heading'>
            the hottest threads for staying cool
          </h1>
          <div className='all-products-subheading'>
            these things are sellin like hotcakes
          </div>
          <div className='melon-product-cards-container'>
            {products.map((product, idx) => (
              <ProductCard key={product.title + idx} product={product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

export default AllProducts
