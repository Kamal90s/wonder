import Image from "next/image";
import image from "../../../public/images/012.jpg";
import "./review.css";
const Review = () => {
  return (
    <div className="review flex flex-col gap-5 md:gap-0 md:flex-row items-center md:mb-0 overflow-hidden pb-14 border-b border-gray-400">
      {/* <Image src={image} className="" alt="" /> */}
      <div className="image"></div>
      <div className=" md:w-[50%] py-14 md:py-0 px-8 md:px-11 ">
        <div className="title text-center mb-7">
          <h1 className="md:text-center text-start text-4xl font-semibold text-[#323e48]">
            لماذا WONDER ؟
          </h1>
          <p className="text-xl font-medium mt-2 text-start md:text-center text-[#323e48]">
            أبرز المميزات
          </p>
        </div>
        <div className="desc  flex flex-col gap-5">
          <div>
            <h2>خدمة عملاء متميزة</h2>
            <p>
              .نؤمن بأن العميل هو شريكنا في النجاح. لذلك نقدم لك خدمة عملاء علي
              مدار الساعة لتلبية جميع احتياجاتك
            </p>
          </div>
          <div>
            <h2>أسعار تنافسية</h2>
            <p>
              نحن نتعامل مباشرة مع المصانع مما يتيح لنا تقديم أسعار جملة لا تقبل
              المنافسة.
            </p>
          </div>
          <div>
            <h2>أحدث صيحات الموضة</h2>
            <p>
              فريقنا علي دراية بأحدث صيحات الموضة العالمية ونحرص علي تقديم أحدث
              التصميمات التي تلبي رغبات العميل
            </p>
          </div>
          <div>
            <h2>جودة عالية</h2>
            <p>
              نستخدم أجود الخامات لضمان راحة العميل وجودة المنتج علي المدي
              الطويل
            </p>
          </div>
          <div>
            <h2> سياسة إسترجاع سهلة </h2>
            <p>
              نثق بمنتجاتنا لذلك نقدم لك سياسة إسترجاع سهلة في حالة وجود أي عيوب
              في المنتج
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
