
import './App.css';
// import Products from './Product/Products';
import Navbar from './components/navbar/Navbar';

// import Homepage from './pages/Homepage/Homepage';
import MainRoutes from './ProductPages/MainRoutes';

// import Homepage from './pages/Homepage/Homepage';
import Footer from './components/footer/Footer';


import Register from './pages/Register';


function App() {
  return (
    <>

   
 <Navbar/>

  <MainRoutes/>

 {/* <Register/> */}

 <Footer/>

    </>
  );
}

export default App;
