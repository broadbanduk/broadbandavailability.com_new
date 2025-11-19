"use client";

import Link from "next/link";
import Image from "next/image";
import {
  brockTaylor,
  londonEquity,
  thomasSamuel,
  motisEstates,
} from "@/static/images";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function TrustedByAgents() {
  const agents = [
    {
      name: "Brock Taylor",
      url: "https://www.brocktaylor.co.uk",
      image: brockTaylor,
    },
    {
      name: "Thomas Samuel",
      url: "https://www.thomassamuel.co.uk",
      image: thomasSamuel,
    },
    {
      name: "Equity London",
      url: "https://www.equityldn.co.uk/",
      image: londonEquity,
    },
    {
      name: "Motis Estates",
      url: "https://www.motis-estates.com/",
      image: motisEstates,
    },
  ];

  return (
    <section className="px-5 pt-16 lg:pt-20 xl:pt-[120px] space-y-8 lg:space-y-16">
      <h3 className="text-[52px] leading-[1] xl:text-6xl max-w-4xl mx-auto font-national uppercase text-center tracking-wide text-corporate-black font-bold">
        How Agents Integrate Broadband Information in Listings
      </h3>
      <div className="container mx-auto agents-swiper">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          pagination={{ clickable: true }}
          slidesPerView={1}
          centerInsufficientSlides
          breakpoints={{
            1024: { slidesPerView: 2 },
          }}
        >
          {agents.map((agent, index) => (
            <SwiperSlide key={index}>
              <Link
                className="bg-light-gray-bg p-5 lg:p-10 rounded-[28px] space-y-5 block"
                target="_blank"
                href={agent.url}
              >
                <h4 className="block text-corporate-black font-bold font-lato text-xl">
                  {agent.name}
                </h4>

                <span className="text-corporate-blue text-sm lg:text-lg underline block">
                  {agent.url}
                </span>

                <Image
                  src={agent.image}
                  alt={agent.name}
                  className="mx-auto block !max-w-full object-center object-cover max-h-[300px] rounded-xl"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
