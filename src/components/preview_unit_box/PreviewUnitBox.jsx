
import { useDispatch, useSelector } from "react-redux"
import "./PreviewUnitBox.css"
import { useState } from "react"
import { addTMyFavourites, removeFromFavourites } from "../../redux/actions/unitsActions"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faLocationDot } from "@fortawesome/free-solid-svg-icons"

const PreviewUnitBox = ({item})=>{
    const {user} = useSelector((state)=> state.authSlice)
    const {token} = useSelector((state)=> state.authSlice)
    const dispatch = useDispatch()
    const [favHeart, setFavHeart] = useState(false)
    // let location = useLocation();

    const handleAddToMyFavourites= (id)=>{
        setFavHeart(true)
        dispatch(addTMyFavourites({id: id, token: token}))
    }
    const handleRemoveFromMyFavourites= (id)=>{
        setFavHeart(false)
        dispatch(removeFromFavourites({id: id, token: token}))
    }
    return(
        <>
            <div className="preview_box">
                <div className="image-container">
                    <img src={item?.images ? item?.images[0] : ""} alt="" />
                    <FontAwesomeIcon 
                    onClick={favHeart || item.favourites.includes(user.id)? ()=>handleRemoveFromMyFavourites(item?._id) : ()=>handleAddToMyFavourites(item?._id)}
                    icon={faHeart} style={favHeart || item.favourites.includes(user.id)  ? {color: "#E20D0D"} : {color: "fff"}}/>
                    <div className="text-container">
                        <div className="text-top-side">
                            <h4>{`شقة مساحتها ${item.apartment_area} متر تقع بشارع ${item?.street}`}</h4>
                        </div>
                        <p className="rate"><span>{`${item.price}`}</span></p>
                        <p className="location">
                            <FontAwesomeIcon icon={faLocationDot} />
                            {`${item?.city} - مصر`}
                        </p>
                    </div>
                </div>
                <div className="preview_box_discription">
                    <h2>المواصفات</h2>
                    <p>{item?.description}</p>
                </div>
            </div>
        </>
    )
}
export default PreviewUnitBox