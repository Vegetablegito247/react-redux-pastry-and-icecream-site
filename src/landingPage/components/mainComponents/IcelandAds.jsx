import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function IcelandAds() {
    let iceCream1 = useSelector((state) => state.cookieIceCream.cookiesAndCreamIcecream);
    let iceCream2 = useSelector((state) => state.chocolateIceCream.chocolateIceCream);

    const [iceCreamDisplay, setIceCreamDisplay] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const randomIceCream1 = iceCream1[Math.floor(Math.random() * iceCream1.length)];
            const randomIceCream2 = iceCream2[Math.floor(Math.random() * iceCream2.length)];

            const updatedDetails = [randomIceCream1, randomIceCream2];

            setIceCreamDisplay(updatedDetails)
        }, 5000);

        return () => clearInterval(interval);
    }, [iceCream1, iceCream2]);

    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/products/chocolateIce');
    };

    return (
        <div className="iceLand">
            <h1>Checkout our delicious Ice-creams</h1>
            <div className="disIceCream">
                {
                    iceCreamDisplay.map((ice, index) => (
                        <div key={index} className="ices">
                            <img src={ice.img} alt="" />
                            <h3>{ice.name}</h3>
                            <button onClick={handleNavigation}>view item</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default IcelandAds;