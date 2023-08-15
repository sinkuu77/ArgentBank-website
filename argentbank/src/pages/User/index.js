import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

import Header from '../../containers/Header'
import AccountCard from '../../components/AccountCard';

import '../../containers/Header/style.scss'
import './style.scss'

export default function User() {
    return (
        <>
        <Header>
            <Link to='/user' className='nav__item'>
                <FontAwesomeIcon className='nav__item--icon'icon={faCircleUser}/>
                Tony
            </Link>
            <Link to='/' className='nav__item'>
                <FontAwesomeIcon className='nav__item--icon'icon={faRightFromBracket}/>
                Sign out
            </Link>
        </Header>
        <main className="user">
            <div className="user__header">
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <button className="user__header--edit">Edit Name</button>
            </div>
            <h2 class="sr-only">Accounts</h2>
            <AccountCard 
            title={'Argent Bank Checking (x8349)'}
            amount={'$2,082.79'}
            description={'Available Balance'}
            />
            <AccountCard 
            title={'Argent Bank Savings (x6712)'}
            amount={'$10,928.42'}
            description={'Available Balance'}
            />
            <AccountCard 
            title={'Argent Bank Credit Card (x8349)'}
            amount={'$184.30'}
            description={'Current Balance'}
            />
        </main>
        </>
    )
}

