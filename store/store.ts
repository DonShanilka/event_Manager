import {configureStore} from '@reduxjs/toolkit';
import eventSlice from '../reducer/EventSlice'

export const store = configureStore({
    reducer: {
        event: eventSlice
    }
})

export default store;