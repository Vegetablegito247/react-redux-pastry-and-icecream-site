import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import LandingPage from './landingPage/LandingPage';
import SideMenuOption from './productPage/mainPage/SideMenuOption';
import CheesePastry from './productPage/pastryPage/CheesePastry';
import ChocolatePastry from './productPage/pastryPage/ChocolatePastry';
import FruitPastry from './productPage/pastryPage/FruitPastry';
import StrawberryPastry from './productPage/pastryPage/StrawberryPastry';
import VanillaPastry from './productPage/pastryPage/VanillaPastry';
import ChocolateIce from './productPage/iceCreamPage/ChocolateIce';
import CookieAndCreamIce from './productPage/iceCreamPage/CookieAndCreamIce';
import MintChocolateIce from './productPage/iceCreamPage/MintChocolateIce';
import StrawberryIce from './productPage/iceCreamPage/StrawberryIce';
import VanillaIce from './productPage/iceCreamPage/VanillaIce';
import CreateBlog from './blogPage/CreateBlog';
import BlogList from './blogPage/BlogList';
import Cart from './cartPage/Cart';

function App() {
  //handling the menu bar
  const [openMenu, setOpenMenu] = useState(false);

  const handleSideMenu = () => {
    setOpenMenu(!openMenu);
    console.log(1);
  };

  return (
    <div className='App'>
      <SkeletonTheme baseColor="#c74049" highlightColor='#ffffff'>
        <Router>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='products' element={<SideMenuOption openMenu={openMenu} handleSideMenu={handleSideMenu} />}>
              <Route path='cheesePastry' element={<CheesePastry openMenu={openMenu} handleSideMenu={handleSideMenu} />} />
              <Route path='chocolatePastry' element={<ChocolatePastry openMenu={openMenu} handleSideMenu={handleSideMenu} />} />
              <Route path='fruitPastry' element={<FruitPastry openMenu={openMenu} handleSideMenu={handleSideMenu} />} />
              <Route path='strawberryPastry' element={<StrawberryPastry openMenu={openMenu} handleSideMenu={handleSideMenu} />} />
              <Route path='vanillaPastry' element={<VanillaPastry openMenu={openMenu} handleSideMenu={handleSideMenu} />} />
              <Route path='chocolateIce' element={<ChocolateIce openMenu={openMenu} handleSideMenu={handleSideMenu} />} />
              <Route path='cookieIce' element={<CookieAndCreamIce openMenu={openMenu} handleSideMenu={handleSideMenu} />} />
              <Route path='mintIce' element={<MintChocolateIce openMenu={openMenu} handleSideMenu={handleSideMenu} />} />
              <Route path='strawberryIce' element={<StrawberryIce openMenu={openMenu} handleSideMenu={handleSideMenu} />} />
              <Route path='vanillaIce' element={<VanillaIce openMenu={openMenu} handleSideMenu={handleSideMenu} />} />
            </Route>
            <Route path='blogs' element={<BlogList />} />
            <Route path='createBlog' element={<CreateBlog />} />
            <Route path='cart' element={<Cart />} />
          </Routes>
        </Router>
      </SkeletonTheme>
      <ToastContainer />
    </div>
  );
}

export default App;
