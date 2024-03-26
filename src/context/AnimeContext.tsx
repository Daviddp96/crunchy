import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { AnimeType } from "../types";
import AnimeService from "../services/AnimeService";

interface AnimeContextType {
  animeList: AnimeType[];
  likes: number;
  incrementLikes: (id: number) => void;
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
  const [likes, setLikes] = useState(0);

  const incrementLikes = (id: number) => {
    setLikes((prevLikes) => prevLikes + 1);
    // Update the likes for the specific anime in the animeList
    setAnimeList((prevList) =>
      prevList.map((anime) =>
        anime.id === id ? { ...anime, likes: anime.likes + 1 } : anime
      )
    );
  };

  const deleteAnime = async (id: number): Promise<void> => {
    await AnimeService.deleteById(id);
    setAnimeList((prevList) => prevList.filter((anime) => anime.id !== id));
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await AnimeService.getAll();
      setAnimeList(data);
    };
    fetchData();
  }, []);

  return (
    <AnimeContext.Provider value={{ animeList, likes, incrementLikes, deleteAnime }}>
      {children}
    </AnimeContext.Provider>
  );
};