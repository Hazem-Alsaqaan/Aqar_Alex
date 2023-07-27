import Footer from "../../components/footer/Footer";
import WhiteHeader from "../../components/white.header/WhiteHeader";
import { Helmet } from "react-helmet-async";
import "./TirmsOfUse.css"

const TirmsOfUse =()=>{
    return(
        <>
        <Helmet>
            <title>aqar_alex | شروط الإستخدام </title>
            <meta name="keywords" content="عقار الاسكندرية للعقارات aqar alex - بيع وشراء العقارات شقق فلل شاليهات في مصر"/>
            <meta name="description" content="عقار الاسكندرية aqar alex منصة تداول العقارات في مصر، بيع وشراء العقارات، شقق، فلل، محلات، شاليهات، مكاتب، اراضي، بيوت ومنازل."/>
        </Helmet>
            <WhiteHeader/>
            <section className="tirms-of-use  container">
                <h1>شروط الاستخدام</h1>
                <div>
                    <h2>الشروط والاحكام العامه للاستخدام</h2>
                    <div className="tirms-text"><p>•</p> مبلغ ال 50 جنيه الذي يقوم العميل دفعهم كعربون تعود الي الشركه المديره للتطبيق في حاله تأجير الشقه للعميل بالفعل ولكن في حاله الغاء الحجز عن طريق العميل يذهب المبلغ الي المؤجر كتعويض عن الالغاء</div>
                    <div className="tirms-text"><p>•</p> يخصم مبلغ ال 50 جنيه من قيمه الايجار المتفق عليه من قبل المؤجر</div>
                    <div className="tirms-text"><p>•</p> إن استخدام تطبيق تأجير الشقق يعني موافقتك على هذه الشروط والأحكام واتفاقك على الالتزام بها.</div>
                    <div className="tirms-text"><p>•</p> يحق للتطبيق تغيير شروط الاستخدام في أي وقت، ويجب عليك الالتزام بالشروط الجديدة عند استخدام التطبيق.</div>
                    <div className="tirms-text"><p>•</p> يحظر استخدام التطبيق لأي غرض غير قانوني أو غير أخلاقي أو يتعارض مع هذه الشروط والأحكام.</div>
                    <div className="tirms-text"><p>•</p> يجب عليك تقديم معلومات دقيقة وصحيحة عند تسجيل الدخول على التطبيق وتحديثها عند الحاجة.</div>
                    <div className="tirms-text"><p>•</p> يجب عليك الالتزام بشروط الحجز والدفع عند استخدام التطبيق.</div>
                    <div className="tirms-text"><p>•</p> تتعين عليك الالتزام بالتصرف بأمان وحذر عند استخدام التطبيق.</div>
                </div>
            </section>
            <Footer/>
        </>
    )
}
export default TirmsOfUse