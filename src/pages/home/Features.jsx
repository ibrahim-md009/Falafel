import Delivery from "../../components/icons/delivery";
import Dollar from "../../components/icons/Dollar";
import Quality from "../../components/icons/Quality";

const featureClass =
  "bg-brand b flex w-60 md:w-80 flex-col items-center gap-10 rounded-2xl py-4 text-white shadow-2xl shadow-gray-200";

const iconClass = "h-40 w-50";

const textClass = "mb-5 text-4xl";

const Features = () => {
  return (
    <div className="mx-8 mb-20 flex flex-col items-center gap-5">
      <h1 className="text-5xl">مميزاتنا</h1>

      <div className="flex flex-wrap justify-center gap-5">
        <div className={featureClass}>
          <Delivery className={iconClass} />
          <p className={textClass}>توصيل سريع</p>
        </div>
        <div className={featureClass}>
          <Dollar className={iconClass} />
          <p className={textClass}>أسعار مناسبة</p>
        </div>
        <div className={featureClass}>
          <Quality className={iconClass} />
          <p className={textClass}>جودة عالية</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
