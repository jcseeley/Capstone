import React from "react";
import PropTypes from "prop-types";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function PropertyList(props) {

  return (
    <React.Fragment>
      <div className="grid grid-cols-2">
        <div className='justify-self-center w-1/2 ml-2 mt-2 mr-2'>
          <Carousel animationHandler="fade" autoPlay={true} infiniteLoop={true} swipeable={false}>
            <div>
              <img src="https://a0.muscache.com/im/pictures/miso/Hosting-21255496/original/6ca2f653-058f-4e19-8d01-6a8406f6683e.jpeg?im_w=1200" alt="test"/>
            </div>
            <div>
              <img src="https://a0.muscache.com/im/pictures/miso/Hosting-21255496/original/ce2b213d-d1b5-4872-8fc5-70490e32c4b0.jpeg?im_w=1200" alt="test"/>
            </div>
            <div>
              <img src="https://a0.muscache.com/im/pictures/miso/Hosting-21255496/original/965ca84d-4a42-47aa-b9fd-ed100c45f417.jpeg?im_w=1200" alt="test"/>
            </div>
          </Carousel>
          <div className="flex justify-center">
            <button className="text-orange-900 border-2 border-solid border-orange-900 bg-orange-300 hover:bg-orange-200 font-bold py-2 px-4 rounded-full mt-2 ml-2 mr-2" onClick={() => props.onPropertySelection("Utah")}>View Utah Rentals</button>
          </div>
        </div>

        <div className='justify-self-center w-1/2 ml-2 mt-2 mr-2'>
          <Carousel animationHandler="fade" autoPlay={true} infiniteLoop={true} swipeable={false}>
            <div>
              <img src="https://a0.muscache.com/im/pictures/miso/Hosting-21255496/original/6ca2f653-058f-4e19-8d01-6a8406f6683e.jpeg?im_w=1200" alt="test"/>
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <img src="https://a0.muscache.com/im/pictures/miso/Hosting-21255496/original/ce2b213d-d1b5-4872-8fc5-70490e32c4b0.jpeg?im_w=1200" alt="test"/>
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <img src="https://a0.muscache.com/im/pictures/miso/Hosting-21255496/original/965ca84d-4a42-47aa-b9fd-ed100c45f417.jpeg?im_w=1200" alt="test"/>
              <p className="legend">Legend 3</p>
            </div>
          </Carousel>
          <div className="flex justify-center">  
            <button className="text-orange-900 border-2 border-solid border-orange-900 bg-red-300 hover:bg-red-200 font-bold py-2 px-4 rounded-full mt-2 ml-2 mr-2 mb-2" onClick={() => props.onPropertySelection("Sedona")}>View Sedona Rentals</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

PropertyList.propTypes = {
  onPropertySelection: PropTypes.func
};

export default PropertyList;