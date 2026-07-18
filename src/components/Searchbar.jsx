import Input from "./Input";
import { useFilter } from "../context/filter/useFilter";

const Searchbar = () => {
  const { value, setValue } = useFilter();
  return (
    <Input
      type="text"
      placeholder="ابحث عن منتج"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="bg-brand rounded-xl text-white"
    />
  );
};

export default Searchbar;
