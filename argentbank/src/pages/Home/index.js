import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import Header from '../../containers/Header'
import '../../containers/Header/style.scss'


export default function Home() {
    return (
        <>
            <Header>
                <Link to='/login' className='nav__item'>
                    <FontAwesomeIcon className='nav__item--icon'icon={faCircleUser}/>
                    Sign In
                </Link>
            </Header>
        </>
    )
}