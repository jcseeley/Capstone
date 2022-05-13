import React from "react";
import Logo from "../img/Howland2Suns.png";

function Header(props){
  return (
    <React.Fragment>
      {/* <div id="header" className="flex justify-center"> */}
        {/* <div className="flex w-11/12"> */}
          <div className="flex items-center justify-center">
            <img className="w-2/3" src={Logo} alt="Howland Management Logo" />
          </div>
          <div className="grid grid-cols-3 items-center justify-center">
              <div className="flex items-center justify-center">
          <button className="block text-orange-900 border-2 border-solid border-orange-900 bg-transparent hover:bg-gradient-to-t from-red-200 font-bold px-6 rounded ml-2 mr-2 mb-4" onClick={() => props.onPropertySelection("Utah")}>Utah</button>
          </div>
          <div className="flex items-center justify-center">
          <button className="block text-orange-900 border-2 border-solid border-orange-900 bg-transparent hover:bg-gradient-to-t from-red-200 font-bold px-4 rounded ml-2 mr-2 mb-4" onClick={() => props.onPropertySelection("Sedona")}>Sedona</button>
          </div>
          <div className="flex items-center justify-center">
          <button className="block text-orange-900 border-2 border-solid border-orange-900 bg-transparent hover:bg-gradient-to-t from-red-200 font-bold px-4 rounded ml-2 mr-2 mb-4" onClick={() => props.onPropertySelection("Contact")}>Contact</button>
          </div>
          </div>
        {/* </div> */}
      {/* </div> */}
    </React.Fragment>
  );
}

export default Header;