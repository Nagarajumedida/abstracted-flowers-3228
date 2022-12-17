import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'


import ProductLists from '../ProductComponents/ProductLists';
import "./ProductRecords.css"
import { Show, Hide } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom';
import {FilterSort}  from "../ProductComponents/FilterSort"


const searchCategory=["mobile","television",
"Headset","Home","computers","camera","kitchen","personal",
"accessories"]
const category=[
"MOBILES & TABLETS",
"TELEVISIONS",
"AUDIO",
"HOME APPLIANCES",
"COMPUTERS",
"CAMERAS",
"KITCHEN APPLIANCES",
"PERSONAL CARE",
"ACCESSORIES"]



const ProductRecords = () => {
    const [name,setName]=useState(category[0])
    const location = useLocation()
   // console.log("productRecords",location.search.split("=")[1])

useEffect(()=>{
const index=searchCategory.indexOf(location.search.split("=")[1])
console.log("index",index)
setName(category[index])
},[location])







    return (
        <Box className='mainbox'> 
     <FilterSort/>
            {/* <Show above='850px' className='filter'>
               
            </Show> */}
   
      <Box className='allproducts'>
        <Box >

        <Box className='sortbtn'>
    <Heading as='h2' size='xl'>{name}</Heading>
    <Flex gap="3%" style={{justifyContent:"space-evenly"}}>
    <Button size={['sm','md','md']} className='btns'>Relevance</Button>
    <Button size={['sm','md','md']} className='btns'>Price (Low-High)</Button>
    <Button size={['sm','md','md']} className='btns'>Price (High-Low)</Button>
    </Flex>
   </Box>


        </Box>

            <Box className='products'>
                <ProductLists />
            </Box>
            </Box>
        </Box>
    )
}


const Wrapper = styled.div`
//   border:1px solid red;
  display:flex;
  min-height:100vh;  
`;

const WrapperFilterSort = styled.div`
 width:300px;
//   border:2px solid teal; 
position:fixed;
`;
const WrapperUserProduct = styled.div`
//  border:1px solid blue;
 width:80%;
 display:grid;
 margin-left:300px;
 grid-template-columns:repeat(auto-fit,minmax(250px,max-content));
 grid-gap:20px;
 justify-content:center;
 text-align:center
 grid-gap:10px;
`;


export default ProductRecords
