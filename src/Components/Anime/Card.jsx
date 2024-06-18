"use client"

import { Heart, Star } from '@phosphor-icons/react'
import Link from 'next/link'
const Card = ({ api }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 place-items-center mt-5">
            {api.data?.map((item) => (
                <div
                    key={item.mal_id}
                    href={`/Details/${item.mal_id}`}
                    className="card card-compact w-96  shadow-xl">
                    <figure><img src={item.images.webp.image_url} alt={item.images.jpg.image_url} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{item.title}</h2>
                        {item.score ?
                            <div className="flex flex-col gap-3">
                                <span className="flex gap-1">
                                    <Star size={24} fill="#FFC107" />
                                    {item.score}
                                </span>
                                <span className="flex gap-1">
                                    <Heart size={24} fill="red" />
                                    <p className="mb-2">{item.favorites}</p>
                                </span>

                            </div> : null
                        }
                        <div className="card-actions justify-end">
                            <Link href={`/Details/${item.mal_id}`} className="btn btn-primary btn-outline">See More</Link>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Card