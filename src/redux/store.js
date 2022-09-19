import { configureStore } from '@reduxjs/toolkit'
import settingsSlice from './settings/settings'
import dataSlice from './data/data'
import userSlice from './user/user'

const store =  configureStore({
    reducer : {
        settings : settingsSlice,
        user : userSlice,
        data : dataSlice
    }
})



export default store

