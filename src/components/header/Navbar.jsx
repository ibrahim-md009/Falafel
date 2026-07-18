import { useCart } from "../../context/cart/useCart";
import { useAuth } from "../../context/auth/useAuth";
import { Link } from "react-router-dom";

function Navbar({ setIsPhone }) {
  const { userLogin, logout } = useAuth();
  const { resetCart } = useCart();

  // const links = [
  //   { title: "الرئيسية", url: "/" },
  //   { title: "المنتجات", url: "/products" },
  //   { title: `🛒: ${count}`, url: "/cart" },
  //   !userLogin
  //     ? { title: "تسجيل الدخول", url: "/auth" }
  //     : { title: "تسجيل خروج", url: "/" },
  // ];

  return (
    <nav>
      <ul className="flex flex-col gap-6 font-medium md:flex-row">
        {/* {links.map((link, index) => {
          const isLogOut = link.title === "تسجيل خروج";
          const isLogIn = link.title === "تسجيل الدخول";

          const linksStyle = `rounded-2xl text-xl p-3 cursor-pointer duration-300 hover:bg-[#cccccc13]  ${isLogIn ? "bg-green-500 hover:bg-green-600" : ""}${isLogOut ? "bg-red-500 hover:bg-red-600" : ""}`;

          return (
            <li
              key={index}
              onClick={() => {
                if (isLogOut) {
                  logout();
                  resetCart();
                }
              }}
            >
              <Link to={link.url} className={`${linksStyle}`}>
                {link.title}
              </Link>
            </li>
          );
        })} */}
        <Link
          to="/"
          className="text-center text-2xl"
          onClick={() => setIsPhone(false)}
        >
          الرئيسية
        </Link>
        <Link
          to="/products"
          className="text-center text-2xl"
          onClick={() => setIsPhone(false)}
        >
          المنتجات
        </Link>
        {userLogin ? (
          <Link
            to="/"
            className="rounded-2xl bg-red-500 p-2 text-center text-2xl hover:bg-red-600"
            onClick={() => {
              setIsPhone(false);
              logout();
              resetCart();
            }}
          >
            تسجيل خروج
          </Link>
        ) : (
          <Link
            to="/auth"
            className="rounded-2xl bg-green-500 p-2 text-center text-xl hover:bg-green-600"
            onClick={() => setIsPhone(false)}
          >
            تسجيل الدخول
          </Link>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
