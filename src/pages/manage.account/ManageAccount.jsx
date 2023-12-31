import  { useEffect, useState } from "react";
import WhiteHeader from "../../components/white.header/WhiteHeader";
import Footer from "../../components/footer/Footer";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {ToastContainer, toast} from "react-toastify"
import { getUserProfileData } from "../../redux/actions/unitsActions";
import { Helmet } from "react-helmet-async";
import "./ManageAccount.css"


const ManageAccount = ()=>{
    const {userProfile} = useSelector((state)=>state.unitsSlice)
    const dispatch = useDispatch()
    const {token} = useSelector((state)=> state.authSlice)

    useEffect(()=>{
        const cleanerUserProfileData = ()=>{
            dispatch(getUserProfileData(token))
        }
        return()=> cleanerUserProfileData()
    },[dispatch, token])
    const {user} = useSelector((state)=> state.authSlice)
    const [profilePhoto, setProfilePhoto] = useState("")
    const [profileUsername, SetProfileUsername] = useState("")
    const [profileBirthDay, setProfileBirthDay] = useState("")
    const [profileAddress, setProfileAddress] = useState("")

    const handleUpdateProfileData = async(e)=>{
        e.preventDefault()
        const formData = new FormData()
        formData.append("photo", profilePhoto)
        formData.append("username", profileUsername ? profileUsername : user.username)
        formData.append("address", profileAddress)
        formData.append("birthdate", profileBirthDay)
        try{
            const res = await axios.patch(`https://nestjs-now-saif3-osamakamelmohamed6-gmailcom.vercel.app/users/profile`,formData,
                            {
                                headers: {
                                    Authorization: `Bearer ${token}`
                                }
                        })
            toast.success("تم التعديل بنجاح")
            return res.data
        }catch(err){
            if(err.message === "Network Error"){
                toast.error("تأكد من اتصالك بالانترنت")
            }else if(err.response.data.errorMessage){
                toast.error(err.response.data.errorMessage)
            }
        }
    }
    return(
        <>
        <Helmet>
            <title>Egypt House | إدارة الحساب </title>
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
            <section className="manage-account-body container">
                <h1>تعديل الملف الشخصي</h1>
                <form onSubmit={(e)=>handleUpdateProfileData(e)}>
                        <div>
                            <label htmlFor="userLastName" >تغيير الصورة</label>
                            <input
                            id="userPhoto"
                            placeholder="تغيير الصورة"
                            type="file"
                            onChange={(e)=> setProfilePhoto(e.target.files[0])}
                            />
                        </div>
                        <div>
                            <label htmlFor="userUsername" >إسم المستخدم</label>
                            <input
                            id="userUsername"
                            placeholder={userProfile?.username}
                            type="text"
                            // required
                            onChange={(e)=>SetProfileUsername(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="userBirthDay" >تاريخ الميلاد</label>
                            <input
                            id="userBirthDay"
                            placeholder={userProfile?.birthdate && userProfile.birthdate}
                            type="date"
                            onChange={(e)=>setProfileBirthDay(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="userAddress" >العنوان</label>
                            <input
                            id="userAddress"
                            placeholder={userProfile?.address && userProfile?.address}
                            type="text"
                            onChange={(e)=>setProfileAddress(e.target.value)}
                            />
                        </div>
                        <button>تعديل</button>
                </form>
            </section>
            <Footer/>
        </>
    )
}
export default ManageAccount