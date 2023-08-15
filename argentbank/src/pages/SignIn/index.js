import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'


import Header from '../../containers/Header'
import Button from '../../components/Button'

import '../../containers/Header/style.scss'
import './style.scss'

export default function SignIn() {
    return (
        <>
        <Header>
            <Link to='/sign-in' className='nav__item'>
                <FontAwesomeIcon className='nav__item--icon'icon={faCircleUser}/>
                    Sign In
            </Link>
        </Header>
        <main className='signin'>
            <section className='signin__content'>
                <FontAwesomeIcon className='signin__content--icon'icon={faCircleUser}/>
                <h1>Sign In</h1>
                <form>
                    <div className='signin__content--wrapper'>
                        <label for="username">Username</label>
                        <input type="text" id="username" />
                    </div>
                    <div className='signin__content--wrapper'>
                        <label for="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div class="signin__content--remember">
                        <input type="checkbox" id="remember-me" />
                        <label for="remember-me">Remember me</label>
                    </div>
                    <Button 
                    text={"Sign In"}
                    />
                </form>
            </section>
        </main>
        </>
    )
}