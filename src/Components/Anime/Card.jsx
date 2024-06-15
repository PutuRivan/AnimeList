"use client"

import Link from 'next/link'
import Skeleton from './Skeleton'
import { Heart, Star } from "@phosphor-icons/react";
import "@/app/Card.css"
const Card = ({ api }) => {
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 mt-5 md:gap-10 lg:gap-5 gap-5 sm:place-items-center">
            {api.data === undefined ? (
                <Skeleton />
            ) :
                api.data?.map((item) => (
                    <Link
                        href={`/Details/${item.mal_id}`}
                        key={item.mal_id}
                        className="wrapper mt-5 lg:mt-0"
                    >
                        <div className="card">
                            <img src={item.images.webp.image_url} alt="" />
                            <div className="info mx-10">
                                <h1 className="text-center text-lg font-bold text-color-white">
                                    {item.title}
                                </h1>
                                <div className="flex justify-between gap-3">
                                    <div className="flex gap-1 items-center justify-center">
                                        <Star size={15} fill="#FFC107" />
                                        <p className="mb-2">{item.score}</p>
                                    </div>
                                    <div className="flex gap-1 items-center justify-center">
                                        <Heart size={15} fill="red" />
                                        <p className="mb-2">{item.favorites}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
            }

        </div>
    )
}

export default Card