import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBell} from "@fortawesome/free-regular-svg-icons"
import { faAngleDown, faCirclePlus, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import UserNotifications from "../user.notifications/UserNotifications";
import { getNotifications } from "../../redux/actions/unitsActions";
import HomeIcon from "../../assets/home_icon.svg"
import "./WhiteHeader.css"

const WhiteHeader = ()=>{
    const [chooseBooking, setChooseBooking] = useState(false)
    const {user} = useSelector((state)=> state.authSlice)
    const {token} = useSelector((state)=> state.authSlice)
    const [toggleNotifications, setToggleNotifications]= useState(false)
    const dispatch = useDispatch()
    const handleShowNotifications = async()=>{
        setToggleNotifications(!toggleNotifications)
        dispatch(getNotifications(token))
    }
    return(
        <>
            <section className="white-header">
                <div className="container">
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/" end 
                                className="main_header_routes_nav"
                                >الرئيسية</NavLink>
                            </li>
                            <li>
                                <span
                                className="main_header_routes_nav"
                                onClick={()=>setChooseBooking(!chooseBooking)}
                                >
                                حجوزاتي
                                <FontAwesomeIcon icon={faAngleDown}/>
                                </span>
                                {
                                    chooseBooking ? 
                                    <ul className="choose_booking_routes">
                                        <li onClick={()=>setChooseBooking(false)}>
                                            <NavLink to="/rent_bookings">
                                            <img src={HomeIcon} alt="" />
                                            حجوزات الإيجار
                                            </NavLink>
                                        </li>
                                        <li onClick={()=>setChooseBooking(false)}>
                                            <NavLink to="/preview_bookings">
                                                <img src={HomeIcon} alt="" />
                                                حجوزات طلب المعاينة
                                            </NavLink>
                                        </li>
                                    </ul>
                                    :""
                                }
                            </li>
                            <li>
                                <NavLink 
                                className="main_header_routes_nav"
                                to="/myFavourite">مفضلتي</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className="white-header-btn">
                        <Link to="/showYourApartment" className="btn btn-primary">
                            <FontAwesomeIcon icon={faCirclePlus}/>
                            اعرض شقتك
                        </Link>

                        {
                            user ? 
                            <div className="notifications-btn">
                                <Link to="/profile">
                                    <FontAwesomeIcon icon={faCircleUser}/>
                                </Link>
                                <FontAwesomeIcon 
                                icon={faBell}
                                onClick={handleShowNotifications}
                                />
                                {
                                    toggleNotifications && <UserNotifications/>
                                }
                            </div>
                            :
                            <Link to="/login" className="btn btn-outline-light">
                                <FontAwesomeIcon icon={faCircleUser}/>
                                تسجيل الدخول
                            </Link>
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhiteHeader