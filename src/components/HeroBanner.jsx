import React, { useEffect, useRef, useState } from "react";
import girlBanner from "../../src/assets/images/carousel/girlBanner.jpg";
import kidBanner from "../../src/assets/images/carousel/kidBanner.png";
import globBanner from "../../src/assets/images/carousel/globBanner.jpg";
import savingBanner from "../../src/assets/images/carousel/savingBanner.jpg";
import visualBanner from "../../src/assets/images/carousel/visualBanner.jpg"; 
import { Link } from "react-router";

const HeroBanner = () => {
  const [activeItem ,setActiveItem] = useState('item1'); //tract
  const timerRef = useRef(null);  // stre interval time
  const AUTO_SLIDE_INTERVAL = 3000; 

  const items = ['item1','item2', 'item3','item4','item5'];
// , 
  const handleDoctCLick = (item)=>{
    setActiveItem(item);

    clearInterval(timerRef.current);
    startAutoSlide();

    
  };
  const goToNextItem = () => {
    const currentIndex = items.indexOf(activeItem);
    const nextIndex = (currentIndex + 1) % items.length;
    const nextItem = items[nextIndex];
    setActiveItem(nextItem);

    window.location.hash = nextItem;
  }

  const startAutoSlide = () => {
    timerRef.current = setInterval(() => {
      goToNextItem();
    }, AUTO_SLIDE_INTERVAL);
  }

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(timerRef.current); // Clean up on component unmount
  }, []);
  


  return (
    <div className="relative"   >
      <div className="carousel w-full ">
        <div id="item1" className="carousel-item w-full  relative">
          <img
            src={girlBanner}
            className="w-full"
          />
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2  w-full">
          <div className="container mx-auto px-4  sm:px-6  lg:px-15 ">
            <div className="  space-y-6 ">
              <h1 className="font-bold text-black md:text-5xl lg:text-7xl ">Get special offer</h1>
              <p className="pb-4  text-2xl  md:text-3xl text-black">With Woori Visa Card alliance partners!</p>
              <Link className="bg-[#d9f5ff]  hover:bg-[#ffffff] text-[#4CB7F2] px-5 py-4 rounded-xl">ស្វែងយល់បន្ថែម</Link>
            </div>
          </div>
          </div>
         
        </div>
        <div id="item2" className="carousel-item w-full relative">
          <img
            src={kidBanner}
            className="w-full"
          />
           <div className="absolute top-1/2 left-0 transform -translate-y-1/2  w-full">
          <div className="container mx-auto px-4  sm:px-6  lg:px-15 ">
            <div className="  space-y-6 ">
              <h1 className="font-bold text-black md:text-5xl lg:text-7xl ">គណនីបឋមវ័យ</h1>
              <p className="pb-4   text-2xl  md:text-3xl text-black">ជម្រើសសន្សំដ៏ឆ្លាតវៃសម្រាប់កូនៗ!</p>
              <Link className="bg-[#d9f5ff]  hover:bg-[#ffffff] text-[#4CB7F2] px-5 py-4 rounded-xl">ស្វែងយល់បន្ថែម</Link>
            </div>
          </div>
          </div>
        </div>
        <div id="item3" className="carousel-item w-full relative">
          <img
            src={globBanner}
            className="w-full"
          />
           <div className="absolute top-1/2 left-0 transform -translate-y-1/2  w-full">
          <div className="container mx-auto px-4  sm:px-6  lg:px-15 ">
            <div className="  space-y-6 ">
              <h1 className="font-bold text-black md:text-5xl lg:text-7xl ">សេវាផ្ទេរប្រាក់អន្តរជាតិ</h1>
              <p className="pb-4   text-2xl  md:text-3xl text-black">រហ័ស ងាយស្រួល កម្រៃសេវាសមរម្យ និងសុវត្ថិភាពខ្ពស់</p>
              <Link className="bg-[#d9f5ff]   hover:bg-[#ffffff] text-[#4CB7F2] px-5 py-4 rounded-xl">ស្វែងយល់បន្ថែម</Link>
            </div>
          </div>
          </div>
        </div>
        <div id="item4" className="carousel-item w-full relative">
          <img
            src={savingBanner}
            className="w-full"
          />
           <div className="absolute top-1/2 left-0 transform -translate-y-1/2  w-full">
          <div className="container mx-auto px-4  sm:px-6  lg:px-15 ">
            <div className="  space-y-6 ">
              <h1 className="font-bold text-black md:text-5xl lg:text-7xl ">គណនីសន្សំផ្លឹស</h1>
              <p className="pb-4   text-2xl  md:text-3xl text-black">
              សន្សំកាន់តែច្រើន អត្រាការប្រាក់កាន់តែច្រើន!</p>
              <Link className="bg-[#d9f5ff]   hover:bg-[#ffffff] text-[#4CB7F2] px-5 py-4 rounded-xl">ស្វែងយល់បន្ថែម</Link>
            </div>
          </div>
          </div>
        </div>
        <div id="item5" className="carousel-item w-full relative">
          <img
            src={visualBanner}
            className="w-full"
          />
           <div className="absolute top-1/2 left-0 transform -translate-y-1/2  w-full">
          <div className="container mx-auto px-4  sm:px-6  lg:px-15 ">
            <div className="  space-y-6 ">
              <h1 className="font-bold text-black md:text-5xl lg:text-7xl ">ប័ណ្ណវីសានិម្មិតអ៊ូរី​</h1>
              <p className="pb-4   text-2xl  md:text-3xl text-black">
              រីករាយ​ជាមួយបទពិសោធន៍ទូទាំងពិភពលោកជាមួយយើង!</p>
              <Link className="bg-[#d9f5ff]   hover:bg-[#ffffff] text-[#4CB7F2] px-5 py-4 rounded-xl">ស្វែងយល់បន្ថែម</Link>
            </div>
          </div>
          </div>
        </div>
       
      </div>
      <div className="flex w-full justify-center gap-2 py-2 absolute bottom-3">

        {
          items.map((item)=>(
            <a key={item} href={`#${item}`} 
            onClick={()=>handleDoctCLick(item)}
            className={`rounded-md w-8 h-1.5 ${
              activeItem === item ? 'bg-[#0B67AC]' :'bg-[#3296d0be] '
            } transition-colors duration-300` } aria-label={`Go to slide ${item.replace('item', '')}`}></a>
          ))
        }
       
        
      </div>
    </div>
  );
};

export default HeroBanner;
