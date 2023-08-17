import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

import Header from '../../containers/Header'

import '../../containers/Header/style.scss'
import './style.scss'

export default function Error() {
    return (
        <>
        <Header>
            <Link to='/sign-in' className='nav__item'>
                <FontAwesomeIcon className='nav__item--icon'icon={faCircleUser}/>
                Sign In
            </Link>
        </Header>
        <h1 className='error'>404</h1>
        <div className='error__content'>
        <h2 className='error__content--message'>Nous ne trouvons pas la page recherchée</h2>
        <p className='error__content--text'>Vérifiez que l'URL saisie ne contient pas d'erreur.</p>
        <Link to='/' className='error__content--btn'>Aller à la page d'accueil</Link>
        </div>
        </>
    )
}