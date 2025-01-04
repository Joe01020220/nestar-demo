import { Stack, Box } from "@mui/material";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import PopularPropertyCard from "./PopularPropertyCard";
import Link from "next/link";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";

const PopularProperties = () => {
  const [popularProperties, setPopularProperties] = useState<number[]>([
         1,2,3,4,5,6,7,
     ]);

  return (
    <Stack className={"popular-properties"}>
      <Stack className={"container"}>
        <Stack className={"info-box"}>
          <Box className={"left"}>
            <span>Popular Properties</span>
            <p>Popularity is based on views</p>
          </Box>
          <Box className={"right"}>
            <div className={"more-box"}>
              <Link href={"/property"}>
                <span>See All Categories</span>
              </Link>
              <img src="/img/icons/rightup.svg" alt="" />
            </div>
          </Box>
        </Stack>
        <Stack className={"card-box"}>
          <Swiper
            className={"popular-property-swiper"}
            slidesPerView={"auto"}
            spaceBetween={25}
            navigation={{
              nextEl: ".swiper-popular-next",
              prevEl: ".swiper-popular-prev",
            }}
            pagination={{
              el: ".swiper-popular-pagination",
            }}
          >
            {popularProperties.map((property, index) => {
              return (
                <SwiperSlide key={index} className={"popular-property-slide"}>
                  <PopularPropertyCard />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Stack>
        <div className={"pagination-box"}>
          <WestIcon className={"swiper-trend-prev"} />
          <div className={"swiper-trend-pagination"}></div>
          <EastIcon className={"swiper-trend-next"} />
        </div>
      </Stack>
    </Stack>
  );
};



export default PopularProperties;