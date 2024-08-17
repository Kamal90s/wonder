import ReadButton from "../global/ReadButton";
import "./banner.css";
const Banner = () => {
  return (
    <div className="banner relative">
      <div className="mx-auto text-center absolute w-full top-[60%] lg:top-[50%] right-[50%] translate-x-[50%] text-white ">
        <h2 className="text-[1.3rem] lg:text-[2rem] font-semibold">
          أول منصة أونلاين لبيع الملابس بالجملة
        </h2>
        <p className="text-[0.8rem] lg:text-[1.5rem] font-light mt-2">
          تشكيلة واسعه بجودة عالية وأسعار تنافسية
          <br />
          وخدمة عملاء متميزة وسياسة إسترجاع سهلة
        </p>
        <button
          className={`banner-button text-[18px] lg:right-0 lg:bottom-[-260px] lg:text-xl  px-4 font-semibold bg-[#f8f8f8] text-black mt-3 z-30`}
        >
          سجل الآن وابدأ التسوق
        </button>
      </div>
    </div>
  );
};

export default Banner;
