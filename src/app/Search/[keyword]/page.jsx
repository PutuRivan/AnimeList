import Card from "@/Components/Anime/Cards";
import Header from "@/Components/Anime/Header";
import { getAnime } from "@/lib/ApiLibs";

const page = async ({ params }) => {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);
  const searchAnime = await getAnime("anime", `q=${decodedKeyword}`);
  return (
    <>
      <Header title={`Pencarian Untuk ${decodedKeyword}...`} />
      <Card api={searchAnime} />
    </>
  );
};

export default page;
