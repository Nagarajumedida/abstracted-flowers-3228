import React from "react";

const CheckOut = () => {
  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <form>
        <div className="form-row">
          <label>Name</label>
          <input type="text" name="name" />
        </div>
        <div className="form-row">
          <label>Address</label>
          <input type="text" name="address" />
        </div>
        <div className="form-row">
          <label>City</label>
          <input type="text" name="city" />
        </div>
        <div className="form-row">
          <label>State</label>
          <input type="text" name="state" />
        </div>
        <div className="form-row">
          <label>Zip Code</label>
          <input type="text" name="zip" />
        </div>
        <div className="form-row">
          <label>Credit Card Number</label>
          <input type="text" name="credit-card" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CheckOut;