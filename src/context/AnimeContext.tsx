import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { AnimeType } from "../types";
import AnimeService from "../services/AnimeService";

interface AnimeContextType {
  animeList: AnimeType[];
  deleteAnime: (id: number) => Promise<void>;
}

const AnimeContext = createContext<AnimeContextType | undefined>(undefined);

export const useAnimeContext = (): AnimeContextType => {
  const context = useContext(AnimeContext);
  if (!context) {
    throw new Error("useAnimeContext must be used within an AnimeProvider");
  }
  return context;
};

interface AnimeProviderProps {
  children: ReactNode;
}

export const AnimeProvider: React.FC<AnimeProviderProps> = ({ children }) => {
  const [animeList, setAnimeList] = useState<AnimeType[]>([]);

  const deleteAnime = async (id: number): Promise<void> => {
    await AnimeService.deleteById(id);
    setAnimeList((prevList) => prevList.filter((anime) => anime.id !== id));
  };

  // Fetch anime data from AnimeService and set initial animeList state
  useEffect(() => {
    const fetchData = async () => {
      const data = await AnimeService.getAll();
      setAnimeList(data);
    };
    fetchData();
  }, []);

  return (
    <AnimeContext.Provider value={{ animeList, deleteAnime }}>
      {children}
    </AnimeContext.Provider>
  );
};