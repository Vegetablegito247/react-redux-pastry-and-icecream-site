import React from 'react';
import { Link } from 'react-router-dom';
import './style/footer.css';
import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
    return (
        <div className='footer'>
            <div className="mainFoot">
                <div className="listCont">
                    <h3>Follow us on our Socials</h3>
                    <ul className="ulList socials">
                        <li>
                            <Link><FaFacebookSquare /></Link>
                        </li>
                        <li>
                            <Link><FaInstagram /></Link>
                        </li>
                        <li>
                            <Link><FaTwitter /></Link>
                        </li>
                    </ul>
                </div>
                <div className="listCont">
                    <h3>Our Locations</h3>
                    <p>
                        179, Bamgbose street, Lagos Island, Lagos.
                    </p>
                    <div className="contIframe">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.547889593142!2d3.3954900733504316!3d6.45203752399307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b17b60fd32f%3A0x3b2fe68b73986ae4!2s179%20Bamgbose%20St%2C%20Lagos%20Island%20102273%2C%20Lagos!5e0!3m2!1sen!2sng!4v1697636122958!5m2!1sen!2sng" title='address' allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className="listCont">
                    <h3>FAQS</h3>
                    <ul className="ulList">
                        <li>
                            <Link>About us</Link>
                        </li>
                        <li>
                            <Link>Contact us</Link>
                        </li>
                        <li>
                            <Link>Privacy & Policy</Link>
                        </li>
                        <li>
                            <Link>Terms & Conditions</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="copyRight">
                <p>Copyright © 2023 Double A's Pastries & Ice-creams</p>
            </div>
        </div>
    )
}

export default Footer