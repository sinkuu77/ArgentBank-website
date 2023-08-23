//import { useSelector } from 'react-redux'

import AccountCard from '../../components/AccountCard'


import './style.scss'

export default function User() {

    return (
        <>
        <main className="user">
            <div className="user__header">
                <h1>Welcome back</h1>
                <p>{`${'firstName'} ${''}!`}</p>
                <button className="user__header--edit">Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
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

