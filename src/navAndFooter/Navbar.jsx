import React from 'react';
import { GiCupcake, GiIceCreamCone } from 'react-icons/gi';
import { BiNews } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import logoImg from '../images/croissant.png';
import './style/nav.css';
import { NavLink } from 'react-router-dom';
import PastryMenu from './floatmenus/PastryMenu';
import IceCreamMenu from './floatmenus/IceCreamMenu';
import SideMenu from './sideMenu/SideMenu';

function Navbar() {
    return (
        <nav>
            <ul className="navUl">
                <li className='info'>
                    <NavLink to='/products/cheesePastry'>
                        <span>Pastries</span>
                        <GiCupcake className='navIcon' />
                    </NavLink>
                    <PastryMenu />
                </li>
                <li className='info'>
                    <NavLink to='/products/chocolateIce'>
                        <span>Ice-creams</span>
                        <GiIceCreamCone className='navIcon' />
                    </NavLink>
                    <IceCreamMenu />
                </li>
                <li className="logo">
                    <NavLink to='/'>
                        <h3>Double A's</h3>
                        <img src={logoImg} alt="" />
                    </NavLink>
                </li>
                <li className='info'>
                    <NavLink to='/blogs'>
                        <span>Blogs</span>
                        <BiNews className='navIcon' />
                    </NavLink>
                </li>
                <li className='info'>
                    <NavLink to='/cart'>
                        <span>Cart</span>
                        <AiOutlineShoppingCart className='navIcon' />
                    </NavLink>
                </li>
            </ul>
            <SideMenu />
        </nav>
    )
}

export default Navbar