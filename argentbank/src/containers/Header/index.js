import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../redux/modules/auth/authSlice'

import Logo from '../../assets/argentBankLogo.webp'
import './style.scss'

export default function Header() {
    const { userInfo, firstName, userToken } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    return (
        <header>
            <nav className='nav'>
                <Link className='nav__logo' to='/'>
                    <img className='nav__logo--image' src={Logo} alt='Argent Bank Logo'/>
                    <h1 className='sr-only'>Argent Bank</h1>
                </Link>
                {userToken&&userInfo?
                <div>
                    <Link to='/user' className='nav__item'>
                        <FontAwesomeIcon className='nav__item--icon'icon={faCircleUser}/>
                        {firstName}
                    </Link>
                    <Link to='/' className='nav__item' onClick={() => dispatch(logout())}>
                        <FontAwesomeIcon className='nav__item--icon'icon={faRightFromBracket} />
                        Sign out
                    </Link>
                </div> : 
                <Link to='/sign-in' className='nav__item'>
                    <FontAwesomeIcon className='nav__item--icon'icon={faCircleUser}/>
                    Sign In
                </Link>}
            </nav>
        </header>
    )
}