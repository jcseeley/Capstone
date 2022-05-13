import React from "react";
import Logo from "../img/Howland2Suns.png";

function Header(props){
  return (
    <React.Fragment>
      <div className="flex items-center justify-center mb-4">
        <img className="h-32" src={Logo} alt="Howland Management Logo" />
      </div>
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center">
          <button className="block text-orange-900 border-2 border-solid border-orange-900 bg-transparent hover:bg-gradient-to-t from-red-300 font-bold px-2 rounded-full ml-2 mr-2 mb-2" onClick={() => props.onPropertySelection("Home")}>Home</button>
        </div>
        <div className="flex items-center justify-center">
          <button className="block text-orange-900 border-2 border-solid border-orange-900 bg-transparent hover:bg-gradient-to-t from-red-300 font-bold px-2 rounded-full ml-2 mr-2 mb-2" onClick={() => props.onPropertySelection("Utah")}>Utah</button>
        </div>
        <div className="flex items-center justify-center">
          <button className="block text-orange-900 border-2 border-solid border-orange-900 bg-transparent hover:bg-gradient-to-t from-red-300 font-bold px-1 rounded-full ml-2 mr-2 mb-2" onClick={() => props.onPropertySelection("Sedona")}>Sedona</button>
        </div>
        <div className="flex items-center justify-center">
          <button className="block text-orange-900 border-2 border-solid border-orange-900 bg-transparent hover:bg-gradient-to-t from-red-300 font-bold px-1 rounded-full ml-2 mr-2 mb-2" onClick={() => props.onPropertySelection("Contact")}>Contact</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;