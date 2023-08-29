import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

import authReducer from '../redux/modules/auth/authSlice'
import profileReducer from '../redux/modules/profile/profileSlice'
import usernameReducer from '../redux/modules/username/usernameSlice'

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['userToken']
}

const profilePersistConfig = {
    key: 'profile',
    storage,
    whitelist: ['firstName', 'lastName']
}

const usernamePersistConfig = {
    key: 'username',
    storage,
    whitelist: ['username']
}

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer)
const persistedProfileReducer = persistReducer(profilePersistConfig, profileReducer)
const persistedUsernameReducer = persistReducer(usernamePersistConfig, usernameReducer)

export const store = configureStore({
    reducer: {
        auth: persistedAuthReducer,
        profile: persistedProfileReducer,
        username: persistedUsernameReducer
    },
    middleware: [thunk]
})

export const persistor = persistStore(store)