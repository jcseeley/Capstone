import React from "react";
import PropTypes from "prop-types";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function PropertyList(props) {

  return (
    <React.Fragment>
      <div className="grid grid-cols-2 mt-2">
        <div className='justify-self-center text-center w-3/4 max-w-xl ml-2 mt-4 mr-2 mb-4 px-2'>
          <Carousel className="border-2 border-solid border-orange-900" animationHandler="fade" autoPlay={true} infiniteLoop={true} swipeable={false} showThumbs={false}>
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
          <div className="rounded-3xl bg-gradient-to-t from-orange-200/90 to-red-200/90 text-orange-900 border-2 border-solid border-orange-900 mt-4">
          <h1 className="text-xl font-bold text-orange-900 mb-2 pt-2">Escalante, Utah</h1>
          <p className="text-sm mb-4 ml-2 mr-2 px-4">Tucked in between large cottonwood shade trees with views on all sides of Escalante Canyon, lush meadows, rock cliffs, and a serene river. Hike right from the house to first class scenic wonders. Natural beauty lies right out the front door and within an hour's drive. Look for deer and wild turkey in the meadow in the mornings and evenings and watch the cloud shadows change over the canyon walls. Head up or down the canyon into rugged wilderness, and return home to comfort.</p>
          <div className="flex justify-center">
            <button className="block text-orange-900 border-2 border-solid border-orange-900 bg-orange-300 hover:bg-gradient-to-t from-orange-300 to-orange-200 font-bold py-2 px-4 rounded ml-2 mr-2 mb-4" onClick={() => props.onPropertySelection("Utah")}>Utah Rentals</button>
          </div>
          </div>
        </div>

        <div className='justify-self-center text-center w-3/4 max-w-xl ml-2 mt-4 mr-2 mb-4 px-2'>
        <Carousel className="border-2 border-solid border-orange-900" animationHandler="fade" autoPlay={true} infiniteLoop={true} swipeable={false} showThumbs={false}>
            <div>
              <img src="https://a0.muscache.com/im/pictures/fbb24b31-ea14-4677-9832-47623f2e6be8.jpg?im_w=720" alt="test"/>
            </div>
            <div>
              <img src="https://a0.muscache.com/im/pictures/miso/Hosting-21255496/original/ce2b213d-d1b5-4872-8fc5-70490e32c4b0.jpeg?im_w=1200" alt="test"/>
            </div>
            <div>
              <img src="https://a0.muscache.com/im/pictures/miso/Hosting-21255496/original/965ca84d-4a42-47aa-b9fd-ed100c45f417.jpeg?im_w=1200" alt="test"/>
            </div>
          </Carousel>
          <div className="rounded-3xl bg-gradient-to-t from-red-200/90 to-orange-200/90 text-orange-900 border-2 border-solid border-orange-900 mt-4">
          <h1 className="text-xl font-bold text-orange-900 mb-2 pt-2">Sedona, Arizona</h1>
          <p className="text-sm mb-4 ml-2 mr-2 px-4">This arts & crafts inspired home has been our personal residence for over 30 years. The exterior is Japanese & Southwest inspired, set in an oasis of mature landscaping and lush greenery. In this tranquility, we see an abundance of local wildlife including javalina, quail, and even the occasional bobcat. World class hiking begin just minutes from the front door. Gourmet restaurants, spas, galleries, and bike rentals can be found in the nearby Village of Oak Creek.</p>
          <div className="flex justify-center">  
            <button className="block text-orange-900 border-2 border-solid border-orange-900 bg-red-300 hover:bg-gradient-to-t from-red-300 to-red-200 font-bold py-2 px-4 rounded ml-2 mr-2 mb-4" onClick={() => props.onPropertySelection("Sedona")}>Sedona Rentals</button>
          </div>
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