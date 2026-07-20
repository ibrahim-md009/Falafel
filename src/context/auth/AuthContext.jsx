import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [userLogin, setUserLogin] = useState(() => {
    const savedLogin = localStorage.getItem("isAuth");
    return savedLogin === "true" ? true : false;
  });

  const login = () => {
    localStorage.setItem("isAuth", "true");
    setUserLogin(true);
    navigate("/");
    return { succes: true, error: null };
  };

  const logout = () => {
    localStorage.setItem("isAuth", "false");
    setUserLogin(false);
  };

  return (
    <AuthContext.Provider value={{ userLogin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
