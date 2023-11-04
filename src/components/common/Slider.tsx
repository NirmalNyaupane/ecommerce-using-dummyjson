import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <Swiper
        pagination={{
          enabled: true,
          clickable: true,
        }}
        className="mySwiper"
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        style={{
          width: "100%",
          height: "100%",
          color: "red",
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide
          style={{
            width: "100%",
          }}
        >
          <Image src={"/next.svg"} alt="" height={100} width={500} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/next.svg"} alt="" height={100} width={500} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
