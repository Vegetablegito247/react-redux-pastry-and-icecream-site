import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import './style/cartCheck.css';
import { resetCart } from '../../appStore/products/cart/cartSlice';

function CartCheckOut() {
  //getting the cart
  let totalPrice = useSelector((state) => state.cart.totalPrice);
  const cartLength  = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();

  return (
    <div className='cartCheck'>
      <div className="checkHead">
        <h3>Carts</h3>
      </div>
      <div className="cartItems">
        <span>Items:</span>
        <span>{cartLength.length}</span>
      </div>
      <div className="cartTotal">
        <span>Total:</span>
        <span>N{totalPrice}</span>
      </div>
      <div className="cartCheckBtn">
        <button onClick={() => dispatch(resetCart())}>Checkout (N{totalPrice})</button>
      </div>
    </div>
  )
}

export default CartCheckOut;