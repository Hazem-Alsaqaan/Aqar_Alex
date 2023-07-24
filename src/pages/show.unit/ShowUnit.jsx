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
            <title>Aqar_Alex | عرض الشقة </title>
            <meta name="keywords" content="عقار الاسكندرية للعقارات aqar alex - بيع وشراء العقارات شقق فلل شاليهات في مصر"/>
            <meta name="description" content="عقار الاسكندرية aqar alex منصة تداول العقارات في مصر، بيع وشراء العقارات، شقق، فلل، محلات، شاليهات، مكاتب، اراضي، بيوت ومنازل."/>
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