import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slides/CounterSlide'
import UserReducer from './slides/userSlide'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: UserReducer,
    },
})