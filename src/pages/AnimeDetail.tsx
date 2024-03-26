import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Anime from "../components/Anime";
import AnimeService from "../services/AnimeService";
import { AnimeType } from "../types";

const AnimeDetail = () => {
  const [details, setDetails] = useState<AnimeType>(null);
  const params = useParams();

  useEffect(() => {
    const id = Number(params.id);
    AnimeService.getOneById(id).then((anime) => {
      console.log({ anime });
      if (anime) {
        setDetails(anime);
      }
    });
  }, []);

  return (
    <>
      {details ? (
        <Anime
          name={details.name}
          likes={details.likes}
          description={details.description}
        />
      ) : (
        "Not found 404"
      )}
    </>
  );
};

export default AnimeDetail;
