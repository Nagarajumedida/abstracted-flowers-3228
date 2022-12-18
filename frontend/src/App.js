
import './App.css';



// import Products from './Product/Products';

import Navbar from './components/navbar/Navbar';


import MainRoutes from './ProductPages/MainRoutes'

// import Homepage from './pages/Homepage/Homepage';

import Footer from './components/footer/Footer';


import Register from './pages/Register';
import Mobile from './SingleComponents/Mobile';



function App() {
  return (
    <>

 <Navbar/>
  <MainRoutes/>
<Footer/>



    </>
  );
}

export default App;
