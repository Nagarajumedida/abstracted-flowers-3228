import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import EditProductPage from './EditProductPage'
import ProductRecords from './ProductRecords'
// import SingleProductRecord from './SingleProductRecord'
import Home from "../pages/Homepage/Homepage"

const MainRoutes = () => {
  return (
    <Routes>
         <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<ProductRecords/>}/>
        {/* <Route path="/product/:id" element={<SingleProductRecord/>}/> */}
        {/* <Route path="/product/:id/edit" element={<EditProductPage/>}/> */}
        <Route path="*" element={<h3>Page Not Found</h3>}/>
        <Route/>

    </Routes>
  )
}

export default MainRoutes
