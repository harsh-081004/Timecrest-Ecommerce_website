import React, { useContext } from "react";
import "./WatchDisplay.css";
import { Storecontext } from "../context/Storecontest";
import WatchItem from "../WatchItem/WatchItem";

const WatchDisplay = ({ category }) => {
  const { watch_list } = useContext(Storecontext);

  return (
    <div className="WatchDisplay" id="WatchDisplay">
      <h2>Top Watches</h2>
      <div className="WatchDisplayList">
        {watch_list.map((item, index) => {
          // {
          //   console.log(Category, item.Category);
          // }
          if (category === "all" || category === item.category) {
            return (
              <WatchItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              ></WatchItem>
            );
          }
        })}
      </div>
    </div>
  );
};

export default WatchDisplay;
