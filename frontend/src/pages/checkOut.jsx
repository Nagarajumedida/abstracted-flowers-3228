import React, { useState } from "react";
import  {useForm} from "react-hook-form";
import "./checkOut.module.css";



 export const CheckOut = () => {
  const [data, setData] = useState({});
  const { register, handleSubmit } = useForm();

  const onSubmit = (values) => {
    console.log(values);
    setData(values);
  };

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" ref={register} />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" ref={register} />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input type="text" name="address" ref={register} />
        </div>
        <div className="form-group">
          <label>City</label>
          <input type="text" name="city" ref={register} />
        </div>
        <div className="form-group">
          <label>State</label>
          <input type="text" name="state" ref={register} />
        </div>
        <div className="form-group">
          <label>Zip Code</label>
          <input type="text" name="zipcode" ref={register} />
        </div>
        <div className="form-group">
          <label>Country</label>
          <input type="text" name="country" ref={register} />
        </div>
        <div className="form-group">
          <label>Credit Card Number</label>
          <input type="text" name="creditCardNumber" ref={register} />
        </div>
        <div className="form-group">
          <label>Expiration Date</label>
          <input type="text" name="expirationDate" ref={register} />
        </div>
        <div className="form-group">
          <label>CVV</label>
          <input type="text" name="cvv" ref={register} />
        </div>
        <div className="form-group">
          <input type="submit" value="Submit" />
        </div>
      </form>
      {data.name ? (
        <div>
          <h3>Confirmation</h3>
          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
          <p>Address: {data.address}</p>
          <p>City: {data.city}</p>
          <p>State: {data.state}</p>
          <p>Zip Code: {data.zipCode}</p>
          <p>Country: {data.country}</p>
        </div>
      ) : null}
    </div>
  );
};

