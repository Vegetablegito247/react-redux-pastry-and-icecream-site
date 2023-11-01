import React from 'react';
import './style/cartCheck.css';

function CartCheckOut() {
  return (
    <div className='cartCheck'>
      <div className="checkHead">
        <h3>Carts</h3>
      </div>
      <div className="cartItems">
        <span>Items:</span>
        <span>(0)</span>
      </div>
      <div className="cartTotal">
        <span>Total:</span>
        <span>N10000</span>
      </div>
      <div className="cartCheckBtn">
        <button>Checkout (10000)</button>
      </div>
    </div>
  )
}

export default CartCheckOut