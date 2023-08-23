import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import thunk from 'redux-thunk'

import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../redux/modules/auth/authSlice'



const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    whitelist: ['auth']
}

const persistedReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
})

export const persistor = persistStore(store)