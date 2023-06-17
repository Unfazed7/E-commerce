import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div className="col-3">
      <Link className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link>
          <img src="images/wish.svg" alt="wishlist"/>
          </Link>
        </div>
        <div className="product-image">
          <img 
           src="images/watch-1.jpg" 
           className="img-fluid"
           alt="watch" 
           />
           
          <img 
           src="images/watch-0.jpg" 
           className="img-fluid"
           alt="watch" 
           />
                     
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">Kids Headphones</h5>
          <ReactStars
            count={5}
            value='3'
            size={24}
            edit={false}
            activeColor="#ffd700"
          />
          <p className="price">Rs 500</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column">
            <Link>
                <img src="images/add-cart.svg" alt="addcart"/>           
            </Link>
            <Link>
                <img src="images/view.svg" alt="view"/>           
            </Link>
            <Link>
                <img src="images/prodcompare.svg" alt="compare"/>           
            </Link>
          </div>  
        </div> 
      </Link>
    </div>
  );
};

export default ProductCard;
