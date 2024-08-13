"use client";

import * as React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
  
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../ui/card";
import { Heart, Star } from "@phosphor-icons/react";
import Link from "next/link";
const Cards = ({ api }) => {
  return (
    <Carousel className="w-full pl-10">
      <CarouselContent className="-ml-1">
        {api.data?.map((item) => (
          <CarouselItem
            key={item.mal_id}
            className="pl-1 md:basis-1/2 lg:basis-1/3"
          >
            <Card className="card card-compact h-full w-full p-2 bg-base-300">
              <CardHeader className="">
                <figure className="w-full">
                  <img
                    src={item.images.webp.image_url}
                    alt={item.images.jpg.image_url}
                    className="h-80"
                  />
                </figure>
              </CardHeader>
              <CardTitle className="text-accent text-center pt-5 text-xl">
                {item.title}
              </CardTitle>
              <CardContent>
                {item.score ? (
                  <div className="flex flex-col gap-3 text-base-300">
                    <span className="flex gap-1">
                      <Star size={24} fill="#FFC107" />
                      <p className="text-white">{item.score}</p>
                    </span>
                    <span className="flex gap-1">
                      <Heart size={24} fill="red" />
                      <p className=" text-white">{item.favorites}</p>
                    </span>
                  </div>
                ) : null}
              </CardContent>
              <CardFooter className="card-actions">
                <Link
                  href={`/Details/${item.mal_id}`}
                  className="btn btn-primary"
                >
                  See More
                </Link>
              </CardFooter>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-base-300 text-white hover:text-blue-500" />
      <CarouselNext className="bg-base-300 text-white hover:text-blue-500"/>
    </Carousel>
  );
};

export default Cards;
