import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {RotatingLines} from "react-loader-spinner"
import { Helmet } from "react-helmet-async";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ApartmentBox from "../../components/apartment.box/ApartmentBox";
import { getMyBooking } from "../../redux/actions/unitsActions";
import "./PreviewBookings.css"



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
            <title>Aqar_Alex | حجوزات طلب المعاينة </title>
            <meta name="description" content=" شقة للإيجار. توافر جيد وأسعار رائعة لإيجار الشقق. احجز الشقة المناسبة ،اعرض شقتك للايجار ، حدد موقعك ، احجز اونلاين واختر أفضل العروض لإقامتك."/>
            <meta name="keywords" content="سكن، إقامة, فندق, الفنادق, عروض خاصة، شقق مصيفية ، أسعار مغرية، عطل نهاية الأسبوع، قضاء العطل في المدينة، صفقات, اقتصادي، رخيص، حسم، توفير"/>
        </Helmet>
            <div className="booking">
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
                        <div className="boxes-container container">
                            {
                                myBookings.map((item)=>(
                                    item.house && 
                                    <ApartmentBox 
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