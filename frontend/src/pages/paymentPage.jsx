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











import React from 'react';
import './payment.css';

class paymentPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentMode: 'cash'
    };
  }

  handleChange = (e) => {
    this.setState({ paymentMode: e.target.value });
  }

  render() {
    return (
      <div className="payment">
        <div className="payment-container">
          <h1>Payment</h1>
          <form>
            <div className="payment-mode">
              <h3>Payment Mode</h3>
              <div className="payment-options">
                <div>
                  <input
                    type="radio"
                    name="payment-mode"
                    value="cash"
                    id="cash"
                    onChange={this.handleChange}
                    checked={this.state.paymentMode === 'cash'}
                  />
                  <label htmlFor="cash">Cash</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="payment-mode"
                    value="credit_card"
                    id="credit_card"
                    onChange={this.handleChange}
                    checked={this.state.paymentMode === 'credit_card'}
                  />
                  <label htmlFor="credit_card">Credit Card</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="payment-mode"
                    value="debit_card"
                    id="debit_card"
                    onChange={this.handleChange}
                    checked={this.state.paymentMode === 'debit_card'}
                  />
                  <label htmlFor="debit_card">Debit Card</label>
                </div>
              </div>
            </div>
            {this.state.paymentMode === 'cash' && (
              <div className="cash-payment">
                <h3>Cash Payment</h3>
                <div>
                  <label>
                    Amount to be paid <span>Rs. 1000</span>
                  </label>
                </div>
              </div>
            )}
            {this.state.paymentMode === 'credit_card' && (
              <div className="credit-card-payment">
                <h3>Credit Card Payment</h3>
                <div>
                  <label>
                    Card Type
                    <select>
                      <option value="visa">Visa</option>
                      <option value="mastercard">Mastercard</option>
                      <option value="american_express">American Express</option>
                    </select>
                  </label>
                </div>
                <div>
                  <label>
                    Card Number <input type="text" placeholder="1234 5678 9101 1121" />
                  </label>
                </div>
                <div>
                  <label>
                    Name on the Card <input type="text" placeholder="John Doe" />
                  </label>
                </div>
                <div>
                  <label>
                    Expiry Date <input type="text" placeholder="MM/YY" />
                  </label>
                </div>
                <div>
                  <label>
                    CVV <input type="text" placeholder="123" />
                  </label>
                </div>
              </div>
            )}
            {this.state.paymentMode === 'debit_card' && (
              <div className="debit-card-payment">
                <h3>Debit Card Payment</h3>
                <div>
                  <label>
                    Card Type
                    <select>
                      <option value="visa">Visa</option>
                      <option value="mastercard">Mastercard</option>
                      <option value="american_express">American Express</option>
                    </select>
                  </label>
                </div>
                <div>
                  <label>
                    Card Number <input type="text" placeholder="1234 5678 9101 1121" />
                  </label>
                </div>
                <div>
                  <label>
                    Name on the Card <input type="text" placeholder="John Doe" />
                  </label>
                </div>
                <div>
                  <label>
                    Expiry Date <input type="text" placeholder="MM/YY" />
                  </label>
                </div>
                <div>
                  <label>
                    CVV <input type="text" placeholder="123" />
                  </label>
                </div>
              </div>
            )}
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default paymentPage;