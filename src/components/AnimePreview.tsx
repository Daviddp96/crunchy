interface AnimePreviewProps {
    title: string;
    onClick: () => void
}

const AnimePreview: React.FC<AnimePreviewProps> = ({ title, onClick }) => {
    return (
        <article onClick={onClick} className="bg-slate-800 duration-300 p-4 my-2 w-full cursor-pointer rounded-sm shadow-lg shadow-[#131313] font-semibold hover:bg-slate-700">
            <h3>{title}</h3>
        </article>
    );
}

export default AnimePreview;