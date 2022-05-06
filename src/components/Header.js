import React from "react";
import Logo from "../img/HowlandBigger.svg";

function Header(){
  return (
    <React.Fragment>
      <div className="flex">
      <div className="flex w-3/4 items-center justify-left">
        <img className="h-48 border-2 border-solid border-orange-900 mt-2 mb-2 ml-2 mr-2" src={Logo} alt="Howland Management Logo" />
      </div>
      </div>
      <hr />
    </React.Fragment>
  );
}

export default Header;