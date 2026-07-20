import { memo } from "react";
import { useCart } from "../../context/cart/useCart";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const cardsClass =
  "  flex w-80 md:w-80 flex-col rounded-2xl justify-between gap-2 bg-white overflow-hidden p-2 text-center text-white transition-all duration-300 hover:scale-103 shadow-2xl shadow-gray";

const Product = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  return (
    <div className={`items-stretch ${cardsClass}`}>
      <div className="img h-48 w-full overflow-hidden rounded-xl bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full rounded-lg object-cover"
          onError={(e) => {
            e.target.src = "https://placehold.co/600x400?text=No+Image";
          }}
        />
      </div>

      <div className="details flex flex-col gap-1">
        <h1 className="text-black md:text-4xl">{product.name}</h1>
        <span className="text-2xl text-amber-500">{product.price}$</span>
        <span className="text-black">{product.category}</span>
      </div>
      <button
        className="h-6 rounded-2xl border-none bg-amber-400"
        onClick={() => {
          addToCart(product);
          toast.success(`تمت إضافة المنتج للسلة`, {
            action: {
              label: "عرض السلة",
              onClick: () => {
                navigate("/cart");
              },
            },
          });
        }}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default memo(Product);
