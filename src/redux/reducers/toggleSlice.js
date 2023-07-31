import {createSlice} from "@reduxjs/toolkit"


const toggleSlice = createSlice({
    name: "toggle",
    initialState: {
        reserveSellingSuccess: false,
        applicationFinanceSuccess: false,
        reserveRentSuccess: false,
        mood: "light",
        showPaymentMonthly: false,
        showCalculator:false,
        showApplicationFinance: false,
    },
    reducers: {
        setReserveSellingSuccess: (state, action)=>{
            state.reserveSellingSuccess = action.payload
        },
        setApplicationFinanceSuccess: (state, action)=>{
            state.applicationFinanceSuccess = action.payload
        },
        setReserveRentSuccess: (state, action)=>{
            state.reserveRentSuccess = action.payload
        },
        setShowCalculator: (state, action)=>{
            state.showCalculator = action.payload
        },
        setShowApplication: (state, action)=>{
            state.showApplicationFinance = action.payload
        },
        setMood: (state, action)=>{
            state.mood = action.payload
        },
        setShowPaymentMonthly: (state, action)=>{
            state.showPaymentMonthly = action.payload
        }
    }
})

export const {setShowApplication, setShowCalculator, setReserveSellingSuccess, setApplicationFinanceSuccess, setReserveRentSuccess, setMood, setShowPaymentMonthly} = toggleSlice.actions
export default toggleSlice.reducer