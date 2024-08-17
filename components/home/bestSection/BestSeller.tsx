"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import image1 from "../../../public/images/06.jpg";
import image2 from "../../../public/images/018.jpg";
import image3 from "../../../public/images/03.jpg";
import image4 from "../../../public/images/02.jpg";
import image5 from "../../../public/images/011.jpg";
import image6 from "../../../public/images/012.jpg";
import image7 from "../../../public/images/013.jpg";
import image8 from "../../../public/images/014.jpg";
import image9 from "../../../public/images/015.jpg";
import image10 from "../../../public/images/016.jpg";
import "swiper/swiper-bundle.css";
import "./bestSeller.css";
import Image from "next/image";
import { TbMathEqualGreater } from "react-icons/tb";

const BestSeller = () => {
  const data = [
    {
      title: "الموديل",
      image: image1,
      price: "EGP 765",
      pair: "pairs 100",
    },

    {
      title: "الموديل",
      image: image3,
      price: "EGP 415",
      pair: "pairs 100",
    },
    {
      title: "الموديل",
      image: image4,
      price: "EGP 720",
      pair: "pairs 100",
    },
    {
      title: "الموديل",
      image: image5,
      price: "EGP 660",
      pair: "pairs 100",
    },
    {
      title: "الموديل",
      image: image6,
      price: "EGP 400",
      pair: "pairs 100",
    },
    {
      title: "الموديل",
      image: image9,
      price: "EGP 470",
      pair: "pairs 100",
    },
    {
      title: "الموديل",
      image: image7,
      price: "EGP 499",
      pair: "pairs 100",
    },
    {
      title: "الموديل",
      image: image8,
      price: "EGP 635",
      pair: "pairs 100",
    },
    {
      title: "الموديل",
      image: image10,
      price: "EGP 710",
      pair: "pairs 100",
    },
  ];
  return (
    <div className="best-seller mt-20 lg:mt-8 lg:px-10">
      <div className="title text-center ">
        <h2 className="text-[26px] lg:text-4xl font-medium leading-8 pt-12 mb-5">
          منتجاتنا الأكثر مبيعات
        </h2>
      </div>
      <Swiper
        spaceBetween={20}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
          },
        }}
        loop={true}
        centeredSlides
        pagination={true}
        // modules={[Navigation]}
        modules={[Pagination]}
      >
        {data.map((ele) => (
          <SwiperSlide key={ele.title} className="flex flex-col relative">
            <small className="bg-white px-4 py-2 absolute bottom-14 h-fit lg:top-2 right-2">
              جديد!
            </small>
            <Image width={301} height={459} src={ele.image} alt="" />
            <div className="docs px-2 flex justify-between w-full mt-2">
              <h3 className=" font-bold text-xl">{ele.title}</h3>
              <div className=" font-bold text-xl flex flex-col justify-center">
                <p>{ele.price}</p>
              </div>
            </div>
            <div className="px-2 flex justify-between w-full mt-1 mb-6">
              <p className="gap-[2px] text-[12px] font-light w-[150px]">
                تصميم عصري وأنيق
              </p>
              <div
                // dir="ltr"
                // lang="en"
                className="flex items-center w-full justify-end pl-1 gap-[2px] text-sm font-light"
              >
                <p>100 قطعة</p>
                <TbMathEqualGreater className=" text-gray-500 font-light" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BestSeller;
