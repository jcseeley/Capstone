import React from "react";
import { Link } from "react-router-dom";

function PropertyList() {

  return (
    <React.Fragment>
      <div className="h-screen pt-10">
        <div className="h-full w-full border border-solid">
          <div className="h-1/2 px-1">
            <div className="carousel carousel-center w-full h-full">
              {/* UT House */}
              <div className="carousel-item w-full">
                <img id='utah1' className="object-scale-down" src="https://a0.muscache.com/im/pictures/miso/Hosting-13466741/original/75814c31-3f40-4cf9-b282-f31387c2a855.jpeg?im_w=1200" alt="test"/>
              </div>
              
              <div className="carousel-item h-full w-full m-1">
                <img className="object-scale-down" src="https://a0.muscache.com/im/pictures/1f966431-d498-4afc-94ac-e2ef6e2549c7.jpg?im_w=720" alt="test"/>
              </div>

              <div className="carousel-item h-full w-full m-1">
                <img className="object-scale-down" src="https://a0.muscache.com/im/pictures/miso/Hosting-13466741/original/c41089df-9a00-4f35-9273-8d002e4f2e7c.jpeg?im_w=1200" alt="test"/>
              </div>

              <div className="carousel-item h-full w-full m-1">
                <img className="object-scale-down" src="https://a0.muscache.com/im/pictures/miso/Hosting-13466741/original/c168df81-a0d9-4d70-b870-a12738ad0dc0.jpeg?im_w=1200" alt="test"/>
              </div>

              <div className="carousel-item h-full w-full m-1">
                <img className="object-scale-down" src="https://a0.muscache.com/im/pictures/miso/Hosting-13466741/original/224b07ce-9310-4d8e-9711-19992468a390.jpeg?im_w=1200" alt="test"/>
              </div>

              {/* UT Barn */}

              <div className="carousel-item h-full w-full m-1">
                <img className="object-scale-down" src="https://a0.muscache.com/im/pictures/miso/Hosting-53363997/original/e1694bc5-b63d-49a6-94c2-6c42d6c7a002.jpeg?im_w=960" alt="test"/>
              </div>

              <div className="carousel-item h-full w-full m-1">
                <img className="object-scale-down" src="https://a0.muscache.com/im/pictures/miso/Hosting-53363997/original/7fb34169-5476-4982-99b7-b8cad3ebba29.jpeg?im_w=1200" alt="test"/>
              </div>

              <div className="carousel-item h-full w-full m-1">
                <img className="object-scale-down" src="https://a0.muscache.com/im/pictures/miso/Hosting-53363997/original/80a3b1ed-ccd1-45e4-8734-d0a5459d75b1.jpeg?im_w=1200" alt="test"/>
              </div>

              <div className="carousel-item h-full w-full m-1">
                <img className="object-scale-down" src="https://a0.muscache.com/im/pictures/miso/Hosting-53363997/original/570dce0b-28da-4e66-96a2-09b9daeb9d88.jpeg?im_w=1200" alt="test"/>
              </div>

              <div className="carousel-item h-full w-full m-1">
                <img className="object-scale-down" src="https://a0.muscache.com/im/pictures/miso/Hosting-53363997/original/af9fc3b0-f7e8-4117-95f1-bc4d277bc21a.jpeg?im_w=1200" alt="test"/>
              </div>

              <div className="carousel-item h-full w-full m-1">
                <img className="object-scale-down" src="https://a0.muscache.com/im/pictures/miso/Hosting-53363997/original/08683a87-b5db-41e4-a883-13a5f4b1695c.jpeg?im_w=1200" alt="test"/>
              </div>

              <div className="carousel-item h-full w-full m-1">
                <img className="object-scale-down" src="https://a0.muscache.com/im/pictures/miso/Hosting-53363997/original/04effbc8-873a-4f78-b149-ca23c683a45d.jpeg?im_w=1200" alt="test"/>
              </div>

              <div className="carousel-item h-full w-full m-1">
                <img className="object-scale-down" src="https://a0.muscache.com/im/pictures/miso/Hosting-53363997/original/d050401c-eea0-4c7d-9c7c-94eb1a63675e.jpeg?im_w=1200" alt="test"/>
              </div>

              <div className="carousel-item h-full w-full m-1">
                <img className="object-scale-down" src="https://a0.muscache.com/im/pictures/miso/Hosting-53363997/original/0e5b8cc5-98e9-4298-a13a-c0a13473e028.jpeg?im_w=1200" alt="test"/>
              </div>

              <div className="carousel-item h-full w-full m-1">
                <img className="object-scale-down" src="https://a0.muscache.com/im/pictures/miso/Hosting-53363997/original/7ac2e9c5-84b3-47b0-ac1a-d0e605812776.jpeg?im_w=1200" alt="test"/>
              </div>

              <div className="carousel-item h-full w-full m-1">
                <img className="object-scale-down" src="https://a0.muscache.com/im/pictures/miso/Hosting-53363997/original/1970b815-0b4e-4aef-ac7a-652179cdc3cd.jpeg?im_w=1200" alt="test"/>
              </div>

              <div className="carousel-item h-full w-full m-1">
                <img className="object-scale-down" src="https://a0.muscache.com/im/pictures/miso/Hosting-53363997/original/6ff9ceb2-9b65-48da-964f-e9b3d5aeb7bc.jpeg?im_w=1200" alt="test"/>
              </div>
            </div>
          </div>
          {/* <div className="flex justify-center w-full">
            <a href='#utah1' className="btn btn-circle btn-xs"></a>
          </div> */}
        
          <div className="rounded-xl bg-gradient-to-t from-orange-200/80 to-red-200/90 text-orange-900 border-2 border-solid border-orange-900 m-1">
            <h1 className="text-center font-bold text-orange-900 py-1">Escalante, Utah</h1>
            <p className="text-xs mb-1 px-2">Tucked in between large cottonwood shade trees with views on all sides of Escalante Canyon, a sprawling meadow, redrock cliffs, and a serene river. Hike right from the house across 40 acres of first class scenic wonders. Sit on the deck and watch for deer and wild turkey wandering the meadow as the cloud shadows change over the canyon walls in the evening. Head up or down the canyon into rugged wilderness, and return home to comfort.</p>
            <div className="flex justify-center">
              <Link to="/Utah" className="btn btn-xs text-orange-900 border-2 border-solid border-orange-900 bg-orange-300 hover:bg-gradient-to-t from-orange-300 to-orange-200 font-bold px-2 rounded ml-2 mr-2 mb-1">Utah Rentals</Link>
            </div>
          </div>
        </div>
        {/* </div> */}

        {/* <div className='justify-self-center text-center ml-2 mt-4 mr-2 mb-4 px-2'>
        <Carousel className="border-2 border-solid border-orange-900" animationHandler="fade" autoPlay={true} infiniteLoop={true} swipeable={false} showThumbs={false} interval={5000}>
            <div>
              <img src="https://a0.muscache.com/im/pictures/fbb24b31-ea14-4677-9832-47623f2e6be8.jpg?im_w=720" alt="test"/>
            </div>
            <div>
              <img src="https://a0.muscache.com/im/pictures/miso/Hosting-21255496/original/ce2b213d-d1b5-4872-8fc5-70490e32c4b0.jpeg?im_w=1200" alt="test"/>
            </div>
            <div>
              <img src="https://a0.muscache.com/im/pictures/b9be91bb-33ed-4bd4-b603-2dc4657962b0.jpg?im_w=720" alt="test"/>
            </div>
          </Carousel>
          <div className="rounded-xl bg-gradient-to-t from-red-200/80 to-orange-200/90 text-orange-900 border-2 border-solid border-orange-900 mt-4">
          <h1 className="text-xl font-bold mb-2 pt-2">Sedona, Arizona</h1>
          <p className="text-sm font-bold mb-4 ml-2 mr-2 px-4">This arts & crafts inspired home has been our personal residence for over 30 years. The Japanese & Southwest inspired exterior is set in an oasis of mature landscaping and lush greenery. In this tranquility, we see an abundance of local wildlife including javalina, quail, and even the occasional bobcat. World class hiking begins minutes from the front door. Gourmet restaurants, spas, galleries, and bike rentals can be found in the nearby Village of Oak Creek.</p>
          <div className="flex justify-center">  
            <Link to="/Sedona" className="block text-sm text-orange-900 border-2 border-solid border-orange-900 bg-red-300 hover:bg-gradient-to-t from-red-300 to-red-200 font-bold py-2 px-4 rounded ml-2 mr-2 mb-4">Sedona Rentals</Link>
          </div>
          </div>
        </div> */}
      </div>
    </React.Fragment>
  );
}

export default PropertyList;