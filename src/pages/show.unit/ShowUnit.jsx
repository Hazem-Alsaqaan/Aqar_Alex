import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WhiteHeader from "../../components/white.header/WhiteHeader";
import "./ShowUnit.css"
import Footer from "../../components/footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getOneUnit } from "../../redux/actions/unitsActions";
import { Helmet } from "react-helmet-async";
import UnitSwiperImages from "../../components/unit.swiper.images/UnitSwiperImages";
import SpecificationsConditions from "../../components/specifications/SpecificationsConditions";

const ShowUnit = ()=>{
    const [render, setRender] = useState(false)
    const {unitId} = useParams()
    const dispatch = useDispatch()
    const {oneUnit} = useSelector((state)=>state.unitsSlice)
    const {token} = useSelector((state)=>state.authSlice)

    useEffect(()=>{
        setRender(true)
        const cleaner = ()=>{
            dispatch(getOneUnit({id:unitId, token: token}))
        }
        return()=> cleaner()
    },[dispatch, render, token, unitId])
    return(
        <>
        <Helmet>
            <title>صيـف | عرض الشقة </title>
            <meta name="description" content=" شقة للإيجار. توافر جيد وأسعار رائعة لإيجار الشقق. احجز الشقة المناسبة ،اعرض شقتك للايجار ، حدد موقعك ، احجز اونلاين واختر أفضل العروض لإقامتك."/>
            <meta name="keywords" content="سكن، إقامة, فندق, الفنادق, عروض خاصة، شقق مصيفية ، أسعار مغرية، عطل نهاية الأسبوع، قضاء العطل في المدينة، صفقات, اقتصادي، رخيص، حسم، توفير"/>
        </Helmet>
            <div className="show-unit">
                <WhiteHeader />
                <div className="container show-unit-body">
                    <UnitSwiperImages/>
                    <SpecificationsConditions oneUnit ={oneUnit}/>
                </div>
                <Footer/>
            </div>
        </>
    )
}
export default ShowUnit