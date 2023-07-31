import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./PaymentMonthly.css"
import { faX } from "@fortawesome/free-solid-svg-icons"
import { useDispatch } from "react-redux"
import { setShowApplication, setShowCalculator, setShowPaymentMonthly } from "../../redux/reducers/toggleSlice"

const PaymentMonthly =()=>{
    const dispatch = useDispatch()

    const handleShowApplicationFinance = ()=>{
        dispatch(setShowApplication(true))
        dispatch(setShowCalculator(false))
        dispatch(setShowPaymentMonthly(false))
    }

    return(
        <>
        <div className="dark_container_bg">
            <section className="payment_monthly" >
                <div className="fa_solid_x_icon">
                    <FontAwesomeIcon icon={faX} onClick={()=>dispatch(setShowPaymentMonthly(false))}/>
                </div>
                <h2>الدفع الشهري : 1,377 جنيها</h2>
                <p>للحصول على قرض عقاري بقيمة 200،000.00 مطفأ على مدى 15 عامًا ، تكون الدفعة الشهرية
                دفعة الرهن العقاري: 1،377.27
                إجمالي الرهون العقارية ذات الفائدة: 247909.18
                الإجمالي مع الدفعة الأولى: 297909.18
                </p>
                <button 
                onClick={()=>handleShowApplicationFinance()} 
                className="main_btn">متابعة</button>
            </section>
        </div>
        </>
    )
}

export default PaymentMonthly