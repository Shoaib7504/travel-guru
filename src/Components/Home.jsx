import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import '../Components/Style/SwiperStyle.css';

// import required modules
import { EffectCards } from 'swiper/modules';

import Img1 from "../assets/Sreemongol.png"
import Img2 from "../assets/sundorbon.png"
import Img3 from "../assets/Sajek.png"

const Home = () => {

    return (
        <div className='flex justify-center items-center mt-38.25 w-11/12 mx-auto px-20'>
            <div className='w-1/2'>
                <h1 className='text-white font-bold text-8xl mb-5'>Cox's bazar</h1>
                <p className='text-white mb-8'>Cox's Bazar is a city, fishing port, tourism centre and
                    <br />district headquarters in southeastern Bangladesh. It is <br />
                    famous mostly for its long natural sandy beach, and it ...</p>

                <Link to="/booking" className="px-6 py-2 flex justify-center items-center text-center w-35 gap-2 bg-yellow-500 text-gray-900 text-sm 
                font-semibold rounded hover:bg-yellow-400 transition-colors ">Booking
                    <span><FaArrowRight /></span></Link>
            </div>
            <div className='w-1/3 h-100'>
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={Img1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={Img2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={Img3} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={Img1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={Img2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={Img3} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={Img1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={Img2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={Img3} alt="" /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Home;