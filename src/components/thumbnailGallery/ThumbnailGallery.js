import {useState} from 'react';
import {Navigation,Autoplay,Thumbs} from 'swiper';
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import {FaChevronLeft,FaChevronRight} from 'react-icons/fa';

import PRODUCTS_DATA from 'data/ProductsData';

import './ThumbnailGallery.css';

const ThumbnailGallery=()=>{
    const [thumbsSwiper,setThumbsSwiper]=useState(null);

    return (
        <div className="thumbnail-gallery">
            <Swiper
                modules={[Navigation,Autoplay,Thumbs]}
                loop
                autoplay={{delay: 3000,disableOnInteraction: false}}
                speed={1000}
                navigation={{
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next"
                }}
                thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                grabCursor
            >
                {PRODUCTS_DATA[0].images.map((slider,index)=>(
                    <SwiperSlide key={index}>
                        <img src={slider.url} alt="slider-image" />
                    </SwiperSlide>
                ))}
                <div className="swiper-button-prev"><FaChevronLeft /></div>
                <div className="swiper-button-next"><FaChevronRight /></div>
            </Swiper>

            <Swiper
                modules={[Thumbs]}
                onSwiper={setThumbsSwiper}
                slidesPerView={4}
                spaceBetween={5}
            >
                {PRODUCTS_DATA[0].images.map((slider,index)=>(
                    <SwiperSlide key={index}>
                        <img src={slider.url} alt="slider-image" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default ThumbnailGallery;