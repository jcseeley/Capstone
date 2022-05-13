import React from "react";
import Logo from "../img/HowlandTransparent.png";

function Header(){
  return (
    <React.Fragment>
      <div className="flex justify-center">
        <div className="flex w-11/12">
          <div className="flex items-center justify-left">
            <img className="w-1/4 border-2 border-solid border-orange-900 mt-2 mb-2" src={Logo} alt="Howland Management Logo" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;