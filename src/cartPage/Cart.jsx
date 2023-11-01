import React, { useEffect } from 'react';
import CartItem from './components/CartItem';
import CartCheckOut from './components/CartCheckOut';
import Navbar from '../navAndFooter/Navbar';
import Footer from '../navAndFooter/Footer';
import { animateScroll as scroll } from 'react-scroll';
import './components/style/cart.css';

function Cart() {
    // scroll to top of page after each navigation
    useEffect(() => {
        scroll.scrollToTop({
            duration: 1000,
            smooth: 'easeInOutQuint',
        });
    }, []);
    return (
        <div style={{ width: '100%' }} className='cartPage'>
            <Navbar />
            <div
                className="cartMain"
            >
                <CartItem />
                <CartCheckOut />
            </div>
            <Footer />
        </div>
    )
}

export default Cart