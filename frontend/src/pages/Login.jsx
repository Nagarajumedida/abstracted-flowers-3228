import React,{useContext,useState} from 'react'
import {Box,Input,Button,Text, Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useToast,
  } from '@chakra-ui/react'
  
import {useNavigate,Link} from 'react-router-dom'
import { FrontendContext} from '../context/FrontendContext';
const Login = () => {
const navigate = useNavigate();
const [first,setFirst] = useState(false)
const [mobile,setMobile] = useState('')
const toast = useToast()


const HandleLogin=()=>{
 //get login data from local storage
  const userData=JSON.parse(localStorage.getItem("user"))

if(mobile.length!==10){
  // for error
  toast({
    position: 'bottom-right',
    title: 'Wrong Number',
    description: "Please fill correct 10 digit Mobile Number",
    status: 'error',
    duration: 3000,
    isClosable: true,
  })

  setMobile('')
}

else if(mobile.length===10 && userData){
  
  console.log("login userdata",userData)

userData.map((el,index)=>{
  if(el.mobile!==mobile){
    alert("Please register first")
    navigate("/register")
    console.log("login el",el)
  }
  else{
    toast({
      position: 'top',
      title: 'Login Successful',
      description: "Please go to home page for shopping",
      status: 'error',
      duration: 2000,
      isClosable: true,
    })

    setTimeout(()=>{
      navigate("/")
    },[3000])
   
  }
})

setFirst(false)

 }
 else{
  toast({
    position: 'top-right',
    variant:'top-accent',
    title: 'User does not exist',
    description: "Please register first",
    status: 'warning',
    containerStyle: {
      height:'70px',
      width: '100px',
      maxWidth: '100%',
    },
    duration: 3000,
    isClosable: true,
  })

  setTimeout(()=>{
    navigate("/register")
  },[4000])
  


 setFirst(true)

 }


}






  return (
    <div style={{height:"300px"}}>
      
        <br/>
        <Box marginLeft="60%" width="500px" boxShadow='md' display="flex" flexDirection="column" height="250px" justifyContent="space-around" alignItems="center">
        <Text fontWeight="bold">Login/Register</Text>
        <Input minlength="10" maxlength="10" type="number"
         
         placeholder='Enter 10 digit Mobile Number '
         width="90%" onChange={(e)=>setMobile(e.target.value)} />
        {first&&<Text color="red" fontSize='sm'>*Mobile number is Necessary*</Text>}
        <Button colorScheme='red' width="90%" 
        onClick={HandleLogin} disabled={mobile.length!==10}
       
        >PROCEED</Button>
         
        </Box>
        <br/>
    </div>
  )
}
export default Login


