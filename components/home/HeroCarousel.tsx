import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import hero1 from "@/public/images/hero1.jpg";
import hero2 from "@/public/images/hero2.jpg";
import hero3 from "@/public/images/hero3.jpg";
import hero4 from "@/public/images/hero4.jpg";
import { Card } from "../ui/card";
import Image from "next/image";
const carouselImages = [hero1, hero2, hero3, hero4];
const HeroCarousel = () => {
  console.log("tes", carouselImages);
  return (
    <div className="hidden lg:block">
      <Carousel opts={{ loop: true }}>
        <CarouselContent>
          {carouselImages.map((image, index) => (
            <CarouselItem key={index}>
              <Card className="p-2">
                <Image
                  src={image}
                  alt="hero"
                  className="w-full h-[24rem] rounded-md object-cover"
                />
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
