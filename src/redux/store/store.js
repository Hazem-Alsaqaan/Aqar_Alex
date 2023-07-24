import {configureStore} from "@reduxjs/toolkit"
import unitsSlice from "../reducers/unitsSlice"
import authSlice from "../reducers/authSlice"
import searchDataSlice from "../reducers/searchDataSlice"
import toggleSlice from "../reducers/toggleSlice"


const store = configureStore({
    reducer:{
        unitsSlice: unitsSlice,
        authSlice: authSlice,
        searchDataSlice: searchDataSlice,
        toggleSlice: toggleSlice
    }
})

export default store
