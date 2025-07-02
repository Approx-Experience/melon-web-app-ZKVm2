import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

const CartItem = ({ item }) => {
  const dispatch = useDispatch()

  const handleQtyChange = (id, selectedSize, selectedColor, qty) => {
    dispatch({
      type: 'UPDATE_CART_QUANTITY',
      payload: {
        productId: id,
        selectedSize,
        selectedColor,
        quantity: Number(qty)
      }
    })
  }

  const handleRemove = (id, selectedSize, selectedColor) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: { productId: id, options: { selectedSize, selectedColor } }
    })
  }

  return (
    <>
      <div
        className='cart-item-flex'
        key={item.id + '-' + item.selectedSize + '-' + item.selectedColor}
        style={{
          display: 'flex',
          alignItems: 'center',
          background: '#fff',
          marginBottom: 24,
          padding: 24,
          borderRadius: 0,
          boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
        }}
      >
        <img
          src={item.image}
          alt={item.title}
          className='cart-item-img'
          style={{
            width: 120,
            height: 120,
            objectFit: 'cover',
            marginRight: 32,
            borderRadius: 0,
            background: '#fff'
          }}
        />
        <div style={{ textAlign: 'start', flex: 1, minWidth: 180 }}>
          <div
            style={{
              fontWeight: 700,
              fontSize: 18,
              color: '#000',
              marginBottom: 4
            }}
          >
            {item.title}
          </div>
          <div
            style={{
              fontWeight: 600,
              fontSize: 16,
              color: '#000',
              marginBottom: 8
            }}
          >
            ${item.price?.toFixed(2)}
          </div>
          <div
            style={{
              fontWeight: 500,
              fontSize: 14,
              color: '#000',
              marginBottom: 8
            }}
          >
            size:
            <span
              style={{
                border: '1px solid #000',
                padding: '2px 10px',
                fontWeight: 600,
                fontSize: 14,
                marginLeft: 4
              }}
            >
              {item.selectedSize}
            </span>
            {item.selectedColor && (
              <span
                style={{
                  border: '1px solid #000',
                  padding: '2px 10px',
                  fontWeight: 600,
                  fontSize: 14,
                  marginLeft: 8,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    width: 14,
                    height: 14,
                    background: item.selectedColor.code,
                    border: '1px solid #888',
                    marginRight: 4
                  }}
                />
                color: {item.selectedColor.name}
              </span>
            )}
          </div>
        </div>
        <div
          className='cart-item-controls'
          style={{ display: 'flex', alignItems: 'center', gap: 24 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontWeight: 500, fontSize: 14, color: '#000' }}>
              qty
            </span>
            <select
              value={item.quantity}
              onChange={(e) =>
                handleQtyChange(
                  item.id,
                  item.selectedSize,
                  item.selectedColor,
                  e.target.value
                )
              }
              style={{
                height: 40,
                minWidth: 56,
                border: '1px solid #000',
                borderRadius: 0,
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 600,
                fontSize: 16,
                color: '#000',
                background: '#fff',
                padding: '0 12px',
                marginLeft: 4
              }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={() =>
              handleRemove(item.id, item.selectedSize, item.selectedColor)
            }
            style={{
              background: 'none',
              border: 'none',
              color: '#000',
              fontSize: 22,
              cursor: 'pointer',
              marginLeft: 8,
              padding: 0
            }}
            aria-label='Remove item'
          >
            🗑️
          </button>
        </div>
      </div>
    </>
  )
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default CartItem
