"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slidesData = [
  {
    name: "Nigel Featherstone",
    company: "Director, Benjamins Estate Agents",
    text: "Very impressed with the broadband availability tool provided by BroadbandUK. This is now an essential and very useful service for assisting in the selling and renting processes of all of our properties. The system integrated seamlessly with our website and is a no-brainer for our business.",
  },
  {
    name: "Nigel Featherstone",
    company: "Director, Benjamins Estate Agents",
    text: "Very impressed with the broadband availability tool provided by BroadbandUK. This is now an essential and very useful service for assisting in the selling and renting processes of all of our properties. The system integrated seamlessly with our website and is a no-brainer for our business.",
  },
  {
    name: "Nigel Featherstone",
    company: "Director, Benjamins Estate Agents",
    text: "Very impressed with the broadband availability tool provided by BroadbandUK. This is now an essential and very useful service for assisting in the selling and renting processes of all of our properties. The system integrated seamlessly with our website and is a no-brainer for our business.",
  },
];

export default function TrustedBySwiper() {
  return (
    <Swiper
      modules={[Pagination, Scrollbar]}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      loop={true}
      slidesPerView={1}
      spaceBetween={30}
      className="mySwiper max-w-sm w-full sm:max-w-md md:max-w-lg lg:max-w-2xl"
    >
      {slidesData.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="trusted-by-slide px-5 py-8 lg:px-14 rounded-[28px] max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl">
            <div className="trusted-by-slide__content">
              <h3 className="text-corporate-black font-bold text-xl">
                {slide.name}
              </h3>
              <p className="mt-2 text-corporate-dark-grey text-xl">
                {slide.company}
              </p>
              <p className="mt-5 lg:mt-10 text-xl text-corporate-black">
                &quot;{slide.text}&quot;
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
