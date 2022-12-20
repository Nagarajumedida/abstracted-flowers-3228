import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const  PaymentSuccess=()=> {
  const navigate=useNavigate()
  const getToken=()=>{
    const token =Math.floor(Math.random() * 999999) + 111111
    return token
  }
const [timmer,setTimmer]=useState(3)

function myFunction() {
 
  let timeout
  alertFunc()
  function alertFunc() {
    setTimmer((prev)=>prev-1)
    timeout = setTimeout(alert2Func, 2000)

    }
    function alert2Func(){
     setTimmer((prev)=>prev-1)
      timeout = setTimeout(alert3Func, 2000)
  }
  function alert3Func(){
    setTimmer((prev)=>prev-1)
    navigate("/")
 }
  }
  
  
  
  
  




useEffect(()=>{
  myFunction()
},[])


  return (
    <div style={{margin:"auto",width:"40%",padding:"5%",fontSize:"20px",fontWeight:"700",color:"green",
    marginTop:"5%",marginBottom:"5%"}}>
      <h1>Thanks for Your Order</h1>
      <h2 className='ordtoken'>Your Order Id is <span className='token'>RNT914024ORD</span> </h2>
      <h2 className='redire'>Redirecting You To Home Page in... {timmer}</h2>
      {/* <h2 id='redirect'>order</h2> */}

    </div>
  )
}
  export default PaymentSuccess;