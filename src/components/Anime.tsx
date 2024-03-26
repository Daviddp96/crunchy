import { useNavigate, useParams } from "react-router-dom";
import Button from "./Button";

interface AnimeProps {
    name: string,
    likes: number,
    description: string
}

const Anime: React.FC<AnimeProps> = ({name, likes, description}) => {
    const navigate = useNavigate();
    const params = useParams();
    const id = Number(params.id)

    const handleGoBackOnClick = () => {
        navigate(`/animes`);
    }

    const handleEdit = () => {
        navigate(`/animes/${id}/edit`);
    }

    return (
        <section className="bg-slate-800 p-8 rounded-sm shadow-lg shadow-[#131313] w-full">
            <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold text-2xl">{name}</h2>
                <Button onClick={handleGoBackOnClick}>{`<<`}</Button>
            </div>
            <hr />
            <div className="flex text-xl my-4 items-center gap-8">
                Likes: {likes}
                <Button onClick={() => {}}>Like +</Button>
            </div>
            <div>
                <p className="my-4">{description}</p>
            </div>
            
            <Button onClick={handleEdit}>Edit</Button>
        </section>
    );
}

export default Anime;