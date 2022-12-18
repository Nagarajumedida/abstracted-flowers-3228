// import React, { Component } from 'react'; 

// class Payment extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             nameOnCard: '',
//             cardNumber: '',
//             expMonth: '',
//             expYear: '',
//             cvv: ''
//         };
//     }

//     handleInputChange = (event) => {
//         const {name, value} = event.target;
//         this.setState({
//             [name]: value
//         });
//     }

//     handleSubmit = (event) => {
//         event.preventDefault();
//         // re-direct to another page
//     }

//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     <label>Name on Card</label>
//                     <input
//                         name="nameOnCard"
//                         type="text"
//                         value={this.state.nameOnCard}
//                         onChange={this.handleInputChange}
//                     />
//                     <label>Card Number</label>
//                     <input
//                         name="cardNumber"
//                         type="text"
//                         value={this.state.cardNumber}
//                         onChange={this.handleInputChange}
//                     />
//                     <label>Expiry Month</label>
//                     <input
//                         name="expMonth"
//                         type="text"
//                         value={this.state.expMonth}
//                         onChange={this.handleInputChange}
//                     />
//                     <label>Expiry Year</label>
//                     <input
//                         name="expYear"
//                         type="text"
//                         value={this.state.expYear}
//                         onChange={this.handleInputChange}
//                     />
//                     <label>CVV</label>
//                     <input
//                         name="cvv"
//                         type="text"
//                         value={this.state.cvv}
//                         onChange={this.handleInputChange}
//                     />
//                     <button type="submit">Submit</button>
//                 </form>
//             </div>
//         );
//     }
// }

// export default Payment;











import { FormControl, FormLabel, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const PaymentPage = () => {
  

  const handleSubmit=()=>{
   
    alert("Your order has been placed")
   
   
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
        <button onClick={()=> handleSubmit()}>Submit</button>
      </Link>
    </div>
    </>
  );
};

export default PaymentPage;