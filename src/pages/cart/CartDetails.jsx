import { useCart } from "../../context/cart/useCart";

const CartDetails = () => {
  const { totalPrice, shippingPrice, finalTotal, count } = useCart();

  return (
    <div className="flex-col rounded-2xl bg-[#ddd] px-5 py-2 md:sticky md:top-24 md:flex md:h-fit">
      <div className="mb-8 flex items-center gap-2">
        <strong className="text-2xl"> ملخص الطلب</strong>
        <p className="rounded-2xl bg-[#ccc] p-0.5 opacity-75">{count} منتجات</p>
      </div>

      <div className="mb-3 flex flex-col gap-3">
        <p className="flex justify-between text-xl text-[#78350F]">
          المجموع الفرعي: <span>{totalPrice}</span>{" "}
        </p>
        <p className="flex justify-between text-xl text-[#78350F]">
          سعر الشحن: <span>{shippingPrice}</span>
        </p>
      </div>

      <hr />

      <p className="mt-3 flex justify-between text-2xl">
        <strong>المجموع الكلي:</strong> <strong>{finalTotal}</strong>
      </p>
      <div>
        <button className="bg-brand mt-10 w-full max-w-[85vw] rounded-2xl py-3 text-xl text-white duration-200 hover:scale-103">
          الاستمرار لصفحة الدفع
        </button>
      </div>
    </div>
  );
};

export default CartDetails;
