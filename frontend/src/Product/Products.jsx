import React from 'react'
import { Box, Text, 
  Heading,
  Button,
  Checkbox,
  Image,
  Flex,
  Center,
  Divider
} from '@chakra-ui/react'
import { BsSuitHeartFill,BsSuitHeart } from "react-icons/bs"
import data from "../db.json"




import { useState } from "react";

import "./Product.css"
import { useEffect } from 'react';






const Products = () => {
const [Data,setData]=useState(data.product)
useEffect(()=>{


},[])


  return (<Box>
    <h1>Products</h1>

<Box className='mainbox'>
    <Box className='filter'>
        <Filter/>
    </Box>


    <Box className='allproducts'>

    <Box className='sortbtn'>
    <Heading as='h2' size='xl'>TELEVISIONS</Heading>
    <Button className='btns'>Relevance</Button>
    <Button  className='btns'>Price (Low-High)</Button>
    <Button  className='btns'>Price (High-Low)</Button>
   </Box>
   <Box>
    Filters
  </Box>

    <Box className='products'>
      {
        Data.map((item)=>{
          return <AllProducts 
          key={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          />
        })
      }
       </Box>  
    </Box>
</Box>
</Box>
  )
}

export default Products


const AllProducts=({title,image,price})=>{
  const [heart,setHeart]=useState(true)

  return(<>
  
  <Box className='showallproducts'>

   <Box className='oneProductCard'>

    <Box className='oneProd'>
    <Box className='imgBox'><Image className='prodimg' src={image}/></Box>
    
    <Box style={{marginBottom:"2%"}}><Text fontSize='xl' 
    className='prodname'>{title}</Text></Box>
    <Flex fontWeight='500' style={{gap:"4%",alignItems:"center",marginBottom:"2%"}}>
      <Text color='#003380' fontSize='lg'>₹{price}.00</Text>
    <Text color="gray"><s>16,999.00</s></Text>
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
      <Box style={{display:"flex",alignItems:"center",gap:"2%"}} onClick={()=>setHeart(!heart)}>
        {!heart?<BsSuitHeartFill/>:<BsSuitHeart/>}Wishlist </Box>
       </Box>
   </Box>


  </Box>
</>)
}













//filter 
const Filter=()=>{


return (<>
  <Box><Text fontSize='25px' fontWeight='500'>FILTERS</Text></Box>

   <Box>
    <Text fontWeight='500'>Price</Text>
   

    </Box> 

    </>)
}