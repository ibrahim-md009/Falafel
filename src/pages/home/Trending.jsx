import { useData } from "../../context/data/useData";
import Product from "../products/Product";

const Trending = () => {
  const { foodData } = useData();

  return (
    <div className="mb-20 flex w-[85vw] flex-col items-center gap-5">
      <h1 className="text-5xl">الأكثر مبيعًا</h1>
      <div className="flex w-full flex-wrap justify-center gap-5">
        {foodData.slice(0, 3).map((p, i) => {
          return <Product key={i} product={p} />;
        })}
      </div>
    </div>
  );
};

export default Trending;
