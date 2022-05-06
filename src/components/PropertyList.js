import React from "react";
import PropTypes from "prop-types";

function PropertyList(props) {

  return (
    <React.Fragment>
      <div className="grid grid-cols-2">
        <div className="flex justify-center">  
          <button className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded-full mt-2 ml-2 mr-2" onClick={() => props.onPropertySelection("Utah")}>View Utah Rentals</button>
        </div>
        <div className="flex justify-center">  
          <button className="bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-full mt-2 ml-2 mr-2" onClick={() => props.onPropertySelection("Sedona")}>View Sedona Rentals</button>
        </div>
      </div>
    </React.Fragment>
  );
}

PropertyList.propTypes = {
  onPropertySelection: PropTypes.func
};

export default PropertyList;