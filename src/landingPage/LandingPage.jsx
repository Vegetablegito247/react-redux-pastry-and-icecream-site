import React, { useEffect } from 'react';
import Head from './components/Head';
import Main from './components/Main';
import Navbar from '../navAndFooter/Navbar';
import Footer from '../navAndFooter/Footer';
import { animateScroll as scroll } from 'react-scroll';
import './style/main.css';

function LandingPage() {
  // scroll to top of page after each navigation
  useEffect(() => {
    scroll.scrollToTop({
      duration: 1000,
      smooth: 'easeInOutQuint',
    });
  }, []);

  return (
    <div className='landingPage'>
      <Navbar />
      <Head />
      <Main />
      <Footer />
    </div>
  )
}

export default LandingPage