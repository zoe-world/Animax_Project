import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";



import SwiperCore, {
  Navigation,Thumbs
} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation,Thumbs]);

export function StillCut({ stLength, tabItem }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  
  return (
    <>
      <h2 className="tit">
        스틸컷 <span>총 {tabItem.still.length}장</span>
      </h2>
      <div className="thum_bx">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={7}
          freeMode={true}
          allowTouchMove={false}
          watchSlidesProgress={true}
          watchSlidesVisibility= {true}
          slideToClickedSlide= {true}
          className="thum_swiper"
        >
          {tabItem.still.map((v,i)=>(
            <SwiperSlide key={i}>
              <img src={v} alt="" />
            </SwiperSlide>
          ))}
        
        </Swiper>
        <Swiper
          spaceBetween={10}
          navigation={true}
          allowTouchMove={false}
          thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
          className="gallery_swiper"
        >
          {tabItem.still.map((v,i)=>(
            <SwiperSlide key={i}>
              <img src={v} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
    </>
  );
}
