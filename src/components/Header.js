import React from "react";
import Logo from "../img/HowlandLogo.svg";

function Header(){
  return (
    <React.Fragment>
      <div className="flex items-center justify-center bg-orange-900">
        <img className="h-84" src={Logo} alt="Howland Management Logo" />
      </div>
      <hr />
    </React.Fragment>
  );
}

export default Header;