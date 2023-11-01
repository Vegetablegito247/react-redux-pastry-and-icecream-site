import React from 'react';
import { FaMoneyBillWave, FaGifts, FaMotorcycle } from 'react-icons/fa';
import '../style/main.css';
import IcelandAds from './mainComponents/IcelandAds';
import PastryAds from './mainComponents/PastryAds';
import rating from '../../images/rating.png';

function Main() {
    const comments = [
        {
            id: 1,
            name: 'Joseph Tolani',
            comment: 'Double\'s A is a dessert haven! The variety of pastries and ice creams is amazing, and the website is user-friendly. Ordering is a breeze, and the treats are divine!',
            img: '',
            location: 'Victoria Island'
        },
        {
            id: 2,
            name: 'Yetunde Isaac',
            comment: 'I can\'t get enough of Double\'s A! Their ice creams are pure indulgence, and the pastries are heavenly. The website\'s design is as delicious as their offerings.',
            img: '',
            location: 'Lekki Phase 1'
        },
        {
            id: 3,
            name: 'Quadri Ezekiel',
            comment: 'Double\'s A is my sweet escape. The site\'s clean layout makes ordering a pleasure, and their pastries and ice creams are scrumptious. It\'s my go-to for dessert cravings!',
            img: '',
            location: 'Kwara'
        }
    ]
    return (
        <div className='main'>
            <div className="about">
                <h1>About Us</h1>
                <p>
                    Double's A is your ultimate destination for indulging in delightful pastries and dreamy ice creams. We are passionate about crafting irresistible sweet treats that bring joy to your taste buds. Our commitment to quality and creativity shines through every delectable creation we offer. Whether you crave the rich flavors of artisanal ice creams or the delicate layers of expertly crafted pastries, Double's A is where your dessert dreams come true. Join us on a culinary journey filled with scrumptious delights, and experience the magic of Double's A, where every bite is a moment of pure bliss.
                </p>
            </div>

            <IcelandAds />

            <div className="expertise">
                <h1>Why order from us ?</h1>
                <div className="offers">
                    <div className="getOff">
                        <div className="iconCont">
                            <FaMoneyBillWave className='iconOffer' />
                        </div>
                        <h3>Affordable Cakes</h3>
                        <p>
                            Our cakes are affordable, delicious and excellent.
                        </p>
                    </div>
                    <div className="getOff">
                        <div className="iconCont">
                            <FaGifts className='iconOffer' />
                        </div>
                        <h3>Exclusive Discounts and Deals</h3>
                        <p>
                            Discover exciting deals and special offers. Save big with our exclusive discounts and promotions. Don't miss out on the savings!
                        </p>
                    </div>
                    <div className="getOff">
                        <div className="iconCont">
                            <FaMotorcycle className='iconOffer' />
                        </div>
                        <h3>Fast</h3>
                        <p>
                            We deliver even at the shortest notice
                        </p>
                    </div>
                </div>
            </div>

            <PastryAds />

            <div className="comments">
                <h1>What others are saying about us</h1>
                <div className="abtCmt">
                    {
                        comments.map((cmt) => (
                            <div key={cmt.id} className="showCmt">
                                <img src={rating} alt="" />
                                <div className="cmtIdt">
                                    <h3>{ cmt.name }</h3>
                                    <span>{ cmt.location }</span>
                                    <p>{ cmt.comment }</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Main