import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export const ShopContext = createContext(null);

const ShopContextProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("token") || null);
  const [data, setData] = useState([]); // all products
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : {};
  });

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();
  const delivery_fee = 10;

  // ------------------- Fetch products -------------------
  const fetchData = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/list`);
      if (response.data.success) {
        setData(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  // ------------------- Load cart from backend -------------------
  const loadCartFromBackend = async () => {
    if (!token || data.length === 0) return;

    try {
      const res = await axios.post(
        `${backendUrl}/api/cart/get`,
        {},
        { headers: { token } }
      );

      if (res.data.success) {
        const backendCart = res.data.cartData;
        const formattedCart = {};

        for (const id in backendCart) {
          const product = data.find((p) => p._id === id);
          if (product) {
            formattedCart[id] = {
              product,
              quantity: backendCart[id].quantity,
            };
          }
        }

        setCartItems(formattedCart);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // ------------------- Cart operations -------------------
  const addToCart = async (product) => {
    if (!product || !product._id) return;

    setCartItems((prev) => {
      const existing = prev[product._id];
      return {
        ...prev,
        [product._id]: {
          product,
          quantity: existing ? existing.quantity + 1 : 1,
        },
      };
    });

    if (token) {
      try {
        await axios.post(
          `${backendUrl}/api/cart/add`,
          { itemId: product._id },
          { headers: { token } }
        );
        
      } catch (err) {
        console.log(err);
        toast.error(err.message);
      }
    }
  };

  const increaseQuantity = async (product) => {
    if (!product || !product._id) return;

    setCartItems((prev) => {
      if (!prev[product._id]) return prev;
      return {
        ...prev,
        [product._id]: {
          ...prev[product._id],
          quantity: prev[product._id].quantity + 1,
        },
      };
    });

    if (token) {
      try {
        await axios.post(
          `${backendUrl}/api/cart/increase`,
          { itemId: product._id },
          { headers: { token } }
        );
      } catch (err) {
        console.log(err);
      }
    }
  };

  const decreaseQuantity = async (product) => {
    if (!product || !product._id) return;

    setCartItems((prev) => {
      if (!prev[product._id]) return prev;

      const copy = { ...prev };
      if (copy[product._id].quantity > 1) copy[product._id].quantity--;
      else delete copy[product._id];

      return copy;
    });

    if (token) {
      try {
        await axios.post(
          `${backendUrl}/api/cart/decrease`,
          { itemId: product._id },
          { headers: { token } }
        );
      } catch (err) {
        console.log(err);
      }
    }
  };

  const removeFromCart = async (product) => {
    if (!product || !product._id) return;

    setCartItems((prev) => {
      const copy = { ...prev };
      delete copy[product._id];
      return copy;
    });

    if (token) {
      try {
        await axios.post(
          `${backendUrl}/api/cart/decrease`,
          { itemId: product._id, quantity: 0 }, // backend interprets 0 as remove
          { headers: { token } }
        );
      } catch (err) {
        console.log(err);
      }
    }
  };

  const getCartCount = () => {
    let total = 0;
    for (const key in cartItems) total += cartItems[key].quantity;
    return total;
  };

  const getCartTotalAmount = () => {
    let total = 0;
    for (const key in cartItems)
      total += cartItems[key].quantity * cartItems[key].product.price;
    return total;
  };

  // ------------------- useEffect hooks -------------------

  // fetch products on mount
  useEffect(() => {
    fetchData();
  }, []);

  // load cart when data or token changes
  useEffect(() => {
    loadCartFromBackend();
  }, [token, data]);

  // save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // load token from localStorage if missing
  useEffect(() => {
    if (!token && localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, [token]);

  // ------------------- Context value -------------------
  const value = {
    token,
    setToken,
    backendUrl,
    navigate,
    addToCart,
    cartItems,
    setCartItems,
    getCartCount,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    delivery_fee,
    getCartTotalAmount,
    fetchData,
    data,
    setData,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
