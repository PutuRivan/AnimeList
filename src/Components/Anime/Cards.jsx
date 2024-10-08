"use client"

import { Heart, Star } from '@phosphor-icons/react'
import Link from 'next/link'
const Cards = ({ api }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 place-items-center mt-5">
            {api.data?.map((item) => (
                <div
                    key={item.mal_id}
                    href={`/Details/${item.mal_id}`}
                    className="card card-compact h-full w-96 bg-base-300 shadow-2xl">
                    <figure className='w-full'><img src={item.images.webp.image_url} alt={item.images.jpg.image_url} /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-white">{item.title}</h2>
                        {item.score ?
                            <div className="flex flex-col gap-3">
                                <span className="flex gap-1">
                                    <Star size={24} fill="#FFC107" />
                                    <p className='text-white'>{item.score}</p>
                                </span>
                                <span className="flex gap-1">
                                    <Heart size={24} fill="red" />
                                    <p className='text-white'>{item.favorites}</p>
                                </span>

                            </div> : null
                        }
                        <div className="card-actions justify-end">
                            <Link href={`/Details/${item.mal_id}`} className="btn btn-primary">See More</Link>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Cards