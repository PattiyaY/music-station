import Image from "next/image";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { guide } from "@/data/guide.const";
import { Ewert, Chewy } from "next/font/google";

const ewert = Ewert({ subsets: ["latin"], weight: "400" });
const chewy = Chewy({ subsets: ["latin"], weight: "400" });

export default function Introduction() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="container w-full">
          <div className="flex flex-col items-center justify-center min-h-screen gap-20">
            <h1
              className={`font-bold text-5xl text-[#113946] ${ewert.className}`}
            >
              Getting Started
            </h1>
            <Carousel className="w-full max-w-xs">
              <CarouselContent className="h-full">
                {Object.entries(guide).map(([key, item]) => (
                  <CarouselItem key={key} className="h-[500px]">
                    <div className="p-1 h-full">
                      <Card className="h-full">
                        <CardContent className="flex flex-col h-full items-center justify-center p-6 text-center space-y-4">
                          <div className="flex flex-row gap-2 items-center justify-center">
                            {item.image?.map((img, i) => (
                              <div
                                key={i}
                                className="w-full flex justify-center"
                              >
                                <Image
                                  src={img}
                                  alt={`${item.title} - ${i}`}
                                  width={200}
                                  height={200}
                                  className="object-contain"
                                />
                              </div>
                            ))}
                          </div>

                          <span
                            className={`text-2xl font-bold text-[#113946] ${chewy.className}`}
                          >
                            {item.title}
                          </span>
                          {item.subtitle && (
                            <span
                              className={`text-lg font-bold text-[#113946] ${chewy.className}`}
                            >
                              {item.subtitle}
                            </span>
                          )}
                          <p
                            className={`text-sm font-medium text-[#6D2932] ${chewy.className}`}
                          >
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}
