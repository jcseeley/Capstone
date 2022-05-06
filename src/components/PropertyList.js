import React from "react";
import PropTypes from "prop-types";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function PropertyList(props) {

  return (
    <React.Fragment>
      <div className="grid grid-cols-2">
        <div className='justify-self-center border-2 border-solid border-orange-900 text-center w-3/4 ml-2 mt-2 mr-2 mb-2'>
          <h1 className="text-xl font-bold text-orange-900 mb-2 mt-2">Escalante, Utah</h1>
          <Carousel animationHandler="fade" autoPlay={true} infiniteLoop={true} swipeable={false}>
            <div>
              <img src="https://a0.muscache.com/im/pictures/1f966431-d498-4afc-94ac-e2ef6e2549c7.jpg?im_w=720" alt="test"/>
            </div>
            <div>
              <img src="https://a0.muscache.com/im/pictures/miso/Hosting-13466741/original/9bc5709e-6d82-4d60-bb2e-8651fee6803e.jpeg?im_w=720" alt="test"/>
            </div>
            <div>
              <img src="https://a0.muscache.com/im/pictures/miso/Hosting-13466741/original/2a0789e7-392c-4dc5-96da-19e8de99ce62.jpeg?im_w=720" alt="test"/>
            </div>
            <div>
              <img src="https://a0.muscache.com/im/pictures/miso/Hosting-13466741/original/0b4bcec8-3f54-474b-86b3-5294fee6b5da.jpeg?im_w=720" alt="test"/>
            </div>
            <div>
              <img src="https://a0.muscache.com/im/pictures/miso/Hosting-13466741/original/d27a015c-0ca7-4059-aef0-8021e5f392df.jpeg?im_w=720" alt="test"/>
            </div>
          </Carousel>
          <div className="flex justify-center">
            <button className="text-orange-900 border-2 border-solid border-orange-900 bg-orange-300 hover:bg-orange-200 font-bold py-2 px-4 rounded-full ml-2 mr-2 mb-2" onClick={() => props.onPropertySelection("Utah")}>View Utah Rentals</button>
          </div>
        </div>

        <div className='justify-self-center text-center w-3/4 ml-2 mt-2 mr-2'>
          <h1 className="text-xl font-bold text-orange-900">Sedona, Arizona</h1>
          <Carousel animationHandler="fade" autoPlay={true} infiniteLoop={true} swipeable={false}>
            <div>
              <img src="https://a0.muscache.com/im/pictures/fbb24b31-ea14-4677-9832-47623f2e6be8.jpg?im_w=720" alt="test"/>
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
            <button className="text-orange-900 border-2 border-solid border-orange-900 bg-orange-300 hover:bg-orange-200 font-bold py-2 px-4 rounded-full ml-2 mr-2 mb-2" onClick={() => props.onPropertySelection("Sedona")}>View Sedona Rentals</button>
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