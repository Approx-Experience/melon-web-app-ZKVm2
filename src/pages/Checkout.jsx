import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import '../assets/css/Checkout.css'

const states = ['CA', 'NY', 'TX', 'FL', 'IL', 'Other']

function SummaryCard({ title, data, onEdit, children }) {
  return (
    <div className='checkout-card-v2'>
      <div
        className='checkout-card-title'
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <span>{title}</span>
        <button
          className='edit-btn-v2'
          onClick={onEdit}
          type='button'
          aria-label='Edit'
        >
          ✎
        </button>
      </div>
      {children ? (
        children
      ) : (
        <div className='summary-data-v2'>
          {Object.values(data).map((v, i) => v && <div key={i}>{v}</div>)}
        </div>
      )}
    </div>
  )
}
SummaryCard.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.object,
  onEdit: PropTypes.func.isRequired,
  children: PropTypes.node
}

function EmptyCard({ title }) {
  return (
    <div className='checkout-card-v2 checkout-card-empty'>
      <div className='checkout-card-title'>{title}</div>
    </div>
  )
}
EmptyCard.propTypes = {
  title: PropTypes.string.isRequired
}

export default function Checkout() {
  const [step, setStep] = useState(1)
  const [personal, setPersonal] = useState({
    first: '',
    last: '',
    phone: '',
    birthday: ''
  })
  const [billing, setBilling] = useState({
    address: '',
    address2: '',
    city: '',
    zip: '',
    state: ''
  })
  const [shipping, setShipping] = useState({
    address: '',
    address2: '',
    city: '',
    zip: '',
    state: ''
  })
  const [sameAsBilling, setSameAsBilling] = useState(false)
  const [payment, setPayment] = useState({
    name: '',
    number: '',
    expiry: '',
    cvc: ''
  })

  const cart = useSelector((state) => state.cart)
  const items = Array.isArray(cart?.items)
    ? cart.items
    : Array.isArray(cart)
    ? cart
    : []

  // Summary values
  let subtotalSum = 0,
    shippingSum = 0,
    totalSum = 0
  if (Array.isArray(cart)) {
    subtotalSum = cart.reduce(
      (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
      0
    )
    shippingSum = cart.length > 0 ? 9 : 0
    totalSum = subtotalSum + shippingSum
  } else {
    subtotalSum = cart?.subtotal || 0
    shippingSum = cart?.shipping || 0
    totalSum = subtotalSum + shippingSum
  }

  const navigate = useNavigate()
  React.useEffect(() => {
    if (!items.length) {
      navigate('/cart')
    }
  }, [items, navigate])

  // Handlers
  const handlePersonalChange = (e) =>
    setPersonal({ ...personal, [e.target.name]: e.target.value })
  const handleBillingChange = (e) =>
    setBilling({ ...billing, [e.target.name]: e.target.value })
  const handleShippingChange = (e) =>
    setShipping({ ...shipping, [e.target.name]: e.target.value })
  const handleSameAsBilling = (e) => {
    setSameAsBilling(e.target.checked)
    if (e.target.checked) setShipping({ ...billing })
  }
  const handlePaymentChange = (e) =>
    setPayment({ ...payment, [e.target.name]: e.target.value })

  React.useEffect(() => {
    if (sameAsBilling) setShipping({ ...billing })
  }, [sameAsBilling, billing])

  // Step save handlers
  const savePersonal = () => {
    if (personal.first && personal.last && personal.phone && personal.birthday)
      setStep(2)
  }
  const saveBilling = () => {
    if (billing.address && billing.city && billing.zip && billing.state)
      setStep(3)
  }
  const saveShipping = () => {
    if (shipping.address && shipping.city && shipping.zip && shipping.state)
      setStep(4)
  }
  const savePayment = () => {
    alert('Order placed!')
  }

  // Step completion checks
  const isPersonalComplete =
    personal.first && personal.last && personal.phone && personal.birthday
  const isBillingComplete =
    billing.address && billing.city && billing.zip && billing.state
  const isShippingComplete =
    shipping.address && shipping.city && shipping.zip && shipping.state

  return (
    <div className='checkout-root-v2'>
      <div className='checkout-main-v2'>
        <h1 className='checkout-h1'>Checkout</h1>
        {/* Personal Info */}
        {step === 1 ? (
          <div className='checkout-card-v2'>
            <div className='checkout-card-title'>personal info</div>
            <div className='checkout-form-row'>
              <input
                name='first'
                placeholder='first name'
                value={personal.first}
                onChange={handlePersonalChange}
              />
              <input
                name='last'
                placeholder='last name'
                value={personal.last}
                onChange={handlePersonalChange}
              />
            </div>
            <div className='checkout-form-row'>
              <input
                name='phone'
                placeholder='phone number'
                value={personal.phone}
                onChange={handlePersonalChange}
              />
              <input
                name='birthday'
                placeholder='date of birth - mm/dd/yy'
                value={personal.birthday}
                onChange={handlePersonalChange}
              />
            </div>
            <div className='button-group'>
              <button
                className='primary-btn-v2'
                onClick={savePersonal}
                type='button'
              >
                save
              </button>
              <button
                className='cancel-btn-v2'
                type='button'
                onClick={() => window.history.back()}
              >
                <span className='cancel-icon-v2'>✕</span> cancel
              </button>
            </div>
          </div>
        ) : isPersonalComplete ? (
          <SummaryCard
            title='personal info'
            data={personal}
            onEdit={() => setStep(1)}
          >
            <div style={{ fontWeight: 600 }}>
              {personal.first} {personal.last}
            </div>
            <div>{personal.phone}</div>
            <div>{personal.birthday}</div>
          </SummaryCard>
        ) : (
          <EmptyCard title='personal info' />
        )}
        {/* Billing Address */}
        {step === 2 ? (
          <div className='checkout-card-v2'>
            <div className='checkout-card-title'>billing address</div>
            <input
              name='address'
              placeholder='address'
              value={billing.address}
              onChange={handleBillingChange}
            />
            <input
              name='address2'
              placeholder='address line 2'
              value={billing.address2}
              onChange={handleBillingChange}
            />
            <div className='checkout-form-row'>
              <input
                name='city'
                placeholder='town/city'
                value={billing.city}
                onChange={handleBillingChange}
              />
              <input
                name='zip'
                placeholder='zip code'
                value={billing.zip}
                onChange={handleBillingChange}
              />
              <select
                name='state'
                value={billing.state}
                onChange={handleBillingChange}
              >
                <option value=''>state</option>
                {states.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <button
              className='primary-btn-v2'
              onClick={saveBilling}
              type='button'
            >
              save
            </button>
            <button
              className='cancel-btn-v2'
              type='button'
              onClick={() => setStep(1)}
            >
              <span className='cancel-icon-v2'>✕</span> cancel
            </button>
          </div>
        ) : isPersonalComplete && isBillingComplete ? (
          <SummaryCard
            title='billing address'
            data={billing}
            onEdit={() => setStep(2)}
          >
            <div>{billing.address}</div>
            {billing.address2 && <div>{billing.address2}</div>}
            <div>
              {billing.city} {billing.zip}
            </div>
            <div>{billing.state}</div>
          </SummaryCard>
        ) : (
          <EmptyCard title='billing address' />
        )}
        {/* Shipping Address */}
        {step === 3 ? (
          <div className='checkout-card-v2'>
            <div className='checkout-card-title'>shipping address</div>
            <label
              style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}
            >
              <input
                type='checkbox'
                checked={sameAsBilling}
                onChange={handleSameAsBilling}
              />{' '}
              same as billing address
            </label>
            <input
              name='address'
              placeholder='address'
              value={shipping.address}
              onChange={handleShippingChange}
              disabled={sameAsBilling}
            />
            <input
              name='address2'
              placeholder='address line 2'
              value={shipping.address2}
              onChange={handleShippingChange}
              disabled={sameAsBilling}
            />
            <div className='checkout-form-row'>
              <input
                name='city'
                placeholder='town/city'
                value={shipping.city}
                onChange={handleShippingChange}
                disabled={sameAsBilling}
              />
              <input
                name='zip'
                placeholder='zip code'
                value={shipping.zip}
                onChange={handleShippingChange}
                disabled={sameAsBilling}
              />
              <select
                name='state'
                value={shipping.state}
                onChange={handleShippingChange}
                disabled={sameAsBilling}
              >
                <option value=''>state</option>
                {states.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <button
              className='primary-btn-v2'
              onClick={saveShipping}
              type='button'
            >
              save
            </button>
            <button
              className='cancel-btn-v2'
              type='button'
              onClick={() => setStep(2)}
            >
              <span className='cancel-icon-v2'>✕</span> cancel
            </button>
          </div>
        ) : isPersonalComplete && isBillingComplete && isShippingComplete ? (
          <SummaryCard
            title='shipping address'
            data={shipping}
            onEdit={() => setStep(3)}
          >
            {sameAsBilling && (
              <div>
                <input
                  type='checkbox'
                  checked
                  readOnly
                  style={{ marginRight: 6 }}
                />
                same as billing address
              </div>
            )}
            {!sameAsBilling && (
              <>
                <div>{shipping.address}</div>
                {shipping.address2 && <div>{shipping.address2}</div>}
                <div>
                  {shipping.city} {shipping.zip}
                </div>
                <div>{shipping.state}</div>
              </>
            )}
          </SummaryCard>
        ) : (
          <EmptyCard title='shipping address' />
        )}
        {/* Order Details — завжди показуємо */}
        <div className='checkout-card-v2'>
          <div
            className='checkout-card-title'
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <span>order details</span>
            <span className='order-items-count-v2'>
              {items.length} item{items.length !== 1 ? 's' : ''}
            </span>
          </div>
          <div className='order-details-list'>
            {items.map((item, idx) => (
              <div className='order-details-item' key={idx}>
                <img
                  src={item.image}
                  alt={item.name}
                  className='order-details-img'
                />
                <div className='order-details-info'>
                  <div className='order-details-title'>
                    {item.name || item.title}
                  </div>
                  <div className='order-details-qty'>Qty: {item.quantity}</div>
                  <div className='order-details-price'>${item.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Payment — тільки якщо всі адреси заповнені */}
        {isPersonalComplete && isBillingComplete && isShippingComplete ? (
          <div className='checkout-card-v2'>
            <div className='checkout-card-title'>payment</div>
            <input
              name='name'
              placeholder='name on card'
              value={payment.name}
              onChange={handlePaymentChange}
            />
            <input
              name='number'
              placeholder='card number'
              value={payment.number}
              onChange={handlePaymentChange}
            />
            <div className='checkout-form-row'>
              <input
                name='expiry'
                placeholder='expiration date'
                value={payment.expiry}
                onChange={handlePaymentChange}
              />
              <input
                name='cvc'
                placeholder='cvc'
                value={payment.cvc}
                onChange={handlePaymentChange}
              />
            </div>
            <button
              className='primary-btn-v2'
              onClick={savePayment}
              type='button'
            >
              complete purchase
            </button>
          </div>
        ) : (
          <EmptyCard title='payment' />
        )}
      </div>
      <div className='checkout-summary-v2'>
        <div className='summary-row-v2'>
          <span>sub total</span>
          <span>${subtotalSum.toFixed(2)}</span>
        </div>
        <div className='summary-row-v2'>
          <span>estimated shipping</span>
          <span>${shippingSum.toFixed(2)}</span>
        </div>
        <div className='summary-row-v2 total'>
          <span>total</span>
          <span>${totalSum.toFixed(2)}</span>
        </div>
        <button
          className='summary-btn-v2'
          disabled={
            !isPersonalComplete || !isBillingComplete || !isShippingComplete
          }
        >
          almost done
        </button>
      </div>
    </div>
  )
}
