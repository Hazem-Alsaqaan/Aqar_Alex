import { memo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons"
import {faHeart} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SingleSearchBox.css"
import { useDispatch, useSelector } from "react-redux";
import { addTMyFavourites, removeFromFavourites } from "../../redux/actions/unitsActions";


// eslint-disable-next-line react-refresh/only-export-components
const SingleSearchBox = ({item}) => {
    const {user} = useSelector((state)=> state.authSlice)
    const {token} = useSelector((state)=> state.authSlice)
    const dispatch = useDispatch()
    const [favHeart, setFavHeart] = useState(false)
    let location = useLocation();

    const handleAddToMyFavourites= (id)=>{
        setFavHeart(true)
        dispatch(addTMyFavourites({id: id, token: token}))
    }
    const handleRemoveFromMyFavourites= (id)=>{
        setFavHeart(false)
        dispatch(removeFromFavourites({id: id, token: token}))
    }
    return (
        <>
            <div className="result-search-box">
                <div className="image-container">
                    <img src={item?.images ? item?.images[0] : ""} alt="" />
                    <FontAwesomeIcon 
                    onClick={favHeart || item.favourites.includes(user.id)? ()=>handleRemoveFromMyFavourites(item?._id) : ()=>handleAddToMyFavourites(item?._id)}
                    icon={faHeart} style={favHeart || item.favourites.includes(user.id)  ? {color: "#E20D0D"} : {color: "fff"}}/>
                </div>
                <div className="text-container">
                    <div className="text-top-side">
                        <h4>{`شقة مساحتها ${item.apartment_area} متر`}</h4>
                    </div>
                    <p>{`مكونة من ${item?.rooms} غرفة تحتوي على ${item?.beds} سرير مناسبة ل ${item?.persons + item?.children - 1} - ${item?.persons + item?.children} أفراد`}</p>
                    {/* <p className="rate"><span>{`${item.price} / اليوم`}</span></p> */}
                    <p className="rate"><span>{`${item.price}`}</span></p>
                    <p className="location">
                        <FontAwesomeIcon icon={faLocationDot} />
                        {`${item?.city} - مصر`}
                    </p>
                    {
                    location.pathname === `/estate_finance/search` ? <Link className="main_btn" to={`/estate_finance/showUnit/${item?._id}`}>طلب تمويل عقاري</Link>
                    :location.pathname === `/rent/search` ? <Link className="main_btn" to={`/rent/showUnit/${item?._id}`}>حجز</Link>
                    :<Link className="main_btn" to={`/selling/showUnit/${item?._id}`}>حجز معاينة</Link>
                    }
                </div>
            </div>
        </>
    )
}
// eslint-disable-next-line react-refresh/only-export-components
export default memo(SingleSearchBox)
