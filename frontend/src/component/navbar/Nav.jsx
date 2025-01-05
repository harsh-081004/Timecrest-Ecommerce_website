import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/all_product";
import { Link, useNavigate } from "react-router-dom";
import { Storecontext } from "../context/Storecontest";

const Nav = ({ setShowLogin }) => {
  const [category, setCategory] = useState("Home");

  const { getcartTotalAmmount, token, setToken } = useContext(Storecontext);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };
  return (
    <div className="navbar">
      <Link to="/">
        <img className="logo" src={assets.logo} alt="" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setCategory("home")}
          className={category === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#Explorebrand"
          onClick={() => setCategory("Collection")}
          className={category === "Collection" ? "active" : ""}
        >
          Collection
        </a>
        <a
          href="#review"
          onClick={() => setCategory("Review")}
          className={category === "Review" ? "active" : ""}
        >
          Review
        </a>
        <a
          href="#Footer"
          onClick={() => setCategory("About-us")}
          className={category === "About-us" ? "active" : ""}
        >
          About-us
        </a>
      </ul>
      <div className="navbar-right">
        {/* <img className="searchicon" src={assets.search} alt="" /> */}
        <div className="nav-basket-icon">
          <Link to="/cart">
            <img src={assets.shoppingcart} alt="" />
          </Link>
          <div className={getcartTotalAmmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        ) : (
          <div className="navbar-profile">
            <img className="profile" src={assets.profile} alt="" />
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate("/myorders")} className="bag">
                <img src={assets.bag} alt="" />
                <p>Orders</p>
              </li>
              <hr />
              <li className="logout" onClick={logout}>
                <img src={assets.logout} alt="" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
