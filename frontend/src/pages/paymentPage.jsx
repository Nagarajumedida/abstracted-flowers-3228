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











import React from "react";
import { Link } from "react-router-dom";

const PaymentPage = () => {
  return (
    <div>
      <h1>Payment Page</h1>
      <p>Please enter your payment details here:</p>
      <form>
        <label>
          Credit Card Number:
          <input type="text" name="ccNumber" />
        </label>
        <label>
          Security Code:
          <input type="text" name="securityCode" />
        </label>
        <label>
          Expiration Date:
          <input type="date" name="expirationDate" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <Link to="/confirmation">
        <button>Next</button>
      </Link>
    </div>
  );
};

export default PaymentPage;