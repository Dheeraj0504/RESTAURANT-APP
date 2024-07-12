import {useState, useContext} from 'react'

import CartContext from '../../context/CartContext'

import './index.css'

const paymentOptionsList = [
  {
    id: 'CARD',
    displayText: 'Card',
    isDisabled: true,
  },
  {
    id: 'NET BANKING',
    displayText: 'Net Banking',
    isDisabled: true,
  },
  {
    id: 'UPI',
    displayText: 'UPI',
    isDisabled: true,
  },
  {
    id: 'WALLET',
    displayText: 'Wallet',
    isDisabled: true,
  },
  {
    id: 'CASH ON DELIVERY',
    displayText: 'Cash on Delivery',
    isDisabled: false,
  },
]

const Payment = () => {
  const [isOrderPlaced, setOrderPlaced] = useState(false)
  const [paymentMethod, setPaymentmethod] = useState('')
  const {cartList} = useContext(CartContext)

  const updatePaymentMethod = event => {
    // console.log(event.target.id)
    const {id} = event.target
    setPaymentmethod(id)
  }

  const onPlaceOrder = () => {
    setOrderPlaced(true)
  }

  const renderPaymentMethods = () => (
    <ul className="payment-methods-list">
      {paymentOptionsList.map(eachOption => (
        <li className="payment-type" key={eachOption.id}>
          <input
            className="payment-method"
            id={eachOption.id}
            type="radio"
            name="paymentMethod"
            disabled={eachOption.isDisabled}
            onChange={updatePaymentMethod}
          />
          <label
            className={`payment-method-label ${
              eachOption.isDisabled ? 'disabled-label' : ''
            }`}
            htmlFor={eachOption.id}
          >
            {eachOption.displayText}
          </label>
        </li>
      ))}
    </ul>
  )

  let totalPrice = 0
  cartList.forEach(eachCartItem => {
    totalPrice += eachCartItem.dishPrice * eachCartItem.quantity
  })

  return (
    <div className="payments-container">
      {isOrderPlaced ? (
        <p className="success-message">
          Your order has been placed successfully
        </p>
      ) : (
        <>
          <h1 className="heading">Payment Details</h1>
          <p className="sub-heading">Payment Method</p>
          {renderPaymentMethods()}
          <div className="order-details">
            <p className="order-details-text">Order Details:</p>
            <p>Quantity: {cartList.length}</p>
            <p>Total Price: SAR {totalPrice} /-</p>
          </div>
          <button
            disabled={paymentMethod === ''}
            type="button"
            className="confirm-order-button"
            onClick={onPlaceOrder}
          >
            Confirm Order
          </button>
        </>
      )}
    </div>
  )
}
export default Payment
