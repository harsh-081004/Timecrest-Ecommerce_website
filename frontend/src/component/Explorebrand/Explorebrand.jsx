import React from "react";
import "./Explorebrand.css";
import { brand_list } from "../../assets/all_product";

const Explorebrand = ({ category, setCategory }) => {
  return (
    <div className="explorebrand" id="Explorebrand">
      <h1>Explore Our Brand</h1>
      <p className="explorebrand-txt">
        Explore TimeCrest's brands and discover a world where craftsmanship
        meets innovation. Our brand is built on a legacy of precision, offering
        timeless designs that reflect both luxury and performance
      </p>
      <div className="explorebrand-list">
        {brand_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.brand_name ? "all" : item.brand_name
                )
              }
              key={index}
              className="explorebrand-item-list"
            >
              <img
                className={category === item.brand_name ? "active" : ""}
                src={item.brand_image}
                alt=""
              />
              <p>{item.brand_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default Explorebrand;
