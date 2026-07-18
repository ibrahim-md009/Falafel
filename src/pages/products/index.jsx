import Product from "./Product";
import Searchbar from "../../components/Searchbar";
import { useData } from "../../context/data/useData";
import { useFilter } from "../../context/filter/useFilter";

const Products = () => {
  const { isLoading, foodData, isError } = useData();
  const { value } = useFilter();

  const filteredProducts =
    foodData?.filter(
      (p) => value === "" || p.name.toLowerCase().includes(value.toLowerCase()),
    ) || [];

  if (isLoading) {
    return (
      <div className="flex min-h-100 w-full items-center justify-center">
        <h2 className="animate-pulse text-3xl font-bold text-white">
          Data Is Preparing... ⏳
        </h2>
      </div>
    );
  }

  if (isError !== null) {
    return (
      <div className="flex w-full items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-7 rounded-2xl bg-red-500 p-5">
          <h2 className="text-2xl font-bold text-white">Error: {isError} ❌</h2>
          <button className="rounded-2xl bg-green-500 p-3 transition duration-300 hover:scale-105">
            إعادة المحاولة 🔄
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="my-8 flex flex-col items-center gap-10 md:mx-8">
      <Searchbar />
      {filteredProducts.length === 0 ? (
        <h2 className="text-brand w-full text-center text-4xl">
          لا يوجد منتج بهذا الاسم
        </h2>
      ) : (
        <div className="flex flex-wrap justify-center gap-5">
          {filteredProducts.map((p, i) => {
            return <Product key={i} product={p} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Products;
