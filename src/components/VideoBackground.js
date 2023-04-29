import bg1 from './img/bg1.mp4'


import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles/Swiper.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';


const styles = {
    video: {
        position: 'fixed',
        right: 0,
        bottom: 0,
        minWidth: '100%',
        minHeight: '100%',
        width: 'auto',
        height: 'auto',
        zIndex: '-1',
    },
};

const VideoBackground = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div style={styles.video} >
            <div><img src='https://c1.wallpaperflare.com/preview/553/252/904/eye-shadow-light-face.jpg' className='z-[-1] h-[100vh] w-[150vw] flex md:hidden lg:hidden' /></div>
            <div className="w-[100vw] h-[100vh] hidden md:flex lg:flex">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    // navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper"
                >
                    <SwiperSlide className='blur-sm'><img src='https://vial.com/wp-content/uploads/2022/09/Stocksy_txpe7180ac2JpV300_Medium_3827840.jpg' className='min-w-[100vw] min-h-[100vh]' /></SwiperSlide>
                    {/* <SwiperSlide className='blur-sm'><img src='https://i.dailymail.co.uk/i/newpix/2018/05/02/23/4BC9163C00000578-0-image-a-64_1525301824615.jpg' className='min-w-[100vw] min-h-[100vh]' /></SwiperSlide> */}
                    {/* <SwiperSlide className='blur-sm'><img src='https://vial.com/wp-content/uploads/2022/09/Stocksy_txpe7180ac2JpV300_Medium_3827840.jpg' className='min-w-[100vw] min-h-[100vh]' /></SwiperSlide> */}
                    {/* <SwiperSlide className='blur-sm'><img src='https://previews.123rf.com/images/jpbarcelos/jpbarcelos1803/jpbarcelos180300364/99001087-bright-light-in-macro-shot-of-beautiful-brown-eyes-male-caucasian.jpg' className='min-w-[100vw] min-h-[100vh]' /></SwiperSlide> */}
                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>
            </div>

        </div>


    );
};
export default VideoBackground;