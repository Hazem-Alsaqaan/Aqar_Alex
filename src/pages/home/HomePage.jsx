import { useNavigate } from "react-router-dom"
import { memo, useState } from "react";
import { Helmet } from "react-helmet-async";
import sell_img from "../../assets/sell.svg"
import rent_img from "../../assets/rent.svg"
import estate_finance from "../../assets/estate_finance.svg"
import "./HomePage.css"

// eslint-disable-next-line react-refresh/only-export-components
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
            <meta name="keywords" content="عقار الاسكندرية للعقارات aqar alex - بيع وشراء العقارات شقق فلل شاليهات في مصر"/>
            <meta name="description" content="عقار الاسكندرية aqar alex منصة تداول العقارات في مصر، بيع وشراء العقارات، شقق، فلل، محلات، شاليهات، مكاتب، اراضي، بيوت ومنازل."/>
        </Helmet>
            <section className="home_page">
                <div className="container">
                    <div className="choosing_boxes">
                        <div className={selectSell ? "box selected" : "box"} name="selling" onClick={(e)=>handleChooseSell(e)}>
                            <img src={sell_img} alt=""/>
                            <h3>بيع</h3>
                        </div>
                        <div className={selectBuy ? "box selected" : "box"} name="rent" onClick={(e)=>handleChooseBuy(e)}>
                            <img src={rent_img} alt=""/>
                            <h3>إيجار</h3>
                        </div>
                        <div className={selectFinance ? "box selected" : "box"} name="estate_finance" onClick={(e)=>handleChooseFinance(e)}>
                            <img src={estate_finance} alt=""/>
                            <h3>تمويل عقاري</h3>
                        </div>
                    </div>
                    <button onClick={handleSubmit} className="main_btn">تم</button>
                </div>
                
            </section>
        </>
    );
};
// eslint-disable-next-line react-refresh/only-export-components
export default memo(HomePage);
