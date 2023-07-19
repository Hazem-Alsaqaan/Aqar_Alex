import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import "./App.css";
import Selling from "./pages/selling/Selling";
import Buying from "./pages/buying/Buying";
import MortgageFinancing from "./pages/mortgage_financing/MortgageFinancing";
import Login from "./pages/login/Login";
import { useState } from "react";
import HomeContent from "./components/home.content/HomeContent";
import Register from "./pages/register/Register";
import VerifyCode from "./pages/verify.code/VerifyCode";
import SentCode from "./pages/sent.code/SentCode";
import RestPassword from "./pages/rest.password/RestPassword";
import ConfirmCodeToRestPass from "./pages/confirm.code.rest.pass/ConfirmCodeToRestPass";

function App() {
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
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/selling" element={<Selling pageNumber = {pageNumber} setPageNumber = {setPageNumber}/>}>
          <Route index element={<HomeContent/>}/>
          <Route path="/selling" element={<HomeContent/>}/>
        </Route>
        <Route path="/buying" element={<Buying/>}/>
        <Route path="/mortgage_financing" element={<MortgageFinancing/>}/>
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
