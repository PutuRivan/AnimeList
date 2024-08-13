"use client";

import Cards from "@/Components/Anime/Cards";
import HeaderPagination from "@/Components/Utils/HeaderPagination";
import Pagination from "@/Components/Utils/Pagination";
import { getAnime } from "@/lib/ApiLibs";
import React, { useEffect, useState } from "react";

const page = async () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);
  const fetchData = async () => {
    const populerAnime = await getAnime("top/anime", `page=${page}&&limit=24`);
    setTopAnime(populerAnime);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <HeaderPagination title={`Populer Anime #${page}`} />
      <Cards api={topAnime} />
      <Pagination
        page={page}
        lastPage={topAnime.pagination?.last_visible_page}
        setPage={setPage}
      />
    </>
  );
};

export default page;
