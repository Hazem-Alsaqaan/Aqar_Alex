import { memo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SentCode.css"
import axios from "axios";
import {ToastContainer, toast} from "react-toastify"
import { Helmet } from "react-helmet-async";

// eslint-disable-next-line react-refresh/only-export-components
const SentCode =({getMailFromSentCode})=>{
    const [email, setEmail] = useState("")
    const navigate = useNavigate()
    
    const handleConfirmEmail = async(e)=>{
        e.preventDefault()
        getMailFromSentCode(email)
        try{
            await axios.post(`https://nestjs-now-saif3-osamakamelmohamed6-gmailcom.vercel.app/phone-confirmation`, 
            {phone: `+2${email}`})
            navigate("/confirmCode")
        }catch(err){
            if(err.message === "Network Error"){
                toast.error("تأكد من اتصالك بالانترنت")
            }else if(err.response.data.errorMessage){
                toast.error(err.response.data.errorMessage)
            }
        }
        setEmail("")
    }

    return(
        <>
        <Helmet>
            <title>Egypt House | إرسال الرمز التأكيدي</title>
            <meta name="keywords" content=" للعقارات Egypt House - بيع وشراء وايجار وتمويل عقاري العقارات شقق فلل شاليهات في مصر"/>
            <meta name="description" content=" Egypt House منصة تداول العقارات في مصر، بيع وشراء وايجار وتمويل عقاري العقارات، شقق، فلل، محلات، شاليهات، مكاتب، اراضي، بيوت ومنازل."/>
        </Helmet>
        <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                />
        <section className="forget-password-content">
            <div className="container">
                <h1>نسيت كلمة المرور</h1>
                <h2>من فضلك أدخل البريد الالكتروني الذي استخدمته في التسجيل</h2>
                <section className="auth-form">
                    <form onSubmit={(e)=>handleConfirmEmail(e)}>
                        <label>رقم الموبايل</label>
                        <div className="mobile-number">
                            <input
                            type="text"
                            required
                            onChange={(e)=>setEmail(e.target.value)}
                            className="user-mobile-number"
                            value={email}
                            />
                        </div>
                        <button
                        className="main_btn"
                        >التالي</button>
                    </form>
                </section>
                <div className="new-account">
                    <span>ليس لديك حساب؟ </span>
                    <Link to="/register">حساب جديد</Link>
                </div>
            </div>
        </section>
        </>
    )
}
// eslint-disable-next-line react-refresh/only-export-components
export default memo(SentCode)