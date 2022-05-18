import React from "react";

function SedonaHouse() {
  const test = document.querySelector('#test');
  return (
    <React.Fragment>
      <div className="grid grid-cols-4 mt-24 ml-4 mr-4 mb-2">
        <div className="menu col-span-1 justify-self-center w-fit h-fit rounded-3xl bg-gradient-to-t from-orange-100/90 to-red-200/90 text-orange-900 border-2 border-solid border-orange-900 text-center items-center justify center mt-4 ml-2 mr-4 px-2 py-2">
          <h1 className="font-bold underline">Rental Information</h1>
          <ul>
            <li className="font-bold underline">General</li>
            <ul>
              <li onClick={() => test.scrollIntoView({behavior: "smooth"})}>Cancellations</li>
              <li>Refunds</li>
              <li>Overnight Occupany</li>
              <li>Pets & Service Animals</li>
              <li>Internet</li>
              <li>Phone</li>
              <li>Amenities</li>
              <li>Check In & Check Out</li>
            </ul>
            <li className="font-bold underline">Guest Information</li>
            <ul>
              <li className="font-bold underline">Check-In</li>
              <li>Shoes</li>
              <li>Other Guests</li>
              <li>Trash & Recycling</li>
              <li>Landscaper</li>
              <li>Wildlife</li>
              <li>Parking</li>
              <li>Grocery Stores & Restaurants</li>
              <li>Heating & Cooling</li>
              <li>Laundry</li>
              <li>Contact</li>
              <li>Guided Hikes</li>
              <li>Hiking Recommendations</li>
              <li>Emergency Information</li>
            </ul>
          </ul>
        </div>
        <div className="content rounded-3xl w-3/4 justify-self-center bg-gradient-to-t from-orange-100/90 to-red-200/90 text-orange-900 border-2 border-solid border-orange-900 col-span-3 font-medium text-center ml-60 mt-4 px-4">
          <h1 className="font-bold underline text-center">Sedona House</h1>
          <h2 className="underline text-center">IMPORTANT</h2>
          <h3 className="text-center underline">Other Unit on Property</h3>
          <p>Please note there may be guests staying in an annexed studio from the main house. However, there should be no issues with privacy as these guests have their own parking space, and entrance. Additionally, we only rent to a maximum of 2 people. (Please see parking below for more info)</p><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          <p id="test">Internet/cell, other unit on property, parking, occupany, cancellations/refunds, pets/service animals</p><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          
        </div> 
      </div>
    </React.Fragment>
    
  )
}

export default SedonaHouse;