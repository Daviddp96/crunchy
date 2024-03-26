import { ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import AnimeService from '../services/AnimeService';

const AddAnime = () => {
    const [userInput, setUserInput] = useState({
        name: '',
        description: ''
    });

    const navigate = useNavigate();

    const handleGoBackOnClick = () => {
        navigate(`/animes`);
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        AnimeService.create(userInput.name, userInput.description).then(() => {
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
                    onChange={(event) => handleInputChange(event)}
                />
                <Input 
                    name='description'
                    label='Description:'
                    onChange={(event) => handleInputChange(event)}
                />
                <div className="my-8 flex justify-center">
                    <Button onClick={() => {}}>Add anime</Button>
                </div>
            </form>
        </section>
    );
}

export default AddAnime;