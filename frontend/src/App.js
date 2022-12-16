
import './App.css';
import Products from './Product/Products';
import Navbar from './components/navbar/Navbar';

// import Homepage from './pages/Homepage/Homepage';
import MainRoutes from './ProductPages/MainRoutes';

import Homepage from './pages/Homepage/Homepage';
import Footer from './components/footer/Footer';
import AllRoutes from './components/AllRoutes';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  return (
    <>




   
 <Navbar/>
 <AllRoutes/>
  <MainRoutes/>
  <Cart/>
<Login/>
 <Register/>

 <Footer/>

    </>
  );
}

export default App;
