import { useState } from 'react'
import '../assets/css/MobileNavigationBar.css'

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

  return (
    <nav className='mobile-navbar'>
      <div className='mobile-navbar-top'>
        <img
          src='/public/melon-icon.svg'
          alt='melon logo'
          className='mobile-navbar-logo'
        />
        {/* Search toggle */}
        <input
          type='checkbox'
          id='search-toggle'
          className='mobile-navbar-toggle'
          hidden
        />
        <label htmlFor='search-toggle' className='icon-btn'>
          <img src='/public/search.svg' alt='search' />
        </label>
        {/* Menu toggle */}
        <input
          type='checkbox'
          id='menu-toggle'
          className='mobile-navbar-toggle'
          // hidden
        />
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
        {/* Other icons (account, favorites, cart) */}
        <div className='mobile-navbar-icons'>
          <button className='icon-btn'>
            <img src='/public/account.svg' alt='account' />
          </button>
          <button className='icon-btn'>
            <img src='/public/favorite.svg' alt='favorites' />
          </button>
          <button className='icon-btn'>
            <img src='/public/cart.svg' alt='cart' />
            <span className='cart-count'>0</span>
          </button>
        </div>
        {/* Search bar (CSS toggled) */}
        <div className='mobile-navbar-search'>
          <img src='/public/search.svg' alt='search' className='search-icon' />
          <input type='text' placeholder='search' />
          <label htmlFor='search-toggle' className='icon-btn close-btn'>
            <img src='/public/close.svg' alt='close search' />
          </label>
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
