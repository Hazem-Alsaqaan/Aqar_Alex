import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import "./App.css";
import Selling from "./pages/selling/Selling";
import Buying from "./pages/buying/Buying";
import MortgageFinancing from "./pages/mortgage_financing/MortgageFinancing";
import Login from "./pages/login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/selling" element={<Selling/>}/>
        <Route path="/buying" element={<Buying/>}/>
        <Route path="/mortgage_financing" element={<MortgageFinancing/>}/>
      </Routes>
    </div>
  );
}

export default App;
