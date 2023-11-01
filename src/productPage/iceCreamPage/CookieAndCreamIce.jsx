import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AiFillHome, AiOutlineMenu, AiOutlineShoppingCart } from 'react-icons/ai';

function CookieAndCreamIce({ handleSideMenu }) {
    let cookiesAndCreamProduct = useSelector((state) => state.cookieIceCream.cookiesAndCreamIcecream);

    return (
        <div className='cheesePastry'>
            <div className="itemHead">
                <div className="itemName">
                    <h3>Cookies and Cream Ice-cream</h3>
                </div>
                <ul className="itemMenu">
                    <li>
                        <NavLink to='/'>
                            <span>Home</span>
                            <AiFillHome />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/cart'>
                            <span>Cart</span>
                            <AiOutlineShoppingCart />
                        </NavLink>
                    </li>
                    <li onClick={handleSideMenu}>
                        <NavLink>
                            <span>Menu</span>
                            <AiOutlineMenu />
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="itemProducts">
                {
                    cookiesAndCreamProduct.map((items, index) => (
                        <div key={index} className="items">
                            <div className="itemImg">
                                <img src="" alt="" />
                            </div>
                            <div className="itemDesc">
                                <h3>{items.name}</h3>
                                <p>{items.title}</p>
                            </div>
                            <div className="itemToCart">
                                <button>Add to cart</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CookieAndCreamIce