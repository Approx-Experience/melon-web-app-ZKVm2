import { useState } from 'react'
import '../assets/css/MobileNavigationBar.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const navLinks = [
  'new arrivals',
  'men',
  'women',
  'accessories',
  'shoes',
  'sale'
]

const MobileNavigationBar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [openSearch, setOpenSearch] = useState(false)
  const navigate = useNavigate()
  const cart = useSelector((state) => state.cart)

  return (
    <nav className='mobile-navbar'>
      <div className='mobile-navbar-top'>
        <div className='mobile-navbar-logo-content'>
          <span>melon</span>
          <img
            src='/public/melon-icon.svg'
            alt='melon logo'
            className='mobile-navbar-logo'
          />
        </div>
        {/* Search toggle */}

        <div className='mobile-navbar-icons'>
          <label
            htmlFor='search-toggle'
            className='icon-btn'
            onClick={() => setOpenSearch(!openSearch)}
          >
            <img src='/public/search.svg' alt='search' />
          </label>

          <button className='icon-btn' onClick={() => navigate('/sign-up')}>
            <img src='/public/account.svg' alt='account' />
          </button>

          <button className='icon-btn'>
            <img src='/public/favorite.svg' alt='favorites' />
          </button>
          <button className='icon-btn'>
            <img src='/public/cart.svg' alt='cart' />
            <span className='cart-count'>
              {cart.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          </button>

          {/* <input
            type='checkbox'
            id='menu-toggle'
            className='mobile-navbar-toggle'
            // hidden
          /> */}
          <label
            htmlFor='menu-toggle'
            className='icon-btn'
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? (
              <img src='/public/close.svg' alt='menu' />
            ) : (
              <img src='/public/menu.svg' alt='menu' />
            )}
          </label>

          {/* Search bar (CSS toggled) */}
          {openSearch && (
            <div className='mobile-navbar-search'>
              <img
                src='/public/search.svg'
                alt='search'
                className='search-icon'
              />
              <input type='text' placeholder='search' />
              <label
                htmlFor='search-toggle'
                className='icon-btn close-btn'
                onClick={() => setOpenSearch(false)}
              >
                <img src='/public/close.svg' alt='close search' />
              </label>
            </div>
          )}
        </div>
      </div>
      {/* Menu (CSS toggled) */}
      {openMenu && (
        <div className='mobile-navbar-menu'>
          {navLinks.map((link) => (
            <div className='mobile-navbar-link' key={link}>
              {link}
              <img
                src='/public/chevron_forward.svg'
                alt='>'
                className='chevron'
              />
            </div>
          ))}
        </div>
      )}
    </nav>
  )
}

export default MobileNavigationBar
