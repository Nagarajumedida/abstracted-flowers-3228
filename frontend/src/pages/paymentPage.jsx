import React, { Component } from 'react'; 

class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameOnCard: '',
            cardNumber: '',
            expMonth: '',
            expYear: '',
            cvv: ''
        };
    }

    handleInputChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // re-direct to another page
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name on Card</label>
                    <input
                        name="nameOnCard"
                        type="text"
                        value={this.state.nameOnCard}
                        onChange={this.handleInputChange}
                    />
                    <label>Card Number</label>
                    <input
                        name="cardNumber"
                        type="text"
                        value={this.state.cardNumber}
                        onChange={this.handleInputChange}
                    />
                    <label>Expiry Month</label>
                    <input
                        name="expMonth"
                        type="text"
                        value={this.state.expMonth}
                        onChange={this.handleInputChange}
                    />
                    <label>Expiry Year</label>
                    <input
                        name="expYear"
                        type="text"
                        value={this.state.expYear}
                        onChange={this.handleInputChange}
                    />
                    <label>CVV</label>
                    <input
                        name="cvv"
                        type="text"
                        value={this.state.cvv}
                        onChange={this.handleInputChange}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default Payment;