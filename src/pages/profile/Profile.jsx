import { useEffect, useState } from "react";
import WhiteHeader from "../../components/white.header/WhiteHeader";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faCircleHalfStroke, faGlobe, faHome, faHotel, faLock, faPowerOff, faThumbsUp, faUser, faUserLock } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck, faCircleDot } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMyBooking, getUserProfileData } from "../../redux/actions/unitsActions";
import { logOut } from "../../redux/reducers/authSlice";
import { ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet-async";
import "./Profile.css"
import { setMood } from "../../redux/reducers/toggleSlice";

const Profile =()=>{
    const dispatch = useDispatch()
    const {mood} = useSelector((state)=>state.toggleSlice)
    const [toggleThemes, setToggleThemes] = useState(false)
    const [profileRender, setProfileRender] = useState(false)
    const {token} = useSelector((state)=>state.authSlice)
    const {userProfile} = useSelector((state)=>state.unitsSlice)
    const {myBookings} = useSelector((state)=>state.unitsSlice)

    useEffect(()=>{
        setProfileRender(true)
        const cleanerGetUserProfile = async()=> {
            dispatch(getMyBooking(token))
            dispatch(getUserProfileData(token))
        }
        return()=> cleanerGetUserProfile()
    },[dispatch, profileRender, token])

    const handleLogOut =()=>{
        dispatch(logOut())
    }

    const handleSetThemesMood = (mood)=>{
        dispatch(setMood(mood))
        setToggleThemes(false)
    }
    return(
        <>
        <Helmet>
            <title>Egypt House |  الصفحة الشخصية </title>
            <meta name="keywords" content=" للعقارات Egypt House - بيع وشراء وايجار وتمويل عقاري العقارات شقق فلل شاليهات في مصر"/>
            <meta name="description" content=" Egypt House منصة تداول العقارات في مصر، بيع وشراء وايجار وتمويل عقاري العقارات، شقق، فلل، محلات، شاليهات، مكاتب، اراضي، بيوت ومنازل."/>
        </Helmet>
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
            <WhiteHeader/>
            <section className="profile-body container">
                {
                    toggleThemes ?
                    <div className="config_themes">
                        <h2>الوضع المظلم</h2>
                        <section>
                            <div>
                                <p onClick={()=>handleSetThemesMood("dark")}>تفعيل</p>
                                <FontAwesomeIcon onClick={()=>handleSetThemesMood("dark")} icon={faCircleDot} style={mood === "dark" ? {color: "#FF3D00" } : {color: "#ccc"} }/>
                            </div>
                            <div>
                                <p onClick={()=>handleSetThemesMood("light")}>إيقاف</p>
                                <FontAwesomeIcon onClick={()=>handleSetThemesMood("light")} icon={faCircleDot} style={mood === "light" ? {color: "#FF3D00" } : {color: "#ccc"}}/>
                            </div>
                        </section>
                    </div>
                    :"" 
                }
                <div className="profile-image">
                    <img src={userProfile?.photo ? userProfile?.photo : `https://res.cloudinary.com/dkhu7rt8n/image/upload/v1685201428/vectors/user_profile_g0jjum.png`} alt=""/>
                    <h2>{userProfile.username}</h2>
                </div>
                <nav className="profile-nav">
                    <ul>
                        <li>
                            <div className="text-icon">
                                <FontAwesomeIcon icon={faUser}/>
                                <Link to="/manageAccount">إدارة الحساب</Link>
                            </div>
                            <FontAwesomeIcon className="left-side" icon={faChevronLeft}/>
                        </li>
                        <li>
                            <div className="text-icon">
                                <FontAwesomeIcon className="left-side" icon={faLock}/>
                                <Link to="/changePassword">تغيير كلمه المرور</Link>
                            </div>
                            <FontAwesomeIcon className="left-side" icon={faChevronLeft}/>
                        </li>
                        <li>
                            <div className="text-icon">
                                <FontAwesomeIcon className="left-side" icon={faHotel}/>
                                <span>عدد الحجوزات</span>
                            </div>
                            <p className="left-side">{myBookings.length > 0 ? myBookings.length : 0}</p>
                        </li>
                        <li>
                            <div className="text-icon">
                                <FontAwesomeIcon icon={faHome} />
                                <Link to="/myUnits">الشقق المعروضه</Link>
                            </div>
                            <FontAwesomeIcon className="left-side" icon={faChevronLeft}/>
                        </li>
                        <li>
                            <div className="text-icon">
                                <FontAwesomeIcon icon={faThumbsUp} />
                                <span>تقييمك</span>
                            </div>
                            <p className="left-side">5.0</p>
                        </li>
                        <li>
                            <div className="text-icon">
                                <FontAwesomeIcon icon={faGlobe} />
                                <span>اللغه</span>
                            </div>
                            <p className="left-side">عربي</p>
                        </li>
                        <li>
                            <div className="text-icon"
                            onClick={()=>setToggleThemes(!toggleThemes)}
                            >
                                <FontAwesomeIcon icon={faCircleHalfStroke} />
                                <span>الوضع المظلم</span>
                            </div>
                            <div className="dark_mood" 
                            onClick={()=>setToggleThemes(!toggleThemes)}>
                                <span className="left-side">{mood === "dark" ? "تفعيل" : "إيقاف"}</span>
                                <FontAwesomeIcon className="left-side" icon={faChevronLeft}/>
                            </div>
                        </li>
                        <li>
                            <div className="text-icon">
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <Link to="/tirms-of-use">شروط الإستخدام</Link>
                            </div>
                            <FontAwesomeIcon className="left-side" icon={faChevronLeft}/>
                        </li>
                        <li>
                            <div className="text-icon">
                                <FontAwesomeIcon className="left-side" icon={faUserLock}/>
                                <Link to="/privacy-policy">سياسة الخصوصية</Link>
                            </div>
                            <FontAwesomeIcon className="left-side" icon={faChevronLeft}/>
                        </li>
                        <li>
                            <div className="text-icon"
                            onClick={handleLogOut}
                            >
                                <FontAwesomeIcon icon={faPowerOff}/>
                                <span>تسجيل الخروج</span>
                            </div>
                        </li>
                    </ul>
                </nav>
            </section>
            <Footer/>
        </>
    )
}
export default Profile