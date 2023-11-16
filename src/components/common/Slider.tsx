"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Box } from "@mui/material";

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
          borderRadius: "10px",
          color: "red",
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {Array(8)
          .fill(0)
          .map((_, index) => {
            return (
              <SwiperSlide
                key={index}
                style={{
                  width: "100%",
                  objectFit: "cover",
                }}
              >
                <Box
                  width="100%"
                  height={{
                    base: "22vw",
                    md: "25vw",
                  }}
                  position="relative"
                >
                  <Image
                    src={"/banner.jpg"}
                    alt={"title"}
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}
