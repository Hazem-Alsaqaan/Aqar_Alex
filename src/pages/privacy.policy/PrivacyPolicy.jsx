import Footer from "../../components/footer/Footer";
import WhiteHeader from "../../components/white.header/WhiteHeader";
import { Helmet } from "react-helmet-async";
import "../tirms.of.use/TirmsOfUse.css"

const PrivacyPolicy =()=>{
    return(
        <>
        <Helmet>
            <title>Egypt House | سياسة الخصوصية </title>
            <meta name="keywords" content=" للعقارات Egypt House - بيع وشراء وايجار وتمويل عقاري العقارات شقق فلل شاليهات في مصر"/>
            <meta name="description" content=" Egypt House منصة تداول العقارات في مصر، بيع وشراء وايجار وتمويل عقاري العقارات، شقق، فلل، محلات، شاليهات، مكاتب، اراضي، بيوت ومنازل."/>
        </Helmet>
            <WhiteHeader/>
            <section className="tirms-of-use privacy-policy container">
                <h1>سياسه الخصوصيه</h1>
                <div>
                    <div className="tirms-text"><p>•</p> يتم جمع المعلومات الشخصية التي تقدمها أثناء استخدام تطبيق Egypt House ويجب أن يتم جمع واستخدام هذه المعلومات وفقًا لسياسة الخصوصية الخاصة بالتطبيق.</div>
                    <div className="tirms-text"><p>•</p> توضح سياسة الخصوصية كيفية جمع واستخدام البيانات الشخصية ومن يمكن الوصول إليها، بالإضافة إلى كيفية تخزينها وحذفها.</div>
                    <div className="tirms-text"><p>•</p> يتم استخدام ملفات تعريف الارتباط (Cookies) وتقنيات مماثلة لجمع المعلومات عن استخدام التطبيق وتحسين تجربة المستخدم.</div>
                    <div className="tirms-text"><p>•</p> يرجى ملاحظة أن الشروط والأحكام وسياسة الخصوصية المحددة لتطبيق Egypt House قد تختلف بين البلدان ويمكن أن تتغير مع الوقت. لذلك، يجب عليك قراءة شروط الاستخدام وسياسة الخصوصية الخاصة بتطبيق Egypt House قبل استخدامه.</div>
                    <div className="tirms-text"><p>•</p> قد تحتوي خدماتنا على روابط لتطبيقات وخدمات وأدوات ومواقع تابعة لجهات خارجية لا نتحكم فيها أو نديرها ويمكن أن يستخدمها المستخدم؛  أي أننا لسنا مسؤولين عن أمن أو خصوصية أي معلومات تقوم هذه الجهات الخارجية بجمعها. لذا ينبغي للمستخدم مراجعة سياسات الخصوصية المطبقة على خدمات الجهات الخارجية المذكورة. لا تغطي سياسة الخصوصية الماثلة المعلومات والبيانات التي يقدمها المستخدم لشركات خارجية.</div>
                    <div className="tirms-text"><p>•</p> قد نقوم بتحديث سياسة الخصوصية الماثلة من وقت لآخر حسب ما نراه ضروريًا. وفي حال إجراء أي تغييرات جوهرية على سياسة الخصوصية</div>
                </div>
            </section>
            <Footer/>
        </>
    )
}
export default PrivacyPolicy