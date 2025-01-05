import React, { useState } from "react";
import Nav from "./component/navbar/Nav";
import { Route, Routes, useActionData } from "react-router-dom";
import Home from "./pages/home/home";
import Placeorder from "./pages/placeorder/placeorder";
import Footer from "./component/footer/Footer";
import LoginPopup from "./component/LoginPopup/LoginPopup";
import Cart from "./pages/cart/cart";
import Verify from "./pages/Verify/Verify";
import MyOrders from "./pages/MyOrders/MyOrders";

const App = () => {
  const [ShowLogin, setShowLogin] = useState(false);

  return (
    <>
      {ShowLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Nav setShowLogin={setShowLogin}></Nav>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/order" element={<Placeorder></Placeorder>}></Route>
          <Route path="/verify" element={<Verify></Verify>}></Route>
          <Route path="/myorders" element={<MyOrders></MyOrders>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </>
  );
};

export default App;
