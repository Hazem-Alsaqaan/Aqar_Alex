import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import "./App.css";
import Selling from "./pages/selling/Selling";
import Buying from "./pages/buying/Buying";
import MortgageFinancing from "./pages/mortgage_financing/MortgageFinancing";
import Login from "./pages/login/Login";
import { useState } from "react";
import HomeContent from "./components/home.content/HomeContent";

function App() {
  const [pageNumber, setPageNumber] = useState(1)

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
      </Routes>
    </div>
  );
}

export default App;
