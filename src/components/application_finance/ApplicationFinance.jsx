import { useDispatch } from "react-redux"
import "./ApplicationFinance.css"
import { setApplicationFinanceSuccess } from "../../redux/reducers/toggleSlice"



const ApplicationFinance = ()=>{
    const dispatch = useDispatch()

    const handleSubmitApplicationFinance =(e)=>{
        e.preventDefault()
        dispatch(setApplicationFinanceSuccess(true))
    }
    return(
        <>
                            {/* left side */} 
                            <div className="application_form_container">
                                <section className="application_form_content">
                                    <h2>تقدم الان بطلب التمويل العقاري :-</h2>
                                    <form onSubmit={(e)=>handleSubmitApplicationFinance(e)}>
                                        <label>الاسم</label>
                                        <input
                                        type="text"
                                        />
                                        <label>رقم الهويه الوطنيه</label>
                                        <input
                                        type="text"
                                        />
                                        <label>البريد الالكتروني</label>
                                        <input
                                        type="text"
                                        />
                                        <label>رقم الهاتف</label>
                                        <input
                                        type="text"
                                        />
                                        <label>العنوان</label>
                                        <input
                                        type="text"
                                        />
                                        <label>الدخل الشهري</label>
                                        <input
                                        type="text"
                                        />
                                        <div>
                                            <button 
                                            type="submit" 
                                            className="main_btn"
                                            >تقديم</button>
                                        </div>
                                    </form>
                                </section>
                            </div>
        </>
    )
}
export default ApplicationFinance