import Card from "@/Components/Anime/Card";
import Header from "@/Components/Anime/Header";
import { getAnime, getNestedAnimeResponse, reproduce } from "@/Libs/ApiLibs";

const Home = async () => {
  const topAnime = await getAnime("top/anime", "limit=10")
  const Anime = await getAnime("anime", "limit=10")
  let recomended = await getNestedAnimeResponse("recommendations/anime", "entry")
  recomended = reproduce(recomended, 5)

  return (
    <div className="mt-5 mx-8">
      <section>
        <Header title="Recomended Anime" />
        <Card api={recomended} />
      </section>
      <section>
        <Header title="Top Anime" linkTitle={"See More"} linkHref={"/Popular"} />
        <Card api={topAnime} />
      </section>
      <section>
        <Header title="Anime" linkTitle={"See More"} linkHref={"/Anime"} />
        <Card api={Anime} />
      </section>
    </div>
  );
}

export default Home
