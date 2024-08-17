import "./banner.css";
const Banner = () => {
  return (
    <div className="banner relative">
      <div className="mx-auto text-center lg:text-start absolute  top-[55%] lg:top-[50%] right-[50%] lg:right-0 translate-x-[50%] lg:translate-x-[0%]  text-white bg-[#20456180] px-3 lg:pr-14 lg:pl-20 py-10 w-full lg:w-fit">
        <h2 className="text-[1.3rem] lg:text-[2rem] font-semibold">
          أول منصة أونلاين لبيع الملابس بالجملة
        </h2>
        <p className="text-[1rem] lg:text-[1.5rem] font-light mt-[-13px] lg:mt-[-29px] lg:mb-6">
          <br /> تشكيلة واسعه بجودة عالية وأسعار تنافسية وخدمة عملاء متميزة
          وسياسة إسترجاع سهلة
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
