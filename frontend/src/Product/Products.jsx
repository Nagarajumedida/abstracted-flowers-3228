import React from 'react'
import { Box, Text, 
  Heading,
  Button,
  Checkbox,
  Image,
  Flex
} from '@chakra-ui/react'
import { BsSuitHeartFill,BsSuitHeart } from "react-icons/bs"





import { useState } from "react";

import "./Product.css"






const Products = () => {
  return (<Box>
    <h1>Products</h1>

<Box className='mainbox'>
    <Box className='filter'>
        <Filter/>
    </Box>
    <Box className='products'>
         <AllProducts/>
    </Box>
</Box>
</Box>
  )
}

export default Products


const AllProducts=()=>{
  const [heart,setHeart]=useState(true)

  return(<Box>
  <Box className='sortbtn'>
    <Heading as='h2' size='3xl'>TELEVISIONS</Heading>
    <Button className='btns'>Relevance</Button>
    <Button  className='btns'>Price (Low-High)</Button>
    <Button  className='btns'>Price (High-Low)</Button>
  </Box>
  <Box>
    Filters
  </Box>



  <Box className='showallproducts'>

   <Box className='oneProd'>
    <Box><Image src='https://www.reliancedigital.in/medias/Mi-4A-Horizon-Edition-Television-492166368-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxNjcxM3xpbWFnZS9qcGVnfGltYWdlcy9oNDcvaDk4Lzk3OTA4NzQ3MTQxNDIuanBnfDhjNDk4M2M1MTM1YTViZmFkMTY1NGM1ZmU4ZjFiODNiOGQ2NTMyYzUxYjg0NWJmYWE4MjIzODg4YmEzMWM5ZDY'/></Box>
    <Box><Text>MI 32 HD Ready Smart LED TV, 4A Horizon, ELA4546IN</Text></Box>
    <Box>
      <Text>₹16,999.00</Text>
    <Text><s>16,999.00</s></Text>
    <Text>18%(₹3,500)</Text>
    </Box>
    <Box><Button>OFFERS AVAILABLE</Button></Box>
    
    <Box style={{display:"grid",border:" 1px solid rgb(223, 220, 220)",alignItems:"center",gridTemplateColumns:"repeat(2,1fr)"}}>
      <Box><Checkbox colorScheme='green'>Compare</Checkbox></Box>
      <Box style={{display:"flex",alignItems:"center",gap:"2%"}} onClick={()=>setHeart(!heart)}>
        {!heart?<BsSuitHeartFill/>:<BsSuitHeart/>}<Text>WishList</Text> </Box>
       </Box>
   </Box>
  </Box>
</Box>)
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