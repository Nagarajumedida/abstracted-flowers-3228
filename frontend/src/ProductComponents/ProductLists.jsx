import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom'
import { Box,Image,Text,Checkbox,Button,Flex,Center,Divider } from '@chakra-ui/react'
import { BsSuitHeartFill,BsSuitHeart } from "react-icons/bs"


import { getProductList } from '../Redux/action'
import "./ProductList.css"
const ProductLists = () => {
  const [heart,setHeart]=useState(true)

  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()

  const productList = useSelector((store) => store.product)
  const location = useLocation()
  // console.log(store)
 
 




  const onClickHeart=()=>{
      setHeart(!heart)
  }



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
          

          <>
      <Box key={product.id} className='oneProductCard'>
   <Box className='oneProd'>
    <Box className='imgBox'>
      <Image className='prodimg' src={product.image} alt={product.title} />
      </Box>
    
    <Box style={{marginBottom:"2%"}}><Text fontSize='xl' 
    className='prodname'>{product.title}</Text></Box>
    <Flex fontWeight='500' style={{gap:"4%",alignItems:"center",marginBottom:"2%"}}>
      <Text color='#003380' fontSize='lg'>₹{product.price}.00</Text>
    <Text color="gray"><s>₹{Number(product.price)+Number(product.price*18/100)}.00</s></Text>
    <Text color="green">18%(₹3,500)</Text>
    </Flex>
    <Box><Button style={{border:"1px solid green",color:"green",borderRadius:"20px",
    height:"20px"}} fontSize="11px">OFFERS AVAILABLE</Button></Box>
    </Box>

    <Box fontSize='lg' 
    style={{display:"grid",border:"1px solid rgb(223, 220, 220)",
    alignItems:"center",padding:"2%",

    gridTemplateColumns:"repeat(3,1fr)",textAlign:"center"}}>
      <Box><Checkbox colorScheme='blue'><Text>Compare</Text></Checkbox></Box>
      <Center >
       <Divider orientation='vertical' />
      </Center>
      <Box style={{display:"flex",alignItems:"center",gap:"2%"}}
    
      onClick={onClickHeart}>
        {!heart?<BsSuitHeartFill/>:<BsSuitHeart/>}Wishlist </Box>
       </Box>
   </Box>

         
          </>
        )
      })}

    </>
  )
}

export default ProductLists





