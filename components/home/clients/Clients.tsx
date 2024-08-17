"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import image1 from "../../../public/images/logo1.jpg";
import image2 from "../../../public/images/logo2.png";
// import image3 from "../../../public/images/logo3.png";
import image4 from "../../../public/images/logo4.png";
import image5 from "../../../public/images/logo5.png";
import image6 from "../../../public/images/logo6.png";
import image7 from "../../../public/images/logo7.png";
import "swiper/swiper-bundle.css";

import "./clients.css";
import Image from "next/image";
const Clients = () => {
  const data = [image1, image2, image4, image5, image6, image7];
  return (
    <div className="client">
      <h2 className="text-[26px] lg:text-4xl text-center font-medium leading-8 pt-12 mb-5">
        "شركاء النجاح"
      </h2>
      <Swiper
        className="border-b border-gray-400"
        spaceBetween={20}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 5,
          },
        }}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
      >
        {data.map((ele) => (
          <SwiperSlide key={ele.height} className="flex flex-col">
            <div>
              <Image width={100} height={100} src={ele} alt="" />
            </div>{" "}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Clients;
