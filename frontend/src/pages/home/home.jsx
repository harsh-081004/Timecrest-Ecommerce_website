import React, { useState } from "react";
import "./home.css";
import Header from "../../component/header/Header";
import Explorebrand from "../../component/Explorebrand/Explorebrand";
import WatchDisplay from "../../component/WatchDisplay/WatchDisplay";
import Review from "../../component/Review/Review";

const Home = () => {
  const [category, setCategory] = useState("all");

  return (
    <div>
      <Header></Header>
      <Explorebrand
        category={category}
        setCategory={setCategory}
      ></Explorebrand>
      <WatchDisplay category={category}></WatchDisplay>
      <Review></Review>
    </div>
  );
};

export default Home;
