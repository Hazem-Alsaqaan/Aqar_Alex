import {createSlice} from "@reduxjs/toolkit"


const toggleSlice = createSlice({
    name: "toggle",
    initialState: {
        toggleToast: false,
    },
    reducers: {
        setToggleToast: (state, action)=>{
            state.toggleToast = action.payload
        }
    }
})

export const {setToggleToast} = toggleSlice.actions
export default toggleSlice.reducer