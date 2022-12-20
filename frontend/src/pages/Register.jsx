import React, { useContext, useRef, useState } from 'react'
import { Box,Input,Button,Text,Flex, useToast, FormControl, FormLabel } from '@chakra-ui/react'
import { useNavigate,Link } from 'react-router-dom'
import { FrontendContext} from '../context/FrontendContext';
const Register = () => {
    const navigate=useNavigate();

    const [first,setFirst] = useState(true)
   
    const [firstnam, setfirstnam] = useState("")
    const [lastName,setlastName] = useState("")
    const [email,setemail] = useState("")
    const [mobile,setmobile] = useState("")
    const[item,setItem]=useState([])

    const [verified, setverified] = useState(false)
    const ref1=useRef({})

//function to handle gmail 
    const handleEmail=()=>{
     if(firstnam&&lastName&&email){
      setFirst(false)
      alert("2022")
     }
     else{
      toast({
        position: 'bottom-right',
        title: 'Please fill the all details',
        description: "Something required field is missing",
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
     }
    }

// function to handle otp
    const handleOTP=()=>{
      if(verified)
      alert("Already verified")
      else
     { if(Number(ref1.current.otp.value)===2022)
      {
        toast({
        position:'top',
        title: 'OTP Varified',
        description: `Thank You ${firstnam} ${lastName} to varify your email.`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      setverified(true)}
      else
      toast({
        position:'bottom',
        title: 'Wrong OTP',
        description: "Please fill right OTP",
        status: 'warning',
        duration: 4000,
        isClosable: true,
      })
    }
    }
    

   const handleRegister=()=>{
    const userDetails={
      first_name:firstnam,
      last_name:lastName,
      email:email,
      phone:mobile
    }

    const user=JSON.parse(localStorage.getItem("user"))

    if(user){
      user.map((e,index)=>{
        if(e.mobile===userDetails.phone){
          alert("User already registerd please login")
        }
      })
    }
    else{
      localStorage.setItem("user",JSON.stringify(userDetails))
        alert("Register Successfull")

        setTimeout(()=>{
          navigate("/")
        },[5000])
    }
   

   // console.log("userDetails",userDetails)
   }








    const toast = useToast()
  return (
    <Box w={['90%','80%','50%']}  style={{margin:"auto",}}>
        <br/>
        <Box margin="auto"  boxShadow='md' display="flex" style={{margin:"auto",padding:"5%",
        width:"95%",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"1%"}}
         flexDirection="column" height="600px" justifyContent="space-around" alignItems="center">
        <Text fontWeight="bold">Register New Account</Text>
        <FormControl isRequired>
         <FormLabel></FormLabel>
        <Input placeholder='First Name*' type='text' width="90%" onChange={(e)=>setfirstnam(e.target.value)}/>
       </FormControl>
       
        <FormControl isRequired>
      <FormLabel></FormLabel>
        <Input placeholder='Last Name*' type='text' width="90%" onChange={(e)=>setlastName(e.target.value)}/>
       </FormControl>
       
        <FormControl isRequired>
      <FormLabel></FormLabel>
        <Input placeholder='Email Address*' type='email' width="90%" onChange={(e)=>setemail(e.target.value)}/>
       </FormControl>


        {first&&<Text color="red" fontSize='sm'>Field marked * are mandatory</Text>}
        <Text  fontSize='xs'>Your email address will be used to send order invoice, order updates etc.</Text>
        {first?<Button colorScheme='red' variant='outline' onClick={handleEmail}>
            Verify Email
        </Button>:<Flex>
        <Input placeholder='Enter OTP' width="90%" ref={(e)=>ref1.current["otp"]=e}/>
        <Button colorScheme={verified?'green':'red'} variant='solid' onClick={handleOTP}>
            {verified?"Verified 🗸":"Submit OTP"}
        </Button></Flex>
        }

   <FormControl isRequired>
      <FormLabel></FormLabel>
        <Input placeholder='Enter 10 digit Mobile Number here' width="90%" onChange={(e)=>setmobile(e.target.value)} />
        </FormControl>
        <Text  fontSize='xs'>Your mobile number will be used to avail benefits such as Jio Mart Cashback and ROne Loyality Points and receive quick notifications.
</Text>
        <Button colorScheme='red' width="90%"  onClick={handleRegister}
        disabled={mobile.length!==10||!firstnam||!lastName||!email}>PROCEED</Button>
             
        <Flex justifyContent="center" alignItems="center" >
        <Text  fontSize='xs'>Already Registered?</Text>
        <Link to="/login"><Button colorScheme='red' variant='link'>
            LOGIN
        </Button></Link>
        </Flex>
        <br/>
        </Box>
        <br/>
    </Box>
  )
}
export default Register