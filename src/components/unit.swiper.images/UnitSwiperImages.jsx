import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./UnitSwiperImage.css"
// import { FreeMode, Navigation, Thumbs } from "swiper";
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneUnit } from "../../redux/actions/unitsActions";
import {RotatingLines} from "react-loader-spinner"


// register();


const UnitSwiperImages = ()=>{
    const {unitId} = useParams()
    const {oneUnit} = useSelector((state)=>state.unitsSlice)
    const {oneUnitLoading} = useSelector((state)=>state.unitsSlice)
    const {token} = useSelector((state)=>state.authSlice)



    const dispatch = useDispatch()
    useEffect(()=>{
        const cleaner = ()=>{
            dispatch(getOneUnit({id:unitId, token: token}))
        }
        return()=> cleaner()
    },[dispatch, token, unitId])
    
    return(
        <>
        {oneUnitLoading ? 
                    <RotatingLines
                    strokeColor="#FF3D00"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="96"
                    visible={true}
                    />
        :
        <div className="unit-swiper-images">
        {!oneUnit.images ? <h1>لا يوجد شيء</h1> :
            <>
            <Swiper
                    style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                    }}
                    spaceBetween={10}
                    navigation={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                    >
                        {oneUnit.images.map((item, index)=>{
                            return (<SwiperSlide key={index}>
                                        <img src={item} alt=""/>
                                    </SwiperSlide>
                                    )
                        })}
                        
                </Swiper>
                <Swiper
                        // onSwiper=
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper"
                        >
                            {oneUnit.images.map((item, index)=>{
                                return (<SwiperSlide key={index}>
                                            <img src={item} alt=""/>
                                        </SwiperSlide>)
                            })}
                </Swiper>
                </>
                }
            </div>
        }
        </>
    )
}

export default UnitSwiperImages