import React from 'react';
import png from '../../images/icecream.png';
import '../style/head.css';

function Head() {
  return (
    <div className='head'>
        <div className="headText">
            <h1>Indulge in Divine Delights: Irresistible Pastries and Dreamy Ice Creams to Satisfy Your Sweet Cravings for as low as N2000 upward!</h1>
        </div>
        <div className="headImg">
            <img src={png} alt="" />
        </div>
    </div>
  )
}

export default Head;