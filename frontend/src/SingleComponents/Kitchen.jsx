import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import { Box, Image, Text, Checkbox, Button, Heading, Flex, Center, Divider } from '@chakra-ui/react'
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs"




import styled from "styled-components"
import { FilterSort } from "../ProductComponents/FilterSort"
import "../ProductComponents/ProductList.css"
import "../ProductPages/ProductRecords.css"


import { getProductList } from '../Redux/action'
// import "./ProductList.css"
const KitchenData = () => {
    const [heart, setHeart] = useState(true)

    const dispatch = useDispatch()
    const [searchParams] = useSearchParams()

    const productList = useSelector((store) => store.product)
    const location = useLocation()
   

    const onClickHeart = () => {
        setHeart(!heart)
    }



    useEffect(() => {
        dispatch(getProductList)
    }, [])

    useEffect(() => {
        if (location || productList.length === 0) {

            const productCategory = searchParams.getAll("category")

         


            const queryParams = {
                params: {
                    
                    category: productCategory,
               
                },
            }

            dispatch(getProductList(queryParams))
        }

    }, [location.search])




    return (
        <>
            {productList.length > 0 && productList.map((product) => {
                if (product.category == "kitchen") {
                    return (
                        <Link to={`/product/${product.id}`}>
                        <Box key={product.id} className='oneProductCard'>
                            <Box className='oneProd'>
                                <Box className='imgBox'>
                                    <Image className='prodimg' src={product.image} alt={product.title} />
                                </Box>

                                <Box style={{ marginBottom: "2%" }}><Text fontSize='xl'
                                    className='prodname'>{product.title}</Text></Box>
                                <Flex fontWeight='500' style={{ gap: "4%", alignItems: "center", marginBottom: "2%" }}>
                                    <Text color='#003380' fontSize='lg'>₹{product.price}.00</Text>
                                    <Text color="gray"><s>₹{Number(product.price) + Number(product.price * 18 / 100)}.00</s></Text>
                                    <Text color="green">18%(₹3,500)</Text>
                                </Flex>
                                <Box><Button style={{
                                    border: "1px solid green", color: "green", borderRadius: "20px",
                                    height: "20px"
                                }} fontSize="11px">OFFERS AVAILABLE</Button></Box>
                            </Box>

                            <Box fontSize='lg'
                                style={{
                                    display: "grid", border: "1px solid rgb(223, 220, 220)",
                                    alignItems: "center", padding: "2%",

                                    gridTemplateColumns: "repeat(3,1fr)", textAlign: "center"
                                }}>
                                <Box><Checkbox colorScheme='blue'><Text>Compare</Text></Checkbox></Box>
                                <Center >
                                    <Divider orientation='vertical' />
                                </Center>
                                <Box style={{ display: "flex", alignItems: "center", gap: "2%" }}

                                    onClick={onClickHeart}>
                                    {!heart ? <BsSuitHeartFill /> : <BsSuitHeart />}Wishlist </Box>
                            </Box>
                        </Box>
                        </Link>
                    )
                }

            })}

        </>
    )
}


const searchCategory = ["mobile", "television",
    "Headset", "Home", "computers", "camera", "kitchen", "personal",
    "accessories"]
const category = [
    "MOBILES & TABLETS",
    "TELEVISIONS",
    "AUDIO",
    "HOME APPLIANCES",
    "COMPUTERS",
    "CAMERAS",
    "KITCHEN APPLIANCES",
    "PERSONAL CARE",
    "ACCESSORIES"]



const Kitchen = () => {
    const [name, setName] = useState(category[0])
    const location = useLocation()
    // console.log("productRecords",location.search.split("=")[1])

    useEffect(() => {
        const index = searchCategory.indexOf(location.search.split("=")[1])
        console.log("index", index)
        setName(category[index])
    }, [location])







    return (
        <Box className='mainbox'>
            <WrapperFilterSort>
                <FilterSort />
            </WrapperFilterSort>
            {/* <Show above='850px' className='filter'>
                <FilterSort/>
            </Show> */}

            <Box className='allproducts'>
                <Box >

                    <Box className='sortbtn'>
                        <Heading as='h2' size='xl'>{name}</Heading>
                        <Flex gap="3%" style={{ justifyContent: "space-evenly" }}>
                            <Button size={['sm', 'md', 'md']} className='btns'>Relevance</Button>
                            <Button size={['sm', 'md', 'md']} className='btns'>Price (Low-High)</Button>
                            <Button size={['sm', 'md', 'md']} className='btns'>Price (High-Low)</Button>
                        </Flex>
                    </Box>


                </Box>

                <Box className='products'>
                    <KitchenData />
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
 width:29%;


`;










export default Kitchen






