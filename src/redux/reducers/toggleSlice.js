import {createSlice} from "@reduxjs/toolkit"


const toggleSlice = createSlice({
    name: "toggle",
    initialState: {
        toggleToast: false,
        mood: "light",
        showPaymentMonthly: false
    },
    reducers: {
        setToggleToast: (state, action)=>{
            state.toggleToast = action.payload
        },
        setMood: (state, action)=>{
            state.mood = action.payload
        },
        setShowPaymentMonthly: (state, action)=>{
            state.showPaymentMonthly = action.payload
        }
    }
})

export const {setToggleToast, setMood, setShowPaymentMonthly} = toggleSlice.actions
export default toggleSlice.reducer