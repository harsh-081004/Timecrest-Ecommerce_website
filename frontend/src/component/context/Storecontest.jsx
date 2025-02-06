import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const Storecontext = createContext(null);

const Storecontextprovider = (props) => {
  const [cartItems, setcartItems] = useState({});
  const url = "http://localhost:4000";
  const [token, setToken] = useState("");
  const [watch_list, setWatchList] = useState([]);
  const addTocart = async (itemId) => {
    if (!cartItems[itemId]) {
      setcartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      await axios.post(
        url + "/api/cart/add",
        { itemId },
        { headers: { token } }
      );
    }
  };
  
  const removeFromCart = async (itemId) => {
    setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (token) {
      await axios.post(
        url + "/api/cart/remove",
        { itemId },
        { headers: { token } }
      );
    }
  };

  const getcartTotalAmmount = () => {
    let TotalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = watch_list.find((product) => product._id === item);
        TotalAmount += itemInfo.price * cartItems[item];
      }
    }
    return TotalAmount;
  };
  const fetchWatchList = async () => {
    const response = await axios.get(url + "/api/watch/list");
    setWatchList(response.data.data);
  };
  const loadCartData = async (token) => {
    const response = await axios.post(
      url + "/api/cart/get",
      {},
      { headers: { token } }
    );
    setcartItems(response.data.cartData);
  };

  useEffect(() => {
    async function loadData() {
      await fetchWatchList();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"));
      }
    }
    loadData();
  }, []);

  const ContextValue = {
    watch_list,
    cartItems,
    setcartItems,
    addTocart,
    removeFromCart,
    getcartTotalAmmount,
    url,
    token,
    setToken,
  };
  return (
    <Storecontext.Provider value={ContextValue}>
      {props.children}
    </Storecontext.Provider>
  );
};
export default Storecontextprovider;
