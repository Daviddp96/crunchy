import { useAnimeContext } from "../context/AnimeContext";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "./Button";
import AnimeService from "../services/AnimeService";
import { AnimeType } from "../types";

interface AnimeProps {
  name: string;
  likes: number;
  description: string;
}

const Anime: React.FC<AnimeProps> = ({ name, likes, description }) => {
  const [animeLikes, setAnimeLikes] = useState(likes);
  const { deleteAnime, incrementLikes } = useAnimeContext();
  const navigate = useNavigate();
  const params = useParams();
  const id = Number(params.id);

  useEffect(() => {
    const fetchLikesFromDataSource = async () => {
      try {
        const anime: AnimeType | undefined = await AnimeService.getOneById(id);
        if (anime) {
          setAnimeLikes(anime.likes);
        } else {
          throw new Error("Anime not found");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchLikesFromDataSource();
  }, [id]);

  const handleGoBackOnClick = () => {
    navigate(`/animes`);
  };

  const handleEdit = () => {
    navigate(`/animes/${id}/edit`);
  };

  const handleDelete = () => {
    deleteAnime(id);
    navigate(`/animes`);
  };

  const handleLike = () => {
    const newLikes = animeLikes + 1;
    incrementLikes(id);
    setAnimeLikes(newLikes);
    AnimeService.updateLikesById(id, newLikes);
  };

  return (
    <section className="bg-slate-800 p-8 rounded-sm shadow-lg shadow-[#131313] w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-2xl">{name}</h2>
        <Button onClick={handleGoBackOnClick}>{`<<`}</Button>
      </div>
      <hr />
      <div className="flex text-xl my-4 items-center gap-8">
        Likes: {animeLikes}
        <Button onClick={handleLike}>Like +</Button>
      </div>
      <div>
        <p className="my-4">{description}</p>
      </div>
      <div className="flex gap-8">
        <Button onClick={handleEdit}>Edit</Button>
        <Button onClick={handleDelete}>Delete</Button>
      </div>
    </section>
  );
};

export default Anime;