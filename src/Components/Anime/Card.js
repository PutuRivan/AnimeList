"use client"
import Link from 'next/link'
import Skeleton from './Skeleton'

const Card = ({ api }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mt-5 md:gap-10 lg:gap-5 gap-5 place-items-center">
            {api.data === undefined  ? (
                <Skeleton />
            ) :
                api.data?.map((item) => (
                    <div
                        key={item.mal_id}>
                        <div className="card card-compact w-[350px] bg-base-300 shadow-xl py-5 h-[500px]">
                            <figure><img src={item.images.webp.image_url} alt={item.images.jpg.image_url} className='' /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{item.title}</h2>
                                <div className="card-actions justify-end items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#915100" viewBox="0 0 256 256">
                                        <path d="M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.38,16.38,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Zm-15.34,5.47-48.7,42a8,8,0,0,0-2.56,7.91l14.88,62.8a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-54.72-33.65a8,8,0,0,0-8.38,0L69.09,215.94c-.15.09-.19.12-.38,0a.37.37,0,0,1-.17-.48l14.88-62.8a8,8,0,0,0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16A8,8,0,0,0,103,91.86l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153,91.86a8,8,0,0,0,6.75,4.92l63.92,5.16c.15,0,.24,0,.33.29S224,102.63,223.84,102.73Z">
                                        </path>
                                    </svg>
                                    <p>: {item.score}</p>
                                </div>
                                <div className="card-actions justify-end items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#cc002e" viewBox="0 0 256 256">
                                        <path d="M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z">
                                        </path>
                                    </svg>
                                    <p>: {item.favorites}</p>
                                </div>
                                <div className="card-actions justify-end">
                                    <Link href={`/Details/${item.mal_id}`} className="btn btn-primary btn-outline">See Detail</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default Card