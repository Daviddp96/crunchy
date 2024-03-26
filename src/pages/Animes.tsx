import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AnimeType } from "../types";
import AnimeService from "../services/AnimeService.ts";
import AnimePreview from "../components/AnimePreview";
import SearchBar from "../components/Searchbar";

const Animes = () => {
  const [animeList, setAnimeList] = useState<AnimeType[]>([]);
  const [filteredAnimes, setFilteredAnimes] = useState<AnimeType[]>(animeList);
  const navigate = useNavigate();

  function handleSearch(term: string) {
    const filtered = animeList.filter((anime) =>
      anime.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredAnimes(filtered);
  }

  useEffect(() => {
    AnimeService.getAll().then((animes) => {
      setAnimeList(animes);
    });
  }, [animeList]);

  function handleOpen(id: number): void {
    navigate(`${id}`);
  }

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full my-8">
        {filteredAnimes?.map((anime) => (
              <AnimePreview
                key={anime.id}
                title={anime.name}
                onClick={() => handleOpen(anime.id)}
              />
            ))}
      </div>
    </>
  );
};

export default Animes;
