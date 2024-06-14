import Card from "@/Components/AnimeList/Card"
import Header from "@/Components/AnimeList/Header"
import { getAnime } from "@/Libs/ApiLibs"

const page = async ({ params }) => {
    const { keywords } = params

    const decodedKeyword = decodeURI(keywords)
    const searchAnime = await getAnime("anime", `q=${decodedKeyword}`)

    return (
        <>
            <Header title={`Pencarian Untuk ${decodedKeyword}...`} />
            <Card api={searchAnime} />
        </>
    )
}

export default page