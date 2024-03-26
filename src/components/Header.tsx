import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Header: React.FC = () => {
    const navigate = useNavigate();

    const handleAddOnClick = () => {
        navigate(`/add-anime`);
    }

    return (
        <header className="flex items-center justify-around bg-teal-800 p-5">
            <h1 className="font-bold text-3xl tracking-wide">Crunchy</h1>
            <Button onClick={handleAddOnClick}>+ Add anime</Button>
        </header>
    );
}

export default Header;