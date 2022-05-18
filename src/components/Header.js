import React from "react";
import Logo from "../img/HowlandSun.png";
import PropTypes from "prop-types";

function Header(props){
  return (
    <React.Fragment>
      <div id="header" className="grid grid-cols-2 rounded-b-3xl bg-gradient-to-t from-red-200/80 to-sky-100/80 px-1 py-1 ml-4">
      <div className="flex">
        <img className="h-20" src={Logo} alt="Howland Management Logo" />
      </div>
      <div className="flex justify-end mr-4">
        {/* <div className="flex items-center justify-center"> */}
          <button className="block text-orange-900 border-2 border-solid border-orange-900 bg-transparent hover:bg-gradient-to-t from-red-300 font-bold px-2 rounded-t-md mt-12 ml-2 mr-2" onClick={() => props.onHandleClick()}>Home</button>
        {/* </div>
        <div className="flex items-center justify-center"> */}
          <button className="block text-orange-900 border-2 border-solid border-orange-900 bg-transparent hover:bg-gradient-to-t from-red-300 font-bold px-2 rounded-t-md mt-12 ml-2 mr-2" onClick={() => props.onPropertySelection("Utah")}>Utah</button>
        {/* </div>
        <div className="flex items-center justify-center"> */}
          <button className="block text-orange-900 border-2 border-solid border-orange-900 bg-transparent hover:bg-gradient-to-t from-red-300 font-bold px-1 rounded-t-md mt-12 ml-2 mr-2" onClick={() => props.onPropertySelection("Sedona")}>Sedona</button>
        {/* </div>
        <div className="flex items-center justify-center"> */}
          <button className="block text-orange-900 border-2 border-solid border-orange-900 bg-transparent hover:bg-gradient-to-t from-red-300 font-bold px-1 rounded-t-md mt-12 ml-2 mr-2" onClick={() => props.onPropertySelection("Contact")}>Contact</button>
        </div>
      </div>
      {/* </div> */}
    </React.Fragment>
  );
}

Header.propTypes = {
  onPropertySelection: PropTypes.func,
  onHandleClick: PropTypes.func
}

export default Header;