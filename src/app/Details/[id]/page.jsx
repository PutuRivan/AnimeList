"use client";

import VideoPlayer from "@/Components/Utils/VideoPlayer";
import { getAnime } from "@/lib/ApiLibs";

const Page = async ({ params: { id } }) => {
  const detail = await getAnime(`anime/${id}`);
  return (
    <>
      <header className="mt-5">
        <h1 className="text-center text-2xl text-white">
          {detail.data.title}
        </h1>
      </header>
      <main className="mx-5">
        <div className="mt-5 grid lg:grid-cols-2 border-b border-spacing-10 grid-cols-1 text-white">
          <div className="flex flex-col items-center justify-center">
            <img
              src={detail.data.images.webp.image_url}
              alt={detail.data.images.jpg.image_url}
            />
            <p>{detail.data.rating}</p>
            <p>{detail.data.duration}</p>
            <p>{detail.data.popularity}</p>
          </div>
          <div className="w-full h-full">
            <VideoPlayer youtubeId={detail.data.trailer.youtube_id} />
          </div>
        </div>
        <div className="mt-3">
          <h1 className="text-xl text-white">Sinopsis :</h1>
          <p className="text-sm text-white">{detail.data.synopsis}</p>
        </div>
      </main>
    </>
  );
};

export default Page;
