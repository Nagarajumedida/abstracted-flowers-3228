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
import Mobile from '../SingleComponents/Mobile'
import Television from '../SingleComponents/Television'
import Headsets from '../SingleComponents/Headset'
import Camera from '../SingleComponents/Camera'
import Computer from '../SingleComponents/Computers'
import Kitchen from '../SingleComponents/Kitchen'
import Personal from '../SingleComponents/Personal'
import Accessories from '../SingleComponents/Accessories'
import HomeProducts from '../SingleComponents/HomeNeed'
import SingleProduct from '../ProductComponents/SingleProduct'

import PaymentPage from '../pages/PaymentPage'
import CreditCard from '../pages/Creditcard'





const MainRoutes = () => {
  return (
    <Routes>
         <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<ProductRecords/>}/>
        <Route path="/checkout" element={<CheckOut/>}/>

        <Route path="/Payment" element = {<PaymentPage/>}/>

        <Route path="/payment" element = {<PaymentPage/>}/>


        {/* <Route path='/product?category=television' element={<ProductRecords/>}/>
        <Route path='/product?category=mobile' element={<ProductRecords/>}/> */}
{/*
        <Route path="/product/:id" element={<SingleProductRecord/>}/>
        <Route path="/product/:id/edit" element={<EditProductPage/>}/> */}
      <Route path="/product/:id" element={<SingleProduct/>}/>
      {/* <Route path="/product/:id/edit" element={<EditProductPage/>}/> */}
        <Route path="*" element={<h3>Page Not Found</h3>}/>
        <Route path='/login' element={<Login/>}/>
         <Route path='/cart' element={<Cart/>}/>

         <Route path="mobiles" element={<Mobile/>}/>
         <Route path="television" element={<Television/>}/>
         <Route path="headsets" element={<Headsets/>}/>
         <Route path="/homeproducts" element={<HomeProducts/>}/>
         <Route path="/camera" element={<Camera/>}/>
         <Route path="/Computers" element={<Computer/>}/>
         <Route path="/kitchen" element={<Kitchen/>}/>
         <Route path="/personal" element={<Personal/>}/>
         <Route path="/accessories" element={<Accessories/>}/>

         <Route path="/register" element={<Register/>}/>
         <Route path='/creditcard' element={<CreditCard/>}/>

        <Route/>
    </Routes>
  )
}
export default MainRoutes