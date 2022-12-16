import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom'

import { getProductList } from '../Redux/action'
import "./ProductList.css"
const ProductLists = () => {
  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()

  const productList = useSelector((store) => store.product)
  const location = useLocation()
  // console.log(store)
  console.log(productList)

  useEffect(() => {
    dispatch(getProductList)
  }, [])

  useEffect(() => {
    if (location || productList.length === 0) {

      const productCategory = searchParams.getAll("category")

      //   const productGender = searchParams.getAll("gender")


      const queryParams = {
        params: {
          //   gender:productGender,
          category: productCategory,
          _sort: searchParams.get('sortBy') && "price",
          _order: searchParams.get('sortBy')
        },
      }

      dispatch(getProductList(queryParams))
    }

  }, [location.search])
  return (
    <>
      {productList.length > 0 && productList.map((product) => {
        return (
          <div key={product.id} className="product-list">
            <div style={{fontWeight:"bold",fontSize:"16px"}}>{product.title}</div>
            <div>
              <img src={product.image} alt={product.title} style={{ height: "200px", width: "100%" }} />
            </div>
            {/* <div style={{fontWeight:"bold",fontSize:"16px"}}>{product.category}</div> */}
            <div>${product.price}</div>
            <div>
              <button className='button-product'>BUY NOW</button>
            </div>
          </div>
        )
      })}

    </>
  )
}

export default ProductLists
