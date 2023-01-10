import React from "react";
import "./Product.css";
const Product = (props) => {
  const { img, seller, name, price, ratings } = props.product;
  return (
    <div className="product">
      <img src={img} alt=""></img>
      <div className="prodict_info">
        <h5 className="title">{name}</h5>
        <p>
          <bold>Price ${price}</bold>
        </p>
        <p>
          <small>Seller: {seller}</small>
        </p>
        <p>
          <small>Ratings: {ratings}</small>
        </p>
      </div>
      <button onClick={()=>props.handleAddtoCart(props.product)} className="btn_cart">
        <p>Add to Cart</p>
      </button>
    </div>
  );
};

export default Product;
