import React,{useContext,useState} from 'react'
import {Box,Input,Button,Text} from '@chakra-ui/react'
import {useNavigate} from 'react-router-dom'
import { FrontendContext} from '../context/FrontendContext';
const Login = () => {
const navigate = useNavigate();
const [first,setFirst] = useState(false)
const {mobile,setMobile} = useContext(FrontendContext)
  return (
    <div style={{height:"300px"}}>
        <br/>
        <Box marginLeft="60%" width="500px" boxShadow='md' display="flex" flexDirection="column" height="250px" justifyContent="space-around" alignItems="center">
        <Text fontWeight="bold">Login/Register</Text>
        <Input minlength="10" maxlength="13" type="number" placeholder='Enter Mobile Number' width="90%" onChange={(e)=>setMobile(e.target.value)}/>
        {first&&<Text color="red" fontSize='sm'>Mobile number is necessary</Text>}
        <Button colorScheme='red' width="90%" onClick={()=>{
          if(mobile.length!==0)
            navigate("/register")
            else
            setFirst(true)
          }}>PROCEED</Button>
        </Box>
        <br/>
    </div>
  )
}
export default Login