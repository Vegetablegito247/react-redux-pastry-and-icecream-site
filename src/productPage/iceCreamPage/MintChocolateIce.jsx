import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AiFillHome, AiOutlineMenu, AiOutlineShoppingCart } from 'react-icons/ai';
import { addToCart } from '../../appStore/products/cart/cartSlice';
import { toast } from 'react-toastify';

function MintChocolateIce({ handleSideMenu }) {
    let mintChocolateProduct = useSelector((state) => state.mintIceCream.mintChocolateChipIceCream);

    //adding to cart
    const dispatch = useDispatch();

    const handleAddToCart = (item, quantity) => {
        // Dispatch the addToCart action with item and quantity
        dispatch(addToCart({ item, quantity }));
        toast.success(`${item.name} has been added to cart`, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
        });
    };

    return (
        <div className='cheesePastry'>
            <div className="itemHead">
                <div className="itemName">
                    <h3>Mint Chocolate Ice-cream</h3>
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
                    mintChocolateProduct.map((items, index) => (
                        <div key={index} className="items">
                            <div className="itemImg">
                                <img src={items.img} alt="" />
                            </div>
                            <div className="itemDesc">
                                <h3>{items.name}</h3>
                                <p>{items.title}</p>
                                <span>N{items.price}</span>
                            </div>
                            <div className="itemToCart">
                                <button onClick={() => handleAddToCart(items, 1)}>Add to cart</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MintChocolateIce