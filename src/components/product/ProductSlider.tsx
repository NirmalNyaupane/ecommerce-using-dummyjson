import React, { useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import {
  FreeMode,
  Navigation,
  Thumbs,
  Pagination,
  Autoplay,
} from "swiper/modules";

export default function ProductSlider({ image }: { image: string[] }) {
  return (
    <>
      <Swiper
        style={{
          width: "100%",
          height: "300px",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={10}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Navigation, Thumbs, Pagination, Autoplay]}
      >
        {image.map((singleImage) => {
          return (
            <SwiperSlide key={singleImage}>
              <Image
                src={singleImage}
                alt="bannerimage"
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
