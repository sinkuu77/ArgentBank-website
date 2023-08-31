import Button from '../../components/Button'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { display, cancel, resetNameSuccess } from '../../redux/modules/username/usernameSlice'
import { setUserName } from '../../redux/modules/username/usernameAction'
import { userProfile } from '../../redux/modules/profile/profileAction'

import AccountCard from '../../components/AccountCard'



import './style.scss'

export default function User() {
    const { userToken } = useSelector((state) => state.auth)
    const { firstName, lastName, userName, errorProfile } = useSelector((state) => state.profile)
    const { displayForm, nameError, nameSuccess } = useSelector((state) => state.username)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if(!userToken || errorProfile) {
            navigate('/')
        }
        dispatch(userProfile(userToken))
    }, [navigate, errorProfile, userToken, dispatch])

    const handleSubmit = (event) => {
        event.preventDefault()
        const newUsername = event.target[0].value
        const username = {
            userName: newUsername
        }
        dispatch(setUserName(username))
        dispatch(userProfile(userToken))
        dispatch(resetNameSuccess())
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
                    <label htmlFor='username'>Username:</label>
                    <input 
                    type='text' 
                    id='username' 
                    name='usernameInput'
                    defaultValue={userName} />
                </div>
                <div className='user__edit--wrapper'>
                    <label htmlFor='firstname'>First name:</label>
                    <input 
                    type='text' 
                    id='firstname' 
                    name='firstnameInput'
                    disabled
                    defaultValue={firstName} />
                </div>
                <div className='user__edit--wrapper'>
                    <label htmlFor='lastname'>Last name:</label>
                    <input 
                    type='text' 
                    id='lastname' 
                    name='lastnameInput'
                    disabled
                    defaultValue={lastName} />
                </div>
                {nameError&& <p className='user__edit--error'>{nameError}</p>}
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
            
            {nameSuccess&& <p className='user__edit--success'>{nameSuccess}</p>}
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

