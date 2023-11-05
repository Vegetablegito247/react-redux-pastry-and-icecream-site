import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './style/cartItem.css';
import { AiFillDelete } from 'react-icons/ai';
import { decrement, increment, removeFromCart } from '../../appStore/products/cart/cartSlice';

function CartItem() {
    //getting the cart
    let cartItem = useSelector((state) => state.cart.cartItems);

    //updating cart content
    const dispatch = useDispatch();

    const handleDeleteCart = (itemId) => {
        dispatch(removeFromCart(itemId));
    };

    const handleIncrementCart = (itemId) => {
        dispatch(increment(itemId));
    };

    const handleDecrementCart = (itemId) => {
        dispatch(decrement(itemId));
    };

    return (
        <div className='cartItem'>
            {
                cartItem.length === 0 ? (
                    <div className="empCart">
                        <p>Your cart is empty</p>
                    </div>
                ) : (
                    cartItem.map((cart, index) => (
                        <div key={index} className="cartList">
                            <div className="cartDetails">
                                <div className="cartImg">
                                    <img src={cart.img} alt="" />
                                </div>
                                <div className="cartInfo">
                                    <h3>{cart.name}</h3>
                                    <p>{cart.title}</p>
                                    <span>N{cart.price}</span>
                                </div>
                            </div>
                            <div className="cartQuantity">
                                <div onClick={() => handleDeleteCart(cart.id)} className="delete">
                                    <span>Delete</span>
                                    <AiFillDelete />
                                </div>
                                <div className="quantity">
                                    <div onClick={() => handleDecrementCart(cart.id)} className="minus">
                                        <span>-</span>
                                    </div>
                                    <div className="number">
                                        <span>{cart.quantity}</span>
                                    </div>
                                    <div onClick={() => handleIncrementCart(cart.id)} className="add">
                                        <span>+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )
            }
        </div>
    )
}

export default CartItem