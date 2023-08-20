import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

import { useSelector, useDispatch } from 'react-redux'
import { userLogin, userProfile } from '../../redux/modules/auth/authAction'

import Button from '../../components/Button'

import './style.scss'

export default function SignIn() {
    const { loading, error, userToken, userInfo } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if(userToken&&userInfo) {
            navigate('/user')
        }
    }, [navigate, userToken, userInfo])
    
    const submitForm = (data) => {
        dispatch(userLogin(data))
        if (userToken) {
            dispatch(userProfile(userToken))
        }
    }

    return (
        <>
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