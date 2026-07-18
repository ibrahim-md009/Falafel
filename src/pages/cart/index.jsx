import { Link } from "react-router-dom";
import CartDetails from "./CartDetails";
import CartProducts from "./CartProducts";
import CartOff from "../../components/icons/CartOff";
import { useCart } from "../../context/cart/useCart";

const Cart = () => {
  const { count } = useCart();

  if (count === 0) {
    return (
      <div className="flex flex-col items-center gap-20">
        <p className="text-5xl">السلة فاضية!</p>
        <Link
          to="/products"
          className="rounded-[19px] bg-[#78350F] px-20 py-4 text-center text-2xl text-white shadow-2xl shadow-gray-400 duration-300 hover:scale-103 md:px-30 md:text-4xl"
        >
          خدلك بصة عالمنتجات
        </Link>
        <CartOff className="w-50 md:w-70" />
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center gap-10 p-5 md:grid md:grid-cols-3 md:items-start">
      <div className="mb-10 w-[85vw] md:col-span-2 md:w-full">
        <CartProducts />
      </div>

      <div className="w-[85vw] text-center md:col-span-1 md:min-h-screen md:w-full">
        <CartDetails />
      </div>
    </div>
  );
};

export default Cart;
