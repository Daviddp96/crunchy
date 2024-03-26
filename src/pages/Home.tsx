import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

const Home: React.FC = (): JSX.Element => {
    return (
        <>
            <Header />
            <section className='flex flex-col justify-center items-center p-8 max-w-5xl mx-auto'>
                <Outlet />  
            </section>
        </>
    );
};

export default Home;