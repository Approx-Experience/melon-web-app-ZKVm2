import { Container } from 'react-bootstrap'
import { useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'new arrivals', href: '#' },
  { label: 'men', href: '#' },
  { label: 'women', href: '#' },
  { label: 'accessories', href: '#' },
  { label: 'shoes', href: '#' },
  { label: 'sale', href: '#' }
]

const iconStyle = {
  width: 28,
  height: 28,
  marginRight: 8,
  verticalAlign: 'middle'
}

const ThemeToggle = () => {
  const [dark, setDark] = useState(false)
  return (
    <div className='d-flex align-items-center gap-2 ms-2'>
      <FaSun size={20} color={dark ? '#888' : '#000'} />
      <label
        style={{
          cursor: 'pointer',
          margin: 0,
          position: 'relative',
          width: 40,
          height: 22
        }}
      >
        <input
          type='checkbox'
          checked={dark}
          onChange={() => setDark((v) => !v)}
          style={{
            opacity: 0,
            width: 40,
            height: 22,
            position: 'absolute',
            left: 0,
            top: 0,
            zIndex: 2,
            cursor: 'pointer'
          }}
        />
        <span
          style={{
            display: 'inline-block',
            width: 40,
            height: 22,
            background: dark ? '#222' : '#fff',
            border: '1.5px solid #000',
            borderRadius: 12,
            position: 'relative',
            transition: 'background 0.2s'
          }}
        >
          <span
            style={{
              display: 'block',
              width: 18,
              height: 18,
              background: dark ? '#fff' : '#000',
              borderRadius: '50%',
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              left: dark ? 17 : 2,
              transition: 'left 0.2s, background 0.2s'
            }}
          ></span>
        </span>
      </label>
      <FaMoon size={18} color={dark ? '#000' : '#888'} />
    </div>
  )
}

const MelonNavbar = () => (
  <nav
    className='desktop-navbar'
    style={{
      background: '#FFECDA',
      fontFamily: 'Montserrat, sans-serif',
      borderRadius: 0,
      borderBottom: '1px solid #eee',
      paddingTop: 10
    }}
  >
    <Container fluid className='px-4' style={{ maxWidth: 1400 }}>
      {/* Верхній ряд */}
      <div className='w-100 d-flex justify-content-end'>
        <ThemeToggle />
      </div>
      <div className='position-relative' style={{ minHeight: 80 }}>
        <div
          className='d-flex align-items-center justify-content-between'
          style={{ height: 80 }}
        >
          {/* Лого */}
          <a
            href='/'
            className='d-flex align-items-center text-decoration-none'
            style={{ minWidth: 370 }}
          >
            <span
              className='fw-bold'
              style={{
                fontWeight: 800,
                fontSize: 28,
                color: '#E13636',
                letterSpacing: 1,
                marginRight: 8
              }}
            >
              melon
            </span>
            <img
              src='/public/melon-icon.svg'
              alt='Melon Logo'
              style={{ width: 36, height: 36 }}
            />
          </a>
          {/* Пошук по центру (absolute) */}
          <div
            style={{
              width: 370,
              maxWidth: '90%'
            }}
          >
            <div style={{ position: 'relative', width: '100%' }}>
              <span
                style={{
                  position: 'absolute',
                  left: 16,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#888',
                  fontSize: 18
                }}
              >
                <svg
                  width='18'
                  height='18'
                  fill='none'
                  stroke='#888'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <circle cx='8' cy='8' r='7' />
                  <line x1='13' y1='13' x2='17' y2='17' />
                </svg>
              </span>
              <input
                type='text'
                placeholder='Find your next fit'
                className='form-control form-control-lg ps-5 bg-transparent border-dark rounded no-focus'
                style={{ height: 44, fontSize: 17, fontWeight: 500 }}
              />
            </div>
          </div>
          {/* Іконки + підписи */}
          <div
            className='d-flex align-items-center justify-content-end'
            style={{ minWidth: 340, gap: 24 }}
          >
            <div className='d-flex align-items-center' style={{ gap: 18 }}>
              <Link
                to='/sign-up'
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                  color: 'inherit',
                  gap: 4
                }}
              >
                <img
                  src='/public/account.svg'
                  alt='Account'
                  style={iconStyle}
                />
                <span
                  className='fw-bold text-dark'
                  style={{ fontSize: 16, marginRight: 12 }}
                >
                  account
                </span>
              </Link>
              <img
                src='/public/favorite.svg'
                alt='Favorites'
                style={iconStyle}
              />
              <span
                className='fw-bold text-dark'
                style={{ fontSize: 16, marginRight: 12 }}
              >
                favorites
              </span>
              <div
                className='d-flex align-items-center position-relative'
                style={{ marginRight: 12 }}
              >
                <img src='/public/cart.svg' alt='Cart' style={iconStyle} />
                <span
                  className='fw-bold text-dark ms-1'
                  style={{ fontSize: 16 }}
                >
                  0
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Нижній ряд — навігація */}
      <div className='d-flex justify-content-center align-items-center py-2 gap-4'>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className='fw-bold text-dark text-decoration-none text-lowercase'
            style={{ fontSize: 18, letterSpacing: 0.2 }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </Container>
  </nav>
)

export default MelonNavbar
