import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./features/Login/Login";
import Signup from "./features/Signup/Signup";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        
          <div className="pages">
            <Routes>
              {/* <Route path="/" element={Home} /> */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
