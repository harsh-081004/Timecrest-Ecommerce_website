import React, { useContext } from "react";
import "./WatchItem.css";
import { assets } from "../../assets/all_product";
import { Storecontext } from "../context/Storecontest";

const WatchItem = ({ id, name, price, description, image }) => {
  const { cartItems, addTocart, removeFromCart, url } =
    useContext(Storecontext);

  return (
    <div className="Watchitem">
      <div className="watch-item-image-container">
        <img
          className="watch-item-image"
          src={url + "/images/" + image}
          alt=""
        />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addTocart(id)}
            src={assets.add1}
            alt=""
          ></img>
        ) : (
          <div className="watch-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img onClick={() => addTocart(id)} src={assets.add} alt="" />
          </div>
        )}
      </div>
      <div className="watch-item-info">
        <div className="watch-item-name-rating">
          <p>{name}</p>
          <img src={assets.star_rating} alt="" />
        </div>
        <p className="watch-desc">{description}</p>
        <p className="watch-price">${price}</p>
      </div>
    </div>
  );
};

export default WatchItem;
