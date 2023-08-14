import { Link } from 'react-router-dom'
import Logo from '../../assets/argentBankLogo.png'

export default function Header({ children }) {
    return (
        <header>
            <nav className='nav'>
                <Link className='nav__logo' to='/'>
                    <img className='nav__logo--image' src={Logo} alt='Argent Bank Logo'/>
                    <h1 className='nav__sr-only'>Argent Bank</h1>
                </Link>
                <div>
                    {children}
                </div>
            </nav>
        </header>
    )
}