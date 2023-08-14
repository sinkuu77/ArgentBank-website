import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import Header from '../../containers/Header'
import '../../containers/Header/style.scss'
import './style.scss'


export default function Home() {
    return (
        <>
            <Header>
                <Link to='/login' className='nav__item'>
                    <FontAwesomeIcon className='nav__item--icon'icon={faCircleUser}/>
                    Sign In
                </Link>
            </Header>
            <main>
                <div className='hero'>
                    <section className="hero__content">
                        <h2 className="sr-only">Promoted Content</h2>
                        <p className="hero__content--subtitle">No fees.</p>
                        <p className="hero__content--subtitle">No minimum deposit.</p>
                        <p className="hero__content--subtitle">High interest rates.</p>
                        <p className="hero__content--text">Open a savings account with Argent Bank today!</p>
                    </section>
                </div>
            </main>
        </>
    )
}