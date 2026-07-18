import { useCart } from "../../context/cart/useCart";
import Button from "../../components/Button";
import Trash from "../../components/icons/Trash";
const cardClass =
  "flex h-75  max-w-[70vw] shrink-0 snap-start flex-col items-center justify-center gap-2 rounded-xl border-[#78350F] bg-white px-4 py-1 text-black duration-300 hover:scale-103 md:w-70 md:h-90";

const CartProducts = () => {
  const { cartItems, updateQuantity, resetCart } = useCart();

  return (
    <div className="rounded-2xl bg-[#ddd] p-4">
      <button
        onClick={resetCart}
        className="h-fit w-fit cursor-pointer rounded-2xl bg-red-500 p-2 text-white duration-300 hover:scale-103"
      >
        <Trash />
      </button>

      <div className="flex snap-x snap-mandatory scrollbar-none gap-3 overflow-x-auto p-5 md:min-h-screen md:flex-wrap md:justify-center">
        {cartItems.map((prod, i) => {
          return (
            <div className={cardClass} key={i}>
              {/* <div
              className="flex flex-col items-center gap-2 rounded-2xl bg-white p-2"
              key={i}
              > */}
              <div className="product-img h-50 w-full overflow-hidden rounded-xl">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="h-full w-full rounded-lg object-cover"
                  onError={(e) => {
                    e.target.src = "https://placehold.co/600x400?text=No+Image";
                  }}
                />
              </div>

              <div className="product-details flex flex-col items-center">
                <p>{prod.name}</p>
                <p>{prod.price}$</p>
              </div>

              <div className="buttons flex items-center gap-2">
                <Button
                  text="+"
                  className="rounded-lg bg-green-500 p-3"
                  onClick={() => updateQuantity(prod.id, 1)}
                />
                <p>{prod.quantity}</p>
                <Button
                  text="-"
                  className="rounded-lg bg-green-500 p-3"
                  onClick={() => updateQuantity(prod.id, -1)}
                />
              </div>

              <p> Total: {prod.price * prod.quantity}$ </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CartProducts;
