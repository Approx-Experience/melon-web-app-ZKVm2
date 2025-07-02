const initialState = {
  cart: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { product, options = {} } = action.payload
      const idx = state.cart.findIndex(
        (item) =>
          item.id === product.id &&
          item.selectedSize === options.selectedSize &&
          ((item.selectedColor &&
            options.selectedColor &&
            item.selectedColor.code === options.selectedColor.code) ||
            (!item.selectedColor && !options.selectedColor))
      )
      if (idx !== -1) {
        // Increment quantity
        const updatedCart = [...state.cart]
        updatedCart[idx] = {
          ...updatedCart[idx],
          quantity: updatedCart[idx].quantity + 1
        }
        return { ...state, cart: updatedCart }
      }
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            ...product,
            quantity: 1,
            selectedSize: options.selectedSize,
            selectedColor: options.selectedColor
          }
        ]
      }
    }
    case 'REMOVE_FROM_CART': {
      const { productId, options = {} } = action.payload
      return {
        ...state,
        cart: state.cart.filter(
          (item) =>
            !(
              item.id === productId &&
              item.selectedSize === options.selectedSize &&
              ((item.selectedColor &&
                options.selectedColor &&
                item.selectedColor.code === options.selectedColor.code) ||
                (!item.selectedColor && !options.selectedColor))
            )
        )
      }
    }
    case 'CLEAR_CART':
      return { ...state, cart: [] }
    case 'UPDATE_CART_QUANTITY': {
      const { productId, selectedSize, selectedColor, quantity } =
        action.payload
      const idx = state.cart.findIndex(
        (item) =>
          item.id === productId &&
          item.selectedSize === selectedSize &&
          ((item.selectedColor &&
            selectedColor &&
            item.selectedColor.code === selectedColor.code) ||
            (!item.selectedColor && !selectedColor))
      )
      if (idx !== -1) {
        const updatedCart = [...state.cart]
        updatedCart[idx] = {
          ...updatedCart[idx],
          quantity: Number(quantity)
        }
        return { ...state, cart: updatedCart }
      }
      return state
    }
    default:
      return state
  }
}

export default reducer
