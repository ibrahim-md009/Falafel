import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [userLogin, setLogin] = useState(() => {
    const savedLogin = localStorage.getItem("isAuth");
    return savedLogin === "true" ? true : false;
  });

  const login = () => {
    localStorage.setItem("isAuth", "true");
    setLogin(true);
    navigate("/");
    return { succes: true, error: null };
  };

  const logout = () => {
    localStorage.setItem("isAuth", "false");
    setLogin(false);
  };

  return (
    <AuthContext.Provider value={{ userLogin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
