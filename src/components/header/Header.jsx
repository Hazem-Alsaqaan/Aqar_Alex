import { useState } from "react";
import { Link, NavLink } from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBell} from "@fortawesome/free-regular-svg-icons"
import {faAngleDown, faCirclePlus, faCircleUser} from "@fortawesome/free-solid-svg-icons"
import {useDispatch, useSelector} from "react-redux"
import UserNotifications from "../user.notifications/UserNotifications";
import { getNotifications } from "../../redux/actions/unitsActions";
import HomeIcon from "../../assets/home_icon.svg"
import "./Header.css"

const Header = ()=>{
    const [chooseMainPage, setChooseMainPage] = useState(false)
    const [chooseBooking, setChooseBooking] = useState(false)
    const {user} = useSelector((state)=> state.authSlice)
    const [toggleNotifications, setToggleNotifications]= useState(false)
    const {token} = useSelector((state)=>state.authSlice)
    const dispatch = useDispatch()

    const handleShowNotifications = async()=>{
        setToggleNotifications(!toggleNotifications)
        dispatch(getNotifications(token))
    }

    return(
        <>
            <section className="header">
                <div className="container">
                    <nav>
                        <ul>
                        <li>
                                <span
                                className="main_header_routes_nav"
                                onClick={()=>{
                                    setChooseMainPage(!chooseMainPage)  
                                    setChooseBooking(false)
                                    
                                }}
                                >
                                الرئيسية
                                <FontAwesomeIcon icon={faAngleDown}/>
                                </span>
                                {
                                    chooseMainPage ? 
                                    <ul className="choose_booking_routes">
                                        <li onClick={()=>setChooseMainPage(false)}>
                                            <NavLink to="/selling">
                                            <img src={HomeIcon} alt="" />
                                            بيع
                                            </NavLink>
                                        </li>
                                        <li onClick={()=>setChooseMainPage(false)}>
                                            <NavLink to="/rent">
                                            <img src={HomeIcon} alt="" />
                                            إيجار
                                            </NavLink>
                                        </li>
                                        <li onClick={()=>setChooseMainPage(false)}>
                                            <NavLink to="/estate_finance">
                                            <img src={HomeIcon} alt="" />
                                            تمويل عقاري
                                            </NavLink>
                                        </li>
                                    </ul>
                                    :""
                                }
                            </li>
                            {/* <li>
                                <NavLink to="/" end 
                                className="main_header_routes_nav"
                                >الرئيسية</NavLink>
                            </li> */}
                            <li>
                                <span
                                className="main_header_routes_nav"
                                onClick={()=>{
                                    setChooseBooking(!chooseBooking) 
                                    setChooseMainPage(false)
                                }}
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
                                <NavLink className="main_header_routes_nav" to="/myFavourite">مفضلتي</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className="header-btn">
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

export default Header