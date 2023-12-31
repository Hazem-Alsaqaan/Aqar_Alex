import  { memo, useEffect, useRef, useState } from "react";
import "./ConfirmCodeToRestPass.css"
import { useNavigate } from "react-router-dom";
import {ToastContainer} from "react-toastify"
import { Helmet } from "react-helmet-async";

// eslint-disable-next-line react-refresh/only-export-components
const ConfirmCodeToRestPass =({email, getCodeFromConfirmCode})=>{
    const navigate = useNavigate()
    const[firstNum, setFirstNum] = useState("")
    const[secondNum, setSecondNum] = useState("")
    const[thirdNum, setThirdNum] = useState("")
    const[fourdNum, setFourdNum] = useState("")
    const[fiveNum, setFiveNum] = useState("")
    const[sixNum, setSixNum] = useState("")

    const firstRef = useRef()
    const secondRef = useRef()
    const thirdRef = useRef()
    const fourdRef = useRef()
    const fiveRef = useRef()
    const sixRef = useRef()

    if(firstNum !== ""){
        secondRef.current.select()
    }
    if(secondNum !== ""){
        thirdRef.current.select()
    }
    if(thirdNum !== ""){
        fourdRef.current.select()
    }
    if(fourdNum !== ""){
        fiveRef.current.select()
    }
    if(fiveNum !== ""){
        sixRef.current.select()
    }

    const handleConfirmCode = async(e)=>{
        e.preventDefault()
        getCodeFromConfirmCode(`${firstNum}${secondNum}${thirdNum}${fourdNum}${fiveNum}${sixNum}`)
        navigate("/restPassword")
    }

    useEffect(()=>{
        firstRef.current.select()
    },[])
    return(
        <>
        <Helmet>
            <title>Egypt House | الرمز التأكيدي</title>
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
            <section className="confirm-code">
                <div className="container">
                    <h1>نسيت كلمة المرور</h1>
                    <h2>{`تم إرسال الكود على رقم الموبايل ${email ? email : "unknown"}`}</h2>
                    <section className="auth-form">
                        <form onSubmit={(e)=>handleConfirmCode(e)}>
                            <label>الرمز التأكيدي</label>
                            <div className="code-input">
                                <input
                                type="tel"
                                maxLength={1}
                                required
                                onChange={(e)=>setFirstNum(e.target.value)}
                                value={firstNum}
                                ref={firstRef}
                                />
                                <input
                                type="tel"
                                maxLength={1}
                                required
                                onChange={(e)=>setSecondNum(e.target.value)}
                                value={secondNum}
                                ref={secondRef}
                                />
                                <input
                                type="tel"
                                maxLength={1}
                                required
                                onChange={(e)=>setThirdNum(e.target.value)}
                                value={thirdNum}
                                ref={thirdRef}
                                />
                                <input
                                type="tel"
                                maxLength={1}
                                required
                                onChange={(e)=>setFourdNum(e.target.value)}
                                value={fourdNum}
                                ref={fourdRef}
                                />
                                <input
                                type="tel"
                                maxLength={1}
                                required
                                onChange={(e)=>setFiveNum(e.target.value)}
                                value={fiveNum}
                                ref={fiveRef}
                                />
                                <input
                                type="tel"
                                maxLength={1}
                                required
                                onChange={(e)=>setSixNum(e.target.value)}
                                value={sixNum}
                                ref={sixRef}
                                />
                            </div>
                            <button
                            className="main_btn"
                            >تحقق</button>
                        </form>
                    </section>                    
                </div>
            </section>
        </>
    )
}
// eslint-disable-next-line react-refresh/only-export-components
export default memo(ConfirmCodeToRestPass)