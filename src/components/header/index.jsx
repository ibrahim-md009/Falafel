import { useState } from "react";
import { useCart } from "../../context/cart/useCart";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const headerClass =
  "fixed t-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 text-white shadow-md bg-[#78350F]";
const logoClass =
  "logo text-xl md:text-3xl font-black tracking-wider text-white";

function Header() {
  const [isPhone, setIsPhone] = useState(false);

  const { city, setCity, count } = useCart();

  return (
    <div className={`${headerClass} `}>
      <div className="flex items-center gap-x-4">
        <Link to="/" className={logoClass}>
          فــــــــلافل
        </Link>

        <select
          value={city}
          className="rounded-2xl py-3 text-xl outline-none hover:bg-[#cccccc13] md:text-3xl"
          onChange={(e) => setCity(e.target.value)}
        >
          <optgroup className="text-xl text-black outline-none">
            <option value="cairo">القاهرة</option>
            <option value="giza">الجيزة</option>
            <option value="alex">الاسكندرية</option>
          </optgroup>
        </select>
      </div>
      <div className="hidden md:flex">
        <Navbar />
      </div>
      <Link to="/cart" className="text-2xl">
        🛒:{count}
      </Link>
      <button
        className="text-3xl md:hidden"
        onClick={() => {
          isPhone ? setIsPhone(false) : setIsPhone(true);
        }}
      >
        ☰
      </button>

      {isPhone && (
        <div className="bg-brand fixed top-20 left-0 z-50 h-screen w-50 p-5 md:hidden">
          <Navbar setIsPhone={setIsPhone} />
        </div>
      )}
    </div>
  );
}

export default Header;
