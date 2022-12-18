import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import ReactImageMagnify from "react-image-magnify";
import { Box, Button, Divider, Flex, Heading,ListItem,Text, UnorderedList } from '@chakra-ui/react';
import "./SingleProduct.css"




const SingleProduct = () => {
    const [data,setData]=useState([])
   // const [inputData,setInputData]=useState('')
    const {id}=useParams()
    const dispatch=useDispatch();
    const [show,setshow]=useState(true)
    const[Items,setItems]=useState([])

  

    const GetFunc=()=>{
        return axios.get(`http://localhost:8080/product/${id}`) 
    }

    useEffect(()=>{
            GetFunc()
            .then((res)=>{setData(res.data)
              // setInputData(res.data)
           })
            .catch((err)=>console.log(err))
    
    },[id]);

    const AddToCart=()=>{
    
     setItems([...Items,data])
  alert("Item added to Cart")
    }

    useEffect(()=>{
      localStorage.setItem("cart",JSON.stringify(Items))
    },[Items])
 

 const BuyNow=()=>{
  localStorage.removeItem('cart');
  setItems([])
 }



console.log("CART",Items)


 console.log("data",data)

  return (<>
    <Box className='main'>
    <Box className='magnifybox'>
        <ReactImageMagnify
          {...{
            smallImage: {
              isFluidWidth: true,
              src: `${data.image}`,
              width: 100,
              height:100
            },
            largeImage: {
              src: `${data.image}`,
              width: 600,
              height: 800
            },
            enlargedImageContainerDimensions: {
              width: "200%",
              height: "100%"
            }
          }}
        />
      </Box>

     <Box className='alldetails'>
        <Box className='NamePrice' >
        <Heading >{data.title}</Heading>
        <Heading color='#003380' as='h2' size='lg' style={{display:"flex"}}><Text color='red'>Price:</Text>₹{data.price}.00</Heading>
        </Box>

        
        <Heading as='h4' size='md' color='blackAlpha' style={{marginTop:"2%"}}>FREE Shipping!</Heading>

        <Box fontSize='xl' className='NamePrice' style={{marginTop:"3%"}}>
        <Text >MRP:₹
        <s>{Math.floor(Number(data.price)+Number(data.price*Math.floor(Math.random()*(50 - 15) + 15)/100))}</s>
        (Inclusive of all taxes)</Text>
        <Text color='green' fontWeight="600"  style={{display:"flex"}}>You Save:{Math.floor(Math.random()*15+10)}% 
        (₹{Number(Math.floor(data.price*(Math.random()*15 + 10)/100))})</Text>
        </Box>



        <Link to="/checkout">

        <Box fontSize='xl' className='btnbox' style={{marginTop:"3%"}}>
        <button className='cartbtn' onClick={AddToCart} > ADD TO CART</button>
        <button className='buybtn' onClick={BuyNow}>BUY NOW</button>
         </Box>

         </Link>





        <Divider style={{color:"black"}} orientation='horizontal' />

       <Box style={{marginTop:"2%",textAlign:"justify",marginTop:"4%"}}>
       <Heading as='h4' size='md'>Gain more with offers (5)</Heading> 
       <UnorderedList fontSize='lg'>
  <ListItem>7.5% Instant Discount (Max 5000) with Citibank Credit/Debit Cards & EMI transactions. <a style={{color:"blue",cursor:"pointer"}} >Read T&C</a></ListItem>
  <ListItem>Use coupon code "RDNEW750" and get Rs.750 off on Rs.15000 and Over. <a style={{color:"blue",cursor:"pointer"}} ><a style={{color:"blue",cursor:"pointer"}} >Read T&C</a></a></ListItem>
  <ListItem>Use coupon code "RDNEW300" and get Rs.300 off on Rs.7500 and Over.<a style={{color:"blue",cursor:"pointer"}} >Read T&C</a></ListItem>
  <ListItem>Shop for Rs.20,000 & above and get instant discount Up To Rs.5000,Use coupon codes "YES1000" for above 20,000 ,"YES2500" for above 50,000, "YES5000" for above 1,00,000..<a style={{color:"blue",cursor:"pointer"}} >Read T&C</a></ListItem>
<ListItem>Get Cashback upto Rs. 1,000 on Mobikwik Wallet. <a style={{color:"blue",cursor:"pointer"}} >Read T&C</a></ListItem>

</UnorderedList>
       </Box>

       <Divider style={{color:"black"}} orientation='horizontal' />


       <Box style={{marginTop:"2%",textAlign:"justify",marginTop:"4%"}}>
       <Heading as='h4' size='md'>Save more with EMI/Cashback </Heading> 
       <UnorderedList fontSize='lg'>
  <ListItem>EMIs (Credit Cards) from ₹{Math.floor(`${data.price/12}`)}/month <a style={{color:"blue",cursor:"pointer"}} >| View all Standard Credit Cards EMI options</a></ListItem>
  
</UnorderedList>
       </Box>

       <Divider style={{color:"black"}} orientation='horizontal' />

       <Box style={{marginTop:"2%",textAlign:"justify",marginTop:"4%"}}>
       <Heading as='h4' size='md'>Warranty </Heading> 
       <UnorderedList fontSize='lg'>
  <ListItem>{Math.floor(Math.random()*2+1)} Year manufacturer warranty</ListItem>
  
</UnorderedList>
       </Box>

       <Divider style={{color:"black"}} orientation='horizontal' />


       <Box style={{marginTop:"2%",textAlign:"justify",marginTop:"4%"}}>
       <Heading as='h4' size='md'>Additional Services & Warranties (5) </Heading> 
        <Heading as='h4' size='md' cursor='pointer' color='blue.600' onClick={()=>setshow(!show)}>{show?"View All":"Hide"}</Heading>
       {!show && <UnorderedList fontSize='lg'>
        <ListItem>₹1399 for 6 Month: resQ Care Plan(RCP) Extended Warranty for , 6 months</ListItem>
        <ListItem>₹1849 for 1 Year: resQ Care Plan(RCP) Extended Warranty for , 12 months</ListItem>
        <ListItem>₹2699 for 1 Year: resQ Care Plan(RCP) Cracked Screen Protection for , 12 months</ListItem>
        <ListItem>₹3579 for 1 Year: resQ Care Plan(RCP) Accidental and liquid damage Protection for , 12 months</ListItem>
       
        </UnorderedList>}
       </Box>


       <Box style={{marginTop:"2%",textAlign:"justify",marginTop:"4%"}}>
       <Heading as='h4' size='md'>Return Policy </Heading> 
        
       { <UnorderedList fontSize='lg'>
        <ListItem>Items are eligible for return within 7 Days of Delivery.<a style={{color:"blue",cursor:"pointer"}} >Read T&C</a></ListItem>
        <ListItem>All accessories, product & packaging need to be returned in original condition.</ListItem>
       
        </UnorderedList>}
       </Box>




     </Box>
       


      </Box>
   


    </>)
}

export default SingleProduct