import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'
import CarIcon from 'mdi-react/CarIcon';

const Home = () => (
    <>
        <Helmet><title>Quiz App - Home</title> </Helmet>
        <div>
            <CarIcon className='icon_car' size={60}/>
        </div>
        <h1>Quiz App</h1>
        <div className='home_buttons'>
            <Link href='/'>Play</Link>
            <Link href='/'>Instructions</Link>
        </div>
    </>
)

export default Home