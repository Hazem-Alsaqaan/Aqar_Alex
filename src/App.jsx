import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import "./App.css";
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
import Rent from "./pages/buying/Rent";

function App() {
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
      </Routes>
    </div>
  );
}

export default App;
