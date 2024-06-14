"use client"

import Card from '@/Components/AnimeList/Card'
import HeaderPagination from '@/Components/Utils/HeaderPagination'
import Pagination from '@/Components/Utils/Pagination'
import { getAnime } from '@/Libs/ApiLibs'
import React, { useEffect, useState } from 'react'

const page = async () => {
    const [page, setPage] = useState(1)
    const [topAnime, setTopAnime] = useState([])
    const fetchData = async () => {
        const populerAnime = await getAnime("top/anime", `page=${page}&&limit=24`)
        setTopAnime(populerAnime)
    }

    useEffect(() => {
        fetchData()
    }, [page])

    return (
        <>
            <HeaderPagination title={`Populer Anime #${page}`} />
            <Card api={topAnime} />
            <Pagination
                page={page}
                lastPage={topAnime.pagination?.last_visible_page}
                setPage={setPage}
            />
        </>
    )
}

export default page