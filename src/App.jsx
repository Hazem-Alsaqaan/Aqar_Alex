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
import "./App.css";
import CustomToastify from "./components/custom_toastify/CustomToastify";

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

  const [mood, setMood] = useState("light")

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
      <CustomToastify/>
      <Routes>
        <Route path="/" element={<HomePage setMood = {setMood}/>}/>
        <Route path="/login" element={<Login/>}/>
        {/* بيـــــــــــــــــــــــــــــــــــــع */}
        <Route path="/selling" element={<Selling pageNumber = {pageNumber} setPageNumber = {setPageNumber} pageRoute = "selling"/>}>
          <Route index element={<HomeContent/>}/>
          <Route path="search" element={<SearchResult pageNumber = {pageNumber} setPageNumber = {setPageNumber} />}/>
          <Route path="/selling" element={<HomeContent/>}/>
        </Route>
        {/* إيجــــــــــــــــــــــــــــــــــــار */}
        <Route path="/rent" element={<Rent pageNumber = {pageNumber} setPageNumber = {setPageNumber} pageRoute = "rent"/>}>
          <Route index element={<HomeContent/>}/>
            <Route path="search" element={<SearchResult pageNumber = {pageNumber} setPageNumber = {setPageNumber}/>} />
            <Route path="/rent" element={<HomeContent/>}/>
        </Route>
        {/* تمويــــــــــــــــــل عقــــــــــــــــأري */}
        <Route path="/estate_finance" element={<EstateFinance pageNumber = {pageNumber} setPageNumber = {setPageNumber} pageRoute = "estate_finance"/>}>
          <Route index element={<HomeContent/>}/>
          <Route path="search" element={<SearchResult pageNumber = {pageNumber} setPageNumber = {setPageNumber}/>} />
          <Route path="/estate_finance" element={<HomeContent/>}/>
        </Route>
        <Route path="/register" element={<Register getEmailFromRegister ={getEmailFromRegister}/>}/>
        <Route path="/verifyCode" element={<VerifyCode registerMail ={registerMail}/>}/>
        <Route path="/sentCode" element={<SentCode getMailFromSentCode = {getMailFromSentCode}/>}/>
        <Route path="/confirmCode" element={<ConfirmCodeToRestPass email = {email} getCodeFromConfirmCode = {getCodeFromConfirmCode}/>}/>
        <Route path="/restPassword" element={<RestPassword email = {email} code = {code}/>}/>
        {/* <Route path="/showUnit/:unitId" element={<RequireAuth><React.Suspense fallback={mainPagesLoader}><ShowUnit/></React.Suspense></RequireAuth>}/> */}
        <Route path={"/selling/showUnit/:unitId"} element={<RequireAuth><React.Suspense fallback={mainPagesLoader}><ShowUnit/></React.Suspense></RequireAuth>}/>
        <Route path="/rent/showUnit/:unitId" element={<RequireAuth><React.Suspense fallback={mainPagesLoader}><ShowUnit/></React.Suspense></RequireAuth>}/>
        <Route path="/estate_finance/showUnit/:unitId" element={<RequireAuth><React.Suspense fallback={mainPagesLoader}><ShowUnit/></React.Suspense></RequireAuth>}/>
      </Routes>
    </div>
  );
}

export default App;
