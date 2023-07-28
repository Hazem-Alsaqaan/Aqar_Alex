import Footer from "../../components/footer/Footer";
// import WhiteHeader from "../../components/white.header/WhiteHeader";
import { Helmet } from "react-helmet-async";
import "./TirmsOfUse.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TirmsOfUse =()=>{
    const [acceptingTirms, setAcceptingTirms] = useState(false)
    const navigate = useNavigate()
    const handleAcceptingTirmsNavigate =()=>{
            if(acceptingTirms){
                navigate("/")
            }
    }
    return(
        <>
        <Helmet>
            <title>Egypt House | شروط الإستخدام </title>
            <meta name="keywords" content=" للعقارات Egypt House - بيع وشراء وايجار وتمويل عقاري العقارات شقق فلل شاليهات في مصر"/>
            <meta name="description" content=" Egypt House منصة تداول العقارات في مصر، بيع وشراء وايجار وتمويل عقاري العقارات، شقق، فلل، محلات، شاليهات، مكاتب، اراضي، بيوت ومنازل."/>
        </Helmet>
            {/* <WhiteHeader/> */}
            <section className="tirms-of-use  container">
                <h1>الشروط الخاصه بالتسجيل</h1>
                <div>
                    <h2>الشروط والاحكام العامه للاستخدام</h2>
                    <div className="tirms-text"><p>•</p>نسبه عموله البائع 2.5 % </div>
                    <div className="tirms-text"><p>•</p>نسبه 10% من الشهر بالنسبه للايجار المفروش</div>
                    <div className="tirms-text"><p>•</p>إن استخدام تطبيق تأجير وبيع الشقق يعني موافقتك على هذه الشروط والأحكام واتفاقك على الالتزام بها.</div>
                    <div className="tirms-text"><p>•</p> يحق للتطبيق تغيير شروط الاستخدام في أي وقت، ويجب عليك الالتزام بالشروط الجديدة عند استخدام التطبيق.</div>
                    <div className="tirms-text"><p>•</p> يحظر استخدام التطبيق لأي غرض غير قانوني أو غير أخلاقي أو يتعارض مع هذه الشروط والأحكام.</div>
                    <div className="tirms-text"><p>•</p> يجب عليك تقديم معلومات دقيقة وصحيحة عند تسجيل الدخول على التطبيق وتحديثها عند الحاجة.</div>
                    <div className="tirms-text"><p>•</p> يجب عليك الالتزام بشروط الحجز والدفع عند استخدام التطبيق.</div>
                    <div className="tirms-text"><p>•</p> تتعين عليك الالتزام بالتصرف بأمان وحذر عند استخدام التطبيق.</div>
                </div>
                <div className="check_tirms">
                    {!acceptingTirms ? <FontAwesomeIcon onClick={()=>setAcceptingTirms(true)} icon={faSquare}/> : <FontAwesomeIcon onClick={()=>setAcceptingTirms(false)} icon={faSquareCheck}/>}
                    <span onClick={()=>setAcceptingTirms(!acceptingTirms)}>أوافق على الشروط والأحكام</span>
                </div>
                <div className="btn_container">
                    <button onClick={handleAcceptingTirmsNavigate} className="main_btn">متابعة</button>
                </div>
            </section>
            <Footer/>
        </>
    )
}
export default TirmsOfUse