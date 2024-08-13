"use client";

import Card from "@/Components/Anime/Cards";
import HeaderPagination from "@/Components/Utils/HeaderPagination";
import Pagination from "@/Components/Utils/Pagination";
import { getAnime } from "@/lib/ApiLibs";
import React, { useEffect, useState } from "react";

const page = async () => {
  const [page, setPage] = useState(1);
  const [Anime, setAnime] = useState([]);
  const fetchData = async () => {
    const populerAnime = await getAnime("anime", `page=${page}&&limit=24`);
    setAnime(populerAnime);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <HeaderPagination title={`Populer Anime #${page}`} />
      <Card api={Anime} />
      <Pagination
        page={page}
        lastPage={Anime.pagination?.last_visible_page}
        setPage={setPage}
      />
    </>
  );
};

export default page;
