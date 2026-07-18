import { createContext, useState } from "react";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [value, setValue] = useState("");

  return (
    <FilterContext.Provider value={{ value, setValue }}>
      {children}
    </FilterContext.Provider>
  );
};

export { FilterContext };
