import {memo, useState} from "react";
import {Link, useLocation, useParams} from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faLocationDot} from "@fortawesome/free-solid-svg-icons"
import {faHeart} from "@fortawesome/free-solid-svg-icons"
import "./ApartmentBox.css"
import { addTMyFavourites, removeFromBookings, removeFromFavourites } from "../../redux/actions/unitsActions";
import { useDispatch, useSelector } from "react-redux";
import {ToastContainer} from "react-toastify"


// eslint-disable-next-line react-refresh/only-export-components
const ApartmentBox = ({item, renderMyBookings, setRenderMyBookings, starting, ending, bookingItem, favRender, setFavRender})=>{
    const {unitId} =  useParams()
    const {user} = useSelector((state)=> state.authSlice)
    const {token} = useSelector((state)=> state.authSlice)
    const dispatch = useDispatch()
    let location = useLocation();
    const [favHeart, setFavHeart] = useState(false)

    // add and remove of my favourites
    const handleAddToMyFavourites= (id)=>{
        setFavHeart(true)
        dispatch(addTMyFavourites({id: id, token: token}))
        if(location.pathname === "/myFavourite"){
            setFavRender(!favRender)
        }
    }
    // remove from favourites
    const handleRemoveFromMyFavourites= (id)=>{
        setFavHeart(false)
        dispatch(removeFromFavourites({id: id, token: token}))
        if(location.pathname === "/myFavourite"){
            setFavRender(!favRender)
        }
    }


    // add and remove from my bookings
    // const handleRemoveFromMyBookings= (id)=>{
    //     dispatch(removeFromBookings({id: id, token: token}))
    //     if(location.pathname === "/myBookings"){
    //         setRenderMyBookings(!renderMyBookings)
    //     }
    // }
    


const startDate = new Date(starting)
const startDateDay = startDate.getDate()
const startDateYear = startDate.getFullYear()

const endDate = new Date(ending)
const endDateDay = endDate.getDate()
const endDateYear = endDate.getFullYear()


    return(
        <>
            <div  
            className="single-box">
                {location.pathname === "/rent_bookings" &&
                <h4 className="date-booking-title">{`تم الحجز من يوم ${startDateDay} / ${startDate.getMonth() + 1} / ${startDateYear} إلى يوم ${endDateDay} / ${endDate.getMonth() + 1} / ${endDateYear}`}</h4>}
                <div className="image-box">
                    {location.pathname !== `/myUnits/${unitId}`?
                        <FontAwesomeIcon 
                        onClick={favHeart || item.favourites.includes(user.id) ? ()=>handleRemoveFromMyFavourites(item?._id) : ()=>handleAddToMyFavourites(item?._id)}
                        icon={faHeart} style={favHeart || item.favourites.includes(user.id) ? {color: "#E20D0D"} : {color: "fff"}}/>
                        :""}
                    <div className="apartmentBox-image-box">
                        <img src={item?.images && item?.images[0]} alt=""/>
                    </div>


                </div>
                <div className="apartmentBox-text-content">
                    {location.pathname === "/rent_bookings" ?
                    <h4>{`شقة مفروش للإيجار شارع  ${item?.street}`}</h4>
                    :<h4>{`شقة مساحتها  ${item?.apartment_area} متر`}</h4>}

                    {location.pathname === "/myFavourite" && 
                    <p>{`تقع في شارع ${item?.street} وتحتوي على ${item?.bathrooms} حمام ، ${item?.rooms} غرفة`}</p>}
                    
                    {location.pathname === "/rent_bookings" ? <p className="rate"><span>{`${item.price} / اليوم`}</span></p>
                    :<p className="rate"><span>{`${item.price} `}</span></p>}
                    
                    <p className="location">
                        <FontAwesomeIcon icon={faLocationDot}/>
                        {`${item?.city} - مصر`}
                    </p>




                    {
                    location.pathname === "/myUnits" ?
                    <Link 
                    className="main_btn"
                    to={`/myUnits/${item?._id}`}
                    >الحجوزات</Link>
                    : location.pathname === `/myUnits/${item?._id}` ?
                    ""
                    : location.pathname === `/estate_finance` ?
                    <Link 
                    className="main_btn"
                    to={`/estate_finance/showUnit/${item?._id}`}
                    >طلب تمويل عقاري</Link>
                    : location.pathname === `/rent` ?
                    <Link 
                    className="main_btn"
                    to={`/rent/showUnit/${item?._id}`}
                    >حجز</Link>
                    : location.pathname === `/selling` ?
                    <Link 
                    className="main_btn"
                    to={`/selling/showUnit/${item?._id}`}
                    >حجز معاينة</Link>
                    :""
                    }
                </div>
                <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                />
            </div>
        </>
    )
}
// eslint-disable-next-line react-refresh/only-export-components
export default memo(ApartmentBox)