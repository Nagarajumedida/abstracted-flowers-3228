import './App.css';
import Products from './Product/Products';
import Navbar from './components/navbar/Navbar';
import Homepage from './pages/Homepage/Homepage';
import AllRoutes from './components/AllRoutes';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
function App() {
  return (
    <div className="App">
    <Products/> 
    <AllRoutes/>
 <Navbar/>
 <Homepage/>
 <Cart/>
<Login/>
 <Register/>
 </div>
  );
}
export default App;
