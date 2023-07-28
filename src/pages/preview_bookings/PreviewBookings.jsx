import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {RotatingLines} from "react-loader-spinner"
import { Helmet } from "react-helmet-async";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { getMyBooking } from "../../redux/actions/unitsActions";
import "./PreviewBookings.css"
import PreviewUnitBox from "../../components/preview_unit_box/PreviewUnitBox";



const PreviewBookings = ()=>{
    const [render, setRender] = useState(false)
    const dispatch = useDispatch()
    const {token} = useSelector((state)=> state.authSlice)
    const {myBookings} = useSelector((state)=>state.unitsSlice)
    const {myBookingsLoading} = useSelector((state)=>state.unitsSlice)


    useEffect(()=>{
        setRender(true)
        const cleaner = ()=>{
            dispatch(getMyBooking(token))
        }
        return()=> cleaner()
    },[dispatch, render, token])


    return(
        <>
        <Helmet>
            <title>Egypt House | حجوزات طلب المعاينة </title>
            <meta name="keywords" content=" للعقارات Egypt House - بيع وشراء وايجار وتمويل عقاري العقارات شقق فلل شاليهات في مصر"/>
            <meta name="description" content=" Egypt House منصة تداول العقارات في مصر، بيع وشراء وايجار وتمويل عقاري العقارات، شقق، فلل، محلات، شاليهات، مكاتب، اراضي، بيوت ومنازل."/>
        </Helmet>
            <div className="preview_booking">
                <Header/>
                <section className="booking-page-landing">
                    <div className="container landing-content">
                        <h1>حجوزات المعاينة</h1>
                    </div>
                </section>
                {myBookingsLoading ? 
                        <div className="loading">
                            <RotatingLines
                            strokeColor="#FF3D00"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="96"
                            visible={true}
                            /> 
                        </div>
                            : 
                    <>
                    {!myBookings.length > 0 ? <h1 className="container not-found-units">لم يتم حجز وحدات...</h1> :
                        <div className="preview_boxes_container container">
                            {
                                myBookings.map((item)=>(
                                    item.house && 
                                    <PreviewUnitBox 
                                    key={item._id} 
                                    item={ item.house} 
                                    renderMyBookings ={render} 
                                    setRenderMyBookings ={setRender} 
                                    starting = {item.start_date}
                                    ending = {item.end_date}
                                    bookingItem = {item}
                                    />
                                ))
                            }
                        </div>
                        }
                    </>
                    }                
                <Footer/>
            </div>
        </>
    )
}

export default PreviewBookings