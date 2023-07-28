import {createSlice} from "@reduxjs/toolkit"


const toggleSlice = createSlice({
    name: "toggle",
    initialState: {
        toggleToast: false,
        mood: "light"
    },
    reducers: {
        setToggleToast: (state, action)=>{
            state.toggleToast = action.payload
        },
        setMood: (state, action)=>{
            state.mood = action.payload
        }
    }
})

export const {setToggleToast, setMood} = toggleSlice.actions
export default toggleSlice.reducer