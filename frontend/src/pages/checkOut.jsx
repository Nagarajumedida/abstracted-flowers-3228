import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Heading,
  Button
} from '@chakra-ui/react'
import styles from "./checkOut.module.css"
import PaymentPage from "./paymentPage";
import { Link } from "react-router-dom";


const CheckOut = () => {
  return (
    <div className="checkout">
      <form className={styles.checkoutContainer} >
      <Heading as='h3' >Checkout</Heading>
        <FormControl >
          <FormLabel >Name</FormLabel>
          <input type="text" name="name" />
        </FormControl>
        <FormControl className="form-row">
          <FormLabel >Address</FormLabel>
          <input type="text" name="address" />
        </FormControl>
        <FormControl className="form-row">
          <FormLabel >City</FormLabel>
          <input type="text" name="city" />
        </FormControl>
        <FormControl className="form-row">
          <FormLabel >State</FormLabel>
          <input type="text" name="state" />
        </FormControl>
        <FormControl className="form-row">
          <FormLabel>Zip Code</FormLabel>
          <input type="text" name="zip" />
        </FormControl>
        <FormControl className="form-row">
          <FormLabel>Credit Card Number</FormLabel>
          <input type="text" name="credit-card" /> <br/>
          
        </FormControl>
        
        <Link to="/payment"><button type="submit">Submit</button></Link>
      
      </form>

      
    </div>
  );
};

export default CheckOut;