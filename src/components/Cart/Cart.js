import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;

  let total = 0;
  let shipping = 0;
  for (const product of cart) {
    total = total + product.price;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandtotal = total + shipping + tax;
  return (
    <div className="cart">
      <h3>Order Summary</h3>
      <h4>Selected Items: {cart.length}</h4>
      <h4>Total Price: ${total}</h4>
      <h4>Total Shipping: ${shipping}</h4>
      <h4>Tax: ${tax}</h4>
      <h2>Grand Total: ${grandtotal.toFixed(2)}</h2>
    </div>
  );
};

export default Cart;
