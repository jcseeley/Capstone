import React from "react";

function SedonaHouse() {
  return (
    <React.Fragment>
      <div className="grid mt-24 ml-4 mr-4 mb-2">
        <div className="menu w-fit h-fit rounded-l-xl bg-gradient-to-t from-red-200/80 to-orange-200/80 text-zinc-800 border-2 border-solid border-orange-900 text-center font-medium items-center justify-self-auto mt-4 mr-4 px-2 py-2">
          <h1 className="font-bold underline">General Information</h1>
          <ul>
            <li onClick={() => document.getElementById('cancel').scrollIntoView({behavior: 'smooth'})}>Cancellation Policy</li>
            <li onClick={() => document.getElementById('refund').scrollIntoView({behavior: 'smooth'})}>Refund Policy</li>
            <li onClick={() => document.getElementById('occupancy').scrollIntoView({behavior: 'smooth'})}>Overnight Occupany</li>
            <li onClick={() => document.getElementById('otherGuests').scrollIntoView({behavior: 'smooth'})}>Other Guests</li>
            <li onClick={() => document.getElementById('visitors').scrollIntoView({behavior: 'smooth'})}>Visitors</li>
            <li>Pets & Service Animals</li>
            <li onClick={() => document.getElementById('internet').scrollIntoView({behavior: 'smooth'})}>Internet</li>
            <li onClick={() => document.getElementById('telephone').scrollIntoView({behavior: 'smooth'})}>Telephone</li>
            <li onClick={() => document.getElementById('cellPhone').scrollIntoView({behavior: 'smooth'})}>Cell Phones</li>
            <li>Amenities</li>
            <li>Check In</li>
            <li>Check Out</li>
            <li className="font-bold underline">Guest Information</li>
            <li onClick={() => document.getElementById('shoes').scrollIntoView({behavior: 'smooth'})}>Shoes</li>
            <li onClick={() => document.getElementById('trash').scrollIntoView({behavior: 'smooth'})}>Trash</li>
            <li onClick={() => document.getElementById('recycle').scrollIntoView({behavior: 'smooth'})}>Recycling</li>
            <li onClick={() => document.getElementById('landscaper').scrollIntoView({behavior: 'smooth'})}>Landscaper</li>
            <li onClick={() => document.getElementById('laundry').scrollIntoView({ behavior: 'smooth' })}>Fireplace</li>
            <li>Wildlife</li>
            <li onClick={() => document.getElementById('parking').scrollIntoView({behavior: 'smooth'})}>Parking</li>
            <li>Grocery Stores & Restaurants</li>
            <li onClick={() => document.getElementById('heat').scrollIntoView({behavior: 'smooth'})}>Heating</li>
            <li onClick={() => document.getElementById('ac').scrollIntoView({behavior: 'smooth'})}>Cooling</li>
            <li onClick={() => document.getElementById('laundry').scrollIntoView({behavior: 'smooth'})}>Laundry</li>
            <li onClick={() => document.getElementById('contact').scrollIntoView({behavior: 'smooth'})}>Contact</li>
            <li onClick={() => document.getElementById('guidedHikes').scrollIntoView({behavior: 'smooth'})}>Guided Hikes</li>
            <li>Hiking Recommendations</li>
            <li onClick={() => document.getElementById('emergency').scrollIntoView({behavior: 'smooth'})}>Emergency Information</li>
          </ul>
        </div>
        <div className="content rounded-l-xl justify-self-center bg-gradient-to-t from-red-200/80 to-orange-200/80 text-zinc-800 border-2 border-solid border-orange-900 text-center font-medium mt-4 ml-72 px-4">
          <h1 className="font-bold underline text-xl mb-2">Sedona House</h1>

          <h3 id="important" className="underline">Important Information</h3>
          <p className="mb-2">• Internet/cell, other unit on property, parking, occupany, cancellations/refunds, pets/service animals</p>

          <h3 id="cancel" className="underline">Cancellation Policy</h3>
          <p className="mb-2">• Cancellations for any reason prior to 30 days before the check in date will receive a full refund.</p>

          <h3 id="refund" className="underline">Refund Policy</h3>
          <p className="text-left mb-2">• There will be no refunds for power failures, weather related events, or non-functional equipment/appliances. We will make every possible effort to repair broken appliances/equipment, but make no guarantees. Refunds will only be issued per management's discretion.</p>

          <h3 id="occupancy" className="underline">Overnight Occupancy & Events</h3>
          <p className="text-left mb-2">• Our overnight occupancy is for the number of people on your confirmation only. More than just the occasional visitor requires permission from the owners. We do not allow organized special events or celebrations such as parties, weddings, receptions, camping, etc. If you are having one of these events, please contact us and we can recommend appropriate locations. Our place is not for RVs, trailers or pop up tents.</p>

          <h3 id="otherGuests" className="underline">Other Unit on Property</h3>
          <p className="text-left mb-2">• Please note there may be guests staying in an annexed studio from the main house. However, there should be no issues with privacy as these guests have their own parking space, and entrance. Additionally, we only rent to a maximum of 2 people. (Please see parking below for more info)</p>

          <h3 id="internet" className="underline">Internet</h3>
          <p className="text-left mb-2">• The only internet available in our area is satellite, which has limited data that may mean slow internet. We are trying to change providers but currently they are the only company that services the area. If you have any issues connecting or service is unusually slow, please let us know right away, the internet modem is located in the locked office. While the internet may run slow, we have not experienced connectivity issues with zoom and other video conferencing, however the video quality can be poor. If you are planning on streaming any movies or videos, we ask that you try and download as many as possible before arriving, though you can stream with some occasional buffering.</p>

          <h3 id="telephone" className="underline">Telephone</h3>
          <p className="text-left mb-2">• Phone number is 928-284-1422. The phone is on call forward to our cell phone, so that you do not receive the owner's personal calls. You may call out but no one will be able to call you. If you would like incoming calls, please contact Beverly (928-300-9857) and she can provide instructions.</p>

          <h3 id="cellPhone" className="underline">Cell Phones</h3>
          <p className="text-left mb-2">• Cells do not work well here in Jack's Canyon, but texting can usually get through even if calls cannot. If you have a newer smartphone; go to settings, then to phone, and turn the wifi calling on, and you can get texts at the house.</p>

          <h3 id="parking" className="underline">Parking</h3>
          <p className="text-left mb-2">• Please park in the right hand side parking spot, NOT the covered carport straight ahead. The carport is for the guests staying in the annexed studio in the west wing of the home (upper left). There is parking for one car only, additional cars will need to park on the street. When backing out of the driveway please be careful to stay on the pavement there is a ditch on one side that we would not want you to get into. Longwood is a horseshoe that will take you back to Valley Vista Road. Once you park, take the steps to the left and the path will take you straight to the front door. The front door has a covered entrance way and the door is made of solid wood.</p>

          <h3 id="shoes" className="underline">Shoes</h3>
          <p className="mb-2">• Please remove shoes before entering the house, especially on the carpets.</p>

          <h3 id="laundry" className="underline">Laundry</h3>
          <p className="text-left mb-2">• The laundry room is available for your use during your stay, however, it is also used by our cleaner when she is cleaning the annexed studio. If you find towels or sheets in the dryer, feel free to place them in the available basket, before continuing.</p>

          <h3 id="heat" className="underline">Heat</h3>
          <p className="text-left mb-2">• The upper thermostat in the kitchen, the thermostat in the sun room, and the thermostat in the bedroom is for the in-floor heat only. It is set at 68 degrees which will keep the floor and home warm. If you would like more heat please use the lower thermostat in the kitchen which regulates the forced heat unit.<span className="italic"> * If you adjust the upper thermostat in the kitchen, the sun room or the bedroom, it can take up to 24 hours for the heat to adjust. The lower forced heat is immediate.*</span></p>

          <h3 id="ac" className="underline">Air Conditioning</h3>
          <p className="text-left mb-2">• Use the bottom of the two thermostats in the kitchen for the air conditioning. Please do not leave windows open if air conditioning is on.</p>

          <h3 id="recycle" className="underline">Recycling</h3>
          <p className="mb-2">• Recycle almost anything; in Sedona proper at the end of Shelby drive.</p>

          <h3 id="trash" className="underline">Garbage</h3>
          <p className="text-left mb-2">• The garbage can is in the little enclosure in front of the carport. There is no garbage disposal. You may compost if desired, in the black bin in back yard, but please keep it latched.</p>

          <h3 id="visitors" className="underline">Visitors</h3>
          <p className="text-left mb-2">• Our overnight occupancy is for the number of people on your confirmation only. More than just the occasional visitor requires permission from the owners. We do not allow organized special events or celebrations such as parties, weddings, receptions, camping, etc. If you are having one of these events, please contact us and we can recommend appropriate locations.</p>

          <h3 id="landscaper" className="underline">Landscaper</h3>
          <p className="mb-2">• The landscaper comes every other week to mow the grass and clean up the yard and walkways.</p>

          <h3 id="guidedHikes" className="underline">Guided Hikes</h3>
          <p className="text-left mb-2">• For hikes off the beaten path in Sedona or the Grand Canyon, we recommend Sedona locals Mike Krajnak and Max Koepke at Southwest Outside
          www.southwestoutside.com dirtsedona@gmail.com @southwest_outside</p>

          <h3 id="fireplace" className="underline">Fireplace</h3>
          <p className="mb-2">• Fireplace: Damper is closed, please open before using.</p>

          <h3 id="emergency" className="underline">Emergency</h3>
          <p className="mb-2">• In emergency, shutoffs are:</p>
          <ul>
            <li>Water in green ground box on West side of home.</li>
            <li>Electric panel on the outside wall on the West side of home.</li>
            <li className="mb-2">Electric subpanel in utility room left of washing machine.</li>
          </ul>

          <h3 id="contact" className="underline">Contact Info</h3>
          <p className="mb-2">• If you need us:</p>
          <ul>
            <li>Katie: 928-301-9770</li>
            <li>Beverly: 928-300-9857</li>
            <li className="mb-2">Claudia: 928-963-4598</li>
          </ul>

        </div> 
      </div>
    </React.Fragment>
    
  )
}

export default SedonaHouse;