// import { Link } from "react-router-dom";
import heroIMg from "../../assets/Gemini_Generated_Image_nxlfcjnxlfcjnxlf.png";

const Hero = () => {
  return (
    <div className="mx-4 flex flex-col items-center justify-between gap-4 rounded-lg md:mx-8 md:flex-row">
      <div className="content-img">
        <img src={heroIMg} alt="hero img" className="h-100" />
      </div>

      <div className="flex flex-col items-center gap-5 md:w-[40%]">
        <h1 className="bg-brand p-2 text-2xl font-bold text-white md:text-4xl">
          فلافل احمد محسن
        </h1>
        <p className="text-brand text-center text-[20px] md:text-2xl">
          اشهر محل فلافل في العالم لدينا جميع انواع الفلافل التي يلغ عددها حتى
          يومنا هذا سبوحتشر الف نوع ,, مقلية ومشوية ومغلية وأسعارنا ممتازة جدا
          جدا
        </p>
      </div>
      {/* <Link
        to="/products"
        className="rounded-2xl bg-green-500 px-10 py-2 text-white"
      >
        ابدأ التسوق
      </Link> */}
    </div>
  );
};

export default Hero;
