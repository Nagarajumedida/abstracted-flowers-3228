import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import EditProductPage from './EditProductPage'
import ProductRecords from './ProductRecords'
// import SingleProductRecord from './SingleProductRecord'
import Home from "../pages/Homepage/Homepage"
import Login from "../pages/Login"
import Cart from "../pages/Cart"
import Register from '../pages/Register'
import  CheckOut from '../pages/CheckOut'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product' element={<ProductRecords/>} />
      <Route path='/CheckOut' element={ <CheckOut/> } />
      <Route path='/payment' element={ <paymentPage/> } />

      {/* <Route path='/product?category=television' element={<ProductRecords/>}/>
        <Route path='/product?category=mobile' element={<ProductRecords/>}/> */}
      {/*         
        <Route path="/product/:id" element={<SingleProductRecord/>}/>
        <Route path="/product/:id/edit" element={<EditProductPage/>}/> */}

      {/* <Route path="/product/:id" element={<SingleProductRecord/>}/> */}
      {/* <Route path="/product/:id/edit" element={<EditProductPage/>}/> */}

      <Route path="*" element={<h3>Page Not Found</h3>} />
      <Route path='/login' element={<Login />} />
      <Route path='/cart' element={<Cart />} />
      <Route path="/register" element={<Register />} />
      <Route />

    </Routes>
  )
}

export default MainRoutes
