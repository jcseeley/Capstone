import React from "react";
import Logo from "../img/HowlandSun.png";
import PropTypes from "prop-types";

function Header(props){
  return (
    <React.Fragment>
      <div id="header" className="grid grid-cols-2 rounded-b-3xl bg-gradient-to-t from-orange-200/70 to-red-200/70  px-1 py-1 ml-4">
        <div className="flex">
          <img className="h-20" src={Logo} alt="Howland Management Logo" />
        </div>
        <div className="flex justify-end mr-4">
          <button className="block h-8 text-orange-900 border-2 border-solid border-orange-900 bg-transparent hover:bg-gradient-to-t from-orange-200 font-bold px-2 rounded-md mt-10 ml-2 mr-2" onClick={() => props.onHandleClick()}>Home</button>
          <button className="block h-8 text-orange-900 border-2 border-solid border-orange-900 bg-transparent hover:bg-gradient-to-t from-orange-200 font-bold px-2 rounded-md mt-10 ml-2 mr-2" onClick={() => props.onPropertySelection("Overview")}>Properties</button>
          <button className="block h-8 text-orange-900 border-2 border-solid border-orange-900 bg-transparent hover:bg-gradient-to-t from-orange-200 font-bold px-2 rounded-md mt-10 ml-2 mr-2" onClick={() => props.onPropertySelection("Utah")}>Utah</button>
          <button className="block h-8 text-orange-900 border-2 border-solid border-orange-900 bg-transparent hover:bg-gradient-to-t from-orange-200 font-bold px-1 rounded-md mt-10 ml-2 mr-2" onClick={() => props.onPropertySelection("Sedona")}>Sedona</button>
          <button className="block h-8 text-orange-900 border-2 border-solid border-orange-900 bg-transparent hover:bg-gradient-to-t from-orange-200 font-bold px-1 rounded-md mt-10 ml-2 mr-2" onClick={() => props.onPropertySelection("Contact")}>Contact</button>
        </div>
      </div>
    </React.Fragment>
  );
}

Header.propTypes = {
  onPropertySelection: PropTypes.func,
  onHandleClick: PropTypes.func
}

export default Header;