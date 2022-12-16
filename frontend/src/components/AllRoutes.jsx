import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../pages/Cart'
import Login from '../pages/Login'
const AllRoutes = () => {
    return (
      <Routes>
         <Route path='/login' element={<Login/>}/>
         <Route path='/cart' element={<Cart/>}/>
       </Routes>
  )
}
export default AllRoutes