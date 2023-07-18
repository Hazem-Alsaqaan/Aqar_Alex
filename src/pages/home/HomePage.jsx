import { useNavigate } from "react-router-dom"
import "./HomePage.css"
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const HomePage = () => {
    const navigate = useNavigate()
    const [route, setRoute] = useState("")
    const [selectSell, setSelectSell] = useState(false)
    const [selectBuy, setSelectBuy] = useState(false)
    const [selectFinance, setSelectFinance] = useState(false)

    const handleChooseSell = (e)=>{
        setRoute(e.currentTarget.getAttribute("name"))
            setSelectSell(true)
            setSelectBuy(false)
            setSelectFinance(false)
    }
    const handleChooseBuy = (e)=>{
        setRoute(e.currentTarget.getAttribute("name"))
        setSelectBuy(true)
        setSelectSell(false)
        setSelectFinance(false)
    }
    const handleChooseFinance = (e)=>{
        setRoute(e.currentTarget.getAttribute("name"))
        setSelectFinance(true)
        setSelectSell(false)
        setSelectBuy(false)
    }
    const handleSubmit =()=>{
        navigate(`/${route}`)
    }
    return (
        <>
        <Helmet>
            <title>الصفحة الرئيسية</title>
            <meta name="description" content=" شقة للإيجار. توافر جيد وأسعار رائعة لإيجار الشقق. احجز الشقة المناسبة ،اعرض شقتك للايجار ، حدد موقعك ، احجز اونلاين واختر أفضل العروض لإقامتك."/>
            <meta name="keywords" content="سكن، إقامة, فندق, الفنادق, عروض خاصة، شقق مصيفية ،أسعار مغرية، عطل نهاية الأسبوع، قضاء العطل في المدينة، صفقات, اقتصادي، رخيص، حسم، توفير"/>
        </Helmet>
            <section className="home_page">
                <div className="container">
                    <div className="choosing_boxes">
                        <div className={selectSell ? "box selected" : "box"} name="selling" onClick={(e)=>handleChooseSell(e)}>
                            <img src="https://res.cloudinary.com/dkhu7rt8n/image/upload/v1689416522/AqarAlex/cartoon-sweet-home-sale-cute-new-design-126961117-removebg-preview_1_tb9maw.jpg" alt=""/>
                            <h3>بيع</h3>
                        </div>
                        <div className={selectBuy ? "box selected" : "box"} name="buying" onClick={(e)=>handleChooseBuy(e)}>
                            <img src="https://res.cloudinary.com/dkhu7rt8n/image/upload/v1689416606/AqarAlex/istockphoto-925138596-612x612-removebg-preview_1_ggwrlc.jpg" alt=""/>
                            <h3>شراء</h3>
                        </div>
                        <div className={selectFinance ? "box selected" : "box"} name="mortgage_financing" onClick={(e)=>handleChooseFinance(e)}>
                            <img src="https://res.cloudinary.com/dkhu7rt8n/image/upload/v1689416634/AqarAlex/mortgage-concept-house-loan-money-investment-to-real-estate-man-buying-home-shaking-hands-agent-modern-illustration-190696067-removebg-preview_1_ufzfvz.jpg" alt=""/>
                            <h3>تمويل عقاري</h3>
                        </div>
                    </div>
                    <button onClick={handleSubmit} className="main_btn">تم</button>
                </div>
            </section>
        </>
    );
};
export default HomePage;
