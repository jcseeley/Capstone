import React from "react";
import Logo from "../img/Howland2Suns.png";

function Header(){
  return (
    <React.Fragment>
      <div id="header" className="flex justify-center">
        {/* <div className="flex w-11/12"> */}
          <div className="flex items-center justify-center">
            <img className="w-5/6" src={Logo} alt="Howland Management Logo" />
          </div>
        {/* </div> */}
      </div>
    </React.Fragment>
  );
}

export default Header;