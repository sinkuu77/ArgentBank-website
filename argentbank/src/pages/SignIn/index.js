import { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

import { useSelector, useDispatch } from 'react-redux'
import { userLogin } from '../../redux/modules/auth/authAction'

import Header from '../../containers/Header'
import Button from '../../components/Button'

import '../../containers/Header/style.scss'
import './style.scss'

export default function SignIn() {
    const { loading, error, userToken } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if(userToken) {
            navigate('/user')
        }
    }, [navigate, userToken])
    
    const submitForm = (data) => {
        dispatch(userLogin(data))
    }
    return (
        <>
        <Header>
            <Link to='/user' className='nav__item'>
                <FontAwesomeIcon className='nav__item--icon'icon={faCircleUser}/>
                    Sign In
            </Link>
        </Header>
        <main className='signin'>
            <section className='signin__content'>
                <FontAwesomeIcon className='signin__content--icon'icon={faCircleUser}/>
                <h1>Sign In</h1>
                <form onSubmit={(event) => {
                    event.preventDefault()
                    const email = event.target[0].value
                    const password = event.target[1].value
                    const user = {
                        email: email,
                        password: password,
                    }
                    submitForm(user)
                }}>
                    {error && <p className='signin__content--error'>{error}</p>}
                    <div className='signin__content--wrapper'>
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" />
                    </div>
                    <div className='signin__content--wrapper'>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div className="signin__content--remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <Button 
                    text={"Sign In"}
                    disabled={loading}
                    />
                </form>
            </section>
        </main>
        </>
    )
}