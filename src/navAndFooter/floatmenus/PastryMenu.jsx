import React from 'react';
import './menu.css';
import { Link } from 'react-router-dom';

function PastryMenu() {
  return (
    <div className='pastryMenu'>
        <Link to='products/cheesePastry' className="pastriesType">Cheese pastries</Link>
        <Link to='products/chocolatePastry' className="pastriesType">Chocolate pastries</Link>
        <Link to='products/fruitPastry' className="pastriesType">Fruit pastries</Link>
        <Link to='products/strawberryPastry' className="pastriesType">Strawberry pastries</Link>
        <Link to='products/vanillaPastry' className="pastriesType">Vanilla pastries</Link>
    </div>
  )
}

export default PastryMenu