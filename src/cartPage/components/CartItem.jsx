 import React from 'react';
import './style/cartItem.css';
import { AiFillDelete } from 'react-icons/ai';

function CartItem() {
    return (
        <div className='cartItem'>
            <div className="cartList">
                <div className="cartDetails">
                    <div className="cartImg">
                        <img src="" alt="" />
                    </div>
                    <div className="cartInfo">
                        <h3>Chocolate pastry</h3>
                        <p>I love chocolate cakes</p>
                    </div>
                </div>
                <div className="cartQuantity">
                    <div className="delete">
                        <span>Delete</span>
                        <AiFillDelete />
                    </div>
                    <div className="quantity">
                        <div className="minus">
                            <span>-</span>
                        </div>
                        <div className="number">
                            <span>0</span>
                        </div>
                        <div className="add">
                            <span>+</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cartList">
                <div className="cartDetails">
                    <div className="cartImg">
                        <img src="" alt="" />
                    </div>
                    <div className="cartInfo">
                        <h3>Chocolate pastry</h3>
                        <p>I love chocolate cakes</p>
                    </div>
                </div>
                <div className="cartQuantity">
                    <div className="delete">
                        <span>Delete</span>
                        <AiFillDelete />
                    </div>
                    <div className="quantity">
                        <div className="minus">
                            <span>-</span>
                        </div>
                        <div className="number">
                            <span>0</span>
                        </div>
                        <div className="add">
                            <span>+</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem