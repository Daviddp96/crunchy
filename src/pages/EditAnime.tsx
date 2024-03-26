import { ChangeEvent, FormEvent, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import AnimeService from '../services/AnimeService';
import { AnimeType } from '../types';

const EditAnime = () => {
    const params = useParams();
    const id = Number(params.id);
    const [userInput, setUserInput] = useState({
        name: '',
        description: '',
    });

    useEffect(() => {
        AnimeService.getOneById(id).then((response: AnimeType | undefined) => {
            if (response) {
                setUserInput({
                    name: response.name,
                    description: response.description,
                })
            }
        });
    }, []);
    
    const navigate = useNavigate();

    const handleGoBackOnClick = () => {
        navigate(`/animes`);
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        AnimeService.updateOneById(id, userInput.name, userInput.description).then(() => {
            navigate(`/animes`);
        })
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUserInput({
            ...userInput,
            [event.target.name]: event.target.value,
        });
    }

    return (
        <section className="bg-slate-800 p-8 rounded-sm shadow-lg shadow-[#131313] w-full">
            <div className="my-8">
                <Button onClick={handleGoBackOnClick}>{`<<`}</Button>
            </div>
            <form action="submit" className="create-form" onSubmit={(event) => handleSubmit(event)}>
                <Input 
                    name='name'
                    label='Name:'
                    value={userInput.name}
                    onChange={(event) => handleInputChange(event)}
                />
                <Input 
                    name='description'
                    label='Description:'
                    value={userInput.description}
                    onChange={(event) => handleInputChange(event)}
                />
                <div className="my-8 flex justify-center">
                    <Button onClick={() => {}}>Update anime</Button>
                </div>
            </form>
        </section>
    );
}

export default EditAnime;