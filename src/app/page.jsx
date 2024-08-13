import Header from "@/Components/Anime/Header";
import { getAnime, getNestedAnimeResponse, reproduce } from "@/lib/ApiLibs";
import Cards from "@/Components/Anime/Cards";

const Home = async () => {
  const topAnime = await getAnime("top/anime", "limit=12");
  const Anime = await getAnime("anime", "limit=12");
  let recomended = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  recomended = reproduce(recomended, 12);

  return (
    <div className="mx-10">
      <section>
        <Header title="Recomended Anime" />
        <Cards api={recomended} />
      </section>
      <section>
        <Header
          title="Top Anime"
          linkTitle={"See More"}
          linkHref={"/Popular"}
        />
        <Cards api={topAnime} />
      </section>
      <section>
        <Header title="Anime" linkTitle={"See More"} linkHref={"/Anime"} />
        <Cards api={Anime} />
      </section>
    </div>
  );
};

export default Home;
