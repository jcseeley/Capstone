import React from "react";
import Header from "./Header";
import Home from "./Home";
import PropertyList from "./PropertyList";
import SedonaControl from "./SedonaControl";
import SedonaHouse from "./SedonaHouse";
import SedonaStudio from "./SedonaStudio";
import UtahControl from "./UtahControl";
import UtahHouse from "./UtahHouse";
import UtahBarn from "./UtahBarn";
import { Routes, Route } from "react-router-dom";

export const AuthContext = React.createContext();

// const initialState = {
//   isAuthenticated: false, 
//   user: null,
//   token: null
// };

function App(){
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Properties" element={<PropertyList />} />
        <Route path="/Sedona" element={<SedonaControl />} />
        <Route path="/SedonaHouse" element={<SedonaHouse />} />
        <Route path="/SedonaStudio" element={<SedonaStudio />} />
        <Route path="/Utah" element={<UtahControl />} />
        <Route path="/UtahHouse" element={<UtahHouse />} />
        <Route path="/UtahBarn" element={<UtahBarn />} />
      </Routes>
    </>
  )
}

export default App;