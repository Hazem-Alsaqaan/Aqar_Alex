
import Right_Icon from "../../assets/Right_Icon.svg"
import { setToggleToast } from "../../redux/reducers/toggleSlice"
import "./CustomToastify.css"
import { useDispatch, useSelector } from "react-redux"

const CustomToastify = ()=>{
    const dispatch = useDispatch()
    const {toggleToast} = useSelector((state)=>state.toggleSlice)
    return(
        <>
        {toggleToast ?
            <div className="dark_container_bg">
            <section className="custom_toastify">
                <img src={Right_Icon} alt="" />
                <h2>تم حجز الطلب </h2>
                <button 
                onClick={()=>dispatch(setToggleToast(false))}
                className="main_btn">متابعة</button>
            </section>
        </div>
        : ""}
        </>
    )
}


export default CustomToastify