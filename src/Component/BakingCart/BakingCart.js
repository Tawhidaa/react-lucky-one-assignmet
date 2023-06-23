import React from 'react';
import "./BakingCart.css";

const BakingCart = ({ baking,handleAddToCart}) => {
const { img, name, price } =baking;
    return (
        <div className="product">
        <img src={img} alt="" />
        <div className="product-info">
          <h2 className="product-name">Name: {name}</h2>
          <h5 className='product-price'>Price: ${price}</h5>
        </div>
        <button
          className="btn-cart"
          onClick={()=>handleAddToCart(baking)}

          ><p className="btn-text">Add to Cart</p>
        </button>
            
        </div>
    );
};

export default BakingCart;