import React from "react";
import Logo from "../img/HowlandTransparent.png";

function Header(){
  return (
    <React.Fragment>
      <div className="flex justify-center shadow-md">
        <div className="flex w-11/12">
          <div className="flex w-3/4 items-center justify-left">
            <img className="h-40 border-2 border-solid border-orange-900 mt-2 mb-2" src={Logo} alt="Howland Management Logo" />
          </div>
        </div>
      </div>
      <hr />
    </React.Fragment>
  );
}

export default Header;