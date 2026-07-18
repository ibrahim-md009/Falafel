import { CartProvider } from "./context/cart/CartContext";
import { DataProvider } from "./context/data/DataContext";
import { FilterProvider } from "./context/filter/FilterContext";
import { Routes, Route } from "react-router-dom";
import { useScrollToTop } from "./hooks/useScrollToTop";

import Form from "./pages/auth";
import Header from "./components/header";
import Home from "./pages/home";
import Products from "./pages/products";
import Cart from "./pages/cart";
import Footer from "./components/Footer";

function App() {
  useScrollToTop();
  return (
    <DataProvider>
      <FilterProvider>
        <CartProvider>
          <div className="flex min-h-screen max-w-full flex-col">
            <Header />
            <div className="grow pt-25">
              <Routes>
                <Route path="/auth" element={<Form />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </CartProvider>
      </FilterProvider>
    </DataProvider>
  );
}

export default App;
