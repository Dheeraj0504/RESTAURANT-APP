import Popup from 'reactjs-popup'

import Payment from '../Payment'
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.dishPrice * eachCartItem.quantity
      })

      return (
        <>
          <div className="cart-summary-container">
            <h1 className="order-total-value">
              <span className="order-total-label">Order Total:</span> SAR{' '}
              {total}
              /-
            </h1>
            <p className="total-items">{cartList.length} Items in cart</p>
            <Popup
              modal
              trigger={
                <button className="checkout-button" type="button">
                  Checkout
                </button>
              }
              position="top left"
            >
              {close => <Payment close={close} />}
            </Popup>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
