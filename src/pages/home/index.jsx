import Hero from "./Hero";
import Trending from "./Trending";
import Features from "./Features";

const index = () => {
  return (
    <div className="flex flex-col items-center gap-20">
      <Hero />
      <Trending />
      <Features />
    </div>
  );
};

export default index;
