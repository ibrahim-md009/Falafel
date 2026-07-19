import { useState } from "react";
import { useCart } from "../../context/cart/useCart";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const headerClass =
  "fixed t-0 left-0 w-full z-50 flex items-center justify-between px-2 md:px-5 py-4 text-white shadow-md bg-[#78350F]";
const logoClass =
  "logo text-[22px] md:text-2xl font-black tracking-wider text-white";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { city, setCity, count } = useCart();

  return (
    <div className={`${headerClass} `}>
      <div className="flex items-center gap-x-2 md:gap-x-4">
        <Link to="/" className={logoClass}>
          فــــــــلافل
        </Link>

        <div className="relative pl-2 text-xl text-white after:absolute after:bottom-[70%] after:left-5 after:h-0.5 after:w-1 after:content-['▼']">
          <select
            value={city}
            className="appearance-none rounded-2xl py-3 text-lg outline-none hover:bg-[#cccccc13] md:text-xl"
            onChange={(e) => setCity(e.target.value)}
          >
            <optgroup className="text-xl text-black outline-none">
              <option value="cairo">القاهرة</option>
              <option value="giza">الجيزة</option>
              <option value="alex">الاسكندرية</option>
            </optgroup>
          </select>
        </div>
      </div>

      <div className="hidden md:flex md:gap-5">
        <Link to="/cart" className="text-xl md:text-2xl">
          🛒:{count}
        </Link>
        <Navbar />
      </div>

      <div className="flex gap-5 md:hidden">
        <Link to="/cart" className="text-xl md:hidden md:text-2xl">
          🛒:{count}
        </Link>
        <button
          className="text-2xl md:hidden md:text-3xl"
          onClick={() => {
            isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
          }}
        >
          ☰
        </button>
      </div>

      {isMenuOpen && (
        <div className="bg-brand fixed top-20 left-0 z-50 h-screen w-50 p-5 md:hidden">
          <Navbar setIsMenuOpen={setIsMenuOpen} />
        </div>
      )}
    </div>
  );
}

export default Header;
