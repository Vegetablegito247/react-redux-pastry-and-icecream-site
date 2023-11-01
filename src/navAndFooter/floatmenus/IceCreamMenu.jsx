import React from 'react';
import './menu.css';
import { Link } from 'react-router-dom';

function IceCreamMenu() {
    return (
        <div className='iceCreamMenu'>
            <Link to='products/chocolateIce' className="iceCreamType">Chocolate ice-cream</Link>
            <Link to='products/cookieIce' className="iceCreamType">Cookies and Cream ice-cream</Link>
            <Link to='products/mintIce' className="iceCreamType">Mint chocolate ice-cream</Link>
            <Link to='products/strawberryIce' className="iceCreamType">Strawberry iceCream</Link>
            <Link to='products/vanillaIce' className="iceCreamType">Vanilla iceCream</Link>
        </div>
    )
}

export default IceCreamMenu;