import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
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
import { useDispatch } from 'react-redux';
import { resetCookie } from './appStore/products/iceCream/cookiesAndCreamIceSlice';
import { resetChoco } from './appStore/products/iceCream/chocolateIceSlice';
import { resetStraw } from './appStore/products/iceCream/strawberryIceSlice';
import { resetVanilla } from './appStore/products/iceCream/vanillaIceSlice';
import { resetMint } from './appStore/products/iceCream/mintChocolateChipIceSlice';

function App() {
  //handling the menu bar
  const [openMenu, setOpenMenu] = useState(false);

  const handleSideMenu = () => {
    setOpenMenu(!openMenu);
    console.log(1);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetCookie());
    dispatch(resetChoco());
    dispatch(resetStraw());
    dispatch(resetVanilla());
    dispatch(resetMint());
  }, [dispatch]);

  return (
    <div className='App'>
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
      <ToastContainer />
    </div>
  );
}

export default App;
