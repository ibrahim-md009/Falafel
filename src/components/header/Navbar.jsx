import { useCart } from "../../context/cart/useCart";
import { useAuth } from "../../context/auth/useAuth";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ setIsMenuOpen }) {
  const { userLogin, logout } = useAuth();
  const { resetCart } = useCart();
  const navigate = useNavigate();

  return (
    <nav>
      <ul className="flex flex-col gap-6 font-medium md:flex-row">
        <Link
          to="/"
          className="text-center text-2xl"
          onClick={() => setIsMenuOpen(false)}
        >
          الرئيسية
        </Link>
        <Link
          to="/products"
          className="text-center text-2xl"
          onClick={() => setIsMenuOpen(false)}
        >
          المنتجات
        </Link>
        {userLogin ? (
          <button
            className="rounded-2xl bg-red-500 p-2 text-center text-2xl hover:bg-red-600"
            onClick={() => {
              navigate("/");
              logout();
              resetCart();
              setIsMenuOpen(false);
            }}
          >
            تسجيل خروج
          </button>
        ) : (
          <button
            className="rounded-2xl bg-green-500 p-2 text-center text-xl hover:bg-green-600"
            onClick={() => {
              navigate("/auth");
              setIsMenuOpen(false);
            }}
          >
            تسجيل الدخول
          </button>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
