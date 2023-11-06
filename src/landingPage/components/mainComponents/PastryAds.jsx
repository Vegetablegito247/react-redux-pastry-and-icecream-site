import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CardSkeleton from '../../../skeletonLoader/CardSkeleton';

function PastryAds() {
    let pastry1 = useSelector((state) => state.vanillaPastry.vanillaPastries);
    let pastry2 = useSelector((state) => state.fruitPastry.fruitPastries);

    const [pastryDisplay, setpastryDisplay] = useState([]);

    // useEffect(() => {
    //     // Function to select a random item from an array
    //     function getRandomItemFromArray(arr) {
    //         const randomIndex = Math.floor(Math.random() * arr.length);
    //         return arr[randomIndex];
    //     };

    //     // Function to filter two random items from the provided array
    //     const filterRandomItems = (arr) => {
    //         const items = [];
    //         while (items.length < 2) {
    //             const randomItem = getRandomItemFromArray(arr);
    //             if (!items.includes(randomItem)) {
    //                 items.push(randomItem);
    //             }
    //         }
    //         return items;
    //     }

    //     // Combine two random items from pastry1 and pastry2
    //     const randomItems1 = filterRandomItems(pastry1);
    //     const randomItems2 = filterRandomItems(pastry2);
    //     const combinedItems = [...randomItems1, ...randomItems2];

    //     setpastryDisplay(combinedItems)
    // }, [pastry1, pastry2]);

    useEffect(() => {
        const interval = setInterval(() => {
            const randomPastry1 = pastry1[Math.floor(Math.random() * pastry1.length)];
            const randomPastry2 = pastry2[Math.floor(Math.random() * pastry2.length)];

            const updatedDetails = [randomPastry1, randomPastry2];

            setpastryDisplay(updatedDetails)
        }, 5000);

        return () => clearInterval(interval);
    }, [pastry1, pastry2]);

    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/products/cheesePastry');
    };

    //force load
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 5000)

        return () => {
            clearTimeout(timer)
        }
    }, [])

    return (
        <div className="pastryLand">
            <h1>Checkout our mouth-watering Pastries</h1>
            <div className="disPastry">
                {loading && <CardSkeleton card={2} />}
                {!loading && pastryDisplay.map((pastry, index) => (
                    <div key={index} className="pastries">
                        <img src={pastry.img} alt="" />
                        <h3>{pastry.name}</h3>
                        <button onClick={handleNavigation}>view item</button>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default PastryAds;