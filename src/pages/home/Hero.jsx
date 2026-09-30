// import heroIMg from "../../assets/Gemini_Generated_Image_nxlfcjnxlfcjnxlf-removebg-preview.png";

const Hero = () => {
  return (
    <div className="mx-4 mt-20 flex flex-col items-center justify-center gap-4 rounded-lg md:mx-8 md:flex-row">
      {/* <div className="content-img">
        <img src={heroIMg} alt="hero img" className="h-100" />
      </div> */}

      <div className="flex flex-col items-center gap-5">
        <h1 className="bg-brand p-2 text-2xl font-bold text-white md:text-4xl">
          فــــــــــــــلافل
        </h1>
        <p className="text-brand text-center text-[20px] md:text-2xl">
          نقدم لكم أشهى الفلافل الطازجة المقرمشة
        </p>
      </div>
    </div>
  );
};

export default Hero;
