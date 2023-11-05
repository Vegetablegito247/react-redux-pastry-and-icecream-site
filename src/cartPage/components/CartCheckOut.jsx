import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './style/cartCheck.css';
import { usePaystackPayment } from 'react-paystack';
import { toast } from 'react-toastify';
import { resetCart } from '../../appStore/products/cart/cartSlice';

function CartCheckOut() {
  const navigate = useNavigate();

  //getting the cart
  let totalPrice = useSelector((state) => state.cart.totalPrice);
  const cartLength = useSelector((state) => state.cart.cartItems);

  //reseting the cart
  const dispatch = useDispatch()

  //form verification
  const [email, setEmail] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const placeOrder = (e) => {
    e.preventDefault();

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.trim()) {
      setErrMsg('Email account is required');
    }
    else if (!emailPattern.test(email.trim())) {
      setErrMsg('Invalid email address');
    }
    else {
      setErrMsg('');
      initializePayment(onSuccess, onClose)
    }
  }

  //paystack payment configuration
  const config = {
    reference: (new Date()).getTime().toString(),
    email: email,
    amount: totalPrice * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: 'pk_test_8b50893a5891d0e9440ac570f6c142448d2161e3',
  };

  const onSuccess = () => {
    toast.success('Order has been placed successfully', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
    dispatch(resetCart());
    navigate('/');
  };

  const onClose = () => {
    toast.info('Order closed', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  }

  //initialize payment configuration
  const initializePayment = usePaystackPayment(config);

  //opening form order 
  const [openForm, setOpenForm] = useState(false)

  const handleOrder = () => {
    if (totalPrice !== 0) {
      setOpenForm(!openForm);
    }
    else {
      toast.info('Cart is empty at the moment', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }
  };

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
        <button onClick={handleOrder}>Checkout (N{totalPrice})</button>
      </div>

      <div className={openForm ? "emailCont active" : 'emailCont'}>
        <form action="" onSubmit={placeOrder} className="getEmail">
          <div onClick={handleOrder} className="closeOrder">
            <span>X</span>
          </div>
          <div className="emailCtrl">
            <label htmlFor="">Type in your Email address</label>
            <input
              placeholder='johnDoe@gmail.com'
              type="email"
              name=""
              value={email}
              onChange={handleEmailChange}
            />
            {errMsg && <p className='err-msg'>{errMsg}</p>}
          </div>
          <div className="emailButton">
            <button type='submit'>Place order N({totalPrice})</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CartCheckOut;