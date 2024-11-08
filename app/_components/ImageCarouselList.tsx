"use client";
import Image from "next/image";
import React from "react";

import { carouselImages } from "@/lib/carouselImages";

import {
  CarouselMainContainer,
  CarouselThumbsContainer,
  SliderMainItem,
  SliderThumbItem,
  Carousel,
} from "./Carousel";

const ImageCarouselList = () => {
  return (
    <Carousel className="z-20 mx-auto max-w-7xl">
      <div className="relative basis-3/4">
        <CarouselMainContainer className="h-60 md:h-[80rem]">
          {carouselImages.map((image, index) => (
            <SliderMainItem
              key={index}
              className="relative flex items-center justify-center rounded-md border border-muted"
            >
              <Image
                src={image}
                alt="Carousel Image"
                fill
                quality={100}
                sizes="80vw"
                className="object-cover object-center"
              />
            </SliderMainItem>
          ))}
        </CarouselMainContainer>
      </div>
      <CarouselThumbsContainer className="z-10 grow sm:h-32 md:h-80">
        {carouselImages.map((image, index) => (
          <SliderThumbItem
            key={index}
            index={index}
            className="h-full rounded-md bg-transparent"
          >
            <span className="relative flex h-20 min-h-full w-full flex-1 cursor-pointer items-center justify-center rounded-md border border-muted bg-background sm:h-40 md:h-60">
              <Image
                src={image}
                placeholder="blur"
                alt="Carousel Image"
                fill
                quality={100}
                sizes="80vw"
                className="object-cover object-center"
              />
            </span>
          </SliderThumbItem>
        ))}
      </CarouselThumbsContainer>
    </Carousel>
  );
};

export default ImageCarouselList;
