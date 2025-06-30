import Container from 'react-bootstrap/Container'
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
  return (
    <div className='all-products-bg'>
      <Container fluid className='all-products-container'>
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
        <main className='all-products-main'>
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
      </Container>
    </div>
  )
}

export default AllProducts
