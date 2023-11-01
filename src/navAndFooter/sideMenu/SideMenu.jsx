import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BiNews } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { GiHamburgerMenu, GiCupcake, GiIceCreamCone } from 'react-icons/gi';
import logoImg from '../../images/croissant.png';
import './sideMenu.css';

function SideMenu() {
    //handling the menu bar
    const [openMenu, setOpenMenu] = useState(false);
    
    const handleSideMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <div className='sideMenuNav'>
            <NavLink to='/' className='sidelogo'>
                <h3>Double A's</h3>
                <img src={logoImg} alt="" />
            </NavLink>
            <div onClick={handleSideMenu} className="burger">
                <GiHamburgerMenu />
            </div>
            <ul className={openMenu ? 'sideBar active' : 'sideBar'}>
                <li onClick={handleSideMenu} className="closeSide">
                    <span>X</span>
                </li>
                <li onClick={handleSideMenu} className='infoSide'>
                    <NavLink to='/products/cheesePastry'>
                        <span>Pastries</span>
                        <GiCupcake className='navIcon' />
                    </NavLink>
                </li>
                <li onClick={handleSideMenu} className='infoSide'>
                    <NavLink to='/products/chocolateIce'>
                        <span>Ice-creams</span>
                        <GiIceCreamCone className='navIcon' />
                    </NavLink>
                </li>
                <li onClick={handleSideMenu} className='infoSide'>
                    <NavLink to='/blogs'>
                        <span>Blogs</span>
                        <BiNews className='navIcon' />
                    </NavLink>
                </li>
                <li onClick={handleSideMenu} className='infoSide'>
                    <NavLink to='/cart'>
                        <span>Cart</span>
                        <AiOutlineShoppingCart className='navIcon' />
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default SideMenu