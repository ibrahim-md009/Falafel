import { useEffect, useReducer, createContext, useRef } from "react";
import axios from "axios";

const DataContext = createContext();

const initialState = {
  isLoading: true,
  foodData: [],
  isError: null,
};

const dataReducer = (state, action) => {
  switch (action.type) {
    case "SET_IS_LOADING":
      return { ...state, isLoading: true, isError: null };

    case "SET_FOOD_DATA":
      return {
        ...state,
        isLoading: false,
        foodData: action.payload,
        isError: null,
      };

    case "SET_IS_ERROR":
      return {
        ...state,
        isLoading: false,
        foodData: [],
        isError: action.payload,
      };
  }
};

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  const shouldFetch = useRef(true);

  useEffect(() => {
    if (shouldFetch.current) {
      shouldFetch.current = false;

      const getFood = async () => {
        try {
          dispatch({ type: "SET_IS_LOADING" });
          const res = await axios.get(
            "https://raw.githubusercontent.com/ibrahim-md009/Food-API/refs/heads/main/products.json",
          );

          const food = res.data;
          dispatch({ type: "SET_FOOD_DATA", payload: food });
        } catch (err) {
          dispatch({ type: "SET_IS_ERROR", payload: err.message });
        }
      };
      getFood();
    }
  }, []);

  return (
    <DataContext.Provider value={{ ...state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext };
