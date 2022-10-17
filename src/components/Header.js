import React from "react";
import Logo from "../img/HowlandSun.png";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Header(props){
  return (
    <React.Fragment>
      <div className="navbar rounded-b-3xl fixed top-0 z-50 bg-gradient-to-t from-orange-200 to-red-200">
        <div className="h-10 2xl:h-18 xl:h-16 lg:h-14 md:h-12 sm:h-10">
          <Link to='/' className="h-full"><img className="h-full" src={Logo} alt="Howland Management Logo" /></Link>
        </div>
        <div className="dropdown dropdown-hover justify-self-end">
          <label tabIndex="0" className="btn btn-xs m-1">Menu</label>
          <ul tabIndex="0" className="dropdown-content menu shadow bg-base-100 rounded-box  justify-end">
            <li><Link to='/'>Home</Link></li>
            <li><Link to="/Properties">Properties</Link></li>
            <li><Link to='/Sedona'>Sedona</Link></li>
            <li><Link to='/Utah'>Utah</Link></li>
          </ul>
        </div>
      </div>
      {/* <div id="header" className="flex grid grid-cols-2 rounded-b-3xl bg-gradient-to-t from-orange-200/70 to-red-200/70  px-1 py-1">
        <div className="flex">
          <img className="h-20" src={Logo} alt="Howland Management Logo" />
        </div>
        <div className="flex justify-end mr-4">
          <Link to="/" className="block h-8 text-orange-900 border-2 border-solid border-orange-900 bg-transparent hover:bg-gradient-to-t from-orange-200 font-bold px-2 rounded-md mt-10 ml-2 mr-2">Home</Link>
          <Link to="PropertyList" className="block h-8 text-orange-900 border-2 border-solid border-orange-900 bg-transparent hover:bg-gradient-to-t from-orange-200 font-bold px-2 rounded-md mt-10 ml-2 mr-2">Properties</Link>
          <Link to="/Utah" className="block h-8 text-orange-900 border-2 border-solid border-orange-900 bg-transparent hover:bg-gradient-to-t from-orange-200 font-bold px-2 rounded-md mt-10 ml-2 mr-2">Utah</Link>
          <Link to="Sedona" className="block h-8 text-orange-900 border-2 border-solid border-orange-900 bg-transparent hover:bg-gradient-to-t from-orange-200 font-bold px-2 rounded-md mt-10 ml-2 mr-2">Sedona</Link>
          <button className="block h-8 text-orange-900 border-2 border-solid border-orange-900 bg-transparent hover:bg-gradient-to-t from-orange-200 font-bold px-1 rounded-md mt-10 ml-2 mr-2" onClick={() => props.onPropertySelection("Contact")}>Contact</button>
        </div>
      </div> */}
    </React.Fragment>
  );
}

Header.propTypes = {
  onPropertySelection: PropTypes.func,
  onHandleClick: PropTypes.func
}

export default Header;