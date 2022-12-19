import {Box,Button, Divider, Flex,Image,Input,InputGroup,InputRightAddon,Spacer,Text} from '@chakra-ui/react'
import React,{useContext,useEffect,useState } from 'react'
import {json, useNavigate} from 'react-router-dom'
import {FrontendContext} from '../context/FrontendContext'
const Cart = () => {
const [show,setShow] = useState(false)
const [item,setItem] = useState([])
const [price1,setPrice1] = useState(0)
const navigate = useNavigate()
const [totalPrice,setTotalPrice]=useState(0)
const {setCar,pincode,total,settotal,firstName} = useContext(FrontendContext)


console.log("showitem",item)


// function to add total amount here 
useEffect(()=>{
    
    let p = 0;
   
    item.forEach(el => {
        p += Number(el.price)
    })
    setTotalPrice(p)
},[item])





const handleDelete=(index)=>{
 const newItem=  item.filter((el,Index)=>{
     return Index!==index
   }) 

localStorage.setItem('cart',JSON.stringify(newItem))


const newData=JSON.parse(localStorage.getItem("cart"))
   
setItem(newData)

}

const handleAdd=(val,id)=>{
    
   }


const handleCheckout=()=>{
    if(firstName==="")
    navigate("/login")
    else
    navigate("/checkout")
}


useEffect(() => {
       setItem(JSON.parse(localStorage.getItem("cart"))||[]);
    }, [])




    return (
    <Box width="90%" margin="auto">
        <br/>
        <Flex>
        <Text>My Cart ({item.length} Items)</Text>
        <Spacer/><Spacer/><Spacer/><Spacer/><Spacer/><Spacer/><Spacer/><Spacer/><Spacer/><Spacer/>
        <Text>Shipping to:{Math.floor((Math.random()*1000000)+1)}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <i class="fa-solid fa-location-dot"></i></Text>
        <Spacer/>
        <Button colorScheme='red' variant='solid' width="30%" onClick={handleCheckout}>
        Checkout
        </Button>
        </Flex>
        <br/>
        <Flex>
            <Box width="67%">
                {item.map((e,index)=>
                <div key={e.id}>
                <Box border="1px solid #bdbdbd">
                <Flex>
                <Box>
                <Image src={e.image} alt="no" width="200px"/>
                <Flex width="170px" justifyContent="space-between" margin="auto">
                    <Button disabled={e.qty===1} colorScheme="gray" onClick={(e)=>handleAdd(-1,e.id)}>-</Button>
                    <Input value={e.qty} width="70px"/>
                    <Button colorScheme="gray" onClick={(e)=>handleAdd(1,e.id)}>+</Button>
                </Flex>
                </Box>
                <Box>
                    <br/>
                <Text width="400px" textAlign="left" fontWeight="bold" fontSize='sm'>{e.name}</Text>
                </Box>
                <Box textAlign="right">
                    <br/>
                    <Text fontWeight="bold">₹ {e.price}</Text>
                    <Text fontSize='xs'>Free Shipping</Text>
                    <Text fontSize='xs'>*Delivery assurance is subject to our delivery locations</Text>
                        <Text fontSize='xs'>Staying open as per govt.regulations</Text>
                </Box>
                </Flex>
                <Flex>
                <Box cursor="pointer" color='blue'height="35px" variant='link'
                 border="1px solid #bdbdbd" width="50%"
                  onClick={()=>handleDelete(index)}>
                                Remove      
                         </Box>
                <Box cursor="pointer" color='blue' variant='link' border="1px solid #bdbdbd" width="50%">            Move to Wishlist       </Box> 
                </Flex>
                </Box>
                <br/>
                </div>
                )}
                </Box>
            <Spacer/>
            <Box border="1px solid #bdbdbd" width="30%" height="300px">
                <br/>
            <InputGroup size='sm'width="90%" margin="auto">
                <Input placeholder='Coupon Code' />
                <InputRightAddon children='APPLY' color="blue"/>
            </InputGroup>
            <Box width="90%" margin="auto">
            <Text fontWeight="bold" textAlign="left">PRICE DETAILS</Text>
            <br/>
            <Flex justifyContent="space-between">
                <Text>Price({item.length}Items)</Text>
                <Text>₹{totalPrice}</Text>
            </Flex>
            <br/>
            <Flex justifyContent="space-between">
                <Text>Delivery Charges</Text>
                <Text color="green">FREE</Text>
            </Flex>
            <br/>
            <Divider />
            <Flex justifyContent="space-between">
                <Text>Discount</Text>
                <Text>₹1000</Text>
            </Flex>
            <br/>
            <Divider />
            <Flex justifyContent="space-between" fontWeight="bold">
                <Text>AMOUNT PAYABLE</Text>
                <Text>₹{totalPrice-1000}</Text>
            </Flex>
            </Box>
            </Box>
        </Flex>
    </Box>
  )
}
export default Cart