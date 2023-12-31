import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Login from "./pages/login/Login";
import { useState } from "react";
import HomeContent from "./components/home.content/HomeContent";
import Register from "./pages/register/Register";
import VerifyCode from "./pages/verify.code/VerifyCode";
import SentCode from "./pages/sent.code/SentCode";
import RestPassword from "./pages/rest.password/RestPassword";
import ConfirmCodeToRestPass from "./pages/confirm.code.rest.pass/ConfirmCodeToRestPass";
import SearchResult from "./components/search.result/SearchResult";
import Selling from "./pages/selling/Selling";
import EstateFinance from "./pages/estate_finance/EstateFinance";
import Rent from "./pages/rent/Rent";
import { RotatingLines } from "react-loader-spinner";
import RequireAuth from "./components/require.auth/RequireAuth";
const ShowUnit = React.lazy(()=>import("./pages/show.unit/ShowUnit"))
import Profile from "./pages/profile/Profile";
import TirmsOfUse from "./pages/tirms.of.use/TirmsOfUse";
import PrivacyPolicy from "./pages/privacy.policy/PrivacyPolicy";
import ManageAccount from "./pages/manage.account/ManageAccount";
import ChangePassword from "./pages/change.password/ChangePassword";
const PreviewBookings = React.lazy(()=>import("./pages/preview_bookings/PreviewBookings"))
const RentBookings = React.lazy(()=>import("./pages/rent_bookings/RentBookings"))
const MyFavourite = React.lazy(()=>import("./pages/my.favourite/MyFavourite"))
const MyUnits = React.lazy(()=>import("./pages/my.units/MyUnits"))
import HouseReservations from "./pages/house.reservations/HouseReservations";
const ShowYourApartment = React.lazy(()=>import("./pages/show.your.apartment/ShowYourApartment"))
import "./App.css";
import { useSelector } from "react-redux";

function App() {
  // spinner loader pages to add fallback
  const mainPagesLoader = <div className="main-pages-loading-spinner">
                            <RotatingLines
                              strokeColor="#FF3D00"
                              strokeWidth="5"
                              animationDuration="0.75"
                              width="100"
                              visible={true}
                              />
                          </div>
  // ################################################################### //

  // const [mood, setMood] = useState("light")
  const {mood} = useSelector((state)=>state.toggleSlice)
  const [email, setEmail] = useState("")
  const [registerMail, setRegisterMail] = useState("")
  const [code, setCode] = useState("")
  const [pageNumber, setPageNumber] = useState(1)

  const getMailFromSentCode = (mail)=>{
    setEmail(mail)
  }
  const getCodeFromConfirmCode = (theCode)=>{
    setCode(theCode)
  }
  const getEmailFromRegister = (mail)=>{
    setRegisterMail(mail)
  }
  return (
    <div className={mood === "dark" ? "App dark_mood" : "App"}>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<Login/>}/>
        {/* بيـــــــــــــــــــــــــــــــــــــع */}
        <Route path="/selling" element={<Selling pageNumber = {pageNumber} setPageNumber = {setPageNumber} pageRoute = "selling"/>}>
          <Route index element={<HomeContent homeContentTitle = "أحدث الشقق للبيع"/>}/>
          <Route path="search" element={<SearchResult pageNumber = {pageNumber} setPageNumber = {setPageNumber} />}/>
          <Route path="/selling" element={<HomeContent />}/>
        </Route>
        {/* إيجــــــــــــــــــــــــــــــــــــار */}
        <Route path="/rent" element={<Rent pageNumber = {pageNumber} setPageNumber = {setPageNumber} pageRoute = "rent"/>}>
          <Route index element={<HomeContent homeContentTitle = "أكثر الشقق إيجارا لهذا الشهر"/>}/>
            <Route path="search" element={<SearchResult pageNumber = {pageNumber} setPageNumber = {setPageNumber}/>} />
            <Route path="/rent" element={<HomeContent />}/>
        </Route>
        {/* تمويــــــــــــــــــل عقــــــــــــــــأري */}
        <Route path="/estate_finance" element={<EstateFinance pageNumber = {pageNumber} setPageNumber = {setPageNumber} pageRoute = "estate_finance"/>}>
          <Route index element={<HomeContent homeContentTitle = "أحدث الشقق المضافه"/>}/>
          <Route path="search" element={<SearchResult pageNumber = {pageNumber} setPageNumber = {setPageNumber}/>} />
          <Route path="/estate_finance" element={<HomeContent />}/>
        </Route>
        {/* Authentications */}
        <Route path="/register" element={<Register getEmailFromRegister ={getEmailFromRegister}/>}/>
        <Route path="/verifyCode" element={<VerifyCode registerMail ={registerMail}/>}/>
        <Route path="/sentCode" element={<SentCode getMailFromSentCode = {getMailFromSentCode}/>}/>
        <Route path="/confirmCode" element={<ConfirmCodeToRestPass email = {email} getCodeFromConfirmCode = {getCodeFromConfirmCode}/>}/>
        <Route path="/restPassword" element={<RestPassword email = {email} code = {code}/>}/>
        {/* show single units by main route  ( selling - rent - estate_finance )   */}
        <Route path={"/selling/showUnit/:unitId"} element={<RequireAuth><React.Suspense fallback={mainPagesLoader}><ShowUnit/></React.Suspense></RequireAuth>}/>
        <Route path="/rent/showUnit/:unitId" element={<RequireAuth><React.Suspense fallback={mainPagesLoader}><ShowUnit/></React.Suspense></RequireAuth>}/>
        <Route path="/estate_finance/showUnit/:unitId" element={<RequireAuth><React.Suspense fallback={mainPagesLoader}><ShowUnit/></React.Suspense></RequireAuth>}/>
        {/* bookings routes ( preview_bookings - rent_bookings ) */}
        <Route path="preview_bookings" element={<RequireAuth><React.Suspense fallback={mainPagesLoader}><PreviewBookings/></React.Suspense></RequireAuth>}/>
        <Route path="rent_bookings" element={<RequireAuth><React.Suspense fallback={mainPagesLoader}><RentBookings/></React.Suspense></RequireAuth>}/>
        {/* favourites route */}
        <Route path="/myFavourite" element={<RequireAuth><React.Suspense fallback={mainPagesLoader}><MyFavourite/></React.Suspense></RequireAuth>}/>
        {/* profile */}
        <Route path="/profile" element={<RequireAuth><Profile/></RequireAuth>}/>
        {/* privacy and tirm */}
        <Route path="/tirms-of-use" element={<RequireAuth><TirmsOfUse/></RequireAuth>}/>
        <Route path="/privacy-policy" element={<RequireAuth><PrivacyPolicy/></RequireAuth>}/>
        {/* change password and manage account */}
        <Route path="/manageAccount" element={<RequireAuth><ManageAccount/></RequireAuth>}/>
        <Route path="/changePassword" element={<RequireAuth><ChangePassword/></RequireAuth>}/>
        {/* my units {الشقق المعروضة} */}
        <Route path="/myUnits" element={<RequireAuth><React.Suspense fallback={mainPagesLoader}><MyUnits/></React.Suspense></RequireAuth>}/>
        <Route path="/myUnits/:unitId" element={<RequireAuth><HouseReservations/></RequireAuth>}/>
        {/* add new apartment */}
        <Route path="/showYourApartment" element={<RequireAuth><React.Suspense fallback={mainPagesLoader}><ShowYourApartment/></React.Suspense></RequireAuth>}/> <Route path="/showYourApartment" element={<RequireAuth><React.Suspense fallback={mainPagesLoader}><ShowYourApartment/></React.Suspense></RequireAuth>}/>
      </Routes>
    </div>
  );
}

export default App;
