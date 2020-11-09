import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'
import CarIcon from 'mdi-react/CarIcon';

const Home = () => (
    <>
        <Helmet><title>Quiz App - Home</title> </Helmet>
        <div className = 'container'>
            <div>
                <CarIcon className='icon_car' size={60}/>
            </div>
            <h1>Quiz App</h1>
            <ul className='buttons'>
                <li className='button'><Link to={'/play'}>Play</Link></li>
                <li className='button'><Link to={'/instructions'}>Instructions</Link></li>
            </ul>

        </div>
    </>
)

export default Home