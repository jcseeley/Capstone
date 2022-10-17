import React from "react";
import { Link } from "react-router-dom";

function UtahControl() {
  return(
    <div>
    <h1 className="text-center font-bold underline mt-24">Utah</h1>
    <ul className="text-center">
    <li><Link to="/UtahHouse" className="text-center">House</Link></li>
    <li><Link to="/UtahBarn" className="text-center">Barn</Link></li>
    </ul>
    </div>
  )
}
export default UtahControl;