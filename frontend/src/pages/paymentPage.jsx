
import { FormControl, FormLabel, Heading } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
const PaymentPage = () => {
  const HandleSubmit = ()=>{
    const Navigate = useNavigate()
    Navigate("/")
  }
  return (
    <>
    <div style={{ width:"40%" , margin:"auto", marginTop:"50px", marginBottom:"50px"}}>
    <Heading as={"h3"} >Payment Page</Heading>
    <Heading as={"h6"} >Please enter your payment details here:</Heading>
    </div>
    <div style={{border:"1px solid grey", width:"60%" , margin:"auto", marginTop:"50px", marginBottom:"50px"}} >
      <form>
        <FormControl>
        <FormLabel>
          Credit Card Number:
          <input type="text" name="ccNumber" />
        </FormLabel>
        </FormControl>
        <FormControl>
        <FormLabel>
          Security Code:
          <input type="text" name="securityCode" />
        </FormLabel>
        </FormControl>
        <FormControl>
        <FormLabel>
          Expiration Date:
          <input type="date" name="expirationDate" />
        </FormLabel>
        </FormControl>
      </form>
      <Link to="/">
        <button onClick={()=> HandleSubmit()}>Submit</button>
      </Link>
    </div>
    </>
  );
};
export default PaymentPage;