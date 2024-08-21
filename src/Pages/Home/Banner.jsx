

 // Assuming you have additional styles here
 import {Autoplay, Navigation, Pagination,  } from 'swiper/modules';

 import { Swiper, SwiperSlide } from 'swiper/react';

 // Import Swiper styles
 import 'swiper/css';
 import 'swiper/css/navigation';
 import 'swiper/css/pagination';
 import 'swiper/css/scrollbar';
 import banner1 from "../../assets/freestocks-_3Q3tsJ01nc-unsplash.jpg"

 import banner2 from "../../assets/marjan-blan-bl_xM4jrWX8-unsplash.jpg"


 import banner3 from "../../assets/ramon-salinero-Q8Y4xYdbDQA-unsplash.jpg"
 import banner4 from "../../assets/carl-raw-s9rsYu-BYNo-unsplash.jpg"

import { Link } from 'react-router-dom';
// import Typewriter from 'typewriter-effect';
 
const Banner = () => {
 

  return (
    <div className="container mx-auto  relative mt-20 mb-20" >
      
  
  <Swiper   
        pagination={{
          clickable: true,
        }}
        navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
           <SwiperSlide >
        <div className="relative space-y-3">
            <img src={banner1} alt="" className="h-[700px] w-full object-cover  rounded-lg" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black  rounded-lg"></div>
            <div  className="  absolute w-full top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center text-white">
  <div className='text-left ml-4'>
    <h1 className="  text-2xl md:text-7xl w-full  text-white font-extrabold font-oswald mb-4 "> At  <span className=''>Shop</span ><span className='text-[#f18c4e]'>Sift</span>  
    
</h1>
<p className='mt-2 md:mt-5 text-lg md:text-2xl lg:text-4xl w-full  text-gray-200 font-extrabold font-oswald md:mb-4'>Discover top-quality products at unbeatable prices.
 </p>
    {/* <p className=" text-lg font-bold font-oswald mt-2 md:mt-5  mb-3  md:mb-8 text-[#FFA62F] ">
    <Typewriter
  options={{
    strings: ['Nourish Those in Need', 'Spread Love Through Food'],
    autoStart: true,
    loop: true,
  }}
/></p> */}
    <Link  className="inline-block px-6 py-3  text-white font-semibold rounded-full shadow-lg bg-[#55679C] hover:bg-[#404d71] transition duration-300 ease-in"> Explore now</Link>
  </div>
  </div>
          </div>
        </SwiperSlide> 
        <SwiperSlide >
        <div className="relative space-y-3">
            <img src={banner2} alt="" className="h-[700px] w-full object-cover  rounded-lg" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black  rounded-lg"></div>
            <div  className="  absolute w-full top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center text-white">
  <div className='text-left ml-4'>
    <h1 className="  text-2xl md:text-6xl w-full  text-white font-extrabold font-oswald mb-4 "> Discover the Future of Electronics 
    
</h1>
<p className='mt-2 md:mt-5 text-lg md:text-2xl lg:text-4xl w-full  text-gray-200 font-extrabold font-oswald md:mb-4'>Explore our curated collection of cutting-edge gadgets and premium electronics. 
</p>
    {/* <p className=" text-lg font-bold font-oswald mt-2 md:mt-5  mb-3  md:mb-8 text-[#FFA62F] ">
    <Typewriter
  options={{
    strings: ['Nourish Those in Need', 'Spread Love Through Food'],
    autoStart: true,
    loop: true,
  }}
/></p> */}
    <Link   className="inline-block px-6 py-3  text-white font-semibold rounded-full shadow-lg bg-[#55679C] hover:bg-[#404d71] transition duration-300 ease-in"> Explore now</Link>
  </div>
  </div>
          </div>
        </SwiperSlide>
   

        <SwiperSlide >
        <div className="relative space-y-3">
            <img src={banner3} alt="" className="h-[700px] w-full object-cover  rounded-lg" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black  rounded-lg"></div>
            <div  className="  absolute w-full top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center text-white">
  <div className='text-left ml-4'>
    <h1 className="  text-2xl md:text-7xl w-full  text-white font-extrabold font-oswald mb-4 "> Discover Deals on Top Brands
    
</h1>
<p className='mt-2 md:mt-5 text-lg md:text-2xl lg:text-4xl w-full  text-gray-200 font-extrabold font-oswald md:mb-4'>Experience Shopping Like Never Before
 </p>
    {/* <p className=" text-lg font-bold font-oswald mt-2 md:mt-5  mb-3  md:mb-8 text-[#FFA62F] ">
    <Typewriter
  options={{
    strings: ['Nourish Those in Need', 'Spread Love Through Food'],
    autoStart: true,
    loop: true,
  }}
/></p> */}
    <Link className="inline-block px-6 py-3  text-white font-semibold rounded-full shadow-lg bg-[#55679C] hover:bg-[#404d71] transition duration-300 ease-in"> Explore now</Link>
  </div>
  </div>
          </div>
        </SwiperSlide> 
        <SwiperSlide >
        <div className="relative space-y-3">
            <img src={banner4} alt="" className="h-[700px] w-full object-cover  rounded-lg" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black  rounded-lg"></div>
            <div  className="  absolute w-full top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center text-white">
  <div className='text-left ml-4'>
    <h1 className="  text-2xl md:text-7xl w-full  text-white font-extrabold font-oswald mb-4 "> Explore, Shop, Enjoy
    
</h1>
<p className='mt-2 md:mt-5 text-lg md:text-2xl lg:text-4xl w-full  text-gray-200 font-extrabold font-oswald md:mb-4'>Experience Shopping Like Never Before
</p>
    {/* <p className=" text-lg font-bold font-oswald mt-2 md:mt-5  mb-3  md:mb-8 text-[#FFA62F] ">
    <Typewriter
  options={{
    strings: ['Nourish Those in Need', 'Spread Love Through Food'],
    autoStart: true,
    loop: true,
  }}
/></p> */}
    <Link  className="inline-block px-6 py-3  text-white font-semibold rounded-full shadow-lg bg-[#55679C] hover:bg-[#404d71]transition duration-300 ease-in"> Explore now</Link>
  </div>
  </div>
          </div>
        </SwiperSlide>

    
        </Swiper>
        <div className="swiper-button-prev p-8 rounded-full absolute left-0 top-1/2 transform -translate-y-1/2" style={{ backgroundColor: 'black', color: 'white' }}></div>
      <div className="swiper-button-next p-8 rounded-full absolute right-0 top-1/2 transform -translate-y-1/2" style={{ backgroundColor: 'black', color: 'white' }}></div>
    
        </div>
       
   
  );
};

export default Banner;
