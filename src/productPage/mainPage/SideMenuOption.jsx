import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import '../styles/sideMenu.css';

function SideMenuOption({ openMenu, handleSideMenu }) {

    return (
        <div className='sideMenuOption'>
            <div className={openMenu ? 'sideMenu active' : 'sideMenu'}>
                <div className="productList">
                    <div className="pastryProduct">
                        <div className="productHead">
                            <h3>Pastries</h3>
                        </div>
                        <div className="pastryLinks">
                            <NavLink onClick={handleSideMenu} to='cheesePastry' className="viewPastries">Cheese pastries</NavLink>
                            <NavLink onClick={handleSideMenu} to='chocolatePastry' className="viewPastries">Chocolate pastries</NavLink>
                            <NavLink onClick={handleSideMenu} to='fruitPastry' className="viewPastries">Fruit pastries</NavLink>
                            <NavLink onClick={handleSideMenu} to='strawberryPastry' className="viewPastries">Strawberry pastries</NavLink>
                            <NavLink onClick={handleSideMenu} to='vanillaPastry' className="viewPastries">Vanilla pastries</NavLink>
                        </div>
                    </div>
                    <div className="iceCreamProduct">
                        <div className="productHead">
                            <h3>Ice-cream</h3>
                        </div>
                        <div className="iceCreamLinks">
                            <NavLink onClick={handleSideMenu} to='chocolateIce' className="viewIceCream">Chocolate ice-cream</NavLink>
                            <NavLink onClick={handleSideMenu} to='cookieIce' className="viewIceCream">Cookies and Cream ice-cream</NavLink>
                            <NavLink onClick={handleSideMenu} to='mintIce' className="viewIceCream">Mint chocolate ice-cream</NavLink>
                            <NavLink onClick={handleSideMenu} to='strawberryIce' className="viewIceCream">Strawberry ice-cream</NavLink>
                            <NavLink onClick={handleSideMenu} to='vanillaIce' className="viewIceCream">Vanilla ice-cream</NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <div className="outlet">
                <Outlet />
            </div>
        </div>
    )
}

export default SideMenuOption