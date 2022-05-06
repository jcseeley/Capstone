import React from "react";
import Logo from "../img/HowlandBigger.svg";

function Header(){
  return (
    <React.Fragment>
      <div className="flex items-center justify-left">
        <img className="h-56" src={Logo} alt="Howland Management Logo" />
      </div>
      <hr />
    </React.Fragment>
  );
}

export default Header;