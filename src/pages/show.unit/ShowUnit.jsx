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
import PaymentMonthly from "../../components/payment_monthly/PaymentMonthly";
import CustomToastify from "../../components/custom_toastify/CustomToastify";

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

    const {showPaymentMonthly} = useSelector((state)=> state.toggleSlice)
    const {reserveSellingSuccess} = useSelector((state)=> state.toggleSlice)
    const {reserveRentSuccess} = useSelector((state)=> state.toggleSlice)
    const {applicationFinanceSuccess} = useSelector((state)=> state.toggleSlice)

    return(
        <>
        <Helmet>
            <title>Egypt House | عرض الشقة </title>
            <meta name="keywords" content=" للعقارات Egypt House - بيع وشراء وايجار وتمويل عقاري العقارات شقق فلل شاليهات في مصر"/>
            <meta name="description" content=" Egypt House منصة تداول العقارات في مصر، بيع وشراء وايجار وتمويل عقاري العقارات، شقق، فلل، محلات، شاليهات، مكاتب، اراضي، بيوت ومنازل."/>
        </Helmet>
            <div className="show-unit">
                {showPaymentMonthly?<PaymentMonthly />:""}
                {
                reserveSellingSuccess ? <CustomToastify message = "تم حجز الطلب"/> 
                : reserveRentSuccess ? <CustomToastify message = "تم الحجز"/>
                : applicationFinanceSuccess ? <CustomToastify message = "تم تقديم طلب تمويلك العقاري بنجاح"/>
                :""
                }
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