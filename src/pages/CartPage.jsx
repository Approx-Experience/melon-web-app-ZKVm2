import '../assets/css/CartPage.css'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'

const CartPage = () => {
  const cart = useSelector((state) => state.cart)

  const subtotal = cart.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
    0
  )
  const shipping = cart.length > 0 ? 9 : 0
  const total = subtotal + shipping

  return (
    <div
      style={{
        background: '#FAF9F8',
        minHeight: '100vh',
        fontFamily: 'Montserrat, sans-serif',
        padding: '40px 0'
      }}
    >
      <div
        className='cart-main-flex'
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'flex',
          gap: 40,
          alignItems: 'flex-start'
        }}
      >
        {/* Cart Items */}
        <div style={{ flex: 2 }}>
          <h1
            style={{
              fontWeight: 800,
              fontSize: 40,
              marginBottom: 32,
              color: '#000'
            }}
          >
            Cart
          </h1>
          {cart.map((item) => (
            <CartItem
              key={
                item.id +
                '-' +
                item.selectedSize +
                '-' +
                (item.selectedColor?.code || '')
              }
              item={item}
            />
          ))}
        </div>
        {/* Summary Card */}
        <div
          className='cart-summary-card'
          style={{
            flex: 1,
            background: '#fff',
            padding: 32,
            borderRadius: 0,
            boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
            minWidth: 320,
            maxWidth: 360
          }}
        >
          <div style={{ marginBottom: 24 }}>
            <div
              style={{
                fontWeight: 600,
                fontSize: 15,
                color: '#000',
                marginBottom: 8
              }}
            >
              login and earn rewards
            </div>
            <button
              style={{
                width: '100%',
                height: 44,
                background: '#fff',
                color: '#000',
                fontWeight: 700,
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 16,
                border: '1px solid #000',
                borderRadius: 0,
                marginBottom: 18,
                cursor: 'pointer',
                textTransform: 'lowercase',
                letterSpacing: 0.2
              }}
            >
              login
            </button>
          </div>
          <div
            style={{
              fontWeight: 500,
              fontSize: 15,
              color: '#000',
              marginBottom: 8,
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <span>sub total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div
            style={{
              fontWeight: 500,
              fontSize: 15,
              color: '#000',
              marginBottom: 18,
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <span>estimated shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <div
            style={{
              fontWeight: 800,
              fontSize: 20,
              color: '#000',
              marginBottom: 24,
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <span>total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button
            style={{
              width: '100%',
              height: 48,
              background: '#000',
              color: '#fff',
              fontWeight: 700,
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 17,
              border: 'none',
              borderRadius: 0,
              cursor: 'pointer',
              textTransform: 'lowercase',
              letterSpacing: 0.2
            }}
          >
            continue to checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartPage
