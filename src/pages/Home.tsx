import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import { AnimeProvider } from '../context/AnimeContext';

const Home: React.FC = (): JSX.Element => {
    return (
        <>
            <Header />
            <AnimeProvider>
                <section className='flex flex-col justify-center items-center p-8 max-w-5xl mx-auto'>
                    <Outlet />  
                </section>
            </AnimeProvider>
        </>
    );
};

export default Home;