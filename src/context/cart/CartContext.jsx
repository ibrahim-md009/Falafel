import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import { Toaster } from "sonner";

const CartContext = createContext();

const shippingRates = { cairo: 30, giza: 35, alex: 50 };

const initialState = {
  cartItems: localStorage.getItem("cartproducts")
    ? JSON.parse(localStorage.getItem("cartproducts"))
    : [],

  count: localStorage.getItem("product")
    ? Number(localStorage.getItem("product"))
    : 0,

  city: localStorage.getItem("city") ? localStorage.getItem("city") : "cairo",
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_CART_ITEMS":
      return { ...state, cartItems: action.payload };

    case "SET_COUNT":
      return { ...state, count: action.payload };

    case "SET_CITY":
      return { ...state, city: action.payload };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem("cartproducts", JSON.stringify(state.cartItems));
    localStorage.setItem("product", JSON.stringify(state.count));
    localStorage.setItem("city", state.city);
  });

  const updateQuantity = useCallback(
    (pId, step) => {
      const targetItem = state.cartItems.find((item) => item.id === pId);
      if (targetItem && targetItem.quantity === 1 && step === -1) {
        const filteredCart = state.cartItems.filter((item) => item.id !== pId);
        dispatch({ type: "SET_CART_ITEMS", payload: filteredCart });
      } else {
        const cartUpdate = state.cartItems.map((item) =>
          item.id === pId ? { ...item, quantity: item.quantity + step } : item,
        );
        dispatch({ type: "SET_CART_ITEMS", payload: cartUpdate });
      }
      const cartcount = state.count + step;
      dispatch({ type: "SET_COUNT", payload: cartcount });
    },
    [state.cartItems, state.count],
  );

  const addToCart = useCallback(
    (product) => {
      const isExist = state.cartItems.find((item) => item.id === product.id);
      let updatedCart;
      if (isExist) {
        updatedCart = state.cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
        dispatch({ type: "SET_CART_ITEMS", payload: updatedCart });
      } else {
        const newCart = [...state.cartItems, { ...product, quantity: 1 }];
        dispatch({ type: "SET_CART_ITEMS", payload: newCart });
      }

      const nextCount = state.count + 1;
      dispatch({ type: "SET_COUNT", payload: nextCount });
    },
    [state.cartItems, state.count],
  );

  const resetCart = () => {
    dispatch({ type: "SET_CART_ITEMS", payload: [] });
    dispatch({ type: "SET_COUNT", payload: 0 });
  };

  const totalPrice = useMemo(
    () =>
      state.cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
      ),
    [state.cartItems],
  );

  const shippingPrice = shippingRates[state.city];

  const finalTotal = totalPrice + shippingPrice;

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        setCartItems: (items) =>
          dispatch({ type: "SET_CART_ITEMS", payload: items }),

        count: state.count,
        setCount: (num) => dispatch({ type: "SET_COUNT", payload: num }),

        city: state.city,
        setCity: (city) => {
          dispatch({ type: "SET_CITY", payload: city });
        },

        addToCart,
        updateQuantity,
        resetCart,
        totalPrice,
        shippingPrice,
        finalTotal,
      }}
    >
      {children}
      <Toaster position="top-center" richColors duration={2000} />
    </CartContext.Provider>
  );
};

export { CartContext };
