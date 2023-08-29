import Button from '../../components/Button'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { display, cancel } from '../../redux/modules/username/usernameSlice'
import { userName } from '../../redux/modules/username/usernameAction'

import AccountCard from '../../components/AccountCard'



import './style.scss'

export default function User() {
    const { firstName, lastName } = useSelector((state) => state.profile)
    const { displayForm, username, error, success } = useSelector((state) => state.username)
    const dispatch = useDispatch()


    const handleSubmit = (event) => {
        event.preventDefault()
        const newFirstName = event.target.firstnameInput.value
        const newLastName = event.target.lastnameInput.value
        const username = {
            firstName : newFirstName,
            lastName: newLastName
        }
        dispatch(userName(username))
        dispatch(cancel())
        
}

    return (
        <>
        <main className="user">
            {displayForm? <form className='user__edit'
            onSubmit={handleSubmit}
            >
                <p className='user__edit--title'>Edit user info</p>
                <div className='user__edit--wrapper'>
                    <label htmlFor='firstname'>First name:</label>
                    <input 
                    type='text' 
                    id='firstname' 
                    name='firstnameInput'
                    required
                    defaultValue={firstName} />
                </div>
                <div className='user__edit--wrapper'>
                    <label htmlFor='lastname'>Last name:</label>
                    <input 
                    type='text' 
                    id='lastname' 
                    name='lastnameInput'
                    required
                    defaultValue={lastName} />
                </div>
                {error&& <p className='user__edit--error'>{error}</p>}
                <div className='user__edit--btn'>
                    <Button 
                    text={'Save'}
                    type={'submit'}
                    />
                    <Button 
                    text={'Cancel'}
                    type={'button'}
                    onClick={() => dispatch(cancel())}
                    />
                </div>
            </form> : <div className="user__header">
                <h1>Welcome back</h1>
                <p>{`${firstName} ${lastName}!`}</p>
                <button className="user__header--edit" onClick={() => dispatch(display())}>Edit Name</button>
            </div>}
            
            {success&& <p className='user__edit--success'>{success}</p>}
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

