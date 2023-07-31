
import { memo } from "react"
import Right_Icon from "../../assets/Right_Icon.svg"
import { setApplicationFinanceSuccess, setReserveRentSuccess, setReserveSellingSuccess } from "../../redux/reducers/toggleSlice"
import "./CustomToastify.css"
import { useDispatch } from "react-redux"

// eslint-disable-next-line react-refresh/only-export-components
const CustomToastify = ({message})=>{
    const dispatch = useDispatch()
    const restFaksyValue =()=>{
        dispatch(setApplicationFinanceSuccess(false))
        dispatch(setReserveRentSuccess(false))
        dispatch(setReserveSellingSuccess(false))
    }
    return(
        <>
            <div className="dark_container_bg">
            <section className="custom_toastify">
                <img src={Right_Icon} alt="" />
                <h2>{message}</h2>
                <button 
                onClick={()=>restFaksyValue()}
                className="main_btn">متابعة</button>
            </section>
        </div>
        </>
    )
}


// eslint-disable-next-line react-refresh/only-export-components
export default memo(CustomToastify)